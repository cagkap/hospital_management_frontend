import React from "react";
import { Flex, Menu, Image } from "antd";
import { UserOutlined, OrderedListOutlined } from "@ant-design/icons";

const items = [
  {
    label: "Patients",
    icon: <UserOutlined />,
    to: "/patient",
  },
  {
    label: "Reports",
    icon: <OrderedListOutlined />,
    to: "/report",
  },
];
const Navbar = () => {
  return (
    <div>
      <Flex align="center" justify="center">
        <Image
          src={`${process.env.PUBLIC_URL}/assets/doctor_white.png`}
          width={200}
          preview={false}
        />
      </Flex>
      <Menu
        defaultSelectedKeys={["1"]}
        items={items}
        horizontalItemSelectedColor
        className=" h-screen gap-5 font-medium flex flex-col items-center"
      ></Menu>
    </div>
  );
};

export default Navbar;
