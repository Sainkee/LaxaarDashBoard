import React from 'react';
import { Menu } from 'antd';

const SideBar = ({ items }) => {
  return (
    <Menu theme="light" mode="inline">
      {/* Iterate over the items prop */}
      {items.map((item) => (
        <Menu.Item key={item.id} icon={item.icon}>
          {item.title}
        </Menu.Item>
      ))}
    </Menu>
  );
};
export default SideBar;
