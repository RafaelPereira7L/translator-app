import React from 'react';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaLink, FaLinkedin } from 'react-icons/fa';
import { ReactNode } from 'react';

const SocialButton = ({
  children,
  label,
  href,
  target,
}: {
  children: ReactNode;
  label: string;
  href: string;
  target?: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target={target}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'100vw'}
        position={{ sm: 'relative', lg: 'fixed' }}
        bottom={0}
        left={0}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text fontWeight={'bold'}>Made with 💜 by RafaelDev</Text>
        <Stack direction={'row'} spacing={2}>
          <SocialButton
            label={'Github'}
            target={'_blank'}
            href={'https://github.com/RafaelPereira7L'}
          >
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={'Linkedin'}
            target={'_blank'}
            href={
              'https://www.linkedin.com/in/rafael-henrique-pereira-37b155232/'
            }
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label={'Portfolio'}
            target={'_blank'}
            href={'https://www.rafael-dev.tech/'}
          >
            <FaLink />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
