https://dev.mysql.com/doc/refman/8.4/en/string-functions.html#function_locate

locate (substr, str), locate (substr, str, pos)
```sql
mysql> SELECT LOCATE('bar', 'foobarbar');
-> 4
mysql> SELECT LOCATE('xbar', 'foobar');
-> 0
mysql> SELECT LOCATE('bar', 'foobarbar', 5);
-> 7
```