import styled from 'styled-components'


export const Hero = styled.section `
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    height: 80vh;
    margin: 6em;

img {
    margin: 0 auto;
    display: none;
}

img {
  height: 80vh;	
}

.hero__aside{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
  
}

 h1 {
    font-weight: 500;
    font-size: 2.7em;
}


@media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  
 img {
    display: block;
    position: fixed;
    bottom: 0%;
    left: 7%;
  }
  .hero__aside{
    grid-column: 2;
  }
  }
`