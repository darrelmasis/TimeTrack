import { createContext, useContext, useState } from 'react'
import classNames from 'classnames'
import { Button } from '../atoms/Button'
import { useFloating, offset, useDismiss, useInteractions, FloatingOverlay, useTransitionStyles } from '@floating-ui/react'

const ModalContext = createContext()

const useModalContext = () => useContext(ModalContext)

const Modal = ({ children, classes }) => {
  const componentClasses = classNames('modal', classes && classes)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,

    middleware: [
      offset(({ rects }) => {
        return -rects.reference.height / 2 - rects.floating.height / 2 - 100
      }),
    ],
  })

  const dismiss = useDismiss(context, {})
  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss])

  const contextValue = {
    openModal,
    closeModal,
    refs,
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
  const componentClasses = classNames('modal-close')
  const { closeModal } = useModalContext()
  return <Button size={'small'} variant={'text'} classes={componentClasses} onClick={closeModal} icon={'x-mark'} />
}

const ModalContent = ({ children, classes }) => {
  const componentClasses = classNames('modal-content bg-container border rounded position-relative', classes && classes)
  const { getFloatingProps, getReferenceProps, context, refs } = useModalContext()
  const { isMounted, styles } = useTransitionStyles(context, {
    initial: {
      marginBottom: '16px',
    },
  })

  const { styles: overlayStyles } = useTransitionStyles(context, {})

  return (
    isMounted && (
      <FloatingOverlay className="modal-overlay" lockScroll style={{ ...overlayStyles }}>
        <div className="container" ref={refs.setFloating} style={styles} {...getFloatingProps()}>
          <div className={componentClasses} ref={refs.setReference} {...getReferenceProps()}>
            <ModalClose></ModalClose>
            {children}
          </div>
        </div>
      </FloatingOverlay>
    )
  )
}

export { Modal, ModalTrigger, ModalContent }
