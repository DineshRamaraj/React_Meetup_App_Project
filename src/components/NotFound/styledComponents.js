import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-grow: 1;
`

export const NotFoundImage = styled.img`
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 40%;
    max-width: 400px;
  }
`

export const NotFoundHeading = styled.h1`
  text-align: center;
  font-family: 'Roboto';
  font-size: 18px;
  @media screen and (min-width: 576px) {
    font-size: 28px;
  }
`

export const NotFoundDescription = styled.p`
  text-align: center;
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0px;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`
