import { Box } from '@chakra-ui/react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateProduct from './pages/CreateProduct'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useColorModeValue, Divider } from '@chakra-ui/react'

function App() {

  const bgColor = useColorModeValue('gray.100');

  return (
    <Box bg={bgColor} minH={"100vh"} position={"relative"} pb={{ base: 24, md: 16}}>
      <Box pb={{ base: 7, md: 1}}>
      <Navbar />
      </Box>
      <Divider />
      <Box >
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
      </Box>
      <Box w={"100%"} position={"absolute"} bottom={0}>
      <Footer key={"footer"} />
      </Box>
    </Box>
  )
}

export default App
