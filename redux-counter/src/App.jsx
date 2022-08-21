import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from "./redux/counterSlice"
import styled from 'styled-components';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [ incrementAmount, setIncrementAmount] = useState("");
  return (
    <SBody>
      <SContainer>
        <h1>count: {count}</h1>
        <StyledDiv>
          <SInput onChange={(e) => setIncrementAmount(e.target.value)} />
          <SButton onClick= {() => dispatch(increment())}>+</SButton>
          <SButton onClick= {() => dispatch(decrement())}>-</SButton>
          <SButtonAddition onClick= {() => dispatch(incrementByAmount(Number(incrementAmount)))}>追加</SButtonAddition>
        </StyledDiv>
      </SContainer>
    </SBody>
  );
}



const SBody = styled.body`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    117deg,
    rgb(228, 246, 113) 12%,
    rgba(130, 221, 238, 0.956) 100%
  );
  overflow: hidden;
`

const StyledDiv = styled.div`
  position: relative;
  margin-right: 70px;
`;

const SContainer = styled.div`
  text-align: center;
  margin-top: 300px;
  font-size: 45px;
  color: white;
  height: 200px;
`;

const SButton = styled.button`
  padding: 15px 25px;
  font-size: 35px;
  height: 70px;
`;

const SButtonAddition = styled.button`
  padding: 15px 25px;
  font-size: 35px;
  height: 70px;
  font-size: 20px;
  position: absolute;
`;

const SInput = styled.input `
  height: 50px;
  width: 150px;
  font-size: 30px;
  padding: 12px 0 4px 0;
`;

export default App;
