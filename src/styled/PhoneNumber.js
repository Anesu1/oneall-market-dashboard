import { useState } from "react";
import styled from "styled-components";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";


const Wrapper = styled.div`
    border:1px solid rgba(0, 0, 0, 0.364);
    border-radius:5px;
    height:55px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:17px;
    
    
    input{
        border:none;
        padding:10px;
        font-size:inherit;
        background:${props => props.theme.color.green1};
        &::placeholder{
          color:rgba(0, 0, 0, 0.5);

        }
        &:focus{
            outline:none;
        }
    }
    .PhoneInput{
      padding:16.5px 14px;
      height:1.4375em;
    }
`;

function PhoneNumber() {
  const [value, setValue] = useState();
  return (
    <Wrapper>
      <PhoneInput
        placeholder="e.g 263772738721"
        value={value}
        name="mobileNumber"
        rules={{ required: true }}
        onChange={setValue}
      />
    </Wrapper>
  );
}

export default PhoneNumber;
