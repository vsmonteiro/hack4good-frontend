import React, { useState } from 'react'
import './styles.css'
import { TextField } from '@material-ui/core'

export default function CreateCatador(){
  const [name, setName] = useState('')

  return(
    <div className="form-container">
    <form>
    <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='searchbarInput'
          id='outlined-basic'
          label='Pesquise aqui'
          variant='outlined'
        />
    </form>
  </div>
  )
}