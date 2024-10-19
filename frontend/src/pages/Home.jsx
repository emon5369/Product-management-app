import { Container, Heading, Button, Text, SimpleGrid, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

function Home() {
  const { getProducts, products } = useProductStore()
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  console.log(products);

  return (
    <Container maxW="7xl" py={8}>
      <VStack spacing={8}>
        <Heading as={"h1"} size="2xl" color="teal.500" textAlign={"center"} fontFamily={"serif"}>
          Current Products
        </Heading>

        {products.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} justifyContent={"center"} alignItems={"center"} w={"100%"}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>
        ) : (
          <>
            <Text fontSize={"xl"} color={"gray.500"} fontWeight={"bold"}
              fontFamily={"serif"} >
              No products available!
            </Text>
            <Link to={"/create-product"} >
              <Button p={6} mt={7} bg={'blue.500'} color={'white'} _hover={{ bg: 'green.400', color: 'white' }} >
                Create new product
              </Button>
            </Link>
          </>
        )}
      </VStack>
    </Container>
  )
}

export default Home