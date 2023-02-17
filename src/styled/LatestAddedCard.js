import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Paragraph from "./Paragraph";

const Wrapper = styled.div`
  box-shadow: 0px 1px 0px 0px rgb(0, 0, 0, 25%);
  border-radius: 5px;
  background: #ffffff;
  max-width: 370px;
  min-width: 350px;
  margin-bottom:20px;
    margin-right: 10px;
  .top-img {
    height: 200px;
    width: 100%;
    background: url('${(props) => props.bgImage}');
    background-size: cover;
  }
  .text {
    padding: 20px;
    h4 {
      font-family: ${(props) => props.theme.fam.bold};
      font-size: 18px;
      margin-bottom: 10px;
      color: ${(props) => props.theme.color.black};
    }
    p {
      color: #666;
    }
  }
`;

function LatestAddedCard({ description }) {
  return (
    <Link to='/'>
      <Wrapper bgImage="">
        <div className="top-img" />
        <div className="text">
          <h4>Advantages and disadvantages of using aircon in the car</h4>
          <Paragraph>
            {/* {description.length > 50
              ? `${description.substring(0, 50)}...`
              : description} */}
          </Paragraph>
        </div>
      </Wrapper>
    </Link>
  );
}

export default LatestAddedCard;
