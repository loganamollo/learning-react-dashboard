import Link from "next/link"

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-2 text-white">
            <Link href='/'>Dashboard</Link>
            <Link href='products'>Products</Link>
            Dashboard
        </div>
    )
}