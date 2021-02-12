import React from 'react';

import { Container, Image } from './styles';
import Icon from '../../../images/phone.svg';

const EmptyState: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <Image src={Icon} alt="Icon" />
        <h2>Keep your phone connected</h2>
        <p>WhatsApp connect to your phone so sync messages. To reduce data <br />
      usage, connect your phone to to Wi-Fi
      </p>
      </div>
    </Container>
  );
}

export default EmptyState;