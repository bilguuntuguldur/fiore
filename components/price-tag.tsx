import { formatPrice } from "@/lib/utils";

interface PriceTagProps {
  price: number;
}

export default function PriceTag({ price }: PriceTagProps) {
  return <span className="text-lg font-bold main_gray mb-4">{formatPrice(price)} ₮</span>;
}