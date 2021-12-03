import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
const Banner = ({
  assign,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
  imageUrl,
}) => {
  return (
    <Flex justifyContent="center" flexWrap="wrap" m="10" alignItems="center">
      <Image src={imageUrl} alt="Banner" width={500} height={300} />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">
          {assign}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1}
          <br /> {title2}
        </Text>
        <Text color="gray.700" fontSize="lg" paddingTop="3" paddingBottom="3">
          {desc1}
          <br />
          {desc2}
        </Text>
        <Button
          fontSize="xl"
          bg="#3ab1aa"
          p="6"
          borderRadius="5"
          outline="none"
          border="none"
          color="white"
        >
          <Link href={linkName}>
            <a>{buttonText}</a>
          </Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default Banner;
