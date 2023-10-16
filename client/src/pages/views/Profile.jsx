import React, { useEffect, useRef, useState } from "react"
import { useUpdatePageTitle } from "../../App"
import { Header } from "../../components/organisms/header"
import { Icon } from "../../components/commons/icons"
import { TimeRegister } from "../../components/organisms/TimeRegister"
import { Button } from "../../components/atoms/Button"
import { Modal } from "../../components/organisms/Modal"
import { CSSTransition } from "react-transition-group"

const Profile = () => {
  useUpdatePageTitle("Perfil")
  const dpr = window.devicePixelRatio
  const [timeRegisterList, setTimeRegisterList] = useState([
    { id: 1, day: "Domingo", date: "17 Sep.", startTime: "06:23 AM", finishTime: "8:21 PM", activity: "Inventario - CEDIS Estelí & Matagalpa" },
    { id: 2, day: "Lunes", date: "18 Sep.", startTime: "06:43 AM", finishTime: "8:21 PM", activity: "Inventario - CEDIS Estelí & Matagalpa" },
    { id: 3, day: "Martes", date: "19 Sep.", startTime: "07:10 AM", finishTime: "8:21 PM", activity: "Inventario - CEDIS Estelí & Matagalpa" },
    { id: 4, day: "Miércoles", date: "19 Sep.", startTime: "07:15 AM", finishTime: "8:21 PM", activity: "Inventario - CEDIS Estelí & Matagalpa" },
    { id: 5, day: "Jueves", date: "20 Sep.", startTime: "07:0 AM", finishTime: "8:21 PM", activity: "Inventario - CEDIS Estelí & Matagalpa" },
    { id: 6, day: "Viernes", date: "21 Sep.", startTime: "06:09 AM", finishTime: "8:21 PM", activity: "Inventario - CEDIS Estelí & Matagalpa" },
    { id: 7, day: "Sábado", date: "22 Sep.", startTime: "07:21 AM", finishTime: "8:21 PM", activity: "Inventario - CEDIS Estelí & Matagalpa" },
  ])


  const [isModalShow, setIsModalShow] = useState(false)
  const [idToDelete, setIdToDelete] = useState(null);

  const modalRef = useRef(null)

  const openModal = (id) => {
    setIsModalShow(true)
    setIdToDelete(id);
  }

  const closeModal = () => {
    setIsModalShow(false)
    setIdToDelete(null);
  }

  const handleModalConfirmation = () => {
    if (idToDelete) {
      deleteOption(idToDelete);
      closeModal();
    }
  }



  const deleteOption = (id) => {
    // Filtrar la lista para eliminar el elemento con el ID correspondiente
    const updatedList = timeRegisterList.filter((item) => item.id !== id)
    const currentItem = document.getElementById('time-register-item-' + id)

    currentItem.classList.add('hide-item')
    setTimeout(() => {
      setTimeRegisterList(updatedList);
    }, 1000);
  }


  return (
    <>
      <Header />
      <CSSTransition nodeRef={modalRef} in={isModalShow} timeout={300} classNames="open" unmountOnExit>
        <Modal transitionRef={modalRef} isShow={isModalShow} closeModal={closeModal} confirmAction={handleModalConfirmation} title="Confirmación">¿Estás seguro de que deseas eliminar este registro?</Modal>
      </CSSTransition>
      <div className="container mt-3">
        <div className="grid">
          <div className="grid-12 grid-lg-9">

            <div className="mb-2">
              <div className="d-flex align-items-center justify-content-space-between">
                <div className="d-flex align-items-center">
                  <Button variant="ghost-primary" isSquare={true} className=""><Icon icon="arrow-left" /></Button>
                  <Button variant="ghost-primary" isSquare={true}><Icon icon="arrow-right" /></Button>
                  <p className="ps-3">Semana del 9 al 15 de octubre 2023</p>
                </div>
                <div className="d-flex align-items-center position-fixed bg-transparent-lg position-lg-static add-button-container z-index-3">
                  <span className="me-2 d-none d-lg-block">Agregar Marcación</span>
                  <Button variant="success" isSquare={true} size="large" className="rounded-circle">
                    <Icon icon="plus"></Icon>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mb-4">Registro de marcaciones y viáticos</div>
            <div className="mt-3 mb-2 text-muted pb-1 grid d-lg-grid d-none mx-3">
              <div className="grid-2 small">Día</div>
              <div className="grid-3 small">Jornada Laboral</div>
              <div className="grid-2 small">Horas Totales</div>
              <div className="grid-5 small">Actividad Desarrollada</div>
            </div>
            {
              timeRegisterList.map(({ id, day, date, startTime, finishTime, activity }) => (
                <TimeRegister key={id} day={day} date={date} startTime={startTime} finishTime={finishTime} activity={activity} deleteOption={() => openModal(id)} currentId={id}></TimeRegister>
              ))
            }
          </div>
          <div className="grid-12 grid-lg-3">
            {/* <div className="bg-container p-3 rounded border">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam animi fugit maxime minima reiciendis doloribus dolor dolores qui numquam impedit similique autem, eius dicta nobis eveniet odio quasi cum sunt?
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile