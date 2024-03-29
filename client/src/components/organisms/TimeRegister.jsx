import { Icon } from '../commons/CustomIcons'
import { Dropdown, DropdownMenu, DropdownItem, DropdownTrigger } from '../molecules/Dropdown'
import { Button } from '../atoms/Button'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger, ModalHeader } from './Modal'
import { useState } from 'react'

export const TimeRegister = ({ currentId, day, date, startTime, finishTime, activity }) => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <ModalBody>
          <ModalHeader title={'¿Deseas eliminar este registro?'} />
          <ModalContent>
            Hola a todos desde mi modal
          </ModalContent>
          <ModalFooter type={'delete'}/>
        </ModalBody>
      </Modal>
      <div className="bg-container border rounded p-3 grid align-items-center mt-3" id={`time-register-item-${currentId}`}>
        {/* Día */}
        <div className="grid-11 grid-lg-2 d-flex flex-direction-column mt-lg-3">
          <div className="day text-muted small">{day}</div>
          <div className="date">{date}</div>
        </div>

        {/* Menú de opciones */}
        <div className="grid-1 grid-lg-1 items-options-button d-flex align-items-center justify-content-flex-end">
          <Dropdown placement={'right'}>
            <DropdownTrigger>
              <Button variant={'text'} icon={'ellipsis-vertical'} />
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem type={'content'} classes={'mb-1'}>
                <Button classes={'w-100 justify-content-flex-start'} icon={'pen-to-square'} label={'Editar'} onClick={alert} />
              </DropdownItem>
              <DropdownItem type={'content'}>
                <Button classes={'w-100 justify-content-flex-start'} icon={'trash-can'} label={'Eliminar'} onClick={() => setIsModalOpen(true)} />
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
                  <div className="white-space-nowrap">{startTime}</div>
                </div>

                <div className="d-flex align-items-center grid-6 grid-lg-6 flex-direction-lg-column position-relative">
                  <Icon icon="arrow-right-from-bracket" classes="text-danger me-2 me-lg-0 mb-lg-2 position-lg-absolute job-time-icon" />
                  <div className="white-space-nowrap">{finishTime}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Horas Totales */}
        <div className="grid-12 grid-lg-2 mt-lg-3">
          <div className="grid small">
            <div className="grid-4 d-lg-none">Total Horas:</div>
            <div className="grid-8">10.36</div>
          </div>
        </div>
        {/* Actividad Desarrollada */}
        <div className="grid-12 grid-lg-4 mt-lg-3">
          <div className="grid small">
            <div className="grid-4 d-lg-none">Actividad:</div>
            <div className="grid-8 grid-lg-12">{activity}</div>
          </div>
        </div>
      </div>
    </>
  )
}
