import React, { useState, useContext } from "react";
import { TabletList } from "../APIS/TabletList";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  form: {
    height: "500px",
    width: "300px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    top: "50%",
    left: "50%",
    borderRadius: "10px",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255,255,255,0.1)",
    boxShadow: "0 0 40px rgba(8,7,16,0.6)",
    padding: "50px 35px",
  },
  "form *": {
    fontFamily: "'Poppins',sans-serif",
    color: "#ffffff",
    letterSpacing: "0.5px",
    outline: "none",
    border: "none",
  },
  "form h3": {
    fontSize: "32px",
    fontWeight: 500,
    lineHeight: "42px",
    textAlign: "center",
  },
  label: {
    display: "block",
    marginTop: "10px",
    fontSize: "16px",
    fontWeight: 500,
  },
  input: {
    display: "block",
    height: "50px",
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.07)",
    borderRadius: "3px",
    padding: "0 10px",
    marginTop: "8px",
    fontSize: "14px",
    fontWeight: 300,
  },

  button: {
    marginTop: "50px",
    width: "100%",
    backgroundColor: "#ffffff",
    color: "#080710",
    padding: "15px 0",
    fontSize: "18px",
    fontWeight: 600,
    borderRadius: "5px",
    cursor: "pointer",
  },
}));

const AddProduct = () => {
  const classes = useStyles();

  const [tablet, setTablet] = useContext(TabletList);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [gst, setGst] = useState("");
  const [cgst, setCgst] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const updateStock = (e) => {
    setStock(e.target.value);
  };
  const updateGst = (e) => {
    setGst(e.target.value);
  };
  const updateCgst = (e) => {
    setCgst(e.target.value);
  };

  const addProd = (e) => {
    e.preventDefault();
    setTablet((prevTablet) => [
      ...prevTablet,
      { name: name, price: price, stock: stock, gst: gst, cgst: cgst },
    ]);
  };

  return (
    <>
      <form onSubmit={addProd} className={classes.form}>
        <h3 className={classes[".form .h3"]}>Add Product</h3>
        <label className={classes.label} htmlFor="name">
          Name
        </label>
        <input
          className={classes.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={updateName}
        />
        <label className={classes.label} htmlFor="rate">
          Price
        </label>
        <input
          className={classes.input}
          type="text"
          placeholder="Rate"
          value={price}
          onChange={updatePrice}
        />{" "}
        <label className={classes.label} htmlFor="stock">
          Stock
        </label>
        <input
          className={classes.input}
          type="text"
          placeholder="Stock"
          value={stock}
          onChange={updateStock}
        />{" "}
        <label className={classes.label} htmlFor="GST">
          GST
        </label>
        <input
          className={classes.input}
          type="text"
          placeholder="%"
          value={gst}
          onChange={updateGst}
        />{" "}
        <label className={classes.label} htmlFor="CGST">
          CGST
        </label>
        <input
          className={classes.input}
          type="text"
          placeholder="%"
          value={cgst}
          onChange={updateCgst}
        />
        <button className={classes.button}>Add</button>
      </form>
    </>
  );
};

export default AddProduct;
