import React from 'react';
import { AboutUs, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Laurels />
    <Gallery />
    <Intro />
    <FindUs />
    <Footer />
  </div>
);

export default App;
