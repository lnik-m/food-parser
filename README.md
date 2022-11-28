# Сервис для подбора дешевых блюд НайдуЕду
## Участники проекта:
- Мельникова Мария - Frontend Developer
- Ингеройнен Полина - Frontend Developer
- Никитина Ксения - Backend Developer
- Ларионов Михаил - Backend Developer

## Описание проекта:
Наш сервис - это парсер-поисковик, подбирающий блюда по ключевым словам.
#### В проекте реализованы:
- поиск с историей запросов
- избранное (добавление понравившихся блюд)
- настройки (очистка избранного и истории поиска)
- страница разработчика (возможность перепарсинга по кнопке)
#### Общая логика:
- Раз в неделю (в пн 00:00) автоматизированно отправляется запрос на эндпоинт `/api/update-db`, где происходит вызов всех парсеров и обновление БД в соответствии с обновлениями сайтов
- При запросе пользователя парсеры не вызываются, отправляются сохраненные в БД данные
- Перед отправкой данные фильтруются по телу запроса и сортируются по возрастанию цены
- Есть возможность пометить карточку блюда как понравившуюся. Тогда она будет отображаться на странице избранного
- История поиска появляется по мере использования сайта - каждый запрос сохраняется и отображается в истории
- Очистить избранное и историю поиска можно на странице настроек
- Вызвать незапранированный перепарсинг можно по кнопке на странице разработчика

**! Избранное и история поиска прикреплены к устройству, на котором используется сайт !**

## Frontend
- общее:
  - сохранение данных в `redux-store` и `localStorage`
  - адаптивная верстка для мобильной версии
  - запросы на backend с помощью обертки над инструментом `fetch`
- корневая страница:
  - блок поиска с отображением истории запросов
  - отображение полученных данных в виде карточек (включая картинки)
- страница избранного:
  - отображение сохраненных пользователем карточек
- страница настроек:
  - кнопка очистки избранного
  - кнопка очистки истории
- страница разработчика
  - кнопка обновления БД 

## Backend
- подключение к NoSQL базе данных `faunadb`
- парсеры:
  - использование пакета `puppeteer`
  - обертка над вызовом браузера для открытия сайтов
- эндпоинты:
  - `/api/search` - получение данных по конкретному запросу из БД
  - `/api/mock-search` - получение мокированных статических данных вне зависимости от тела запроса
  - `/api/update-db` - обновление БД (незапланированный вызов всех парсеров и добавление новых данных в БД, если такие есть)
  
## Сайты для парсинга
- [Бахрома](https://www.bahroma1.ru/all-menu.html)
- [Dominos Pizza](https://spb.dominospizza.ru/)
- [Хачапури и вино](https://www.hachapuriivino.ru/)

## Built with
* JavaScript
* React
* Next.js
* Redux
* SASS/SCSS
* FaunaDB (NoSQL database)
* Fortawesome

## Deployed version
https://food-parser.vercel.app/

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First install dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.page.jsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/index.endpoint.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Linting
For linting code:

```bash
yarn lint
```
