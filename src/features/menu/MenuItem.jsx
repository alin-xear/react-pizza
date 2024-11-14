import { formatCurrency } from "../../utils/helpers";
import Button from '../../ui/Button'

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2 ">
      <img src={imageUrl} alt={name} className={`${soldOut ? 'opacity-70 grayscale' : ''} h-24}`} />
      <div className="flex flex-col grow pt-0.5">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(", ")}</p>
        <div className="mt-auto flex justify-between items-center">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}
          <Button type='small'>add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
