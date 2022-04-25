import React, { useState } from 'react'
import { FormGroup, Label, Input, Wrapper, Content, Button } from "./SignUpStyles"

export const Signup = ({ setSigned }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    userName: "",
    password: "",
    cpassword: ""
  })

  const changeData= (event) => {
    const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
        console.log(formData)
        if(formData.password === formData.cpassword){
            console.log(formData)
            setSigned(true)
        }else{
            console.log("Error in the password")
        }
  }

  return (
    <Wrapper>
      <Content onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <FormGroup>
          <Label htmlFor="label"> Full Name</Label>
          <Input id="label" type="text" placeholder="Full Name" onChange={changeData} name="fullName"/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email"> Email Address </Label>
          <Input id="email" type="email" placeholder="Email Address" onChange={changeData} name="email"/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="user"> Username </Label>
          <Input id="user" type="text" placeholder="UserName" onChange={changeData} name="userName"/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Password" onChange={changeData} name="password"/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="cpassword"> Confirm Password</Label>
          <Input id="cpassword" type="password" placeholder="Confirm Password" onChange={changeData} name="cpassword"/>
        </FormGroup>
        <Button>Sign Up </Button>
      </Content>
    </Wrapper>
  )
}
