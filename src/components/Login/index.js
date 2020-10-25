import React, { useState } from "react";
import "./styles.css";
import { FormControl, Button, TextField } from "@material-ui/core";
import { useHistory } from 'react-router-dom'

export default function Login() {
  const history = useHistory()
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault()
    const response = await fetch('http://localhost:3333/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username: user,
        senha: password
      })
    })

    const data = await response.json()

    if(data?.id){
      localStorage.setItem('id', data.id)
      history.push('/', data)
    }
  }

  return (
    <div className='login-container'>
      <form className="login-form">
        <h2>Login </h2>
        <FormControl>
          <TextField
            value={user}
            onChange={(e) => setUser(e.target.value)}
            variant='outlined'
            color='primary'
            label='Name'
            id='name'
          />
        </FormControl>

        <FormControl>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant='outlined'
            color='primary'
            label='Password'
            id='password'
            type='password'
          />
        </FormControl>

        <Button
          type='submit'
          variant='contained'
          onClick={handleLogin}
          style={{ backgroundColor: "#00503c", color: "#FFF", fontWeight: "bold" }}
        >
          Login
        </Button>
      </form>
    </div>
  );
}
