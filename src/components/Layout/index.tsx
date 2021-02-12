import React, { useState } from 'react';

import Sidebar from '../Sidebar';
import ContactsSidebar from '../ContactsSidebar';
import Main from '../Main';


import { Container } from './styles';

const Layout: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return(
    <Container>
      <Sidebar />
      <ContactsSidebar isChatOpen={isChatOpen} />

      <Main isChatOpen={false} />
    </Container>
  );
}

export default Layout;