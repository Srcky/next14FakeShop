'use client';

import type { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import styles from './AddToCartButton.module.css';

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <button className={styles.button} onClick={() => addItem(product)}>
      Add to Cart
    </button>
  );
}
