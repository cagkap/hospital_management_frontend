import "./App.css";

import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPatient from "./components/shared/patient/add/AddPatient";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/patient/add" element={<AddPatient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
