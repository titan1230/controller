"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  location: string;
  status: "pending" | "processing" | "detected" | "failed";
  logo: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "logo",
    header: "Logo",
  },
  {
    accessorKey: "location",
    header: "location",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
