import { useEffect } from "react";
import { captureAttribution, track } from "@/lib/analytics";
export function Analytics() {
  useEffect(() => {
    captureAttribution();
    const click = (event: MouseEvent) => {
      const link = (event.target as Element).closest?.("a");
      const href = link?.getAttribute("href") || "";
      const placement = link?.closest("header") ? "header" : link?.closest("footer") ? "footer" : "content";
      if (href.startsWith("tel:")) track("click_to_call", { cta_placement: placement });
      if (href.startsWith("mailto:")) track("click_email", { cta_placement: placement });
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);
  return null;
}
