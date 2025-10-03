import React from 'react';
import { Card } from "../ui/compositions/Cards/Cards";
import { Input } from "../ui/primitives/Input/Input";
import { Button } from "../ui/primitives/Button/Button";
import { TextHeading } from "../ui/primitives/Text/Text";
import { Flex } from "../ui/layout/Flex/Flex";

const Login = () => {
  return (
    <Flex direction="column" align="center" justify="center" style={{ minHeight: '100vh' }}>
      <Card direction="vertical" style={{ padding: '2rem', width: '300px' }}>
        <TextHeading level="1" size="24" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Login</TextHeading>
        <form>
          <Input
            label="Email or Username"
            type="text"
            name="username"
            placeholder="Enter your username or email"
            style={{ marginBottom: '1rem' }}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            style={{ marginBottom: '1.5rem' }}
          />
          <Button variant="primary" type="submit" style={{ width: '100%' }}>
            Login
          </Button>
        </form>
      </Card>
    </Flex>
  );
};

export default Login;
