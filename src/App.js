import React from 'react';
import { Layout, Menu} from 'antd';
import { LikeOutlined} from '@ant-design/icons';
import { searchDrinkByName, getRecommendations, searchDrinkByIngredient} from './utils';
import NameSearch from './components/NameSearch';
import Ingredients  from './components/IngredientsSearch';
import Home from './components/Home';
 
const { Header, Content, Sider } = Layout;
 
class App extends React.Component {
  state = {
    resources: [],
  }

  onDrinkSelect = ({ key }) => {
    searchDrinkByName(key).then((data) => {
      this.setState({
        resources: data,
      })
    })
  }

  NameSearchOnSuccess = (data) => {
    this.setState({
      resources: data,
    })
  }

  render = () => (
    <Layout>
      <Header>
        {'Header'}
      </Header>
      <Layout>
        <Sider width={300} className="site-layout-background">
          <NameSearch onSuccess={this.NameSearchOnSuccess} />
          <Menu
            mode="inline"
            onSelect={this.onDrinkSelect}
            style={{ marginTop: '10px' }}
          >
            <Menu.Item icon={<LikeOutlined />} key="Recommendation">
              Recommend for you!</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              height: 800,
              overflow: 'auto'
            }}
          >
            <Home 
              resources={this.state.resources}
            />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
 
export default App;