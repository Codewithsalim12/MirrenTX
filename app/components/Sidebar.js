import { useState } from "react";
import { Home, Users, Settings, ClipboardList } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, link: "/admin" },
    { name: "Users", icon: <Users size={20} />, link: "/admin/users" },
    {
      name: "Bookings",
      icon: <ClipboardList size={20} />,
      link: "/admin/bookings",
    },
    { name: "Settings", icon: <Settings size={20} />, link: "/admin/settings" },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-5">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav>
        {menuItems.map((item) => (
          <Link key={item.name} href={item.link}>
            <div
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                active === item.name ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
              onClick={() => setActive(item.name)}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
