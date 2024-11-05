import React, { useState } from 'react';
import { UserOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';


const Header = () => {
    const items = [
        {
            label: <Link to={"/"}> Home Page </Link>,
            key: 'home',
            icon: <MailOutlined />,
        },

        {
            label: <Link to={"/user"}> User </Link>,   // <Link tđên đường dẫn /user khi click vào User
            key: 'user',
            icon: <UserOutlined />,
        },

        {
            label: 'Welcome',
            key: 'SubMenu',
            className: 'right-aligned-submenu',
            icon: <SettingOutlined />,
            children: [
                {
                    label: 'Login',
                    key: 'login',
                },
                {
                    label: 'Logout',
                    key: 'logout',
                },
            ],
        },

    ];
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;