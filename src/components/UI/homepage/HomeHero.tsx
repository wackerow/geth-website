import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';

import { DOCS_PAGE, DOWNLOADS_PAGE } from '../../../constants';

export const HomeHero: FC = () => {
  return (
    <Stack
      border='2px solid'
      borderColor='brand.light.primary'
      px={4}
      py={{ base: 8, md: 24, lg: 48 }}
      flexGrow={1}
    >
      <Box mb={4}>
        <Box
          as='h1'
          textStyle='h1'
          mb={{ base: 2, md: 4 }}
          textAlign={{ base: 'center', md: 'left' }}
          fontSize={{ base: '3rem', md: '6rem'}}
          lineHeight={{ md: '6rem' }}
          fontWeight='500'
        >
          go-ethereum
        </Box>

        <Text textStyle='homepage-description'>
          Official Go implementation of the Ethereum protocol
        </Text>
      </Box>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
      >
        <Flex direction='column' alignItems='center' mr={{ md: 6 }}>
          <NextLink href={DOWNLOADS_PAGE} passHref>
            <Button variant='primary' as='a' mb={1}>
              <Text textStyle='homepage-primary-label'>Download</Text>
            </Button>
          </NextLink>

          <Text mt={1} mb={5} textStyle='hero-text-small'>
            Get our latest releases
          </Text>
        </Flex>

        <Flex direction='column' alignItems='center'>
          <NextLink href={DOCS_PAGE} passHref>
            <Button variant='primary' as='a' mb={1}>
              <Text textStyle='homepage-primary-label'>Documentation</Text>
            </Button>
          </NextLink>

          <Text mt={1} fontSize='13px' fontFamily='"Inter", sans-serif' alignSelf='center'>
            Read our documentation
          </Text>
        </Flex>
      </Flex>
    </Stack>
  );
};
