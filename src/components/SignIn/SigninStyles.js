import styled from "styled-components";

export const Wrapper = styled.div`
    background: #d3d3d3;
	padding: 30px 0px;
	margin: 0;
    min-height: 100vh;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    letter-spacing: 1.5px;
    display: flex;
    justify-content: center;
`
export const Content = styled.form`
	width: 450px;
	height: 100%;
	background: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	box-shadow: 10px 5px 30px 10px rgba(0, 0, 0, 0.6);
`
export const FormGroup = styled.div`
	color: black;
    display: block;
	width: 300px;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: black;
    display: block;
`;


export const Input = styled.input`
	padding: 0.5em;
	width: 100%;
	margin-bottom: 0.5em;
	width: 100%;
    height: 34px;
    border: 1px solid black;
    padding: 1px;
    border-radius: 5px;
    outline: none;
    box-sizing: border-box;
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: black;
    display: block;
`;

export const Button = styled.button`
	padding: 10px;
	color: black;
	background: slategray;
	border: none;
	cursor: pointer;
	border-radius: 4px;
	width: 40%;
	height: 35px;
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	letter-spacing: 1.5px;
	margin: 20px 0px;
`