'use client'
import UsersTable from '../components/users/users.table'

const UsersPage = async () => {
	const res = await fetch("http://localhost:8000/users", {
		method: "GET"
	});
	const data = await res.json();
	// console.log('dbfjnk', data)
	return (
		<div>
			<p>Users Page</p>
			<UsersTable
				users={data? data : []}
			/>
		</div>
	)
}

export default UsersPage;
