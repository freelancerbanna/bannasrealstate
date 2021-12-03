import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Footer, Nav } from ".";

const Main = ({ children }) => {
  return (
    <>
      <Head>
        <title>Bannas Real Estate</title>
      </Head>
      <Box maxWidth="1280px" m="0 auto">
        <header>
          <Nav />
        </header>
        <main>{children}</main>
        <footer>
          {" "}
          <Footer />
        </footer>
      </Box>
    </>
  );
};
export default Main;
