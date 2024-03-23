import {
  HomeContainer,
  Header,
  HeaderImage,
  RegisterContainer,
  RegisterHeading,
  RegisterSubHeading,
  Register,
  RegisterImage,
} from './styledComponents'

const Home = props => {
  const {isRegister, clickRegister} = props
  const onClickRegister = () => {
    clickRegister()
    const {history} = props
    history.replace('/register')
  }
  return (
    <HomeContainer>
      <Header>
        <HeaderImage
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
      </Header>
      <RegisterContainer>
        <RegisterHeading>
          {isRegister ? 'Hello James' : 'Welcome to Meetup'}
        </RegisterHeading>
        <RegisterSubHeading>
          {isRegister
            ? 'Welcome to Education and Learning'
            : 'Please register for the topic'}
        </RegisterSubHeading>
        {isRegister ? (
          ''
        ) : (
          <Register type="button" onClick={onClickRegister}>
            Register
          </Register>
        )}
        <RegisterImage
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </RegisterContainer>
    </HomeContainer>
  )
}

export default Home
