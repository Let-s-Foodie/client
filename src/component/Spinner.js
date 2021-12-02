import styled from 'styled-components'

const Spinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: 50px 50px 50px 50px;
  width: 100px;
  height: 100px;

  & .path {
    stroke: rgb(214, 35, 0);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`
export default Spinner
