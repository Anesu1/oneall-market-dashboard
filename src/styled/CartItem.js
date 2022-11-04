import React from "react";
import styled from "styled-components";
import {AiFillDelete } from 'react-icons/ai';

const Wrapper = styled.div`
  display: flex;
  width:90%;
  margin:0 auto;
  margin-top:20px;
  border-bottom:1px solid #3333335d;
  padding-bottom:10px;
  img {
    width: 80px;
  }
  .desc{
    flex:1;
    margin-left:10px;
    display:flex;
    justify-content: space-between;
    flex-direction:column;
    .quantity{
      display:flex;
      justify-content:space-between;
      width:80px;
      span{
        margin:0 10px;
      }
    }
  }
  .bin{
    display:flex;
    justify-content:flex-end;
    height:30px;
    align-items:flex-end;
    height:100%;
    margin-top:auto;
    svg{
      height:25px;
      width:25px;
      color:#333;
    }
  }
`;

function CartItem({ itemName, amount, imageUrl, quantity }) {
  return (
    <Wrapper>
      <div className="img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="desc">
        <div className="name">{itemName}</div>
        <h4 className="amount">$ {amount}</h4>
        <div className="quantity">
          <button className="negative">-</button>
          <span>{quantity}</span>
          
          <button className="positive">+</button>
        </div>
      </div>
      <div className="bin">
      <AiFillDelete />
      </div>
    </Wrapper>
  );
}

export default CartItem;
