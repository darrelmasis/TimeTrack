import { useState } from 'react'
import { usePageTitle } from '../../utils/helpersFunction'
import { Header } from '../../components/organisms/Header'
import { TimeRegister } from '../../components/organisms/TimeRegister'
import { Button } from '../../components/atoms/Button'
import { Modal, ModalHeader, ModalFooter, ModalBody, ModalTrigger, ModalContent } from '../../components/organisms/Modal'
import * as Form from '../../components/atoms/Form'

const Profile = () => {
  usePageTitle('Perfil')
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  const [values, setValues] = useState({
    clockIn: '',
    clockOut: '',
    activity: '',
  })

  const { clockIn, clockOut, activity } = values

  const handleSubmit = e => {
    e.preventDefault()
    console.log(values)
  }

  const handleChange = e => {
    const { target } = e
    const { name, value } = target

    const newValues = {
      ...values,
      [name]: value,
    }

    setValues(newValues)
    console.log(values)
  }

  return (
    <>
      <Header />
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <ModalBody>
          <ModalHeader title={'Registra una nueva actividad'} />
          <ModalContent>
            <form onSubmit={handleSubmit} className='form'>
              <div className="grid mb-3">
                <div className="grid-6">
                  <label htmlFor="clockIn" className='form-label'>Entrada</label>
                  <input type="time" className="form-control" name="clockIn" id="clockIn" value={clockIn} onChange={handleChange} />
                </div>
                <div className="grid-6">
                  <label htmlFor="clockOut" className='form-label'>Salida</label>
                  <input type="time" className="form-control" name="clockOut" id="clockOut" value={clockOut} onChange={handleChange} />
                </div>
              </div>
              {/* <label htmlFor="activity" className='form-label'>Actividad Desarrollada</label>
                          <input
                            type="text"
                            autoComplete="off"
                            className="form-control"
                            name="activity"
                            id="activity"
                            value={activity}
                            onChange={handleChange} placeholder='Inventario - CEDIS León' /> */}

              <Form.FormInput label='Actividad Desarrollada' />
            </form>
          </ModalContent>
          <ModalFooter />
        </ModalBody>
      </Modal>
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

                  <Button variant="success" icon={'plus'} label={'Nuevo'} onClick={() => setIsModalOpen(true)} />

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
