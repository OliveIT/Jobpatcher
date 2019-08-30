import React from "react";
import {Button, Card, Dropdown, Icon, Menu, message} from "antd";

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Products</Menu.Item>
    <Menu.Item key="2">Apps</Menu.Item>
    <Menu.Item key="3">Blogs</Menu.Item>
  </Menu>
);
const ButtonWithDropdown = () => {
  return (
    <Card className="gx-card" title="Button with Dropdown">
      <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button
        onClick={handleButtonClick}
        overlay={menu}
        disabled
      >
        Dropdown
      </Dropdown.Button>
      <Dropdown overlay={menu}>
        <Button>
          Button <Icon type="down"/>
        </Button>
      </Dropdown>
    </Card>
  );
};

export default ButtonWithDropdown;
