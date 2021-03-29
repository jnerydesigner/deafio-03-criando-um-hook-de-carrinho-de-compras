import { Link } from 'react-router-dom';
import { MdShoppingBasket, MdDelete } from 'react-icons/md';

import logo from '../../assets/images/logo.svg';
import { Container, Cart, Button } from './styles';
import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {
  const { cart, clearCart } = useCart();
  const cartSize = cart.length;


  function handleClearCart() {
    clearCart();
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>
      <Button onClick={handleClearCart}>
        <span>Esvaziar Carrinho</span>
        <MdDelete size={36} color="#FFF" />
      </Button>


      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default Header;
