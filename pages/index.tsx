import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <>
      <Navbar />
      <VStack maxW={'100vw'} height={'100vh'} justifyContent={'center'}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="center"
          align="flex-start"
          gap={'15px'}
          alignContent={'center'}
        >
          <Box
            width={['xs', 'sm', 'md', 'lg']}
            maxH={'xs'}
            borderRadius="md"
            overflow="hidden"
            display={'flex'}
            flexDirection={'column'}
            gap={'10px'}
          >
            <Select
              variant="filled"
              placeholder="Choose a language"
              size="sm"
              borderRadius="md"
              defaultValue={'option'}
            >
              <option value="option" defaultChecked>
                Auto Detect
              </option>
              <option value="option1">English</option>
              <option value="option2">Spanish</option>
              <option value="option3">Portuguese</option>
            </Select>
            <Box>
              <Textarea
                variant="filled"
                size={'lg'}
                height={'3xs'}
                resize={'none'}
                maxLength={2000}
              />
              <Badge maxW={'70px'}>2000/2000</Badge>
            </Box>
          </Box>
          <Box
            width={['xs', 'sm', 'md', 'lg']}
            maxH={'xs'}
            borderRadius="md"
            overflow="hidden"
            display={'flex'}
            flexDirection={'column'}
            gap={'10px'}
          >
            <Select
              variant="filled"
              placeholder="Translate to"
              size="sm"
              borderRadius="md"
            >
              <option value="option1">English</option>
              <option value="option2">Spanish</option>
              <option value="option3">Portuguese</option>
            </Select>
            <Box>
              <Textarea
                variant="filled"
                size={'lg'}
                height={'3xs'}
                resize={'none'}
                maxLength={2000}
              />
            </Box>
          </Box>
        </Flex>
        <Center>
          <Button
            bgColor={'blue.200'}
            size="lg"
            display={'block'}
            color={'white'}
          >
            Traduzir
          </Button>
        </Center>
      </VStack>
    </>
  );
};

export default Index;
