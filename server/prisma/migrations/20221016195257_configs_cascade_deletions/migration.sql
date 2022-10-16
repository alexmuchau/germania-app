-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OrderChopp" (
    "OrderId" TEXT NOT NULL,
    "ChoppId" TEXT NOT NULL,
    "Quantity" INTEGER NOT NULL,

    PRIMARY KEY ("OrderId", "ChoppId"),
    CONSTRAINT "OrderChopp_OrderId_fkey" FOREIGN KEY ("OrderId") REFERENCES "Orders" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "OrderChopp_ChoppId_fkey" FOREIGN KEY ("ChoppId") REFERENCES "Chopps" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_OrderChopp" ("ChoppId", "OrderId", "Quantity") SELECT "ChoppId", "OrderId", "Quantity" FROM "OrderChopp";
DROP TABLE "OrderChopp";
ALTER TABLE "new_OrderChopp" RENAME TO "OrderChopp";
CREATE TABLE "new_OrderPortion" (
    "OrderId" TEXT NOT NULL,
    "PortionId" TEXT NOT NULL,
    "Quantity" INTEGER NOT NULL,

    PRIMARY KEY ("OrderId", "PortionId"),
    CONSTRAINT "OrderPortion_OrderId_fkey" FOREIGN KEY ("OrderId") REFERENCES "Orders" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "OrderPortion_PortionId_fkey" FOREIGN KEY ("PortionId") REFERENCES "Portions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_OrderPortion" ("OrderId", "PortionId", "Quantity") SELECT "OrderId", "PortionId", "Quantity" FROM "OrderPortion";
DROP TABLE "OrderPortion";
ALTER TABLE "new_OrderPortion" RENAME TO "OrderPortion";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
