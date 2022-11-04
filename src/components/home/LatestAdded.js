import React from 'react';
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
  return (
    <Wrapper>
        <Heading>Latest added on our classified</Heading>
        <div className="inner">
            <FeaturedCard description="lorem ipsum dolor" />
            <FeaturedCard description="lorem ipsum dolor"/>
            <FeaturedCard description="lorem ipsum dolor" />
            <FeaturedCard description="lorem ipsum dolor"/>
        </div>
    </Wrapper>
  )
}

export default LatestAdded