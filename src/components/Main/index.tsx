import React, { useState, useEffect } from 'react';

import EmptyState from './EmptyState';
import ChatScreen from './ChatScreen';
import { Container } from './styles';

const Main: React.FC<ChatProps> = ({ isChatOpen }) => {
  const [isChatting, setIsChatting] = useState(isChatOpen)

  return (
    <Container>
      {!isChatting ? (
        <EmptyState />
      ) : (
        <ChatScreen />  
      )}


    </Container>
  );
}

export default Main;