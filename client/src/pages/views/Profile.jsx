import { useState } from 'react'
import { usePageTitle } from '../../utils/helpersFunction'
import { Header } from '../../components/organisms/Header'
import { TimeRegister } from '../../components/organisms/TimeRegister'
import { Button } from '../../components/atoms/Button'
import { Modal, ModalTrigger, ModalContent } from '../../components/organisms/Modal'

const Profile = () => {
  usePageTitle('Perfil')

  const [timeRegisterList] = useState([
    {
      id: 1,
      day: 'Domingo',
      date: '17 Sep.',
      startTime: '06:23 AM',
      finishTime: '8:21 PM',
      activity: 'Inventario - CEDIS Estelí & Matagalpa',
    },
    {
      id: 2,
      day: 'Lunes',
      date: '18 Sep.',
      startTime: '06:43 AM',
      finishTime: '8:21 PM',
      activity: 'Inventario - CEDIS Estelí & Matagalpa',
    },
    {
      id: 3,
      day: 'Martes',
      date: '19 Sep.',
      startTime: '07:10 AM',
      finishTime: '8:21 PM',
      activity: 'Inventario - CEDIS Estelí & Matagalpa',
    },
    {
      id: 4,
      day: 'Miércoles',
      date: '19 Sep.',
      startTime: '07:15 AM',
      finishTime: '8:21 PM',
      activity: 'Inventario - CEDIS Estelí & Matagalpa',
    },
    {
      id: 5,
      day: 'Jueves',
      date: '20 Sep.',
      startTime: '07:0 AM',
      finishTime: '8:21 PM',
      activity: 'Inventario - CEDIS Estelí & Matagalpa',
    },
    {
      id: 6,
      day: 'Viernes',
      date: '21 Sep.',
      startTime: '06:09 AM',
      finishTime: '8:21 PM',
      activity: 'Inventario - CEDIS Estelí & Matagalpa',
    },
    {
      id: 7,
      day: 'Sábado',
      date: '22 Sep.',
      startTime: '07:21 AM',
      finishTime: '8:21 PM',
      activity: 'Inventario - CEDIS Estelí & Matagalpa',
    },
  ])

  return (
    <>
      <Header />
      <div className="container mt-3">
        <div className="grid">
          <div className="grid-12 grid-lg-9">
            <div className="mb-2">
              <div className="d-flex align-items-center justify-content-space-between">
                <div className="d-flex align-items-center">
                  <Button variant={'primary'} icon={'arrow-left'} classes="me-2" />
                  <Button variant={'primary'} icon={'arrow-right'} classes="me-2" />
                  <p className="">Semana del 9 al 15 de octubre 2023</p>
                </div>
                <div className="d-flex align-items-center ">
                  <Modal>
                    <ModalTrigger>
                      <Button variant="success" icon={'plus'} label={'Nuevo'}/>
                    </ModalTrigger>
                    <ModalContent>
                      <h1 className="p-3">
                        Hola Mundo
                      </h1>
                    </ModalContent>
                  </Modal>
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
            {timeRegisterList.map(({ id, day, date, startTime, finishTime, activity }) => (
              <TimeRegister key={id} day={day} date={date} startTime={startTime} finishTime={finishTime} activity={activity} currentId={id}></TimeRegister>
            ))}
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
