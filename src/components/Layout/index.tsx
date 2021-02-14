import React, { useState, useEffect } from 'react';

import Sidebar from '../Sidebar';
import ContactsSidebar from '../ContactsSidebar';
import MobileContactsSidebar from '../MobileContactsSidebar';
import Main from '../Main';

import { Container } from './styles';

const Layout: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsChatOpen(true);
    }, 1500);
  })

  return(
    <Container>
      <Sidebar />
      <ContactsSidebar isChatOpen={isChatOpen} />
      <MobileContactsSidebar></MobileContactsSidebar>

      <Main isChatOpen={isChatOpen} />
    </Container>
  );
}

export default Layout;