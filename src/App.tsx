import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Button, Text } from "@mantine/core";

import { useStore } from "./store";
import { shallowEqual } from "@mantine/hooks";

const DoNothing = () => {
  const { doNothing } = useStore((state) => state);
  return (
    <Button size="xl" m={4} onClick={doNothing}>
      Do Nothing
    </Button>
  );
};

const AddFirstButton = () => {
  const { addToFirst } = useStore((state) => state);
  return (
    <Button size="xl" m={4} onClick={addToFirst}>
      Add To First
    </Button>
  );
};

const FirstValue = () => {
  const firstNumber = useStore((state) => state.firstNumber);
  return <Text>First Value: {firstNumber}</Text>;
};

const AddSecondButton = () => {
  const { addToSecond } = useStore((state) => state);
  return (
    <Button size="xl" m={4} onClick={addToSecond}>
      Add To Second
    </Button>
  );
};

const SecondValue = () => {
  const secondNumber = useStore((state) => state.secondNumber);
  return <Text>Second Value: {secondNumber}</Text>;
};

const NumbersValue = () => {
  const numbers = useStore((state) => state.numbers, shallowEqual);
  return <Text>Numbers Value: {numbers.join("")}</Text>;
};

function App() {
  return (
    <Box p={10}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <DoNothing />
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <AddFirstButton />
        <FirstValue />
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <AddSecondButton />
        <SecondValue />
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <NumbersValue />
      </Box>
    </Box>
  );
}

export default App;
