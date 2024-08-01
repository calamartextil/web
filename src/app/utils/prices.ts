export function formatNumber(number: number): string {
  if (!number) return '-';
  let [integerPart, decimalPart] = number.toString().split('.');
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  if (decimalPart) {
    return `${integerPart},${decimalPart}`;
  }
  return integerPart;
}

export function salePrice(price: number, discount: number): number {
  return price * (discount / 100);
}
