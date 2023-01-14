import './App.css';
import React from 'react';
import { AboutMe, Intro, MyProject, MyResume, Navbar } from './components';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const App: React.FC = () => {
  const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_RIGHT,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE,
  };
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <div className="App">
        <Navbar />
        <Intro />
        <AboutMe />
        <MyResume />
        <MyProject />
      </div>
    </AlertProvider>
  );
};

export default App;
