import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const startDate = new Date("September 21, 2021 01:15:00").getFullYear();
  const fromNow = new Date().getFullYear();
  return (
    <Box
      textAlign="center"
      p="5"
      color="gray.600"
      borderTop="1px"
      borderColor="gray.100"
      bottom="0"
    >
      © {startDate} - {fromNow}{" "}
      <Link href="/" paddingLeft="2">
        <a
          style={{
            color: "teal",
            textShadow:
              "rgb(235 235 235) 0px 2px 0px, rgb(64 53 53) 1px 2px 3px, rgb(227 227 227) 4px -3px 2px",
          }}
        >
          BANNA<span style={{ color: "tomato" }}>SREAL</span>STATE
        </a>
      </Link>
      , Inc.
    </Box>
  );
};

export default Footer;
