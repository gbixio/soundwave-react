import styled from 'styled-components'


export const Discover = styled.main `
height: 100vh;
display: grid;
grid-template-columns: 1fr 1fr;
padding: 0 6em 0 6em;
align-items: center;
justify-content: center;
column-gap: 2em;
row-gap: 2em;
margin: 0 auto;


.discover__container{
    display: grid;
    grid-column: 1;
    row-gap: 1em;
}

.discover__cards {
    display: flex;
    justify-content: space-between;
    width: 20em;
}

.discover__mini-card {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 90px;
width: 90px;
background-color: var(--color-primary);
}

.discover__mini-card img{
    width: 40px;
    margin-bottom: 5px;
}

.discover h1 {
    font-weight: 500;
    font-size: 2.5em;
}

.discover__img {
    height: 22em;	
    grid-column: 2;
}


 @media screen and (max-width: 768px) {
 * {
    display: grid;
    grid-template-columns: 1fr;   
  }

  .discover__img {
    height: 17em;	
    grid-column: 1;
    margin: 0 auto;
}

}

` 