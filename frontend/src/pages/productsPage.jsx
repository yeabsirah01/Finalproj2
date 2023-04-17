import ProdFeaturesCard from "../components/products/product";
import NavbarNested from "../components/products/ProductNavbar";
import "../styles/product-page.css";

import product from "../product.json";

import { Flex, ScrollArea, SimpleGrid } from "@mantine/core";

function ProductPage() {
  return (
    <div className="container">
      <div className="catagory-list">
        <NavbarNested />
      </div>

      <div className="product-list">
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
      </div>
    </div>
  );
}
export default ProductPage;
