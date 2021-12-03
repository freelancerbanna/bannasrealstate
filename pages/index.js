import { Banner, Property } from "../components";
import { Box, Flex } from "@chakra-ui/react";
//
import { baseUrl, fetchApi } from "../components/tools/fetchApi";

import styles from "../styles/Home.module.css";
//
export default function Home({ forSale, forRent }) {
  return (
    <Box>
      <Banner
        assign="RENT A HOME"
        title1="Rental homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and many more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {forSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        assign="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap">
        {forRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}

export const getStaticProps = async () => {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );
  return {
    props: {
      forSale: propertyForSale?.hits,
      forRent: propertyForRent?.hits,
    },
  };
};
