export const providers = [
  {
    id: 0,
    name: "МТС",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/MTS_logo_2015.svg/2560px-MTS_logo_2015.svg.png",
  },
  {
    id: 1,
    name: "Билайн",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/74/Beeline_logo.jpg",
  },
  {
    id: 2,
    name: "Мегафон",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/MegaFon_sign%2Blogo_horiz_green_RU_%28RGB%29.svg/2560px-MegaFon_sign%2Blogo_horiz_green_RU_%28RGB%29.svg.png",
  },
];

export enum Tips {
  "REQUIRED" = "Обязательное поле",
  "PHONE" = "Слишком короткое значение",
  "MAX" = "Максимальное значение 1000",
  "MIN" = "Минимальное значение 1",
}
