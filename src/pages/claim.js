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
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

import AppLayout from "@/components/layout/AppLayout";

function claim(props) {
  return (
  <AppLayout>
    <Flex flexDir="column" w="100%" h="100%">
    <Box bg="#092C4C" w="100%" h="100%">
      <Box
        w="100%"
        h="100%"
        minH="calc(100vh - 72px)"
        bgColor="#eeeeee"
        pt="15vh"
        pb={24}
      >
      <VStack alignItems="start" w="70%" maxW="container.lg" m="auto">
        <Text
          color="black"
          fontSize="3rem"
          fontWeight="bold"
        >
          Claim Soulbound
        </Text>

        <Stack direction="row" pt="5vh">
                <Card maxW="sm">
                  <CardBody>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">KYC</Heading>
                      <Text>
                        Verify your identity onchain for more convenient experience.
                        Able to access more benefits by giving trust.
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button variant="solid" colorScheme="blue">
                      Claim
                    </Button>
                  </CardFooter>
                </Card>

                <Card maxW="sm">
                  <CardBody>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">Location Verification</Heading>
                      <Text>
                        By confirming location, get access to local web3 benefits.
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button variant="solid" colorScheme="blue">
                      Claim
                    </Button>
                  </CardFooter>
                </Card>

                <Card maxW="sm">
                  <CardBody>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="6">
                      <Heading size="md">HYBLOCK_Senior</Heading>
                      <Text>
                        Eligible Senior Member of HYBLOCK.
                        Able to perform original research & highest contribution
                        to web3 community.
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    {/* <ButtonGroup spacing="2"> */}
                    <Button variant="solid" colorScheme="blue">
                      Claim
                    </Button>
                  </CardFooter>
                </Card>
              </Stack>
        
      </VStack>
      </Box>
    </Box>
    </Flex>
  </AppLayout>)
}

export default claim;
