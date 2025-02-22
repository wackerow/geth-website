import { Box, Grid, GridItem, Image, Link, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';

import { ETHEREUM_ORG_URL } from '../../../constants';

interface Props {
  children: React.ReactNode;
}

export const WhatIsEthereum: FC<Props> = ({ children }) => {
  return (
    <Stack border='2px solid' borderColor='brand.light.primary'>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        borderBottom={{ base: 'none', md: '2px solid #11866f' }}
      >
        <GridItem
          borderRight={{ base: 'none', md: '2px solid #11866f' }}
          order={{ base: 2, md: 1 }}
        >
          <Stack
            p={4}
            borderBottom='2px solid'
            borderColor='brand.light.primary'
            sx={{ mt: '0 !important' }}
          >
            <Box as='h2' textStyle='h2'>
              What is Ethereum
            </Box>
          </Stack>

          <Stack
            p={4}
            borderBottom={{ base: '2px solid', md: 'none' }}
            borderColor='brand.light.primary'
            sx={{ mt: '0 !important' }}
          >
            {children}
          </Stack>
        </GridItem>

        <GridItem order={{ base: 1, md: 2 }}>
          <Stack
            justifyContent='center'
            alignItems='center'
            p={4}
            borderBottom={{ base: '2px solid', md: 'none' }}
            borderColor='brand.light.primary'
            h='100%'
          >
            {/* TODO: use NextImage */}
            <Image src='/images/pages/glyph-home-light.svg' alt='Ethereum glyph' />
          </Stack>
        </GridItem>
      </Grid>

      <Stack sx={{ mt: '0 !important' }}>
        <NextLink href={ETHEREUM_ORG_URL} passHref>
          <Link variant='button-link-secondary' isExternal>
            <Text textStyle='home-section-link-label'>Learn more on Ethereum.org</Text>
          </Link>
        </NextLink>
      </Stack>
    </Stack>
  );
};
