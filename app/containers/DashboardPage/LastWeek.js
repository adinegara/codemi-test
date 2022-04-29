import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Tabs } from 'antd';
import H1 from 'components/H1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltDown,
  faLongArrowAltUp,
} from '@fortawesome/free-solid-svg-icons';
import { Line } from '@ant-design/plots';

function LastWeek({
  data,
  totalConfirm,
  totalDeath,
  totalCase,
  totalIncident,
}) {
  const [key, setKey] = useState(1);

  const formatK = num =>
    Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(num);
  const configConfirm = {
    data,
    height: 575,
    padding: 'auto',
    xField: 'lastUpdate',
    yField: 'confirmed',
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    yAxis: {
      min: 6000000000,
    },
  };

  const configDeath = {
    data,
    height: 575,
    color: 'red',
    padding: 'auto',
    xField: 'lastUpdate',
    yField: 'deaths',
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: 'red',
        lineWidth: 2,
      },
    },
    yAxis: {
      min: 156000,
    },
  };

  const configCase = {
    data,
    height: 575,
    padding: 'auto',
    xField: 'lastUpdate',
    yField: 'caseFatalityRatio',
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    yAxis: {
      min: 2.582,
    },
  };

  const configIncident = {
    data,
    height: 575,
    padding: 'auto',
    xField: 'lastUpdate',
    yField: 'incidentRate',
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    yAxis: {
      min: 2209,
    },
  };

  return (
    <Card className="card-p-0">
      <Tabs size="large" centered onTabClick={e => setKey(Number(e))}>
        <Tabs.TabPane
          tab={
            <>
              <div className={key === 1 ? 'font-bold' : ''}>Users</div>
              <H1 className={key === 1 ? 'font-bold' : ''}>
                {formatK(totalConfirm)}
              </H1>
              <FontAwesomeIcon icon={faLongArrowAltUp} />
            </>
          }
          key="1"
        >
          <Line {...configConfirm} />
        </Tabs.TabPane>

        <Tabs.TabPane
          tab={
            <>
              <div className={key === 2 ? 'font-bold' : ''}>
                Course Completed
              </div>
              <H1 className={key === 2 ? 'font-bold' : ''}>
                {formatK(totalDeath)}
              </H1>
              <FontAwesomeIcon icon={faLongArrowAltUp} />
            </>
          }
          key="2"
        >
          <Line {...configDeath} />
        </Tabs.TabPane>

        <Tabs.TabPane
          tab={
            <>
              <div className={key === 3 ? 'font-bold' : ''}>
                Learning Plan Completed
              </div>
              <H1 className={key === 3 ? 'font-bold' : ''}>
                {totalCase.toFixed(2)} %
              </H1>
              <FontAwesomeIcon icon={faLongArrowAltDown} />
            </>
          }
          key="3"
        >
          <Line {...configCase} />
        </Tabs.TabPane>

        <Tabs.TabPane
          tab={
            <>
              <div className={key === 4 ? 'font-bold' : ''}>Learning Hour</div>
              <H1 className={key === 4 ? 'font-bold' : ''}>
                {totalIncident.toFixed(2)}
              </H1>
              <FontAwesomeIcon icon={faLongArrowAltUp} />
            </>
          }
          key="4"
        >
          <Line {...configIncident} />
        </Tabs.TabPane>
      </Tabs>
    </Card>
  );
}

LastWeek.propTypes = {
  data: PropTypes.array,
  totalConfirm: PropTypes.number,
  totalCase: PropTypes.number,
  totalDeath: PropTypes.number,
  totalIncident: PropTypes.number,
};

export default LastWeek;
