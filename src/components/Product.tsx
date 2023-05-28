import Image from "next/image";
import { MouseEventHandler } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import styles from "./Product.module.css";

function Product({ product }: { product: Product }) {
  const handleClick: MouseEventHandler<SVGElement> = () => {
    fetch("/api/shopping-cart", {
      method: "POST",
      body: JSON.stringify({ productId: product.id }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Produto adicionado ao carrinho com sucesso");
        } else {
          alert("Erro ao adicionar produto ao carrinho");
        }
      })
      .catch((error) => {
        alert("Erro ao adicionar produto ao carrinho");
      });
  };

  return (
    <div className={styles.container}>
      <Image
        src={product.images[0]}
        alt="Product Image"
        className={styles.image}
        width={250}
        height={250}
      />
      <div className={styles.productInfo}>
        <span className={styles.title}>{product.name}</span>
        <span className={styles.description}>{product.description}</span>
        <span className={styles.subtitle}>Price: {product.price}</span>
        <span className={styles.subtitle}>Quantity: {product.quantity}</span>
      </div>
      <MdAddShoppingCart className={styles.icon} onClick={handleClick} />
    </div>
  );
}

export default Product;
