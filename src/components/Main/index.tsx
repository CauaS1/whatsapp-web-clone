import React, { useState, useEffect } from 'react';

import EmptyState from './EmptyState';
import { Container } from './styles';

const Main: React.FC = () => {
  const [isChatting, setIsChatting] = useState()

  return (
    <Container>
      <EmptyState />
    </Container>  
  );
}

export default Main;