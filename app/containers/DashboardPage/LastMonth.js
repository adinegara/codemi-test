import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Col, Divider, List, Row, Space } from 'antd';
import { Column } from '@ant-design/plots';
import { RightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

function LastMonth({ monthly, total, top }) {
  const TextTitle = styled.h1`
    color: white;
    font-size: 50px;
  `;

  const CardContainer = styled(Card)`
    background: #4895ef !important;
    color: white !important;
  `;

  const DividerTitle = styled(Divider)`
    background: white;
    margin-top: 10px !important;
  `;
  const DividerTable = styled(Divider)`
    background: white;
    margin: 0 !important;
    opacity: 0.6;
  `;

  const config = {
    data: monthly,
    color: 'white',
    height: 200,
    xField: 'lastUpdate',
    yField: 'confirmed',
    xAxis: false,
    yAxis: false,
  };

  return (
    <CardContainer>
      <strong>Active User Right Now</strong>
      <TextTitle>
        {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
      </TextTitle>
      <div>Page views per minute</div>
      <DividerTitle />
      <Column {...config} />
      <div className="mt-20">
        <List
          className="white"
          header={
            <Row>
              <Col span={18}>Top Active Pages</Col>
              <Col span={6}>Active Users</Col>
            </Row>
          }
          dataSource={top}
          renderItem={item => (
            <Row>
              <Col span={18}>
                <List.Item className="white">{item.lastUpdate}</List.Item>
              </Col>
              <Col span={6}>
                <List.Item className="white">
                  {item.confirmed
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </List.Item>
              </Col>
              <DividerTable />
            </Row>
          )}
        />
      </div>
      <NavLink to="/dashboard" className="white float-right mt-20">
        <Space align="center">
          <h3 className="mb-0 white">REAL TIME REPORT</h3>
          <RightOutlined />
        </Space>
      </NavLink>
    </CardContainer>
  );
}

LastMonth.propTypes = {
  monthly: PropTypes.array,
  total: PropTypes.number,
  top: PropTypes.array,
};

export default LastMonth;
