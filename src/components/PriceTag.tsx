
interface PriceTagProps {
  price: number;
}

export const PriceTag = ({ price }: PriceTagProps) => {
  // Форматируем цену с пробелами между тысячами и символом рубля
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <span className="font-medium">{formattedPrice}</span>
  );
};
