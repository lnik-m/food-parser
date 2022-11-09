const mockSearchHandler = async (req, res) => {
  const data = [
    {
      name: 'Цыпленок карри',
      description: 'Цыпленок, ананасы, соус карри, красный лук, сладкий перец, моцарелла, фирменный томатный соус',
      price: 419,
      site: {
        name: 'Додо пицца',
        link: 'https://dodopizza.ru/',
      },
      link: 'https://dodopizza.ru/peterburg/pizza/chiken-karri',
      imgLink: 'https://cdn.dodostatic.net/static/Img/Products/bce16b1b340f445297fd20ba21df29f2_584x584.png',
    },
    {
      name: 'Мясная',
      description: 'Цыпленок, ветчина, пикантная пепперони, острая чоризо, моцарелла, фирменный томатный соус',
      price: 469,
      site: {
        name: 'Додо пицца',
        link: 'https://dodopizza.ru/',
      },
      link: 'https://dodopizza.ru/peterburg/pizza/myasnaya-pizza',
      imgLink: 'https://cdn.dodostatic.net/static/Img/Products/5f11f129fd7448ef90d3057730f739d9_584x584.png',
    },
    {
      name: 'Маринованная слива с имеретинским сыром',
      description: '',
      price: 135,
      site: {
        name: 'Хачапури и вино',
        link: 'https://www.hachapuriivino.ru/',
      },
      link: '',
      imgLink: 'https://www.hachapuriivino.ru/image/cache/catalog/%20%D0%BE%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8C/IMG_6139-300x300.jpg',
    },
    {
      name: 'ХАЧАПУРИ С СЫРОМ ДОРБЛЮ И ГРУШЕЙ',
      description: 'ХАЧАПУРИ С СЫРОМ ДОРБЛЮ, СЫРОМ СУЛУГУНИ, КОНСЕРВИРОВАННОЙ ГРУШЕЙ И РОСТКАМИ ПОДСОЛНУХА.',
      price: 490,
      site: {
        name: 'Бахрома',
        link: 'https://www.bahroma1.ru/',
      },
      link: '',
      imgLink: '',
    },
    {
      name: 'СЫРНЫЕ БОЛЛЫ В ПАНИРОВКЕ С ЯГОДНЫМ СОУСОМ',
      description: 'СЫРНЫШЕ ШАРИКИ ИЗ СЫРА СУЛУГУНИ, ОБЖАРЕННЫЕ В СУХАРЯХ ПАНКО. ПОДАЮТСЯ С ЯГОДНЫМ СОУСОМ.',
      price: 330,
      site: {
        name: 'Бахрома',
        link: 'https://www.bahroma1.ru/',
      },
      link: '',
      imgLink: 'https://www.bahroma1.ru/goods/cheese_boul_nov.jpg',
    },
  ]
  res.status(200).json({ data })
}

export default mockSearchHandler

