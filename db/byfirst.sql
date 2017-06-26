select * from users
where LEFT(name, 2) = $1
