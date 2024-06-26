import { createContext, useContext } from 'react'
import classNames from 'classnames'
import { Button } from '../atoms/Button'
import { useFloating, useDismiss, useInteractions, FloatingOverlay, useTransitionStyles } from '@floating-ui/react'

const ModalContext = createContext()

const useModalContext = () => useContext(ModalContext)

const Modal = ({ children, classes, isOpen, setIsOpen }) => {
  const componentClasses = classNames('modal', classes && classes)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  })
  const { isMounted } = useTransitionStyles(context)

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
    isMounted && (
      <ModalContext.Provider value={contextValue}>
        <div className={componentClasses}>{children}</div>
      </ModalContext.Provider>
    )
  )
}

const ModalTrigger = ({ children, classes }) => {
  const componentClasses = classNames('modal-trigger', classes && classes)
  const { openModal } = useModalContext()
  return (
    <div className={componentClasses} onClick={openModal}>
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
  const componentClasses = classNames('modal-content ', classes && classes)

  return <div className={componentClasses}>{children}</div>
}

const ModalHeader = ({ title }) => {
  const componentClasses = classNames('modal-header mt-0')
  return <h4 className={componentClasses}>{title}</h4>
}

const ModalFooter = ({ action = {}, type, formId }) => {
  const componentClasses = classNames('modal-footer')
  const { closeModal } = useModalContext()

  const { success, cancel } = action

  const handleSuccess = () => {
    success && success()
    // closeModal()
  }

  const handleCancel = () => {
    cancel && cancel()
    closeModal()
  }

  const contentType = {
    delete: (
      <>
        <Button variant={''} label={'Cancelar'} onClick={handleCancel} form />
        <Button type="submit" form={formId} variant={'danger'} label={'Eliminar'} onClick={handleSuccess} autoFocus={true} />
      </>
    ),
    save: (
      <>
        <Button variant={''} label={'Cancelar'} onClick={handleCancel} />
        <Button type="submit" form={formId} variant={'success'} label={'Guardar'} onClick={handleSuccess} autoFocus={true} />
      </>
    ),
    edit: (
      <>
        <Button variant={''} label={'Cancelar'} onClick={handleCancel} />
        <Button type="submit" form={formId} variant={'success'} label={'Guardar Cambios'} onClick={handleSuccess} autoFocus={true} />
      </>
    ),
    info: (
      <div className="w-100 text-center">
        <Button variant={'primary'} label={'Aceptar'} onClick={handleSuccess} autoFocus={true} />
      </div>
    ),
  }

  const createModalFooter = content => {
    return <div className={componentClasses}>{content}</div>
  }

  return createModalFooter(contentType[type] || contentType.info)
}

const ModalBody = ({ children }) => {
  const componentClasses = classNames('modal-body bg-container border rounded p-3 position-relative')
  const { getFloatingProps, getReferenceProps, context, refs } = useModalContext()
  const { isMounted, styles } = useTransitionStyles(context, {
    initial: {
      marginTop: `${76 - 16}px`,
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

export { Modal, ModalHeader, ModalFooter, ModalBody, ModalTrigger, ModalContent }
