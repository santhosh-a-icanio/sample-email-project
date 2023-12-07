import './email.css'
import { Box, Snackbar } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import axios from 'axios'




const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'minimum 8 characters')
      .required('Password is required'),
  });


const Email = () => {
  
      
      const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          console.log(values) 
        },
      });

      const [openSnackbar, setOpenSnackbar] = useState(false);
      const [loginSuccess, setLoginSuccess] = useState(false);
    
      const handleSnackbarClose = () => {
        setOpenSnackbar(false);
      };

      const handleLogin = () => {
        const isValidEmail = formik.values.email ;
        const isValidPassword =  formik.values.password  ;
        const email = "sandy@gmail.com" ;
        const password= "santhosh";
        if ((isValidEmail === email  && isValidPassword === password )) {
         
          setLoginSuccess(true);
          setOpenSnackbar(true);
          
        } else {
         
          setLoginSuccess(false);
          setOpenSnackbar(true);
          
        }
      };
  return (
    
     <div >
       
       <Box className="main">
       <div className='img-1'></div>
       <form onSubmit={formik.handleSubmit}>
       <div className='img1'> </div>
         <div className='email-textfield'>
        
          <TextField
           email
           variant="standard"
           style={{width:300}}
           id="email"
           name="email"
           label="Email"
           value={formik.values.email}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           error={formik.touched.email && (formik.errors.email)}
           helperText={formik.touched.email && formik.errors.email}
          />
         </div>
         
        <div className='password-textfield'>  
        <TextField
          password
          variant="standard"
          style={{width:300}}
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && (formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        </div>
       <div className='button'>
       <Stack direction="row" spacing={2}>
      {/* <Button variant="contained" disabled style={{width:300}} color="primary" type="submit">submit</Button> */}
      <Button color="primary" variant="contained" style={{width:300, }}
       className="btnn" 
       type="submit" 
       onClick={handleLogin }>
          Login
        </Button>
    </Stack>
    <Snackbar
        open={openSnackbar}
        autoHideDuration={6000} 
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          message={
          loginSuccess
            ? 'Login successful!' 
            : 'Incorrect email or password.'
        }
      />
       
       </div>
       </form>
        </Box> 
     </div>  

  )
}

export default Email;

