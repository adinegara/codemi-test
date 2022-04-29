import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Row, Col } from 'antd';

import H2 from 'components/H2';
import Content from 'components/Content';
import LastMonth from './LastMonth';
import TopRate from './TopRate';

export default function DashboardPage() {
  const [monthly, setMonthly] = useState([]);
  const [dateRange, setDateRange] = useState([]);
  const [totalConfirm, setTotalConfirm] = useState(0);
  const [topIncident, setTopIncident] = useState([]);
  const [topConfirm, setTopConfirm] = useState([]);

  const monthlySort = monthly.sort((a, b) => {
    if (a.lastUpdate < b.lastUpdate) {
      return 1;
    }
    if (a.lastUpdate > b.lastUpdate) {
      return -1;
    }
    return 0;
  });

  const sortAndSlice = (arr, limit) => {
    const result = arr
      .sort((a, b) => Number(a.confirmed) - Number(b.confirmed))
      .slice(0, limit);

    return result;
  };

  const monthlyTop = sortAndSlice(monthlySort, 5);

  useEffect(() => {
    let total = 0;
    monthly.forEach(e => {
      total += Number(e.confirmed);
    });
    setTotalConfirm(total);
  }, [monthly]);

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
    fetchDataCountry();
  }, [dateRange]);

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

  const fetchDataCountry = () => {
    axios
      .get(`https://covid19.mathdro.id/api/daily/4-27-2022`)
      .then(res => {
        const filtered1 = res.data
          .sort((a, b) => {
            if (a.incidentRate < b.incidentRate) {
              return 1;
            }
            if (a.incidentRate > b.incidentRate) {
              return -1;
            }
            return 0;
          })
          .slice(0, 6);

        const filtered2 = res.data
          .sort((a, b) => {
            if (a.confirmed < b.confirmed) {
              return 1;
            }
            if (a.confirmed > b.confirmed) {
              return -1;
            }
            return 0;
          })
          .slice(0, 6);

        setTopIncident(filtered1);
        setTopConfirm(filtered2);
      })
      .catch(err => {
        console.warn('Error when fetching data from API', err);
      });
  };

  return (
    <Content>
      <div>
        <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="Dashboard Codemi" />
        </Helmet>
        <H2> Codemi Home </H2>
        <Row gutter={[16, 16]}>
          <Col span={16} />
          <Col span={8}>
            <LastMonth
              monthly={monthlySort}
              total={totalConfirm}
              top={monthlyTop}
            />
          </Col>
          <Col span={12}>
            <H2> What courses do your users visit?</H2>
            <TopRate data={topIncident} data2={topConfirm} />
          </Col>
          <Col span={12}>
            <H2> What is your most active user?</H2>
          </Col>
        </Row>
      </div>
    </Content>
  );
}
