import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { Box, Button, Input, Select, Textarea, VStack, Heading } from '@chakra-ui/react';

const TicketEdit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [status, setStatus] = useState('Pending');
  const [priority, setPriority] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const fetchTicket = async () => {
      const response = await axios.get(`http://localhost:5000/tickets/${id}`);
      const { title, description, assignee, status, priority } = response.data;
      setTitle(title);
      setDescription(description);
      setAssignee(assignee);
      setStatus(status);
      setPriority(priority);
    };

    fetchTicket();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/tickets/${id}`, {
      title,
      description,
      assignee,
      status,
      priority,
    });
    history.push('/tickets');
  };

  return (
    <Box p={4}>
      <Heading>Edit Ticket</Heading>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          placeholder="Assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        />
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Progress">Progress</option>
          <option value="Completed">Completed</option>
        </Select>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </Select>
        <Button type="submit">Edit Ticket</Button>
      </VStack>
    </Box>
  );
};

export default TicketEdit;
