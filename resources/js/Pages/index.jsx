import {Link} from "@inertiajs/react";

export default function index() {
    const onClick = () => {
        console.log("hello")
    }

    return (
        <>
            <h1>Home</h1>
            <Link href={"/about"}>Click Me</Link>
        </>
    )
}