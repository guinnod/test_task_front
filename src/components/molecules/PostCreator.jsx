import { Button, Form, Input, Modal } from "antd";

export const PostCreator = ({ open, onCancel }) => {
    const [form] = Form.useForm();
    const handleSubmit = () => {
        console.log("Finish");
        form.submit()
        form.resetFields();
    }
    return (
        <Modal open={open} onCancel={onCancel}
            title="Create a new post!"
            footer={<Button type="primary"
                htmlType="submit"
                onClick={handleSubmit}>Submit
            </Button>}>
            <Form
                form={form}
                className="pt-5 px-3">
                <Form.Item
                    name='content'
                    rules={[
                        { required: true, message: "Please fill content!" }
                    ]}
                    validateTrigger='onChange'
                >
                    <Input.TextArea
                        placeholder="Write your post here"
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
}