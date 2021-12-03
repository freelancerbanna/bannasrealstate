import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "..";

const ImageScrolling = ({ data }) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
    >
      {data.map((item) => (
        <Box
          key={item.id}
          width="910px"
          itemId={item.id}
          overflow="hidden"
          p="1"
        >
          <Image
            placeholder="property"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
            alt="item-image"
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};
export default ImageScrolling;
