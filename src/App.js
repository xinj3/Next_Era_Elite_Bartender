import React from 'react';
import { Layout, Menu} from 'antd';
import { LikeOutlined} from '@ant-design/icons';
import NameSearch from './components/NameSearch';
import Ingredients  from './components/IngredientsSearch';
import MixSearch  from './components/MixSearch';
import Home from './components/Home';
 
const { Header, Content, Sider } = Layout;
 
class App extends React.Component {
  state = {
    resources: [],
  }

  NameSearchOnSuccess = (data) => {
    this.setState({
      resources: data,
    })
  }

  IngredientSearchOnSuccess = (data) => {
    this.setState({
      resources: data,
    })
  }

  MixSearchOnSuccess = (data) => {
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
          <Ingredients onSuccess={this.IngredientSearchOnSuccess} />
          <MixSearch onSuccess={this.MixSearchOnSuccess} />
          <Menu
            mode="inline"
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