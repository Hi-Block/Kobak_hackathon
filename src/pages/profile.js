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

function profile(props) {
  return (
    <AppLayout>
      <Flex flexDir="column" w="100%" h="100%">
        <Box bg="#092C4C" w="100%" h="100%">
          <Box
            w="100%"
            h="100%"
            minH="calc(100vh - 72px)"
            bgColor="#092C4C"
            pt="15vh"
            pb={24}
          >
            <VStack alignItems="start" w="70%" maxW="container.lg" m="auto">
              <Box pos="relative" alignSelf="center">
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
              </Box>
              <Text
                color="white"
                fontSize="3rem"
                fontWeight="bold"
                alignSelf="center"
              >
                Tony Lim
              </Text>
              <Stack direction="row" alignSelf="center">
                {/* <Badge>Default</Badge> */}
                <Badge colorScheme="blue">HYBLOCK_Senior</Badge>
                <Badge colorScheme="red">BlockHeaders</Badge>
                <Badge colorScheme="linkedin">KAIST_WEB3</Badge>
                <Badge colorScheme="purple">창원</Badge>
                <Badge colorScheme="green">Chainlink_ambassador</Badge>
              </Stack>
              <Stack direction="row" pt="5vh">
                <Card maxW="sm">
                  <CardBody>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">HYBLOCK_Senior</Heading>
                      <Text>
                        This sofa is perfect for modern tropical spaces, baroque
                        inspired spaces, earthy toned spaces and for people who
                        love a chic design with a sprinkle of vintage design.
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    {/* <ButtonGroup spacing="2"> */}
                    <Button variant="solid" colorScheme="blue">
                      Info
                    </Button>
                    {/* <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button> */}
                    {/* </ButtonGroup> */}
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
                      <Heading size="md">HYBLOCK_Senior</Heading>
                      <Text>
                        This sofa is perfect for modern tropical spaces, baroque
                        inspired spaces, earthy toned spaces and for people who
                        love a chic design with a sprinkle of vintage design.
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    {/* <ButtonGroup spacing="2"> */}
                    <Button variant="solid" colorScheme="blue">
                      Info
                    </Button>
                    {/* <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button> */}
                    {/* </ButtonGroup> */}
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
                      <Heading size="md">HYBLOCK_Senior</Heading>
                      <Text>
                        This sofa is perfect for modern tropical spaces, baroque
                        inspired spaces, earthy toned spaces and for people who
                        love a chic design with a sprinkle of vintage design.
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    {/* <ButtonGroup spacing="2"> */}
                    <Button variant="solid" colorScheme="blue">
                      Info
                    </Button>
                    {/* <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button> */}
                    {/* </ButtonGroup> */}
                  </CardFooter>
                </Card>
              </Stack>
              {/* <Box pt={10}>
						<Text color="white" fontSize="1rem" whiteSpace="pre-line">
							{
								"국내에서 가장 많은 판례를 제공합니다.\n특히 가장 많은 최신의하급심판례를 만나실 수 있습니다."
							}
						</Text>
					</Box> */}
            </VStack>
          </Box>
        </Box>
      </Flex>
    </AppLayout>
  );
}

export default profile;
