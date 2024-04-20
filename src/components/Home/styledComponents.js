import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 40px;
`

export const HeaderImage = styled.img`
  width: 150px;
`

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`

export const RegisterHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 48px;
  color: #475569;
  margin-bottom: 10px;
`

export const RegisterSubHeading = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  color: #475569;
`

export const Register = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 20px;
`

export const RegisterImage = styled.img`
  width: 50%;
  max-width: 900px;
  margin-top: 30px;
`
