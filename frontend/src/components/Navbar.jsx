import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react"
import { Link } from "react-router-dom"
// import { Icon } from "@chakra-ui/icons"
import { CiSquarePlus } from "react-icons/ci";
import { FiSun, FiMoon } from "react-icons/fi";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={'6xl'}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          md: "row",
        }}
      >
        <Text
        textAlign={"center"}
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, blue.400, red.600)"}
          bgClip="text"
        >
          <Link to="/">UShop 🛒</Link>
        </Text>

        <HStack spacing={3} alignItems={"center"} pt={2}>
          <Link to="/create-product">
            <Button>
              <CiSquarePlus size={30} color="red" />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {/* <Icon as={colorMode === "light" ? FiMoon : FiSun} boxSize={"7"} /> */}
            {colorMode === "light" ? <FiMoon size={25} color="blue" /> : <FiSun size={28} color="yellow" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar