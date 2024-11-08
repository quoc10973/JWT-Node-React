import React, { useContext, useState } from 'react';
import { UserOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';


const Header = () => {


    const { auth, setAuth } = useContext(AuthContext);
    console.log('check auth', auth);
    const nagivate = useNavigate();

    const items = [
        {
            label: <Link to={"/"}> Home Page </Link>,
            key: 'home',
            icon: <MailOutlined />,
        },
        ...(auth.isAuthenticated ? [
            {
                label: <Link to={"/user"}> User </Link>,   // <Link tđên đường dẫn /user khi click vào User
                key: 'user',
                icon: <UserOutlined />,
            },
        ] : []),
        {
            label: `Welcome ${auth.user.name}`,
            key: 'SubMenu',
            className: 'right-aligned-submenu',
            icon: <SettingOutlined />,
            children: [
                ...(auth.isAuthenticated ? [
                    {
                        label: <span onClick={() => {
                            localStorage.removeItem('accessToken');
                            setCurrent('home');
                            nagivate('/');
                            setAuth({
                                isAuthenticated: false,
                                user: {
                                    email: '',
                                    name: ''
                                }
                            });
                        }}>  Logout </span>,
                        key: 'logout',
                    },
                ] : [{
                    label: <Link to={"/login"}> Login </Link>,
                    key: 'login',
                },]),


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