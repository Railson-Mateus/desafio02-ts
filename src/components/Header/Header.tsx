import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex p={4} backgroundColor={"orange"}>
      <Image src="./logo-full.svg" alt="logo" width={120} />
      <Text fontSize="4xl" color={"white"} fontWeight={"bold"} marginLeft={460}>
        Dio Bank
      </Text>
    </Flex>
  );
};
