CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),
    zip INTEGER,
    img TEXT,
    mortgage DECIMAL,
    rent DECIMAL
);

INSERT INTO houses (name, address, city, state, zip, img, mortgage, rent)
VALUES ('Cool Crib', '5555 Coolest Crib Way', 'Toledo', 'CA', 55555, NULL, 25.00, 25.00);



/*I didn't know that I needed to wait to add the new columns. Here are the commands I would have used.
ALTER TABLE houses
ADD img TEXT;

ALTER TABLE houses
ADD mortgage DECIMAL;

ALTER TABLE houses
ADD rent DECIMAL;
*/
