import './styles/styles.scss'
import Header from './components/Header'
import AddProductForm from "./pages/AddProductForm"
import ProductsList from "./pages/ProductsList"
import { useActivePage } from './contexts/useActivePage'

function App() {
  const { activePage } = useActivePage();
  return (
    <div className="App">
      <Header />
      {activePage === "products-list" && <ProductsList />}
      {activePage === "add-product" && <AddProductForm />}
    </div>
  );
}

export default App;
