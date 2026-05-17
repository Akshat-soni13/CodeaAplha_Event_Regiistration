import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../src/pages/Home"
import Login from "../src/pages/Login"
import Register from "./pages/Register"
import EventDetails from "./pages/EventDetails";
import MyRegistrations from "./pages/Myregistration";
import CreateEvent from "./pages/EventCreate";
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
          element={<EventDetails />}></Route>

           <Route
          path="/my-registrations"
          element={<MyRegistrations />}></Route>
      
         <Route
          path="/create-event"
          element={<CreateEvent />}
        /> 

       

       

      </Routes>

    </BrowserRouter>
  )
};

export default App;