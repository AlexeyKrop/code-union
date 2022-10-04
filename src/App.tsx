import React from 'react';

import './App.css';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { SignUp } from './modals/SignUp/SignUp';

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header container">
        <Header />
      </header>
      <nav className="Search">
        <div className="container">
          <Search />
          <SignUp />
        </div>
      </nav>
    </div>
  );
};
