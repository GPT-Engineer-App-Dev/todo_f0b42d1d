import { useState } from "react";
import { Box, Input, Button, List, ListItem, ListIcon, IconButton, Heading, VStack } from "@chakra-ui/react";
import { FaTrash, FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <VStack p={8}>
      <Heading mb={6}>Todo App</Heading>
      <Box>
        <Input placeholder="Add a new task" value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} size="lg" mr={2} />
        <Button onClick={handleAddTodo} colorScheme="blue" px={8} leftIcon={<FaPlus />}>
          Add
        </Button>
      </Box>
      <List spacing={3} mt={6} w="100%">
        {todos.map((todo, index) => (
          <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
            {todo}
            <IconButton icon={<FaTrash />} aria-label="Delete task" colorScheme="red" onClick={() => handleDeleteTodo(index)} />
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;
