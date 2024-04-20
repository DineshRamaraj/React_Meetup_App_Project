import ContextComponent from '../../Context/ContextComponent'
import {
  RegisterContainer,
  Header,
  HeaderImage,
  MainContainer,
  ImageContainer,
  Image,
  FormContainer,
  FormHeading,
  InputContainer,
  Label,
  Input,
  Select,
  Option,
  ButtonContainer,
  Button,
  ErrorMsg,
} from './styledComponents'

const Register = () => (
  <ContextComponent.Consumer>
    {value => {
      const {
        nameInput,
        selectInput,
        errorMsg,
        submitForm,
        changeName,
        changeSelect,
        topicsList,
      } = value

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeSelect = event => {
        changeSelect(event.target.value)
      }

      const onSubmitForm = event => {
        event.preventDefault()
        submitForm()
      }

      return (
        <RegisterContainer>
          <Header>
            <HeaderImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </Header>
          <MainContainer>
            <ImageContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
            </ImageContainer>
            <FormContainer onSubmit={onSubmitForm}>
              <FormHeading>Let us join</FormHeading>
              <InputContainer>
                <Label htmlFor="name">NAME</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={nameInput}
                  onChange={onChangeName}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="topics">TOPICS</Label>
                <Select
                  id="topics"
                  type="text"
                  value={selectInput}
                  onChange={onChangeSelect}
                >
                  {topicsList.map(eachItem => (
                    <Option key={eachItem.id} value={eachItem.id}>
                      {eachItem.displayText}
                    </Option>
                  ))}
                </Select>
              </InputContainer>
              <ButtonContainer>
                <Button type="submit">Register Now</Button>
              </ButtonContainer>
              <ErrorMsg>{errorMsg}</ErrorMsg>
            </FormContainer>
          </MainContainer>
        </RegisterContainer>
      )
    }}
  </ContextComponent.Consumer>
)

export default Register
