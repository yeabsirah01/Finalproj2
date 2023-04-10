import ProdFeaturesCard from "./product";
import NavbarNested from "./ProductNavbar";

import product from "../product";

import { Flex, ScrollArea, SimpleGrid } from "@mantine/core";

function ProductPage() {
  console.log(product);
  return (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
      <>
        <NavbarNested />
      </>
      <>
        <ScrollArea
          h={800}
          scrollbarSize={10}
          style={{ marginLeft: 10, marginTop: 10 }} // This is a margin for the product right screen
        >
          <SimpleGrid cols={4}>
            {product.map((product) => (
              <ProdFeaturesCard key={product.id} product={product} />
            ))}
          </SimpleGrid>
        </ScrollArea>
      </>
    </Flex>
  );
}
export default ProductPage;
