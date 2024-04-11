import React from 'react'
import { Button } from '../ui/button'
import './FormButton.css'

function FormButton( {onClick} ) {
  return (
    <section className='register-button'>
      <Button id='form-button' onClick={onClick}>Register as a driver</Button>
    </section>

  )
}

export default FormButton