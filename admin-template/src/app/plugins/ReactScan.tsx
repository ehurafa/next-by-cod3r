"use client";
import { scan } from "react-scan/all-environments";
import React, { useEffect } from "react";

export function ReactScan(): React.ReactElement | null {
  useEffect(() => {
    scan({ enabled: true });
  }, []);

  return null;
}