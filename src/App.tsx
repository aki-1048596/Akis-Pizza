import { pizzaData } from "./data.ts";
import { Pizza as PizzaProps } from "./data.ts";

function App() {
  return (
    <>
      <div>
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Aki's Pizza</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.name} {...pizza} />
        ))}
      </ul>
    </main>
  );
}

function Pizza(props: PizzaProps) {
  return (
    <li className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleString()}. Copyrights reserved
    </footer>
  );
}

export default App;
