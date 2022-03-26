import React from 'react';
import { HomeOutlined, ProjectOutlined, WarningOutlined, BarChartOutlined, UnorderedListOutlined, SettingFilled, GatewayOutlined } from '@ant-design/icons';

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/home',
        name: '首页',
        icon: <HomeOutlined />,
        component: './Home',
      },
      {
        path: '/xmgl',
        name: '项目管理',
        icon: <UnorderedListOutlined />,
        access: 'canAdmin',
        component: './XMGL',
        routes: [
          {
            path: '/xmgl/xmxz',
            name: '项目新增',
            component: './XMXZ',
          },
          {
            path: '/xmgl/xmcx',
            name: '项目查询',
            component: './XMCX',
          },
          {
            path: '/xmgl/xmsc',
            name: '项目删除',
            component: './XMSC',
          },
        ],
      },
      {
        name: '风险预警',
        icon: <WarningOutlined />,
        path: '/fxyj',
        component: './FXYJ',
        routes: [
          {
            path: '/fxyj/fxcx',
            name: '查询',
            component: './FXCX',
          },
          {
            path: '/fxyj/fxts',
            name: '提示',
            component: './FXTS',
          },
          {
            path: '/fxyj/fxzz',
            name: '终止',
            component: './FXZZ',
          },
        ],
      },
      {
        path: '/bbgl',
        name: '报表管理',
        icon: <BarChartOutlined />,
        component: './BBGL',
        routes: [
          {
            path: '/bbgl/bbcx',
            name: '报表查询',
            component: './BBCX',
		  routes: [
			  {
				  path: '/bbgl/bbcx/yhxx',
				  name: '银行信息汇总表',
				  component: './YHXX',
			  },
			  {
				  path: '/bbgl/bbcx/zhxx',
				  name: '账户信息汇总表',
				  component: './ZHXX',
			  },
			  {
				  path: '/bbgl/bbcx/zhls',
				  name: '账户流水台账',
				  component: './ZHLS',
			  },
			  {
				  path: '/bbgl/bbcx/zhsr',
				  name: '账户收入情况表',
				  component: './ZHSR',
			  },
			  {
				  path: '/bbgl/bbcx/zhzc',
				  name: '账户支出情况表',
				  component: './ZHZC',
			  },
		  ],
          },
          {
            path: '/bbgl/bbzs',
            name: '报表展示',
            component: './BBZS',
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
            name: '账户查询',
            component: './ZHCX',
          },
          {
            path: '/zhgl/zhxg',
            name: '账户修改',
            component: './ZHXG',
          },
          {
            path: '/zhgl/zhxz',
            name: '账户新增',
            component: './ZHXZ',
          },
        ],
      },
      {
        path: '/xxgk',
        name: '信息公开',
        icon: <GatewayOutlined />,
        component: './XXGK',
      },
    ],
  },
  location: {
    pathname: '/',
  },
};
