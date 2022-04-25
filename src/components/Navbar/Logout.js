import React from 'react'
import { NavLink } from 'react-router-dom'
import {Links, LinksItems, Paragraph} from "./NavbarStyles"

function Logout() {
  return (
    <div>
        <Links>
            <LinksItems><NavLink to="/signup"><Paragraph>Sign Up</Paragraph></NavLink></LinksItems>
            <LinksItems><NavLink to="/signin"><Paragraph>Log In</Paragraph></NavLink></LinksItems>
        </Links>
    </div>
  )
}

export default Logout