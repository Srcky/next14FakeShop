'use client';

import Link from 'next/link';
import styles from './CartIcon.module.css';
import { useCart } from '@/context/CartContext';

export default function CartIcon() {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link href="/cart" className={styles.cartIcon}>
      🛒 {itemCount > 0 && <span className={styles.badge}>{itemCount}</span>}
    </Link>
  );
}
