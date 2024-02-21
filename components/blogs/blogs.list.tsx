'use client'

// import { Table } from 'antd'
import { Avatar, List, Popconfirm, Button } from 'antd';
// import type { ColumsType } from 'antd/es/table'
// import { IUser } from '../types/backend'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { PlusOutlined, DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import CreateBlog from './create.blog';
import UpdateBlog from './update.blog';
import { handleDeleteBlogAction } from '@/actions/blogs';

interface Iprops {
	blogs: {
		title: string;
		author: string;
		content: string
	}
}

	const BlogsItem = (props: Iprops) => {

	const {blogs} = props;


	const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
    const [dataUpdate, setDataUpdate] = useState<any>(null);

	const handleDeleteBlog = async (blog: any) => {
        await handleDeleteBlogAction({ id: blog.id })
    };

    const renderHeader = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                    icon={<PlusOutlined />}
                    type="primary"
                    onClick={() => setIsCreateModalOpen(true)}
                >
                    Thêm mới
                </Button>
            </div>
        )
    }

	return (
		<div >
			<List
				header={renderHeader()}
			    itemLayout="horizontal"
			    dataSource={blogs}
			    renderItem={(item, index) => (
			      <List.Item
			       actions={[<>
                        <EditTwoTone
                            twoToneColor="#f57800" style={{ cursor: "pointer", margin: "0 20px" }}
                            onClick={() => {
                                setIsUpdateModalOpen(true);
                                setDataUpdate(item);
                            }}
                        />

                        <Popconfirm
                            placement="leftTop"
                            title={"Xác nhận xóa Blog"}
                            description={"Bạn có chắc chắn muốn xóa Blog này ?"}
                            onConfirm={() => handleDeleteBlog(item)}
                            okText="Xác nhận"
                            cancelText="Hủy"
                        >
                            <span style={{ cursor: "pointer" }}>
                                <DeleteTwoTone twoToneColor="#ff4d4f" />
                            </span>
                        </Popconfirm>
                    </>]} 
			      >
			        <List.Item.Meta
			          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
			          title={<a href="https://ant.design">{item.title}</a>}
			          description={item.content}

			        />
			      </List.Item>
			    )}
			  />
			<CreateBlog
                isCreateModalOpen={isCreateModalOpen}
                setIsCreateModalOpen={setIsCreateModalOpen}
            />

            <UpdateBlog
                isUpdateModalOpen={isUpdateModalOpen}
                setIsUpdateModalOpen={setIsUpdateModalOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
            />
		
		</div>
	)
}

export default BlogsItem;