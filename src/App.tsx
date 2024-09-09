import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Product from './components/Product';

const products = [
  {
    id: 1,
    name: 'Product 1',
    desc: 'this is a pen, that is a book, nice to meet you.',
    price: 100
  },
  {
    id: 2,
    name: 'Product 2',
    desc: 'this is a pen, that is a book, nice to meet you.',
    price: 200
  },
  {
    id: 3,
    name: 'Product 3',
    desc: 'this is a pen, that is a book, nice to meet you.',
    price: 300
  },
  {
    id: 4,
    name: 'Product 4',
    desc: 'this is a pen, that is a book, nice to meet you.',
    price: 400
  },
  {
    id: 5,
    name: 'Product 5',
    desc: 'this is a pen, that is a book, nice to meet you.',
    price: 500
  },
  {
    id: 6,
    name: 'Product 6',
    desc: 'this is a pen, that is a book, nice to meet you.',
    price: 600
  }
];

function App() {
  const onAddToShoppingCart = () => {
    console.log('add to shopping cart');
  };

  return (
    <div className="p-4">
      <Header>Shopping Cart</Header>
      <Wrapper className="flex flex-wrap gap-x-5 gap-y-10 justify-center">
        {products.map(p => <Product key={p.id} product={p} onAddToShoppingCart={onAddToShoppingCart} />)}
      </Wrapper>
    </div>
  )
}

export default App
