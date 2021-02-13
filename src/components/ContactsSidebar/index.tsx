import React, { useState, useEffect } from 'react';
import { Container, SearchInput, Wrapper } from './styles';

import api from '../../services/api';

interface Src {
  large: string;
}

interface PhotoArray {
  id: number;
  photographer: string;
  src: Src;
}

interface Photo {
  photos: Array<PhotoArray>;
}


const ContactsSidebar: React.FC<ChatProps> = ({ isChatOpen }) => {
  const [profilePhotos, setProfilePhotos] = useState<Photo>();

  useEffect(() => {
    async function getPhotos() {
      const key = '563492ad6f91700001000001043e088e51e94c4898dad43bd37e16a6';
      const response = await api.get<Photo>('https://api.pexels.com/v1/search?query=profile&size=medium&per_page=5', {
        headers: {
          Authorization: key
        }
      });
      setProfilePhotos(response.data);
    }
    getPhotos();
  }, []);

  const ContactsRow = () => {
    return (
      <>
        {profilePhotos?.photos.map(profile => {
          return (
            <div className="contact-row" key={profile.id} >
              <img src={profile.src.large}
                alt="Avatarl" />
              <div className="column">
                <h2>{profile.photographer}</h2>
                <p>Random message</p>
              </div>
            </div>
          )
        })}
      </>
    )
  }



  return (
    <Container>
      <Wrapper>
        <SearchInput placeholder="Search or start a new chat" />

        <ContactsRow />
      </Wrapper>
    </Container>
  );
}

export default ContactsSidebar;