
import BlogsItem from "@/components/blogs/blogs.list";

const BlogsPage = async (props: any) => {
	// const LIMIT = 3;
    // const page = props?.searchParams?.page ?? 1;

    const res = await fetch(
        `http://localhost:8000/blogs`,
        {
            method: "GET",
            next: { tags: ['list-blogs'] }
        }
    );
    // const total_items = +(res.headers?.get("X-Total-Count") ?? 0)
    const data = await res.json();

	return (
		<div>
            <BlogsItem
                blogs={data ? data : []}
            />

        </div>
	)
}

export default BlogsPage;