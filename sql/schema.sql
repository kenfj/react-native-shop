-- https://qiita.com/7mpy/items/bedd102355a51e93a7df
alter database postgres set timezone to 'Asia/Tokyo';

DROP TABLE IF EXISTS "shops";
DROP TABLE IF EXISTS "order_items";
DROP TABLE IF EXISTS "orders";
DROP TABLE IF EXISTS "products";

CREATE TABLE IF NOT EXISTS "shops" (
	"id" serial PRIMARY KEY NOT NULL,
	"shop_name" varchar(100) NOT NULL,
	"shop_description" text NOT NULL,
	"shop_image" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "order_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"order_id" integer NOT NULL,
	"shop_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	"product_name" varchar(100) NOT NULL,
	"product_price" double precision NOT NULL,
	"quantity" integer NOT NULL,
	"total" double precision DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"shop_id" integer NOT NULL,
	"order_date" timestamptz NOT NULL,
	"email" varchar(100) NOT NULL,
	"total" double precision DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"shop_id" integer NOT NULL,
	"product_name" varchar(100) NOT NULL,
	"product_category" varchar(100) NOT NULL,
	"product_description" text NOT NULL,
	"product_price" double precision NOT NULL,
	"product_stock" integer NOT NULL,
	"product_image" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_id_orders_id_fk" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "order_items" ADD CONSTRAINT "order_items_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
