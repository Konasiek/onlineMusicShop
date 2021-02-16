
INSERT INTO category (id, name) VALUES (1, "guitars");
INSERT INTO category (id, name) VALUES (2, "drums");
INSERT INTO category (id, name) VALUES (3, "keys");

INSERT INTO product_in_stock (id, producer_name, model_name, imageurl, stock, price, category_id) VALUES (100000001, "Fender", "Squire Bullet", "https://im.static-thomann.de/pics/prod/430040.jpg", 8, 220, 1);
INSERT INTO product_in_stock (id, producer_name, model_name, imageurl, stock, price, category_id) VALUES (100000002, "Ramirez", "Estudio 3", "https://im.static-thomann.de/pics/prod/435050.jpg", 5, 2630, 1);
INSERT INTO product_in_stock (id, producer_name, model_name, imageurl, stock, price, category_id) VALUES (100000003, "Taylor", "814ce", "https://im.static-thomann.de/pics/prod/493927.jpg", 1, 3850, 1);
INSERT INTO product_in_stock (id, producer_name, model_name, imageurl, stock, price, category_id) VALUES (100000004, "Mapex", "Tornado Standard", "https://thumbs.static-thomann.de/thumb/orig/pics/bdb/398654/12249092_800.webp", 2, 499, 2);
INSERT INTO product_in_stock (id, producer_name, model_name, imageurl, stock, price, category_id) VALUES (100000005, "Pearl", "Decade Standard", "https://thumbs.static-thomann.de/thumb/orig/pics/bdb/381359/11196529_800.webp", 3, 1050, 2);
INSERT INTO product_in_stock (id, producer_name, model_name, imageurl, stock, price, category_id) VALUES (100000006, "Traps", "A-400", "https://thumbs.static-thomann.de/thumb/orig/pics/bdb/210274/11372409_800.webp", 4, 515, 2);
INSERT INTO product_in_stock (id, producer_name, model_name, imageurl, stock, price, category_id) VALUES (100000007, "Yamaha", "Genos", "https://thumbs.static-thomann.de/thumb/orig/pics/bdb/422200/12853122_800.webp", 3, 3200, 3);
INSERT INTO product_in_stock (id, producer_name, model_name, imageurl, stock, price, category_id) VALUES (100000008, "Korg", "PA-X47", "https://thumbs.static-thomann.de/thumb/orig/pics/bdb/370974/10944234_800.webp", 5, 2820, 3);
INSERT INTO product_in_stock (id, producer_name, model_name, imageurl, stock, price, category_id) VALUES (100000009, "Ketron", "SD 7", "https://thumbs.static-thomann.de/thumb/orig/pics/bdb/361864/10111357_800.webp", 3, 2600, 3);

/*ROLE_USER has to be added to db to create new users*/
INSERT INTO roles values (1, "ROLE_USER");
INSERT INTO roles values (2, "ROLE_MODERATOR");
INSERT INTO roles values (3, "ROLE_ADMIN");

INSERT INTO users (id, email, password, username) VALUES (100000001, "user100000001@gmail.com", "$2a$10$3qLW6bJJi2ep7b1ROOSSge5xPdnV1C7I8Yw6Pu0QlbBm8I0vPNDk2", "user100000001");
INSERT INTO users (id, email, password, username) VALUES (100000002, "user100000002@gmail.com", "$2a$10$mRDJBN7sxoSsmmpIfc6.t.9SDV75eE3M7LGSeX2Ei.SKTCL4nhX4e", "user100000002");
INSERT INTO users (id, email, password, username) VALUES (100000003, "user100000003@gmail.com", "$2a$10$xN4nzZXUAXfDw/6R9vYUquOIcLokekZ9yogO.YTjyq7gv8RurOg1a", "user100000003");
INSERT INTO users (id, email, password, username) VALUES (100000004, "mod100000004@gmail.com", "$2a$10$rMC0Egv/sng2YMDwfTjP1.PCJt1EIPX39dutWUOTP6KdCZfVLHR/W", "mod100000004");
INSERT INTO users (id, email, password, username) VALUES (100000005, "admin100000005@gmail.com", "$2a$10$w.ddWehuIiCkSrN/MuFnbuL5HUwOaTRkpicY/lYrVkdFoDvxNmINW", "admin100000005");

INSERT INTO user_roles (user_id, role_id) VALUES (100000001, 1);
INSERT INTO user_roles (user_id, role_id) VALUES (100000002, 1);
INSERT INTO user_roles (user_id, role_id) VALUES (100000003, 1);
INSERT INTO user_roles (user_id, role_id) VALUES (100000004, 2);
INSERT INTO user_roles (user_id, role_id) VALUES (100000005, 3);

INSERT INTO cart (id) VALUES (10000001);
INSERT INTO cart (id) VALUES (10000002);
INSERT INTO cart (id) VALUES (10000003);

INSERT INTO product_in_order (id, imageurl, model_name, price, producer_name, quantity, category_id) VALUES (100001, "https://im.static-thomann.de/pics/prod/430040.jpg", "Squire Bullet", 220,"Fender", 2, 1);
INSERT INTO product_in_order (id, imageurl, model_name, price, producer_name, quantity, category_id) VALUES (100002, "https://thumbs.static-thomann.de/thumb/orig/pics/bdb/361864/10111357_800.webp", "SD 7", 2600,"Ketron", 1, 3);
INSERT INTO product_in_order (id, imageurl, model_name, price, producer_name, quantity, category_id) VALUES (100003, "https://thumbs.static-thomann.de/thumb/orig/pics/bdb/370974/10944234_800.webp", "PA-X47", 2820,"Korg", 1, 3);
INSERT INTO product_in_order (id, imageurl, model_name, price, producer_name, quantity, category_id) VALUES (100004, "https://thumbs.static-thomann.de/thumb/orig/pics/bdb/398654/12249092_800.webp", "Tornado Standard", 499,"Mapex", 1, 2);
INSERT INTO product_in_order (id, imageurl, model_name, price, producer_name, quantity, category_id) VALUES (100005, "https://thumbs.static-thomann.de/thumb/orig/pics/bdb/422200/12853122_800.webp", "Genos", 3200,"Yamaha", 1, 3);

INSERT INTO cart_products (cart_id, product_id) VALUES (10000001, 100001);
INSERT INTO cart_products (cart_id, product_id) VALUES (10000001, 100002);
INSERT INTO cart_products (cart_id, product_id) VALUES (10000002, 100003);
INSERT INTO cart_products (cart_id, product_id) VALUES (10000002, 100004);
INSERT INTO cart_products (cart_id, product_id) VALUES (10000003, 100005);      

INSERT INTO orders (id, building_number_and_apartment, city, contact_person, country, email, phone, post_code, street, cart_id, user_id) VALUES (10000001, "5", "Boston", "Ken Adams", "USA", "kenadams12@gmail.com", "5067675567", "324-454", "Main", 10000001, 100000001);
INSERT INTO orders (id, building_number_and_apartment, city, contact_person, country, email, phone, post_code, street, cart_id, user_id) VALUES (10000003, "5", "Boston", "Ken Adams", "USA", "kenadams12@gmail.com", "5067675567", "324-454", "Main", 10000003, 100000001);
INSERT INTO orders (id, building_number_and_apartment, city, contact_person, country, email, phone, post_code, street, cart_id, user_id) VALUES (10000002, "123/56", "New York", "Regina Phelenge", "USA", "regina12@gmail.com", "4656456445", "324-234", "Mayflower", 10000002, 100000002);


