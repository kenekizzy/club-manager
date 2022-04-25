import React, {useState} from 'react'
import { FormGroup, Label, Input, Wrapper, Content, Button } from "./SigninStyles"

export const Signin = () => {

  const [formData, setFormData] = useState({
    userName: "",
    password: ""
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
  }

  console.log(formData)
  return (
    <Wrapper>
      <Content onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <FormGroup>
          <Label htmlFor="label">Username</Label>
          <Input id="label" type="text" placeholder="UserName" onChange={changeData} name="userName"/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="label">Password</Label>
          <Input id="label" type="password" placeholder="Password" onChange={changeData} name="password"/>
        </FormGroup>
        <Button>Log In</Button>
      </Content>
    </Wrapper>
  )
}
