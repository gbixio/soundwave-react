import styled from 'styled-components'


export const Hero = styled.section `
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    height: 80vh;
    margin: 6em;

.hero__banner-img {
    margin: 0 auto;
    display: none;
}

img {
  height: 70vh;	
}

.hero__aside{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
  
}

 h1 {
    font-weight: 500;
    font-size: 2.5em;
}


@media screen and (min-width: 768px) {
.hero { background-color: gold;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
 .hero__banner-img {
    display: block;
  }
  .hero__aside{
    grid-column: 2;
  }


  }








 /* @media screen and (max-width: 768px) {
* {
    display: grid;
    grid-template-columns: 1fr;
         
  }
  .hero__banner-img {
    display: none;
  }
} */
`