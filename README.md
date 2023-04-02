# Проект "Stellar burgers"
## https://2web.github.io/ya-react-burger/
Проект написан с использованием технологий `react`, `typescript`, `redux`, `redux-toolkit`, `websockets`, `react-dnd`


## Установка, запуск приложения:
- Установка `npm i`
- Запуск режима разработки `npm start`

## Тестирование приложения:
- Запуск unit-тестов `npm test`
- Запуск unit-тестов с покрытием `npm run test -- --coverage`
- Запуск e2e тестирования `npx cypress open`

## Сборка и деплой приложения:
- Сборка проекта `npm run build`
- Сборка и выгрузка проекта в ветку gh-pages в GitHub `gh-pages -d build`

## Навигация:
- Директория `/cypress/e2e` содержит файлы интеграционных тестов.
- Директория `/src/store/actions` содержит файл теста Actions — `burgerIngredientsActions.test.js`
- Директория `/src/store/reducers` содержит файлы теста Reducers — `burger-ingredients-reducer.test.js`,`construct-reducer.test.js`,`modal-ingredients-reducer.test.js`,`modal-order-reducer.test.js`,`user-reducer.test.js`