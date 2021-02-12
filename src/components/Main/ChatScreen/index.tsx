import React from 'react';

import { Container, Header, Content, InputContainer, Input, Emoji, Attach } from './styles';

const ChatScreen: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src="https://www.wallpapertip.com/wmimgs/32-328967_895706-title-imagine-cs-imagens-cs-go-4k.png" alt=""/>
        <div className="column">
          <h2>MaNos'S FaCas</h2>
          <p>CauaS1, Gabriel, Andrea, Fernanda, Anne, Mark</p>
        </div>
      </Header>

      <Content>
        <h1>Opa</h1>
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