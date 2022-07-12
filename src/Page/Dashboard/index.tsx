import { DayValue } from "@hassanmojab/react-modern-calendar-datepicker";
import React, { useState } from "react";
import DashboardLayout from "./Components/DashboardLayout";

const Dashboard = () => {
  const [date, setDate] = useState<DayValue>(null);

  return <DashboardLayout date={date} setDate={setDate} />;
};

export default Dashboard;
