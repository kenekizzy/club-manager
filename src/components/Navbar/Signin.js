import React from 'react'
import { NavLink } from 'react-router-dom'
import { Links, LinksItems, Button, Paragraph } from "./NavbarStyles"

function SignIn() {
  return (
    <div>
        <Links>
            <LinksItems><NavLink to="/create"><Paragraph>New Project</Paragraph></NavLink></LinksItems>
            <LinksItems><Paragraph>Log Out</Paragraph></LinksItems>
            <LinksItems><NavLink to="/"><Button>KN</Button></NavLink></LinksItems>
        </Links>
    </div>
  )
}

export default SignIn