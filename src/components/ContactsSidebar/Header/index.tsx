import React from 'react';

import { Container, MessageIcon, StatusIcon, SettingsIcon } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <img src="https://avatars.githubusercontent.com/u/56549728?s=460&u=b6a4d674674957ceda6026952be8c7f612f04626&v=4"
          alt="Avatar"
        />
        <nav>
          <button>
            <StatusIcon />
          </button>

          <button>
            <MessageIcon />
          </button>

          <button>
            <SettingsIcon />
          </button>
        </nav>
      </header>
    </Container>
  );
}

export default Header;