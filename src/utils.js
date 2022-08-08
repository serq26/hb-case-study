export const getDateNow = () => {
  return new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
};

export const checkBarcode = (barcode,products,productsList) => {
  const control = products.some((p) => p.barcode === barcode); // First, check Products in Add Product Page
  const lastControl = !control ? productsList.some((p) => p.barcode === barcode) : true; // After, check ProductsList (Local Storage)
  return lastControl;
};