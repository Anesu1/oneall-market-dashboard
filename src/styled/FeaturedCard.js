import React from "react";
import styled from "styled-components";
import { MdLabel } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { HiStar } from "react-icons/hi";

const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.color.green};
  border-radius: 5px;
  background: url('${(props) => props.theme.color.white}');
  position: relative;
  width:48%;
  margin-bottom:20px;
  @media(min-width:768px){
    width:31%;
  }
  @media(min-width:992px){
    width:24%;
  }
  .top-label {
    background: ${(props) => props.theme.color.green};
    width: 29px;
    border-radius:5px 5px 0 0 ;
    position: absolute;
    left: 10%;
    top: -5%;
    svg {
      color: ${(props) => props.theme.color.green};
      &:last-child {
        color: #ffffff;
        z-index: 5;
        position: relative;
        width:30px;
        height: 17px;
        transform: translateY(15px);
      }
      &:first-child {
        transform: translateX(-25%) rotate(90deg);
        height: 50px;
        width: 200%;
        left: 0;
        position: absolute;
        bottom: -200%;
      }
    }
  }
  .top-img {
    height: 150px;
    width:100%;
    background:${props => props.bgImage};
    background-size:cover;
    @media(min-width:768px){
      height:200px;
    }
  }
  .bottom {
    background: ${(props) => props.theme.color.green};
    color: #fff;
    border-radius:4px;
    padding:10px;
    .top-text{
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom:10px;

        a{
            text-decoration:none;
            font-size:13px;
            font-family:${props => props.theme.fam.regular};
            color:#fff;
        }
    }
    .bottom-text{
        h4{
            font-size:16px;
            font-family:${props => props.theme.fam.bold};
        }
        h6{
            display:none;
        }
    }
  }
`;

function FeaturedCard({bgImage, description}) {
  return (
    <Wrapper bgImage={"./images/mota.webp"}>
      

      <div className="top-img" />
      <div className="bottom">
        <div className="top-text">
          <Link to="/">{description.length > 150
              ? `${description.substring(0, 150)}...`
              : description}</Link>
          <FaExpandArrowsAlt />
        </div>
        <div className="bottom-text">
          <h4>5.00 Dollar US$</h4>
          <h6>
            <IoMdTime /> <span>6 days ago</span>
          </h6>
        </div>
      </div>
    </Wrapper>
  );
}

export default FeaturedCard;
