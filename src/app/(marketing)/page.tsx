import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <section className="min-h-screen hero-background flex items-center justify-center flex-col text-center text-balance gap-8 px-4">
        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">
          Price Smarter, Sell Bigger!
        </h1>
        <p className="text-xl lg:text-2xl max-w-screen-xl">
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
    </>
  );
}
