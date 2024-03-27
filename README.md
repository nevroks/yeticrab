# Руководство к несушествующему api

Для удобства рабоыт мне нужна была бы пара методов таких как:
Этот метод добавляет фильтр и хотелось бы чтобы туда можно было передавать сразу несколько параметров
```json
{
	"action": "filter",
	"params": {"price": 17500.0}
}
```
Так же метод для получения просто задач:
```json
{
	"action": "get_ids",
	"params": {"objectsPerPage": 20, "page": 1}
}
```
Вот такой метод чтобы использовать прошлое
```json
{
    "action": "get_items",
    "params": {"ids": ["1789ecf3-f81c-4f49-ada2-83804dcc74b0"]}
}
```
Вот такой метод чтобы изменять по id
```json
{
    "action": "change_items",
    "params": {"ids": ["1789ecf3-f81c-4f49-ada2-83804dcc74b0"],"object":'то на что меняем'}
}
```
Ну и методы для автризации,таких прмиеров к сожелению предоставить не могу </br>
И так бы с ямог реализовтаь приложение с "админкой",фильтрацией,поиском,пагинацией и возможностьб редактирвоать

# Задача
Необходимо разработать прототип системы ведения заявок для логистов в авто
грузоперевозках в виде web-приложения.
Проект должен быть полностью рабочим, т.е. его можно собрать и запустить из
исходного кода и весь основной функционал должен быть реализован.
Прототип включает в себя вывод таблицы с заявками, счетчик заявок (количество
заявок в таблице). Должна быть возможность перейти в режим администратора
(авторизацию делать не нужно), где появляется возможность просмотра,
редактирования и удаления заявок, создание новых заявок.
В заявке есть следующие данные:
● Номер заявки
● Дата и время получения заявки от клиента
● Название фирмы клиента
● ФИО перевозчика
● Контактный телефон перевозчика
● Комментарии
● Статус заявки: новая, в работе, завершено. При создании новой заявки у неё
автоматически выставляется статус “новая”. При редактировании статус
можно поменять на “в работе” или на “завершено”.
● ATI код сети перевозчика (кликабельно, переход на сайт). Ссылка такого
вида: https://ati.su/firms/{ati}/info (пример: https://ati.su/firms/12345/info)
Помимо реализации frontend необходимо предоставить документацию к REST API
для этого проекта, как вы её видите

# Проблемы с которыми столкнулся

Особо проблем небыло,хотел попробывать redux persist но он был бы тут лишним а всё остальное это базовые операции с react,ну
единственное тчо мне очень прям не понравилась это библеотека Gravity Ui

