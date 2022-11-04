import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background:#ffffff;
    position:relative;
    overflow:hidden;
    width:60%;
    border-radius:3px;
    min-width: 280px;
    max-width: 100%;
    margin: 0 2% 10px 0;
    border-radius: 6px;
    border: none;
    box-shadow: 0 1px 0 0 rgb(0 0 0 / 25%);
    float: none;
    display: inline-block;
    .top-img{
      height:140px;
      width:100%;
      background:url('${props => props.defaultImage}');
      background-size:cover;
      background-position:center center;
    }
    .middle-img{
      height:85px;
      width:85px;
      top:40%;
      left:50%;
      transform:translate(-50%, -50%);
      background:url('${props => props.defaultIcon}');
      background-size:cover;
      border-radius:50%;
      position:absolute;
      z-index:3;
    }
    .text{
      background:#ffffff;
      position:relative;
      z-index:2;
      padding-top:60px;
      text-align:center;
      padding-bottom:20px;
      h4{
        margin: 15px 0.5%;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    font-family:${props => props.theme.fam.bold};
      }
      p{
        max-width: 100%;
    display: inline-block;
    font-size: 14px;
    color: #777;
    width: 100%;
    margin: 0 0 12px 0;
    white-space: nowrap;
    height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    word-wrap: break-word;
      }
      .small{
        display:flex;
        align-items:center;
        justify-content:center;
        span{
          &:first-child{
            width: auto;
    font-size: 12px;
    margin: 0 6px 0 0;
    background: #333;
    color: #fff;
    padding: 0 4px;
    border-radius: 4px;
    line-height: 20px;
    font-family:${props => props.theme.regular};
          }
          &:last-child{
            
    width: auto;
    font-size: 13px;
    margin: 0;
    background: #eee;
    color: #777;
    padding: 0 4px;
    border-radius: 4px;
    line-height: 20px;
          }
        }
      }
    }
    .middle-round{
      display: block;
    position: absolute;
    bottom: 44%;
    left: -10%;
    width: 120%;
    height: 60px;
    background: #ffffff;
    z-index: 1;
    border-radius: 100%;
    }
    
`;

function PartnersCard() {
  return (
    <Wrapper defaultIcon={'./images/icon_default.png'} defaultImage={'./images/cover_default.jpg'}>
      <div className="top-img" />
      <div className="middle-img" />
      <div className="middle-round" />
      <div className="text">
        <h4>Hustlehub</h4>
        <p>Harare, Harare Province, ZW</p>
       
      
        <div className="small">
          <span>VIP</span>
          <span>240 listings</span>
          </div>
        
      </div>
    </Wrapper>
  );
}

export default PartnersCard;
