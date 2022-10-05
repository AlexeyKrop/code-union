import React, { useEffect } from 'react';

import './App.css';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { Login } from './modals/Login/Login';
import { SignUp } from './modals/SignUp/SignUp';

export const App: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <header className="App-header container">
        <Header />
      </header>
      <nav className="Search">
        <div className="container">
          <Search />
          <SignUp />
          <Login />
        </div>
      </nav>
    </div>
  );
};
