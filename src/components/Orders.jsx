import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { deleteOrder, fetchAllOrders, updateOrderStatus } from "../store/slices/orderSlice";

const Orders = () => {
  const dispatch = useDispatch()
  const { orders, loading } = useSelector(state => state.orders)

  const [selectedStatus, setSelectedStatus] = useState("")
  const [filterByStatus, setFilterByStatus] = useState("All")
  const [previewImage, setPreviewImage] = useState(null)
  const [deleteConfirm, setDeleteConfirm] = useState({ open: false, id: null })

  useEffect(() => {
    dispatch(fetchAllOrders())
  }, [dispatch])

  const handleStatusChange = (orderId, newStatus) => {
    setSelectedStatus(newStatus)
    dispatch(updateOrderStatus({ orderId, status: newStatus }))
  }

  const filteredOrders = filterByStatus === "All" ? orders : orders?.filter(order => order.order_status === filterByStatus)
  const confirmDelete = () => {
    dispatch(deleteOrder(deleteConfirm.id))
    setDeleteConfirm({ open: false, id: null })
  }

  if (loading) return <p className="p-10">Loading Orders...</p>
  return <></>;
};

export default Orders;
