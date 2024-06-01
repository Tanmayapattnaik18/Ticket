import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <Box display="flex" justifyContent="space-between" p={4} bg="gray.100">
      <Box>
        <Link to="/">Home</Link>
        <Link to="/about" ml={4}>About</Link>
        <Link to="/contact" ml={4}>Contact</Link>
        <Link to="/tickets" ml={4}>Tickets</Link>
      </Box>
      <Box>
        {isLoggedIn ? (
          <Button onClick={logout}>Logout</Button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
