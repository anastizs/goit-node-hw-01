# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
https://ibb.co/ft4zPTN

# Получаем контакт по id - выводим в консоль объект контакта или null, если контакта с таким id не существует.

node index.js --action get --id 05olLMgyVQdWRwgKfg5J6
https://ibb.co/zHzXLtM

# Добавляем контакт и выводим в консоль созданный контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://ibb.co/CvgTHBd

# Удаляем контакт и выводим в консоль удаленный контакт или null, если контакта с таким id не существует.

node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
https://ibb.co/xYq0sCz
