import styled from "styled-components";

export const Circle1 = styled.div`
    background: var(--circle-1);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position:fixed;
    left:2em;
    bottom:1em;
    z-index: -1;
    @media screen and (min-width: 768px) {
    width: 600px;
    height: 600px;
    left:-4em;
    bottom:-5em;
    
}

`

export const Circle2 = styled.div`
    background: var(--circle-2);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position:fixed;
    left:7em;
    top:8em;
    z-index: -1;

    @media screen and (min-width: 768px) {
    width: 500px;
    height: 500px;
    left:30em;
    top:-5em;
}

`


export const Circle3 = styled.div`
    background: var(--circle-2);
    border-radius: 50%;
    width: 400px;
    height: 400px;
    position:fixed;
    left:16em;
    bottom: -12em;
    z-index: -1;
    @media screen and (min-width: 768px) {
    width: 800px;
    height: 800px;
    left:60em;
    bottom:-30em;
}


`