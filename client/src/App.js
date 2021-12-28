import React, { useState, useEffect, 
				createContext, useContext } from 'react';
import './App.css';
import Home from './comp/Home';
import Register from './comp/Register';
import Login from './comp/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, 
		 InMemoryCache, 
		 ApolloProvider, 
		 useQuery, 
		 createHttpLink, 
		 gql } from "@apollo/client";


const httpLink = createHttpLink({
  // uri: 'https://servidor-gql-mintic.herokuapp.com/graphql',
  uri: 'http://localhost:5050/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem('token'));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
/*
  // Dos lineas de authContext.js
  const AuthContext = createContext(null);
  const useAuth = () => useContext(AuthContext);
  // Dos lineas de userContext.js
  const UserContext = createContext(null);
  const useUser = () => useContext(UserContext);
  */

  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState('');

  const setToken = (token) => {
    setAuthToken(token);
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('token');
    }
  };
  
  useEffect(() => {
    if (authToken) {
      const decoded = jwt_decode(authToken);
      setUserData({
        _id: decoded._id,
        name: decoded.name,
        lastname: decoded.lastname,
        identification: decoded.identification,
        email: decoded.email,
        rol: decoded.rol,
      });
    }
  }, [authToken]);
  
  return (
  <ApolloProvider client={client}>
    
		<BrowserRouter>
	  	  <Routes>
	  	    <Route path='/' element={<Home />}/>
			<Route path='registro' element={<Register />}/>
		    <Route path='login' element={<Login />} />
	  	  </Routes>
		</BrowserRouter>
  </ApolloProvider>
  );
}

export default App;
