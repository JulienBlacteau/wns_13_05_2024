import { ReactNode } from "react";

// TODO
export interface Country {
    [x: string]: ReactNode;
    id: string;
    name: string;
    emoji: string;
  }