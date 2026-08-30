"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = "yajf9xpi47";

// fire-and-forget analytics init; kept out of layout.tsx's server component
// so the client-only Clarity SDK doesn't affect SSR
export function ClarityInit() {
  useEffect(() => {
    Clarity.init(CLARITY_PROJECT_ID);
  }, []);

  return null;
}
