import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavContainer, NavContent, NavItem, Title, Menu, MenuItem, Button, SearchContainer, InputSearch } from '../styledComponents'

const Navbar = (props) => {
  return(
    <Nav transparent={props.dashboard || props.transparent}>
      <NavContainer>
        <NavContent>
          <NavItem flex={2}>
            <Title>Homeflix</Title>
          </NavItem>
          <NavItem flex={1}>
            {!props.dashboard ? (
              <Menu>
                <MenuItem>
                  <SearchContainer>
                    <i className="fas fa-search" style={{
                      fontSize: 16,
                      color: "#fff",
                      position: "absolute",
                      right: 15
                    }}></i>
                    <InputSearch type="text"/>
                  </SearchContainer>
                </MenuItem>
                <MenuItem>
                  <i class="far fa-user" style={{ marginRight: 10, fontSize: 16 }}></i>
                  Conta
                </MenuItem>
                <MenuItem>
                  <Link to="/" title="Sair da Homeflix">
                    <i className="fas fa-power-off" style={{
                      fontSize: 18,
                      color: "#fff"
                    }}></i>
                  </Link>
                </MenuItem>
              </Menu>
            ) : (
              <Menu>
                <MenuItem flexEnd>
                  <Link to="/inicio">
                    <Button>Entrar</Button>
                  </Link>
                </MenuItem>
                <MenuItem flexEnd>
                  <Link to="/inicio">
                    <Button register>Cadastre-se</Button>
                  </Link>
                </MenuItem>
              </Menu>
            )}
          </NavItem>
        </NavContent>
      </NavContainer>
    </Nav>
  )
}

export default Navbar
