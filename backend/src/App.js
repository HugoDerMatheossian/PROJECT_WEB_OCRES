import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {

  constructor(){
    super()
    this.state = {
      fullName:'',
      username:'',
      email:''
    }
    this.changeFullName = this.changeFullName.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeFullName(event){
    this.setState({
      fullName:event.target.value
    })
  }
  changeUsername(event){
    this.setState({
      username:event.target.value
    })
  }
  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()

    const registered = {
      fullName: this.state.fullName,
      username: this.state.username,
      email: this.state.username
    }

    axios.post('http://localhost:4000/api/Add', registered)
      .then(response => console.log(response.data))

    this.setState({
      fullName:'',
      username:'',
      email:''
    })
  }
    
  render(){
    return(
      <div>
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input type="text" placeholder='Full Name' onChange={this.changeFullName} value={this.state.fullName}/>
              <input type="text" placeholder='Username' onChange={this.changeUsername} value={this.state.username}/>
              <input type="text" placeholder='Email' onChange={this.changeEmail} value={this.state.email}/>
              <input type="submit" value='Submit'/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
