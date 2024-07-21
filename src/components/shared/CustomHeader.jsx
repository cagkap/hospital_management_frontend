import { Flex } from "antd";
import Search from "antd/es/transfer/search";
import React from "react";
import { MessageOutlined } from "@ant-design/icons";

const CustomHeader = () => {
  return (
    <Flex align="center" justify="flex-end" gap="3rem">
      <div className="mt-2">
        <MessageOutlined />
      </div>
    </Flex>
  );
};

export default CustomHeader;
