import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import Register from './components/Register'
import ContextComponent from './Context/ContextComponent'
import NotFound from './components/NotFound'
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

  changeName = value => {
    this.setState({nameInput: value})
  }

  changeSelect = valueID => {
    this.setState({selectInput: valueID})
  }

  changePath = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = () => {
    const {nameInput} = this.state
    if (nameInput === '') {
      this.setState({errorMsg: 'Please enter your name'})
    } else {
      this.setState({
        isRegister: true,
      })
      this.changePath()
    }
  }

  render() {
    const {nameInput, selectInput, isRegister, errorMsg} = this.state
    return (
      <ContextComponent.Provider
        value={{
          topicsList,
          isRegister,
          nameInput,
          selectInput,
          errorMsg,
          changeName: this.changeName,
          changeSelect: this.changeSelect,
          submitForm: this.submitForm,
          changePath: this.changePath,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ContextComponent.Provider>
    )
  }
}

export default withRouter(App)
