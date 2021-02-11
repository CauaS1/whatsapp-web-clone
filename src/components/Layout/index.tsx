import React from 'react';

import Sidebar from '../Sidebar';
import ContactsSidebar from '../ContactsSidebar';
import Main from '../Main';

import { Container } from './styles';

const Layout: React.FC = () => {
  return(
    <Container>
      <Sidebar />
      <ContactsSidebar />

      <Main />
    </Container>
  );
}

export default Layout;