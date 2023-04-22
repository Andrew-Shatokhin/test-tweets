import React from 'react';
import { StyledLink } from './Layout';



const Navigation = () => {


  return (
    <nav>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      <StyledLink to="/tweets">Tweets</StyledLink>
    </nav>
  );
};

export default Navigation;
