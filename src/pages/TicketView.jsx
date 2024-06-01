import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

const TicketView = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchTicket = async () => {
      const response = await axios.get(`http://localhost:5000/tickets/${id}`);
      setTicket(response.data);
    };

    fetchTicket();
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/tickets/${id}`);
    history.push('/tickets');
  };

  if (!ticket) return <Text>Loading...</Text>;

  return (
    <Box p={4}>
      <Heading>{ticket.title}</Heading>
      <Text>{ticket.description}</Text>
      <Text>Status: {ticket.status}</Text>
      <Text>Assignee: {ticket.assignee}</Text>
      <Text>Priority: {ticket.priority}</Text>
      <Button as={Link} to={`/ticket-edit/${ticket.id}`} colorScheme="teal">
        Edit
      </Button>
      <Button colorScheme="red" onClick={handleDelete}>
        Delete
      </Button>
    </Box>
  );
};

export default TicketView;
