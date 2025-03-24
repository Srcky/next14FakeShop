import { getProductsByCategory } from '@/lib/api';
import styles from './page.module.css';
import CartIcon from '@/components/CartIcon';
import AddToCartButton from '@/components/AddToCartButton';
import Link from 'next/link';
import Image from 'next/image';

export default async function CategoryPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const products = await getProductsByCategory(slug);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">← Back</Link>
        <h1>{slug}</h1>
        <CartIcon />
      </header>
      <div className={styles.products}>
        {products.map(product => (
          <div key={product.id} className={styles.product}>
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className={styles.image}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <AddToCartButton product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
