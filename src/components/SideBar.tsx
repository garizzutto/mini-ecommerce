"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  MdFormatListBulleted,
  MdFormatListBulletedAdd,
  MdShoppingCart,
} from "react-icons/md";
import styles from "./SideBar.module.css";

export default function SideBar() {
  const router = useRouter();

  function handleClick(path: string) {
    router.push(path);
  }

  return (
    <div className={styles.container}>
      <Image
        src="/images/genesisLogo.webp"
        alt="logo"
        width={40}
        height={40}
        className={styles.logo}
        onClick={() => handleClick("/products-list")}
      />
      <div className={styles.icons}>
        <MdFormatListBulletedAdd
          className={styles.icon}
          onClick={() => handleClick("/add-product")}
        />
        <MdFormatListBulleted
          className={styles.icon}
          onClick={() => handleClick("/products-list")}
        />
        <MdShoppingCart
          className={styles.icon}
          onClick={() => handleClick("/shopping-cart")}
        />
      </div>
    </div>
  );
}
