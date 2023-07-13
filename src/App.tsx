import { pizzaData } from "./data.ts";
import { PizzaType } from "./data.ts";

//comp-App
const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
};

//comp-Header
const Header = () => {
  return (
    <header className="header">
      <h1>Aki's Pizza</h1>
    </header>
  );
};

//comp-Pizza
const Pizza = (pizzaProps: PizzaType) => {
  return (
    <li className={`pizza ${pizzaProps.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaProps.photoName} alt={pizzaProps.name} />
      <div>
        <h3>{pizzaProps.name}</h3>
        <p>{pizzaProps.ingredients}</p>
        <span>
          {pizzaProps.soldOut ? "SOLD OUT" : `£${pizzaProps.price}.99`}
        </span>
      </div>
    </li>
  );
};

//comp-Menu
const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzaData.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative pizzas to choose from!
            Straight from our stone oven - all organic, all delicious!
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} {...pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
};

//type-Order
type OrderType = {
  openHour: number;
  closeHour: number;
};

//comp-Order
const Order = ({ openHour, closeHour }: OrderType) => {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online!
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

//comp-Footer
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 0o6;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {pizzaData.length < 1 ? (
        <strong>
          Aki's Pizza - 221B, Baker street, London, United Kingdom
        </strong>
      ) : isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <div className="order">
          <p>
            We're closed :( We open back at {openHour}:00. Come visit us or
            order online by then!
          </p>
        </div>
      )}
    </footer>
  );
};

export default App;
