"use client";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { env } from "@/data/env/client";
import { CopyCheckIcon, CopyIcon, CopyXIcon } from "lucide-react";
import { useState } from "react";

type CopyState = "idle" | "copied" | "error";

export default function AddToSiteProductModalContent({ id }: { id: string }) {
  const code = `<script src="${env.NEXT_PUBLIC_SERVER_URL}/api/products/${id}/banner"></script>`;
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const CopyStateIcon = getIcon(copyState);

  const copyCodeHandler = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => setCopyState("copied"))
      .catch(() => setCopyState("error"))
      .finally(() => setTimeout(() => setCopyState("idle"), 2000));
  };

  return (
    <DialogContent className="max-w-max">
      <DialogHeader>
        <DialogTitle>Start Earing with Coupon Deal</DialogTitle>
        <DialogDescription>
          All you need to do is copy the below script into your site and your
          customer will start seeing discount from coupon deal!
        </DialogDescription>
      </DialogHeader>
      {/* script for copying */}
      <pre className="mb-4 overflow-x-auto p-4 bg-secondary rounded max-w-screen-xl text-secondary-foreground">
        <code>{code}</code>
      </pre>
      <DialogFooter>
        <Button onClick={copyCodeHandler}>
          {<CopyStateIcon />}
          {getCopyStateText(copyState)}
        </Button>
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}

function getIcon(copyState: CopyState) {
  switch (copyState) {
    case "idle":
      return CopyIcon;
    case "copied":
      return CopyCheckIcon;
    case "error":
      return CopyXIcon;
  }
}

function getCopyStateText(copyState: CopyState) {
  switch (copyState) {
    case "idle":
      return "Copy code";
    case "copied":
      return "Copied";
    case "error":
      return "Error";
  }
}
