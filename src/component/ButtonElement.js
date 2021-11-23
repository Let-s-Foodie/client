import styled from 'styled-components'
import { Link } from 'react-scroll'
import { Link as Linkr } from 'react-router-dom'
export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? 'rgb(214,35,0)' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#fff' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? 'rgb(172, 32, 4)' : '#01BF71')};
  }
`
export const ButtonR = styled(Linkr)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? 'rgb(214,35,0)' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#fff' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? 'rgb(172, 32, 4)' : '#01BF71')};
  }
`
