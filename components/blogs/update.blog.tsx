
import { handleUpdateBlogAction } from '@/actions/blogs';
import {
    Modal, Input,
    Form, Row, Col, message
} from 'antd';
import { useEffect } from 'react';

interface IProps {
    isUpdateModalOpen: boolean;
    setIsUpdateModalOpen: (v: boolean) => void;
    dataUpdate: any;
    setDataUpdate: any;
}

const UpdateBlog = (props: IProps) => {

    const {
        isUpdateModalOpen, setIsUpdateModalOpen,
        dataUpdate, setDataUpdate
    } = props;
    // console.log(setDataUpdate);
    const [form] = Form.useForm();

    useEffect(() => {
        if (dataUpdate) {
            //code
            form.setFieldsValue({
                title: dataUpdate.title,
                author: dataUpdate.author,
                content: dataUpdate.content,
            })
        }
    }, [dataUpdate])

    const handleCloseUpdateModal = () => {
        form.resetFields()
        setIsUpdateModalOpen(false);
        setDataUpdate(null)
    }

    const onFinish = async (values: any) => {
        const { title, author, content } = values;
        if (dataUpdate) {
            const data = {
                id: dataUpdate.id, //undefined
                title, author, content, 
            }

            await handleUpdateBlogAction(data)
            handleCloseUpdateModal();
            message.success("Update Blog succeed")
        }
    };

    const { TextArea } = Input;

    return (
        <Modal
            title="Update a Blog"
            open={isUpdateModalOpen}
            onOk={() => form.submit()}
            onCancel={() => handleCloseUpdateModal()}
            maskClosable={false}
        >
            <Form
                name="basic"
                onFinish={onFinish}
                layout="vertical"
                form={form}
            >
                <Row gutter={[15, 15]}>
                    <Col span={24} md={24}>
                        <Form.Item
                            label="Title"
                            name="title"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24} md={24}>
                        <Form.Item
                            label="Author"
                            name="author"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input type='text' />
                        </Form.Item>
                    </Col>
                    <Col span={24} md={24}>
                        <Form.Item
                            label="Content"
                            name="content"
                            rules={[{ required: true, message: 'Please input your content!' }]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}

export default UpdateBlog;