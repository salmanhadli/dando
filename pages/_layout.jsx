import Header from '../components/Layout/AppHeader';
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({ children }) {
  return (
    <ChakraProvider>
      <div className="overflow-hidden h-screen">
        <Header />
        <div className="main-body">{children}</div>
      </div>
    </ChakraProvider>
  );
}
