import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Icon, Flex } from "@chakra-ui/react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { useContext } from "react";

//
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
        d={["none", "none", "none", "block"]}
      />
    </Flex>
  );
};
export default LeftArrow;
