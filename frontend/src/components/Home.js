import React from 'react';
import { Card, List, Tabs } from 'antd';

class drink {
    constructor(name, ingredient, preparation, url) {
        this.name = name;
        this.ingredient = ingredient;
        this.preparation = preparation;
        this.url = url;
    }
}
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
        <span>{item.name}</span>
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
            <span>
                Ingredients Needed: {item.ingredient} <br />
            </span>
            <span>
                Preparation to do: {item.preparation} <br />
            </span>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img 
                alt="Placeholder"
                src={processUrl(item.url)}
              />
            </a>
          </Card>
        </List.Item>
      )}
    />
  )
}
 
const Home = ({resources}) => {
    const obj = []
    if (resources != undefined && resources != null && resources != [] && resources != '') {
        for (var i = 0; i < resources.name.length; i++) {
            obj.push(new drink(resources.name[i],resources.all_ingredients[i],resources.preparation[i],resources.image[i]));
        }
    }
    console.log(obj)
    return (
    <Tabs 
      defaultActiveKey={tabKeys.Drinks} 
    >
      <TabPane tab="Drinks" key={tabKeys.Drinks} style={{ height: '680px', overflow: 'auto' }} forceRender={true}>
        {renderCardGrid(obj)}
      </TabPane>
    </Tabs>
  );
}
 
export default Home;