import { products } from "@/public/dummy_data";

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.status(404).json({
      message: "Error",
    });
    return;
  }

  const searchQuery = req.query.search;
  const brandQuery = req.query.brand;
  const categoryQuery = req.query.category;
  const priceFromQuery = req.query.price_from;
  const priceToQuery = req.query.price_to;

  const itemPerPage = parseInt(req.query.item_per_page) || 10;
  const currentPage = parseInt(req.query.page) || 1;

  const indexFirst = (currentPage - 1) * itemPerPage;
  const indexLast = indexFirst + itemPerPage;

  const productsSearchFilter = products
    .filter((product) => {
      if (searchQuery !== undefined && searchQuery !== "") {
        return product.title.toLowerCase().includes(searchQuery.toLowerCase());
      } else {
        return true;
      }
    })
    .filter((product) => {
      if (brandQuery !== undefined && brandQuery !== "") {
        return product.brand === brandQuery;
      } else {
        return true;
      }
    })
    .filter((product) => {
      if (categoryQuery !== undefined && categoryQuery !== "") {
        return product.category === categoryQuery;
      } else {
        return true;
      }
    })
    .filter((product) => {
      if (
        priceFromQuery !== undefined &&
        priceFromQuery !== "" &&
        priceToQuery !== undefined &&
        priceToQuery !== ""
      ) {
        return product.price >= priceFromQuery && product.price <= priceToQuery;
      } else if (priceFromQuery !== undefined && priceFromQuery !== "") {
        return product.price >= priceFromQuery;
      } else if (priceToQuery !== undefined && priceToQuery !== "") {
        return product.price >= priceToQuery;
      } else {
        return true;
      }
    });

  const productsPagination =
    productsSearchFilter.length !== 0
      ? productsSearchFilter.slice(indexFirst, indexLast)
      : [];

  const totalItems =
    searchQuery !== undefined ||
    brandQuery !== undefined ||
    categoryQuery !== undefined ||
    priceFromQuery !== undefined ||
    priceToQuery !== undefined
      ? productsSearchFilter.length
      : products.length;

  const totalPage = Math.ceil(totalItems / itemPerPage);

  res.status(200).json({
    message: "Success",
    data: {
      products: productsPagination,
      page: currentPage,
      item_per_page: itemPerPage,
      total_items: totalItems,
      total_page: totalPage,
    },
  });
}
