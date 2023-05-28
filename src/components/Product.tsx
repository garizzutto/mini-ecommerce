import Image from "next/image";
import { MouseEventHandler } from "react";
import { MdAddShoppingCart, MdRemoveShoppingCart } from "react-icons/md";
import styles from "./Product.module.css";

function Product({ product, isCart }: { product: Product; isCart: boolean }) {
  const handleAddToCart: MouseEventHandler<SVGElement> = () => {
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

  const handleRemoveFromCart: MouseEventHandler<SVGElement> = () => {
    fetch("/api/shopping-cart", {
      method: "DELETE",
      body: JSON.stringify({ productId: product.id }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Produto removido do carrinho com sucesso");
        } else {
          alert("Erro ao remover produto do carrinho");
        }
      })
      .catch((error) => {
        alert("Erro ao remover produto do carrinho");
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
      {isCart ? (
        <MdRemoveShoppingCart
          className={styles.icon}
          onClick={handleRemoveFromCart}
        />
      ) : (
        <MdAddShoppingCart className={styles.icon} onClick={handleAddToCart} />
      )}
    </div>
  );
}

export default Product;
