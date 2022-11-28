# Сервис для подбора дешевых блюд НайдуЕду
## Участники проекта:
- Мельникова Мария
- Никитина Ксения
- Ингеройнен Полина
- Ларионов Михаил

## Описание проекта:
Наш сервис - это парсер-поисковик, подбирающий блюда по ключевым словам.
В проекте реализованы:
- поиск с историей поиска
- возможность добавления в избранное
- сохранение данных в localStorage
- адаптивная верстка для мобильной версии
- страница избранного
- очистка избранного и истории поиска
- подключение к NoSQL базе данных faunadb, в которой
  сохраняются результаты парсинга
- парсинг сайтов Бахрома, Доминос, Хачапури и вино
- возможность обновления бд с фронта


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
