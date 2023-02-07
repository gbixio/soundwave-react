import React from 'react';
import './App.css';
import {  FooterContainer, FormContainer, Header, MainContent, NavBarContainer } from './containers';
import { Content, Cta, FormBox } from './components';

function App() {
  return (
    <div className="App">
      <NavBarContainer/>
      <Header/>
      <MainContent/>
      <FormContainer/>
      <FooterContainer/>
    </div>
  );
}

export default App;
