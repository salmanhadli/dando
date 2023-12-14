import Header from '../components/Layout/AppHeader';
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function RootLayout({ children }) {
  const router = useRouter();

  return (
    <ChakraProvider>
      <div className="overflow-hidden h-screen">
        <Header />
        <div className={router.pathname == "/login" ? "" : " main-body"}>
          {children}
        </div>
      </div>
    </ChakraProvider>
  );
}
