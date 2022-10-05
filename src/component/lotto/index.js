import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Lottoball from "./Lottoball.js";

const LottoBox = styled.div`
  display: inline-block;
  border-radius: 15px;
  background: #fff;
`;

const LottoTitle = styled.h3`
  height: 30px;
  margin-bottom: 12px;
  display: table-cell;
  vertical-align: middle;
`;
const LottoBtn = styled.span`
  display: inline-block;
  border: 2px solid #ffabbb;
  padding: 5px;
  color: #ababab;
  border-radius: 15px;
  cursor: pointer;
`;

const Lotto = () => {
  const [winNumberArray, setWinNumberArray] = useState([]);

  const [reNumberBtn, setReNumberBtn] = useState(false);

  const getWinNumbers = () => {
    setReNumberBtn(false);
    setWinNumberArray([]);
    const candidate = Array(45)
      .fill()
      .map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
      shuffle.push(
        candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
      );
    }
    const winNumbers = shuffle.slice(0, 7);

    for (let i = 0; i <= winNumbers.length - 1; i++) {
      setTimeout(
        () => setWinNumberArray((prevState) => [...prevState, winNumbers[i]]),
        100 * i
      );
    }
    //버튼활성화
    setTimeout(() => setReNumberBtn(true), 700);
  };

  //
  useEffect(() => {
    getWinNumbers();
  }, []);

  return (
    <>
      <LottoBox>
        <LottoTitle>
          오늘의 로또 추첨번호{" "}
          {reNumberBtn ? (
            <LottoBtn onClick={() => getWinNumbers()}>재추천</LottoBtn>
          ) : (
            ""
          )}
        </LottoTitle>
        {winNumberArray.map((number, idx) => {
          return <Lottoball key={idx} number={number} />;
        })}
      </LottoBox>
    </>
  );
};
export default Lotto;
