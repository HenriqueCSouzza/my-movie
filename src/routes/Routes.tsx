import Home from "@/pages/Home";
import Search from "@/pages/Search";
import GeneralTemplate from "@/template/GeneralTemplate";
import { useRoutes } from "react-router-dom";

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <GeneralTemplate />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/search",
          element: <Search />,
        },
      ],
    },
  ]);
  return routes;
}
