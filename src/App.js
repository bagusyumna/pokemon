import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import Home from './pages/home'
import Detail from './pages/detail'
import MyList from './pages/mylist'
import Refresh from './pages/refresh'

function App() {

  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.graphcdn.app'
  })

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pokemon' element={<Home/>}/>
          <Route path='/detail' element={<Detail/>}/>
          <Route path='/mylist' element={<MyList/>}/>
          <Route path='/refresh' element={<Refresh/>}/>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
