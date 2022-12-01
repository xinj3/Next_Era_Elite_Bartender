import React from 'react';
import { Card, List, Tabs, Tooltip } from 'antd';
 
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
  return (
    <>
      <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', width: 450 }}>
        <span>{item}</span>
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
      dataSource={data.name}
      renderItem={item => (
        <List.Item style={{ marginRight: '20px' }}>
          <Card
            title={renderCardTitle(item)}
          >
            <span>
                Ingredients Needed: {data.all_ingredients}
            </span>
            <a href={`${data.image}`} target="_blank" rel="noopener noreferrer">
              <img 
                alt="Placeholder"
                src={processUrl(`${data.image}`)}
              />
            </a>
          </Card>
        </List.Item>
      )}
    />
  )
}
 
const Home = ({resources}) => {
  return (
    <Tabs 
      defaultActiveKey={tabKeys.Drinks} 
    >
      <TabPane tab="Drinks" key={tabKeys.Drinks} style={{ height: '680px', overflow: 'auto' }} forceRender={true}>
        {renderCardGrid(resources)}
      </TabPane>
    </Tabs>
  );
}
 
export default Home;