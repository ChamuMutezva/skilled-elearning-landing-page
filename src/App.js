//import { useEffect, useState } from 'react';
//import logo from './logo.svg';
import Header from './header/Header';
import './App.css';

function App() {  

  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <h2>main</h2>
      </main>
      <footer>
        <footer className="app-footer">
          <h3>footer</h3>
        </footer>
      </footer>
    </div>
  );
}

export default App;
