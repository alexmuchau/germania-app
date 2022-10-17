-- CreateTable
CREATE TABLE "Portions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Chopps" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "waiterId" TEXT NOT NULL,
    CONSTRAINT "Orders_waiterId_fkey" FOREIGN KEY ("waiterId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OrderChopp" (
    "OrderId" TEXT NOT NULL,
    "ChoppId" TEXT NOT NULL,
    "Quantity" INTEGER NOT NULL,

    PRIMARY KEY ("OrderId", "ChoppId"),
    CONSTRAINT "OrderChopp_OrderId_fkey" FOREIGN KEY ("OrderId") REFERENCES "Orders" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderChopp_ChoppId_fkey" FOREIGN KEY ("ChoppId") REFERENCES "Chopps" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OrderPortion" (
    "OrderId" TEXT NOT NULL,
    "PortionId" TEXT NOT NULL,
    "Quantity" INTEGER NOT NULL,

    PRIMARY KEY ("OrderId", "PortionId"),
    CONSTRAINT "OrderPortion_OrderId_fkey" FOREIGN KEY ("OrderId") REFERENCES "Orders" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderPortion_PortionId_fkey" FOREIGN KEY ("PortionId") REFERENCES "Portions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Portions_name_key" ON "Portions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Chopps_name_key" ON "Chopps"("name");
