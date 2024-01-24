'use client'
import UsersTable from '../components/users/users.table'

const calculatePageCount = (pageSize: number, totalCount: number) => {
	return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize)
}

const UsersPage = async (props: any) => {
	const LIMIT = 1;
	const page = props?.searchParams?.page ?? 1;

	const res = await fetch(`http://localhost:8000/users?_page=${page}&_limit=${LIMIT}`, {
		method: "GET"
	});
	const data = await res.json();
	const total_items = +(res.headers?.get("X-Total-Count") ?? 0);
	const totalPages = calculatePageCount(LIMIT, total_items);


	// console.log('dbfjnk', data)

	return (
		<div>
			<p>Users Page</p>
			<UsersTable
				users={data? data : []}
				meta={
					{
						current: page,
						pageSize: LIMIT,
						total: total_items
					}
				}
			/>
		</div>
	)
}

export default UsersPage;
