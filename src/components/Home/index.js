import {Link} from 'react-router-dom'
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
import ContextComponent from '../../Context/ContextComponent'

const Home = () => (
  <ContextComponent.Consumer>
    {value => {
      const {isRegister, nameInput, selectInput, topicsList} = value
      const selectValue = topicsList.find(
        eachItem => eachItem.id === selectInput,
      ).displayText
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
              {isRegister ? `Hello ${nameInput}` : 'Welcome to Meetup'}
            </RegisterHeading>
            <RegisterSubHeading>
              {isRegister
                ? `Welcome to ${selectValue}`
                : 'Please register for the topic'}
            </RegisterSubHeading>
            {isRegister ? (
              ''
            ) : (
              <Link to="/register">
                <Register type="button">Register</Register>
              </Link>
            )}
            <RegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </RegisterContainer>
        </HomeContainer>
      )
    }}
  </ContextComponent.Consumer>
)

export default Home
