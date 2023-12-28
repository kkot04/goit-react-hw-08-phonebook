import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { logInThunk } from 'store/auth/operations'
import { TextField } from '@mui/material';


export const LogIn = () => {
    const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(logInThunk(data))
      .unwrap()
      .then(res => {
        navigate('/contacts');
        toast.success(`Welcome, ${res.user.name}!`);
      })
      .catch(() => {
        toast.error(`Who are you?`);
      });
    }
    return (
        <div style={{ display: 'flex' }}>
          <form onSubmit={handleSubmit(submit)}>
            <TextField
              {...register('email')}
              type="email"
              label="Enter email"
              variant="outlined"
              required
            />
            <TextField
              {...register('password')}
              type="password"
              label="Enter password"
              variant="outlined"
              required
            />
            <button type="submit">
              Login
            </button>
          </form>
        </div>
      );
    };
    
    export default LogIn
