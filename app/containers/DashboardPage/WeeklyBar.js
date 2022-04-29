import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Tabs } from 'antd';
import { Column } from '@ant-design/plots';

function WeeklyBar({ data }) {
  const [key, setKey] = useState(1);

  const configConfirm = {
    data,
    height: 400,
    padding: 'auto',
    xField: 'lastUpdate',
    yField: 'confirmed',
    yAxis: {
      min: 6000000000,
      position: 'right',
    },
  };

  const configDeath = {
    data,
    height: 400,
    padding: 'auto',
    xField: 'lastUpdate',
    yField: 'deaths',
    yAxis: {
      min: 156000,
      position: 'right',
    },
  };

  const configIncident = {
    data,
    height: 400,
    padding: 'auto',
    xField: 'lastUpdate',
    yField: 'incidentRate',
    yAxis: {
      min: 2209,
      position: 'right',
    },
  };

  return (
    <Card className="card-p-0">
      <Tabs size="large" onTabClick={e => setKey(Number(e))}>
        <Tabs.TabPane
          tab={<div className={key === 1 ? 'font-bold' : ''}>Discussion</div>}
          key="1"
        >
          <Column {...configConfirm} />
        </Tabs.TabPane>

        <Tabs.TabPane
          tab={<div className={key === 2 ? 'font-bold' : ''}>Blog Post</div>}
          key="2"
        >
          <Column {...configDeath} />
        </Tabs.TabPane>

        <Tabs.TabPane
          tab={
            <div className={key === 3 ? 'font-bold' : ''}>
              Questions and Answers
            </div>
          }
          key="3"
        >
          <Column {...configIncident} />
        </Tabs.TabPane>
      </Tabs>
    </Card>
  );
}

WeeklyBar.propTypes = {
  data: PropTypes.array,
};

export default WeeklyBar;
