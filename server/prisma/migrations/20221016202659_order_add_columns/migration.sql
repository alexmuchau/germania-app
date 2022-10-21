-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "waiterId" TEXT NOT NULL,
    "table" INTEGER NOT NULL DEFAULT 0,
    "command" INTEGER NOT NULL DEFAULT 0,
    "createHour" TEXT NOT NULL DEFAULT '00:01',
    CONSTRAINT "Orders_waiterId_fkey" FOREIGN KEY ("waiterId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Orders" ("id", "waiterId") SELECT "id", "waiterId" FROM "Orders";
DROP TABLE "Orders";
ALTER TABLE "new_Orders" RENAME TO "Orders";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
