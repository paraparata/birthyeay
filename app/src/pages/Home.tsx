import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Home.module.scss";
import Button from "../components/Button";
import Input from "../components/Input";

const Form = ({ onContinue }: { onContinue: (...args: any) => any }) => {
  const [data, setData] = useState<{ from: string; to: string }>({
    from: "",
    to: "",
  });

  const handleOnChange = (type: "from" | "to", e: any) => {
    switch (type) {
      case "from":
        setData((prev: any) => ({ ...prev, from: e.target.value }));
        break;
      case "to":
        setData((prev: any) => ({ ...prev, to: e.target.value }));
        break;

      default:
        break;
    }
  };

  const handleOnContinue = () => {
    onContinue(data);
  };

  return (
    <motion.div
      key="form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className={styles.form}
    >
      <div>
        <h3>Hi There!</h3>
        <span>Give him/her a warm light from virtual candle</span>
      </div>
      <div>
        <Input placeholder="From" onChange={(e) => handleOnChange("from", e)} />
        <Input placeholder="To" onChange={(e) => handleOnChange("to", e)} />
        <Button
          variant="text"
          disabled={!data.from || !data.to}
          onClick={handleOnContinue}
        >
          Continue
        </Button>
      </div>
    </motion.div>
  );
};

const Uploader = ({
  onUploadImage,
  onContinue,
  onBack,
}: {
  onUploadImage: (...args: any) => any;
  onContinue: (...args: any) => any;
  onBack: (...args: any) => any;
}) => {
  const [selectedImage, setSelectedImage] = useState<any>();

  const handleUploadImage = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      onUploadImage(e.target.files[0]);
    }
  };

  return (
    <motion.div
      key="uploader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className={styles.uploader}
    >
      <div>
        {selectedImage ? (
          <div className={styles.preview}>
            <img src={URL.createObjectURL(selectedImage)} alt="Img" />
            <Button variant="text" onClick={() => setSelectedImage(null)}>
              Remove This Image
            </Button>
          </div>
        ) : (
          <>
            <span>Upload his/her photo</span>
            <Input accept="image/*" type="file" onChange={handleUploadImage} />
          </>
        )}
      </div>
      <div>
        <Button variant="text" disabled={!selectedImage} onClick={onContinue}>
          Continue
        </Button>
        <Button variant="text" onClick={onBack}>
          Back
        </Button>
      </div>
    </motion.div>
  );
};

const Home = () => {
  //   const navigate = useNavigate();
  const [current, setCurrent] = useState<"Form" | "UploadPhoto">("Form");
  const [data, setData] = useState<{ from: string; to: string; img: any }>({
    from: "",
    to: "",
    img: undefined,
  });

  const handleUploadImage = (imgData: any) => {
    if (imgData) {
      setData((prev) => ({ ...prev, img: URL.createObjectURL(imgData) }));
    }
  };

  const handleForm = (formData: any) => {
    setData((prev) => ({ ...prev, from: formData.from, to: formData.to }));
    setCurrent("UploadPhoto");
  };

  const handleOnSave = () => {
    console.log(data);
  };

  return (
    <div className={styles.root}>
      <div>
        {current === "Form" ? (
          <Form onContinue={handleForm} />
        ) : (
          <Uploader
            onUploadImage={handleUploadImage}
            onContinue={handleOnSave}
            onBack={() => setCurrent("Form")}
          />
        )}
      </div>
      <footer>
        <span>
          &#8212;{" "}
          <a href="https://paraparata.github.io" target="_blank">
            paraparata.github.io
          </a>{" "}
          &#8212;
        </span>
      </footer>
    </div>
  );
};

export default Home;
