import {
    Box, Heading, HStack, Image, Text, IconButton, useColorModeValue, useToast, Input,
    Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,
    ModalCloseButton,
    useDisclosure,
    VStack
} from "@chakra-ui/react"
import { LuClipboardEdit } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useProductStore } from "../store/product";
import { useState } from "react";

function ProductCard({ product }) {
    const bgColor = useColorModeValue("yellow.100", "gray.600");
    const textColor = useColorModeValue("gray.600", "white");

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const { deleteProduct, updateProduct } = useProductStore();
    const toast = useToast();

    const handleUpdate = async (id, updatedProduct) => {
        const { success, message } = await updateProduct(id, updatedProduct);
        onClose();
        toast({
            title: success ? 'Success' : 'Error',
            description: message,
            status: success ? 'success' : 'error',
            duration: 3000,
            isClosable: true
        })
    }

    const handleDelete = async (id) => {
        const { success, message } = await deleteProduct(id);
        toast({
            title: success ? 'Success' : 'Error',
            description: message,
            status: success ? 'success' : 'error',
            duration: 3000,
            isClosable: true
        })
    }

    return (
        <Box shadow={"xl"} p={2} rounded={"lg"} overflow={"hidden"} _hover={{ transform: "translateY(-5px) scale(1.02)", shadow: "2xl" }} bg={bgColor} >
            <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

            <Box p={3}>
                <Heading as={"h3"} size="lg" fontFamily={"serif"}>
                    {product.name}
                </Heading>
                <Text color={textColor} fontFamily={"serif"} fontWeight={"bold"} fontSize={"lg"} > ${product.price} </Text>

                <HStack spacing={2} pt={2}>
                    <IconButton
                        variant='outline'
                        colorScheme='teal'
                        aria-label='Edit'
                        fontSize='20px'
                        icon={<LuClipboardEdit />}
                        onClick={onOpen}
                    />
                    <IconButton
                        variant='outline'
                        colorScheme='red'
                        aria-label='Delete'
                        fontSize='20px'
                        icon={<RiDeleteBin6Line />}
                        onClick={() => handleDelete(product._id)}
                    />
                </HStack>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Update Product</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <VStack spacing={4}>
                                <Input placeholder='Name' name="name"
                                    value={updatedProduct.name} onChange={(e) =>
                                        setUpdatedProduct({ ...updatedProduct, name: e.target.value })} />
                                <Input placeholder='Price' name="price"
                                    value={updatedProduct.price} onChange={(e) =>
                                        setUpdatedProduct({ ...updatedProduct, price: e.target.value })} />
                                <Input placeholder='Image URL' name="image"
                                    value={updatedProduct.image} onChange={(e) =>
                                        setUpdatedProduct({ ...updatedProduct, image: e.target.value })} />
                            </VStack>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3}
                                onClick={() => handleUpdate(product._id, updatedProduct)} >
                                Update
                            </Button>
                            <Button variant={'ghost'} onClick={onClose}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Box>
    )
}

export default ProductCard