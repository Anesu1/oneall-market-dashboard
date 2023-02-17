import {useState, useEffect} from 'react'; 
import {NavLink, useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Checkbox, Container, FormHelperText, Grid, Link, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';
import axios, { Axios } from 'axios';
import PhoneNumber from '../styled/PhoneNumber';


//  import axios from '.src/pages/api';

 

const Wrapper = styled.section`
  background:${props => props.theme.color.green1};
  height:100vh;
  h4,p{
    color:#ffffff;
  }
  .MuiButtonBase-root{
    color:#ffffff;
  }
  button{
    background:#ffffff;
    color:${props => props.theme.color.green1} !important;
    font-weight:900;
    &:hover{
      opacity:0.8;
      background-color:#ffffff;
    }
  }
  .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
    border-color:#ffffff !important;
  }
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused{
    color:#ffffff;
  }
  .css-66npy3-MuiTypography-root-MuiLink-root{
    color:#6c6c6c;
    text-decoration:none;
  }
  .css-1atbtaw-MuiTypography-root-MuiLink-root{
    color:#6c6c6c;
  }
  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate{
    color:#ffffff;
  }
`

const SignUp = () => {
  const [roles , getRoles] = useState([]);

  const url='http://10.20.103.66:2034/';

  useEffect (()=>{
    getAllRoles();
  },[]);

  const getAllRoles = () =>{
    console.log("yyyyyyyyyyyyyyyyyyyyyyyy");
    axios.get(`${url}security/authority/all`).then((response) =>{
 
      const allRoles = response.data;
      getRoles(allRoles);
      console.log("xxx  roles ");
      console.log(response.data);
    }).catch(error=>console.error(`Error:${error}`));
  };

    const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      firstName:'',
      lastName: '',
      password: ''
      
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      username: Yup
        .string()
        .max(255)
        .required('UserName is required')
    }),
    


   

  

    // const: setAuthority= ()=> {
    //   axios.get('${url}past')
    //   .then((response) =>{
    //   const auth=response.data.notes.auth;
    //   setAuthority(auth);
    //   })
    // .catch(error=>console.error('Error:${error}'));
    // },
    
    
  




   
    
    onSubmit: (e) => {
      console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      axios.post('http://10.20.103.66:2034/security/users/create', {
        email: e.email,
        login: e.username,
        firstName: e.firstName,
        lastName: e.lastName,
        password: e.password,
        role: e.role

      })
        .then((response) => {
          if ( response.status === 200)
          {
           navigate('/dashboard/app');
          console.log(response.data);
          alert('Successfully LoggedIn') 
        } 
          else{
             alert(response.data) 
            } 


    

        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);
          alert(err.response.data.error.message);
        });

       
    }
   
  });

  return (
    <Wrapper>
      
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <NavLink
            to="/"
            
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Home
            </Button>
          </NavLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                OneAll Market
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Buying and Selling Made Easy
              </Typography>
            </Box>
            
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.firstname && formik.errors.firstName)}
              fullWidth
              helperText={formik.touched.firstname && formik.errors.firstName}
              label="FirstName"
              margin="normal"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.firstname}
              variant="outlined"
            />
              <TextField
              error={Boolean(formik.touched.lastname && formik.errors.lastName)}
              fullWidth
              helperText={formik.touched.lastname && formik.errors.lastName}
              label="LastName"
              margin="normal"
              name="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.lastname}
              variant="outlined"
            />
              <TextField
              error={Boolean(formik.touched.username && formik.errors.username)}
              fullWidth
              helperText={formik.touched.username && formik.errors.username}
              label="UserName"
              margin="normal"
              name="username"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.username}
              variant="outlined"
            />
              <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.password}
              variant="outlined"
            />
           <p>Select one option from drop-down list:</p>
   
 
   <select> 
   {roles.map(
        role=>{
          return <option value={role}>{role.name}</option> 
        }
      )}
       
   </select> 
          
              
          
        

              
            
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              {/* <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              /> */}
              <Typography
                color="textSecondary"
                variant="body2"
              >
                I have read the
                {' '}
                <NavLink
                  to="/"
                >
                  <Link
                    color="primary"
                    underline="always"
                    variant="subtitle2"
                  >
                    Terms and Conditions
                  </Link>
                </NavLink>
              </Typography>
            </Box>
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>
                {formik.errors.policy}
              </FormHelperText>
            )}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                
              >
                Sign Up Now
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Have an account?
              {' '}
              <NavLink
                to="/login"
                
              >
                <Link
                  variant="subtitle2"
                  underline="hover"
                >
                  Sign In
                </Link>
              </NavLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </Wrapper>
  );
};

export default SignUp;
