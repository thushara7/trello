import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="List">
        <List name="Teams" />
        <List name="Products" />
      </div>
    </div>
  );
}

export default App;
