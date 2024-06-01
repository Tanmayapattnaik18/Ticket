import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Heading, SimpleGrid, Button, Text } from '@chakra-ui/react'; // Import Text here
import { Link } from 'react-router-dom';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await axios.get('http://localhost:5000/tickets');
      setTickets(response.data);
    };

    fetchTickets();
  }, []);

  return (
    <Box p={4}>
      <Heading>Tickets</Heading>
      <Button as={Link} to="/create-ticket" colorScheme="teal" mb={4}>
        Create Ticket
      </Button>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        {tickets.map((ticket) => (
          <Box key={ticket.id} borderWidth="1px" borderRadius="lg" p={4}>
            <Heading size="md">{ticket.title}</Heading>
            <Text>Status: {ticket.status}</Text>
            <Text>Priority: {ticket.priority}</Text>
            <Button as={Link} to={`/ticket/${ticket.id}`} colorScheme="teal">
              View
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Tickets;
