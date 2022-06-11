import React, {useState} from 'react';
import './styles/App.css';
import './styles/fonts.css';

import Navbar from './components/navbar/Navbar.jsx';
import Header from './components/header/Header.jsx';
import About from './components/about/About.jsx';
import BusinessFriends from './components/businessFriends/BusinessFriends.jsx';
import OurProjects from './components/ourProjects/OurProjects.jsx';
import Services from './components/services/Services.jsx';
import Contact from './components/contact/Contact.jsx';

function App() {
    const [element, setElement] = useState('');

    
  return (
    <div className="App">
        <Navbar event={element} setElement={setElement} />
        <Header/>
        <About event={element} />
        <BusinessFriends event={element}/>
        <OurProjects event={element} />
        <Services event={element} />
        <Contact event={element} />
    </div>
  );
};

export default App;
