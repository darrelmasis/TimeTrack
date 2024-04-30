import { useState, useEffect } from 'react'
import { Icon } from '../commons/CustomIcons'
import { Dropdown, DropdownMenu, DropdownItem, DropdownTrigger } from '../molecules/Dropdown'
import { Button } from '../atoms/Button'
import { Modal, ModalBody, ModalContent, ModalHeader, ModalFooter } from './Modal'
import axios from 'axios'
import moment from '../../../../momentConfig'

export const TimePunches = ({ employee_id, isPostData }) => {

  // 1. Obtener los datos de la consulta a la BD
  const [timePunches, setTimePunches] = useState([])

  useEffect(() => {
    axios.post('http://localhost:3000/getTimePunches', { employee_id })
      .then(response => {
        // asignamos la data de la respuesta a la variable timePunches
        setTimePunches(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [isPostData])

  const [iseditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const getTotalWorkTime = (clockIn, clockOut) => {
    const hours = moment.duration(moment(clockOut, 'HH:mm:ss').diff(moment(clockIn, 'HH:mm:ss'))).hours();
    const mins = moment.duration(moment(clockOut, 'HH:mm:ss').diff(moment(clockIn, 'HH:mm:ss'))).minutes();
    return `${hours}h ${mins}m`;
  }
  return (
    <>
      <Modal isOpen={iseditModalOpen} setIsOpen={setIsEditModalOpen}>
        <ModalBody>
          <ModalHeader title={'Editar registro'} />
          <ModalContent>editando...</ModalContent>
          <ModalFooter type={'edit'} />
        </ModalBody>
      </Modal>

      <Modal isOpen={isDeleteModalOpen} setIsOpen={setIsDeleteModalOpen}>
        <ModalBody>
          <ModalHeader title={'¿Deseas eliminar este registro?'} />
          <ModalContent>Hola a todos desde mi modal</ModalContent>
          <ModalFooter type={'delete'} />
        </ModalBody>
      </Modal>
      <div className="d-flex flex-direction-column gap-1">
        {
          timePunches.map(({ time_punch_id, punch_date, clock_in, clock_out, activity }) => (

            <div className="bg-container border rounded p-3 grid align-items-center" key={time_punch_id}>
              {/* Día */}
              <div className="grid-11 grid-lg-2 d-flex flex-direction-column">
                <div className="day text-muted small">{moment(punch_date).format('dddd')}</div>
                <div className="date">{moment(punch_date).format('DD MMMM')}</div>
              </div>

              {/* Menú de opciones */}
              <div className="grid-1 grid-lg-1 items-options-button d-flex align-items-center justify-content-flex-end">
                <Dropdown placement={'right'}>
                  <DropdownTrigger>
                    <Button variant={'text'} icon={'ellipsis-vertical'} />
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem type={'content'} classes={'mb-1'}>
                      <Button classes={'w-100 justify-content-flex-start'} icon={'pen-to-square'} label={'Editar'} onClick={() => setIsEditModalOpen(true)} />
                    </DropdownItem>
                    <DropdownItem type={'content'}>
                      <Button classes={'w-100 justify-content-flex-start'} icon={'trash-can'} label={'Eliminar'} onClick={() => setIsDeleteModalOpen(true)} />
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              {/* Jornada */}
              <div className="grid-12 grid-lg-3 mt-lg-3">
                <div className="grid small">
                  <div className="d-lg-none grid-4">Jornada:</div>
                  <div className="grid-8 d-flex justify-content-lg-flex-start">
                    <div className="grid z-index-1">
                      <div className="d-flex align-items-center grid-6 grid-lg-6 flex-direction-lg-column me-lg-3 position-relative">
                        <Icon icon="arrow-right-to-bracket" classes="text-success me-2 me-lg-0 mb-lg-2 position-lg-absolute job-time-icon" />
                        <div className="white-space-nowrap">{moment(clock_in, 'HH:mm:ss').format('hh:mm A')}</div>
                      </div>

                      <div className="d-flex align-items-center grid-6 grid-lg-6 flex-direction-lg-column position-relative">
                        <Icon icon="arrow-right-from-bracket" classes="text-warning me-2 me-lg-0 mb-lg-2 position-lg-absolute job-time-icon" />
                        <div className="white-space-nowrap">{moment(clock_out, 'HH:mm:ss').format('hh:mm A')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Horas Totales */}
              <div className="grid-12 grid-lg-3 mt-lg-3">
                <div className="grid small text-lg-center">
                  <div className="grid-4 d-lg-none">Tiempo Trabajado:</div>
                  <div className="grid-8 grid-lg-12 text-lg-center">
                    {
                     getTotalWorkTime(clock_in, clock_out)
                    }
                  </div>
                </div>
              </div>
              {/* Actividad Desarrollada */}
              <div className="grid-12 grid-lg-3 mt-lg-3">
                <div className="grid small">
                  <div className="grid-4 d-lg-none">Actividad:</div>
                  <div className="grid-8 grid-lg-12">{activity}</div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}