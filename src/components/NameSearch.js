import React from 'react';
import { Button, Form, Input, message, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { searchDrinkByName } from '../utils';
 
class CustomSearch extends React.Component {
  state = {
    displayModal: false
  }
 
  handleCancel = () => {
    this.setState({
      displayModal: false,
    })
  }
 
  searchOnClick = () => {
    this.setState({
      displayModal: true,
    })
  }
 
  onSubmit = (data) => {
    searchDrinkByName(data.drink_name)
      .then((data) => {
        console.log(data)
        this.setState({
          displayModal: false,
        })
        this.props.onSuccess(data);
      })
      .catch((err) => {
        message.error(err.message);
      })
  }
 
  render = () => {
    return (
      <>
        <Button shape="round" onClick={this.searchOnClick} icon={<SearchOutlined />} style={{ marginLeft: '20px', marginTop: '20px'}}>
          Search by Drink Name </Button>
        <Modal
          title="Search"
          visible={this.state.displayModal}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form
            name="drink_name_search"
            onFinish={this.onSubmit}
          >
            <Form.Item
              name="drink_name"
              rules={[{ required: true, message: 'Please enter a drink name' }]}
            >
              <Input placeholder="Please enter the Drink name" />
            </Form.Item>
 
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Search</Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    )
  }
}
 
export default CustomSearch;