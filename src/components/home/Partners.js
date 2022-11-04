import React from 'react';
import styled from 'styled-components';
import Heading from '../../styled/Heading';
import PartnersCard from '../../styled/PartnersCard';

const Wrapper = styled.section`
    padding:5%;
    background:${props => props.theme.color.white};
    @media(min-width:992px){
      padding:5% 10%;
    }
    h2{
      margin-bottom:20px;
    }
    .inner{
      display: -webkit-box;
      justify-content: space-between;
    overflow-x: scroll;
    display:flex;
      -webkit-box-pack: justify;

    }
`

function Partners() {
  return (
    <Wrapper>
        <Heading>Our Partners</Heading>
        <div className="inner">
          <PartnersCard />
          <PartnersCard />
          <PartnersCard />
          <PartnersCard />
          <PartnersCard />
          <PartnersCard />
        </div>
    </Wrapper>
  )
}

export default Partners