import * as React from 'react';
import {useState, useEffect} from 'react';
import { useFormik } from 'formik';
import {NavLink, useNavigate} from 'react-router-dom';
import axios, { Axios } from 'axios';
import * as Yup from 'yup';

import { Space, TimePicker } from 'antd';
import dayjs from 'dayjs';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'




import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
 
  TextField
} from '@mui/material';
import styled from 'styled-components';
import { useAuth } from '../utils/authProvider';

const Wrapper = styled.div`
     .MuiInputBase-root {

&:before {
  border: 1px solid #4b947d !important;
}
}
.css-1xf3bi4-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline,.css-1ptx2yq-MuiInputBase-root-MuiInput-root:after,.css-8q2m5j-MuiInputBase-root-MuiInput-root:after,.css-a3l6o-MuiInputBase-root-MuiInput-root-MuiSelect-root:after{
border-color:#4b947d;
}
[data-shrink="true"] {
color: #4b947d !important;
&:after {
  border: #4b947d !important;
}
}
  `



export const Store = (props) => {
  // this.state = { phone: "" };
   const[phone,setPhone]=useState();
  const [value, onChange] = useState('10:00');
  


  const [isSubscribed, setIsSubscribed] = useState(false);

  const {user} = useAuth();
  console.log(user)
  const [categories , getCategories] = useState([]);

  const url='http://10.20.102.254:2035/';

  useEffect (()=>{
    getAllCategories();
  },[]);

  const getAllCategories = () =>{
    console.log("mmmmmmmmmm");
    axios.get(`${url}categories`).then((response) =>{
 
      const allCategories = response.data;
      getCategories(allCategories);
      console.log(response.data);
    }).catch(error=>console.error(`Error:${error}`));
  };


  const [currency , getCurrencies] = useState([]);

  const urll='http://10.20.103.66:2034/';

  useEffect (()=>{
    getAllCurrencies();
  },[]);

  const getAllCurrencies = () =>{
    console.log("qqqqqq");
    axios.get(`${urll}trading-currencies/`).then((response) =>{
 
      const allCurrencies = response.data;
      getCurrencies(allCurrencies);
      console.log(response.data);
    }).catch(error=>console.error(`Error:${error}`));
  };

 

  const handleChange = event => {
    if (event.target.checked) {
      console.log('');
    } else {
      console.log('');
    }
    setIsSubscribed(current => !current);
  };
  



    const navigate = useNavigate()




    const formik = useFormik({
      initialValues: {
        tradingName: '',
        description: '',
        email:'',
        location:'',
        phone:'',
        openingHours:'',
        closingHours:'',
        delivery:'',
        deliveryDetails:'',
        category:''

      
        
      },
      validationSchema: Yup.object({
        tradingName: Yup
          .string()
          .max(255)
          .required(''),
        description: Yup
          .string()
          .max(255)
          .required(''),
          email: Yup
          .string()
          .email('Must be a valid email')
          .max(255)
          .required(''),
          location: Yup
          .string()
          .max(255)
          .required(''),
          phone: Yup
          .string()
          .max(255)
          .required(''),
          openingHours: Yup
          .string()
          .max(255)
          .required(''),
          closingHours: Yup
          .string()
          .max(255)
          .required(''),
          category: Yup
          .string()
          .max(255)
          .required(''),
    
        
      }),
      onSubmit: (e) => {
        console.log("wwwww");
        axios.post('http://10.20.103.66:2035/product/create', {
          
          name: e.name,
          seller:e.seller,
          price:e.price,
         
  
        })
          .then((response) => {
            if ( response.status === 200)
            {
              navigate('/dashboard/app');
             console.log(response.data);
             alert('Product Saved') 
           } 
            else{
               alert(response.data) 
              }
          })
          .catch((err) => {
            console.info(e.name)
  
            console.log(err);
            console.log(err.response);
            alert(err.response.data.error.message);
          });
      },

    });



  return (
    <Wrapper>
    <form onSubmit={formik.handleSubmit} autoComplete="off" noValidate {...props} >
      <Card>
        <CardHeader
          subheader=""
          title="My Store"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Trading Name"
                name="tradingName"
                onChange={formik.handleChange}
                required
                value={formik.values.tradingName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Description"
                name="description"
                onChange={formik.handleChange}
                required
                value={formik.values.description}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={formik.handleChange}
                required
                value={formik.values.email}
                variant="outlined"
              />
            </Grid>
            

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Location of Business"
                name="location"
                onChange={formik.handleChange}
                required
                value={formik.values.location}
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
             
               {/* <PhoneInput
               placeholder="Enter phone number"
               value={svalue}
               onChange={setValue}/> */}
              <PhoneInput
          country={'us'}
          value={formik.values.phone}
          onChange={setPhone}
        />
        
            </Grid>

           

            <Grid
              item
              md={6}
              xs={12}
            >
              {/* <TextField
                fullWidth
                label="Lat"
                name="lat"
                onChange={formik.handleChange}
                required
                value={formik.values.delivery}
                variant="outlined"
              /> */}
               <div>
               <div>
                <p>Delivery  </p>
      <label htmlFor="subscribe">
        <input
          type="checkbox"
          // value={isSubscribed}
          onChange={handleChange}
          id="subscribe"
          name="subscribe"
          value={formik.values.delivery}
        />
          (click if you provide deliveries)       
      </label>

      <hr />
{/* 
      <button disabled={!isSubscribed}>Proceed</button> */}

      {isSubscribed &&  <TextField
                fullWidth
                label=""
                onChange={formik.handleChange}
                required
                type="text"
                value={formik.values.deliveryDetails}
                variant="outlined"
                placeholder='delivery details'
              />}
    </div>
             
     
            
            </div>
       
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              {/* <TextField
                fullWidth
                label="Lng"
                name="lng"
                onChange={formik.handleChange}
                required
                value={formik.values.longitude}
                variant="outlined"
              /> */}
<p>Opening Hours</p>
<Space wrap>
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large"   value={formik.values.openingHours}/>
    {/* <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} />
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="small" /> */}
  </Space>

               
      
                
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              {/* <TextField
                fullWidth
                label="Lng"
                name="lng"
                onChange={formik.handleChange}
                required
                value={formik.values.longitude}
                variant="outlined"
              /> */}
<p>Closing Hours</p>
<Space wrap>
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" value={formik.values.closingHours}/>
    {/* <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} />
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="small" /> */}
  </Space>

               
      
                
            </Grid>


            <Grid
              item
              md={6}
              xs={12}
            >
              
              {/* <FormControl required fullWidth variant="outlined" >
        <InputLabel id="demo-simple-select-standard-label">Choose Category</InputLabel> */}
             <p>Select category</p>
              <select name='category' value={formik.values.category} onChange={formik.handleChange}> 
        {categories.map(
              category=>{
                return <option value={category}>{category.name}</option> 
              }
            )}
            
        </select> 
        
            </Grid>


            <Grid
              item
              md={6}
              xs={12}
            >
              
              {/* <FormControl required fullWidth variant="outlined" >
        <InputLabel id="demo-simple-select-standard-label">Choose Category</InputLabel> */}
             <p>Select currency</p>
              <select name='currency' value={formik.values.currency} onChange={formik.handleChange}> 
        {currency.map(
              currency=>{
                return <option value={currency}>{currency.name}</option> 
              }
            )}
            
        </select> 
        
            </Grid>


            <Grid
              item
              md={6}
              xs={12}

            >
               <CardActions style={{padding:'0'}}>
       {/* <Button
        name="productImage"
        value={formik.values.productImage}
        
        fullWidth
        variant="outlined"
        style={{
          height:'54px',
          color:'#4b947d',
          borderColor:'#4b947d'
        }}
      >
        Upload picture
      </Button>  */}

      

    </CardActions> 



            </Grid>
          </Grid>
          
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          {/* <Button
             style={{
               background:'#4b947d'
             }}
             disabled={formik.isSubmitting}
            type="submit"
            variant="contained"
          > */}
             <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                
              >
            Save details
          </Button>

          {console.log(formik.errors)}

        </Box>
      </Card>
    </form>
    </Wrapper>
  );
};
