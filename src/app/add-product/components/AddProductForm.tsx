import { FormEventHandler } from "react";
import { UseFormRegister } from "react-hook-form";
import styles from "./AddProductForm.module.css";

type AddProductFormProps = {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<ProductForm>;
};

function AddProductForm({ handleSubmit, register }: AddProductFormProps) {
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label className={styles.fieldDescription}>Nome do produto</label>
      <input
        className={styles.input}
        {...register("name", formValidation.name)}
        {...formValidation.name}
        placeholder="Nome do produto"
      />
      <label className={styles.fieldDescription}>Descrição do produto</label>
      <textarea
        className={[styles.input, styles.inputDescription].join(" ")}
        {...register("description", formValidation.description)}
        {...formValidation.description}
        placeholder="Descrição do produto"
        rows={5}
      />
      <label className={styles.fieldDescription}>Preço e quantidade</label>
      <div className={styles.priceContainer}>
        <span className={styles.prefix}>
          R$
          <input
            className={styles.inputPrice}
            type="number"
            step="0.01"
            {...register("price", formValidation.price)}
            {...formValidation.price}
          />
        </span>
        <span className={styles.prefix}>
          <input
            className={styles.inputPrice}
            type="number"
            {...register("quantity", formValidation.quantity)}
            {...formValidation.quantity}
          />
        </span>
      </div>
      <input className={styles.button} type="submit" />
    </form>
  );
}

const formValidation = {
  name: {
    required: true,
    minLength: 3,
  },
  description: {
    required: true,
    minLength: 3,
  },
  price: {
    required: true,
    min: 0,
  },
  quantity: {
    required: true,
    min: 1,
  },
};

export default AddProductForm;
