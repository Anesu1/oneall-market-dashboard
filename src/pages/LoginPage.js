import {NavLink, useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {BiArrowBack} from 'react-icons/bi';
// import { Facebook as FacebookIcon } from '../icons/facebook';
import {AiOutlineGoogle} from 'react-icons/ai';
import styled from 'styled-components';
import axios, { Axios } from 'axios';

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
  .css-1atbtaw-MuiTypography-root-MuiLink-root,
  .css-mvzs9h-MuiTypography-root-MuiLink-root{
    color:#6c6c6c;
  }
`

const Login = () => {
    const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup
        .string()
        .max(255)
        .required('Username is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: (e) => {
      
        console.log("zzzzzzzzzzzzzzzzzzzzz");
        axios.post('http://10.20.103.66:2034/security/users/login', {
          
          username: e.username,
          password: e.password
  
        })
          .then((response) => {
            if ( response.status === 200)
            {
            console.log(response.data);
            alert('Successfully LoggedIn') 
          } 
            else{
               alert(response.data) 
              }
          })
          .catch((err) => {
            console.info(e.username)

            console.log(err);
            console.log(err.response);
            alert(err.response.data.error.message);
          });
      }
    }
  );
      //  navigate('/dashboard/app')
    

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
              startIcon={<BiArrowBack fontSize="small" />}
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
             
            </Box>
            <Grid
              container
              spacing={3}
            >
              {/* <Grid
                item
                xs={12}
                md={6}
              >
                <Button
                  color="info"
                  fullWidth
                  startIcon={<FacebookIcon />}
                  onClick={() => formik.handleSubmit()}
                  size="large"
                  variant="contained"
                >
                  Login with Facebook
                </Button>
              </Grid> */}
              <Grid
                item
                xs={12}
                
              >
                <Button
                  color="error"
                  fullWidth
                  onClick={() => formik.handleSubmit()}
                  size="large"
                  startIcon={<AiOutlineGoogle />}
                  variant="contained"
                >
                  Login with Google
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography
                align="center"
                color="textSecondary"
                variant="body1"
              >
                or login with email address
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.username && formik.errors.username)}
              fullWidth
              helperText={formik.touched.username && formik.errors.username}
              label="Username"
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
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                <NavLink
                to="/dashboard"
              >
                 <Link
                  to="/dashboard"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                 Sign In Now
                  </Link>
                </NavLink>
                
                
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Don&apos;t have an account?
              {' '}
              <NavLink
                to="/register"
              >
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  Sign Up
                </Link>
              </NavLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </Wrapper>
  );
 };


export default Login;
