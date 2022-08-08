import React, { useReducer } from "react";
import Input from "../Input";
import Button from "../Button";
import { useProducts } from "../../contexts/useProducts";
import { useProductsList } from "../../contexts/useProductsList";
import { useProductType } from "../../contexts/useProductType";
import { getDateNow, checkBarcode } from "../../utils";
import addProductReducer from "../../reducers/addProductReducer";
import * as P from "./AddProduct.styled"

export default function AddProduct() {
  const [state, dispatch] = useReducer(addProductReducer, {
    name: "",
    barcode: "",
    error: "",
  });
  const { products, setProducts } = useProducts();
  const { productsList } = useProductsList();
  const { productType } = useProductType();

  const handleSubmit = (e) => {
    e.preventDefault();
    const barcodeControl = checkBarcode(state.barcode, products, productsList);
    if (!barcodeControl) {
      setProducts([
        ...products,
        {
          name: state.name,
          barcode: state.barcode,
          productType,
          createdDate: getDateNow(),
          timeStamp: Date.now(),
        },
      ]);
      dispatch({ type: "SET_NAME", value: "" });
      dispatch({ type: "SET_BARCODE", value: "" });
      dispatch({ type: "SET_ERROR", value: "" });
    } else {
      dispatch({
        type: "SET_ERROR",
        value: "This barcode number has already been registered.",
      });
    }
  };

  return (
    <P.AddProduct onSubmit={handleSubmit}>
      <P.Title>Add Product</P.Title>
      <Input
        type="text"
        id="product-name"
        name="product-name"
        label="Name"
        value={state.name}
        onChange={(e) => dispatch({ type: "SET_NAME", value: e.target.value })}
      />
      <Input
        type="text"
        id="product-barcode"
        name="product-barcode"
        label="Barcode"
        value={state.barcode}
        onChange={(e) =>
          dispatch({ type: "SET_BARCODE", value: e.target.value })
        }
      />
      <Button
        type="submit"
        text="Add"
        theme="dark"
        disabled={state.name !== "" && state.barcode !== "" ? false : true}
      />
      {state.error && <P.Text>{state.error}</P.Text>}
    </P.AddProduct>
  );
}
