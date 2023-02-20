import { products } from "@/public/dummy_data";

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.status(404).json({
      message: "Error",
    });
    return;
  }

  const searchQuery = req.query.search?.toLowerCase();
  const brandQuery = req.query.brand;
  const categoryQuery = req.query.category;
  const priceFromQuery = req.query.price_from;
  const priceToQuery = req.query.price_to;

  const itemPerPage = parseInt(req.query.item_per_page) || 10;
  const currentPage = parseInt(req.query.page) || 1;

  const indexFirst = (currentPage - 1) * itemPerPage;
  const indexLast = indexFirst + itemPerPage;

  let productsSearchFilter = [];
  if (
    searchQuery === undefined &&
    brandQuery === undefined &&
    categoryQuery === undefined &&
    priceFromQuery === undefined &&
    priceToQuery === undefined
  ) {
    productsSearchFilter = products;
  } else if (
    searchQuery !== undefined &&
    brandQuery !== undefined &&
    categoryQuery !== undefined &&
    priceFromQuery !== undefined &&
    priceToQuery !== undefined
  ) {
    productsSearchFilter = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery) &&
        product.brand === brandQuery &&
        product.category === categoryQuery &&
        product.price >= priceFromQuery &&
        product.price <= priceToQuery
    );
  } else if (
    searchQuery !== undefined &&
    brandQuery === undefined &&
    categoryQuery === undefined &&
    priceFromQuery === undefined &&
    priceToQuery === undefined
  ) {
    productsSearchFilter = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery)
    );
  } else if (
    searchQuery === undefined &&
    brandQuery !== undefined &&
    categoryQuery === undefined &&
    priceFromQuery === undefined &&
    priceToQuery === undefined
  ) {
    productsSearchFilter = products.filter(
      (product) => product.brand === brandQuery
    );
  } else if (
    searchQuery === undefined &&
    brandQuery === undefined &&
    categoryQuery !== undefined &&
    priceFromQuery === undefined &&
    priceToQuery === undefined
  ) {
    productsSearchFilter = products.filter(
      (product) => product.category === categoryQuery
    );
  } else if (
    searchQuery === undefined &&
    brandQuery === undefined &&
    categoryQuery === undefined &&
    priceFromQuery !== undefined &&
    priceToQuery !== undefined
  ) {
    productsSearchFilter = products.filter(
      (product) =>
        product.price >= priceFromQuery && product.price <= priceToQuery
    );
  } else if (
    searchQuery !== undefined &&
    brandQuery !== undefined &&
    categoryQuery === undefined &&
    priceFromQuery === undefined &&
    priceToQuery === undefined
  ) {
    productsSearchFilter = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery) &&
        product.brand === brandQuery
    );
  } else if (
    searchQuery !== undefined &&
    brandQuery == undefined &&
    categoryQuery !== undefined &&
    priceFromQuery === undefined &&
    priceToQuery === undefined
  ) {
    productsSearchFilter = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery) &&
        product.category === categoryQuery
    );
  } else if (
    searchQuery !== undefined &&
    brandQuery == undefined &&
    categoryQuery === undefined &&
    priceFromQuery !== undefined &&
    priceToQuery !== undefined
  ) {
    productsSearchFilter = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery) &&
        product.price >= priceFromQuery &&
        product.price <= priceToQuery
    );
  } else if (
    searchQuery === undefined &&
    brandQuery !== undefined &&
    categoryQuery !== undefined &&
    priceFromQuery === undefined &&
    priceToQuery === undefined
  ) {
    productsSearchFilter = products.filter(
      (product) =>
        product.brand === brandQuery && product.category === categoryQuery
    );
  } else if (
    searchQuery === undefined &&
    brandQuery !== undefined &&
    categoryQuery === undefined &&
    priceFromQuery !== undefined &&
    priceToQuery !== undefined
  ) {
    productsSearchFilter = products.filter(
      (product) =>
        product.brand === brandQuery &&
        product.price >= priceFromQuery &&
        product.price <= priceToQuery
    );
  } else if (
    searchQuery === undefined &&
    brandQuery === undefined &&
    categoryQuery !== undefined &&
    priceFromQuery !== undefined &&
    priceToQuery !== undefined
  ) {
    productsSearchFilter = products.filter(
      (product) =>
        product.category === categoryQuery &&
        product.price >= priceFromQuery &&
        product.price <= priceToQuery
    );
  } else if (
    searchQuery !== undefined &&
    brandQuery !== undefined &&
    categoryQuery === undefined &&
    priceFromQuery !== undefined &&
    priceToQuery !== undefined
  ) {
    productsSearchFilter = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery) &&
        product.brand === brandQuery &&
        product.price >= priceFromQuery &&
        product.price <= priceToQuery
    );
  } else if (
    searchQuery === undefined &&
    brandQuery !== undefined &&
    categoryQuery !== undefined &&
    priceFromQuery !== undefined &&
    priceToQuery !== undefined
  ) {
    productsSearchFilter = products.filter(
      (product) =>
        product.brand === brandQuery &&
        product.category === categoryQuery &&
        product.price >= priceFromQuery &&
        product.price <= priceToQuery
    );
  } else if (
    searchQuery !== undefined &&
    brandQuery === undefined &&
    categoryQuery !== undefined &&
    priceFromQuery !== undefined &&
    priceToQuery !== undefined
  ) {
    productsSearchFilter = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery) &&
        product.category === categoryQuery &&
        product.price >= priceFromQuery &&
        product.price <= priceToQuery
    );
  }

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
