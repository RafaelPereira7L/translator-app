import React, { useEffect, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react';
import Btn from './Button';
import Selector from './Select';

export default function Input() {
  const [text, setText] = useState('');
  const [translate, setTranslate] = useState('');
  const toast = useToast();

  useEffect(() => {
    setTranslate(text.toUpperCase());
  }, [text, setTranslate]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(translate);
    toast({
      description: 'The translated text has been copied to your clipboard.',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
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
          <Selector placeholder="Choose a language" target={false} />

          <Box>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              variant="filled"
              size={'lg'}
              height={'3xs'}
              resize={'none'}
              maxLength={2000}
            />
            <Badge maxW={'70px'}>{text.length}/2000</Badge>
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
          <Selector placeholder="Translate to" target={true} />

          <Box>
            <Textarea
              value={translate}
              variant="filled"
              size={'lg'}
              height={'3xs'}
              resize={'none'}
              maxLength={2000}
              disabled
            />
            {translate ? (
              <Button
                colorScheme="blue"
                variant="outline"
                size="xs"
                onClick={() => copyToClipboard()}
              >
                Copy to clipboard
              </Button>
            ) : (
              ''
            )}
          </Box>
        </Box>
      </Flex>
      <Center>
        <Btn text={'Translate'} />
      </Center>
    </VStack>
  );
}
