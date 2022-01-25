import styled from "styled-components";
import 'animate.css'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #F3F3F3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  animation: fadeOut;
  animation-duration: 2.2s;
`;

export const Group = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;
`;

export const Logo = styled.img`
  width: 50vw;
  max-width: 200px;
  animation: zoomInDown;
  animation-duration: .5s;
`;

export const LogoRisc = styled.img`
  width: 50vw;
  max-width: 200px;
  color: black;
  animation: zoomInDown;
  animation-duration: .8s;
`;