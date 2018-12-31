import React, {Component} from 'react'
import FormComponent from './FormComponent'

class FormContainer extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",      
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
     
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? 
      this.setState({[name]: checked}) 
      : 
      this.setState({[name]: value})
  }

  handleSubmit() {

  }

  render() {
    return(
      <FormComponent 
        handleChange={this.handleChange}
        data={this.state}
      />
    )    
  }
}

export default FormContainer