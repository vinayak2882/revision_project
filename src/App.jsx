
import { CartProvider } from 'react-use-cart';
import AllRoutes from './Components/AllRoutes';



function App() {
  return (
   <>
   <CartProvider>
   Vinayak
   <AllRoutes/>
   </CartProvider>
   </>
  );
}

export default App;
