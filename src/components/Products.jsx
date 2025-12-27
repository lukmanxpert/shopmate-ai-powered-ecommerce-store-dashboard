import React, { useState, useEffect } from "react";
import { LoaderCircle, Plus } from "lucide-react";
import CreateProductModal from "../modals/CreateProductModal";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import UpdateProductModal from "../modals/UpdateProductModal";
import ViewProductModal from "../modals/ViewProductModal";

const Products = () => {
  const [selectedProduct, setSelectedProducts] = useState(null)
  const [maxPage, setMaxPage] = useState(null)
  const [page, setPage] = useState(1)

  const dispatch = useDispatch()

  const { isViewProductModalOpened, isCreateProductModalOpened, isUpdateProductModalOpened } = useSelector(state => state.extra)
  const { loading, products, totalProducts } = useSelector(state => state.product)

  useEffect(() => {
    // fetch all products
  }, [dispatch, page])

  useEffect(() => {
    if (totalProducts !== undefined) {
      const newMax = Math.ceil(totalProducts / 10)
      setMaxPage(newMax || 1)
    }
  }, [totalProducts])

  useEffect(() => {
    if (maxPage && page > maxPage) {
      setPage(maxPage)
    }
  }, [maxPage, page])

  return <>
  
  </>;
};

export default Products;
