import styled from 'styled-components'

export const RegisterContainer = styled.div`
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

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  @media screen and (min-width: 768px) {
    width: 40%;
    max-width: 450px;
  }
`

export const Image = styled.img`
  width: 60%;
  @media screen and (min-width: 768px) {
    width: 90%;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 35%;
  }
`

export const FormHeading = styled.h1`
  font-size: 28px;
  font-family: 'Roboto';
  color: #64748b;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const Label = styled.label`
  font-size: 14px;
  font-family: 'Roboto';
  color: #64748b;
  margin-bottom: 5px;
`

export const Input = styled.input`
  padding: 10px 20px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
  font-family: 'Roboto';
  color: #7b8794;
`

export const Select = styled.select`
  padding: 10px 20px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
  font-family: 'Roboto';
  color: #7b8794;
`

export const Option = styled.option`
  border-radius: 8px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  padding: 10px 25px;
  background-color: #2563eb;
  border: none;
  color: #ffffff;
  border-radius: 8px;
  font-size: 14px;
  font-family: 'Roboto';
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ff0b37;
`
