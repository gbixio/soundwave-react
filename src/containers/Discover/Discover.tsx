import styled from 'styled-components'


export const Discover = styled.main `
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
row-gap: 2em;
height: 90vh;
width: 100%;

.discover__container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    height: 50vh;
    width: 60%;
    margin-top: 3em;
}

.discover__cards {
    display: flex;
    justify-content: space-between;
    width: 18em;
}

.discover__mini-card {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 80px;
width: 80px;
background-color: var(--color-primary);
}

.discover__mini-card img{
    width: 30px;
    margin-bottom: 5px;
}

h1 {
    font-weight: 500;
    font-size: 2.5em;
}

.img-covers{
    align-items: center;
    justify-content: center;
    height: 22em;	
    margin-bottom: 2em;
}


 @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;

  .img-covers {
    height: 14em;
    align-items: center;
    justify-content: center;
}

}

` 