import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col, Image, Avatar, Badge, Divider, Menu } from 'antd';
import A from 'components/A';
import { DownOutlined, BellFilled } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartArea,
  faChartLine,
  faEnvelope,
  faGear,
  faGem,
  faInfoCircle,
  faProjectDiagram,
  faStarHalfAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import logo from './codemi-logo.png';
import Side from './Sider';
import NavBar from './NavBar';

function HeaderPage({ content }) {
  return (
    <div>
      <Layout>
        <NavBar>
          <Row justify="center">
            <Col span={12}>
              <Image preview={false} width={100} src={logo} alt="Logo Codemi" />
            </Col>
            <Col span={12}>
              <div style={{ float: 'right' }}>
                <Badge size="small" count={18}>
                  <BellFilled style={{ fontSize: 25, color: 'darkgrey' }} />
                </Badge>
                <Avatar
                  size={50}
                  style={{ marginRight: 8, marginLeft: 30 }}
                  src="https://joeschmoe.io/api/v1/random"
                />
                <DownOutlined style={{ color: 'darkgrey', fontSize: 10 }} />
              </div>
            </Col>
          </Row>
        </NavBar>
        <Layout hasSider>
          <Side theme="light" width={250}>
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={['dashboard']}
            >
              <Menu.Item key="dashboard">
                <NavLink to="/dashboard">
                  <span>HOME</span>
                </NavLink>
              </Menu.Item>
              <Divider />

              <div style={{ marginLeft: 20, marginBottom: 20 }}>LEARNING</div>
              <Menu.Item key="course">
                <NavLink to="/course">
                  <FontAwesomeIcon icon={faGem} />
                  <A>Course</A>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="learning">
                <NavLink to="/learning">
                  <FontAwesomeIcon icon={faProjectDiagram} />
                  <A>Learning Plans</A>
                </NavLink>
              </Menu.Item>
              <Divider />

              <div style={{ marginLeft: 20, marginBottom: 20 }}>MANAGE</div>
              <Menu.Item key="users">
                <NavLink to="/users">
                  <FontAwesomeIcon icon={faUser} />
                  <A>Users</A>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="skill">
                <NavLink to="/skill">
                  <FontAwesomeIcon icon={faGear} />
                  <A>Skills</A>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="report">
                <NavLink to="/report">
                  <FontAwesomeIcon icon={faChartArea} />
                  <A>Report</A>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="analytics">
                <NavLink to="/analytics">
                  <FontAwesomeIcon icon={faChartLine} />
                  <A>Analytics</A>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="announcement">
                <NavLink to="/announcement">
                  <FontAwesomeIcon icon={faGear} />
                  <A>Announcements</A>
                </NavLink>
              </Menu.Item>
              <Divider />

              <div style={{ marginLeft: 20, marginBottom: 20 }}>CONFIGURE</div>
              <Menu.Item key="points">
                <NavLink to="/points">
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                  <A>Points</A>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="reward">
                <NavLink to="/reward">
                  <FontAwesomeIcon icon={faGear} />
                  <A>Reward</A>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="email">
                <NavLink to="/email">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <A>Email templates</A>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="info">
                <NavLink to="/info">
                  <FontAwesomeIcon icon={faInfoCircle} />
                  <A>Company info</A>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="billing">
                <NavLink to="/billing">
                  <FontAwesomeIcon icon={faUser} />
                  <A>Billing</A>
                </NavLink>
              </Menu.Item>
            </Menu>
          </Side>
          {content}
        </Layout>
      </Layout>
    </div>
  );
}
HeaderPage.propTypes = {
  content: PropTypes.func,
};

export default HeaderPage;
