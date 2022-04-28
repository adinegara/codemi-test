import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
// import { Line } from 'react-chartjs-2'

import H2 from 'components/H2';
import Content from 'components/Content';
import { Row, Col } from 'antd';
import LastMonth from './LastMonth';

export default function DashboardPage() {
  const [monthly, setMonthly] = useState([]);
  const [dateRange, setDateRange] = useState([]);

  const getDateRange = () => {
    const arrDate = [];
    const today = new Date();
    const msInDay = 86400000;

    for (let i = 1; i <= 30; i += 1) {
      const daysAgo = new Date(today - i * msInDay);
      arrDate.push(
        `${daysAgo.getMonth() +
          1}-${daysAgo.getDate()}-${daysAgo.getFullYear()}`,
      );
    }

    setDateRange(arrDate);
  };

  useEffect(() => {
    getDateRange();
  }, []);

  useEffect(() => {
    fetchData(dateRange);
  }, [dateRange]);

  console.warn(monthly);

  const fetchData = date => {
    date.map(data =>
      axios
        .get(`https://covid19.mathdro.id/api/daily/${data}`)
        .then(res => {
          const filtered = res.data.filter(
            data2 => data2.countryRegion === 'Indonesia',
          );
          return filtered;
        })

        .then(filtered => {
          setMonthly(prev => [...prev, ...filtered]);
        })

        .catch(err => {
          console.warn('Error when fetching data from API', err);
        }),
    );
  };

  // useEffect(() => {
  //   setChartLabel(sortedDailyReport.map(data => {
  //     let monthIndoList = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];
  //     let date = new Date(data.chartLabelDate).getDate();
  //     let monthIndo = monthIndoList[new Date(data.chartLabelDate).getMonth()];

  //     return `${date} ${monthIndo}`
  //   }));
  // }, [sortedDailyReport])

  // useEffect(() => {
  //   setChartDataConfirmed(sortedDailyReport.map(data => data.confirmed));
  //   setChartDataRecovered(sortedDailyReport.map(data => data.recovered));
  //   setChartDataDeaths(sortedDailyReport.map(data => data.deaths));
  // }, [sortedDailyReport])

  return (
    <Content>
      <div>
        <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="Dashboard Codemi" />
        </Helmet>
        <H2> Codemi Home </H2>
        <Row gutter={[16, 16]}>
          <Col span={14} />
          <Col span={10}>
            <LastMonth />
          </Col>
        </Row>
      </div>
    </Content>
  );
}
