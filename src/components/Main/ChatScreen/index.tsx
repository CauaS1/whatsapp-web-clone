import React from 'react';
import { Container, Header, Content, InputContainer, Input, Emoji, Attach } from './styles';

import Zeke from '../../../images/zeke.png';
import Texting from '../../../images/text.svg';

const ChatScreen: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={Zeke} alt="Avatar"/>
        <div className="column">
          <h2>Zeke</h2>
          {/* <p>CauaS1, Gabriel, Andrea, Fernanda, Anne, Mark</p> */}
        </div>
      </Header>

      <Content>
        <img src={Texting} alt="Texting"/>

        <h2>Send your first message</h2>
      </Content>

      <InputContainer>
        <button>
          <Emoji />
        </button>

        <button>
          <Attach />
        </button>

        <Input placeholder="Type a message" />
      </InputContainer>
    </Container>
  );
}

export default ChatScreen;