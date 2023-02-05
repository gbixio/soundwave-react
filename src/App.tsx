import React from 'react';
import './App.css';
import {  Footer, FormContainer, Header, MainContent, NavBar } from './containers';
import { Brand, Content, Cta, Form, Links, SocialMedia } from './components';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <MainContent/>
      <FormContainer/>
      <Footer/>
    </div>
  );
}

export default App;
