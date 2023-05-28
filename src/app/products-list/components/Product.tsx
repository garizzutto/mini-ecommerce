import Image from "next/image";
import styles from "./Product.module.css";

function Product({ product }: { product: Product }) {
  return (
    <div>
      <Image
        src={product.images[0]}
        alt="Product Image"
        className={styles.image}
        width={200}
        height={200}
      />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
    </div>
  );
}

export default Product;
