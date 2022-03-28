import React, { useState } from 'react';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import PieChart from './PieChart';
import LineChart from './LineChart';

const { Statistic } = StatisticCard;

export default () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard
        title="报表数据概览"
        extra="2022年3月28日 星期一"
        split={responsive ? 'horizontal' : 'vertical'}
        headerBordered
        bordered
      >
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: '昨日新增客户',
                  value: 234,
                  description: <Statistic title="较本月平均客户" value="8.04%" trend="down" />,
                }}
              />
              <StatisticCard
                statistic={{
                  title: '本月累计客户',
                  value: 234,
                  description: <Statistic title="月同比" value="8.04%" trend="up" />,
                }}
              />
            </ProCard>
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: '运行中项目',
                  value: '12/56',
                  suffix: '个',
                }}
              />
              <StatisticCard
                statistic={{
                  title: '历史项目总数',
                  value: '134',
                  suffix: '个',
                }}
              />
            </ProCard>
          </ProCard>
	            <StatisticCard
	              title="流量走势"
	              chart={
			                    <img
			                      src="https://gw.alipayobjects.com/zos/alicdn/_dZIob2NB/zhuzhuangtu.svg"
			                      width="100%"
			                    />
			                  }
	            />
        </ProCard>
        <StatisticCard
          title="业绩目标占比"
        >
	  <PieChart/>
        </StatisticCard>
      </ProCard>
    </RcResizeObserver>
  );
};
