import {
  Box,
  ChakraProvider,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { CustomButton } from "./components/Button";
import { Layout } from "./components/Layout";
import { login } from "./services/login";
import { CardLogin } from "./components/Card";

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#9413dc">
        <Layout>
          <CardLogin />
        </Layout>
      </Box>
    </ChakraProvider>
  );
}

export default App;
