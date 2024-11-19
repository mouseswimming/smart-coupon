import { ReactNode } from "react";
import NavBar from "./_components/NavBar";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="selection:bg-pink-300/20
  "
    >
      <NavBar />
      {children}
    </div>
  );
}
