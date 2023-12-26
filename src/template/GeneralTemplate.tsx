import { ReactElement } from "react";
import AppBar from "@/components/AppBar";

export default function Template({ children }: { children: ReactElement }) {
  return (
    <div className="flex-auto">
      <AppBar />
      {children}
    </div>
  );
}
