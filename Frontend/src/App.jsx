import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../src/pages/Home"
import Login from "../src/pages/Login"
import Register from "./pages/Register"
import EventDetails from "./pages/EventDetails";
const App = () => {
  return (
   <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/event/:id"
          element={<EventDetails />}
        />
        {/* <Route
          path="/create-event"
          element={<CreateEvent />}
        />

       

        <Route
          path="/my-registrations"
          element={<MyRegistrations />}
        /> */}

      </Routes>

    </BrowserRouter>
  )
};

export default App;