import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { registerThunk } from 'store/auth/operations';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = data => {
        dispatch(registerThunk(data))
          .unwrap()
          .then(res => {
            navigate('/contacts');
            toast.success(`Welcome, ${res.user.name}!`);
          })
          .catch(() => {
            toast.error(`Who are you?`);
          });
      };


      return (
        <div style={{ display: 'flex' }}>
            <form onSubmit={handleSubmit(submit)}>
                <TextField
                  {...register('name')}
                    type="text"
                    label="Enter name"
                    variant="outlined"
                    required/>
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
        <button type="submit" >
          Register</button>
            </form>
        </div>
      )
    
}

export default Register;