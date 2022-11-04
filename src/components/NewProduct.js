import { Box, Container, Grid, Typography } from '@mui/material';
import { Product } from './product/product';
import { ProductDetails } from './product/product-details';

const NewProduct = () => (
  <>
   
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          New Product
        </Typography>
        <Grid
          container
          spacing={3}
        >
         
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
          >
            <ProductDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default NewProduct;
