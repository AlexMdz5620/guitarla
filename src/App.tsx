/**
 * *Statements  = Instrucciones para hacer algo
 * * Ejemplos   = Creación de variables, condicionales if, lanzar throw new Error(), etc...
 *
 * *Expressions = Es algo que produce un valor
 * * Ejemplos   = Ternarios, Array Method que genere un nuevo Array, .map que genera un nuevo array a diff del .forEach
 */
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { useCart } from "./hooks/useCart";

function App() {
  const {
    addToCart,
    cart,
    clearCart,
    data,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
    isEmpty,
    cartTotal,
  } = useCart();

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart} />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
