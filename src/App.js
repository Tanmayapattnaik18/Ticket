import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import PrivateRoute from '../components/PrivateRoute';
import { AuthProvider } from '../context/AuthContext';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Tickets from '../pages/Tickets';
import TicketView from '../pages/TicketView';
import TicketCreate from '../pages/TicketCreate';
import TicketEdit from '../pages/TicketEdit';
import Login from '../pages/Login';

const App = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute component={Home} />} />
            <Route path="/about" element={<PrivateRoute component={About} />} />
            <Route path="/contact" element={<PrivateRoute component={Contact} />} />
            <Route path="/tickets" element={<PrivateRoute component={Tickets} />} />
            <Route path="/ticket/:id" element={<PrivateRoute component={TicketView} />} />
            <Route path="/create-ticket" element={<PrivateRoute component={TicketCreate} />} />
            <Route path="/ticket-edit/:id" element={<PrivateRoute component={TicketEdit} />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
