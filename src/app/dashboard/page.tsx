import { getProducts } from "@/server/db/products";
import { auth } from "@clerk/nextjs/server";
import { NoProducts } from "./_component/NoProducts";
import { ArrowRightIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductGrid from "./_component/ProductGrid";

export default async function DashboardPage() {
  const { userId, redirectToSignIn } = await auth();
  if (userId == null) return redirectToSignIn();

  const products = await getProducts(userId, { limit: 6 });

  if (products.length === 0) return <NoProducts />;

  return (
    <>
      <div className="mb-6 flex justify-between">
        <h2 className="text-2xl font-semibold ">
          <Link
            href="/dashboard/products"
            className="group flex gap-2 items-center hover:underline"
          >
            Products
            <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </h2>
        <Button asChild>
          <Link href="/dashboard/products/new">
            <PlusIcon />
            New Product
          </Link>
        </Button>
      </div>
      <ProductGrid products={products} />
    </>
  );
}
