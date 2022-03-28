import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

export default () => {
  const data = [
  {
    "Date": "2020-10",
    "scales": 840
  },
  {
    "Date": "2020-11",
    "scales": 934
  },
  {
    "Date": "2020-12",
    "scales": 810
  },
  {
    "Date": "2021-01",
    "scales": 782
  },
  {
    "Date": "2021-02",
    "scales": 1089
  },
  {
    "Date": "2021-03",
    "scales": 745
  },
  {
    "Date": "2021-04",
    "scales": 680
  },
  {
    "Date": "2021-05",
    "scales": 802
  },
  {
    "Date": "2021-06",
    "scales": 697
  },
  {
    "Date": "2021-07",
    "scales": 583
  },
  {
    "Date": "2021-08",
    "scales": 456
  },
  {
    "Date": "2021-09",
    "scales": 524
  },
  {
    "Date": "2021-10",
    "scales": 398
  },
  {
    "Date": "2021-11",
    "scales": 278
  },
  {
    "Date": "2021-12",
    "scales": 195
  },
  {
    "Date": "2022-01",
    "scales": 145
  },
  {
    "Date": "2022-02",
    "scales": 207
  }
  ]
  const config = {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };

  return <Line {...config} />;
};

