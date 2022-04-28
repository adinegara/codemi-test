import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

function LastMonth() {
  const CardContainer = styled(Card)`
    background: #4895ef !important;
    color: white !important;
  `;

  return <CardContainer>Active User Right Now</CardContainer>;
}

export default LastMonth;
