import React from 'react';
import { Button, Form, Input } from 'antd';
import { loginAPI } from '../util/api';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';

const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
        message: message,
        description: description,
    });
};

const LoginPage = () => {
    const nagivate = useNavigate();
    const onFinish = async (values) => {
        const { email, password } = values;
        try {
            const response = await loginAPI(email, password);
            notification.success({
                message: 'Success',
                description: 'Login success!',
            });
            localStorage.setItem('accessToken', response.accessToken);
            nagivate('/');
        } catch (error) {
            notification.error({
                message: 'Error',
                description: error.response.data.EM,
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
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
}

export default LoginPage;