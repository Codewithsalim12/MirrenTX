"use client";

import { useState, useEffect } from "react";
import { 
  Users, 
  DollarSign, 
  Eye, 
  EyeOff,
  LayoutDashboard, 
  Settings, 
  LogOut,
  TrendingUp,
  Package,
  Calendar,
  Lock,
  Loader2,
  AlertCircle,
  Check,
  X,
  Menu,
  Phone,
  MapPin,
  Mail,
  ExternalLink,
  Save,
  ChevronRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

const ICON_MAP = {
  totalUsers: Users,
  activeRentals: Package,
  totalEarnings: DollarSign,
  totalVisitors: Eye
};

const KPI_CONFIG = {
  totalUsers: { title: "Total Users", trend: "+12.5%", color: "text-blue-500", bg: "bg-blue-100" },
  activeRentals: { title: "Currently on Rent", trend: "+5.2%", color: "text-purple-500", bg: "bg-purple-100" },
  totalEarnings: { title: "Total Earnings", trend: "+18.2%", color: "text-emerald-500", bg: "bg-emerald-100" },
  totalVisitors: { title: "Total Visitors", trend: "+2.4%", color: "text-amber-500", bg: "bg-amber-100" }
};

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // Tab State
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [dashboardData, setDashboardData] = useState({
    kpis: {},
    recentRentals: [],
    recentUsers: []
  });
  
  // Email Loading State
  const [sendingEmailId, setSendingEmailId] = useState(null);

  useEffect(() => {
    const authStatus = sessionStorage.getItem("adminAuth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
      fetchDashboardData();
    } else {
      setIsLoading(false);
    }
  }, []);

  const fetchDashboardData = async () => {
    try {
      const res = await fetch("/api/admin/dashboard");
      const json = await res.json();
      if (json.success) {
        setDashboardData(json.data);
      }
    } catch (err) {
      console.error("Failed to fetch dashboard data", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setIsSigningIn(true);
    
    setTimeout(() => {
      if (email === "mirrentx@gmail.com" && password === "Mirrentx@1z") {
        sessionStorage.setItem("adminAuth", "true");
        setIsAuthenticated(true);
        fetchDashboardData();
      } else {
        setError("Invalid admin credentials");
      }
      setIsSigningIn(false);
    }, 1500);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
    setEmail("");
    setPassword("");
    setActiveTab("dashboard");
    setIsMobileMenuOpen(false);
  };

  const updateRentalStatus = async (rentalId, newStatus) => {
    try {
      const res = await fetch(`/api/admin/rentals/${rentalId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const json = await res.json();
      if (json.success) {
        fetchDashboardData();
        toast.success(`Rental marked as ${newStatus}`);
      }
    } catch (err) {
      console.error("Failed to update status", err);
      toast.error("Failed to update status");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Completed': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Cancelled': return 'bg-red-50 text-red-700 border-red-200';
      case 'Pending Setup': return 'bg-amber-50 text-amber-700 border-amber-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const updateRentalAmount = async (rentalId, amount) => {
    try {
      const res = await fetch(`/api/admin/rentals/${rentalId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ totalAmount: amount }),
      });
      const json = await res.json();
      if (json.success) {
        fetchDashboardData();
        toast.success(`Payment of ₹${amount} saved.`);
      }
    } catch (err) {
      console.error("Failed to update amount", err);
      toast.error("Failed to update amount");
    }
  };

  const handleSendEmail = async (rentalId) => {
    setSendingEmailId(rentalId);
    try {
      const res = await fetch("/api/admin/send-placed-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rentalId }),
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Order confirmation email sent successfully!");
      } else {
        toast.error(json.error || "Failed to send email. Please try again.");
      }
    } catch (err) {
      console.error("Email error:", err);
      toast.error("Internal connection error while sending email.");
    } finally {
      setSendingEmailId(null);
    }
  };


  // ---------------------------------------------------------------------------
  // RENDER LOGIN SCREEN (Auth Guard)
  // ---------------------------------------------------------------------------
  if (isLoading && !isAuthenticated) return null;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
        <Card className="w-full max-w-md shadow-2xl rounded-2xl border-0 overflow-hidden relative">
          
          {isSigningIn && (
            <div className="absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center">
              <Loader2 className="w-12 h-12 text-slate-900 animate-spin mb-4" />
              <h3 className="text-xl font-bold text-slate-800 tracking-tight">Signing you in as admin...</h3>
              <p className="text-slate-500 text-sm mt-2 font-medium">Securing connection</p>
            </div>
          )}

          <div className="bg-slate-900 p-8 text-center relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.8),transparent_70%)]"></div>
            
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg border border-white/20">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white relative z-10 tracking-wide">Admin Portal</h1>
            <p className="text-slate-400 mt-2 relative z-10 text-sm">Secure Management Access</p>
          </div>
          
          <div className="p-8 bg-white">
            <form onSubmit={handleLogin} className="space-y-5">
              {error && (
                <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-100 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                  {error}
                </div>
              )}
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Admin Email</label>
                <Input 
                  type="email" 
                  value={email}
                  disabled={isSigningIn}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@mirrentx.com"
                  className="h-12 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-800 focus:ring-slate-800 transition-colors"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Password</label>
                <div className="relative">
                  <Input 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    disabled={isSigningIn}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="h-12 pr-12 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-800 focus:ring-slate-800 transition-colors"
                    required
                  />
                  <button
                    type="button"
                    disabled={isSigningIn}
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              
              <Button 
                type="submit" 
                disabled={isSigningIn}
                className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-lg border-2 border-slate-900 font-semibold text-base mt-2 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
              >
                Access Dashboard
              </Button>
            </form>
          </div>
        </Card>
      </div>
    );
  }

  // Helper for tab styling
  const getTabClass = (tabName) => {
    return `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors group cursor-pointer ${
      activeTab === tabName 
      ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' 
      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
    }`;
  };

  // ---------------------------------------------------------------------------
  // RENDER ADMIN DASHBOARD
  // ---------------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans overflow-hidden">
      
      {/* Mobile Top Header */}
      <div className="md:hidden bg-slate-900 text-white p-4 flex items-center justify-between sticky top-0 z-[60] shadow-xl">
        <div className="flex items-center gap-3">
          <img src="/logo-modern.svg" alt="MirrenTX" className="w-8 h-8" />
          <span className="text-xl font-black tracking-tight">Mirren<span className="text-blue-400">TX</span></span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Backdrop for Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[50] md:hidden transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar / Mobile Drawer */}
      <aside className={`fixed md:sticky top-0 left-0 bottom-0 w-72 bg-slate-900 text-slate-300 flex flex-col shadow-2xl z-[55] h-screen transition-all duration-300 ease-in-out shrink-0 transform ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0">
            <img src="/logo-modern.svg" alt="MirrenTX" className="w-6 h-6 brightness-0 invert" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white leading-tight">Mirren<span className="text-blue-400">TX</span></span>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mt-1">Admin Portal</span>
          </div>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          <button onClick={() => { setActiveTab("dashboard"); setIsMobileMenuOpen(false); }} className={getTabClass("dashboard")}>
            <LayoutDashboard className={`w-5 h-5 ${activeTab !== 'dashboard' && 'group-hover:scale-110 transition-transform'}`} />
            Dashboard View
          </button>
          
          <button onClick={() => { setActiveTab("users"); setIsMobileMenuOpen(false); }} className={getTabClass("users")}>
            <Users className={`w-5 h-5 ${activeTab !== 'users' && 'group-hover:scale-110 transition-transform'}`} />
            User Directory
          </button>
          
          <button onClick={() => { setActiveTab("rentals"); setIsMobileMenuOpen(false); }} className={getTabClass("rentals")}>
            <Package className={`w-5 h-5 ${activeTab !== 'rentals' && 'group-hover:scale-110 transition-transform'}`} />
            Orders & Rentals
          </button>
          
          <button onClick={() => { setActiveTab("earnings"); setIsMobileMenuOpen(false); }} className={getTabClass("earnings")}>
            <DollarSign className={`w-5 h-5 ${activeTab !== 'earnings' && 'group-hover:scale-110 transition-transform'}`} />
            Revenue Tracking
          </button>
          
          <button onClick={() => { setActiveTab("settings"); setIsMobileMenuOpen(false); }} className={`${getTabClass("settings")} mt-4`}>
            <Settings className={`w-5 h-5 ${activeTab !== 'settings' && 'group-hover:scale-110 transition-transform'}`} />
            System Control
          </button>
        </nav>
        
        <div className="p-4 border-t border-white/10 bg-black/20 mt-auto">
          <div className="flex items-center gap-3 px-4 py-3 mb-2 rounded-xl bg-white/5 border border-white/5 overflow-hidden">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold text-white shadow-lg shrink-0">
              MT
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">MirrenTX Admin</p>
              <p className="text-xs text-slate-400 truncate mt-0.5">mirrentx@gmail.com</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-white hover:bg-red-500 rounded-xl font-semibold transition-all group"
          >
            <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">
        
        {isLoading && (
          <div className="absolute inset-0 z-50 bg-slate-50 flex flex-col items-center justify-center">
            <Loader2 className="w-10 h-10 text-slate-400 animate-spin mb-4" />
            <p className="text-slate-500 font-medium">Fetching live operations data...</p>
          </div>
        )}

        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 px-6 md:px-8 py-5 flex justify-between items-center z-10 shadow-sm shrink-0">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full hidden md:block"></span>
              {activeTab === "dashboard" && "Operational Dashboard"}
              {activeTab === "users" && "User Directory"}
              {activeTab === "rentals" && "Active Orders"}
              {activeTab === "earnings" && "Revenue Performance"}
              {activeTab === "settings" && "System Settings"}
            </h2>
            <p className="text-slate-500 text-[10px] md:text-sm mt-0.5 font-bold uppercase tracking-wider opacity-70">
              {activeTab === "dashboard" && "Real-time rental metrics"}
              {activeTab === "users" && "Managing verified customer accounts"}
              {activeTab === "rentals" && "Equipment fulfillment & status"}
              {activeTab === "earnings" && "Financial growth reports"}
              {activeTab === "settings" && "Global platform parameters"}
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-xs text-slate-600 font-black bg-slate-100 border border-slate-200 px-4 py-2 rounded-xl shadow-sm uppercase tracking-tighter">
              {new Date().toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
            </div>
          </div>
        </header>

        {/* Scrollable Content Container */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto w-full pb-20">
          
          {/* TAB: DASHBOARD VIEW */}
          {activeTab === "dashboard" && (
            <>
              {/* KPI Widget Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {Object.keys(dashboardData.kpis).map((key) => {
                  const value = dashboardData.kpis[key];
                  const config = KPI_CONFIG[key];
                  const IconComp = ICON_MAP[key];

                  if (!config) return null;

                  return (
                    <Card key={key} className="border border-slate-200 shadow-sm rounded-2xl overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 bg-white group">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{config.title}</p>
                            <h3 className="text-3xl font-black text-slate-800 mt-2 tracking-tight">{value}</h3>
                          </div>
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${config.bg} ${config.color} shadow-inner group-hover:scale-110 transition-transform shrink-0`}>
                            <IconComp className="w-7 h-7" />
                          </div>
                        </div>
                        <div className="mt-5 flex items-center gap-2">
                          <span className="flex items-center text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-md">
                            <TrendingUp className="w-3.5 h-3.5 mr-1" />
                            {config.trend}
                          </span>
                          <span className="text-xs text-slate-400 font-semibold">vs last 30 days</span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Recent Rentals List */}
                <Card className="xl:col-span-2 border border-slate-200 shadow-sm rounded-2xl bg-white overflow-hidden flex flex-col">
                  <CardHeader className="bg-white border-b border-slate-100 py-6 px-7">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-lg font-extrabold text-slate-800">Currently On Rent</CardTitle>
                        <CardDescription className="text-sm font-medium mt-1 text-slate-700">Live fulfillment status</CardDescription>
                      </div>
                      <Button onClick={() => setActiveTab('rentals')} variant="outline" size="sm" className="rounded-lg font-bold shadow-sm border-slate-300 text-xs py-1 h-8">Full List</Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 flex-1 overflow-x-auto scrollbar-hide">
                    <div className="min-w-[600px] md:min-w-0">
                      <table className="w-full text-sm text-left align-middle border-collapse">
                        <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                          <tr>
                            <th className="px-7 py-4 whitespace-nowrap">Order ID</th>
                            <th className="px-7 py-4 whitespace-nowrap">Customer</th>
                            <th className="px-7 py-4 whitespace-nowrap hidden sm:table-cell">Equipment</th>
                            <th className="px-7 py-4 whitespace-nowrap text-center">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {dashboardData.recentRentals.length === 0 ? (
                            <tr>
                              <td colSpan="4" className="px-7 py-10 text-center text-slate-500 font-medium italic">
                                No active rentals recorded.
                              </td>
                            </tr>
                          ) : dashboardData.recentRentals.map((rental, i) => (
                            <tr key={i} className="hover:bg-blue-50/30 transition-colors group text-sm">
                              <td className="px-7 py-4 font-black text-slate-900 whitespace-nowrap">{rental.id}</td>
                              <td className="px-7 py-4 whitespace-nowrap">
                                <div className="flex flex-col">
                                  <span className="font-bold text-slate-900">{rental.user}</span>
                                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter mt-0.5">
                                    {rental.contact}
                                  </span>
                                </div>
                              </td>
                              <td className="px-7 py-4 whitespace-nowrap hidden sm:table-cell">
                                <div className="flex flex-col">
                                  <span className="font-bold text-blue-700">{rental.item}</span>
                                  <span className="text-[10px] text-slate-400 font-bold truncate max-w-[120px]">
                                    {rental.address.district}
                                  </span>
                                </div>
                              </td>
                              <td className="px-7 py-4 whitespace-nowrap text-center">
                                <span className={`inline-flex px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${getStatusColor(rental.status)}`}>
                                  {rental.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                {/* User Details */}
                <Card className="border border-slate-200 shadow-sm rounded-2xl bg-white overflow-hidden flex flex-col h-[500px] xl:h-[auto]">
                  <CardHeader className="bg-white border-b border-slate-100 py-6 px-7 shrink-0">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-lg font-extrabold text-slate-800">User Details</CardTitle>
                        <CardDescription className="text-sm font-medium mt-1 text-slate-700">Recently registered accounts</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 flex-1 overflow-y-auto">
                    <div className="divide-y divide-slate-100">
                      {dashboardData.recentUsers.length === 0 ? (
                        <div className="p-10 text-center text-slate-500 font-medium">
                          No users found.
                        </div>
                      ) : dashboardData.recentUsers.map((user, i) => (
                        <div key={i} className="p-6 hover:bg-slate-50 transition-colors flex items-center justify-between group cursor-pointer">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 text-blue-700 flex items-center justify-center font-black text-lg shadow-sm group-hover:scale-105 transition-transform shrink-0">
                              {user.name.charAt(0)}
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate">{user.name}</h4>
                              <p className="text-sm font-medium text-slate-500 mt-0.5 truncate">{user.email}</p>
                            </div>
                          </div>
                          <div className="text-right shrink-0 ml-4">
                            <span className={`inline-block px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider ${
                              user.status === 'Verified' ? 'text-emerald-600' : 'text-amber-500'
                            }`}>
                              {user.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <div className="p-5 bg-slate-50 border-t border-slate-100 text-center shrink-0">
                    <button onClick={() => setActiveTab('users')} className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                      View Complete Directory &rarr;
                    </button>
                  </div>
                </Card>
              </div>
            </>
          )}

          {/* TAB: USERS */}
          {activeTab === "users" && (
            <Card className="border border-slate-200 shadow-sm rounded-2xl bg-white overflow-hidden">
              <CardHeader className="bg-white border-b border-slate-100 py-6 px-7">
                <CardTitle className="text-lg font-extrabold text-slate-800">Customer Directory</CardTitle>
                <CardDescription className="text-sm font-medium mt-1 text-slate-700">Complete list of registered accounts</CardDescription>
              </CardHeader>
              <CardContent className="p-0 overflow-x-auto scrollbar-hide">
                <div className="min-w-[600px] md:min-w-0">
                  <table className="w-full text-sm text-left align-middle border-collapse">
                    <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                      <tr>
                        <th className="px-7 py-4 whitespace-nowrap">Customer Info</th>
                        <th className="px-7 py-4 whitespace-nowrap hidden md:table-cell">Email Address</th>
                        <th className="px-7 py-4 whitespace-nowrap text-center">Status</th>
                        <th className="px-7 py-4 whitespace-nowrap text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {dashboardData.recentUsers.length === 0 ? (
                        <tr><td colSpan="4" className="p-10 text-center text-slate-500 font-medium italic">No registered users found. Check background sync in [NextAuth] config.</td></tr>
                      ) : dashboardData.recentUsers.map((user, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors group">
                          <td className="px-7 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-black text-sm">
                                {user.name?.charAt(0) || user.email?.charAt(0)}
                              </div>
                              <div className="flex flex-col">
                                <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{user.name || "N/A"}</span>
                                <span className="text-[10px] text-slate-400 font-bold md:hidden">{user.email}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-7 py-4 text-slate-500 font-medium hidden md:table-cell">{user.email}</td>
                          <td className="px-7 py-4 text-center">
                            <span className="inline-block px-2.5 py-1 rounded text-[9px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100">
                              {user.status}
                            </span>
                          </td>
                          <td className="px-7 py-4 text-right">
                            <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* TAB: RENTALS */}
          {activeTab === "rentals" && (
            <Card className="border border-slate-200 shadow-sm rounded-2xl bg-white overflow-hidden">
              <CardHeader className="bg-white border-b border-slate-100 py-6 px-7">
                <CardTitle className="text-lg font-extrabold text-slate-800">Rental Database</CardTitle>
                <CardDescription className="text-sm font-medium mt-1 text-slate-700">Fulfillment & Operations tracking</CardDescription>
              </CardHeader>
              <CardContent className="p-0 overflow-x-auto scrollbar-hide">
                <div className="min-w-[800px] xl:min-w-0">
                  <table className="w-full text-sm text-left align-middle border-collapse">
                    <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                      <tr>
                        <th className="px-7 py-4 whitespace-nowrap">Details</th>
                        <th className="px-7 py-4 whitespace-nowrap hidden sm:table-cell">Customer</th>
                        <th className="px-7 py-4 whitespace-nowrap">Pricing</th>
                        <th className="px-7 py-4 whitespace-nowrap text-center">Flow Controls</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {dashboardData.recentRentals.length === 0 ? (
                        <tr><td colSpan="4" className="p-10 text-center text-slate-500 font-medium italic">No rental history found.</td></tr>
                      ) : dashboardData.recentRentals.map((rental, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="px-7 py-6 align-top">
                            <div className="flex flex-col gap-1">
                              <span className="font-black text-blue-700 text-base">{rental.item}</span>
                              <div className="flex flex-wrap gap-2 mt-1">
                                <span className="text-[9px] font-black text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase">{rental.duration}</span>
                                {rental.dates && (
                                  <span className="text-[9px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase border border-blue-100">{rental.dates}</span>
                                )}
                              </div>
                              <div className="sm:hidden mt-3 pt-3 border-t border-slate-100">
                                <span className="font-bold text-slate-800 block">{rental.user}</span>
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{rental.contact}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-7 py-6 align-top hidden sm:table-cell">
                            <div className="flex flex-col gap-1">
                              <span className="font-bold text-slate-800">{rental.user}</span>
                              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{rental.contact}</span>
                              <span className="text-[9px] font-bold text-slate-500 mt-2 block break-all opacity-60">{rental.address.village}, {rental.address.district}</span>
                            </div>
                          </td>
                          <td className="px-7 py-6 align-top">
                            <div className="flex flex-col gap-3">
                              <span className="text-slate-900 font-black text-lg tracking-tighter">₹{rental.price || 0}</span>
                              {(rental.status === 'Active' || rental.status === 'Completed') && (
                                <div className="flex gap-1.5 max-w-[120px]">
                                  <Input 
                                    type="number"
                                    placeholder="Rate"
                                    className="h-8 text-[10px] font-black bg-white border-slate-200 shrink-0"
                                    id={`price-${rental._id}`}
                                    defaultValue={rental.price > 0 ? rental.price : ""}
                                  />
                                  <Button 
                                    onClick={() => {
                                      const val = document.getElementById(`price-${rental._id}`).value;
                                      if(val) updateRentalAmount(rental._id, val);
                                    }}
                                    size="sm" 
                                    className="h-8 w-8 p-0 bg-slate-900 hover:bg-slate-800 shrink-0"
                                  >
                                    <Save className="w-3.5 h-3.5" />
                                  </Button>
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-7 py-6 text-center align-top">
                            <div className="flex flex-col items-center gap-3">
                              <span className={`inline-flex px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border ${getStatusColor(rental.status)}`}>
                                {rental.status}
                              </span>
                              {rental.status !== 'Active' && rental.status !== 'Completed' && (
                                <div className="flex gap-2">
                                  <Button onClick={() => updateRentalStatus(rental._id, "Active")} size="sm" className="h-7 px-3 text-[9px] font-black bg-slate-900">Confirm</Button>
                                </div>
                              )}
                              {(rental.status === 'Active' || rental.status === 'Completed') && rental.price > 0 && (
                                <Button 
                                  onClick={() => handleSendEmail(rental._id)}
                                  disabled={sendingEmailId === rental._id}
                                  size="sm"
                                  className="h-7 px-3 text-[9px] font-black bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-600 hover:text-white transition-all rounded-lg"
                                >
                                  {sendingEmailId === rental._id ? "..." : <Mail className="w-3 h-3" />}
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* TAB: EARNINGS / SETTINGS PLACEHOLDERS */}
          {activeTab === "earnings" && (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center border-2 border-dashed border-slate-200 rounded-2xl bg-white">
              <DollarSign className="w-16 h-16 text-slate-300 mb-4" />
              <h3 className="text-xl font-bold text-slate-800">Earnings Module Pending Setup</h3>
              <p className="text-slate-500 font-medium max-w-md mt-2">Connect Stripe or your local payment gateway to automatically aggregate and visualize earning reports here.</p>
              <Button className="mt-6 bg-slate-900 font-bold">Configure Payments</Button>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-8 max-w-4xl mx-auto">
              {/* General Settings */}
              <Card className="border border-slate-200 shadow-sm rounded-2xl bg-white overflow-hidden">
                <CardHeader className="bg-white border-b border-slate-100 py-6 px-7">
                  <div className="flex items-center gap-3">
                    <Settings className="w-6 h-6 text-slate-400" />
                    <div>
                      <CardTitle className="text-lg font-extrabold text-slate-800">General Platform Settings</CardTitle>
                      <CardDescription className="text-sm font-medium mt-1 text-slate-700">Configure global parameters for MirrenTX</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 flex flex-col items-center justify-center py-12 text-center">
                  <p className="text-slate-500 font-medium max-w-md">Global configuration and branding adjustments are currently managed via environment variables.</p>
                </CardContent>
              </Card>

              {/* Danger Zone */}
              <Card className="border-2 border-red-100 shadow-xl shadow-red-500/5 rounded-3xl bg-white overflow-hidden">
                <div className="bg-red-50 px-8 py-6 border-b border-red-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                      <AlertCircle className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-red-900 tracking-tight">Danger Zone</h3>
                      <p className="text-red-700/70 text-sm font-bold uppercase tracking-widest mt-0.5">Critical System Actions</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-200">Admin Only</span>
                </div>
                
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex-1">
                      <h4 className="text-lg font-extrabold text-slate-900">Purge All Test Data</h4>
                      <p className="text-slate-500 font-medium mt-1 text-sm leading-relaxed">
                        Going live? Permanently delete all test records from the <strong className="text-red-600">Rentals</strong>, <strong className="text-red-600">Feedbacks</strong>, and <strong className="text-red-600">Users</strong> collections. This action is <span className="underline decoration-red-500 decoration-2 font-black uppercase text-slate-900">irreversible</span>.
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-4 shrink-0 px-4">
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox" 
                          id="confirm-purge" 
                          className="w-5 h-5 rounded border-slate-300 text-red-600 focus:ring-red-500" 
                        />
                        <label htmlFor="confirm-purge" className="text-xs font-black text-slate-700 uppercase tracking-tighter">I understand the risk</label>
                      </div>
                      
                      <Button 
                        onClick={async () => {
                          const checkbox = document.getElementById('confirm-purge');
                          if (!checkbox.checked) {
                            toast.error("Please confirm you understand the risk by checking the box.");
                            return;
                          }
                          
                          if (confirm("FINAL WARNING: Are you absolutely sure? This will delete ALL data for a fresh start.")) {
                            try {
                              const res = await fetch("/api/admin/purge-data", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ action: "purge_all_test_data" }),
                              });
                              const json = await res.json();
                              if (json.success) {
                                toast.success("Database Purged Successfully! Reloading...");
                                setTimeout(() => window.location.reload(), 2000);
                              } else {
                                toast.error(json.error || "Failed to purge database.");
                              }
                            } catch (err) {
                              toast.error("Critical error during purge operation.");
                            }
                          }
                        }}
                        className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-6 rounded-2xl shadow-xl shadow-red-500/20 transition-all hover:scale-[1.05] active:scale-95 group border-0"
                      >
                        <X className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform" />
                        PURGE ALL DATA
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

        </div>
      </main>
      
    </div>
  );
}
