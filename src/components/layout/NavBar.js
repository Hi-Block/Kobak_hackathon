import React from "react";
import Link from "next/link";

import { HamburgerIcon } from "@chakra-ui/icons";

import {
  Box,
  Center,
  Circle,
  Divider,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

function NavBar(props) {
  const MenuBox = () => {
    return (
      <Menu>
        <MenuButton
          as={Circle}
          size={10}
          transition="0.2s"
          _hover={{
            border: "1px solid black",
          }}
        >
          <Center>
            <HamburgerIcon />
          </Center>
        </MenuButton>
        <MenuList>
          <MenuGroup title="Service">
            <Link href="/profile" passHref>
              <MenuItem>Profile</MenuItem>
            </Link>
            <MenuDivider />
            <Link href="/storage" passHref>
              <MenuItem>Storage</MenuItem>
            </Link>
            <Link href="/claim" passHref>
              <MenuItem>Claim</MenuItem>
            </Link>
            <Link href="/apps" passHref>
              <MenuItem>Apps</MenuItem>
            </Link>
            <MenuDivider />
          </MenuGroup>
        </MenuList>
      </Menu>
    );
  };

  return (
    <Box
      as="nav"
      w="100%"
      textAlign="center"
      bg="white"
      boxShadow="base"
      py={4}
      px={12}
      borderBottomWidth="1px"
      borderBottomStyle="solid"
      borderBottomColor="gray.200"
    >
      <Flex
        maxW={"container.lg"}
        w={{ base: "100%", lg: "80%" }}
        m="auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex gap={4} alignItems="center">
          <MenuBox />
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavBar;
