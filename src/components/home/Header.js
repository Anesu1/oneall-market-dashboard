/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import {
  HiOutlinePencil,
  HiOutlineUserCircle,
  HiOutlinePlusCircle,
  HiOutlineChevronDown,
} from "react-icons/hi";
import { VscBriefcase } from "react-icons/vsc";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const Wrapper = styled.header`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(min-width:992px){
    padding:0 10%;
  }
  img {
    width: 130px;
  }
  .categories {
    display: none;
  }
  ul {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

    @media (min-width: 992px) {
        align-items:center;
    }
    li {
      margin-left: 4px;
      min-width: 15%;
      &:first-child,
      &:nth-child(4) {
        display: none;
        @media (min-width: 992px) {
          display: block;
        }
      }
      
      &:nth-child(5) {
        @media (min-width: 992px) {
          display: none;
        }
      }
      &:first-child {
        @media (min-width: 992px) {
          font-weight: bolder;
          margin-right: 10px;

          line-height: 21px;

          border: none;
          color: #fff;
          a {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            min-width: 100px;
            background: ${(props) => props.theme.color.orange};
            height: 30px;
            margin-top: 4px;
            margin-bottom: 4px;
            width:max-content;
            margin-right:80px;
            padding: 6px 10px;
            border-radius: 5px;
            span {
              width: max-content;
              font-size: 14px;
            }
          }
          svg {
            margin-right: 5px;
          }
          a,
          svg {
            color: #ffffff;
          }
        }
      }
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #666;
        span {
          font-size: 11px;
          width: max-content;
          font-family: ${(props) => props.theme.fam.regular};
        }
        svg {
          height: 20px;
          width: 20px;
        }
      }
    }
  }
`;

function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <img src="" alt="" />
      </Link>
      <span className="categories">
        Categories <HiOutlineChevronDown />
      </span>
      <ul>
        <li>
        <Link to="/login">
            <HiOutlinePlusCircle />
            <span>Post a product</span>
            </Link>
        </li>
        <li>
          <a href="#">
            <VscBriefcase />
            <span>Companies</span>
          </a>
        </li>
        <li>
          <a href="#">
            <HiOutlinePencil />
            <span>Blog</span>
          </a>
        </li>
        <li>
          <a href="#">
            <BiSearch />
            <span>Search</span>
          </a>
        </li>
        <li>
          <a href="#">
            <HiOutlinePlusCircle />
            <span>Post an ad</span>
          </a>
        </li>

        <li>
          <Link to="/register">
            <HiOutlineUserCircle />
            <span>Sign up</span>
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
}

export default Header;
