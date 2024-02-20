'use client'

import { Table } from 'antd'
import type { ColumsType } from 'antd/es/table'
import { IUser } from '../types/backend'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

interface Iprops {
	users: IUser[] | [],
	meta: {
		current: number;
		pageSize: number;
		total: number
	}
}

const UsersTable = (props: Iprops) => {

	const { users, meta } = props;
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const [ isFetching, setIsFetching ] = useState<boolean>(false);



	useEffect (() => {
		if(users) setIsFetching(false)
	}, [users]);

	
	
	const columns: ColumsType<IUser> = [
	  {
	    title: 'Id',
	    dataIndex: 'id',
	  },
	  {
	    title: 'Email',
	    dataIndex: 'email',
	  },
	  {
	    title: 'Name',
	    dataIndex: 'name',
	  }
	];
	// console.log(searchParams);
	const onChange = (pagination:any, filters: any, sorter: any, extra: any) => {
		if(pagination && pagination.current) {
			const params = new URLSearchParams(searchParams);
			params.set('page', pagination.current);
			replace(`${pathname}?${params.toString()}`)
			setIsFetching(true)
		}
	}

	return (
		<div>
			
			<Table
				loading={isFetching}
				rowKey={"id"}
				bordered
				dataSource={users} 
				columns={columns}
				onChange={onChange}
				pagination={
					{
						...meta,
						showTotal: (total, range) => {
							return (<div> {range[0]}/{range[1]} rows </div>)
						}
					}
				}
				 />
		</div>
	)
}

export default UsersTable;