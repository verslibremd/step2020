<?php
/*
SELECT products.id, products.name, item.quantity, magazin.name AS shop_name
FROM products
INNER JOIN item
ON products.id = item.product_id
INNER JOIN magazin
ON magazin.id = item.store_id
WHERE item.quantity > 0

*/

/*
SELECT products.id, products.name, SUM(item.quantity) AS sum_quantity
FROM products
INNER JOIN item
ON products.id = item.product_id
GROUP BY products.id
*/