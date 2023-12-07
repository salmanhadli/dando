import Header from '../components/Layout/AppHeader';
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({ children }) {
  return (
    <ChakraProvider>
      <Header>{children}</Header>
    </ChakraProvider>
  );
}
