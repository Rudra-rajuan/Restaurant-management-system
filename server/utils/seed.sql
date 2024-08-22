USE restaurant_db;

INSERT INTO users (user_name, user_password, user_email)
VALUES
  ('admin', 'password123', 'admin@example.com'),
  ('customer1', 'password456', 'customer1@example.com');
INSERT INTO items (item_name, item_price, item_category, item_description, item_img_url)
VALUES
  ('Margherita Pizza', 12.99, 'Pizza', 'Classic cheese pizza with tomato sauce', 'https://example.com/margherita.jpg'),
  ('Pepperoni Pizza', 14.99, 'Pizza', 'Pepperoni, mozzarella, and tomato sauce', 'https://example.com/pepperoni.jpg'),
  ('Caesar Salad', 9.99, 'Salad', 'Crisp romaine, parmesan, and Caesar dressing', 'https://example.com/caesar_salad.jpg'),
  ('Spaghetti Carbonara', 15.99, 'Pasta', 'Spaghetti with pancetta, egg, and parmesan', 'https://example.com/spaghetti_carbonara.jpg'),
  ('Tiramisu', 6.99, 'Dessert', 'Traditional Italian coffee-flavored dessert', 'https://example.com/tiramisu.jpg');