// Libraries
import { Container } from '@chakra-ui/react';
import { FC } from 'react';

// Components
import { Header } from '../UI';
import { Footer } from './Footer'

interface Props {
  children?: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Container maxW={{ base: 'container.sm', md: 'container.2xl' }} my={7}>
      <Header />

      {children}

      <Footer />
    </Container>
  );
};
