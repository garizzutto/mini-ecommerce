import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./AddProductForm.module.css";

function AddProductForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProductForm>();
  const onSubmit: SubmitHandler<ProductForm> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <p className={styles.fieldDescription}>Nome do produto</p>
      <input
        className={styles.inputContainer}
        {...register("name", formValidation.name)}
        {...formValidation.name}
        placeholder="Nome do produto"
      />
      <p className={styles.fieldDescription}>Descrição do produto</p>
      <input
        className={styles.inputContainer}
        {...register("description", formValidation.description)}
        {...formValidation.description}
        placeholder="Descrição do produto"
      />
      <p className={styles.fieldDescription}>Preço e quantidade</p>
      <span className={styles.prefix}>
        R$
        <input
          className={styles.inputContainer}
          type="number"
          step="0.01"
          {...register("price", formValidation.price)}
          {...formValidation.price}
        />
        <input
          className={styles.inputContainer}
          type="number"
          {...register("quantity", formValidation.quantity)}
          {...formValidation.quantity}
        />
        <input className={styles.inputContainer} type="submit" />
      </span>
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
