import BrandLogo from "@/components/BrandLogo";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="py-6 shadow-lg fixed top-0 w-full z-10 bg-background/95">
      <nav className="flex items-center gap-10 container font-semibold">
        <Link href="/" className="mr-auto">
          <BrandLogo />
        </Link>
        <Link href="#" className="text-lg">
          Features
        </Link>
        <Link href="#" className="text-lg">
          Pricing
        </Link>
        <Link href="#" className="text-lg">
          About
        </Link>

        {/* 
          Wrap the clerk login button in span, so the style of link can be applied on it and inhreit on the clerk login button
        */}
        <span className="text-lg">
          <SignedIn>
            <Link href="#">Dashboard</Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>Login</SignInButton>
          </SignedOut>
        </span>
      </nav>
    </header>
  );
}