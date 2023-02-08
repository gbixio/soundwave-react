import styled from 'styled-components'


export const Join = styled.section `
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    margin: 2em;
    height: 100vh;
    


.join__title {
    font-size: 3em;
    font-weight: bolder;
    letter-spacing: 0.1em;
}

span {
    color: var(--accent-text);
}

@media screen and (max-width: 768px) {
 * {
    display: grid;
    grid-template-columns: 1fr;   
  }
}
`