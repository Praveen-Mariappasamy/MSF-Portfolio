import './Home.css';
import App from './App.js'
import Products from './Products.js';
const a=["Paper Roll","Printed Ledger Book","Computer Form","Stickers","Barcode Stickers","Computer Paper","Billing Roll","Paper Tags","Printed Carbonless Paper","Offset Printing Paper"];
function Home() {
  return (
    <div>
      <App />
    <div className="App">
      <h1 className="heading">Our Products</h1>
      <div className="Propss">
      {a.map((value) => {
          return (
            <Products  value={value} />
          );
        })}
      </div>
    </div>
    </div>
  );
}
export default Home;
