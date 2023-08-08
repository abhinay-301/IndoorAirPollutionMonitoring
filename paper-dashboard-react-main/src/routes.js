
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import TableList from "views/Tables.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Sensors",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Team Members",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin"
  }
];
export default routes;
