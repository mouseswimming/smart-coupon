import { Button } from "@/components/ui/button";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import { SignUpButton } from "@clerk/nextjs";
import {
  ArrowRightIcon,
  Chrome,
  Codepen,
  Dribbble,
  Github,
  Trello,
  Twitch,
} from "lucide-react";
import Link from "next/link";
import PriceCard from "./_components/PriceCard";
import BrandLogo from "@/components/BrandLogo";
import FooterLinkGroup from "./_components/FooterLinkGroup";

export default function HomePage() {
  return (
    <>
      {/* hero section */}
      <section className="min-h-screen hero-background flex items-center justify-center flex-col text-center text-balance gap-8 px-4">
        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">
          Price Smarter, Sell Bigger!
        </h1>
        <p className="text-2xl lg:text-3xl max-w-screen-xl">
          Optimize your product pricing across countries to maximize sales.
          Capture 85% of the untapped market with location-based dynamic
          pricing.
        </p>
        <SignUpButton>
          <Button className="text-lg p-6 rounded-xl flex gap-2">
            Get started for free <ArrowRightIcon size={5} />
          </Button>
        </SignUpButton>
      </section>

      {/* used by section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 grid gap-12 px-8 md:px-16">
          <h2 className="text-2xl lg:text-3xl text-center text-balance font-semibold">
            Trusted by the top modern companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16 justify-items-center">
            <Link
              href="#"
              className="flex gap-2 items-center text-lg font-semibold"
            >
              <Chrome className="w-20 h-20 md:w-16 md:h-16" /> Chrome
            </Link>
            <Link
              href="#"
              className="flex gap-2 items-center text-lg font-semibold"
            >
              <Codepen className="w-20 h-20 md:w-16 md:h-16" /> Codepen
            </Link>
            <Link
              href="#"
              className="flex gap-2 items-center text-lg font-semibold"
            >
              <Dribbble className="w-20 h-20 md:w-16 md:h-16" /> Dribble
            </Link>
            <Link
              href="#"
              className="flex gap-2 items-center text-lg font-semibold"
            >
              <Twitch className="w-20 h-20 md:w-16 md:h-16" /> Twitch
            </Link>
            <Link
              href="#"
              className="flex gap-2 items-center text-lg font-semibold"
            >
              <Trello className="w-20 h-20 md:w-16 md:h-16" /> Trello
            </Link>
            <Link
              href="#"
              className="flex gap-2 items-center text-lg font-semibold xl:hidden"
            >
              <Github className="w-20 h-20 md:w-16 md:h-16" /> Github
            </Link>
          </div>
        </div>
      </section>

      {/* pricing section */}
      <section id="pricing" className="py-16 bg-accent/5">
        <div className="container  grid gap-12">
          <h2 className="text-2xl lg:text-3xl text-center text-balance font-semibold">
            Pricing
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4  mx-auto">
            {subscriptionTiersInOrder.map((tier) => (
              <PriceCard key={tier.name} {...tier} />
            ))}
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="container pt-16 pb-8 grid gap-8 md:flex md:gap-4  justify-between items-start">
        <Link href="/">
          <BrandLogo />
        </Link>
        <div className="flex flex-col gap-8 md:flex-row lg:gap-36 md:gap-24">
          <div className="flex flex-col sm:flex-grow gap-8">
            <FooterLinkGroup
              title="Help"
              links={[
                { label: "PPP Discounts", href: "#" },
                { label: "Discount API", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Tutorials"
              links={[
                { label: "Any Website", href: "#" },
                { label: "Lemon Squeezy", href: "#" },
                { label: "Gumroad", href: "#" },
                { label: "Stripe", href: "#" },
                { label: "Chargebee", href: "#" },
                { label: "Paddle", href: "#" },
              ]}
            />
          </div>
          <div className="flex flex-col sm:flex-grow gap-8">
            <FooterLinkGroup
              title="Features"
              links={[{ label: "PPP Discounts", href: "#" }]}
            />
            <FooterLinkGroup
              title="Tools"
              links={[
                { label: "Salary Converter", href: "#" },
                { label: "Coupon Generator", href: "#" },
                { label: "Stripe App", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Company"
              links={[
                { label: "Affiliate", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Terms of Service", href: "#" },
              ]}
            />
          </div>
          <div className="flex flex-col sm:flex-grow gap-8">
            <FooterLinkGroup
              title="Solutions"
              links={[
                { label: "Newsletter", href: "#" },
                { label: "SaaS Business", href: "#" },
                { label: "Online Courses", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Integrations"
              links={[
                { label: "Lemon Squeezy", href: "#" },
                { label: "Gumroad", href: "#" },
                { label: "Stripe", href: "#" },
                { label: "Chargebee", href: "#" },
                { label: "Paddle", href: "#" },
              ]}
            />
          </div>
        </div>
      </footer>
    </>
  );
}
