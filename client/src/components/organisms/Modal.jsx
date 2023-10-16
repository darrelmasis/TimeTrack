import { useEffect, useRef } from "react";
import { Button } from "../atoms/Button";
import {Icon} from "../commons/icons";

export const Modal = ({ transitionRef, isShow, closeModal, confirmAction, title, children}) => {

  isShow ? document.documentElement.classList.add('overflow-hidden') : document.documentElement.classList.remove('overflow-hidden')
  const modalRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = e => {
      if(modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isShow])
  return (
      <div ref={transitionRef} className="modal-container position-fixed z-index-4">
        <div className={`modal position-absolute ${isShow ? ' show' : ''}`}>

          <div className="container" ref={modalRef}>
            <div className="px-3 pt-1 pb-3 rounded border bg-container ">
              <div className="modal-header d-flex justify-content-space-between">
                <h5>{title}</h5>
                <Button onClickCallBack={closeModal} isSquare={true}><Icon icon="x-mark"></Icon></Button>
              </div>

              <div className="modal-body mb-3">
              {children}
              {}
              </div>

              <div className="modal-footer grid justify-content-flex-end">
                <Button variant="success" className="grid-12 grid-lg-6 py-4" onClickCallBack={closeModal}>No, mantener registro</Button>
                <Button variant="danger" className="grid-12 grid-lg-6 py-4 p-lg-auto" onClickCallBack={confirmAction}>Si, eliminar registro</Button>
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}