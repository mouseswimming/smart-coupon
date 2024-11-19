import { Gem } from "lucide-react";

export default function BrandLogo() {
  return (
    <div className="flex items-center gap-2 flex-shrink-0 mr-auto text-xl font-semibold">
      <Gem className="size-10" />
      <span>Coupon Deal</span>
    </div>
  );
}
