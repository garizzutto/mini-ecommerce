"use client";
import useSWR from "swr";
import styles from "./ProductsList.module.css";
import Product from "./components/Product";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function ProductsList() {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR<Products, Error>("/api/products", fetcher);
  console.log(products);
  if (error) return <h1 className={styles.title}>Erro ao carregar produtos</h1>;
  if (isLoading)
    return <h1 className={styles.title}>Carregando produtos...</h1>;
  return products?.map((product) => {
    return <Product key={product.id} product={product} />;
  });
}

export default ProductsList;
