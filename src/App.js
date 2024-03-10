import { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("./components/Dasboard/Dashboard"));
const ConsumptionData = lazy(() =>
  import("./components/ConsumptionPage/ConsumptionData")
);
const AboutUS = lazy(() => import("./components/AboutUs/AboutUs"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="text-black flex justify-center font-xl   items-center font-xl  p-5 rounded-lg">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route index element={<ConsumptionData />} />
              {/* <Route path="/data-table" element={<EVDataTable />} /> */}
              <Route path="/about" element={<AboutUS />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

// auAj3SnVWITZ8XoTdW6K9_r1CmoC7m__mAA-YTgcyC8
