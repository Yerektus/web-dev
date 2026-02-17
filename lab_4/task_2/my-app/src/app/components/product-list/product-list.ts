import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: "Смартфон INOI A52 Lite 1 ГБ/32 ГБ синий",
      description: "Смартфон INOI A52 Lite создан с вниманием к деталям. Гладкие плавные линии корпуса позволяют комфортно держать его в руке, а благодаря тонкой рамке дисплея и максимальной площади полезного пространства INOI A52 Lite 32GB выделит тебя из толпы.",
      price: 35000,
      rating: 4.0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h6e/hb6/86036254621726.jpg?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h6e/hb6/86036254621726.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h6a/h86/86036254654494.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h69/h84/86036254687262.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/inoi-a52-lite-1-gb-32-gb-sinii-105409565/?c=191010000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LNXdRjRE_XI8LIJxLXZqJXCb1tWy5uEPtM6G6VYo38gUKIZqVmVHdxoCnZMQAvD_BwE"
    },
    {
      id: 2,
      name: "Смартфон Samsung Galaxy Z Fold7 5G 12 ГБ/256 ГБ серебристый + подарок",
      description: "Samsung Galaxy Z Fold7 5G (12 ГБ/256 ГБ, цвет Silver Shadow) — это флагманский складной смартфон 2025 года, отличающийся самым легким и тонким корпусом в линейке. Устройство оснащено 8-дюймовым основным экраном Dynamic AMOLED 2X 120 Гц, мощным процессором Snapdragon 8 Elite и продвинутой 200-Мп основной камерой.",
      price: 1299993,
      rating: 5.0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pd2/p4b/62528339.png?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p85/p48/62528348.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p8c/p45/62528354.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p37/p45/62528357.png?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/samsung-galaxy-z-fold7-5g-12-gb-256-gb-serebristyi-podarok-145141026/?c=191010000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LNXdRjRE_XI8LIJxLXZqJXCb1tWy5uEPtM6G6VYo38gUKIZqVmVHdxoCnZMQAvD_BwE"
    },
    {
      id: 3,
      name: "Смартфон Apple iPhone 16 Pro Max 256Gb черный",
      description: "Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Iphone 16 pro max – настоящий титан в своем семействе.",
      price: 995000,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hfc/h0c/87295489441822.png?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=191010000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LNXdRjRE_XI8LIJxLXZqJXCb1tWy5uEPtM6G6VYo38gUKIZqVmVHdxoCnZMQAvD_BwE"
    },
        {
      id: 4,
      name: "Смартфон Poco X7 Pro 8 ГБ/256 ГБ черный",
      description: "Представляем Poco X7 Pro — смартфон, который сочетает в себе высокую производительность, современные технологии и стильный дизайн. С ним вы сможете наслаждаться яркими изображениями и быстрой работой приложений.",
      price: 179990,
      rating: 4.7,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p52/p6d/67021883.jpg?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/pdf/pb0/19761244.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p4f/p51/19761251.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p38/pa3/19761248.jpeg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/poco-x7-pro-8-gb-256-gb-chernyi-133335626/?c=191010000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LNXdRjRE_XI8LIJxLXZqJXCb1tWy5uEPtM6G6VYo38gUKIZqVmVHdxoCnZMQAvD_BwE"
    },
        {
      id: 5,
      name: "Смартфон Samsung Galaxy A36 5G 8 ГБ/256 ГБ фиолетовый",
      description: "Samsung Galaxy A36 5G — это мощный и стильный смартфон с поддержкой сетей 5G, который станет вашим надёжным помощником в повседневной жизни. Этот смартфон идеально подойдёт для тех, кто ценит высокую производительность, качественную фотосъёмку и современный дизайн.",
      price: 168002,
      rating: 4.4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p03/pc1/30502020.png?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p1f/pc1/30502021.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p74/pc1/30502024.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p6d/pc4/30502030.png?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/samsung-galaxy-a36-5g-8-gb-256-gb-fioletovyi-136422263/?c=191010000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LNXdRjRE_XI8LIJxLXZqJXCb1tWy5uEPtM6G6VYo38gUKIZqVmVHdxoCnZMQAvD_BwE"
    },
        {
      id: 6,
      name: "Смартфон Apple iPhone 17 Pro 256Gb оранжевый",
      description: "Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей. Этот смартфон идеально подходит для тех, кто ценит передовые технологии и безупречный дизайн.",
      price: 7500068,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pdf/p95/64168415.png?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=191010000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LNXdRjRE_XI8LIJxLXZqJXCb1tWy5uEPtM6G6VYo38gUKIZqVmVHdxoCnZMQAvD_BwE"
    },
        {
      id: 7,
      name: "Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ белый",
      description: "Xiaomi Redmi 13C 8 ГБ/256 ГБ — это универсальный смартфон для тех, кто ценит производительность и большой объем памяти в стильном корпусе. Этот смартфон станет отличным выбором для активных пользователей, которые любят фотографировать, смотреть видео и играть в игры.",
      price: 70739,
      rating: 4.5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h9c/h53/85284066590750.jpg?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/hde/hf7/85284066623518.jpg?format=gallery-medium",
        "hhttps://resources.cdn-kaspi.kz/img/m/p/hb6/h34/85284066656286.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h55/h91/85284066721822.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-belyi-114985314/?c=191010000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LNXdRjRE_XI8LIJxLXZqJXCb1tWy5uEPtM6G6VYo38gUKIZqVmVHdxoCnZMQAvD_BwE"
    },
        {
      id: 8,
      name: "Смартфон Vivo Y04 4 ГБ/128 ГБ золотистый",
      description: "Vivo Y04 — один из лучших смартфонов в своём сегменте, сочетающий современный дизайн, большой экран и сбалансированную производительность. Идеальный выбор для тех, кто ищет надёжный смартфон с большим экраном и мощной батареей по доступной цене.",
      price: 69989,
      rating: 4.3,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p2f/pea/39993021.jpeg?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p66/p18/39993024.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p4a/p18/39993023.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p2e/p18/39993022.png?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/vivo-y04-4-gb-128-gb-zolotistyi-138510267/?c=191010000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LNXdRjRE_XI8LIJxLXZqJXCb1tWy5uEPtM6G6VYo38gUKIZqVmVHdxoCnZMQAvD_BwE"
    },
        {
      id: 9,
      name: "Смартфон Samsung Galaxy A07 4 ГБ/64 ГБ зеленый",
      description: "Samsung Galaxy A07 (4/64 ГБ) в зеленом цвете — это доступный Android-смартфон 2025 года с большим 6,7-дюймовым PLS LCD экраном (90 Гц, HD+), энергоэффективным процессором MediaTek Helio G99 и емким аккумулятором 5000 мА·ч. Модель оснащена 50 Мп основной камерой, поддерживает быструю зарядку и имеет защиту от брызг IP54. ",
      price: 54985,
      rating: 3.0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pd4/p51/61291454.jpg?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p05/p55/61291446.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pe9/p54/61291447.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pf0/p51/61291453.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/samsung-galaxy-a07-4-gb-64-gb-zelenyi-144817804/?c=191010000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LNXdRjRE_XI8LIJxLXZqJXCb1tWy5uEPtM6G6VYo38gUKIZqVmVHdxoCnZMQAvD_BwE"
    },
        {
      id: 10,
      name: "Смартфон Huawei Mate XT Ultimate 16 ГБ/1024 ГБ красный + подарок",
      description: "Huawei Mate XT Ultimate (16/1024 ГБ, красный) — революционный складной смартфон-«трикладушка» с 10.2-дюймовым OLED-экраном (2232x3184), работающий на Kirin 9010. Устройство предлагает премиальный дизайн с кованой текстурой, камеру 50 Мп с переменной диафрагмой, батарею 5600 мАч (66 Вт) и гибкие режимы использования (один/два/три экрана). ",
      price: 549990,
      rating: 0.0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pd8/p7f/42733335.jpg?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p2c/p80/42733338.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p24/p77/42733339.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p10/p80/42733337.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/huawei-mate-xt-ultimate-16-gb-1024-gb-krasnyi-podarok-139796739/?c=191010000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LNXdRjRE_XI8LIJxLXZqJXCb1tWy5uEPtM6G6VYo38gUKIZqVmVHdxoCnZMQAvD_BwE"
    }

  ];
}