import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getCategories(): Category[] {
    return [
      { id: 1, name: 'Смартфоны' },
      { id: 2, name: 'Ноутбуки' },
      { id: 3, name: 'Наушники' },
      { id: 4, name: 'Планшеты' }
    ];
  }

  getProducts(): Product[] {
    return [
      {
        id: 1,
        categoryId: 1,
        likes: 0,
        name: 'Смартфон Samsung Galaxy A36 5G 8 ГБ/256 ГБ фиолетовый',
        description: 'Samsung Galaxy A36 5G — мощный смартфон с поддержкой сетей 5G, большим AMOLED-экраном 90 Гц и тройной камерой 50 Мп.',
        price: 165981,
        rating: 4.4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p03/pc1/30502020.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p03/pc1/30502020.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p1f/pc1/30502021.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p74/pc1/30502024.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a36-5g-8-gb-256-gb-fioletovyi-136422263/'
      },
      {
        id: 2,
        categoryId: 1,
        likes: 0,
        name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
        description: 'Флагманский iPhone 16 Pro Max с чипом A18 Pro, камерой 48 Мп и дисплеем Super Retina XDR 6.9″.',
        price: 970000,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfc/h0c/87295489441822.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/'
      },
      {
        id: 3,
        categoryId: 1,
        likes: 0,
        name: 'Смартфон Poco X7 Pro 8 ГБ/256 ГБ черный',
        description: 'Poco X7 Pro — высокая производительность, AMOLED-дисплей 120 Гц и быстрая зарядка 90 Вт по выгодной цене.',
        price: 219900,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p52/p6d/67021883.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p52/p6d/67021883.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p4f/p51/19761251.jpeg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p38/pa3/19761248.jpeg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/poco-x7-pro-8-gb-256-gb-chernyi-133335626/'
      },
      {
        id: 4,
        categoryId: 1,
        likes: 0,
        name: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ белый',
        description: 'Xiaomi Redmi 13C — универсальный смартфон с большим дисплеем 6.74″, камерой 50 Мп и аккумулятором 5000 мА·ч.',
        price: 59900,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h53/85284066590750.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h9c/h53/85284066590750.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hde/hf7/85284066623518.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h55/h91/85284066721822.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-belyi-114985314/'
      },
      {
        id: 5,
        categoryId: 1,
        likes: 0,
        name: 'Смартфон Vivo Y04 4 ГБ/128 ГБ золотистый',
        description: 'Vivo Y04 — стильный смартфон с большим экраном 6.56″, батареей 5000 мА·ч и камерой 13 Мп по доступной цене.',
        price: 69990,
        rating: 4.3,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p2f/pea/39993021.jpeg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p2f/pea/39993021.jpeg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p66/p18/39993024.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p4a/p18/39993023.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/vivo-y04-4-gb-128-gb-zolotistyi-138510267/'
      },
{
        id: 6,
        categoryId: 2,
        likes: 0,
        name: 'Ноутбук Apple MacBook Air 13 M3 8 ГБ/256 ГБ серый',
        description: 'MacBook Air 13 на чипе Apple M3 — невесомый ноутбук с дисплеем Liquid Retina 13.6″, до 18 часов работы от батареи.',
        price: 599000,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p09/29101834.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h4f/hbe/85669727043614.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h84/hdf/85669727109150.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h8b/h18/85669726912542.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-256-gb-macos-mrxn3ru-a-118170954/'
      },
      {
        id: 7,
        categoryId: 2,
        likes: 0,
        name: 'Ноутбук ASUS VivoBook 15 X1504VA Intel Core i5 16 ГБ/512 ГБ серебристый',
        description: 'ASUS VivoBook 15 — производительный ноутбук с процессором Intel Core i5-1335U, дисплеем FHD IPS 15.6″ и батареей 50 Вт·ч.',
        price: 327752,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h56/86623971803166.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hba/hee/86623971868702.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hbe/ha0/86623972130846.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/he5/ha3/86623972458526.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/asus-vivobook-15-x1504va-bq1143x-15-6-16-gb-ssd-512-gb-win-11-pro-90nb10j2-m01d10-121816070/'
      },
      {
        id: 8,
        categoryId: 2,
        likes: 0,
        name: 'Ноутбук Lenovo IdeaPad Slim 3 Intel Core i3 8 ГБ/256 ГБ серый',
        description: 'Lenovo IdeaPad Slim 3 — компактный ноутбук с процессором Intel Core i3, дисплеем 15.6″ FHD и операционной системой Windows 11.',
        price: 299500,
        rating: 4.4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pb9/pd6/14230494.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pb9/pd6/14230494.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p9d/pd6/14230495.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p1e/p88/14230515.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-3-15ian8-15-6-8-gb-ssd-256-gb-bez-os-82xb007vrk-131728751/'
      },
      {
        id: 9,
        categoryId: 2,
        likes: 0,
        name: 'Ноутбук HP Laptop 15 AMD Ryzen 5 8 ГБ/512 ГБ серебристый',
        description: 'HP Laptop 15 с AMD Ryzen 5 — надёжный ноутбук для работы и учёбы с дисплеем FHD 15.6″, встроенной графикой Radeon и Windows 11.',
        price: 279008,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p83/p5b/12220136.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p83/p5b/12220136.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p9f/p5b/12220137.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pbb/p5b/12220138.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/hp-15-fc0056ci-15-6-8-gb-ssd-512-gb-win-11-b49dsea-131142189/'
      },
      {
        id: 10,
        categoryId: 2,
        likes: 0,
        name: 'Ноутбук ACER Aspire 3 Intel Core i5 16 ГБ/512 ГБ черный',
        description: 'Acer Aspire 3 — практичный ноутбук с процессором Intel Core i5, графикой Intel Iris Xe и дисплеем FHD IPS 15.6″.',
        price: 259990,
        rating: 4.3,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hf4/85283278061598.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h1d/hf4/85283278061598.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h5f/hb9/85284432871454.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h7b/h06/85283278258206.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-16-gb-ssd-512-gb-dos-a315-24p-nx-kdeer-00k-116998386/'
      },
      {
        id: 11,
        categoryId: 3,
        likes: 0,
        name: 'Наушники Sony WH-1000XM5 черные',
        description: 'Sony WH-1000XM5 — наушники с лучшим в классе шумоподавлением, Hi-Res Audio и временем работы до 30 часов.',
        price: 134999,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h0d/h4e/65099689000990.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105259822/'
      },
      {
        id: 12,
        categoryId: 3,
        likes: 0,
        name: 'Наушники Apple AirPods Pro 2 белые',
        description: 'AirPods Pro 2-го поколения с активным шумоподавлением, адаптивным прозрачным режимом и до 6 часов прослушивания.',
        price: 100017,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=191010000'
      },
      {
        id: 13,
        categoryId: 3,
        likes: 0,
        name: 'Наушники JBL Tune 770NC черные',
        description: 'JBL Tune 770NC — беспроводные наушники с адаптивным шумоподавлением, чистым звуком JBL и до 70 часов работы.',
        price: 33998,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h78/82294170255390.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hcb/h78/82294170255390.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h5e/h26/82294170779678.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h69/h5f/82294171303966.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/jbl-tune-770nc-chernyi-112143394/'
      },
      {
        id: 14,
        categoryId: 3,
        likes: 0,
        name: 'Наушники Samsung Galaxy Buds3 Pro белые',
        description: 'Galaxy Buds3 Pro — флагманские TWS-наушники Samsung с интеллектуальным шумоподавлением и звуком Hi-Fi.',
        price: 74999,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h74/h34/86487967432734.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h74/h34/86487967432734.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h4f/ha7/86487967694878.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h21/h1b/86487967760414.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds3-pro-belyi-121198942/'
      },
      {
        id: 15,
        categoryId: 3,
        likes: 0,
        name: 'Наушники Xiaomi Redmi Buds 5 белые',
        description: 'Xiaomi Redmi Buds 5 — доступные TWS-наушники с активным шумоподавлением 46 дБ, временем работы до 40 часов и быстрой зарядкой.',
        price: 22990,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pff/p59/4441549.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pff/p59/4441549.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p18/p14/4441431.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pc8/p66/4442395.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-buds-5-belyi-113969776/'
      },
      {
        id: 16,
        categoryId: 4,
        likes: 0,
        name: 'Планшет Apple iPad Air 11 M2 8 ГБ/128 ГБ синий',
        description: 'iPad Air 11 на чипе M2 — мощный планшет с дисплеем Liquid Retina 11″, поддержкой Apple Pencil Pro и Magic Keyboard.',
        price: 406570,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p6e/pf7/37022366.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p6e/pf7/37022366.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pc2/pf7/37022369.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pc2/pf7/37022369.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-256-gb-sinii-138203304/?c=191010000'
      },
      {
        id: 17,
        categoryId: 4,
        likes: 0,
        name: 'Планшет Samsung Galaxy Tab S9 FE 6 ГБ/128 ГБ серый',
        description: 'Samsung Galaxy Tab S9 FE — планшет с дисплеем TFT 10.9″ 90 Гц, поддержкой S Pen в комплекте и защитой IP68.',
        price: 199990,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h77/84605733765150.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h2b/h77/84605733765150.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pff/p45/78320678.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pe3/p45/78320679.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-fe-5g-10-9-djuim-6-gb-128-gb-serebristyi-114962698/'
      },
      {
        id: 18,
        categoryId: 4,
        likes: 0,
        name: 'Планшет Xiaomi Pad 6 8 ГБ/256 ГБ золотистый',
        description: 'Xiaomi Pad 6 — мощный планшет с процессором Snapdragon 870, дисплеем 2.8K 144 Гц и батареей 8840 мА·ч.',
        price: 175048,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h10/h9b/82746421674014.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h10/h9b/82746421674014.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p30/pa5/78318573.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p4c/pa5/78318574.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-zolotistyi-112468463/'
      },
      {
        id: 19,
        categoryId: 4,
        likes: 0,
        name: 'Планшет Lenovo Tab M11 4 ГБ/128 ГБ серый',
        description: 'Lenovo Tab M11 — доступный планшет с дисплеем 11″ 90 Гц, стереодинамиками с Dolby Atmos и аккумулятором 7040 мА·ч.',
        price: 112888,
        rating: 4.3,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha7/h11/86954842161182.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/ha7/h11/86954842161182.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hdc/h58/86954842226718.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h80/h0c/86954842357790.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/lenovo-tab-m11-zada0139ru-11-djuim-4-gb-128-gb-seryi-122921733/'
      },
      {
        id: 20,
        categoryId: 4,
        likes: 0,
        name: 'Планшет HUAWEI MatePad 11.5 8 ГБ/128 ГБ серый',
        description: 'HUAWEI MatePad 11.5 — планшет с ярким PaperMatte дисплеем 2200×1440, поддержкой HUAWEI M-Pencil и мощным Kirin 9000W.',
        price: 159990,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p12/p46/65766777.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p12/p46/65766777.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pd6/p0b/65766807.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p40/p0f/65766817.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-2025-papermatte-11-5-djuim-8-gb-256-gb-seryi-podarok-145939457/?c=191010000'
      }
    ];
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.getProducts().filter(p => p.categoryId === categoryId);
  }
}