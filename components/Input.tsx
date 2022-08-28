import React, { useState } from 'react';
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Select,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react';
import Btn from './Button';
import { api } from '../utils/api';
import Options from './Options';

export default function Input() {
  const [source, setSource] = useState('');
  const [target, setTarget] = useState('');

  const [text, setText] = useState('');
  const [translate, setTranslate] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(translate);
    toast({
      description: 'The translated text has been copied to your clipboard.',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  const translateText = async () => {
    if (source === '' || target === '' || text === '') {
      toast({
        description: 'Please check the fields.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      setTranslate('');
      return;
    }
    setLoading(true);
    const response = await api({ text, target, source });
    setTranslate(response);
    setLoading(false);
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
          <Select
            variant="filled"
            placeholder="Choose a language"
            size="sm"
            borderRadius="md"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          >
            <Options target={'source'} />
          </Select>

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
          <Select
            variant="filled"
            placeholder="Translate to"
            size="sm"
            borderRadius="md"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          >
            <Options target={'target'} />
          </Select>

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
        <Btn
          text={'Translate'}
          onClick={() => translateText()}
          isLoading={loading}
        />
      </Center>
    </VStack>
  );
}
