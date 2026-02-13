const productImages = import.meta.glob("../assets/images/products/*", {
  eager: true,
  import: "default",
});

export const getProductImageUrl = (imagePath) => {
  if (!imagePath) return "";
  if (imagePath.startsWith("http")) return imagePath;
  const key = `../assets/images/products/${imagePath}`;
  return productImages[key] ?? "";
};
