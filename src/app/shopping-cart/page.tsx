"use client";
import Product from "@/components/Product";
import useSWR from "swr";
import styles from "./ShoppingCart.module.css";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function ShoppingCart() {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR<Products, Error>("/api/shopping-cart", fetcher);
  if (error) return <h1 className={styles.title}>Erro ao carregar carrinho</h1>;
  if (isLoading)
    return <h1 className={styles.title}>Carregando carrinho...</h1>;
  return (
    products && (
      <div className={styles.container}>
        <div className={styles.text}>
          <span className={styles.description}>Quantidade</span>
          <span className={styles.value}>{products.length}</span>
        </div>
        <div className={styles.text}>
          <span className={styles.description}>Subtotal</span>
          <span className={styles.value}>
            R$
            {" " +
              products
                .reduce(
                  (accumulator, currentValue) =>
                    accumulator + currentValue.price,
                  0
                )
                .toFixed(2)}
          </span>
        </div>
        <div className={styles.text}>
          <span className={styles.description}>Descontos</span>
          <span className={styles.value}>R$ 0.00</span>
        </div>
        <div className={styles.text}>
          <span className={styles.description}>Total</span>
          <span className={styles.value}>
            R$
            {" " +
              products
                .reduce(
                  (accumulator, currentValue) =>
                    accumulator + currentValue.price,
                  0
                )
                .toFixed(2)}
          </span>
        </div>
        <div className={styles.horizontalDiv} />
        {products.map((product) => {
          return <Product key={product.id} product={product} isCart={true} />;
        })}
      </div>
    )
  );
}

export default ShoppingCart;
