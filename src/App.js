import React from 'react';
import Navbar from './components/Navbar/Navbar.js'
import './App.css';
import Main from './components/Main/Main.js'
import Main1 from './components/Main1/Main1.js'
import Page1 from './components/Page1/Page1.js'
import Page2 from './components/Page2/Page2.js'
import Page3 from './components/Page3/Page3.js'
import Blog from './components/Blog/Blog.js'
import Searchbar from './components/Searchbar/Searchbar.js'
import Footer from './components/Footer/Footer.js'


function App() {
  return (
    <div>
     <Navbar />
     <Main />
     <Main1 />
     <Page1 />
     <Page2 />
     <Page3 />
     <Blog />
     <Searchbar />
     <Footer />
    </div>
  );
}

export default App;
