import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

export const Header = () => (
  <Navbar>
      <NavbarBrand>
        <a>
          <img src="/static/images/hexo-note-logo.svg" width="30" height="30" className="d-inline-block align-top" alt=""/> Hexo Note
        </a>
      </NavbarBrand>
  </Navbar>
);
