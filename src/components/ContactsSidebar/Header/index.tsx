import React from 'react';

import { FaCommentAlt, FaCircleNotch, FaEllipsisV } from 'react-icons/fa';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <img src="https://avatars.githubusercontent.com/u/56549728?s=460&u=b6a4d674674957ceda6026952be8c7f612f04626&v=4"
          alt="Avatar"
        />
        <nav>
          <button>
            <FaCircleNotch color="#808080" size={18} />
          </button>

          <button>
            <FaCommentAlt color="#808080" size={18} />
          </button>

          <button>
            <FaEllipsisV color="#808080" size={18} />
          </button>
        </nav>
      </header>
    </Container>
  );
}

export default Header;