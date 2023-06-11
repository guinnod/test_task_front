import { Button, Form, Input, Modal } from "antd";
import { useEffect, useRef } from "react";

export const PostCreator = ({ open, onCancel }) => {
    const [form] = Form.useForm();
    const handleSubmit = () => {
        if (!form.getFieldValue("content")?.length) {
            form.validateFields();
            return;
        }
        console.log("Finish");
        form.submit();
        form.resetFields();
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
                onClick={handleSubmit}>
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