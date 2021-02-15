import React, { useState, useEffect } from 'react';
import { Container, Header, Content, InputContainer, Input, Emoji, Attach } from './styles';
import firebase from 'firebase';

import { db } from '../../../database/db';

import Zeke from '../../../images/zeke.png';
import Texting from '../../../images/text.svg';


interface AdvancedMessage {
  name: string;
  message: string;
}

interface Messages {
  messages_array: AdvancedMessage;
}

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Messages[]>([]); //<-- here too

  function firebaseStart() {
    var firebaseConfig = {
      apiKey: "AIzaSyDo5H6g32mPsVkQzNVC8R280mj77SqT3-Y",
      authDomain: "whatsapp-93372.firebaseapp.com",
      projectId: "whatsapp-93372",
      storageBucket: "whatsapp-93372.appspot.com",
      messagingSenderId: "43187777251",
      appId: "1:43187777251:web:447f7aee4dd30a8efd5fd6",
      measurementId: "G-NK47GCBWN2"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    };
  }

  function sendMessage() {
    db.collection("users").add({
      name: 'CauaS1',
      message: 'Hello guys!'
    }).then(() => alert("Success!")).catch(() => alert("Error"))
  }

  async function getMessages() {
    let list: Array<object> = [];
    await db.collection("users").get().then(messages => {
      messages.forEach(doc => {
        list.push(doc.data());
      })
    })

    // setMessages(list); //<-- here
    // console.log(list);
    // setMessages(list);
  }

  useEffect(() => {
    firebaseStart();
  })


  return (
    <Container>
      <Header>
        <img src={Zeke} alt="Avatar" />
        <div className="column">
          <h2>Zeke</h2>
          {/* <p>CauaS1, Gabriel, Andrea, Fernanda, Anne, Mark</p> */}
        </div>
      </Header>

      <Content>
        <img src={Texting} alt="Texting" />
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
        <button onClick={() => getMessages()} >Send</button>
      </InputContainer>
    </Container>
  );
}

export default ChatScreen;