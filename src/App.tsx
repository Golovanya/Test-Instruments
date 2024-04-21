import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Main from "./pages/main";
import List from "./pages/list";
import { Theme, presetGpnDefault  } from "@consta/uikit/Theme";
import InstrumentList from "./pages/instrument";
import OtherList from "./pages/otherInstruments";
import Integration from "./pages/integration";

function App() {
  return (
    <Theme preset={presetGpnDefault }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />}></Route>
            <Route path="/list/:type" element={<List />}></Route>
            <Route
              path="/list/:type/:name"
              element={<InstrumentList />}
            ></Route>
             <Route
              path="/list/other"
              element={<OtherList/>}
            ></Route>
            <Route
              path="/list/integration"
              element={<Integration/>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
