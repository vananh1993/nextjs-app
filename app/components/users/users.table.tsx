'use client'
import { Table } from 'antd'
import type { ColumsType } from 'antd/es/table'
import { IUser } from '../types/backend'

interface Iprops {
	users: IUser[] | []
}

const UsersTable = (props: Iprops) => {

	const { users } = props;
	const dataSource = [
	  {
	    id: '1',
	    name: '10 Downing Street',
	    email: "test@test.com",
	    key:'1'
	  },
	  {
	    id: '2',
	    name: '10 Downing Street 2',
	    email: "test@test.com",
	    key:'2'
	  },
	];

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


	return (
		<div>
			
			<Table
				bordered
				dataSource={users} columns={columns} />
		</div>
	)
}

export default UsersTable;