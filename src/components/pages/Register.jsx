import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { Logo } from '@components/atoms/Logo';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Incorrect email format!").required("Please enter your email!"),
    password: Yup.string().min(8, "Password length should be at least 8!")
        .max(24, "Password length should be at most 24!").required("Please enter your password!"),
    repeatPassword: Yup.string()
        .required('Repeat password is required')
        .test('password-match', 'Passwords must match', function (value) {
            return value === this.parent.password;
        }),
});

export const Register = () => {

    const formik = useFormik({
        initialValues: {
            email: "", password: "", repeatPassword: ""
        },
        validationSchema: validationSchema,
        validateOnBlur: true,
        validateOnChange: false,
        onSubmit: () => { console.log('Finish!'); }
    });
    const INPUT_SIZE = 'large';
    return (
        <main className="flex flex-col h-full justify-center gap-10 items-center">
            <Logo />
            <div className="w-full max-w-sm">
                <Form onFinish={formik.submitForm} className="flex flex-col items-center gap-1 w-full px-10">
                    <Form.Item
                        name="email"
                        validateStatus={formik.errors.email && formik.touched.email ? "error" : ""}
                        help={formik.touched.email && formik.errors.email}
                        className="w-full"
                    >
                        <Input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            prefix={<UserOutlined />} placeholder="E-mail" aria-autocomplete="none"
                            size={INPUT_SIZE} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        validateStatus={formik.errors.password && formik.touched.password ? "error" : ""}
                        help={formik.touched.password ? formik.errors.password : ""}
                        className="w-full"
                    >
                        <Input.Password
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            prefix={<LockOutlined />} placeholder="Password"
                            size={INPUT_SIZE} />
                    </Form.Item>
                    <Form.Item
                        name="repeatPassword"
                        validateStatus={formik.errors.repeatPassword && formik.touched.repeatPassword ? "error" : ""}
                        help={formik.touched.repeatPassword ? formik.errors.repeatPassword : ""}
                        className="w-full"
                    >
                        <Input.Password
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            prefix={<LockOutlined />} placeholder="Repeat password"
                            size={INPUT_SIZE} />
                    </Form.Item>

                    <Form.Item className="w-full">
                        <Button className="mt-2 bg-sky-400 text-white hover:bg-sky-500 w-full" htmlType='submit'
                            type='ghost'
                            size={INPUT_SIZE}>Sign up</Button>
                    </Form.Item>
                    <div className="w-full">
                        <Link to="/login">
                            <Button type="link" className="p-0 whitespace-break-spaces">
                                Already have an account? Log in here
                            </Button>
                        </Link>
                    </div>
                </Form>
            </div>
        </main>
    )
}