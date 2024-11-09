import React from 'react';
import { Button, Divider, Form, Input } from 'antd';
import { createUserAPI } from '../util/api';
import { notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
        message: message,
        description: description,
    });
};

const RegisterPage = () => {
    const nagivate = useNavigate();
    const onFinish = async (values) => {
        const { email, password, name, phoneNumber } = values;

        try {
            const response = await createUserAPI(email, password, name, phoneNumber);
            notification.success({
                message: 'Success',
                description: 'You have successfully registered',
            });
            nagivate('/login');
            console.log('Success:', response);
        } catch (error) {
            notification.error({
                message: 'Error',
                description: `${error.response.data}`,
            });
        }

    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f9f9f9',
        }}>
            <Form
                name="basic"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                style={{
                    width: '100%',
                    maxWidth: 500,
                    padding: '30px',
                    backgroundColor: '#ffffff',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
                onFinish={onFinish}
                autoComplete="off"
                layout='vertical'
            >
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Register</h2>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'The input is not a valid email!' },
                    ]}
                >
                    <Input placeholder="Enter your email" style={{ padding: '10px', borderRadius: '5px' }} />
                </Form.Item>

                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        { required: true, message: 'Please input your name!' },
                    ]}
                >
                    <Input placeholder="Enter your phone number" style={{ padding: '10px', borderRadius: '5px' }} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder="Enter your password" style={{ padding: '10px', borderRadius: '5px' }} />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                    rules={[
                        { required: true, message: 'Please input your phone number!' },
                        { pattern: /^[0]{1}[0-9]{8,}/, message: 'The input is not a valid phone number!' }
                    ]}
                >
                    <Input placeholder="Enter your phone number" style={{ padding: '10px', borderRadius: '5px' }} />
                </Form.Item>

                <Form.Item style={{ textAlign: 'center' }}>
                    <Button type="primary" htmlType="submit" style={{ width: '100%', borderRadius: '5px' }}>
                        Sign in
                    </Button>
                </Form.Item>
                <Link to={"/"}><ArrowLeftOutlined /> Back to Home Page </Link>
                <Divider />
                <div style={{ textAlign: "center" }}>
                    Already have an account? <Link to={"/login"}>Login here</Link>
                </div>

            </Form>
        </div>
    );
}

export default RegisterPage;