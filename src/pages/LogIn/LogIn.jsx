import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginThunk } from 'store/auth/operation';
import { Button, TextField } from '@mui/material';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = data => {
    console.log(data);
    dispatch(loginThunk(data))
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
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;