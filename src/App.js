import React from 'react';
import EventRegistrationForm from './components/EventRegistrationForm';
import './App.css';  // Import the CSS file

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Registration</h1>
      </header>
      <main>
        <EventRegistrationForm />
      </main>
    </div>
  );
};

export default App;
