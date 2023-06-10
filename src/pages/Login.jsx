import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import * as Yup from "yup";
import { useRef, useState } from 'react';
import { useFormik } from 'formik';

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Incorrect email format!").required("Please enter your email!"),
    password: Yup.string().min(8, "Password length should be at least 8!")
        .max(24, "Password length should be at most 24!").required("Please enter your password!")
});

export const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: "", password: ""
        },
        validationSchema: validationSchema,
        validateOnBlur: true,
        validateOnChange: false,
        onSubmit: () => { console.log('Finish!'); }
    });

    return (
        <main>
            <Form onFinish={formik.submitForm}>
                <Form.Item
                    name="email"
                    validateStatus={formik.errors.email && formik.touched.email ? "error" : ""}
                    help={formik.touched.email && formik.errors.email}
                >
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        prefix={<UserOutlined />} placeholder="E-mail" aria-autocomplete="none" />
                </Form.Item>
                <Form.Item
                    name="password"
                    validateStatus={formik.errors.password && formik.touched.password ? "error" : ""}
                    help={formik.touched.password ? formik.errors.password : ""}
                >
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        prefix={<LockOutlined />} placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Button htmlType='submit'>Log in</Button>
                </Form.Item>
            </Form>
        </main>
    )
}