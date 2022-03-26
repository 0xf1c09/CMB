import React from 'react';
import { HomeOutlined, ProjectOutlined, WarningOutlined, BarChartOutlined, UnorderedListOutlined, SettingFilled, GatewayOutlined } from '@ant-design/icons';

export default {
  route: {
    path: '/dwd',
    routes: [
      {
        path: '/dwd',
        name: '基础设置',
        icon: <HomeOutlined />,
        component: './dwd',
		routes: [
          {
            path: '/xmgl/xmxz',
            name: '员工维护',
            component: './XMXZ',
          },
          {
            path: '/xmgl/xmcx',
            name: '工作流程管理',
            component: './XMCX',
          },
          {
            path: '/xmgl/xmsc',
            name: '跨银行直连服务',
            component: './XMSC',
          },
          {
            path: '/xmgl/xmcx',
            name: '单位信息管理',
            component: './XMCX',
          },
          {
            path: '/xmgl/xmsc',
            name: '项目信息管理',
            component: './XMSC',
          },
        ],
      },
      {
        path: '/zhgl',
        name: '账户管理',
        icon: <SettingFilled />,
        component: './ZHGL',
        routes: [
          {
            path: '/zhgl/zhcx',
            name: '账户维护',
            component: './ZHCX',
          },
          {
            path: '/zhgl/zhxg',
            name: '虚拟户管理',
            component: './ZHXG',
          },
          {
            path: '/zhgl/zhxz',
            name: '账户关联管理',
            component: './ZHXZ',
          },
        ],
      },
      {
        path: '/xmgl',
        name: '资金管理',
        icon: <UnorderedListOutlined />,
        access: 'canAdmin',
        component: './XMGL',
        routes: [
          {
            path: '/xmgl/xmxz',
            name: '账户交易流水管理',
            component: './XMXZ',
			routes: [
				{
					path: '/fxyj/fxcx',
					name: '流水查询',
					component: './FXCX',
				},
				{
					path: '/fxyj/fxts',
					name: '流水上报',
					component: './FXTS',
				},
				{
					path: '/fxyj/fxzz',
					name: '流水上报修改',
					component: './FXZZ',
				},
				{
					path: '/fxyj/fxzz',
					name: '流水上报查询',
					component: './FXZZ',
				},
			],
          },
          {
            path: '/xmgl/xmcx',
            name: '账户交易余额管理',
            component: './XMCX',
			routes: [
				{
					path: '/fxyj/fxcx',
					name: '余额查询',
					component: './FXCX',
				},
				{
					path: '/fxyj/fxts',
					name: '余额上报',
					component: './FXTS',
				},
				{
					path: '/fxyj/fxzz',
					name: '余额上报修改',
					component: './FXZZ',
				},
				{
					path: '/fxyj/fxzz',
					name: '余额上报查询',
					component: './FXZZ',
				},
			],
          },
        ],
      },
    ],
  },
  location: {
    pathname: '/dwd',
  },
};

