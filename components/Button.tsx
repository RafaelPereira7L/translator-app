import React from 'react';

import { Button } from '@chakra-ui/react';

type Props = {
  text: string;
  onClick: () => Promise<void>;
};

export default function Btn({ text, onClick }: Props) {
  return (
    <Button
      bgColor={'blue.200'}
      size="lg"
      display={'block'}
      color={'white'}
      _hover={{ bgColor: 'blue.500' }}
      _active={{ bgColor: 'blue.700', border: '2px', borderColor: 'blue.300' }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
