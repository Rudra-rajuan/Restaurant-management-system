USE restaurant_db;

INSERT INTO users (user_name, user_password, user_email)
VALUES
  ('admin', 'password123', 'admin@example.com'),
  ('customer1', 'password456', 'customer1@example.com');
INSERT INTO items (item_name, item_price, item_description)
VALUES
  ('Pizza Margherita', 12.99, 'Classic Margherita pizza with tomato sauce, mozzarella, and basil'),
  ('Pasta Carbonara', 10.99, 'Creamy pasta with pancetta, eggs, and Parmesan cheese'),
  ('Chicken Alfredo', 14.99, 'Fettuccine pasta with creamy Alfredo sauce and grilled chicken');