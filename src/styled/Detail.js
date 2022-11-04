import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border-bottom:2px solid rgba(84, 84, 84, 0.1);
    padding:10px;
    margin-bottom:20px;
    display:flex;
    justify-content:space-between;

    h4{
        font-family:${props => props.theme.fam.semibold};
        font-size:16px;
        color:#545454 !important;
        width:40%;
    }
    p{
        font-family:${props => props.theme.fam.regular};
        font-size:16px;
        color:#545454;
    }

`

function Detail({title, desc}) {
  return (
    <Wrapper>
      <h4>{title}</h4>
      <p>{desc}</p>
    </Wrapper>
  )
}

export default Detail
