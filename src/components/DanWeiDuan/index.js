import React from 'react';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { Descriptions, Avatar, Button } from 'antd';
import defaultProps from './_defaultProps';
import Logo from '../logo.png';
import { LikeOutlined, UserOutlined } from '@ant-design/icons';
import Show from './show';


const content = (
  <Descriptions size="small" column={2}>
    <Descriptions.Item label="创建人">單位端</Descriptions.Item>
    <Descriptions.Item label="联系方式">
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="更新时间">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="备注">中国浙江省杭州市西湖区古翠路</Descriptions.Item>
  </Descriptions>
);

export default function DWD() {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
	title="项目单位端"
	logo={Logo}
        {...defaultProps}
        location={{
          pathname: '/CMB/dwd',
        }}
	  headerContentRender={()=>(
          <div>XX市XX城投集团</div>
	  )}
	  rightContentRender={() => (
		  <div>
		  <Avatar src="https://joeschmoe.io/api/v1/random" />
		  <Button
		  size="small"
		  style={{ margin: '0 16px', verticalAlign: 'middle' }}
		  >
		  用户名
		  </Button>
		  </div>
	  )}
      >
        <PageContainer ghost 
	  header={{
		  title: '',
	  }}
	  >
	  <Show/ >
        </PageContainer>
      </ProLayout>
    </div>
  );
};
