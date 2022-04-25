import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../images/Club-manager.png"
import { Wrapper, Content, LogoImg} from "./NavbarStyles"
import Logout from './Logout'
import SignIn from './Signin'

const Navbar = ({signed}) => {
  return (
    <Wrapper>
            <Content>
                <Link to="/">
                    <LogoImg  src={Logo} />
                </Link>
                {signed ? <SignIn /> : <Logout />}
            </Content>
        </Wrapper>
  )
}

export default Navbar