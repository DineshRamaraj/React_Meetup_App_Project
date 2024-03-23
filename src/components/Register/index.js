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

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => {
  const {
    nameInput,
    selectInput,
    changeNameInput,
    changeSelectInput,
    submitForm,
    errorMsg,
  } = props
  const onChangeNameInput = event => {
    changeNameInput(event.target.value)
  }

  const onChangeSelectInput = event => {
    changeSelectInput(event.target.value)
  }

  const onSubmitForm = () => {
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
              onChange={onChangeNameInput}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="topics">TOPICS</Label>
            <Select
              id="topics"
              type="text"
              value={selectInput}
              onChange={onChangeSelectInput}
            >
              {topicsList.map(eachItem => (
                <Option key={eachItem.id} value={eachItem.id}>
                  {eachItem.displayText}
                </Option>
              ))}
            </Select>
          </InputContainer>
          <ButtonContainer>
            <Button type="submit">Register</Button>
          </ButtonContainer>
          <ErrorMsg>{errorMsg}</ErrorMsg>
        </FormContainer>
      </MainContainer>
    </RegisterContainer>
  )
}

export default Register
