import React, { Component } from "react";
import { Form, Input, InputNumber, Button, Row } from "antd";
import { layout, validateMessages } from "./config";

class FormUpdateInfo extends Component {
  constructor(props) {
    super(props);
    this.userInfo = props.userInfo;
    this.onSubmitUpdate = props.onFinish;
  }

  onFinish = (values) => {
    this.onSubmitUpdate(values);
  };

  render() {
    return (
      <div>
        <Form
          {...layout}
          name="control-ref"
          initialValues={{
            name: this.userInfo.name,
            age: this.userInfo.age,
            position: this.userInfo.position,
            company: this.userInfo.company,
            technology: this.userInfo.technology,
            hobby: this.userInfo.hobby,
          }}
          onFinish={this.onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Age" name="age" rules={[{ required: true }]}>
            <InputNumber min={1} />
          </Form.Item>
          <Form.Item
            label="Position"
            name="position"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Company"
            name="company"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Technology"
            name="technology"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Hobby" name="hobby" rules={[{ required: true }]}>
            <Input.TextArea rows={4} />
          </Form.Item>
          <Row justify="center">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </div>
    );
  }
}

export default FormUpdateInfo;
// export default Form.create()(FormUpdateInfo);
