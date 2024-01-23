'use client'
import { Table } from 'antd'
import type { ColumsType } from 'antd/es/table'
import { IUser } from '../types/backend'

const UsersTable = () => {
	const dataSource = [
	  {
	    key: '1',
	    name: 'Mike',
	    age: 32,
	    address: '10 Downing Street',
	  },
	  {
	    key: '2',
	    name: 'John',
	    age: 42,
	    address: '10 Downing Street',
	  },
	];

	const columns : ColumsType<IUser> = [
	  {
	    title: 'Name',
	    dataIndex: 'name',
	    key: 'name',
	  },
	  {
	    title: 'Age',
	    dataIndex: 'age',
	    key: 'age',
	  },
	  {
	    title: 'Address',
	    dataIndex: 'address',
	    key: 'address',
	  },
	];


	return (
		<div>
			
			<Table
				bordered
				dataSource={dataSource} columns={columns} />
		</div>
	)
}

export default UsersTable;