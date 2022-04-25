import styled from "styled-components"

export const Wrapper = styled.nav`
    background: #3b5998;
    padding: 5px 20px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  padding: 5px 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 100px;
  height: 100px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;
export const Links = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LinksItems = styled.li`
  text-decoration: none;
  color: white;
  margin: 0 5px;
  padding-right: 10px;
`

export const Button = styled.button`
    background-color: #555555; /* Green */
    border: none;
    color: white;
    padding: 15px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 50%
`

export const Paragraph = styled.p`
  text-decoration: none;
  color: white;
`