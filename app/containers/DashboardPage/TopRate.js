import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Col, Divider, List, Row, Space } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

function TopRate({ data }) {
  const DividerTable = styled(Divider)`
    margin: 0 !important;
    opacity: 0.6;
  `;
  return (
    <Card>
      <List
        header={
          <Row>
            <Col span={12}>Courses</Col>
            <Col span={6}>Completed</Col>
            <Col span={6}>Completion %</Col>
          </Row>
        }
        dataSource={data}
        renderItem={item => (
          <Row>
            <Col span={12}>
              <List.Item>{item.combinedKey}</List.Item>
            </Col>
            <Col span={6}>
              <List.Item>
                {parseFloat(item.incidentRate)
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              </List.Item>
            </Col>
            <Col span={6}>
              <List.Item>
                {parseFloat(item.caseFatalityRatio).toFixed(2)} %
              </List.Item>
            </Col>
            <DividerTable />
          </Row>
        )}
      />
      <NavLink to="/dashboard" className=" float-right mt-20">
        <Space align="center">
          <h3 className="mb-0 ">COURSE REPORT</h3>
          <RightOutlined />
        </Space>
      </NavLink>
    </Card>
  );
}

TopRate.propTypes = {
  data: PropTypes.array,
};

export default TopRate;
