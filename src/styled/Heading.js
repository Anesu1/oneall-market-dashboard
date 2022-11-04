import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h2`
    font-family:${props => props.theme.fam.esc};
    color:${props => props.theme.color.black};
    font-size:25px;
`

function Heading({children}) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default Heading