import React from 'react';

import ContactsSidebar from '../ContactsSidebar';
import { Container } from './styles';

const Layout: React.FC = () => {
  return(
    <Container>
      <ContactsSidebar />
    </Container>
  );
}

export default Layout;