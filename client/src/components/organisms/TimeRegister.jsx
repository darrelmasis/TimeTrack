import {Icon} from "../commons/icons"
import { Dropdown } from "../molecules/Dropdown"
import { Button } from "../atoms/Button"
import { useState } from "react"

export const TimeRegister = ({currentId, day, date, startTime, finishTime, activity, deleteOption }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  


  const settingsMenuButton = (
    <Button variant="" isSquare={true} onClickCallBack={toggleDropdown}><Icon icon="ellipsis-vertical" fixedWidth /></Button>
  )

  return (

      <div className="bg-container border rounded p-3 grid align-items-center mt-3" id={`time-register-item-${currentId}`}>

        {/* Día */}
        <div className="grid-11 grid-lg-2 d-flex flex-direction-column mt-lg-3">
          <div className="day text-muted small">{day}</div>
          <div className="date">{date}</div>
        </div>

        {/* Menú de opciones */}
        <div className="grid-1 grid-lg-1 items-options-button d-flex align-items-center justify-content-flex-end">
          <Dropdown toggleButton={settingsMenuButton} isOpen={isOpen} setIsOpen={setIsOpen} size="small" position="left">
            <div className="mt-2">
              <div className="dropdown-item p-0 mb-2">
                <Button variant="ghost-success" size="medium" className="w-100 border-none">
                  <Icon icon="pen-to-square" classes="me-2"></Icon>
                  <span>Editar</span>
                </Button>
              </div>
              <div className="dropdown-item p-0">
                <Button variant="ghost-danger" size="medium" className="w-100 border-none" onClickCallBack={deleteOption}>
                  <Icon icon="trash-can" classes="me-2"></Icon>
                  <span>Eliminar</span>
                </Button>
              </div>
            </div>
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
  )
}
