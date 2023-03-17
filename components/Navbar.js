import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
        <div className="logo">
          <Image src="/pngegg.png" width={128} height={77} />
        </div>

        <Link href="/">Home</Link>
        <Link href="/league">League</Link>
        <Link href="/send">Send</Link>
        <Link href="/Users/users">Users</Link>
        <Link href="/about">About</Link>

    </nav>
  )
}
