import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import FeaturedCard from '../../styled/FeaturedCard';
import Heading from '../../styled/Heading';

const Wrapper = styled.section`
    padding:5%;
    @media(min-width:992px){
        padding:5% 10%;
    }
    h2{
        margin-bottom:20px;
    }
    .inner{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
`



function LatestAdded() {

    const [recentProducts, setRecentProducts] = useState([]);


    const fetchData = () => {
        return fetch("http://196.201.19.54:2035/product/allbydate")
              .then((response) => response.json())
              .then((data) => setRecentProducts(data));
      }
  return (
    <Wrapper>
        <Heading>Recently Added Products</Heading>
        <div className="inner">
            <FeaturedCard >
            <div>
      {recentProducts.id > 0 && (
        <ul>
          {recentProducts.map(recentAdd => (
            <li key={recentProducts.id}>{recentProducts.name}{recentProducts.description}</li>
          ))}
        </ul>
      )}
    </div>
            </FeaturedCard>
            <FeaturedCard description="lorem ipsum dolor"/>
            <FeaturedCard description="lorem ipsum dolor" />
            <FeaturedCard description="lorem ipsum dolor"/>
        </div>
    </Wrapper>
  )
}

export default LatestAdded