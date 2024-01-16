const DetailUserPage = (props: any) => {
	// console.log(props)
	const {params} = props;
	return (
		<div>

			<p>Detail User Page</p>
			<p>id = {params?.id}</p>
		</div>
	)
}

export default DetailUserPage;