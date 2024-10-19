import { Box, Container, Stack, Text, Link, HStack, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
    const bgColor = useColorModeValue('gray.300', 'gray.900');
    const textColor = useColorModeValue('gray.700', 'gray.400');

    return (
        <Box bg={bgColor} color={textColor}>
            <Container as={Stack} maxW={'6xl'} py={4}>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justifyContent="space-between" alignItems="center">
                    
                    <HStack spacing={4}>
                        <Link href="https://twitter.com" isExternal>
                            <Icon as={FaTwitter} boxSize={6} />
                        </Link>
                        <Link href="https://fb.com" isExternal>
                            <Icon as={FaFacebook} boxSize={6} />
                        </Link>
                        <Link href="https://instagram.com" isExternal>
                            <Icon as={FaInstagram} boxSize={6} />
                        </Link>
                    </HStack>

                    <Text textAlign={'center'}>
                        © {new Date().getFullYear()} UShop. All rights reserved.
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
}

export default Footer;
