import { Button } from '../ui/button'
import './FormButton.css'

type Props = {
  onClick: () => void
}

function FormButton({onClick}: Props) {
  return (
    <section className='register-button'>
      <Button id='form-button' onClick={onClick}>Register as a driver</Button>
    </section>

  )
}

export default FormButton