import React, { useContext, useState } from 'react';
import { Box, Input, Button, Text } from '@chakra-ui/react';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          mb={4}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mb={4}
        />
        <Button type="submit" colorScheme="blue">Login</Button>
      </form>
      {error && <Text color="red.500" mt={4}>{error}</Text>}
    </Box>
  );
};

export default Login;
