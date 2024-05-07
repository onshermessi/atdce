import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard-container">
      <header>
        <h1>Welcome to the Dashboard!</h1>
        {/* Add any additional header content here */}
      </header>
      <main>
        <div className="dashboard-content">{children}</div>
      </main>
      <footer>{/* Add any additional footer content here */}</footer>
    </div>
  );
};

export default Dashboard;
