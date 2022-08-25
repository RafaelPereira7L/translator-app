import React from 'react';
import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { BsTranslate } from 'react-icons/bs';
import { DarkModeSwitch } from './DarkModeSwitch';

export default function Navbar() {
  return (
    <>
      <Box
        w={'100vw'}
        position={{ sm: 'relative', lg: 'fixed' }}
        top={0}
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
      >
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Flex direction={'row'} align={'center'} gap={'10px'}>
            <BsTranslate size={'30px'} />
            <Heading size={'lg'} fontWeight={'bold'}>
              TRANSLATOR APP
            </Heading>
          </Flex>
          <DarkModeSwitch />
        </Flex>
      </Box>
    </>
  );
}
