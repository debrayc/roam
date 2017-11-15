CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    username VARCHAR(255),
    hashword VARCHAR(255)
);