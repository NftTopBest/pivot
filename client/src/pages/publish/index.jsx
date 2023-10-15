import { Button, Form, Input, message, Upload, Modal, Spin } from 'antd';
import { useEffect, useRef, useState } from "react";
import { InboxOutlined } from '@ant-design/icons';

const { TextArea } = Input;
function Publish() {
    const [messageApi, contextHolder] = message.useMessage();
    // useEffect(() => {
    //     document.title = '创建nft'
    // }, [])
    const [loading, setLoading] = useState(false);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const onFinish = async ({ nftName, description }) => {

    };
    const handleCancel = () => {

    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="container">
            <Spin spinning={loading} delay={500} tip="创建中...">
                <div style={{ margin: '25px 0' }}>
                    <h2>
                        创建新项目
                    </h2>
                    <span>可以是twitter的推文、youtube的视频、github的开源项目</span>
                </div>
                <Form
                    name="basic"
                    labelAlign="left"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="项目地址"
                        name="nftName"
                        rules={[
                            {
                                required: true,
                                message: '请输入项目地址!',
                            },
                        ]}
                    >
                        <Input placeholder="请输入项目地址" />
                    </Form.Item>
                    <Form.Item
                        label="作者昵称"
                        name="authorName"
                        rules={[
                            {
                                required: true,
                                message: '请输入作者昵称！',
                            },
                        ]}
                    >
                        <Input placeholder="请输入作者昵称" />
                    </Form.Item>
                    <Form.Item
                        label="价格"
                        name="price"
                        rules={[
                            {
                                required: true,
                                message: '请输入价格！',
                            },
                        ]}
                    >
                        <Input placeholder="请输入价格" />
                    </Form.Item>

                    <Form.Item
                        label="简介"
                        name="description"
                    >
                        <TextArea placeholder="请输入简介" />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            创建
                        </Button>

                    </Form.Item>
                </Form>
                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                    <img
                        alt="example"
                        style={{
                            width: '100%',
                        }}
                        src={previewImage}
                    />
                </Modal>

            </Spin>
        </div>
    )
}
export default Publish;
