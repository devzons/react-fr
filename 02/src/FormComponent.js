import React from 'react'

function FormComponent(props) {
  return(
    <main>
      <form onSubmit={props.data.handleSubmit}>
        <input 
          type="text"           
          name="firstName"
          value={props.data.firstName}
          placeholder="First Name"
          onChange={props.handleChange}
        /><br />
        <input
          type="text"
          name="lastName"
          value={props.data.lastName}
          onChange={props.handleChange}
          placeholder="Last Name" 
        /><br />
        <input
          type="number"
          name="age"
          value={props.data.age}
          onChange={props.handleChange}
          placeholder="Age" 
        /><br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />Female
        </label><br />

        <select
          name="destination"
          value={props.data.destination}
          onChange={props.handleChange}
        >
          <option value="l">-- Please choose a destination --</option>
          <option value="los angeles">Los Angeles</option>
          <option value="new york">New York</option>
          <option value="dallas">Dallas</option>
          <option value="san diego">San Diego</option>
          <option value="portland">Portland</option>
        </select><br />

        <label>
          <input 
            type="checkbox" 
            name="isVegan"
            checked={props.data.isVegan}
            onChange={props.handleChange}
          /> Vegan?
        </label><br />
        <label>
          <input 
            type="checkbox" 
            name="isKosher"
            checked={props.data.isKosher}
            onChange={props.handleChange}
          /> Kosher?
        </label><br />
        <label>
          <input 
            type="checkbox" 
            name="isLactoseFree"
            checked={props.data.isLactoseFree}
            onChange={props.handleChange}
          /> Lactose free?
        </label><br />

        <button>Submit</button>
      </form>
      <h1>Entered Information:</h1>
      <p>Your name: {props.data.firstName} {props.data.lastName}</p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your destination: {props.data.destination}</p>
      <p>
        Your dietary restrictions:<br />
        Vegan: {props.data.isVegan ? "Yes" : "No"}<br />
        Kosher: {props.data.isKosher ? "Yes" : "No"}<br />
        Lactose free: {props.data.isLactoseFree ? "Yes" : "No"}
      </p>
    </main>      
  )
}

export default FormComponent