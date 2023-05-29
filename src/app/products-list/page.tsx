"use client";
import Product from "@/components/Product";
import { useState } from "react";
import useSWRInfinite from "swr/infinite";
import styles from "./ProductsList.module.css";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const getKey = (pageIndex: number, previousPageData: Products) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end
  return `/api/products?page=${pageIndex}&limit=3`; // SWR key
};

function ProductsList() {
  const { data, error, isLoading, size, setSize, isValidating } =
    useSWRInfinite<Products, Error>(getKey, fetcher);
  const [search, setSearch] = useState<string>("");

  let products: Products = [];
  products = data ? products.concat(...data) : [];
  products = products.filter((product) => product.name.includes(search));

  if (error) return <h1 className={styles.title}>Erro ao carregar produtos</h1>;
  if (isLoading)
    return <h1 className={styles.title}>Carregando produtos...</h1>;

  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        placeholder="Pesquisar pelo nome do produto"
        onChange={(e) => setSearch(e.target.value)}
      />
      {products?.map((product) => {
        return <Product key={product.id} product={product} isCart={false} />;
      })}
      <button className={styles.button} onClick={() => setSize(size + 1)}>
        {isValidating ? "Carregando..." : "Carregar mais"}
      </button>
    </div>
  );
}

export default ProductsList;
