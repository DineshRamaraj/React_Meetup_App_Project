import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import Register from './components/Register'
import './App.css'

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

class App extends Component {
  state = {
    isRegister: false,
    nameInput: '',
    selectInput: topicsList[0].id,
    errorMsg: '',
  }

  clickRegister = () => {
    this.setState({isRegister: true})
  }

  changeNameInput = value => {
    this.setState({nameInput: value})
  }

  changeSelectInput = value => {
    this.setState({selectInput: value})
  }

  submitForm = event => {
    event.preventDefault()
    const {nameInput} = this.state
    if (nameInput === '') {
      this.setState({errorMsg: 'Please enter your name'})
    } else {
      this.setState({
        isRegister: true,
        nameInput: '',
        selectInput: topicsList[0].id,
      })
    }
  }

  render() {
    const {nameInput, selectInput, isRegister, errorMsg} = this.state
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
          isRegister={isRegister}
          clickRegister={this.clickRegister}
        />
        <Route
          path="/register"
          component={Register}
          changeNameInput={this.changeNameInput}
          changeSelectInput={this.changeSelectInput}
          nameInput={nameInput}
          selectInput={selectInput}
          errorMsg={errorMsg}
        />
      </Switch>
    )
  }
}

export default App
