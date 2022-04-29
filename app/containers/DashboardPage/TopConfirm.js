import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Col, Divider, List, Row, Space } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

function TopConfirm({ data }) {
  const DividerTable = styled(Divider)`
    margin: 0 !important;
    opacity: 0.6;
  `;
  return (
    <Card>
      <List
        header={
          <Row>
            <Col span={12}>Users</Col>
            <Col span={6} className="float-right">
              Completed
            </Col>
            <Col span={6} className="float-right">
              Points
            </Col>
          </Row>
        }
        dataSource={data}
        renderItem={item => (
          <Row>
            <Col span={12}>
              <List.Item>
                <span className="default">{item.combinedKey}</span>
              </List.Item>
            </Col>
            <Col span={6}>
              <List.Item className="float-right">
                <span>
                  {item.confirmed.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </List.Item>
            </Col>
            <Col span={6}>
              <List.Item className="float-right">
                <span>{item.deaths.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
              </List.Item>
            </Col>
            <DividerTable />
          </Row>
        )}
      />
      <NavLink to="/dashboard" className=" float-right default mt-20">
        <Space align="start">
          <h3 className="mb-0 default">USER REPORT</h3>
          <RightOutlined />
        </Space>
      </NavLink>
    </Card>
  );
}

TopConfirm.propTypes = {
  data: PropTypes.array,
};

export default TopConfirm;
