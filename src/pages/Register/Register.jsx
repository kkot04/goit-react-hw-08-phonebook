import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { registerThunk } from '../../store/auth/operation.js';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = data => {
    console.log(data);
    dispatch(registerThunk(data))
      .unwrap()
      .then(res => {
        console.log(res);
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
          required
        />
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
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;