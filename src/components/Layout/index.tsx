import React from 'react';

import ContactsSidebar from '../ContactsSidebar';
import Main from '../Main';

import { Container } from './styles';

const Layout: React.FC = () => {
  return(
    <Container>
      <ContactsSidebar />

      <Main />
    </Container>
  );
}

export default Layout;