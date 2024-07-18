import "./App.css";
import {} from "./constants/index";
import Card from "./components/card";
import { products } from "./constants";



function App() {
  return (
    <main className="conteiner">
      {products.map((product) => (
        <Card
          kay={product.title}
          title={product.title}
          alt={product.alt}
          span1={product.span1}
          span2={product.span2}
          badge1={product.badge1}
          badge2={product.badge2}
          button={product.button}
        />
        
      ))}
      
    </main>
    
    
  );
  
}


export default App;
