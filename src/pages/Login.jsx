import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useFormik } from "formik"
import * as Yup from "yup";
import { useRef, useState } from 'react';

export const Login = () => {
    const passwordSchema = Yup.string().min(8, "The password length should be at least 8 characters").max(24, "The password length should be at least 24 characters")
    let pass = useRef(null);
    const printPass = async () => {
        const res = await passwordSchema.isValid(pass.current.input.value)
        setIsPasswordValid(res ? "success" : "error")
        setHelpText(res ? "" : "Password length should be between 8 and 24!")
    }
    const [isPasswordValid, setIsPasswordValid] = useState("success");
    const [helpText, setHelpText] = useState("");
    return (
        <main>
            <Form onFinish={()=>{console.log("Finish")}}>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}>
                    <Input
                        prefix={<UserOutlined />} placeholder="E-mail" aria-autocomplete="none" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    validateStatus={isPasswordValid}
                    help={helpText}
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Password"
                        onChange={printPass}
                        ref={pass}
                    />
                </Form.Item>
                <Form.Item>
                    <Button disabled={isPasswordValid=="error"} htmlType='submit'>Log in</Button>
                </Form.Item>
            </Form>
        </main>
    )
}