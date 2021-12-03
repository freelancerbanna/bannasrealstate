import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Nav = () => {
  return (
    <Flex p="2" width="full" borderBottom="1px" borderColor="gray.100">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
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
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FcMenu />}
            variant="outline"
            color="red.400"
          />
          <MenuList>
            <Link href="/" passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href="/search" passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href="/search?assign=for-sale" passHref>
              <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
            </Link>
            <Link href="/search?assign=for-rent" passHref>
              <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Nav;
