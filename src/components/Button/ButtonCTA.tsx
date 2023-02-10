import styled from 'styled-components'


export const Button = styled.button `

background: #1762A7;
font-size: 1em;
margin-top: 1em;
border-radius: 0.5em;
border:none;
transition: all .3s ease;
width: 7em;
height: 2.5em;


&:hover {
background: #2180d8;

}
&:focus {
background: var(--color-buttonfocus);

}
`
export const ButtonLarge = styled(Button) `
width: 75%;
padding-top: 7px;

`

