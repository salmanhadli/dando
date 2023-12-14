import { useRouter } from "next/navigation";
import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
export default function Header(children) {
  const router = useRouter();
  const navItems = [
    {
      text: "Home",
      href: "/home",
    },
    {
      text: "About Us",
    },
    {
      text: "Login/Logout",
    },
  ];

  const openRoute = (href) => {
    if (!href) return;
    router.push(href);
  };
  return (
    <Flex w="100%">
      <Box flex="1">
        {/* Main content */}
        {children.children}
      </Box>
    </Flex>
    // <header className={classes.header}>
    //   <div className={classes.logo}>
    //     <small>logo here</small>
    //   </div>
    //   <nav className={classes.navigation}>
    //     <ul className="flex">
    //       {navItems.map((navItem, i) => (
    //         <li
    //           style={{ marginInline: 6, cursor: 'pointer' }}
    //           key={i}
    //           onClick={() => openRoute(navItem.href)}>
    //           {navItem.text}
    //         </li>
    //       ))}
    //     </ul>
    //   </nav>
    // </header>
  );
}
