import React from 'react';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import Crousal from './components/crousal/crousal';
import About from './components/aboutus/aboutus';
import HomeVideo from './components/homevideo/homevideo';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Menu/>
      <Crousal/>
      <About/>
      <HomeVideo/>
      <Footer/>
      {/* <header className="App-header">        
       Study to Shine        
      </header> */}
    </div>
  );
}

export default App;
