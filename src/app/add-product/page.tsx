"use client";
import { FilePondFile } from "filepond";
import "filepond/dist/filepond.min.css";
import { useState } from "react";
import { FilePond } from "react-filepond";
import styles from "./AddProduct.module.css";

function AddProduct() {
  const [imgFiles, setImgFiles] = useState<FilePondFile[]>([]);
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
      <div className={styles.rightSide}>{/* <AddProductForm /> */}</div>
    </div>
  );
}

export default AddProduct;
