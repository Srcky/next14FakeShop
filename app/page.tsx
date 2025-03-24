import { getCategories } from '@/lib/api';
import Link from 'next/link';
import styles from './page.module.css';
import CartIcon from '@/components/CartIcon';

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Our Store</h1>
        <CartIcon />
      </header>
      <div className={styles.categories}>
        {categories.map(category => (
          <Link
            key={category}
            href={`/category/${category}`}
            className={styles.category}
          >
            <h2>{category}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
