import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCartProduct, fetchData } from '../Redux/action'
import { Box, Heading } from '@chakra-ui/react'
import {
  Flex,
  Circle,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,
} from '@chakra-ui/react';
import {useCart} from 'react-use-cart'
import { BsJustify, BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

const HomePage = () => {

  const product = useSelector((store)=>store.ecommerceData.Products)
  const dispatch =useDispatch()
   useEffect(()=>{
   if(product?.length===0){
       dispatch(fetchData())
   }
  },[dispatch,product?.length])
  
   console.log(product.id)

 const CartHandler = () =>{
  dispatch(addToCartProduct(product))

 }
 console.log(CartHandler)

  return (
    <Box backgroundColor={'black'}>
       
        <Box>
            <Heading textAlign='center' padding='5' color="white"  as='h2'>Offer Zone</Heading>
            <Flex flexWrap='wrap' justifyContent='space-evenly'>
                {product.map(product=>{
                    return <ProductAddToCart items={product} key ={product.id} image={product.filename} title={product.title} price={product.price} rating={product.rating} reviews={product.rating.count} type={product.type} description={product.description}/>
                })}
            </Flex>

            
        </Box>
    </Box>
  ) 
}



function Rating({ rating, reviews }) {
  return (
    <Box display='flex' alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {reviews} review{reviews > 1 && 's'}
      </Box>
    </Box>
  );
}

function ProductAddToCart({image,price,title,rating,reviews,type,description,CartHandler, items,props}) {

  const {addCart}=useCart();

  return (
    <Flex p={2} w="full" width='23%'display='table-cell' alignItems="center" justifyContent="center"  marginBottom="15px" >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
       

        <Image 
        width='420px'
        height='270px'
          src={image}
          alt={`Picture of ${title}`}
          roundedTop="lg"
          bgColor='#e3e3e3'
        />

        <Box p="6" borderTop="4px solid gray"  borderRadius='5px'>
          <Box d="flex" alignItems="baseline">
            {(
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                {type}
              </Badge>
            )}
          </Box>
          
            <Box
              fontSize="1xl"
              fontWeight="semibold"
              as="h5"
              lisneHeight="tight"
              isTruncated
              marginBottom='5px'
              marginTop='5px'>
              
              {title}
            </Box>
            
          

          <Flex justifyContent="space-between" alignContent="center" >
            <Rating d='flex' rating={rating} numReviews={reviews} />
            
          </Flex>

          <Box textAlign="justify" h='120px' marginTop="13px" marginBottom="10px">
            <h4  >{description}</h4>
          </Box>
          <Box  fontWeight="semibold" fontSize="2xl" color={useColorModeValue('red.400', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
              ₹ 
              </Box >
              
              {price.toFixed(2)}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
               <Button alignSelf='center' onClick={()=>addCart(items)}>ADD TO CART</Button>
              {/* <chakra.a  display={'flex'} p={1} textAlign={'center'} margin={'auto'}  onClick={()=>console.log(items)} >
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a> */}
            </Tooltip>
        
        </Box>
       
      </Box>
      
    </Flex>
  );
}

export default HomePage


