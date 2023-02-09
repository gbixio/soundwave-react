import styled from 'styled-components'


export const Footer = styled.footer `

background: var(--color-primary);
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
box-sizing: border-box;
position: absolute;
bottom: 0vmax;


div {
    display: flex;
    flex-direction: row;
}
 p {
    margin: 1em;
 }

.social-media {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    justify-content: center;
}



 
`