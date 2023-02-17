import {useState, useEffect} from 'react';
import { useFormik } from 'formik';
import {NavLink, useNavigate} from 'react-router-dom';
import axios, { Axios } from 'axios';
import * as Yup from 'yup';

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



export const ProductDetails = (props) => {
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
  
                // const [id, setId] = useState([]);
                // console.log("yyyy")
                // const usingAxiosAsync = async () => {
                //   const response = await axios.get("http://10.20.103.66:2034/user/id");
                //   setId(response.data.data);
                  
                // };
              
                // useEffect(() => {
                //   usingAxiosAsync();
                // }, []);


    const navigate = useNavigate()


    const formik = useFormik({
      initialValues: {
        name: '',
    seller: '',
    price: '',
    stock: '',
    description: '',
    location:'',
    latitude:'',
    longitude:'',
    category:'',
    productImage:''
      
        
      },
      validationSchema: Yup.object({
        name: Yup
          .string()
          .max(255)
          .required(''),
        seller: Yup
          .string()
          .max(255)
          .required(''),
          price: Yup
          .string()
          .max(255)
          .required(''),
          stock: Yup
          .string()
          .max(255)
          .required(''),
          description: Yup
          .string()
          .max(255)
          .required(''),
          location: Yup
          .string()
          .max(255)
          .required(''),
          latitude: Yup
          .string()
          .max(255)
          .required(''),
          longitude: Yup
          .string()
          .max(255)
          .required(''),
          category: Yup
          .string()
          .max(255)
          .required(''),
          productImage: Yup
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
          stock:e.stock,
          description:e.description,
          location:e.location,
          latitude:e.latitude,
          longitude:e.longitude,
          category:e.category,
          productImage:e.productImage
  
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


          const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          };
          const success=(pos) =>{
            const crd = pos.coords;

            formik.setFieldValue("latitude",crd.latitude)
            formik.setFieldValue("longitude",crd.longitude)
            // console.log("Your current position is:");
            // console.log(`Latitude : ${crd.latitude}`);
            // console.log(`Longitude: ${crd.longitude}`);
            // console.log(`More or less ${crd.accuracy} meters.`);
            
          }

          const errors=(err) =>{
            console.warn(`ERROR(${err.code}): ${err.message}`);
          }


          useEffect (()=>{
            
              if (navigator.geolocation) {
                navigator.permissions
                  .query({ name: "geolocation" })
                  .then((result) =>{
                    // console.log("Result: ",result)
                    if (result.state === "granted") {
                      // console.log("Result state : ",result.state);
                      // If granted then you can directly call your function here
                      navigator.geolocation.getCurrentPosition(success);
                    } else if (result.state === "prompt") {
                      navigator.geolocation.getCurrentPosition(success, errors, options);
                    } else if (result.state === "denied") {

                      // If denied then you have to show instructions to enable location
                    }
                    result.onchange = function () {
                      // console.log(result.state);
                    };
                  });
              } else {
                alert("Sorry Not available!");
              }
            })

            const [productImage , setImage] = useState('');
            const handleImage=(e)=>{
              console.log(e.target.files)
              setImage(e.target.files[0])
            }
          
 
  return (
    <Wrapper>
    <form onSubmit={formik.handleSubmit} autoComplete="off" noValidate {...props} >
      <Card>
        <CardHeader
          subheader="Add your new product"
          title=""
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
                label="Name"
                name="name"
                onChange={formik.handleChange}
                required
                value={formik.values.name}
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
                label="Price"
                name="price"
                onChange={formik.handleChange}
                required
                value={formik.values.price}
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
                label="Seller"
                name="seller"
                onChange={formik.handleChange}
                required
                value={formik.values.seller}
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
                label="In-Stock"
                name="stock"
                onChange={formik.handleChange}
                required
                value={formik.values.stock}
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
                label="Location"
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
              <TextField
                fullWidth
                label="Lat"
                name="lat"
                onChange={formik.handleChange}
                required
                value={formik.values.latitude}
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
                label="Lng"
                name="lng"
                onChange={formik.handleChange}
                required
                value={formik.values.longitude}
                variant="outlined"
              />
            </Grid>


            <Grid
              item
              md={6}
              xs={12}
            >
              
              {/* <FormControl required fullWidth variant="outlined" >
        <InputLabel id="demo-simple-select-standard-label">Choose Category</InputLabel> */}
             <p>Select one option from drop-down list:</p>
              <select name='category' value={formik.values.category} onChange={formik.handleChange}> 
        {categories.map(
              category=>{
                return <option value={category}>{category.name}</option> 
              }
            )}
            
        </select> 
        {/* <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={category}
          onChange={handleChangeCategory}
          label="Choose Category"
          required

        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
      {/* //</FormControl> */}
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

      { <div>
      
        <input onChange={formik.handleChange} type="file"  name="productImage"  value={formik.values.productImage}/>
    
      </div> }

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
