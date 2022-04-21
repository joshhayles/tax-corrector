import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {useState} from 'react'
import { useHistory } from 'react-router-dom'


function Copyright({props}) {

  return (
    <Typography m={1} pt={1} variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Tax Corrector
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login({onLogin, setShowLogin}) {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [errors, setErrors] = useState([])
let history = useHistory()
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      username,
      password
    }
    
    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user)
          history.push("/dashboard")
        })
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }  
 

  return (
    <>
        <Box
          sx={{
            //marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 12, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h3">
            Login
          </Typography>

          <Box component="form" onSubmit={handleSubmit} 
          //noValidate 
          sx={{ mt: 4 }}>
            <TextField
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username ..."
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember Me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login

            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link onClick={() => setShowLogin(false)} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </>
  );
}