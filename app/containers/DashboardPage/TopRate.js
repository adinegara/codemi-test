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
            <Col span={6} className="float-right">
              Completed
            </Col>
            <Col span={6} className="float-right">
              Completion %
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
                  {parseFloat(item.incidentRate)
                    .toFixed(2)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </List.Item>
            </Col>
            <Col span={6}>
              <List.Item className="float-right">
                <span>{parseFloat(item.caseFatalityRatio).toFixed(2)} %</span>
              </List.Item>
            </Col>
            <DividerTable />
          </Row>
        )}
      />
      <NavLink to="/dashboard" className=" float-right default mt-20">
        <Space align="start">
          <h3 className="mb-0 default">COURSE REPORT</h3>
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
