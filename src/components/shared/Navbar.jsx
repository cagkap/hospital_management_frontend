import React from "react";
import { Flex, Menu } from "antd";
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
        <img
          src={`${process.env.PUBLIC_URL}/assets/doctor.png`}
          alt="description"
        />
      </Flex>
      <Menu
        defaultSelectedKeys={["1"]}
        items={items}
        horizontalItemSelectedColor
        className=" h-screen gap-5 font-medium flex flex-col items-center bg-slate-200"
      ></Menu>
    </div>
  );
};

export default Navbar;
