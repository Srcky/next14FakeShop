'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';
import Image from 'next/image';

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">← Back to Shop</Link>
        <h1>Shopping Cart</h1>
      </header>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className={styles.items}>
            {items.map(item => (
              <div key={item.id} className={styles.item}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                />
                <div className={styles.details}>
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={e =>
                      updateQuantity(item.id, Number(e.target.value))
                    }
                  />
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.total}>
            <h2>Total: ${total.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
}
