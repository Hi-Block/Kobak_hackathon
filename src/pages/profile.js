import React from "react";
import { Container, SimpleGrid } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';
import { Stat } from '../components/variables/Stat';
const stats = [
  {
    label: 'Total Asset',
    value: '26.72 BNB',
  },
  {
    label: 'Soulbound',
    value: '7',
  },
  {
    label: 'Trust Score',
    value: '500',
  },
]


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
            bgColor="#dddddd"
            pt="15vh"
            pb={24}
          >
            <VStack alignItems="start" w="80%" maxW="container.lg" m="auto">
              <Box pos="relative" alignSelf="center">
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
              </Box>
              <Stack direction="row" alignSelf="center" alignItems="center" >
                <Text
                  color="black"
                  fontSize="3rem"
                  fontWeight="bold"
                  alignSelf="center"
                >
                  tonylim.bnb
                </Text>
                <CopyIcon w={8} h={8}/>
              </Stack>

              <Box
                alignSelf="center"
                as="section"
                py={{
                  base: '4',
                  md: '8',
                }}
              >
                <Container align="center">
                  <SimpleGrid
                    columns={{
                      base: 1,
                      md: 3,
                    }}
                    gap={{
                      base: '5',
                      md: '6',
                    }}
                  >
                    {stats.map(({ label, value }) => (
                      <Stat key={label} label={label} value={value} />
                    ))}
                  </SimpleGrid>
                </Container>
              </Box>
              <Stack direction="row" alignSelf="center">
                {/* <Badge>Default</Badge> */}
                <Badge colorScheme="blue">HYBLOCK_Senior</Badge>
                <Badge colorScheme="red">BlockHeaders</Badge>
                <Badge colorScheme="linkedin">KAIST_WEB3</Badge>
                <Badge colorScheme="purple">창원</Badge>
                <Badge colorScheme="green">Chainlink_ambassador</Badge>
              </Stack>
              
            </VStack>
          </Box>
        </Box>
      </Flex>
    </AppLayout>
  );
}

export default profile;
