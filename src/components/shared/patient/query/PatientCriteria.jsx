import React from "react";

import { Button, Form, Input } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const PatientCriteria = ({
  queryInfo,
  handleQueryInfoChange,
  getTargetPathValue,
}) => {
  return (
    <div>
      <Form.Item label="Name" name="Name" rules={[{}]}>
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

      <Form.Item label="Surname" name="Surname" rules={[{}]}>
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

      <Form.Item label="ID" name="ID">
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

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      ></Form.Item>
    </div>
  );
};

export default PatientCriteria;
