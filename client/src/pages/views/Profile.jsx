import { useEffect, useState } from 'react'
import { usePageTitle, isOnline } from '../../utils/helpersFunction'
import { Header } from '../../components/organisms/Header'
import { Button } from '../../components/atoms/Button'
import { Modal, ModalHeader, ModalFooter, ModalBody, ModalContent } from '../../components/organisms/Modal'
import { Form, FormItem, FormControl, FormLabel, FormMessage } from '../../components/atoms/Form'
import axios from 'axios'
import moment from '../../../../momentConfig'
import { TimePunches } from '../../components/organisms/TimePunches'

const now = moment()

const Profile = () => {
  usePageTitle('Perfil')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [touchedFields, setTouchedFields] = useState({})
  const [resultData, setResultData] = useState([])
  const [formErrors, setFormErrors] = useState({})

  const employee_id = 1
  const [values, setValues] = useState({
    punch_date: now.format('YYYY-MM-DD'),
    clockIn: '',
    clockOut: '',
    activity: '',
  })

  const { punch_date, clockIn, clockOut, activity } = values

  const handleSubmit = async () => {
    try {
      const result = await axios.post(
        'http://localhost:3000/timepunches',
        { employee_id, punch_date, clockIn, clockOut, activity },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      setIsFormSubmitted(true)
      setResultData(result)

      if (result.data.errors) {
        // handleBlur()
        setFormErrors(result.data.errors)
        console.log(touchedFields)
      } else {

        resetForm()
      }
    } catch (error) {
      console.error(error.response.data)
    }
  }

  const resetForm = () => {
    const newValues = {}
    Object.keys(values).forEach(key => {
      newValues[key] = key === 'punch_date' ? now.format('YYYY-MM-DD') : ''
    })

    setValues(newValues)

    const resetTouchedFields = {};
    Object.keys(touchedFields).forEach(key => {
      resetTouchedFields[key] = false;
    });

    setTouchedFields(resetTouchedFields)
  }

  const handleChange = e => {
    const { target } = e
    const { name, value } = target

    const newValues = {
      ...values,
      [name]: value,
    }
    setValues(newValues)

    // Marcar el campo como tocado cuando cambia su valor
    setTouchedFields({
      ...touchedFields,
      [name]: true,
    })

    console.log(touchedFields)
  }

  const handleBlur = (e) => {
    const { target } = e;
    const { name } = target;

    setTouchedFields({
      ...touchedFields,
      [name]: true,
    });

    validateFormData(name)
  };

  const handleFocus = e => {
    const { target } = e;
    const { name } = target;

    setTouchedFields({
      ...touchedFields,
      [name]: false,
    });

    validateFormData(name)
  }

  const almuerzo = "400.00"


  useEffect(() => {
    isModalOpen && validateFormData()
  }, [values])

  const validateFormData = field => {
    let errors = {};


    if ((field === 'activity' && values.activity.trim() === '') && touchedFields.activity ) {
      errors.activity = 'Se requiere una descripción de la actividad';
    }

    if ((field === 'clockIn' && values.clockIn.trim() === '') && touchedFields.clockIn ) {
      errors.clockIn = 'Se requiere una hora de entrada';
    }

    if ((field === 'clockOut' && values.clockOut.trim() === '') && touchedFields.clockOut) {
      errors.clockOut = 'Se requiere una hora de salida';
    }

    if (values.punch_date.trim() === '') {
      errors.date = 'Se requiere una fecha';
    }

    setFormErrors(errors);
  };


  return (
    <div>
      <Header />
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <ModalBody>
          <ModalHeader title={'Registra una nueva actividad'} />
          <ModalContent>
            <Form onSubmit={e => handleSubmit(e)} id="addNewActivity">
              <div className="grid mb-3">
                <div className="grid-12 grid-md-4">
                  <FormItem name={'punch_date'} id={'punchDateInput'}>
                    <FormLabel>Fecha</FormLabel>
                    <FormControl type="date" value={punch_date} onChange={handleChange} onBlur={handleBlur} onFocus={ handleFocus} />
                    <FormMessage className={'small text-danger'}>{formErrors.date && formErrors.date}</FormMessage>
                  </FormItem>
                </div>
                <div className="grid-6 grid-md-4">
                  <FormItem name={'clockIn'} id={'clockInInput'}>
                    <FormLabel>Entrada</FormLabel>
                    <FormControl type="time" value={clockIn} onChange={handleChange} onBlur={handleBlur} onFocus={ handleFocus}/>
                    <FormMessage className={'small text-danger'}>{formErrors.clockIn && formErrors.clockIn}</FormMessage>
                  </FormItem>
                </div>
                <div className="grid-6 grid-md-4">
                  <FormItem name={'clockOut'} id={'clockOutInput'}>
                    <FormLabel>Salida</FormLabel>
                    <FormControl type="time" value={clockOut} onChange={handleChange} onBlur={handleBlur} onFocus={ handleFocus}/>
                    <FormMessage className={'small text-danger'}>{formErrors.clockOut && formErrors.clockOut}</FormMessage>
                  </FormItem>
                </div>
              </div>
              <FormItem name={'activity'} id={'activityInput'}>
                <FormLabel>Actividad Desarrollada</FormLabel>
                <FormControl type="text" value={activity} autoComplete='off' placeholder="Inventario - CEDIS León" onChange={handleChange} onBlur={handleBlur} onFocus={ handleFocus}/>
                <FormMessage className={'small text-danger'}>{formErrors.activity && formErrors.activity}</FormMessage>
              </FormItem>
            </Form>
          </ModalContent>
          <ModalFooter type={'save'} action={{ handleSubmit }} formId={'addNewActivity'} />
        </ModalBody>
      </Modal>
      <div className="container mt-3" >
        <div className="mb-4">Registro de marcaciones y viáticos</div>
        <div className="grid">
          <div className="grid-12">
            <div className="mb-5 bg-gray p-3 ">
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
          </div>
        </div>
        <div className="grid">
          <div className="grid-12 grid-lg-9 grid">
            <div className="grid-12">
              {<TimePunches employee_id={1} isPostData={isFormSubmitted} />}
            </div>
          </div>
          <div className="grid-12 grid-lg-3">
            <div className="text-center sticky d-flex flex-direction-column gap-1">
              <div className="grid mb-3">
                <div className='grid-12 text-muted mb-3 align-items-flex-end'>Tiempo Extraordinario</div>
                <div className="grid-12 bg-container rounded border p-3">
                  <div className="d-flex flex-direction-column gap-1">
                    <div className="grid">
                      <div className="grid-6 text-start">Trabajado:</div>
                      <div className="grid-6 small text-muted text-end">135h 30m</div>
                    </div>
                    <div className="grid">
                      <div className="grid-8 text-start">Programado:</div>
                      <div className="grid-4 small text-muted text-end">96h 0m</div>
                    </div>
                    <div className="grid">
                      <div className="grid-3">Pausas:</div>
                      <div className="grid-9 small text-muted text-end">(11h 0m)</div>
                    </div>
                    <div className="grid">
                      <div className="grid-3">Aucensias:</div>
                      <div className="grid-9 small text-end text-danger">(5h 0m)</div>
                    </div>
                  </div>
                  <div className="border-bottom my-3"></div>
                  <div className="grid">
                    <div className="grid-3">Extra:</div>
                    <div className="grid-9 text-primary text-end">23h 30m</div>
                  </div>
                </div>
              </div>
              <div className="grid">
                <div className='grid-12 text-muted mb-2'>Viáticos de alimentación</div>
                <div className="grid-12 bg-container rounded border p-3">
                  <div className="d-flex flex-direction-column gap-1">
                    <div className="grid">
                      <div className="grid-3">Desayuno:</div>
                      <div className="grid-9 small text-muted text-end">C$ 840.00</div>
                    </div>
                    <div className="grid">
                      <div className="grid-3">Almuerzo:</div>
                      <div className="grid-9 small text-muted text-end">{`C$ ${almuerzo}`}</div>
                    </div>
                    <div className="grid">
                      <div className="grid-3">Cena:</div>
                      <div className="grid-9 small text-muted text-end">C$ 420.00</div>
                    </div>
                  </div>
                  <div className="border-bottom my-3"></div>
                  <div className="grid">
                    <div className="grid-3">Total:</div>
                    <div className="grid-9 text-success text-end">C$ 1760.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
