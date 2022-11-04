/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import Slider from "react-slick";

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  height:400px;
  .slick-slider {
    width: 100%;
    height: auto;
    position: relative;
    left: 0;
    top: 0;
    z-index: -1;
    .slick-list {
      height: auto;
      .slick-slide {
        height: auto;
        > div {
          height: 400px;
          @media (min-width: 768px) {
            height: 400px;
          }

          
          .slid1 {
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.45),
                rgba(0, 0, 0, 0.45)
              ),
              url("./images/slide.jpg");
            background-size: cover;
            background-position: center center;
            width: 100%;
            height: 100%;
          }
          .slid2 {
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.45),
                rgba(0, 0, 0, 0.45)
              ),
              url("./images/slide.jpg");
            background-size: cover;
            background-position: center center;
            width: 100%;
            height: 100%;
          }
          .slid3 {
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.45),
                rgba(0, 0, 0, 0.45)
              ),
              url("./images/slide.jpg");
            background-size: cover;
            background-position: center center;
            width: 100%;
            height: 100%;
          }
        }
        @media (min-width: 768px) {
          height: 720px;
        }

        @media (min-width: 1200px) {
          height: 100vh;
        }
      }
    }
  }
  form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${(props) => props.theme.color.white};
    border-radius: 5px;
    padding:25px 20px 20px 20px;
    
    min-width:300px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    @media(min-width:568px){
      display:unset;
      left:30%;
padding: 30px 35px 25px 35px;
    }
    @media(min-width:992px){
      left:23%;
      
    }
    h3{
      font-family:${props => props.theme.fam.esc};
      font-size:26px;
      text-align:center;
      margin-bottom:20px;
      width:100%;

    }
    .search {
      margin-bottom:10px;
      width:100%;
      label{
        font-family:${props => props.theme.fam.semibold};
        font-size:15px;
        @media(max-width:768px){
          display:none;
        }
      }
      .inner {
        border:1px solid #666;
        border-radius: 5px;
        height: 50px;
        margin-top:5px;
        position:relative;
        overflow:hidden;
        
        input,  select {
          border: none;
          width:100%;
          height:100%;
          padding:0 30px;
          font-size:16px;
          color:#666;
          font-family:${props => props.theme.fam.regular};
          &::placeholder{
            color:#666;
          }
          option{
            height:40px;
          }
        }
        
        svg{
          position:absolute;
          top:50%;
          left:6%;
          height:20px;
          width:20px;
          transform:translate(-50%,-50%);
        }
      }
     
    } .loc{
        width:65%;
        margin-bottom:0;
        @media(min-width:568px){
          width:100%;
        }
      }
      button{
        height:50px;
        border:none;
        background:${props => props.theme.color.green};
        color:#ffffff;
        font-family:${props => props.theme.fam.regular};
        margin-top:auto;
        width:30%;
        border-radius:5px;
        font-size:18px;
        @media(min-width:568px){
          width:100%;
          margin-top:20px;
        }
      }
  }
`;

function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    fade: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div className="slid1" />
        <div className="slid2" />
        <div className="slid3" />
      </Slider>
      <form>
        <h3>Sell & Buy Easily</h3>
        <div className="search">
          <label htmlFor="searchbar">Search</label>
          <div className="inner">
            <BiSearch />
            <input
              id="searchbae"
              type="text"
              placeholder="What are you looking for?"
            />
          </div>
        </div>
        <div className="search loc">
          <label htmlFor="location">Choose Location</label>
          <div className="inner">
            <GrLocation />
            <select id="location">
              <option value="" selected disabled hidden>Everywhere</option>
              <option value="1">District 1</option>
              <option value="2">District 2</option>
              <option value="3">District 3</option>
              <option value="4">District 4</option>
              <option value="5">District 5</option>
            </select>
          </div>
        </div>
        <button>Search</button>
      </form>
    </Wrapper>
  );
}

export default Banner;
