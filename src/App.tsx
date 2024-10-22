import NavbarWithText from "./components/Navbar";
import TabContent from "./components/Tabs";

function App() {
  return (
    <div className="container">
      <div>
        <NavbarWithText />
      </div>
      <div className="mt-3">
        <TabContent />
      </div>
    </div>
  );
}

export default App;
