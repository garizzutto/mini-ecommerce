"use client";
import { FilePondFile } from "filepond";
import "filepond/dist/filepond.min.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { FilePond } from "react-filepond";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./AddProduct.module.css";
import AddProductForm from "./components/AddProductForm";

function AddProduct() {
  const [imgFiles, setImgFiles] = useState<FilePondFile[]>([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProductForm>();

  const onSubmit: SubmitHandler<ProductForm> = (data) => {
    if (imgFiles.length === 0) {
      alert("Selecione pelo menos uma imagem");
      return;
    }
    data.images = [];
    imgFiles.map((file) => {
      //TODO: send file to image server then get the url to send it to the product server
      data.images.push("https://picsum.photos/200/300");
    });
    fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert("Produto adicionado com sucesso");
        } else {
          alert("Erro ao adicionar produto");
        }
      })
      .catch((error) => {
        alert("Erro ao adicionar produto");
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>Adicionar produto</h1>
        {/* <FileInput onFileSelect={handleFileSelect} /> */}
        <div className={styles.fileInput}>
          <FilePond
            files={imgFiles.map((fileItem) => fileItem.file)}
            onupdatefiles={setImgFiles}
            allowMultiple={true}
            acceptedFileTypes={["image/*"]}
            name="files" /* sets the file input name, it's filepond by default */
            labelIdle='Arraste & Solte as fotos do produto ou <span class="filepond--label-action">Procure</span>'
          />
        </div>
      </div>
      <div className={styles.verticalDivisor}></div>
      <div className={styles.rightSide}>
        <AddProductForm
          handleSubmit={handleSubmit(onSubmit)}
          register={register}
        />
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(AddProduct), { ssr: false });
