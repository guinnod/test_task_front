import { Button, Form, Input, Modal } from "antd";
import { useContext, useEffect, useRef, useState } from "react";
import { createPost, getUserPosts } from "@api/postAPI";
import { HomeContext } from "@/context/HomeContext";
import { useLocation } from "react-router-dom";

export const PostCreator = ({ open, onCancel }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const { messageApi, setMyPosts } = useContext(HomeContext);
    const location = useLocation();

    const handleSubmit = () => {
        if (!form.getFieldValue("content")?.length) {
            form.validateFields();
            return;
        }
        form.validateFields()
            .then(values => {
                console.log(values);
                setLoading(true)
                createPost(values)
                    .then(res => {
                        messageApi.open({
                            type: 'sucess',
                            content: res.data,
                            duration: 3
                        });
                        if (location.pathname.includes('profile')) {
                            getUserPosts()
                                .then(res => {
                                    onCancel()
                                    setMyPosts(res.data)
                                })
                                .catch(err => {

                                })
                        }
                        form.submit();
                        form.resetFields();
                    })
                    .catch(err => {
                        messageApi.open({
                            type: 'error',
                            content: err.response.data,
                            duration: 3
                        })
                    })
                    .finally(() => {
                        setLoading(false)
                    })
            })
            .catch(err => {
                console.log(err);
                return;
            })
    }

    useEffect(() => {
        if (!open) {
            form.setFields([{
                name: 'content', errors: ""
            }])
            return;
        }
        setTimeout(() => {
            inputRef.current?.focus();
        }, 10);
    }, [open])
    const inputRef = useRef(null);
    return (
        <Modal open={open} onCancel={onCancel}
            title="Create a new post!"
            footer={<Button type="primary"
                htmlType="submit"
                onClick={handleSubmit}
                loading={loading}>
                Submit
            </Button>}>
            <Form
                form={form}
                className="pt-5 px-3">
                <Form.Item
                    name='content'
                    rules={[
                        { required: true, message: "Please fill content!" },
                    ]}
                    validateTrigger='onChange'
                >
                    <Input.TextArea
                        placeholder="Write your post here"
                        bordered={false}
                        autoSize
                        className="max-h-60 px-0 mb-2"
                        ref={inputRef}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
}