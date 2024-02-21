'use client'

// import { Table } from 'antd'
import { Avatar, List } from 'antd';
// import type { ColumsType } from 'antd/es/table'
// import { IUser } from '../types/backend'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

interface Iprops {
	blogs: {
		title: string;
		author: string;
		content: string
	}
}

	const BlogsItem = (props: Iprops) => {

	const {blogs} = props;



	// const searchParams = useSearchParams();
	// const pathname = usePathname();
	// const { replace } = useRouter();

	// console.log(blogs)

	// useEffect (() => {
	// 	if(blogs) setIsFetching(false)
	// }, [blogs]);


	return (
		<div>
			<List
			    itemLayout="horizontal"
			    dataSource={blogs}
			    renderItem={(item, index) => (
			      <List.Item>
			        <List.Item.Meta
			          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
			          title={<a href="https://ant.design">{item.title}</a>}
			          description={item.content}
			        />
			      </List.Item>
			    )}
			  />
				<h1>gnsdnglk</h1>
		
		</div>
	)
}

export default BlogsItem;