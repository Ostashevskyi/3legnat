import { getOrder } from "@/hooks/getOrder";
import { TOrderCode } from "@/types/OrdersCode";
import { formatDate } from "@/utils/formatDate";
import React from "react";

const Orders = async () => {
  const orders = (await getOrder()) as TOrderCode[];

  return (
    <section className="max-container p-mobile">
      <p className="semibold-body-1 mb-10">Order History</p>
      <div className="mb-20 max-h-[300px] overflow-y-scroll">
        <div className="grid grid-cols-4 border-b py-2 text-neutral_04">
          <p>Number ID</p>
          <p>Dates</p>
          <p>Status</p>
          <p>Price</p>
        </div>
        {orders.map((order, index) => {
          const formatedDate = formatDate(order.date);

          return (
            <div key={index}>
              <div className="grid grid-cols-2 gap-y-4 border-b py-4 lg:hidden regular-caption-1 text-neutral_04">
                <p>Number ID</p>
                <p className="text-neutral_07 font-medium">
                  {order.order_code}
                </p>
                <p>Dates</p>
                <p className="text-neutral_07 font-medium">{formatedDate}</p>
                <p>Status</p>
                <p className="text-neutral_07 font-medium">{order.status}</p>
                <p>Price</p>
                <p className="text-neutral_07 font-medium">
                  ${order.total.toFixed(2)}
                </p>
              </div>

              <div className="grid-cols-1 regular-caption-1 hidden lg:grid">
                <div className="grid grid-cols-4 py-6 border-b font-medium text-neutral_07">
                  <p>{order.order_code}</p>
                  <p>{order.status}</p>
                  <p>{formatedDate}</p>
                  <p>${order.total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Orders;
