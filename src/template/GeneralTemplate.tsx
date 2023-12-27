import { Outlet } from "react-router-dom";
import AppBar from "@/components/AppBar";

export default function Template() {
  return (
    <div className="flex-auto">
      <AppBar />
      <Outlet />
    </div>
  );
}
