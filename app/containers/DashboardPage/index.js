import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Row, Col } from 'antd';

import H2 from 'components/H2';
import Content from 'components/Content';
import LastMonth from './LastMonth';
import TopRate from './TopRate';
import TopConfirm from './TopConfirm';
import LastWeek from './LastWeek';

export default function DashboardPage() {
  const [monthly, setMonthly] = useState([]);
  const [dateRange, setDateRange] = useState([]);
  const [totalConfirm, setTotalConfirm] = useState(0);
  const [topIncident, setTopIncident] = useState([]);
  const [topConfirm, setTopConfirm] = useState([]);

  const [totalWeekConfirm, setTotalWeekConfirm] = useState(0);
  const [totalWeekDeath, setTotalWeekDeath] = useState(0);
  const [lastCase, setLastCase] = useState(0);
  const [lastIncident, setLastIncident] = useState(0);

  const sortDays = (arr, limit) => {
    const result = arr
      .sort((a, b) => {
        if (a.lastUpdate < b.lastUpdate) {
          return 1;
        }
        if (a.lastUpdate > b.lastUpdate) {
          return -1;
        }
        return 0;
      })
      .slice(0, limit);
    return result;
  };

  const sortCountry = (arr, limit) => {
    const result = arr
      .sort((a, b) => {
        if (a.confirmed < b.confirmed) {
          return 1;
        }
        if (a.confirmed > b.confirmed) {
          return -1;
        }
        return 0;
      })
      .slice(0, limit);
    return result;
  };

  const monthlySort = sortDays(monthly, 30);
  const weeklySort = sortDays(monthly, 7);

  const monthlyTop = sortCountry(monthlySort, 5);

  useEffect(() => {
    let total = 0;
    monthly.forEach(e => {
      total += Number(e.confirmed);
    });
    setTotalConfirm(total);
  }, [monthly]);

  useEffect(() => {
    let total = 0;
    weeklySort.forEach(d => {
      total += Number(d.confirmed);
    });
    setTotalWeekConfirm(total);

    let total2 = 0;
    weeklySort.forEach(d => {
      total2 += Number(d.deaths);
    });
    setTotalWeekDeath(total2);

    if (weeklySort.length > 0) {
      setLastCase(Number(weeklySort.at(-1).caseFatalityRatio));
      setLastIncident(Number(weeklySort.at(-1).incidentRate));
    }
  }, [weeklySort]);

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
          filtered[0].confirmed = Number(filtered[0].confirmed);
          filtered[0].deaths = Number(filtered[0].deaths);
          filtered[0].caseFatalityRatio = Number(filtered[0].caseFatalityRatio);
          filtered[0].incidentRate = Number(filtered[0].incidentRate);
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

        const filtered2 = sortCountry(res.data, 6);

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
          <Col span={16}>
            <LastWeek
              data={weeklySort}
              totalConfirm={totalWeekConfirm}
              totalDeath={totalWeekDeath}
              totalCase={lastCase}
              totalIncident={lastIncident}
            />
          </Col>
          <Col span={8}>
            <LastMonth
              monthly={monthlySort}
              total={totalConfirm}
              top={monthlyTop}
            />
          </Col>
          <Col span={12} className="mt-10">
            <H2> What courses do your users visit?</H2>
            <TopRate data={topIncident} />
          </Col>
          <Col span={12} className="mt-10">
            <H2> What is your most active user?</H2>
            <TopConfirm data={topConfirm} />
          </Col>
        </Row>
      </div>
    </Content>
  );
}
