/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";


const Wrapper = styled.footer`
  padding: 5%;
  text-align: center;
  background: ${(props) => props.bgColor};

  p {
    font-size: 20px;
    font-family: ${(props) => props.theme.fam.regular};
    color: ${(props) => props.color};
  }
  .top{
    display:flex;
    flex-wrap:wrap;
    .footer-inner{
      width:25%;
      text-align:left;
      h3{
        font-family:${props => props.theme.fam.medium};
        font-size:16px;
        margin-bottom:15px;
      }
      ul{
        li{
          a{
            font-family:${props => props.theme.fam.regular};
            font-size:15px;
            text-decoration:none;
            color:#666;
            display:block;
            padding:10px 0;
            line-height:1.3;
          }
        }
      }
    }
  }
  .bottom{
    display:flex;
    flex-wrap:wrap;
    a{
      width:max-content;
      margin-right:20px;
      display:block;
      max-width:47%;
      padding:10px 0;
      font-family:${props => props.theme.fam.regular};
      color:#666;
      font-size:14px;
    }
    span{
      display:none;
    }
  }
`;

function Footer() {
  
  return (
    <Wrapper>
      <div className="top">
        <div className="footer-inner">
          <h3>LOGO</h3>
        </div>
        <div className="footer-inner">
          <h3>CATEGORIES</h3>
          <ul>
            <li>
              <a href="#">For sale</a>
            </li>
            <li>
              <a href="#">Automotive</a>
            </li>
            <li>
              <a href="#">Real estate</a>
            </li>
            <li>
              <a href="#">Fashion</a>
            </li>
            <li>
              <a href="#">Home & Furniture</a>
            </li>
          </ul>
        </div>

        <div className="footer-inner">
          <h3>CATEGORIES</h3>
          <ul>
            <li>
              <a href="#">For sale</a>
            </li>
            <li>
              <a href="#">Automotive</a>
            </li>
            <li>
              <a href="#">Real estate</a>
            </li>
            <li>
              <a href="#">Fashion</a>
            </li>
            <li>
              <a href="#">Home & Furniture</a>
            </li>
          </ul>
        </div>
        <div className="footer-inner">
          <h3>Information</h3>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Search </a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <a href="">One All Market</a>
        <span>|</span>
        <a href="">Leading Online Store</a>
        <span>|</span>
        <a href="">Certificate Verification</a>
        <span>|</span>
        <a href="">Hitrac</a>
      </div>
    </Wrapper>
  );
}

export default Footer;
