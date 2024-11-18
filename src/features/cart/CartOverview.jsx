import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';
import { useEffect, useState } from 'react';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  // animation:START
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    setIsAnimating(true);
  }, [totalCartQuantity]);

  const handleAnimationEnd = function (e) {
    e.target.classList.remove('stickyMenuAnimation');
    setIsAnimating(false);
  };
  // animation:END

  if (!totalCartQuantity) return null;
  return (
    <div
      id="test"
      onAnimationEnd={handleAnimationEnd}
      className={`${isAnimating ? 'stickyMenuAnimation' : ''} flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base`}
    >
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span className="">{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">🛒 Cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
