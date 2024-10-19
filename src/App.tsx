import { useAppDispatch, useAppSelector } from "./redux/hooks";
import NavbarWithText from "./components/Navbar";
import TabContent from "./components/Tabs";

function App() {
  // const count = useSelector((state: RootState) => state.count);
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.count);

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
