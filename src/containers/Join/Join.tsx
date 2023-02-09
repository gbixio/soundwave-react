import styled from 'styled-components'


export const Join = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:  0 auto ;
    height: 90vh;
    width: 80%;
    


div h1 {
    margin-left: 3em;
    font-size: 3em;
    font-weight: bolder;
    letter-spacing: 0.1em;
    width: 100%;
    margin:  auto ;


}

span {
    color: var(--accent-text);
}

@media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
}

div h1 {
    margin: auto;
}

`