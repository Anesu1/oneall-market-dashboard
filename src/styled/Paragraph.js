import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
    font-size:14px;
    font-family:${props => props.theme.fam.regular};
    
`

function Paragraph({children}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Paragraph
