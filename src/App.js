import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Entry } from "./pages/entry/Entry.page";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketLists } from "./pages/ticket-list/TicketLists.page";
import { Ticket } from "./pages/ticket/Ticket.page";

function App() {
  return (
    <div className="App">
      <Router>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Entry />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/add-ticket"
              element={
                <PrivateRoute>
                  <AddTicket />
                </PrivateRoute>
              }
            />
            <Route
              path="/tickets"
              element={
                <PrivateRoute>
                  <TicketLists />
                </PrivateRoute>
              }
            />
            <Route
              path="/ticket/:tId"
              element={
                <PrivateRoute>
                  <Ticket />
                </PrivateRoute>
              }
            />
          </Routes>
        </DefaultLayout>
      </Router>
    </div>
  );
}

export default App;
