import React from 'react'
import { Button } from '../ui/button'
import './FormButton.css'

function FormButton( {onClick} ) {
  return (
    <Button id='form-button' onClick={onClick}>Register as a driver</Button>

  )
}

export default FormButton