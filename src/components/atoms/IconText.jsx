import { Space } from "antd";

export const IconText = ({ icon, text }) => (
    <Space>
        <span style={{zoom: '150%'}} className="cursor-pointer">
        {icon}
        </span>
        {text}
    </Space>
);