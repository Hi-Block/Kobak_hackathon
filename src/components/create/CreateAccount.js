import React from "react";

import {
  Badge,
  Box,
  Center,
  Flex,
  Stack,
  Text,
  VStack,
  Card,
  CardBody,
  Image,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

function CreateAccount(props) {
  return (
    <Flex flexDir="column" w="100%" h="100%">
      <Box bg="#092C4C" w="100%" h="100%">
        <Box
          w="100%"
          h="100%"
          minH="calc(100vh - 72px)"
          bgColor="#dddddd"
          pt="15vh"
          pb={24}
        >
          <VStack alignItems="start" w="80%" maxW="container.lg" m="auto">
            <Text
              color="black"
              fontSize="3rem"
              fontWeight="bold"
              alignSelf="center"
            >
              Create Your Account Here
            </Text>
            <Text
              color="black"
              fontSize="2rem"
              fontWeight="light"
              alignSelf="center"
            >
              Securely store and hold your sbt and compatible assets with
            </Text>

            <Stack
              direction="row"
              alignSelf="center"
              alignItems="center"
              pt="6"
            >
              <ButtonGroup spacing={10}>
                <Button
                  colorScheme="linkedin"
                  variant="solid"
                  size="md"
                  height="48px"
                  width="200px"
                >
                  Create Account
                </Button>
                <Button
                  colorScheme="linkedin"
                  variant="outline"
                  size="md"
                  height="48px"
                  width="200px"
                >
                  Import Existing Account
                </Button>
              </ButtonGroup>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}

export default CreateAccount;
