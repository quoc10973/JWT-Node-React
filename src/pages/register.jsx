import React from 'react';
import { Button, Form, Input } from 'antd';
import { createUserAPI } from '../util/api';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';

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
                message: 'Đăng ký thành công',
                description: 'Bạn đã đăng ký tài khoản thành công!',
            });
            nagivate('/login');
            console.log('Success:', response);
        } catch (error) {
            notification.error({
                message: 'Đăng ký thất bại',
                description: `${error.response.data}`,
            });
        }

    };

    return (
        <div style={{ margin: 50 }}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 800,
                    margin: 'auto',
                }}
                onFinish={onFinish}
                autoComplete="off"
                layout='vertical'
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',

                        },
                        {
                            type: 'email',
                            message: 'The input is not a valid email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                        {
                            pattern: /^[0]{1}[0-9]{8,}/,
                            message: 'The input is not a valid phone number!',
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
}

export default RegisterPage;