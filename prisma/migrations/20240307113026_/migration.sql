-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "order_code" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" TEXT NOT NULL,
    "products" JSONB NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_order_code_key" ON "Order"("order_code");
