import React from 'react';
import { Button, Card, List, message, Tabs, Tooltip } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { addFavoriteItem, deleteFavoriteItem } from '../utils';
 
const { TabPane } = Tabs;
const tabKeys = {
  Drinks: 'drink',
}
 
const processUrl = (url) => url
  .replace('%{height}', '252')
  .replace('%{width}', '480')
  .replace('{height}', '252')
  .replace('{width}', '480');
 
const renderCardTitle = (item) => {
  const title = `${item.name}`;

  return (
    <>
      <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', width: 450 }}>
        <Tooltip title={title}>
          <span>{title}</span>
        </Tooltip>
      </div>
    </>
  )
}
 
const renderCardGrid = (data) => {
  return (
    <List
      grid={{
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
      }}
      dataSource={data}
      renderItem={item => (
        <List.Item style={{ marginRight: '20px' }}>
          <Card
            title={renderCardTitle(item)}
          >
            <a href={item.image} target="_blank" rel="noopener noreferrer">
              <img 
                alt="Placeholder"
                src={processUrl(item.thumbnail_url)}
              />
            </a>
          </Card>
        </List.Item>
      )}
    />
  )
}
 
const Home = ({ resources}) => {
  const { Drinks} = resources;
 
  return (
    <Tabs 
      defaultActiveKey={tabKeys.Drinks} 
    >
      <TabPane tab="Drinks" key={tabKeys.Drinks} style={{ height: '680px', overflow: 'auto' }} forceRender={true}>
        {renderCardGrid(Drinks)}
      </TabPane>
    </Tabs>
  );
}
 
export default Home;