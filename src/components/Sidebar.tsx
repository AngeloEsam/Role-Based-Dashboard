import { AnimatePresence, motion } from "framer-motion";
import { Menu, Users, Briefcase, LayoutDashboard, LogOut } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type SidebarProps = {
  role: string |undefined;
};

const Sidebar: React.FC<SidebarProps> = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

   const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };
  const SIDEBAR_ITEMS = [
  { name: "Dashboard", icon: LayoutDashboard, color: "#6366f1", href: "/dashboard" },
  { name: "Users", icon: Users, color: "#EC4899", href: "/dashboard/users" },
  { name: "Clients", icon: Briefcase, color: "#10B981", href: "/dashboard/clients" },
  { name: "Finance", icon: Briefcase, color: "#F59E0B", href: "/dashboard/finance" },
];


  

  return (
    <motion.div
      className={`relative z-20 transition-all duration-300 ease-in-out h-full flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-900 bg-opacity-90 backdrop-blur-md p-4 flex flex-col border-r border-gray-800">
        {/* Toggle button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors max-w-fit text-white"
        >
          <Menu size={22} />
        </motion.button>

        {/* Nav items */}
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-center p-3 text-sm font-medium text-white rounded-lg hover:bg-gray-800 transition-colors mb-2">
                <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>

        {/* Logout button */}
        <div className="mt-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex items-center p-3 w-full text-sm font-semibold text-red-400 hover:text-red-500 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <LogOut size={20} className="min-w-[20px]" />
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.span
                  className="ml-4 whitespace-nowrap"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                >
                  Logout
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
