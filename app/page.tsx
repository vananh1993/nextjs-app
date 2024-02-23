
import Image from 'next/image'

export default function Home() {
    async function create(formData: FormData) {
    'use server'
    // console.log('dnsfkd', formData)
    // ...
    }

    return (
    <main className="flex min-h-screen flex-col ">
        Home
        <div>
            <form action={create}>
                <input name="username" type="text"/>
                <button type="submit"> Save </button>
            </form>
        </div>
    </main>
    )
}
