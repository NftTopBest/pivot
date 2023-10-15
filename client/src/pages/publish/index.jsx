import { Button, Form, Input, message, Upload, Modal, Spin } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";


const { TextArea } = Input;
function Publish() {
    const [messageApi, contextHolder] = message.useMessage();
    const { state: { contract} } = useEth();
    useEffect(() => {
        console.log(contract,'66')
    }, [])
    const [loading, setLoading] = useState(false);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);

    const upload = async (info) => {
        let reader = new FileReader()
        console.log(info)
        // delete info.uid
        // reader.readAsArrayBuffer(info)

        // reader.onloadend = () => {
        //     console.log("result : ", reader.result)
        //     saveToIpfs(reader.result).then(hash => {
        //         console.log("hash : ", hash)
        //         setPicHash(hash)
        //     })
        // }
    }

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const props = {
        name: 'file',
        multiple: false,
        beforeUpload: () => {
            return false;
        },
        onChange({ file, fileList: newFileList }) {
            setFileList(newFileList)
            upload(file)
        },
        onPreview: handlePreview,
        listType: 'picture-card',
        fileList: fileList,
        maxCount: 1,
        // showUploadList: false
    };
    const onFinish = async ({ nftName, description }) => {

    };
    const handleCancel = () => setPreviewOpen(false);
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
                        label="封面图片"
                        name="picture"
                        // 以下两条是必须的
                        valuePropName="fileList"
                        // 如果没有下面这一句会报错
                        getValueFromEvent={e => {
                            if (Array.isArray(e)) {
                                return e;
                            }
                            return e && e.fileList;
                        }}
                        rules={[
                            {
                                required: true,
                                message: '请上传图片!',
                            },
                        ]}
                    >
                        <Upload {...props} >
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">上传图片</p>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        label="项目地址"
                        name="nftUrl"
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
                        label="项目名称"
                        name="nftName"
                        rules={[
                            {
                                required: true,
                                message: '请输入项目名称!',
                            },
                        ]}
                    >
                        <Input placeholder="请输入项目名称" />
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
