INSERT INTO shops (shop_name, shop_description, shop_image) VALUES
('カレー屋', 'カレー屋さんです。', 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'),
('牛丼屋', '牛丼屋さんです。', 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg'),
('くだもの屋', 'くだもの屋さんです。', 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UL640_QL65_ML3_.jpg'),
('ケバブ屋', 'ケバブ屋さんです。', 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg'),
('コーヒー屋', 'コーヒー屋さんです。', 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg');

INSERT INTO products (shop_id, product_name, product_category, product_description, product_price, product_stock, product_image) VALUES
(1, 'チキンカレー', 'カレー', 'Double layered placket, collar and cuff for a more structured look. This shirt combines timeless style with comfort. Stretch, opaque fabric.', 14.99, 0, 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'),
(1, 'ポークカレー', 'カレー', 'Expand your PS4 gaming experience, Play anywhere', 114.55, 0, 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg'),
(1, 'キーマカレー', 'カレー', 'Diy nail art: great for nails salon,professional nail artists diy nail art,acrylic nails, gel nails, false nails, nail tips, press on nails, nail art stickers, nail decor, nail decorations', 7.99, 0, 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UL640_QL65_ML3_.jpg'),
(2, '牛丼並盛', '牛丼', 'Easy upgrade for faster boot-up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive. Based on published specifications and internal benchmarking tests using PCMark vantage scores.)', 109, 0, 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg'),
(2, '牛丼大盛', '牛丼', 'USB C to USB adapter connects type-c devices (MacBook Pro, Chromebook Pixel, Galaxy Note 7, etc.) to USB-A devices (laptops, hard drives, power banks, wall/car chargers, etc.)', 9.85, 0, 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg'),
(3, 'バナナジュース', 'ジュース', 'Note:The Jackets is US standard size,Please choose size as your usual wear', 56.99, 0, 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'),
(3, 'りんごジュース', 'ジュース', '1280 x 800 Resolution Display, Quad-Core Processor, 16GB Storage, 1.5GB RAM, micro-SD Card Slot (Up to 256GB), Headphone Jack, 5MP Rear Camera, 2MP Front Camera, Android 7.0 OS', 149.99, 0, 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg'),
(4, 'ケバブ', 'ケバブ', 'Note:The Jackets is US standard size,Please choose size as your usual wear', 56.99, 0, 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'),
(5, 'コーヒー', 'コーヒー', 'Note:The Jackets is US standard size,Please choose size as your usual wear', 56.99, 0, 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'),
(5, 'ラテ', 'コーヒー', 'Great for Casual and Sport Wear, Going Out, School, Vacation or outdoor activities.', 59, 0, 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');
