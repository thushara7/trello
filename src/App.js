import "./App.css";
import Header from "./components/Header";
import TeamList from "./components/TeamList";
import ProductList from "./components/Products";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="List">
        <TeamList />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
