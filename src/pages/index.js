import Head from "next/head";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import NavBar from "@/components/layout/NavBar";
import AppLayout from "@/components/layout/AppLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Soultrace Wallet</title>
        <meta name="description" content="SBT Based Wallet Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w="100%">
        <Flex
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        ></Flex>
      </Flex>
      <AppLayout></AppLayout>
    </>
  );
}
