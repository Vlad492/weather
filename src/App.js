import React from 'react';
import './App.css';
import Form from './components/form'
import Body from './components/body'
import Loader from './components/loader'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempLogin: 'login',
      tempPassword: 'password',
      login: 'login',
      password: 'password',
      confirm: false,
      response : false
    }

  }
  loginOnChange(event) {
    this.setState({ tempLogin: event.target.value })

  }
  titleOnChange(event){
    this.setState({title: event.target.value})
  }
  
  passwordOnChange(event) {
    this.setState({ tempPassword: event.target.value })
  }
  submit(event) {
    event.preventDefault();
    if (this.state.tempLogin == this.state.login && this.state.tempPassword == this.state.password) {
      this.success(event);
      
  }}
  success(event) {
    this.setState({ confirm: !this.state.confirm })
    this.successfulLogIn();
    event.preventDefault();
  }

  getWeather(event){
    this.setState({response : false})


    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${this.state.title}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({location : data[0].woeid})
      fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${this.state.location}/`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({weather : data})
      this.setState({response : true})
    });
    });
    
  }

  successfulLogIn(){
      
    fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/924938/')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    this.setState({weather : data})
    this.setState({response : true})
  });
  
}



  render() {
    if (this.state.confirm == false) {
      return (
        <div className="App">
          <Form login={this.state.login} password={this.state.password} tempLogin={this.state.tempLogin} tempPassword={this.state.tempPassword} submit={this.submit.bind(this)} loginOnChange={this.loginOnChange.bind(this)} passwordOnChange={this.passwordOnChange.bind(this)} />
        </div>
      );
    }
    
    else if ((this.state.confirm == true) && (this.state.response == true))  {
      return (
        <Body signOut={this.success.bind(this)} weather={this.state.weather} title = {this.state.title} titleChange = {this.titleOnChange.bind(this)} getWeather = {this.getWeather.bind(this)}/>
      )
    }
    else if ((this.state.confirm == true) && (this.state.response == false)){
      return (
        <Loader />
      )
    }
  }
}

export default App;
