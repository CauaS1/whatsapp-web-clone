import React, { useState, useEffect } from 'react';

import { Container, Avatar } from './styles';

import api from '../../services/api';

interface Src {
  large: string;
}

interface PhotosArray {
  id: string;
  src: Src;
}

interface Photo {
  photos: Array<PhotosArray>;
}

const MobileContactsSidebar: React.FC = () => {
  const key = '563492ad6f91700001000001043e088e51e94c4898dad43bd37e16a6';
  const [photoAvatar, setPhotoAvatar] = useState<Photo>();

  useEffect(() => {
    async function getPhotos() {
      const response = await api.get<Photo>("https://api.pexels.com/v1/search?query=profile&size=medium&per_page=5", {
        headers: {
          Authorization: key
        }
      });

      setPhotoAvatar(response.data);
    }
    getPhotos();
  }, [])

  // console.log(photoAvatar?.photos);

  const ProfileAvatar = () => {
    return (
      <>
        {photoAvatar?.photos.map(photo => {
          return (
            <Avatar src={photo.src.large} key={photo.id}
              alt="Opa"
            />
          )
        })
        }
      </>
    )
  }

  return (
    <Container>
      <ProfileAvatar />
    </Container>
  );
}

export default MobileContactsSidebar;