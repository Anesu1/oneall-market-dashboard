import { useState } from 'react';
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
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    country: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  

  const [category, setCategory] = useState('');

    const handleChangeCategory = (event) => {
      setCategory(event.target.value);
    };
  return (
    <Wrapper>
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
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
                name="productname"
                onChange={handleChange}
                required
                value={values.productname}
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
                onChange={handleChange}
                required
                value={values.description}
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
                onChange={handleChange}
                required
                value={values.email}
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
                label="In Stock"
                name="stock"
                onChange={handleChange}
                required
                value={values.stock}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              
              <FormControl required fullWidth variant="outlined" >
        <InputLabel id="demo-simple-select-standard-label">Choose Category</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={category}
          onChange={handleChangeCategory}
          label="Choose Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}

            >
              <CardActions style={{padding:'0'}}>
      <Button
        fullWidth
        variant="outlined"
        style={{
          height:'54px',
          color:'#4b947d',
          borderColor:'#4b947d'
        }}
      >
        Upload picture
      </Button>
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
          <Button
            style={{
              background:'#4b947d'
            }}
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
    </Wrapper>
  );
};
