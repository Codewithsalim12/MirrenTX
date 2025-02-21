"use client";
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Sidebar from "../components/Sidebar";
import { Card2, CardContent } from "../components/ui/card2";
import UserTable from "../components/UserTable";

export default function AdminDashboard() {
  const [userStats, setUserStats] = useState({ registrations: 0, logins: 0 });
  const [rentalStats, setRentalStats] = useState({
    totalRentals: 0,
    completedRentals: 0,
  });
  const [bookingData, setBookingData] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch user statistics
    fetch("/api/admin/user-stats")
      .then((res) => res.json())
      .then((data) => setUserStats(data));

    // Fetch rental statistics
    fetch("/api/admin/rental-stats")
      .then((res) => res.json())
      .then((data) => setRentalStats(data));

    // Fetch booking details
    fetch("/api/admin/bookings")
      .then((res) => res.json())
      .then((data) => setBookingData(data));

    // Fetch chart data
    fetch("/api/admin/chart-data")
      .then((res) => res.json())
      .then((data) => setChartData(data));
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100 pt-24">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card2>
            <CardContent>
              <h2 className="text-lg font-semibold">New Registrations</h2>
              <p className="text-3xl font-bold">{userStats.registrations}</p>
            </CardContent>
          </Card2>
          <Card2>
            <CardContent>
              <h2 className="text-lg font-semibold">Total Logins</h2>
              <p className="text-3xl font-bold">{userStats.logins}</p>
            </CardContent>
          </Card2>
          <Card2>
            <CardContent>
              <h2 className="text-lg font-semibold">Total Rentals</h2>
              <p className="text-3xl font-bold">{rentalStats.totalRentals}</p>
            </CardContent>
          </Card2>
          <Card2>
            <CardContent>
              <h2 className="text-lg font-semibold">Completed Rentals</h2>
              <p className="text-3xl font-bold">
                {rentalStats.completedRentals}
              </p>
            </CardContent>
          </Card2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
          <UserTable data={bookingData} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">User Activity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="date" stroke="#4A5568" />
              <YAxis stroke="#4A5568" />
              <Tooltip />
              <Bar dataKey="registrations" fill="#3182CE" />
              <Bar dataKey="logins" fill="#63B3ED" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}
