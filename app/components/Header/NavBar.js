import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

const NavBar = styled(Header)`
  width: 100%;
  z-index: 900;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background: white !important;
`;

export default NavBar;
