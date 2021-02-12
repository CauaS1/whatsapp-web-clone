import React from 'react';

import { Container, SearchInput, Wrapper } from './styles';

const ContactsSidebar: React.FC<ChatProps> = ({ isChatOpen }) => {

  const ContactsRow = () => {
    return (
      <div className="contact-row" onClick={() => alert('Clicked')} >
        <img src="https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" 
          alt="Profile Avatar" />
        <div className="column">
          <h2>CauaS1</h2>
          <p>Hello there! I'm CauaS1 and i'm doing a Whatsapp project</p>
        </div>
      </div>
    )
  }

  return (
    <Container>
      <Wrapper>
        <SearchInput placeholder="Search or start a new chat" />

        <ContactsRow />
        <ContactsRow />
        <ContactsRow />
      </Wrapper>
    </Container>
  );
}

export default ContactsSidebar;