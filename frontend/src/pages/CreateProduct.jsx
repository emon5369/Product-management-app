import { Box, Button, Container, Heading, Input, InputGroup, InputLeftElement, Stack, VStack, useToast } from "@chakra-ui/react"
import { MdDriveFileRenameOutline } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { HiCurrencyDollar } from "react-icons/hi";
import { useState } from "react";
import { useProductStore } from "../store/product";


const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: ''
  })

  const { createProduct } = useProductStore();
  const toast = useToast();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(product);
    toast({
      title: success ? 'Success' : 'Error',
      description: message,
      status: success ? 'success' : 'error',
      duration: 3000,
      isClosable: true,
    })
    setProduct({ name: '', price: '', image: '' });
  }

  return (
    <Container maxW="6xl" pt={{ base: 36, md: 44, lg: 20}}>
      <VStack spacing={8}>
        <Heading as={"h1"} size="2xl" color="teal.500" textAlign={"center"}
        fontFamily={"serif"}>
          Create Product
        </Heading>

        <Box minW={{base: "90%", md:"60%", lg:"35%"}} borderWidth="1px" borderRadius="lg" p={4}>
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <MdDriveFileRenameOutline color='gray' />
              </InputLeftElement>
              <Input 
              placeholder='Product name' 
              name="name"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value})}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em'>
                <HiCurrencyDollar color='gray' />
              </InputLeftElement>
              <Input 
              placeholder='Enter price'
              name="price"
              value={product.price}
              onChange={(e) => setProduct({ ...product, price: e.target.value})}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em'>
                <CiImageOn color='gray' /> 
              </InputLeftElement>
              <Input 
              placeholder='Enter Image URL' 
              name="image"
              value={product.image}
              onChange={(e) => setProduct({ ...product, image: e.target.value})}
              />
            </InputGroup>

            <Button colorScheme={"teal"} onClick={handleAddProduct}> Add Product </Button>
          </Stack>
        </Box>
    </VStack>
  </Container >
  )
}

export default CreateProduct