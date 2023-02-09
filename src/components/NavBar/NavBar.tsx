import styled from 'styled-components'


export const NavBar = styled.nav ` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem ;
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    top: 0;

img { 
    height: 60px;
}


.navbar-logo {
    display: flex;
    align-items: center;
    
} 
 
.navbar-links_container p {
    margin-right: 1em;
    font-size: 1em;
 
}
.navbar-logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--color-);
}

.navbar-logo h1{
    margin: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
} 

.navbar-links_container{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

} 
`