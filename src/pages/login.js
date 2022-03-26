import React, { useState, useEffect } from 'react';

import {
  Grid,
  Box,
  TextField,
  Typography,
  FormControl,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router';
import image from '../images/mountains.jpg';

const Login = ({ isUser }) => {
  const navigate = useNavigate();
  const EMAIL_REGEX = new RegExp(/[a-zA-Z0-9\.\-\_]+[@]+[a-z]*[\.][a-z]{2,3}/g);
  const PHONE_REGEX = new RegExp(/[0-9]{2}[0-9]{10,}/g);
  const intialValues = {
    email: '',
    password: '',
    phone: '',
  };
  const [values, setValues] = useState(intialValues);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;

    values[name] = value;
    setValues({ ...values });

    if (errors.hasOwnProperty(name)) {
      delete errors[name];
      setErrors(errors);
    }
  };

  useEffect(() => {
    localStorage.clear();
  });
  const validate = (data) => {
    const ERROR_KEY = {};
    for (let key in data) {
      const value = data[key];
      switch (key) {
        case 'email':
          if (!value || !value.email?.trim() === ' ') {
            ERROR_KEY[key] = 'The value is empty';
          } else if (!EMAIL_REGEX.test(value)) {
            ERROR_KEY[key] = 'Match with the pattern ';
          }
          break;
        case 'password':
          if (!value || !value.password?.trim() === '') {
            ERROR_KEY[key] = 'The value is empty';
          } else if (value.length < 7) {
            ERROR_KEY[key] = 'password should be at least 8 characters';
          }
          break;
        case 'phone':
          if (!value || !value.phone?.trim() === '') {
            ERROR_KEY[key] = 'The value is empty';
          } else if (!PHONE_REGEX.test(value)) {
            ERROR_KEY[key] = 'Number should be more then 11 digits';
          }
          break;
        default:
          return;
      }
    }
    return ERROR_KEY;
  };

  const handleClick = (e) => {
    e.preventDefault();
    const data = validate(values);
    if (Object.keys(data).length > 0) {
      setErrors(data);
      return;
    }
    const storeData = {
      email: values.email,
      phone: values.phone,
      password: values.password,
    };

    let userData = JSON.stringify(storeData);
    localStorage.setItem('user', userData);
    isUser(true);
    navigate('/allData');
  };

  return (
    <>
      <Box className='mainFile'>
        <Grid container spacing={2}>
          <Grid item xs={8} className='s'>
            <Box className='background'>
              <img src={image} alt='/' />
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className='loginValidation'>
              <Typography component='h1'>Welcome to Login page</Typography>
              <FormControl>
                <Box sx={{ width: '100%' }}>
                  <Box>
                    <label>
                      <Typography component='label'>
                        Enter Your Email
                      </Typography>
                    </label>
                    <TextField
                      onChange={handleChange}
                      required
                      name='email'
                      id='outlined-required'
                      label='Email'
                      helperText={errors.email}
                      error={errors.email}
                      defaultValue=''
                    />
                  </Box>
                  <Box>
                    <label>
                      <Typography component='label'>
                        Enter Your Password
                      </Typography>
                    </label>
                    <TextField
                      onChange={handleChange}
                      type='password'
                      required
                      name='password'
                      id='outlined-required'
                      label='Password'
                      error={errors.password}
                      helperText={errors.password}
                      defaultValue=''
                    />
                  </Box>
                  <Box>
                    <label>
                      <Typography component='label'>
                        Enter Your Phone Number
                      </Typography>
                    </label>
                    <TextField
                      onChange={handleChange}
                      required
                      type='number'
                      name='phone'
                      error={errors.phone}
                      helperText={errors.phone}
                      id='outlined-required'
                      label='Phone Number'
                      defaultValue=''
                    />
                  </Box>
                </Box>
                <Button
                  sx={{
                    marginTop: '16px',
                    maxWidth: '200px',
                  }}
                  variant='contained'
                  onClick={handleClick}
                >
                  Submit
                </Button>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
