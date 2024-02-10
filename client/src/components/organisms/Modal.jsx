import React, { createContext, useContext, useState } from 'react'
import classNames from 'classnames'
import { Button } from '../atoms/Button'
import { Icon } from '../commons/CustomIcons'
import { useFloating, offset, useDismiss, useInteractions, FloatingOverlay, useTransitionStyles, useClick, useTransitionStatus } from '@floating-ui/react'

const ModalContext = createContext()
export const useModalContext = () => useContext(ModalContext)

const Modal = ({ children, classes }) => {
  const componentClasses = classNames('modal', classes && classes)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)


  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,

    middleware: [offset(({ rects }) => {
      return (
        -rects.reference.height / 2 - rects.floating.height / 2 - 100
      );
    })],
  })


  const dismiss = useDismiss(context, {})
  const click = useClick(context, {})
  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss, click])

  const contextValue = {
    openModal,
    closeModal,
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    context,
    isOpen,
  }

  return (
    <ModalContext.Provider value={contextValue}>
      <div className={componentClasses}>{children}</div>
    </ModalContext.Provider>
  )
}

const ModalTrigger = ({ children, classes }) => {
  const componentClasses = classNames('modal-trigger', classes && classes)
  const { openModal, refs, getReferenceProps } = useModalContext()
  return (
    <div className={componentClasses} ref={refs.setReference} {...getReferenceProps()} onClick={openModal}>
      {children}
    </div>
  )
}

const ModalClose = () => {
  const componentClasses = classNames('rounded-circle modal-close')
  const { closeModal} = useModalContext()
  return <Button size={'small'} variant={'danger'} classes={componentClasses} onClick={closeModal}><Icon icon={'x-mark'}></Icon></Button>
}

const ModalContent = ({ children, classes }) => {
  const componentClasses = classNames('modal-content bg-container border rounded position-relative', classes && classes)
  const { floatingStyles, getFloatingProps, getReferenceProps, context, refs } = useModalContext()
  const { isMounted, styles } = useTransitionStyles(context, {
    initial: {
      marginBottom: '16px'
    }
  })

  const { styles: overlayStyles } = useTransitionStyles(context, {})

  const handleClick = (event) => {
    // Detener la propagación del evento de clic para evitar que llegue al contenedor del modal
    event.stopPropagation();
  };

  return (
    isMounted && (
      <FloatingOverlay className='modal-overlay' ref={refs.setReference} {...getReferenceProps()} lockScroll style={{ ...overlayStyles}}>
        <div className="container">
          <div className={componentClasses} ref={refs.setFloating} style={{ floatingStyles, ...styles }} onClick={handleClick} {...getFloatingProps()}>
            <ModalClose></ModalClose>
            {children}
          </div>
        </div>
      </FloatingOverlay>
    )
  )
}

export { Modal, ModalTrigger, ModalContent }
