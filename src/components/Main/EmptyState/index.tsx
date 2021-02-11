import React from 'react';

import { Container, Image } from './styles';

const EmptyState: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <h2>Keep your phone connected</h2>
        <p>WhatsApp connect to your phone so sync messages. To reduce data <br />
      usage, connect your phone to to Wi-Fi
      </p>
      </div>
    </Container>
  );
}

export default EmptyState;