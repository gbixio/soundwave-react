import './App.css';
import { Route, Routes } from 'react-router-dom';
import { JoinContainer, HeroContainer, DiscoverContainer } from './containers';
import Layout from './containers/Layout';

function App() {
  return (
<div className="App">
      <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<HeroContainer/>}/>
        <Route path="/discover" element={<DiscoverContainer/>}/>
        <Route path="/join" element={<JoinContainer/>}/>
      </Route>
    </Routes>
    </div>
    // <div className="App">
    //   <HeroContent/>
    //   <DiscoverContainer/>
    //   <JoinContainer/>
    //   <FooterContainer/>
    // </div>
  );
}

export default App;
