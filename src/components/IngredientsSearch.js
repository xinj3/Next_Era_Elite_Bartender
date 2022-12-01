import React from 'react';
import { Button, Form, Input, message, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { searchDrinkByIngredient } from '../utils';
 
class Ingredients extends React.Component {
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
    searchDrinkByIngredient(data.Ingredients)
      .then((data) => {
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
          Search by Ingredients </Button>
        <Modal
          title="Search"
          visible={this.state.displayModal}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form
            name="ingredients_search"
            onFinish={this.onSubmit}
          >
            <Form.Item
              name="ingredients_name"
              rules={[{ required: true, message: 'Please enter ingredients' }]}
            >
              <Input placeholder="Please enter the ingredients you want." />
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
 
export default Ingredients;