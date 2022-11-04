import React from 'react';
import styled from 'styled-components';
import Heading from '../../styled/Heading';
import LatestAddedCard from '../../styled/LatestAddedCard';

const Wrapper = styled.section`
    padding:5%;
    background:${props => props.theme.color.white};
    @media(min-width:992px){
      padding:5% 10%;
    }
    h2{
        margin-bottom:30px;
    }
    .inner{
      display: flex;
      justify-content: space-between;
    flex-wrap:wrap;
    display:flex;
      -webkit-box-pack: justify;

    }
`

function LatestBlog() {
  return (
    <Wrapper>
        <Heading>Latest articles on blog</Heading>
        <div className="inner">
            <LatestAddedCard description="Have you ever opened the door to your car and experienced a heat wave as if it were a furnace? It goes without saying that the first thing you do once inside is turn on your air conditioner to cool off. The air conditioning has several drawbacks even..."/>
            <LatestAddedCard description="Have you ever opened the door to your car and experienced a heat wave as if it were a furnace? It goes without saying that the first thing you do once inside is turn on your air conditioner to cool off. The air conditioning has several drawbacks even..."/>
            <LatestAddedCard description="Have you ever opened the door to your car and experienced a heat wave as if it were a furnace? It goes without saying that the first thing you do once inside is turn on your air conditioner to cool off. The air conditioning has several drawbacks even..."/>
            <LatestAddedCard description="Have you ever opened the door to your car and experienced a heat wave as if it were a furnace? It goes without saying that the first thing you do once inside is turn on your air conditioner to cool off. The air conditioning has several drawbacks even..."/>
        </div>
    </Wrapper>
  )
}

export default LatestBlog