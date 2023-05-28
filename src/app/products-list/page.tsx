"use client";
import Product from "@/components/Product";
import useSWR from "swr";
import styles from "./ProductsList.module.css";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function ProductsList() {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR<Products, Error>("/api/products", fetcher);
  if (error) return <h1 className={styles.title}>Erro ao carregar produtos</h1>;
  if (isLoading)
    return <h1 className={styles.title}>Carregando produtos...</h1>;
  return (
    <div className={styles.container}>
      {products?.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductsList;
