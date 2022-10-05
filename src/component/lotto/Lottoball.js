import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const NewSpan = styled.span`
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  background: ${(props) => props.color || "black"};
  display: inline-block;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 45px;
  border-radius: 100%;
  margin: 5px;
`;

const Lottoball = (props) => {
  let bg;
  if (props.number <= 10) {
    bg = "#f5c11f";
  } else if (props.number <= 20) {
    bg = "#71caf2";
  } else if (props.number <= 30) {
    bg = "#ababab";
  } else if (props.number <= 40) {
    bg = "#acd54b";
  }
  return <NewSpan color={bg}>{props.number}</NewSpan>;
};
export default Lottoball;
