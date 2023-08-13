import { Box, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { CustomButton } from "./Button";
import { login } from "../services/login";

export const CardLogin = () => {
  return (
    <Box
      borderWidth={1}
      borderRadius={8}
      backgroundColor="#FFFFFF"
      p={8}
      margin={"auto"}
      marginTop={16}
      marginBottom={100}
      maxWidth={400}
      width="100%"
      boxShadow="lg"
    >
      <Heading mb={4}>Login</Heading>
      <FormControl id="email" mb={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Digite seu email" />
      </FormControl>
      <FormControl id="password" mb={4}>
        <FormLabel>Senha</FormLabel>
        <Input type="password" placeholder="Digite sua senha" />
      </FormControl>
      <CustomButton onClick={login} />
    </Box>
  );
};
