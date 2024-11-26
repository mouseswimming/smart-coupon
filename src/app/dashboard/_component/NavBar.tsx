import BrandLogo from "@/components/BrandLogo";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className=" bg-background py-4 shadow">
      <nav className="flex items-center gap-10 container">
        <Link href="/dashboard" className="mr-auto">
          <BrandLogo />
        </Link>
        <Link href="/dashboard/products">Products</Link>
        <Link href="/dashboard/analytics">Analytics</Link>
        <Link href="/dashboard/subscription">Subscription</Link>
        <UserButton />
      </nav>
    </header>
  );
}
