import React from "react";

import { Button, Form, Input, Col, Row } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const layout = {
  labelCol: { span: 8 },
};

const PatientCriteria = ({
  queryInfo,
  handleQueryInfoChange,
  getTargetPathValue,
}) => {
  return (
    <Form {...layout} labelAlign="left">
      <Row>
        <Col span={16}>
          <Form.Item label="Name" name="Name" className="w-1/2">
            <Input
              value={getTargetPathValue(queryInfo, "eq.name")}
              onChange={(newValue) =>
                handleQueryInfoChange({
                  path: "name",
                  value: newValue.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item label="Surname" name="Surname" className="w-1/2">
            <Input
              value={getTargetPathValue(queryInfo, "surname")}
              onChange={(newValue) =>
                handleQueryInfoChange({
                  path: "surname",
                  value: newValue.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={16}>
          <Form.Item label="ID" name="ID" className="w-1/2">
            <Input
              value={getTargetPathValue(queryInfo, "eq.id")}
              onChange={(newValue) =>
                handleQueryInfoChange({
                  path: "identityNum",
                  value: newValue.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default PatientCriteria;
