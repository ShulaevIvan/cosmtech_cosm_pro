const cityBase = [
    {
      "coords": {
        "lat": "52.65",
        "lon": "90.083333333333"
      },
      "district": "Сибирский",
      "name": "Абаза",
      "population": 12272,
      "range": 5200,
      "subject": "Хакасия"
    },
    {
      "coords": {
        "lat": "53.71667",
        "lon": "91.41667"
      },
      "district": "Сибирский",
      "name": "Абакан",
      "population": 184769,
      "range": 3651,
      "subject": "Хакасия"
    },
    {
      "coords": {
        "lat": "53.68333",
        "lon": "53.65"
      },
      "district": "Приволжский",
      "name": "Абдулино",
      "population": 17274,
      "range": 1569,
      "subject": "Оренбургская область"
    },
    {
      "coords": {
        "lat": "44.86667",
        "lon": "38.16667"
      },
      "district": "Южный",
      "name": "Абинск",
      "population": 39511,
      "range": 1750,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "55.9",
        "lon": "53.93333"
      },
      "district": "Приволжский",
      "name": "Агидель",
      "population": 14219,
      "range": 5200,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "56.51667",
        "lon": "52.98333"
      },
      "district": "Приволжский",
      "name": "Агрыз",
      "population": 19991,
      "range": 1372,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "44.884525",
        "lon": "39.19202"
      },
      "district": "Южный",
      "name": "Адыгейск",
      "population": 13175,
      "range": 1843,
      "subject": "Адыгея"
    },
    {
      "coords": {
        "lat": "54.85",
        "lon": "53.06667"
      },
      "district": "Приволжский",
      "name": "Азнакаево",
      "population": 34750,
      "range": 1465,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "47.1",
        "lon": "39.41667"
      },
      "district": "Южный",
      "name": "Азов",
      "population": 81924,
      "range": 1540,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "51.16667",
        "lon": "90.6"
      },
      "district": "Сибирский",
      "name": "Ак-Довурак",
      "population": 12456,
      "range": 3776,
      "subject": "Тыва"
    },
    {
      "coords": {
        "lat": "47.26667",
        "lon": "39.86667"
      },
      "district": "Южный",
      "name": "Аксай",
      "population": 48372,
      "range": 1535,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "43.04167",
        "lon": "44.21056"
      },
      "district": "Северо-Кавказский",
      "name": "Алагир",
      "population": 21550,
      "range": 2096,
      "subject": "Северная Осетия"
    },
    {
      "coords": {
        "lat": "57.85",
        "lon": "61.7"
      },
      "district": "Уральский",
      "name": "Алапаевск",
      "population": 36189,
      "range": 1802,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "54.85",
        "lon": "46.58333"
      },
      "district": "Приволжский",
      "name": "Алатырь",
      "population": 32265,
      "range": 1782,
      "subject": "Чувашия"
    },
    {
      "coords": {
        "lat": "58.6",
        "lon": "125.38333"
      },
      "district": "Дальневосточный",
      "name": "Алдан",
      "population": 21590,
      "range": 4939,
      "subject": "Якутия"
    },
    {
      "coords": {
        "lat": "52.5",
        "lon": "82.78333"
      },
      "district": "Сибирский",
      "name": "Алейск",
      "population": 25380,
      "range": 3259,
      "subject": "Алтайский край"
    },
    {
      "coords": {
        "lat": "56.39361",
        "lon": "38.715"
      },
      "district": "Центральный",
      "name": "Александров",
      "population": 57053,
      "range": 625,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "50.9",
        "lon": "142.15"
      },
      "district": "Дальневосточный",
      "name": "Александровск-Сахалинский",
      "population": 8854,
      "range": 6278,
      "subject": "Сахалинская область"
    },
    {
      "coords": {
        "lat": "59.16667",
        "lon": "57.58333"
      },
      "district": "Приволжский",
      "name": "Александровск",
      "population": 10780,
      "range": 1529,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "50.63",
        "lon": "38.68639"
      },
      "district": "Центральный",
      "name": "Алексеевка",
      "population": 36578,
      "range": 1156,
      "subject": "Белгородская область"
    },
    {
      "coords": {
        "lat": "54.5",
        "lon": "37.06667"
      },
      "district": "Центральный",
      "name": "Алексин",
      "population": 60842,
      "range": 722,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "55.55",
        "lon": "98.66667"
      },
      "district": "Сибирский",
      "name": "Алзамай",
      "population": 5373,
      "range": 3910,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "44.41972",
        "lon": "34.04306"
      },
      "district": "Южный",
      "name": "Алупка",
      "population": 9063,
      "range": 1739,
      "subject": "Крым"
    },
    {
      "coords": {
        "lat": "44.66722",
        "lon": "34.39778"
      },
      "district": "Южный",
      "name": "Алушта",
      "population": 31364,
      "range": 1714,
      "subject": "Крым"
    },
    {
      "coords": {
        "lat": "54.9",
        "lon": "52.3"
      },
      "district": "Приволжский",
      "name": "Альметьевск",
      "population": 163512,
      "range": 1420,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "50.21667",
        "lon": "136.9"
      },
      "district": "Дальневосточный",
      "name": "Амурск",
      "population": 38606,
      "range": 6126,
      "subject": "Хабаровский край"
    },
    {
      "coords": {
        "lat": "64.73333",
        "lon": "177.51667"
      },
      "district": "Дальневосточный",
      "name": "Анадырь",
      "population": 13202,
      "range": 5902,
      "subject": "Чукотский АО"
    },
    {
      "coords": {
        "lat": "44.893857",
        "lon": "37.317481"
      },
      "district": "Южный",
      "name": "Анапа",
      "population": 81863,
      "range": 1732,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "52.56667",
        "lon": "103.91667"
      },
      "district": "Сибирский",
      "name": "Ангарск",
      "population": 221296,
      "range": 4385,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "56.65",
        "lon": "32.26667"
      },
      "district": "Центральный",
      "name": "Андреаполь",
      "population": 6956,
      "range": 378,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "56.08333",
        "lon": "86.03333"
      },
      "district": "Сибирский",
      "name": "Анжеро-Судженск",
      "population": 66583,
      "range": 3217,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "46.71667",
        "lon": "142.51667"
      },
      "district": "Дальневосточный",
      "name": "Анива",
      "population": 9638,
      "range": 6680,
      "subject": "Сахалинская область"
    },
    {
      "coords": {
        "lat": "67.5675",
        "lon": "33.39333"
      },
      "district": "Северо-Западный",
      "name": "Апатиты",
      "population": 49647,
      "range": 868,
      "subject": "Мурманская область"
    },
    {
      "coords": {
        "lat": "55.53333",
        "lon": "37.05"
      },
      "district": "Центральный",
      "name": "Апрелевка",
      "population": 35514,
      "range": 626,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "44.46083",
        "lon": "39.74056"
      },
      "district": "Южный",
      "name": "Апшеронск",
      "population": 40289,
      "range": 1827,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "56.7",
        "lon": "60.83333"
      },
      "district": "Уральский",
      "name": "Арамиль",
      "population": 19013,
      "range": 1802,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "43.292095",
        "lon": "45.876622"
      },
      "district": "Северо-Кавказский",
      "name": "Аргун",
      "population": 41622,
      "range": 2123,
      "subject": "Чечня"
    },
    {
      "coords": {
        "lat": "54.85",
        "lon": "46.23333"
      },
      "district": "Приволжский",
      "name": "Ардатов",
      "population": 8857,
      "range": 1102,
      "subject": "Мордовия"
    },
    {
      "coords": {
        "lat": "43.17278",
        "lon": "44.29222"
      },
      "district": "Северо-Кавказский",
      "name": "Ардон",
      "population": 18956,
      "range": 2085,
      "subject": "Северная Осетия"
    },
    {
      "coords": {
        "lat": "55.38333",
        "lon": "43.8"
      },
      "district": "Приволжский",
      "name": "Арзамас",
      "population": 104908,
      "range": 942,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "51.93333",
        "lon": "43.5"
      },
      "district": "Приволжский",
      "name": "Аркадак",
      "population": 10990,
      "range": 1202,
      "subject": "Саратовская область"
    },
    {
      "coords": {
        "lat": "44.99464",
        "lon": "41.12946"
      },
      "district": "Южный",
      "name": "Армавир",
      "population": 187177,
      "range": 1805,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "46.10694",
        "lon": "33.69306"
      },
      "district": "Южный",
      "name": "Армянск",
      "population": 20692,
      "range": 1549,
      "subject": "Крым"
    },
    {
      "coords": {
        "lat": "44.16667",
        "lon": "133.26667"
      },
      "district": "Дальневосточный",
      "name": "Арсеньев",
      "population": 47937,
      "range": 6514,
      "subject": "Приморский край"
    },
    {
      "coords": {
        "lat": "56.09056",
        "lon": "49.87639"
      },
      "district": "Приволжский",
      "name": "Арск",
      "population": 20421,
      "range": 1221,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "43.35",
        "lon": "132.18333"
      },
      "district": "Дальневосточный",
      "name": "Артём",
      "population": 109556,
      "range": 6537,
      "subject": "Приморский край"
    },
    {
      "coords": {
        "lat": "54.35",
        "lon": "93.43333"
      },
      "district": "Сибирский",
      "name": "Артёмовск",
      "population": 1510,
      "range": 3717,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "57.33639",
        "lon": "61.89194"
      },
      "district": "Уральский",
      "name": "Артёмовский",
      "population": 28943,
      "range": 1834,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "64.55",
        "lon": "40.53333"
      },
      "district": "Северо-Западный",
      "name": "Архангельск",
      "population": 301199,
      "range": 737,
      "subject": "Архангельская область"
    },
    {
      "coords": {
        "lat": "57.01027679",
        "lon": "61.45639038"
      },
      "district": "Уральский",
      "name": "Асбест",
      "population": 57317,
      "range": 1823,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "57",
        "lon": "86.15"
      },
      "district": "Сибирский",
      "name": "Асино",
      "population": 24913,
      "range": 3173,
      "subject": "Томская область"
    },
    {
      "coords": {
        "lat": "46.33333",
        "lon": "48.03333"
      },
      "district": "Южный",
      "name": "Астрахань",
      "population": 475629,
      "range": 1901,
      "subject": "Астраханская область"
    },
    {
      "coords": {
        "lat": "51.86667",
        "lon": "45"
      },
      "district": "Приволжский",
      "name": "Аткарск",
      "population": 22709,
      "range": 1272,
      "subject": "Саратовская область"
    },
    {
      "coords": {
        "lat": "48.28333",
        "lon": "46.16667"
      },
      "district": "Южный",
      "name": "Ахтубинск",
      "population": 35635,
      "range": 1644,
      "subject": "Астраханская область"
    },
    {
      "coords": {
        "lat": "56.26667",
        "lon": "90.5"
      },
      "district": "Сибирский",
      "name": "Ачинск",
      "population": 100621,
      "range": 3443,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "43.189155",
        "lon": "45.284741"
      },
      "district": "Северо-Кавказский",
      "name": "Ачхой-Мартан",
      "population": 30739,
      "range": 2114,
      "subject": "Чечня"
    },
    {
      "coords": {
        "lat": "55",
        "lon": "57.25"
      },
      "district": "Уральский",
      "name": "Аша",
      "population": 27890,
      "range": 1689,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "59.38333",
        "lon": "35.95"
      },
      "district": "Северо-Западный",
      "name": "Бабаево",
      "population": 11739,
      "range": 317,
      "subject": "Вологодская область"
    },
    {
      "coords": {
        "lat": "51.71667",
        "lon": "105.86667"
      },
      "district": "Сибирский",
      "name": "Бабушкин",
      "population": 4368,
      "range": 0,
      "subject": "Бурятия"
    },
    {
      "coords": {
        "lat": "54.4",
        "lon": "53.25"
      },
      "district": "Приволжский",
      "name": "Бавлы",
      "population": 21628,
      "range": 1501,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "54.38333",
        "lon": "20.63333"
      },
      "district": "Северо-Западный",
      "name": "Багратионовск",
      "population": 6417,
      "range": 850,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "51.51722",
        "lon": "104.15611"
      },
      "district": "Сибирский",
      "name": "Байкальск",
      "population": 13199,
      "range": 4473,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "52.58333",
        "lon": "58.31667"
      },
      "district": "Приволжский",
      "name": "Баймак",
      "population": 17833,
      "range": 1892,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "54.93333",
        "lon": "58.8"
      },
      "district": "Уральский",
      "name": "Бакал",
      "population": 16345,
      "range": 1777,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "43.683333",
        "lon": "43.533333"
      },
      "district": "Северо-Кавказский",
      "name": "Баксан",
      "population": 39593,
      "range": 2010,
      "subject": "Кабардино-Балкария"
    },
    {
      "coords": {
        "lat": "55.18333",
        "lon": "36.65"
      },
      "district": "Центральный",
      "name": "Балабаново",
      "population": 29029,
      "range": 644,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "44.5",
        "lon": "33.6"
      },
      "district": "Южный",
      "name": "Балаклава",
      "population": 35919,
      "range": 1725,
      "subject": "Севастополь"
    },
    {
      "coords": {
        "lat": "52.03333",
        "lon": "47.78333"
      },
      "district": "Приволжский",
      "name": "Балаково",
      "population": 184466,
      "range": 1390,
      "subject": "Саратовская область"
    },
    {
      "coords": {
        "lat": "56.48083",
        "lon": "43.54028"
      },
      "district": "Приволжский",
      "name": "Балахна",
      "population": 48569,
      "range": 861,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "55.8",
        "lon": "37.93333"
      },
      "district": "Центральный",
      "name": "Балашиха",
      "population": 520962,
      "range": 638,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "51.55",
        "lon": "43.16667"
      },
      "district": "Приволжский",
      "name": "Балашов",
      "population": 74057,
      "range": 1222,
      "subject": "Саратовская область"
    },
    {
      "coords": {
        "lat": "51.57694",
        "lon": "116.64917"
      },
      "district": "Сибирский",
      "name": "Балей",
      "population": 10286,
      "range": 5095,
      "subject": "Забайкальский край"
    },
    {
      "coords": {
        "lat": "54.65",
        "lon": "19.91667"
      },
      "district": "Северо-Западный",
      "name": "Балтийск",
      "population": 26796,
      "range": 861,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "55.35",
        "lon": "78.35"
      },
      "district": "Сибирский",
      "name": "Барабинск",
      "population": 27648,
      "range": 2842,
      "subject": "Новосибирская область"
    },
    {
      "coords": {
        "lat": "53.347361",
        "lon": "83.77833"
      },
      "district": "Сибирский",
      "name": "Барнаул",
      "population": 630877,
      "range": 3259,
      "subject": "Алтайский край"
    },
    {
      "coords": {
        "lat": "53.65",
        "lon": "47.11667"
      },
      "district": "Приволжский",
      "name": "Барыш",
      "population": 14924,
      "range": 1229,
      "subject": "Ульяновская область"
    },
    {
      "coords": {
        "lat": "47.13333",
        "lon": "39.75"
      },
      "district": "Южный",
      "name": "Батайск",
      "population": 126988,
      "range": 1545,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "44.75278",
        "lon": "33.86083"
      },
      "district": "Южный",
      "name": "Бахчисарай",
      "population": 28609,
      "range": 1701,
      "subject": "Крым"
    },
    {
      "coords": {
        "lat": "57.78333",
        "lon": "36.7"
      },
      "district": "Центральный",
      "name": "Бежецк",
      "population": 21466,
      "range": 432,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "48.17472",
        "lon": "40.79306"
      },
      "district": "Южный",
      "name": "Белая Калитва",
      "population": 40448,
      "range": 1467,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "58.83333",
        "lon": "50.85"
      },
      "district": "Приволжский",
      "name": "Белая Холуница",
      "population": 9659,
      "range": 1164,
      "subject": "Кировская область"
    },
    {
      "coords": {
        "lat": "50.6",
        "lon": "36.6"
      },
      "district": "Центральный",
      "name": "Белгород",
      "population": 339978,
      "range": 1106,
      "subject": "Белгородская область"
    },
    {
      "coords": {
        "lat": "54.1",
        "lon": "54.13333"
      },
      "district": "Приволжский",
      "name": "Белебей",
      "population": 59195,
      "range": 1567,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "52.96667",
        "lon": "43.41667"
      },
      "district": "Приволжский",
      "name": "Белинский",
      "population": 8656,
      "range": 1110,
      "subject": "Пензенская область"
    },
    {
      "coords": {
        "lat": "54.416666666667",
        "lon": "86.3"
      },
      "district": "Сибирский",
      "name": "Белово",
      "population": 68542,
      "range": 3330,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "50.91667",
        "lon": "128.48333"
      },
      "district": "Дальневосточный",
      "name": "Белогорск",
      "population": 61440,
      "range": 5701,
      "subject": "Амурская область"
    },
    {
      "coords": {
        "lat": "45.05444",
        "lon": "34.60222"
      },
      "district": "Южный",
      "name": "Белогорск",
      "population": 17445,
      "range": 1674,
      "subject": "Крым"
    },
    {
      "coords": {
        "lat": "60.03333",
        "lon": "37.78333"
      },
      "district": "Северо-Западный",
      "name": "Белозерск",
      "population": 8375,
      "range": 413,
      "subject": "Вологодская область"
    },
    {
      "coords": {
        "lat": "52",
        "lon": "84.98333"
      },
      "district": "Сибирский",
      "name": "Белокуриха",
      "population": 14735,
      "range": 3413,
      "subject": "Алтайский край"
    },
    {
      "coords": {
        "lat": "64.51667",
        "lon": "34.76667"
      },
      "district": "Северо-Западный",
      "name": "Беломорск",
      "population": 7708,
      "range": 566,
      "subject": "Карелия"
    },
    {
      "coords": {
        "lat": "55.46139",
        "lon": "38.44222"
      },
      "district": "Центральный",
      "name": "Белоозёрский",
      "population": 13737,
      "range": 687,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "53.96667",
        "lon": "58.4"
      },
      "district": "Приволжский",
      "name": "Белорецк",
      "population": 64525,
      "range": 1811,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "44.76667",
        "lon": "39.86667"
      },
      "district": "Южный",
      "name": "Белореченск",
      "population": 55870,
      "range": 1798,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "55.09167",
        "lon": "36.66667"
      },
      "district": "Центральный",
      "name": "Белоусово",
      "population": 10946,
      "range": 653,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "63.71667",
        "lon": "66.66667"
      },
      "district": "Уральский",
      "name": "Белоярский",
      "population": 19994,
      "range": 1931,
      "subject": "Ханты-Мансийский АО"
    },
    {
      "coords": {
        "lat": "55.83333",
        "lon": "32.93333"
      },
      "district": "Центральный",
      "name": "Белый",
      "population": 3125,
      "range": 476,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "53.8",
        "lon": "36.13333"
      },
      "district": "Центральный",
      "name": "Белёв",
      "population": 12846,
      "range": 761,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "54.75",
        "lon": "83.1"
      },
      "district": "Сибирский",
      "name": "Бердск",
      "population": 102850,
      "range": 3136,
      "subject": "Новосибирская область"
    },
    {
      "coords": {
        "lat": "59.40806",
        "lon": "56.80528"
      },
      "district": "Приволжский",
      "name": "Березники",
      "population": 138069,
      "range": 1475,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "55.66667",
        "lon": "86.25"
      },
      "district": "Сибирский",
      "name": "Берёзовский",
      "population": 44932,
      "range": 3254,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "56.9",
        "lon": "60.8"
      },
      "district": "Уральский",
      "name": "Берёзовский",
      "population": 59698,
      "range": 1792,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "43.18889",
        "lon": "44.521691"
      },
      "district": "Северо-Кавказский",
      "name": "Беслан",
      "population": 35929,
      "range": 2091,
      "subject": "Северная Осетия"
    },
    {
      "coords": {
        "lat": "52.51667",
        "lon": "85.16667"
      },
      "district": "Сибирский",
      "name": "Бийск",
      "population": 183852,
      "range": 3390,
      "subject": "Алтайский край"
    },
    {
      "coords": {
        "lat": "46.81667",
        "lon": "134.25"
      },
      "district": "Дальневосточный",
      "name": "Бикин",
      "population": 16240,
      "range": 6318,
      "subject": "Хабаровский край"
    },
    {
      "coords": {
        "lat": "68.05",
        "lon": "166.45"
      },
      "district": "Дальневосточный",
      "name": "Билибино",
      "population": 5546,
      "range": 5367,
      "subject": "Чукотский АО"
    },
    {
      "coords": {
        "lat": "48.78333",
        "lon": "132.93333"
      },
      "district": "Дальневосточный",
      "name": "Биробиджан",
      "population": 70064,
      "range": 6083,
      "subject": "Еврейская АО"
    },
    {
      "coords": {
        "lat": "55.41667",
        "lon": "55.53333"
      },
      "district": "Приволжский",
      "name": "Бирск",
      "population": 44295,
      "range": 1569,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "55.95",
        "lon": "97.81667"
      },
      "district": "Сибирский",
      "name": "Бирюсинск",
      "population": 8632,
      "range": 3840,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "50.65",
        "lon": "38.4"
      },
      "district": "Центральный",
      "name": "Бирюч",
      "population": 7114,
      "range": 1146,
      "subject": "Белгородская область"
    },
    {
      "coords": {
        "lat": "50.25778",
        "lon": "127.53639"
      },
      "district": "Дальневосточный",
      "name": "Благовещенск",
      "population": 241437,
      "range": 5716,
      "subject": "Амурская область"
    },
    {
      "coords": {
        "lat": "55.03333",
        "lon": "55.98333"
      },
      "district": "Приволжский",
      "name": "Благовещенск",
      "population": 35481,
      "range": 1613,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "45.1029039",
        "lon": "43.4251513"
      },
      "district": "Северо-Кавказский",
      "name": "Благодарный",
      "population": 30827,
      "range": 1862,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "51.09444",
        "lon": "40.03222"
      },
      "district": "Центральный",
      "name": "Бобров",
      "population": 20871,
      "range": 1150,
      "subject": "Воронежская область"
    },
    {
      "coords": {
        "lat": "56.78333",
        "lon": "62.05"
      },
      "district": "Уральский",
      "name": "Богданович",
      "population": 30142,
      "range": 1867,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "53.76667",
        "lon": "38.13333"
      },
      "district": "Центральный",
      "name": "Богородицк",
      "population": 29560,
      "range": 828,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "56.09972",
        "lon": "43.50722"
      },
      "district": "Приволжский",
      "name": "Богородск",
      "population": 35068,
      "range": 881,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "56.2",
        "lon": "89.51667"
      },
      "district": "Сибирский",
      "name": "Боготол",
      "population": 18206,
      "range": 3395,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "49.93333",
        "lon": "40.55"
      },
      "district": "Центральный",
      "name": "Богучар",
      "population": 14370,
      "range": 1282,
      "subject": "Воронежская область"
    },
    {
      "coords": {
        "lat": "57.85",
        "lon": "114.2"
      },
      "district": "Сибирский",
      "name": "Бодайбо",
      "population": 8921,
      "range": 4508,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "59.473576",
        "lon": "33.847675"
      },
      "district": "Северо-Западный",
      "name": "Бокситогорск",
      "population": 16185,
      "range": 199,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "54.96667",
        "lon": "49.03333"
      },
      "district": "Приволжский",
      "name": "Болгар",
      "population": 8285,
      "range": 1239,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "57.87083",
        "lon": "34.07361"
      },
      "district": "Центральный",
      "name": "Бологое",
      "population": 20234,
      "range": 307,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "55.66667",
        "lon": "84.4"
      },
      "district": "Сибирский",
      "name": "Болотное",
      "population": 15644,
      "range": 3152,
      "subject": "Новосибирская область"
    },
    {
      "coords": {
        "lat": "54.08333",
        "lon": "37.81667"
      },
      "district": "Центральный",
      "name": "Болохово",
      "population": 9339,
      "range": 788,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "53.45",
        "lon": "36"
      },
      "district": "Центральный",
      "name": "Болхов",
      "population": 9495,
      "range": 795,
      "subject": "Орловская область"
    },
    {
      "coords": {
        "lat": "43.11667",
        "lon": "132.35"
      },
      "district": "Дальневосточный",
      "name": "Большой Камень",
      "population": 41825,
      "range": 6567,
      "subject": "Приморский край"
    },
    {
      "coords": {
        "lat": "56.36028",
        "lon": "44.05917"
      },
      "district": "Приволжский",
      "name": "Бор",
      "population": 78372,
      "range": 894,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "50.38333",
        "lon": "116.53333"
      },
      "district": "Сибирский",
      "name": "Борзя",
      "population": 29596,
      "range": 5184,
      "subject": "Забайкальский край"
    },
    {
      "coords": {
        "lat": "51.36667",
        "lon": "42.08333"
      },
      "district": "Центральный",
      "name": "Борисоглебск",
      "population": 60687,
      "range": 1197,
      "subject": "Воронежская область"
    },
    {
      "coords": {
        "lat": "58.38694",
        "lon": "33.91139"
      },
      "district": "Северо-Западный",
      "name": "Боровичи",
      "population": 47883,
      "range": 261,
      "subject": "Новгородская область"
    },
    {
      "coords": {
        "lat": "55.2",
        "lon": "36.48333"
      },
      "district": "Центральный",
      "name": "Боровск",
      "population": 12598,
      "range": 636,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "55.9",
        "lon": "94.9"
      },
      "district": "Сибирский",
      "name": "Бородино",
      "population": 15174,
      "range": 3695,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "56.152",
        "lon": "101.633"
      },
      "district": "Сибирский",
      "name": "Братск",
      "population": 224071,
      "range": 4021,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "55.42278",
        "lon": "38.25889"
      },
      "district": "Центральный",
      "name": "Бронницы",
      "population": 21831,
      "range": 683,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "53.25",
        "lon": "34.36667"
      },
      "district": "Центральный",
      "name": "Брянск",
      "population": 379152,
      "range": 779,
      "subject": "Брянская область"
    },
    {
      "coords": {
        "lat": "54.53333",
        "lon": "52.78333"
      },
      "district": "Приволжский",
      "name": "Бугульма",
      "population": 81677,
      "range": 1469,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "53.61667",
        "lon": "52.41667"
      },
      "district": "Приволжский",
      "name": "Бугуруслан",
      "population": 43593,
      "range": 1505,
      "subject": "Оренбургская область"
    },
    {
      "coords": {
        "lat": "44.79",
        "lon": "44.14"
      },
      "district": "Северо-Кавказский",
      "name": "Будённовск",
      "population": 58103,
      "range": 1961,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "52.76667",
        "lon": "52.26667"
      },
      "district": "Приволжский",
      "name": "Бузулук",
      "population": 88341,
      "range": 1555,
      "subject": "Оренбургская область"
    },
    {
      "coords": {
        "lat": "54.96667",
        "lon": "48.28333"
      },
      "district": "Приволжский",
      "name": "Буинск",
      "population": 19968,
      "range": 1201,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "58.48333",
        "lon": "41.51667"
      },
      "district": "Центральный",
      "name": "Буй",
      "population": 20564,
      "range": 654,
      "subject": "Костромская область"
    },
    {
      "coords": {
        "lat": "42.81667",
        "lon": "47.11667"
      },
      "district": "Северо-Кавказский",
      "name": "Буйнакск",
      "population": 68121,
      "range": 2213,
      "subject": "Дагестан"
    },
    {
      "coords": {
        "lat": "50.825",
        "lon": "40.58889"
      },
      "district": "Центральный",
      "name": "Бутурлиновка",
      "population": 24397,
      "range": 1194,
      "subject": "Воронежская область"
    },
    {
      "coords": {
        "lat": "57.96667",
        "lon": "33.25"
      },
      "district": "Северо-Западный",
      "name": "Валдай",
      "population": 14074,
      "range": 269,
      "subject": "Новгородская область"
    },
    {
      "coords": {
        "lat": "50.18333",
        "lon": "38.11667"
      },
      "district": "Центральный",
      "name": "Валуйки",
      "population": 33032,
      "range": 1183,
      "subject": "Белгородская область"
    },
    {
      "coords": {
        "lat": "55.6",
        "lon": "31.2"
      },
      "district": "Центральный",
      "name": "Велиж",
      "population": 6293,
      "range": 480,
      "subject": "Смоленская область"
    },
    {
      "coords": {
        "lat": "56.35",
        "lon": "30.51667"
      },
      "district": "Северо-Западный",
      "name": "Великие Луки",
      "population": 86711,
      "range": 395,
      "subject": "Псковская область"
    },
    {
      "coords": {
        "lat": "58.525",
        "lon": "31.275"
      },
      "district": "Северо-Западный",
      "name": "Великий Новгород",
      "population": 224286,
      "range": 160,
      "subject": "Новгородская область"
    },
    {
      "coords": {
        "lat": "60.75889",
        "lon": "46.30389"
      },
      "district": "Северо-Западный",
      "name": "Великий Устюг",
      "population": 28670,
      "range": 882,
      "subject": "Вологодская область"
    },
    {
      "coords": {
        "lat": "61.06667",
        "lon": "42.1"
      },
      "district": "Северо-Западный",
      "name": "Вельск",
      "population": 21613,
      "range": 655,
      "subject": "Архангельская область"
    },
    {
      "coords": {
        "lat": "54.35",
        "lon": "38.26667"
      },
      "district": "Центральный",
      "name": "Венёв",
      "population": 12668,
      "range": 778,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "58.06667",
        "lon": "54.65"
      },
      "district": "Приволжский",
      "name": "Верещагино",
      "population": 22239,
      "range": 1401,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "55.33333",
        "lon": "36.18333"
      },
      "district": "Центральный",
      "name": "Верея",
      "population": 4906,
      "range": 613,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "53.88333",
        "lon": "59.21667"
      },
      "district": "Уральский",
      "name": "Верхнеуральск",
      "population": 8929,
      "range": 1861,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "57.38333",
        "lon": "59.93333"
      },
      "district": "Уральский",
      "name": "Верхний Тагил",
      "population": 10113,
      "range": 1723,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "56.05",
        "lon": "60.23333"
      },
      "district": "Уральский",
      "name": "Верхний Уфалей",
      "population": 22981,
      "range": 1798,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "56.966666666667",
        "lon": "60.583333333333"
      },
      "district": "Уральский",
      "name": "Верхняя Пышма",
      "population": 71335,
      "range": 1776,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "58.05",
        "lon": "60.55"
      },
      "district": "Уральский",
      "name": "Верхняя Салда",
      "population": 41034,
      "range": 1730,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "58.3574333",
        "lon": "59.8224444"
      },
      "district": "Уральский",
      "name": "Верхняя Тура",
      "population": 8554,
      "range": 1679,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "58.86667",
        "lon": "60.8"
      },
      "district": "Уральский",
      "name": "Верхотурье",
      "population": 6706,
      "range": 1717,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "67.55",
        "lon": "133.38333"
      },
      "district": "Дальневосточный",
      "name": "Верхоянск",
      "population": 828,
      "range": 4556,
      "subject": "Якутия"
    },
    {
      "coords": {
        "lat": "58.65",
        "lon": "37.26667"
      },
      "district": "Центральный",
      "name": "Весьегонск",
      "population": 6330,
      "range": 414,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "57.85556",
        "lon": "45.78111"
      },
      "district": "Приволжский",
      "name": "Ветлуга",
      "population": 7681,
      "range": 913,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "55.55",
        "lon": "37.7"
      },
      "district": "Центральный",
      "name": "Видное",
      "population": 101490,
      "range": 649,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "63.75",
        "lon": "121.61667"
      },
      "district": "Дальневосточный",
      "name": "Вилюйск",
      "population": 10032,
      "range": 4410,
      "subject": "Якутия"
    },
    {
      "coords": {
        "lat": "52.93333",
        "lon": "158.4"
      },
      "district": "Дальневосточный",
      "name": "Вилючинск",
      "population": 21774,
      "range": 6653,
      "subject": "Камчатский край"
    },
    {
      "coords": {
        "lat": "56.11667",
        "lon": "101.16667"
      },
      "district": "Сибирский",
      "name": "Вихоревка",
      "population": 21719,
      "range": 4000,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "57.2",
        "lon": "41.91667"
      },
      "district": "Центральный",
      "name": "Вичуга",
      "population": 30694,
      "range": 732,
      "subject": "Ивановская область"
    },
    {
      "coords": {
        "lat": "43.116666666667",
        "lon": "131.9"
      },
      "district": "Дальневосточный",
      "name": "Владивосток",
      "population": 603519,
      "range": 6545,
      "subject": "Приморский край"
    },
    {
      "coords": {
        "lat": "43.01667",
        "lon": "44.683315"
      },
      "district": "Северо-Кавказский",
      "name": "Владикавказ",
      "population": 295830,
      "range": 2112,
      "subject": "Северная Осетия"
    },
    {
      "coords": {
        "lat": "56.13333",
        "lon": "40.41667"
      },
      "district": "Центральный",
      "name": "Владимир",
      "population": 349951,
      "range": 723,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "48.71167",
        "lon": "44.51389"
      },
      "district": "Южный",
      "name": "Волгоград",
      "population": 1028036,
      "range": 1540,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "47.54",
        "lon": "42.20722"
      },
      "district": "Южный",
      "name": "Волгодонск",
      "population": 168048,
      "range": 1577,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "57.43333",
        "lon": "41.16667"
      },
      "district": "Центральный",
      "name": "Волгореченск",
      "population": 14355,
      "range": 680,
      "subject": "Костромская область"
    },
    {
      "coords": {
        "lat": "55.86667",
        "lon": "48.35"
      },
      "district": "Приволжский",
      "name": "Волжск",
      "population": 53013,
      "range": 1152,
      "subject": "Марий Эл"
    },
    {
      "coords": {
        "lat": "48.783333333333",
        "lon": "44.766666666667"
      },
      "district": "Южный",
      "name": "Волжский",
      "population": 321479,
      "range": 1542,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "59.216666666667",
        "lon": "39.9"
      },
      "district": "Северо-Западный",
      "name": "Вологда",
      "population": 313944,
      "range": 541,
      "subject": "Вологодская область"
    },
    {
      "coords": {
        "lat": "56.23333",
        "lon": "43.2"
      },
      "district": "Приволжский",
      "name": "Володарск",
      "population": 9705,
      "range": 856,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "56.03333",
        "lon": "35.95"
      },
      "district": "Центральный",
      "name": "Волоколамск",
      "population": 26389,
      "range": 540,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "59.447275",
        "lon": "29.484819"
      },
      "district": "Северо-Западный",
      "name": "Волосово",
      "population": 11931,
      "range": 72,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "59.900543",
        "lon": "32.352681"
      },
      "district": "Северо-Западный",
      "name": "Волхов",
      "population": 38511,
      "range": 109,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "59.93333",
        "lon": "60.05"
      },
      "district": "Уральский",
      "name": "Волчанск",
      "population": 8573,
      "range": 1146,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "52.05",
        "lon": "47.38333"
      },
      "district": "Приволжский",
      "name": "Вольск",
      "population": 55035,
      "range": 1367,
      "subject": "Саратовская область"
    },
    {
      "coords": {
        "lat": "67.5",
        "lon": "64.03333"
      },
      "district": "Северо-Западный",
      "name": "Воркута",
      "population": 56985,
      "range": 1836,
      "subject": "Коми"
    },
    {
      "coords": {
        "lat": "51.67167",
        "lon": "39.21056"
      },
      "district": "Центральный",
      "name": "Воронеж",
      "population": 1057681,
      "range": 1068,
      "subject": "Воронежская область"
    },
    {
      "coords": {
        "lat": "55.98333",
        "lon": "43.26667"
      },
      "district": "Приволжский",
      "name": "Ворсма",
      "population": 10162,
      "range": 875,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "55.32333",
        "lon": "38.68056"
      },
      "district": "Центральный",
      "name": "Воскресенск",
      "population": 95495,
      "range": 708,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "57.05",
        "lon": "54"
      },
      "district": "Приволжский",
      "name": "Воткинск",
      "population": 97471,
      "range": 1403,
      "subject": "Удмуртия"
    },
    {
      "coords": {
        "lat": "60.021321",
        "lon": "30.654084"
      },
      "district": "Северо-Западный",
      "name": "Всеволожск",
      "population": 79038,
      "range": 20,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "63.86667",
        "lon": "57.31667"
      },
      "district": "Северо-Западный",
      "name": "Вуктыл",
      "population": 9322,
      "range": 1470,
      "subject": "Коми"
    },
    {
      "coords": {
        "lat": "60.710496",
        "lon": "28.749781"
      },
      "district": "Северо-Западный",
      "name": "Выборг",
      "population": 72530,
      "range": 129,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "55.31944",
        "lon": "42.17306"
      },
      "district": "Приволжский",
      "name": "Выкса",
      "population": 45240,
      "range": 866,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "56.31667",
        "lon": "36.55"
      },
      "district": "Центральный",
      "name": "Высоковск",
      "population": 13081,
      "range": 538,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "60.625604",
        "lon": "28.568277"
      },
      "district": "Северо-Западный",
      "name": "Высоцк",
      "population": 1129,
      "range": 130,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "61",
        "lon": "36.45"
      },
      "district": "Северо-Западный",
      "name": "Вытегра",
      "population": 10386,
      "range": 355,
      "subject": "Вологодская область"
    },
    {
      "coords": {
        "lat": "57.58333",
        "lon": "34.56667"
      },
      "district": "Центральный",
      "name": "Вышний Волочёк",
      "population": 45830,
      "range": 352,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "47.53333",
        "lon": "134.75"
      },
      "district": "Дальневосточный",
      "name": "Вяземский",
      "population": 12775,
      "range": 6276,
      "subject": "Хабаровский край"
    },
    {
      "coords": {
        "lat": "56.24333",
        "lon": "42.12917"
      },
      "district": "Центральный",
      "name": "Вязники",
      "population": 36203,
      "range": 802,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "55.21028",
        "lon": "34.285"
      },
      "district": "Центральный",
      "name": "Вязьма",
      "population": 51950,
      "range": 571,
      "subject": "Смоленская область"
    },
    {
      "coords": {
        "lat": "56.218417",
        "lon": "51.068583"
      },
      "district": "Приволжский",
      "name": "Вятские Поляны",
      "population": 29742,
      "range": 1280,
      "subject": "Кировская область"
    },
    {
      "coords": {
        "lat": "56.56667",
        "lon": "40.11667"
      },
      "district": "Центральный",
      "name": "Гаврилов Посад",
      "population": 5429,
      "range": 680,
      "subject": "Ивановская область"
    },
    {
      "coords": {
        "lat": "57.3",
        "lon": "39.85"
      },
      "district": "Центральный",
      "name": "Гаврилов-Ям",
      "population": 16084,
      "range": 620,
      "subject": "Ярославская область"
    },
    {
      "coords": {
        "lat": "55.55",
        "lon": "35"
      },
      "district": "Центральный",
      "name": "Гагарин",
      "population": 26500,
      "range": 555,
      "subject": "Смоленская область"
    },
    {
      "coords": {
        "lat": "69.25528",
        "lon": "33.31667"
      },
      "district": "Северо-Западный",
      "name": "Гаджиево",
      "population": 9297,
      "range": 1052,
      "subject": "Мурманская область"
    },
    {
      "coords": {
        "lat": "51.46667",
        "lon": "58.45"
      },
      "district": "Приволжский",
      "name": "Гай",
      "population": 33280,
      "range": 1976,
      "subject": "Оренбургская область"
    },
    {
      "coords": {
        "lat": "58.38333",
        "lon": "42.35"
      },
      "district": "Центральный",
      "name": "Галич",
      "population": 12856,
      "range": 703,
      "subject": "Костромская область"
    },
    {
      "coords": {
        "lat": "59.56841",
        "lon": "30.122892"
      },
      "district": "Северо-Западный",
      "name": "Гатчина",
      "population": 94377,
      "range": 40,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "54.65",
        "lon": "21.06667"
      },
      "district": "Северо-Западный",
      "name": "Гвардейск",
      "population": 14122,
      "range": 810,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "58.73333",
        "lon": "27.81667"
      },
      "district": "Северо-Западный",
      "name": "Гдов",
      "population": 3455,
      "range": 195,
      "subject": "Псковская область"
    },
    {
      "coords": {
        "lat": "44.560999",
        "lon": "38.076949"
      },
      "district": "Южный",
      "name": "Геленджик",
      "population": 80204,
      "range": 1782,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "44.15",
        "lon": "43.46667"
      },
      "district": "Северо-Кавказский",
      "name": "Георгиевск",
      "population": 63221,
      "range": 1960,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "58.14083",
        "lon": "52.67417"
      },
      "district": "Приволжский",
      "name": "Глазов",
      "population": 87762,
      "range": 1288,
      "subject": "Удмуртия"
    },
    {
      "coords": {
        "lat": "55.61472",
        "lon": "36.98722"
      },
      "district": "Центральный",
      "name": "Голицыно",
      "population": 22733,
      "range": 616,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "56.13333",
        "lon": "43.06667"
      },
      "district": "Приволжский",
      "name": "Горбатов",
      "population": 2009,
      "range": 855,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "51.96",
        "lon": "85.96"
      },
      "district": "Сибирский",
      "name": "Горно-Алтайск",
      "population": 65342,
      "range": 3469,
      "subject": "Алтай"
    },
    {
      "coords": {
        "lat": "58.38333",
        "lon": "58.31667"
      },
      "district": "Приволжский",
      "name": "Горнозаводск",
      "population": 11073,
      "range": 1595,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "50.993028",
        "lon": "81.467934"
      },
      "district": "Сибирский",
      "name": "Горняк",
      "population": 10112,
      "range": 3284,
      "subject": "Алтайский край"
    },
    {
      "coords": {
        "lat": "56.65028",
        "lon": "43.47028"
      },
      "district": "Приволжский",
      "name": "Городец",
      "population": 28660,
      "range": 846,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "53.26667",
        "lon": "45.7"
      },
      "district": "Приволжский",
      "name": "Городище",
      "population": 7796,
      "range": 1190,
      "subject": "Пензенская область"
    },
    {
      "coords": {
        "lat": "46.08333",
        "lon": "41.93333"
      },
      "district": "Южный",
      "name": "Городовиковск",
      "population": 8285,
      "range": 1715,
      "subject": "Калмыкия"
    },
    {
      "coords": {
        "lat": "56.20278",
        "lon": "42.6925"
      },
      "district": "Центральный",
      "name": "Гороховец",
      "population": 12666,
      "range": 832,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "44.633284",
        "lon": "39.133287"
      },
      "district": "Южный",
      "name": "Горячий Ключ",
      "population": 40903,
      "range": 1796,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "50.48333",
        "lon": "35.66667"
      },
      "district": "Центральный",
      "name": "Грайворон",
      "population": 6179,
      "range": 1099,
      "subject": "Белгородская область"
    },
    {
      "coords": {
        "lat": "58.56667",
        "lon": "57.83333"
      },
      "district": "Приволжский",
      "name": "Гремячинск",
      "population": 8360,
      "range": 1562,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "43.31667",
        "lon": "45.7"
      },
      "district": "Северо-Кавказский",
      "name": "Грозный",
      "population": 328533,
      "range": 2115,
      "subject": "Чечня"
    },
    {
      "coords": {
        "lat": "52.5",
        "lon": "39.93333"
      },
      "district": "Центральный",
      "name": "Грязи",
      "population": 43908,
      "range": 1013,
      "subject": "Липецкая область"
    },
    {
      "coords": {
        "lat": "58.88333",
        "lon": "40.25"
      },
      "district": "Северо-Западный",
      "name": "Грязовец",
      "population": 14505,
      "range": 570,
      "subject": "Вологодская область"
    },
    {
      "coords": {
        "lat": "58.86667",
        "lon": "57.58333"
      },
      "district": "Приволжский",
      "name": "Губаха",
      "population": 23397,
      "range": 1537,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "51.28333",
        "lon": "37.55"
      },
      "district": "Центральный",
      "name": "Губкин",
      "population": 85225,
      "range": 1057,
      "subject": "Белгородская область"
    },
    {
      "coords": {
        "lat": "64.43333",
        "lon": "76.5"
      },
      "district": "Уральский",
      "name": "Губкинский",
      "population": 33273,
      "range": 2398,
      "subject": "Ямало-Ненецкий АО"
    },
    {
      "coords": {
        "lat": "43.34861",
        "lon": "46.09611"
      },
      "district": "Северо-Кавказский",
      "name": "Гудермес",
      "population": 64376,
      "range": 2125,
      "subject": "Чечня"
    },
    {
      "coords": {
        "lat": "48.05",
        "lon": "39.93333"
      },
      "district": "Южный",
      "name": "Гуково",
      "population": 60361,
      "range": 1454,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "45.36028",
        "lon": "40.69444"
      },
      "district": "Южный",
      "name": "Гулькевичи",
      "population": 33357,
      "range": 1756,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "54.76667",
        "lon": "20.6"
      },
      "district": "Северо-Западный",
      "name": "Гурьевск",
      "population": 26760,
      "range": 819,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "54.28333",
        "lon": "85.93333"
      },
      "district": "Сибирский",
      "name": "Гурьевск",
      "population": 22134,
      "range": 3318,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "54.58333",
        "lon": "22.2"
      },
      "district": "Северо-Западный",
      "name": "Гусев",
      "population": 29234,
      "range": 769,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "51.28556",
        "lon": "106.52917"
      },
      "district": "Сибирский",
      "name": "Гусиноозёрск",
      "population": 24451,
      "range": 4613,
      "subject": "Бурятия"
    },
    {
      "coords": {
        "lat": "55.61667",
        "lon": "40.65"
      },
      "district": "Центральный",
      "name": "Гусь-Хрустальный",
      "population": 51552,
      "range": 773,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "54.21667",
        "lon": "55.03333"
      },
      "district": "Приволжский",
      "name": "Давлеканово",
      "population": 21834,
      "range": 1610,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "42.11667",
        "lon": "48.2"
      },
      "district": "Северо-Кавказский",
      "name": "Дагестанские Огни",
      "population": 31412,
      "range": 2322,
      "subject": "Дагестан"
    },
    {
      "coords": {
        "lat": "56.26667",
        "lon": "62.91667"
      },
      "district": "Уральский",
      "name": "Далматово",
      "population": 11584,
      "range": 1940,
      "subject": "Курганская область"
    },
    {
      "coords": {
        "lat": "44.56667",
        "lon": "135.61667"
      },
      "district": "Дальневосточный",
      "name": "Дальнегорск",
      "population": 33655,
      "range": 6585,
      "subject": "Приморский край"
    },
    {
      "coords": {
        "lat": "45.93333",
        "lon": "133.73333"
      },
      "district": "Дальневосточный",
      "name": "Дальнереченск",
      "population": 23613,
      "range": 6375,
      "subject": "Приморский край"
    },
    {
      "coords": {
        "lat": "58.18333",
        "lon": "40.18333"
      },
      "district": "Центральный",
      "name": "Данилов",
      "population": 13677,
      "range": 591,
      "subject": "Ярославская область"
    },
    {
      "coords": {
        "lat": "53.25",
        "lon": "39.15"
      },
      "district": "Центральный",
      "name": "Данков",
      "population": 19726,
      "range": 913,
      "subject": "Липецкая область"
    },
    {
      "coords": {
        "lat": "56.7",
        "lon": "60.1"
      },
      "district": "Уральский",
      "name": "Дегтярск",
      "population": 15497,
      "range": 1760,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "55.86667",
        "lon": "37.13333"
      },
      "district": "Центральный",
      "name": "Дедовск",
      "population": 30731,
      "range": 600,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "55.26667",
        "lon": "31.51667"
      },
      "district": "Центральный",
      "name": "Демидов",
      "population": 6326,
      "range": 520,
      "subject": "Смоленская область"
    },
    {
      "coords": {
        "lat": "42.069825",
        "lon": "48.295025"
      },
      "district": "Северо-Кавказский",
      "name": "Дербент",
      "population": 124953,
      "range": 2331,
      "subject": "Дагестан"
    },
    {
      "coords": {
        "lat": "54.1530861",
        "lon": "33.2902917"
      },
      "district": "Центральный",
      "name": "Десногорск",
      "population": 25345,
      "range": 663,
      "subject": "Смоленская область"
    },
    {
      "coords": {
        "lat": "45.70861",
        "lon": "34.39333"
      },
      "district": "Южный",
      "name": "Джанкой",
      "population": 37014,
      "range": 1600,
      "subject": "Крым"
    },
    {
      "coords": {
        "lat": "56.23333",
        "lon": "43.45"
      },
      "district": "Приволжский",
      "name": "Дзержинск",
      "population": 218630,
      "range": 871,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "55.63333",
        "lon": "37.85"
      },
      "district": "Центральный",
      "name": "Дзержинский",
      "population": 57918,
      "range": 649,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "55.95",
        "lon": "92.38333"
      },
      "district": "Сибирский",
      "name": "Дивногорск",
      "population": 27477,
      "range": 3560,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "43.15",
        "lon": "44.15"
      },
      "district": "Северо-Кавказский",
      "name": "Дигора",
      "population": 9922,
      "range": 2082,
      "subject": "Северная Осетия"
    },
    {
      "coords": {
        "lat": "54.23333",
        "lon": "49.58333"
      },
      "district": "Приволжский",
      "name": "Димитровград",
      "population": 110968,
      "range": 1318,
      "subject": "Ульяновская область"
    },
    {
      "coords": {
        "lat": "52.12889",
        "lon": "35.07556"
      },
      "district": "Центральный",
      "name": "Дмитриев",
      "population": 6317,
      "range": 912,
      "subject": "Курская область"
    },
    {
      "coords": {
        "lat": "56.34667",
        "lon": "37.52167"
      },
      "district": "Центральный",
      "name": "Дмитров",
      "population": 65574,
      "range": 576,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "52.505504",
        "lon": "35.141478"
      },
      "district": "Центральный",
      "name": "Дмитровск",
      "population": 5202,
      "range": 893,
      "subject": "Орловская область"
    },
    {
      "coords": {
        "lat": "57.83333",
        "lon": "29.96667"
      },
      "district": "Северо-Западный",
      "name": "Дно",
      "population": 7850,
      "range": 251,
      "subject": "Псковская область"
    },
    {
      "coords": {
        "lat": "58.45",
        "lon": "56.41667"
      },
      "district": "Приволжский",
      "name": "Добрянка",
      "population": 28782,
      "range": 1487,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "55.93333",
        "lon": "37.5"
      },
      "district": "Центральный",
      "name": "Долгопрудный",
      "population": 120907,
      "range": 626,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "47.31667",
        "lon": "142.8"
      },
      "district": "Дальневосточный",
      "name": "Долинск",
      "population": 11740,
      "range": 6623,
      "subject": "Сахалинская область"
    },
    {
      "coords": {
        "lat": "55.44389",
        "lon": "37.75806"
      },
      "district": "Центральный",
      "name": "Домодедово",
      "population": 152404,
      "range": 686,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "48.33694",
        "lon": "39.945"
      },
      "district": "Южный",
      "name": "Донецк",
      "population": 46623,
      "range": 1426,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "53.96667",
        "lon": "38.31667"
      },
      "district": "Центральный",
      "name": "Донской",
      "population": 63837,
      "range": 834,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "54.92",
        "lon": "33.307777777778"
      },
      "district": "Центральный",
      "name": "Дорогобуж",
      "population": 9528,
      "range": 601,
      "subject": "Смоленская область"
    },
    {
      "coords": {
        "lat": "55.74444",
        "lon": "38.84944"
      },
      "district": "Центральный",
      "name": "Дрезна",
      "population": 12295,
      "range": 696,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "56.75",
        "lon": "37.15"
      },
      "district": "Центральный",
      "name": "Дубна",
      "population": 74183,
      "range": 544,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "49.05",
        "lon": "44.83333"
      },
      "district": "Южный",
      "name": "Дубовка",
      "population": 14779,
      "range": 1536,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "69.4",
        "lon": "86.18333"
      },
      "district": "Сибирский",
      "name": "Дудинка",
      "population": 19556,
      "range": 2736,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "55.2",
        "lon": "32.41667"
      },
      "district": "Центральный",
      "name": "Духовщина",
      "population": 3990,
      "range": 558,
      "subject": "Смоленская область"
    },
    {
      "coords": {
        "lat": "55.48333",
        "lon": "54.86667"
      },
      "district": "Приволжский",
      "name": "Дюртюли",
      "population": 31185,
      "range": 1535,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "53.6",
        "lon": "34.33333"
      },
      "district": "Центральный",
      "name": "Дятьково",
      "population": 25255,
      "range": 761,
      "subject": "Брянская область"
    },
    {
      "coords": {
        "lat": "45.2",
        "lon": "33.35833"
      },
      "district": "Южный",
      "name": "Евпатория",
      "population": 107877,
      "range": 1668,
      "subject": "Крым"
    },
    {
      "coords": {
        "lat": "55.38333",
        "lon": "39.03361"
      },
      "district": "Центральный",
      "name": "Егорьевск",
      "population": 71686,
      "range": 734,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "46.71056",
        "lon": "38.27778"
      },
      "district": "Южный",
      "name": "Ейск",
      "population": 82943,
      "range": 1575,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "56.83333",
        "lon": "60.58333"
      },
      "district": "Уральский",
      "name": "Екатеринбург",
      "population": 1544376,
      "range": 1785,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "55.76667",
        "lon": "52.03333"
      },
      "district": "Приволжский",
      "name": "Елабуга",
      "population": 73630,
      "range": 1366,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "52.61667",
        "lon": "38.46667"
      },
      "district": "Центральный",
      "name": "Елец",
      "population": 99875,
      "range": 969,
      "subject": "Липецкая область"
    },
    {
      "coords": {
        "lat": "53.18333",
        "lon": "158.38333"
      },
      "district": "Дальневосточный",
      "name": "Елизово",
      "population": 36240,
      "range": 6612,
      "subject": "Камчатский край"
    },
    {
      "coords": {
        "lat": "54.56667",
        "lon": "33.16667"
      },
      "district": "Центральный",
      "name": "Ельня",
      "population": 8332,
      "range": 635,
      "subject": "Смоленская область"
    },
    {
      "coords": {
        "lat": "54.75",
        "lon": "61.31667"
      },
      "district": "Уральский",
      "name": "Еманжелинск",
      "population": 27632,
      "range": 1932,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "62.58333",
        "lon": "50.85"
      },
      "district": "Северо-Западный",
      "name": "Емва",
      "population": 10994,
      "range": 1130,
      "subject": "Коми"
    },
    {
      "coords": {
        "lat": "58.46667",
        "lon": "92.13333"
      },
      "district": "Сибирский",
      "name": "Енисейск",
      "population": 17537,
      "range": 3400,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "55.20556",
        "lon": "36.57"
      },
      "district": "Центральный",
      "name": "Ермолино",
      "population": 10809,
      "range": 658,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "51.35",
        "lon": "48.28333"
      },
      "district": "Приволжский",
      "name": "Ершов",
      "population": 18095,
      "range": 1372,
      "subject": "Саратовская область"
    },
    {
      "coords": {
        "lat": "44.04306",
        "lon": "42.86417"
      },
      "district": "Северо-Кавказский",
      "name": "Ессентуки",
      "population": 119658,
      "range": 1971,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "53.149167",
        "lon": "38.082585"
      },
      "district": "Центральный",
      "name": "Ефремов",
      "population": 36545,
      "range": 906,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "44.13333",
        "lon": "43.03333"
      },
      "district": "Северо-Кавказский",
      "name": "Железноводск",
      "population": 22863,
      "range": 1967,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "56.58333",
        "lon": "104.11667"
      },
      "district": "Сибирский",
      "name": "Железногорск-Илимский",
      "population": 21621,
      "range": 4109,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "56.25",
        "lon": "93.53333"
      },
      "district": "Сибирский",
      "name": "Железногорск",
      "population": 82723,
      "range": 3598,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "52.339174",
        "lon": "35.351582"
      },
      "district": "Центральный",
      "name": "Железногорск",
      "population": 97038,
      "range": 915,
      "subject": "Курская область"
    },
    {
      "coords": {
        "lat": "51.83333",
        "lon": "41.46667"
      },
      "district": "Центральный",
      "name": "Жердевка",
      "population": 13883,
      "range": 1147,
      "subject": "Тамбовская область"
    },
    {
      "coords": {
        "lat": "53.4",
        "lon": "49.5"
      },
      "district": "Приволжский",
      "name": "Жигулёвск",
      "population": 50466,
      "range": 1379,
      "subject": "Самарская область"
    },
    {
      "coords": {
        "lat": "53.75028",
        "lon": "34.73611"
      },
      "district": "Центральный",
      "name": "Жиздра",
      "population": 5545,
      "range": 753,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "50.98028",
        "lon": "44.78083"
      },
      "district": "Южный",
      "name": "Жирновск",
      "population": 15555,
      "range": 1356,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "55.03333",
        "lon": "36.75"
      },
      "district": "Центральный",
      "name": "Жуков",
      "population": 16224,
      "range": 1679,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "53.53333",
        "lon": "33.73333"
      },
      "district": "Центральный",
      "name": "Жуковка",
      "population": 17628,
      "range": 757,
      "subject": "Брянская область"
    },
    {
      "coords": {
        "lat": "55.60111",
        "lon": "38.11611"
      },
      "district": "Центральный",
      "name": "Жуковский",
      "population": 111222,
      "range": 679,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "50.11667",
        "lon": "129.43333"
      },
      "district": "Дальневосточный",
      "name": "Завитинск",
      "population": 9615,
      "range": 5804,
      "subject": "Амурская область"
    },
    {
      "coords": {
        "lat": "56.5",
        "lon": "66.55"
      },
      "district": "Уральский",
      "name": "Заводоуковск",
      "population": 27100,
      "range": 2131,
      "subject": "Тюменская область"
    },
    {
      "coords": {
        "lat": "57.48333",
        "lon": "42.13333"
      },
      "district": "Центральный",
      "name": "Заволжск",
      "population": 8896,
      "range": 739,
      "subject": "Ивановская область"
    },
    {
      "coords": {
        "lat": "56.6425",
        "lon": "43.39278"
      },
      "district": "Приволжский",
      "name": "Заволжье",
      "population": 36763,
      "range": 852,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "52.38333",
        "lon": "38.91667"
      },
      "district": "Центральный",
      "name": "Задонск",
      "population": 9887,
      "range": 1006,
      "subject": "Липецкая область"
    },
    {
      "coords": {
        "lat": "55.3",
        "lon": "52.01667"
      },
      "district": "Приволжский",
      "name": "Заинск",
      "population": 39739,
      "range": 1389,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "50.38333",
        "lon": "103.28333"
      },
      "district": "Сибирский",
      "name": "Закаменск",
      "population": 11365,
      "range": 4510,
      "subject": "Бурятия"
    },
    {
      "coords": {
        "lat": "55.96667",
        "lon": "94.7"
      },
      "district": "Сибирский",
      "name": "Заозёрный",
      "population": 10573,
      "range": 3676,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "69.4",
        "lon": "32.45"
      },
      "district": "Северо-Западный",
      "name": "Заозёрск",
      "population": 7762,
      "range": 1045,
      "subject": "Мурманская область"
    },
    {
      "coords": {
        "lat": "56.26667",
        "lon": "32.08333"
      },
      "district": "Центральный",
      "name": "Западная Двина",
      "population": 7869,
      "range": 437,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "69.41667",
        "lon": "30.8"
      },
      "district": "Северо-Западный",
      "name": "Заполярный",
      "population": 14791,
      "range": 1043,
      "subject": "Мурманская область"
    },
    {
      "coords": {
        "lat": "54.76528",
        "lon": "38.88361"
      },
      "district": "Центральный",
      "name": "Зарайск",
      "population": 20736,
      "range": 782,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "53.2",
        "lon": "45.16667"
      },
      "district": "Приволжский",
      "name": "Заречный",
      "population": 58510,
      "range": 1184,
      "subject": "Пензенская область"
    },
    {
      "coords": {
        "lat": "56.81667",
        "lon": "61.31667"
      },
      "district": "Уральский",
      "name": "Заречный",
      "population": 28112,
      "range": 1827,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "53.7",
        "lon": "84.91667"
      },
      "district": "Сибирский",
      "name": "Заринск",
      "population": 41272,
      "range": 3299,
      "subject": "Алтайский край"
    },
    {
      "coords": {
        "lat": "55.96667",
        "lon": "48.01667"
      },
      "district": "Приволжский",
      "name": "Звенигово",
      "population": 10994,
      "range": 1139,
      "subject": "Марий Эл"
    },
    {
      "coords": {
        "lat": "55.73333",
        "lon": "36.85"
      },
      "district": "Центральный",
      "name": "Звенигород",
      "population": 35842,
      "range": 618,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "48.01667",
        "lon": "40.11667"
      },
      "district": "Южный",
      "name": "Зверево",
      "population": 19353,
      "range": 1481,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "56.1",
        "lon": "94.58333"
      },
      "district": "Сибирский",
      "name": "Зеленогорск",
      "population": 54279,
      "range": 3661,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "60.2",
        "lon": "29.7"
      },
      "district": "Северо-Западный",
      "name": "Зеленогорск",
      "population": 15613,
      "range": 38,
      "subject": "Санкт-Петербург"
    },
    {
      "coords": {
        "lat": "55.997917",
        "lon": "37.190417"
      },
      "district": "Центральный",
      "name": "Зеленоград",
      "population": 256775,
      "range": 609,
      "subject": "Москва"
    },
    {
      "coords": {
        "lat": "54.95",
        "lon": "20.48333"
      },
      "district": "Северо-Западный",
      "name": "Зеленоградск",
      "population": 16625,
      "range": 820,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "55.85",
        "lon": "48.51667"
      },
      "district": "Приволжский",
      "name": "Зеленодольск",
      "population": 99137,
      "range": 1168,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "44.4070115",
        "lon": "43.8731235"
      },
      "district": "Северо-Кавказский",
      "name": "Зеленокумск",
      "population": 33187,
      "range": 1965,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "46.846525",
        "lon": "40.3040333"
      },
      "district": "Южный",
      "name": "Зерноград",
      "population": 24076,
      "range": 1609,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "53.73333",
        "lon": "127.25"
      },
      "district": "Дальневосточный",
      "name": "Зея",
      "population": 19414,
      "range": 5400,
      "subject": "Амурская область"
    },
    {
      "coords": {
        "lat": "53.91667",
        "lon": "102.05"
      },
      "district": "Сибирский",
      "name": "Зима",
      "population": 30640,
      "range": 4188,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "55.16667",
        "lon": "59.66667"
      },
      "district": "Уральский",
      "name": "Златоуст",
      "population": 161774,
      "range": 1817,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "52.43333",
        "lon": "31.73333"
      },
      "district": "Центральный",
      "name": "Злынка",
      "population": 5270,
      "range": 856,
      "subject": "Брянская область"
    },
    {
      "coords": {
        "lat": "51.16667",
        "lon": "82.16667"
      },
      "district": "Сибирский",
      "name": "Змеиногорск",
      "population": 9410,
      "range": 3316,
      "subject": "Алтайский край"
    },
    {
      "coords": {
        "lat": "48.58333",
        "lon": "45.75"
      },
      "district": "Южный",
      "name": "Знаменск",
      "population": 24628,
      "range": 1615,
      "subject": "Астраханская область"
    },
    {
      "coords": {
        "lat": "56.16667",
        "lon": "34.58333"
      },
      "district": "Центральный",
      "name": "Зубцов",
      "population": 6217,
      "range": 501,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "58.403333",
        "lon": "51.130361"
      },
      "district": "Приволжский",
      "name": "Зуевка",
      "population": 9767,
      "range": 1196,
      "subject": "Кировская область"
    },
    {
      "coords": {
        "lat": "59.37649",
        "lon": "28.219712"
      },
      "district": "Северо-Западный",
      "name": "Ивангород",
      "population": 9861,
      "range": 143,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "56.99667",
        "lon": "40.98194"
      },
      "district": "Центральный",
      "name": "Иваново",
      "population": 361644,
      "range": 706,
      "subject": "Ивановская область"
    },
    {
      "coords": {
        "lat": "55.97",
        "lon": "37.92"
      },
      "district": "Центральный",
      "name": "Ивантеевка",
      "population": 82827,
      "range": 638,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "60.68333",
        "lon": "60.43333"
      },
      "district": "Уральский",
      "name": "Ивдель",
      "population": 14306,
      "range": 1645,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "67.46667",
        "lon": "86.56667"
      },
      "district": "Сибирский",
      "name": "Игарка",
      "population": 3634,
      "range": 2783,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "56.85306",
        "lon": "53.21222"
      },
      "district": "Приволжский",
      "name": "Ижевск",
      "population": 623472,
      "range": 1373,
      "subject": "Удмуртия"
    },
    {
      "coords": {
        "lat": "42.56667",
        "lon": "47.86667"
      },
      "district": "Северо-Кавказский",
      "name": "Избербаш",
      "population": 55996,
      "range": 2283,
      "subject": "Дагестан"
    },
    {
      "coords": {
        "lat": "45.36667",
        "lon": "41.71667"
      },
      "district": "Северо-Кавказский",
      "name": "Изобильный",
      "population": 38614,
      "range": 1801,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "56.23333",
        "lon": "96.06667"
      },
      "district": "Сибирский",
      "name": "Иланский",
      "population": 15945,
      "range": 3729,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "53.85",
        "lon": "46.35"
      },
      "district": "Приволжский",
      "name": "Инза",
      "population": 16293,
      "range": 1189,
      "subject": "Ульяновская область"
    },
    {
      "coords": {
        "lat": "44.61417",
        "lon": "33.60833"
      },
      "district": "Южный",
      "name": "Инкерман",
      "population": 13858,
      "range": 1734,
      "subject": "Севастополь"
    },
    {
      "coords": {
        "lat": "55.763633",
        "lon": "48.736553"
      },
      "district": "Приволжский",
      "name": "Иннополис",
      "population": 3955,
      "range": 1187,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "53.86667",
        "lon": "44.36667"
      },
      "district": "Приволжский",
      "name": "Инсар",
      "population": 7920,
      "range": 1094,
      "subject": "Мордовия"
    },
    {
      "coords": {
        "lat": "66.0398139",
        "lon": "60.1315194"
      },
      "district": "Северо-Западный",
      "name": "Инта",
      "population": 20271,
      "range": 1629,
      "subject": "Коми"
    },
    {
      "coords": {
        "lat": "45.71667",
        "lon": "42.9"
      },
      "district": "Северо-Кавказский",
      "name": "Ипатово",
      "population": 26122,
      "range": 1800,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "57.66667",
        "lon": "63.06667"
      },
      "district": "Уральский",
      "name": "Ирбит",
      "population": 37009,
      "range": 1885,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "52.28333",
        "lon": "104.3"
      },
      "district": "Сибирский",
      "name": "Иркутск",
      "population": 617264,
      "range": 4419,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "54.90889",
        "lon": "71.26056"
      },
      "district": "Сибирский",
      "name": "Исилькуль",
      "population": 20515,
      "range": 2474,
      "subject": "Омская область"
    },
    {
      "coords": {
        "lat": "54.63333",
        "lon": "83.3"
      },
      "district": "Сибирский",
      "name": "Искитим",
      "population": 57147,
      "range": 3153,
      "subject": "Новосибирская область"
    },
    {
      "coords": {
        "lat": "55.91667",
        "lon": "36.86667"
      },
      "district": "Центральный",
      "name": "Истра",
      "population": 37474,
      "range": 602,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "56.11667",
        "lon": "69.5"
      },
      "district": "Уральский",
      "name": "Ишим",
      "population": 67614,
      "range": 2312,
      "subject": "Тюменская область"
    },
    {
      "coords": {
        "lat": "53.45444",
        "lon": "56.04389"
      },
      "district": "Приволжский",
      "name": "Ишимбай",
      "population": 64041,
      "range": 1721,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "56.632777777778",
        "lon": "47.895833333333"
      },
      "district": "Приволжский",
      "name": "Йошкар-Ола",
      "population": 281248,
      "range": 1092,
      "subject": "Марий Эл"
    },
    {
      "coords": {
        "lat": "59.5",
        "lon": "40.33333"
      },
      "district": "Северо-Западный",
      "name": "Кадников",
      "population": 4106,
      "range": 564,
      "subject": "Вологодская область"
    },
    {
      "coords": {
        "lat": "55.79083",
        "lon": "49.11444"
      },
      "district": "Приволжский",
      "name": "Казань",
      "population": 1308660,
      "range": 1204,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "48.68333",
        "lon": "43.53333"
      },
      "district": "Южный",
      "name": "Калач-на-Дону",
      "population": 24277,
      "range": 1524,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "50.42583",
        "lon": "41.01556"
      },
      "district": "Центральный",
      "name": "Калач",
      "population": 17624,
      "range": 1267,
      "subject": "Воронежская область"
    },
    {
      "coords": {
        "lat": "55.05",
        "lon": "74.58333"
      },
      "district": "Сибирский",
      "name": "Калачинск",
      "population": 21378,
      "range": 2652,
      "subject": "Омская область"
    },
    {
      "coords": {
        "lat": "54.71667",
        "lon": "20.5"
      },
      "district": "Северо-Западный",
      "name": "Калининград",
      "population": 490449,
      "range": 839,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "51.5",
        "lon": "44.45"
      },
      "district": "Приволжский",
      "name": "Калининск",
      "population": 14949,
      "range": 1298,
      "subject": "Саратовская область"
    },
    {
      "coords": {
        "lat": "53.51667",
        "lon": "87.26667"
      },
      "district": "Сибирский",
      "name": "Калтан",
      "population": 21752,
      "range": 3438,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "54.53333",
        "lon": "36.26667"
      },
      "district": "Центральный",
      "name": "Калуга",
      "population": 337058,
      "range": 714,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "57.23333",
        "lon": "37.85"
      },
      "district": "Центральный",
      "name": "Калязин",
      "population": 12621,
      "range": 536,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "56.26667",
        "lon": "54.2"
      },
      "district": "Приволжский",
      "name": "Камбарка",
      "population": 10080,
      "range": 1457,
      "subject": "Удмуртия"
    },
    {
      "coords": {
        "lat": "53.18333",
        "lon": "44.05"
      },
      "district": "Приволжский",
      "name": "Каменка",
      "population": 33491,
      "range": 1233,
      "subject": "Пензенская область"
    },
    {
      "coords": {
        "lat": "60.95081",
        "lon": "29.130882"
      },
      "district": "Северо-Западный",
      "name": "Каменногорск",
      "population": 7160,
      "range": 118,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "56.4",
        "lon": "61.93333"
      },
      "district": "Уральский",
      "name": "Каменск-Уральский",
      "population": 164192,
      "range": 1879,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "48.31667",
        "lon": "40.26667"
      },
      "district": "Южный",
      "name": "Каменск-Шахтинский",
      "population": 86365,
      "range": 1456,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "53.79194",
        "lon": "81.34861"
      },
      "district": "Сибирский",
      "name": "Камень-на-Оби",
      "population": 32385,
      "range": 3098,
      "subject": "Алтайский край"
    },
    {
      "coords": {
        "lat": "56.34917",
        "lon": "40.99778"
      },
      "district": "Центральный",
      "name": "Камешково",
      "population": 12028,
      "range": 750,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "46.11556",
        "lon": "48.07694"
      },
      "district": "Южный",
      "name": "Камызяк",
      "population": 16154,
      "range": 1942,
      "subject": "Астраханская область"
    },
    {
      "coords": {
        "lat": "50.08333",
        "lon": "45.4"
      },
      "district": "Южный",
      "name": "Камышин",
      "population": 107927,
      "range": 1463,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "56.85",
        "lon": "62.71667"
      },
      "district": "Уральский",
      "name": "Камышлов",
      "population": 27117,
      "range": 1902,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "55.50694",
        "lon": "47.49139"
      },
      "district": "Приволжский",
      "name": "Канаш",
      "population": 44354,
      "range": 1135,
      "subject": "Чувашия"
    },
    {
      "coords": {
        "lat": "67.15694",
        "lon": "32.41167"
      },
      "district": "Северо-Западный",
      "name": "Кандалакша",
      "population": 29138,
      "range": 795,
      "subject": "Мурманская область"
    },
    {
      "coords": {
        "lat": "56.2",
        "lon": "95.7"
      },
      "district": "Сибирский",
      "name": "Канск",
      "population": 86816,
      "range": 3712,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "56.30889",
        "lon": "38.70139"
      },
      "district": "Центральный",
      "name": "Карабаново",
      "population": 13150,
      "range": 645,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "55.48333",
        "lon": "60.2"
      },
      "district": "Уральский",
      "name": "Карабаш",
      "population": 10514,
      "range": 1830,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "43.306285",
        "lon": "44.909763"
      },
      "district": "Северо-Кавказский",
      "name": "Карабулак",
      "population": 43037,
      "range": 2109,
      "subject": "Ингушетия"
    },
    {
      "coords": {
        "lat": "53.73333",
        "lon": "78.03333"
      },
      "district": "Сибирский",
      "name": "Карасук",
      "population": 24890,
      "range": 2920,
      "subject": "Новосибирская область"
    },
    {
      "coords": {
        "lat": "43.769713",
        "lon": "41.911369"
      },
      "district": "Северо-Кавказский",
      "name": "Карачаевск",
      "population": 23867,
      "range": 1974,
      "subject": "Карачаево-Черкесия"
    },
    {
      "coords": {
        "lat": "53.11667",
        "lon": "34.98333"
      },
      "district": "Центральный",
      "name": "Карачев",
      "population": 17449,
      "range": 824,
      "subject": "Брянская область"
    },
    {
      "coords": {
        "lat": "55.2",
        "lon": "80.28333"
      },
      "district": "Сибирский",
      "name": "Каргат",
      "population": 8316,
      "range": 2956,
      "subject": "Новосибирская область"
    },
    {
      "coords": {
        "lat": "61.5",
        "lon": "38.93333"
      },
      "district": "Северо-Западный",
      "name": "Каргополь",
      "population": 8849,
      "range": 495,
      "subject": "Архангельская область"
    },
    {
      "coords": {
        "lat": "59.76667",
        "lon": "60"
      },
      "district": "Уральский",
      "name": "Карпинск",
      "population": 25879,
      "range": 1645,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "53.05",
        "lon": "60.65"
      },
      "district": "Уральский",
      "name": "Карталы",
      "population": 27103,
      "range": 1997,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "54.95",
        "lon": "41.39722"
      },
      "district": "Центральный",
      "name": "Касимов",
      "population": 28443,
      "range": 873,
      "subject": "Рязанская область"
    },
    {
      "coords": {
        "lat": "55.88333",
        "lon": "60.75"
      },
      "district": "Уральский",
      "name": "Касли",
      "population": 15383,
      "range": 1840,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "42.88333",
        "lon": "47.63333"
      },
      "district": "Северо-Кавказский",
      "name": "Каспийск",
      "population": 121140,
      "range": 2242,
      "subject": "Дагестан"
    },
    {
      "coords": {
        "lat": "54.75",
        "lon": "58.2"
      },
      "district": "Уральский",
      "name": "Катав-Ивановск",
      "population": 14663,
      "range": 1760,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "56.3",
        "lon": "62.56667"
      },
      "district": "Уральский",
      "name": "Катайск",
      "population": 11881,
      "range": 1922,
      "subject": "Курганская область"
    },
    {
      "coords": {
        "lat": "58.7",
        "lon": "59.48333"
      },
      "district": "Уральский",
      "name": "Качканар",
      "population": 37307,
      "range": 1649,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "57.35",
        "lon": "37.61667"
      },
      "district": "Центральный",
      "name": "Кашин",
      "population": 14113,
      "range": 517,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "54.83333",
        "lon": "38.15"
      },
      "district": "Центральный",
      "name": "Кашира",
      "population": 45922,
      "range": 747,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "57.56667",
        "lon": "79.56667"
      },
      "district": "Сибирский",
      "name": "Кедровый",
      "population": 1818,
      "range": 2790,
      "subject": "Томская область"
    },
    {
      "coords": {
        "lat": "55.35417",
        "lon": "86.08972"
      },
      "district": "Сибирский",
      "name": "Кемерово",
      "population": 557119,
      "range": 3260,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "64.95",
        "lon": "34.6"
      },
      "district": "Северо-Западный",
      "name": "Кемь",
      "population": 10018,
      "range": 586,
      "subject": "Карелия"
    },
    {
      "coords": {
        "lat": "45.33861",
        "lon": "36.46806"
      },
      "district": "Южный",
      "name": "Керчь",
      "population": 154621,
      "range": 1687,
      "subject": "Крым"
    },
    {
      "coords": {
        "lat": "59.05",
        "lon": "57.65"
      },
      "district": "Приволжский",
      "name": "Кизел",
      "population": 15619,
      "range": 1537,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "43.2",
        "lon": "46.86667"
      },
      "district": "Северо-Кавказский",
      "name": "Кизилюрт",
      "population": 38335,
      "range": 2184,
      "subject": "Дагестан"
    },
    {
      "coords": {
        "lat": "43.850245",
        "lon": "46.71698"
      },
      "district": "Северо-Кавказский",
      "name": "Кизляр",
      "population": 49999,
      "range": 2113,
      "subject": "Дагестан"
    },
    {
      "coords": {
        "lat": "53.96667",
        "lon": "38.53333"
      },
      "district": "Центральный",
      "name": "Кимовск",
      "population": 26475,
      "range": 841,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "56.86667",
        "lon": "37.35"
      },
      "district": "Центральный",
      "name": "Кимры",
      "population": 40875,
      "range": 542,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "59.378053",
        "lon": "28.601209"
      },
      "district": "Северо-Западный",
      "name": "Кингисепп",
      "population": 49716,
      "range": 125,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "53.23333",
        "lon": "50.61667"
      },
      "district": "Приволжский",
      "name": "Кинель",
      "population": 36729,
      "range": 1451,
      "subject": "Самарская область"
    },
    {
      "coords": {
        "lat": "57.45",
        "lon": "42.15"
      },
      "district": "Центральный",
      "name": "Кинешма",
      "population": 77694,
      "range": 743,
      "subject": "Ивановская область"
    },
    {
      "coords": {
        "lat": "53.93333",
        "lon": "37.93333"
      },
      "district": "Центральный",
      "name": "Киреевск",
      "population": 25560,
      "range": 823,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "57.78333",
        "lon": "108.1"
      },
      "district": "Сибирский",
      "name": "Киренск",
      "population": 10998,
      "range": 4222,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "56.15",
        "lon": "38.86667"
      },
      "district": "Центральный",
      "name": "Киржач",
      "population": 27318,
      "range": 664,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "59.86667",
        "lon": "38.38333"
      },
      "district": "Северо-Западный",
      "name": "Кириллов",
      "population": 7149,
      "range": 449,
      "subject": "Вологодская область"
    },
    {
      "coords": {
        "lat": "59.449695",
        "lon": "32.008716"
      },
      "district": "Северо-Западный",
      "name": "Кириши",
      "population": 51028,
      "range": 116,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "54.08333",
        "lon": "34.3"
      },
      "district": "Центральный",
      "name": "Киров",
      "population": 28097,
      "range": 709,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "58.6",
        "lon": "49.65"
      },
      "district": "Приволжский",
      "name": "Киров",
      "population": 468212,
      "range": 1118,
      "subject": "Кировская область"
    },
    {
      "coords": {
        "lat": "57.43333",
        "lon": "60.06667"
      },
      "district": "Уральский",
      "name": "Кировград",
      "population": 18698,
      "range": 1728,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "58.55",
        "lon": "50.01667"
      },
      "district": "Приволжский",
      "name": "Кирово-Чепецк",
      "population": 66651,
      "range": 1130,
      "subject": "Кировская область"
    },
    {
      "coords": {
        "lat": "59.87533",
        "lon": "30.981457"
      },
      "district": "Северо-Западный",
      "name": "Кировск",
      "population": 27238,
      "range": 41,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "67.61417",
        "lon": "33.67167"
      },
      "district": "Северо-Западный",
      "name": "Кировск",
      "population": 24857,
      "range": 856,
      "subject": "Мурманская область"
    },
    {
      "coords": {
        "lat": "59.337167",
        "lon": "52.245472"
      },
      "district": "Приволжский",
      "name": "Кирс",
      "population": 8982,
      "range": 1229,
      "subject": "Кировская область"
    },
    {
      "coords": {
        "lat": "52.65",
        "lon": "42.73333"
      },
      "district": "Центральный",
      "name": "Кирсанов",
      "population": 16164,
      "range": 1123,
      "subject": "Тамбовская область"
    },
    {
      "coords": {
        "lat": "53.98333",
        "lon": "86.7"
      },
      "district": "Сибирский",
      "name": "Киселёвск",
      "population": 83431,
      "range": 3372,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "43.90333",
        "lon": "42.72444"
      },
      "district": "Северо-Кавказский",
      "name": "Кисловодск",
      "population": 127521,
      "range": 1982,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "56.33389",
        "lon": "36.7125"
      },
      "district": "Центральный",
      "name": "Клин",
      "population": 88511,
      "range": 560,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "52.75278",
        "lon": "32.23611"
      },
      "district": "Центральный",
      "name": "Клинцы",
      "population": 63059,
      "range": 823,
      "subject": "Брянская область"
    },
    {
      "coords": {
        "lat": "55.81667",
        "lon": "45.03333"
      },
      "district": "Приволжский",
      "name": "Княгинино",
      "population": 6447,
      "range": 987,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "67.55944",
        "lon": "30.46667"
      },
      "district": "Северо-Западный",
      "name": "Ковдор",
      "population": 15770,
      "range": 835,
      "subject": "Мурманская область"
    },
    {
      "coords": {
        "lat": "56.36056",
        "lon": "41.31972"
      },
      "district": "Центральный",
      "name": "Ковров",
      "population": 132417,
      "range": 764,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "54.03333",
        "lon": "43.91667"
      },
      "district": "Приволжский",
      "name": "Ковылкино",
      "population": 19793,
      "range": 1059,
      "subject": "Мордовия"
    },
    {
      "coords": {
        "lat": "62.26667",
        "lon": "74.48333"
      },
      "district": "Уральский",
      "name": "Когалым",
      "population": 61441,
      "range": 2341,
      "subject": "Ханты-Мансийский АО"
    },
    {
      "coords": {
        "lat": "58.6",
        "lon": "99.18333"
      },
      "district": "Сибирский",
      "name": "Кодинск",
      "population": 13324,
      "range": 3740,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "54.03333",
        "lon": "35.78333"
      },
      "district": "Центральный",
      "name": "Козельск",
      "population": 16759,
      "range": 748,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "55.83333",
        "lon": "48.25"
      },
      "district": "Приволжский",
      "name": "Козловка",
      "population": 7781,
      "range": 1155,
      "subject": "Чувашия"
    },
    {
      "coords": {
        "lat": "56.33333",
        "lon": "46.56667"
      },
      "district": "Приволжский",
      "name": "Козьмодемьянск",
      "population": 19731,
      "range": 1036,
      "subject": "Марий Эл"
    },
    {
      "coords": {
        "lat": "68.88306",
        "lon": "33.02194"
      },
      "district": "Северо-Западный",
      "name": "Кола",
      "population": 9016,
      "range": 990,
      "subject": "Мурманская область"
    },
    {
      "coords": {
        "lat": "58.8252278",
        "lon": "44.311444"
      },
      "district": "Центральный",
      "name": "Кологрив",
      "population": 2468,
      "range": 803,
      "subject": "Костромская область"
    },
    {
      "coords": {
        "lat": "55.09389",
        "lon": "38.76806"
      },
      "district": "Центральный",
      "name": "Коломна",
      "population": 134850,
      "range": 748,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "58.31667",
        "lon": "82.91667"
      },
      "district": "Сибирский",
      "name": "Колпашево",
      "population": 20824,
      "range": 2930,
      "subject": "Томская область"
    },
    {
      "coords": {
        "lat": "59.75",
        "lon": "30.6"
      },
      "district": "Северо-Западный",
      "name": "Колпино",
      "population": 142108,
      "range": 38,
      "subject": "Санкт-Петербург"
    },
    {
      "coords": {
        "lat": "59.932919",
        "lon": "30.655377"
      },
      "district": "Северо-Западный",
      "name": "Колтуши",
      "population": 14052,
      "range": 23,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "56.3",
        "lon": "39.38333"
      },
      "district": "Центральный",
      "name": "Кольчугино",
      "population": 39410,
      "range": 677,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "59.621609",
        "lon": "30.393483"
      },
      "district": "Северо-Западный",
      "name": "Коммунар",
      "population": 25793,
      "range": 50,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "50.55",
        "lon": "137"
      },
      "district": "Дальневосточный",
      "name": "Комсомольск-на-Амуре",
      "population": 238505,
      "range": 6091,
      "subject": "Хабаровский край"
    },
    {
      "coords": {
        "lat": "57.03333",
        "lon": "40.38333"
      },
      "district": "Центральный",
      "name": "Комсомольск",
      "population": 8364,
      "range": 674,
      "subject": "Ивановская область"
    },
    {
      "coords": {
        "lat": "56.7",
        "lon": "36.76667"
      },
      "district": "Центральный",
      "name": "Конаково",
      "population": 33560,
      "range": 530,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "62.2",
        "lon": "34.26667"
      },
      "district": "Северо-Западный",
      "name": "Кондопога",
      "population": 25851,
      "range": 318,
      "subject": "Карелия"
    },
    {
      "coords": {
        "lat": "54.8",
        "lon": "35.93333"
      },
      "district": "Центральный",
      "name": "Кондрово",
      "population": 15734,
      "range": 675,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "47.58333",
        "lon": "41.1"
      },
      "district": "Южный",
      "name": "Константиновск",
      "population": 17207,
      "range": 1556,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "55.1",
        "lon": "61.61667"
      },
      "district": "Уральский",
      "name": "Копейск",
      "population": 147806,
      "range": 1928,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "53.91667",
        "lon": "40.01667"
      },
      "district": "Центральный",
      "name": "Кораблино",
      "population": 10334,
      "range": 901,
      "subject": "Рязанская область"
    },
    {
      "coords": {
        "lat": "45.46667",
        "lon": "39.45"
      },
      "district": "Южный",
      "name": "Кореновск",
      "population": 41826,
      "range": 1734,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "54.88333",
        "lon": "61.4"
      },
      "district": "Уральский",
      "name": "Коркино",
      "population": 37224,
      "range": 1928,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "55.91667",
        "lon": "37.81667"
      },
      "district": "Центральный",
      "name": "Королёв",
      "population": 228095,
      "range": 639,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "50.81361",
        "lon": "37.18139"
      },
      "district": "Центральный",
      "name": "Короча",
      "population": 5623,
      "range": 1117,
      "subject": "Белгородская область"
    },
    {
      "coords": {
        "lat": "46.63333",
        "lon": "142.76667"
      },
      "district": "Дальневосточный",
      "name": "Корсаков",
      "population": 33950,
      "range": 6688,
      "subject": "Сахалинская область"
    },
    {
      "coords": {
        "lat": "61.3",
        "lon": "47.16667"
      },
      "district": "Северо-Западный",
      "name": "Коряжма",
      "population": 34523,
      "range": 926,
      "subject": "Архангельская область"
    },
    {
      "coords": {
        "lat": "55.93333",
        "lon": "39.63333"
      },
      "district": "Центральный",
      "name": "Костерёво",
      "population": 7113,
      "range": 716,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "64.58333",
        "lon": "30.6"
      },
      "district": "Северо-Западный",
      "name": "Костомукша",
      "population": 26048,
      "range": 503,
      "subject": "Карелия"
    },
    {
      "coords": {
        "lat": "57.76667",
        "lon": "40.93333"
      },
      "district": "Центральный",
      "name": "Кострома",
      "population": 267481,
      "range": 660,
      "subject": "Костромская область"
    },
    {
      "coords": {
        "lat": "55.6625",
        "lon": "37.86722"
      },
      "district": "Центральный",
      "name": "Котельники",
      "population": 63728,
      "range": 662,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "47.63333",
        "lon": "43.13333"
      },
      "district": "Южный",
      "name": "Котельниково",
      "population": 22016,
      "range": 1614,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "58.3",
        "lon": "48.33333"
      },
      "district": "Приволжский",
      "name": "Котельнич",
      "population": 20144,
      "range": 1044,
      "subject": "Кировская область"
    },
    {
      "coords": {
        "lat": "61.25",
        "lon": "46.65"
      },
      "district": "Северо-Западный",
      "name": "Котлас",
      "population": 56093,
      "range": 898,
      "subject": "Архангельская область"
    },
    {
      "coords": {
        "lat": "50.31667",
        "lon": "44.8"
      },
      "district": "Южный",
      "name": "Котово",
      "population": 21028,
      "range": 1417,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "52.58333",
        "lon": "41.5"
      },
      "district": "Центральный",
      "name": "Котовск",
      "population": 26694,
      "range": 1079,
      "subject": "Тамбовская область"
    },
    {
      "coords": {
        "lat": "56.93333",
        "lon": "41.08333"
      },
      "district": "Центральный",
      "name": "Кохма",
      "population": 30940,
      "range": 716,
      "subject": "Ивановская область"
    },
    {
      "coords": {
        "lat": "60.96667",
        "lon": "46.48333"
      },
      "district": "Северо-Западный",
      "name": "Красавино",
      "population": 5601,
      "range": 889,
      "subject": "Вологодская область"
    },
    {
      "coords": {
        "lat": "56.12278",
        "lon": "38.14611"
      },
      "district": "Центральный",
      "name": "Красноармейск",
      "population": 26492,
      "range": 636,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "51.01667",
        "lon": "45.7"
      },
      "district": "Приволжский",
      "name": "Красноармейск",
      "population": 21350,
      "range": 1391,
      "subject": "Саратовская область"
    },
    {
      "coords": {
        "lat": "60.4",
        "lon": "57.06667"
      },
      "district": "Приволжский",
      "name": "Красновишерск",
      "population": 14460,
      "range": 1471,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "55.81667",
        "lon": "37.33333"
      },
      "district": "Центральный",
      "name": "Красногорск",
      "population": 187634,
      "range": 628,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "45.03333",
        "lon": "38.98333"
      },
      "district": "Южный",
      "name": "Краснодар",
      "population": 1099344,
      "range": 1769,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "59.733745",
        "lon": "30.086205"
      },
      "district": "Северо-Западный",
      "name": "Красное Село",
      "population": 56533,
      "range": 41,
      "subject": "Санкт-Петербург"
    },
    {
      "coords": {
        "lat": "56.43806",
        "lon": "38.22944"
      },
      "district": "Центральный",
      "name": "Краснозаводск",
      "population": 14639,
      "range": 615,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "54.95",
        "lon": "22.5"
      },
      "district": "Северо-Западный",
      "name": "Краснознаменск",
      "population": 3419,
      "range": 739,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "55.6",
        "lon": "37.03333"
      },
      "district": "Центральный",
      "name": "Краснознаменск",
      "population": 43868,
      "range": 637,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "50.1",
        "lon": "118.03333"
      },
      "district": "Сибирский",
      "name": "Краснокаменск",
      "population": 51137,
      "range": 5274,
      "subject": "Забайкальский край"
    },
    {
      "coords": {
        "lat": "58.08333",
        "lon": "55.75"
      },
      "district": "Приволжский",
      "name": "Краснокамск",
      "population": 48778,
      "range": 1463,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "45.955306",
        "lon": "33.795"
      },
      "district": "Южный",
      "name": "Красноперекопск",
      "population": 25569,
      "range": 1587,
      "subject": "Крым"
    },
    {
      "coords": {
        "lat": "48.7",
        "lon": "44.566666666667"
      },
      "district": "Южный",
      "name": "Краснослободск",
      "population": 16545,
      "range": 1559,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "54.43333",
        "lon": "43.78333"
      },
      "district": "Приволжский",
      "name": "Краснослободск",
      "population": 8910,
      "range": 1024,
      "subject": "Мордовия"
    },
    {
      "coords": {
        "lat": "59.76667",
        "lon": "60.2"
      },
      "district": "Уральский",
      "name": "Краснотурьинск",
      "population": 55875,
      "range": 1656,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "58.35",
        "lon": "60.05"
      },
      "district": "Уральский",
      "name": "Красноуральск",
      "population": 21507,
      "range": 1692,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "56.61667",
        "lon": "57.76667"
      },
      "district": "Уральский",
      "name": "Красноуфимск",
      "population": 37301,
      "range": 1638,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "56.012083",
        "lon": "92.871295"
      },
      "district": "Сибирский",
      "name": "Красноярск",
      "population": 1187771,
      "range": 3577,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "50.95",
        "lon": "46.96667"
      },
      "district": "Приволжский",
      "name": "Красный Кут",
      "population": 14296,
      "range": 1453,
      "subject": "Саратовская область"
    },
    {
      "coords": {
        "lat": "47.88333",
        "lon": "40.06667"
      },
      "district": "Южный",
      "name": "Красный Сулин",
      "population": 35697,
      "range": 1494,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "58.06329",
        "lon": "37.122983"
      },
      "district": "Центральный",
      "name": "Красный Холм",
      "population": 4998,
      "range": 448,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "54.88917",
        "lon": "37.12333"
      },
      "district": "Центральный",
      "name": "Кремёнки",
      "population": 11745,
      "range": 705,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "60",
        "lon": "29.76667"
      },
      "district": "Северо-Западный",
      "name": "Кронштадт",
      "population": 44399,
      "range": 33,
      "subject": "Санкт-Петербург"
    },
    {
      "coords": {
        "lat": "45.43333",
        "lon": "40.56667"
      },
      "district": "Южный",
      "name": "Кропоткин",
      "population": 75858,
      "range": 1764,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "44.93333",
        "lon": "38"
      },
      "district": "Южный",
      "name": "Крымск",
      "population": 54597,
      "range": 1760,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "56.15167",
        "lon": "44.19556"
      },
      "district": "Приволжский",
      "name": "Кстово",
      "population": 63646,
      "range": 924,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "55.57639",
        "lon": "36.69472"
      },
      "district": "Центральный",
      "name": "Кубинка",
      "population": 23146,
      "range": 626,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "51.48333",
        "lon": "57.35"
      },
      "district": "Приволжский",
      "name": "Кувандык",
      "population": 26596,
      "range": 1926,
      "subject": "Оренбургская область"
    },
    {
      "coords": {
        "lat": "57.03333",
        "lon": "34.16667"
      },
      "district": "Центральный",
      "name": "Кувшиново",
      "population": 9262,
      "range": 405,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "59.908489",
        "lon": "30.513569"
      },
      "district": "Северо-Западный",
      "name": "Кудрово",
      "population": 60791,
      "range": 20,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "59.01667",
        "lon": "54.66667"
      },
      "district": "Приволжский",
      "name": "Кудымкар",
      "population": 28293,
      "range": 1373,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "53.11667",
        "lon": "46.6"
      },
      "district": "Приволжский",
      "name": "Кузнецк",
      "population": 78390,
      "range": 1258,
      "subject": "Пензенская область"
    },
    {
      "coords": {
        "lat": "55.45028",
        "lon": "78.3075"
      },
      "district": "Сибирский",
      "name": "Куйбышев",
      "population": 41946,
      "range": 2834,
      "subject": "Новосибирская область"
    },
    {
      "coords": {
        "lat": "56.1825",
        "lon": "50.90639"
      },
      "district": "Приволжский",
      "name": "Кукмор",
      "population": 17886,
      "range": 1279,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "55.41667",
        "lon": "42.51667"
      },
      "district": "Приволжский",
      "name": "Кулебаки",
      "population": 32184,
      "range": 888,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "52.76667",
        "lon": "55.78333"
      },
      "district": "Приволжский",
      "name": "Кумертау",
      "population": 57949,
      "range": 1754,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "57.43333",
        "lon": "56.93333"
      },
      "district": "Приволжский",
      "name": "Кунгур",
      "population": 62673,
      "range": 1556,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "54.36667",
        "lon": "77.3"
      },
      "district": "Сибирский",
      "name": "Купино",
      "population": 15065,
      "range": 2841,
      "subject": "Новосибирская область"
    },
    {
      "coords": {
        "lat": "55.44083",
        "lon": "65.34111"
      },
      "district": "Уральский",
      "name": "Курган",
      "population": 310911,
      "range": 2118,
      "subject": "Курганская область"
    },
    {
      "coords": {
        "lat": "44.88333",
        "lon": "40.6"
      },
      "district": "Южный",
      "name": "Курганинск",
      "population": 47305,
      "range": 1823,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "45.25",
        "lon": "147.883333"
      },
      "district": "Дальневосточный",
      "name": "Курильск",
      "population": 1823,
      "range": 7023,
      "subject": "Сахалинская область"
    },
    {
      "coords": {
        "lat": "55.45",
        "lon": "40.61667"
      },
      "district": "Центральный",
      "name": "Курлово",
      "population": 6309,
      "range": 797,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "55.58333",
        "lon": "38.91667"
      },
      "district": "Центральный",
      "name": "Куровское",
      "population": 19857,
      "range": 713,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "51.71667",
        "lon": "36.18333"
      },
      "district": "Центральный",
      "name": "Курск",
      "population": 440052,
      "range": 997,
      "subject": "Курская область"
    },
    {
      "coords": {
        "lat": "54.9",
        "lon": "64.43333"
      },
      "district": "Уральский",
      "name": "Куртамыш",
      "population": 14806,
      "range": 2096,
      "subject": "Курганская область"
    },
    {
      "coords": {
        "lat": "43.20444",
        "lon": "46.087812"
      },
      "district": "Северо-Кавказский",
      "name": "Курчалой",
      "population": 23425,
      "range": 2157,
      "subject": "Чечня"
    },
    {
      "coords": {
        "lat": "51.66667",
        "lon": "35.65"
      },
      "district": "Центральный",
      "name": "Курчатов",
      "population": 40318,
      "range": 993,
      "subject": "Курская область"
    },
    {
      "coords": {
        "lat": "55.33333",
        "lon": "59.43333"
      },
      "district": "Уральский",
      "name": "Куса",
      "population": 17136,
      "range": 1796,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "58.28333",
        "lon": "59.73333"
      },
      "district": "Уральский",
      "name": "Кушва",
      "population": 27306,
      "range": 1679,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "51.7",
        "lon": "94.36667"
      },
      "district": "Сибирский",
      "name": "Кызыл",
      "population": 125241,
      "range": 3944,
      "subject": "Тыва"
    },
    {
      "coords": {
        "lat": "55.7",
        "lon": "60.55"
      },
      "district": "Уральский",
      "name": "Кыштым",
      "population": 36045,
      "range": 1837,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "50.35",
        "lon": "106.45"
      },
      "district": "Сибирский",
      "name": "Кяхта",
      "population": 17877,
      "range": 4675,
      "subject": "Бурятия"
    },
    {
      "coords": {
        "lat": "44.633338",
        "lon": "40.733311"
      },
      "district": "Южный",
      "name": "Лабинск",
      "population": 57428,
      "range": 1852,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "66.65806",
        "lon": "66.38389"
      },
      "district": "Уральский",
      "name": "Лабытнанги",
      "population": 25501,
      "range": 1913,
      "subject": "Ямало-Ненецкий АО"
    },
    {
      "coords": {
        "lat": "45.3925",
        "lon": "47.355"
      },
      "district": "Южный",
      "name": "Лагань",
      "population": 13834,
      "range": 1984,
      "subject": "Калмыкия"
    },
    {
      "coords": {
        "lat": "54.56667",
        "lon": "20.16667"
      },
      "district": "Северо-Западный",
      "name": "Ладушкин",
      "population": 3666,
      "range": 865,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "55.4",
        "lon": "49.55"
      },
      "district": "Приволжский",
      "name": "Лаишево",
      "population": 9076,
      "range": 1250,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "56.01694",
        "lon": "39.94944"
      },
      "district": "Центральный",
      "name": "Лакинск",
      "population": 12861,
      "range": 724,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "61.25",
        "lon": "75.16667"
      },
      "district": "Уральский",
      "name": "Лангепас",
      "population": 42701,
      "range": 2406,
      "subject": "Ханты-Мансийский АО"
    },
    {
      "coords": {
        "lat": "61.51667",
        "lon": "30.2"
      },
      "district": "Северо-Западный",
      "name": "Лахденпохья",
      "population": 5952,
      "range": 162,
      "subject": "Карелия"
    },
    {
      "coords": {
        "lat": "53.0115528",
        "lon": "39.1281167"
      },
      "district": "Центральный",
      "name": "Лебедянь",
      "population": 20049,
      "range": 952,
      "subject": "Липецкая область"
    },
    {
      "coords": {
        "lat": "54.5988694",
        "lon": "52.4422722"
      },
      "district": "Приволжский",
      "name": "Лениногорск",
      "population": 60993,
      "range": 1454,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "54.65",
        "lon": "86.16667"
      },
      "district": "Сибирский",
      "name": "Ленинск-Кузнецкий",
      "population": 92244,
      "range": 3306,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "48.7",
        "lon": "45.2"
      },
      "district": "Южный",
      "name": "Ленинск",
      "population": 13391,
      "range": 1584,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "60.71667",
        "lon": "114.9"
      },
      "district": "Дальневосточный",
      "name": "Ленск",
      "population": 21392,
      "range": 4331,
      "subject": "Якутия"
    },
    {
      "coords": {
        "lat": "44.10528",
        "lon": "42.97167"
      },
      "district": "Северо-Кавказский",
      "name": "Лермонтов",
      "population": 22444,
      "range": 1968,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "58.63333",
        "lon": "59.78333"
      },
      "district": "Уральский",
      "name": "Лесной",
      "population": 48261,
      "range": 1669,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "45.46667",
        "lon": "133.4"
      },
      "district": "Дальневосточный",
      "name": "Лесозаводск",
      "population": 35433,
      "range": 6393,
      "subject": "Приморский край"
    },
    {
      "coords": {
        "lat": "58.23333",
        "lon": "92.48333"
      },
      "district": "Сибирский",
      "name": "Лесосибирск",
      "population": 55730,
      "range": 3429,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "52.425306",
        "lon": "37.608306"
      },
      "district": "Центральный",
      "name": "Ливны",
      "population": 43549,
      "range": 962,
      "subject": "Орловская область"
    },
    {
      "coords": {
        "lat": "55.71528",
        "lon": "38.95778"
      },
      "district": "Центральный",
      "name": "Ликино-Дулёво",
      "population": 34191,
      "range": 704,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "52.61667",
        "lon": "39.6"
      },
      "district": "Центральный",
      "name": "Липецк",
      "population": 496403,
      "range": 1007,
      "subject": "Липецкая область"
    },
    {
      "coords": {
        "lat": "53.95",
        "lon": "37.7"
      },
      "district": "Центральный",
      "name": "Липки",
      "population": 8325,
      "range": 815,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "50.98222",
        "lon": "39.49944"
      },
      "district": "Центральный",
      "name": "Лиски",
      "population": 54147,
      "range": 1162,
      "subject": "Воронежская область"
    },
    {
      "coords": {
        "lat": "57.11667",
        "lon": "35.46667"
      },
      "district": "Центральный",
      "name": "Лихославль",
      "population": 11017,
      "range": 443,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "56.01194",
        "lon": "37.47444"
      },
      "district": "Центральный",
      "name": "Лобня",
      "population": 82764,
      "range": 617,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "60.734305",
        "lon": "33.543183"
      },
      "district": "Северо-Западный",
      "name": "Лодейное Поле",
      "population": 18905,
      "range": 191,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "59.91074",
        "lon": "29.776466"
      },
      "district": "Северо-Западный",
      "name": "Ломоносов",
      "population": 39147,
      "range": 36,
      "subject": "Санкт-Петербург"
    },
    {
      "coords": {
        "lat": "55.86667",
        "lon": "38.2"
      },
      "district": "Центральный",
      "name": "Лосино-Петровский",
      "population": 29000,
      "range": 659,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "58.733333333333",
        "lon": "29.85"
      },
      "district": "Северо-Западный",
      "name": "Луга",
      "population": 38407,
      "range": 152,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "60.61667",
        "lon": "47.28333"
      },
      "district": "Приволжский",
      "name": "Луза",
      "population": 9122,
      "range": 933,
      "subject": "Кировская область"
    },
    {
      "coords": {
        "lat": "55.03833",
        "lon": "44.49778"
      },
      "district": "Приволжский",
      "name": "Лукоянов",
      "population": 12652,
      "range": 1013,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "54.96667",
        "lon": "39.025"
      },
      "district": "Центральный",
      "name": "Луховицы",
      "population": 29889,
      "range": 770,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "56.01278",
        "lon": "45.02528"
      },
      "district": "Приволжский",
      "name": "Лысково",
      "population": 21657,
      "range": 970,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "58.1003806",
        "lon": "57.8043278"
      },
      "district": "Приволжский",
      "name": "Лысьва",
      "population": 53855,
      "range": 1578,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "55.58361",
        "lon": "37.90556"
      },
      "district": "Центральный",
      "name": "Лыткарино",
      "population": 65212,
      "range": 672,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "51.66667",
        "lon": "35.26667"
      },
      "district": "Центральный",
      "name": "Льгов",
      "population": 17557,
      "range": 986,
      "subject": "Курская область"
    },
    {
      "coords": {
        "lat": "59.349301",
        "lon": "31.24858"
      },
      "district": "Северо-Западный",
      "name": "Любань",
      "population": 4565,
      "range": 95,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "55.68139",
        "lon": "37.89389"
      },
      "district": "Центральный",
      "name": "Люберцы",
      "population": 224195,
      "range": 663,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "58.35",
        "lon": "40.7"
      },
      "district": "Центральный",
      "name": "Любим",
      "population": 5037,
      "range": 620,
      "subject": "Ярославская область"
    },
    {
      "coords": {
        "lat": "53.86667",
        "lon": "34.46667"
      },
      "district": "Центральный",
      "name": "Людиново",
      "population": 35874,
      "range": 735,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "61.61667",
        "lon": "72.16667"
      },
      "district": "Уральский",
      "name": "Лянтор",
      "population": 40977,
      "range": 2240,
      "subject": "Ханты-Мансийский АО"
    },
    {
      "coords": {
        "lat": "59.56667",
        "lon": "150.8"
      },
      "district": "Дальневосточный",
      "name": "Магадан",
      "population": 90757,
      "range": 5768,
      "subject": "Магаданская область"
    },
    {
      "coords": {
        "lat": "43.16667",
        "lon": "44.81667"
      },
      "district": "Северо-Кавказский",
      "name": "Магас",
      "population": 15271,
      "range": 2120,
      "subject": "Ингушетия"
    },
    {
      "coords": {
        "lat": "53.38333",
        "lon": "59.03333"
      },
      "district": "Уральский",
      "name": "Магнитогорск",
      "population": 410594,
      "range": 1883,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "44.611",
        "lon": "40.111"
      },
      "district": "Южный",
      "name": "Майкоп",
      "population": 143385,
      "range": 1840,
      "subject": "Адыгея"
    },
    {
      "coords": {
        "lat": "43.630508",
        "lon": "44.067733"
      },
      "district": "Северо-Кавказский",
      "name": "Майский",
      "population": 26632,
      "range": 2049,
      "subject": "Кабардино-Балкария"
    },
    {
      "coords": {
        "lat": "48.61667",
        "lon": "142.78333"
      },
      "district": "Дальневосточный",
      "name": "Макаров",
      "population": 5848,
      "range": 6501,
      "subject": "Сахалинская область"
    },
    {
      "coords": {
        "lat": "57.88333",
        "lon": "43.8"
      },
      "district": "Центральный",
      "name": "Макарьев",
      "population": 5528,
      "range": 810,
      "subject": "Костромская область"
    },
    {
      "coords": {
        "lat": "55.2",
        "lon": "67.25"
      },
      "district": "Уральский",
      "name": "Макушино",
      "population": 6827,
      "range": 2237,
      "subject": "Курганская область"
    },
    {
      "coords": {
        "lat": "58.85",
        "lon": "32.21667"
      },
      "district": "Северо-Западный",
      "name": "Малая Вишера",
      "population": 9996,
      "range": 173,
      "subject": "Новгородская область"
    },
    {
      "coords": {
        "lat": "43.508882",
        "lon": "44.585563"
      },
      "district": "Северо-Кавказский",
      "name": "Малгобек",
      "population": 36480,
      "range": 2078,
      "subject": "Ингушетия"
    },
    {
      "coords": {
        "lat": "56.52278",
        "lon": "50.68083"
      },
      "district": "Приволжский",
      "name": "Малмыж",
      "population": 6931,
      "range": 1250,
      "subject": "Кировская область"
    },
    {
      "coords": {
        "lat": "52.4",
        "lon": "36.5"
      },
      "district": "Центральный",
      "name": "Малоархангельск",
      "population": 3609,
      "range": 935,
      "subject": "Орловская область"
    },
    {
      "coords": {
        "lat": "55",
        "lon": "36.46667"
      },
      "district": "Центральный",
      "name": "Малоярославец",
      "population": 41836,
      "range": 671,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "55.7",
        "lon": "51.4"
      },
      "district": "Приволжский",
      "name": "Мамадыш",
      "population": 15726,
      "range": 1333,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "54.46667",
        "lon": "19.93333"
      },
      "district": "Северо-Западный",
      "name": "Мамоново",
      "population": 8314,
      "range": 884,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "58.33333",
        "lon": "44.76667"
      },
      "district": "Центральный",
      "name": "Мантурово",
      "population": 13043,
      "range": 844,
      "subject": "Костромская область"
    },
    {
      "coords": {
        "lat": "56.21667",
        "lon": "87.75"
      },
      "district": "Сибирский",
      "name": "Мариинск",
      "population": 40779,
      "range": 3298,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "56.11667",
        "lon": "47.71667"
      },
      "district": "Приволжский",
      "name": "Мариинский Посад",
      "population": 7851,
      "range": 1111,
      "subject": "Чувашия"
    },
    {
      "coords": {
        "lat": "51.7",
        "lon": "46.75"
      },
      "district": "Приволжский",
      "name": "Маркс",
      "population": 28749,
      "range": 1378,
      "subject": "Саратовская область"
    },
    {
      "coords": {
        "lat": "42.98333",
        "lon": "47.5"
      },
      "district": "Северо-Кавказский",
      "name": "Махачкала",
      "population": 623254,
      "range": 2228,
      "subject": "Дагестан"
    },
    {
      "coords": {
        "lat": "53.06111",
        "lon": "32.84833"
      },
      "district": "Центральный",
      "name": "Мглин",
      "population": 6919,
      "range": 796,
      "subject": "Брянская область"
    },
    {
      "coords": {
        "lat": "61.033055555556",
        "lon": "76.109722222222"
      },
      "district": "Уральский",
      "name": "Мегион",
      "population": 52887,
      "range": 2461,
      "subject": "Ханты-Мансийский АО"
    },
    {
      "coords": {
        "lat": "62.91667",
        "lon": "34.45"
      },
      "district": "Северо-Западный",
      "name": "Медвежьегорск",
      "population": 11962,
      "range": 385,
      "subject": "Карелия"
    },
    {
      "coords": {
        "lat": "51.422085",
        "lon": "57.595296"
      },
      "district": "Приволжский",
      "name": "Медногорск",
      "population": 23693,
      "range": 1943,
      "subject": "Оренбургская область"
    },
    {
      "coords": {
        "lat": "54.96667",
        "lon": "35.86667"
      },
      "district": "Центральный",
      "name": "Медынь",
      "population": 8200,
      "range": 657,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "54.24167",
        "lon": "57.96778"
      },
      "district": "Приволжский",
      "name": "Межгорье",
      "population": 15697,
      "range": 1777,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "53.68333",
        "lon": "88.05"
      },
      "district": "Сибирский",
      "name": "Междуреченск",
      "population": 96174,
      "range": 3470,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "65.85",
        "lon": "44.23333"
      },
      "district": "Северо-Западный",
      "name": "Мезень",
      "population": 2874,
      "range": 951,
      "subject": "Архангельская область"
    },
    {
      "coords": {
        "lat": "55.33333",
        "lon": "41.63333"
      },
      "district": "Центральный",
      "name": "Меленки",
      "population": 13407,
      "range": 853,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "52.95",
        "lon": "55.93333"
      },
      "district": "Приволжский",
      "name": "Мелеуз",
      "population": 56505,
      "range": 1747,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "55.9",
        "lon": "52.316666666667"
      },
      "district": "Приволжский",
      "name": "Менделеевск",
      "population": 22875,
      "range": 1372,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "55.71667",
        "lon": "53.08333"
      },
      "district": "Приволжский",
      "name": "Мензелинск",
      "population": 16008,
      "range": 1452,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "54.31667",
        "lon": "35.28333"
      },
      "district": "Центральный",
      "name": "Мещовск",
      "population": 3810,
      "range": 706,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "55.05",
        "lon": "60.1"
      },
      "district": "Уральский",
      "name": "Миасс",
      "population": 147995,
      "range": 1848,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "62.35",
        "lon": "50.06667"
      },
      "district": "Северо-Западный",
      "name": "Микунь",
      "population": 8527,
      "range": 1086,
      "subject": "Коми"
    },
    {
      "coords": {
        "lat": "48.91667",
        "lon": "40.4"
      },
      "district": "Южный",
      "name": "Миллерово",
      "population": 34841,
      "range": 1398,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "44.20083",
        "lon": "43.1125"
      },
      "district": "Северо-Кавказский",
      "name": "Минеральные Воды",
      "population": 70485,
      "range": 1962,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "53.7",
        "lon": "91.68333"
      },
      "district": "Сибирский",
      "name": "Минусинск",
      "population": 70089,
      "range": 3662,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "55.06667",
        "lon": "57.55"
      },
      "district": "Уральский",
      "name": "Миньяр",
      "population": 8500,
      "range": 1705,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "62.76028",
        "lon": "40.33528"
      },
      "district": "Северо-Западный",
      "name": "Мирный",
      "population": 27262,
      "range": 610,
      "subject": "Архангельская область"
    },
    {
      "coords": {
        "lat": "62.53333",
        "lon": "113.95"
      },
      "district": "Дальневосточный",
      "name": "Мирный",
      "population": 34045,
      "range": 4171,
      "subject": "Якутия"
    },
    {
      "coords": {
        "lat": "54.23333",
        "lon": "39.03333"
      },
      "district": "Центральный",
      "name": "Михайлов",
      "population": 10303,
      "range": 835,
      "subject": "Рязанская область"
    },
    {
      "coords": {
        "lat": "50.06667",
        "lon": "43.23333"
      },
      "district": "Южный",
      "name": "Михайловка",
      "population": 56031,
      "range": 1379,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "56.43333",
        "lon": "59.11667"
      },
      "district": "Уральский",
      "name": "Михайловск",
      "population": 9756,
      "range": 1722,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "45.130012",
        "lon": "42.027487"
      },
      "district": "Северо-Кавказский",
      "name": "Михайловск",
      "population": 114133,
      "range": 1835,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "52.89222",
        "lon": "40.49278"
      },
      "district": "Центральный",
      "name": "Мичуринск",
      "population": 90451,
      "range": 1013,
      "subject": "Тамбовская область"
    },
    {
      "coords": {
        "lat": "53.73333",
        "lon": "119.76667"
      },
      "district": "Сибирский",
      "name": "Могоча",
      "population": 12390,
      "range": 5064,
      "subject": "Забайкальский край"
    },
    {
      "coords": {
        "lat": "55.5",
        "lon": "36.03333"
      },
      "district": "Центральный",
      "name": "Можайск",
      "population": 33880,
      "range": 610,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "56.45",
        "lon": "52.21667"
      },
      "district": "Приволжский",
      "name": "Можга",
      "population": 44345,
      "range": 1339,
      "subject": "Удмуртия"
    },
    {
      "coords": {
        "lat": "43.736575",
        "lon": "44.652834"
      },
      "district": "Северо-Кавказский",
      "name": "Моздок",
      "population": 36784,
      "range": 2057,
      "subject": "Северная Осетия"
    },
    {
      "coords": {
        "lat": "67.93944",
        "lon": "32.91556"
      },
      "district": "Северо-Западный",
      "name": "Мончегорск",
      "population": 39962,
      "range": 886,
      "subject": "Мурманская область"
    },
    {
      "coords": {
        "lat": "48.35",
        "lon": "41.833333333333"
      },
      "district": "Южный",
      "name": "Морозовск",
      "population": 24258,
      "range": 1500,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "53.45",
        "lon": "41.8"
      },
      "district": "Центральный",
      "name": "Моршанск",
      "population": 39023,
      "range": 1015,
      "subject": "Тамбовская область"
    },
    {
      "coords": {
        "lat": "54.48333",
        "lon": "34.98333"
      },
      "district": "Центральный",
      "name": "Мосальск",
      "population": 4234,
      "range": 681,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "55.755833333333",
        "lon": "37.617777777778"
      },
      "district": "Центральный",
      "name": "Москва",
      "population": 13010112,
      "range": 645,
      "subject": "Москва"
    },
    {
      "coords": {
        "lat": "55.6",
        "lon": "37.35"
      },
      "district": "Центральный",
      "name": "Московский",
      "population": 65417,
      "range": 648,
      "subject": "Москва"
    },
    {
      "coords": {
        "lat": "63.79444",
        "lon": "74.49722"
      },
      "district": "Уральский",
      "name": "Муравленко",
      "population": 29233,
      "range": 2306,
      "subject": "Ямало-Ненецкий АО"
    },
    {
      "coords": {
        "lat": "59.38333",
        "lon": "48.96667"
      },
      "district": "Приволжский",
      "name": "Мураши",
      "population": 5700,
      "range": 1046,
      "subject": "Кировская область"
    },
    {
      "coords": {
        "lat": "60.051284",
        "lon": "30.438578"
      },
      "district": "Северо-Западный",
      "name": "Мурино",
      "population": 89083,
      "range": 6,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "68.96667",
        "lon": "33.08333"
      },
      "district": "Северо-Западный",
      "name": "Мурманск",
      "population": 270384,
      "range": 999,
      "subject": "Мурманская область"
    },
    {
      "coords": {
        "lat": "55.5725",
        "lon": "42.05139"
      },
      "district": "Центральный",
      "name": "Муром",
      "population": 107497,
      "range": 855,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "53.27833",
        "lon": "36.575"
      },
      "district": "Центральный",
      "name": "Мценск",
      "population": 36960,
      "range": 847,
      "subject": "Орловская область"
    },
    {
      "coords": {
        "lat": "53.7",
        "lon": "87.81667"
      },
      "district": "Сибирский",
      "name": "Мыски",
      "population": 40109,
      "range": 3454,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "55.91667",
        "lon": "37.73333"
      },
      "district": "Центральный",
      "name": "Мытищи",
      "population": 255429,
      "range": 636,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "57.78333",
        "lon": "38.45"
      },
      "district": "Центральный",
      "name": "Мышкин",
      "population": 5621,
      "range": 531,
      "subject": "Ярославская область"
    },
    {
      "coords": {
        "lat": "55.7",
        "lon": "52.33333"
      },
      "district": "Приволжский",
      "name": "Набережные Челны",
      "population": 548434,
      "range": 1386,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "55.53333",
        "lon": "42.2"
      },
      "district": "Приволжский",
      "name": "Навашино",
      "population": 14664,
      "range": 864,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "57.46667",
        "lon": "41.96667"
      },
      "district": "Центральный",
      "name": "Наволоки",
      "population": 8167,
      "range": 730,
      "subject": "Ивановская область"
    },
    {
      "coords": {
        "lat": "65.53333",
        "lon": "72.51667"
      },
      "district": "Уральский",
      "name": "Надым",
      "population": 45973,
      "range": 2190,
      "subject": "Ямало-Ненецкий АО"
    },
    {
      "coords": {
        "lat": "56.00639",
        "lon": "90.39139"
      },
      "district": "Сибирский",
      "name": "Назарово",
      "population": 45333,
      "range": 3450,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "43.21667",
        "lon": "44.76667"
      },
      "district": "Северо-Кавказский",
      "name": "Назрань",
      "population": 122350,
      "range": 2112,
      "subject": "Ингушетия"
    },
    {
      "coords": {
        "lat": "55.56667",
        "lon": "71.35"
      },
      "district": "Сибирский",
      "name": "Называевск",
      "population": 10434,
      "range": 2445,
      "subject": "Омская область"
    },
    {
      "coords": {
        "lat": "43.485259",
        "lon": "43.607072"
      },
      "district": "Северо-Кавказский",
      "name": "Нальчик",
      "population": 247054,
      "range": 2051,
      "subject": "Кабардино-Балкария"
    },
    {
      "coords": {
        "lat": "46.68333",
        "lon": "47.85"
      },
      "district": "Южный",
      "name": "Нариманов",
      "population": 11104,
      "range": 1878,
      "subject": "Астраханская область"
    },
    {
      "coords": {
        "lat": "55.38333",
        "lon": "36.73333"
      },
      "district": "Центральный",
      "name": "Наро-Фоминск",
      "population": 71121,
      "range": 645,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "43.556734",
        "lon": "43.862222"
      },
      "district": "Северо-Кавказский",
      "name": "Нарткала",
      "population": 33203,
      "range": 2051,
      "subject": "Кабардино-Балкария"
    },
    {
      "coords": {
        "lat": "67.63778",
        "lon": "53.00667"
      },
      "district": "Северо-Западный",
      "name": "Нарьян-Мар",
      "population": 23399,
      "range": 1385,
      "subject": "Ненецкий АО"
    },
    {
      "coords": {
        "lat": "42.81667",
        "lon": "132.88333"
      },
      "district": "Дальневосточный",
      "name": "Находка",
      "population": 139931,
      "range": 6610,
      "subject": "Приморский край"
    },
    {
      "coords": {
        "lat": "56.01667",
        "lon": "29.93333"
      },
      "district": "Северо-Западный",
      "name": "Невель",
      "population": 13980,
      "range": 452,
      "subject": "Псковская область"
    },
    {
      "coords": {
        "lat": "46.65",
        "lon": "141.86667"
      },
      "district": "Дальневосточный",
      "name": "Невельск",
      "population": 10608,
      "range": 6646,
      "subject": "Сахалинская область"
    },
    {
      "coords": {
        "lat": "44.63333",
        "lon": "41.93333"
      },
      "district": "Северо-Кавказский",
      "name": "Невинномысск",
      "population": 117562,
      "range": 1884,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "57.48333",
        "lon": "60.2"
      },
      "district": "Уральский",
      "name": "Невьянск",
      "population": 22061,
      "range": 1736,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "56.21667",
        "lon": "32.78333"
      },
      "district": "Центральный",
      "name": "Нелидово",
      "population": 18603,
      "range": 452,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "55.03333",
        "lon": "22.03333"
      },
      "district": "Северо-Западный",
      "name": "Неман",
      "population": 9255,
      "range": 749,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "57.45",
        "lon": "40.58333"
      },
      "district": "Центральный",
      "name": "Нерехта",
      "population": 19977,
      "range": 658,
      "subject": "Костромская область"
    },
    {
      "coords": {
        "lat": "51.98333",
        "lon": "116.58333"
      },
      "district": "Сибирский",
      "name": "Нерчинск",
      "population": 15290,
      "range": 5054,
      "subject": "Забайкальский край"
    },
    {
      "coords": {
        "lat": "56.65833",
        "lon": "124.725"
      },
      "district": "Дальневосточный",
      "name": "Нерюнгри",
      "population": 53409,
      "range": 5053,
      "subject": "Якутия"
    },
    {
      "coords": {
        "lat": "54.63333",
        "lon": "22.56667"
      },
      "district": "Северо-Западный",
      "name": "Нестеров",
      "population": 3336,
      "range": 765,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "52.8",
        "lon": "51.16667"
      },
      "district": "Приволжский",
      "name": "Нефтегорск",
      "population": 18076,
      "range": 1508,
      "subject": "Самарская область"
    },
    {
      "coords": {
        "lat": "56.08889",
        "lon": "54.24639"
      },
      "district": "Приволжский",
      "name": "Нефтекамск",
      "population": 131942,
      "range": 1469,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "44.75056",
        "lon": "44.97972"
      },
      "district": "Северо-Кавказский",
      "name": "Нефтекумск",
      "population": 23137,
      "range": 1965,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "61.1",
        "lon": "72.6"
      },
      "district": "Уральский",
      "name": "Нефтеюганск",
      "population": 124732,
      "range": 2279,
      "subject": "Ханты-Мансийский АО"
    },
    {
      "coords": {
        "lat": "58.29444",
        "lon": "43.87806"
      },
      "district": "Центральный",
      "name": "Нея",
      "population": 7816,
      "range": 797,
      "subject": "Костромская область"
    },
    {
      "coords": {
        "lat": "60.93389",
        "lon": "76.58111"
      },
      "district": "Уральский",
      "name": "Нижневартовск",
      "population": 283256,
      "range": 2488,
      "subject": "Ханты-Мансийский АО"
    },
    {
      "coords": {
        "lat": "55.63333",
        "lon": "51.81667"
      },
      "district": "Приволжский",
      "name": "Нижнекамск",
      "population": 241479,
      "range": 1359,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "54.9",
        "lon": "99.01667"
      },
      "district": "Сибирский",
      "name": "Нижнеудинск",
      "population": 29995,
      "range": 3967,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "56.66667",
        "lon": "59.3"
      },
      "district": "Уральский",
      "name": "Нижние Серги",
      "population": 8009,
      "range": 1721,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "53.53333",
        "lon": "43.68333"
      },
      "district": "Приволжский",
      "name": "Нижний Ломов",
      "population": 20421,
      "range": 1089,
      "subject": "Пензенская область"
    },
    {
      "coords": {
        "lat": "56.32694",
        "lon": "44.0075"
      },
      "district": "Приволжский",
      "name": "Нижний Новгород",
      "population": 1226076,
      "range": 903,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "57.91667",
        "lon": "59.96667"
      },
      "district": "Уральский",
      "name": "Нижний Тагил",
      "population": 338966,
      "range": 1705,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "58.08333",
        "lon": "60.71667"
      },
      "district": "Уральский",
      "name": "Нижняя Салда",
      "population": 16505,
      "range": 1740,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "58.62083",
        "lon": "59.84778"
      },
      "district": "Уральский",
      "name": "Нижняя Тура",
      "population": 18392,
      "range": 1672,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "53.15",
        "lon": "140.73333"
      },
      "district": "Дальневосточный",
      "name": "Николаевск-на-Амуре",
      "population": 18631,
      "range": 6006,
      "subject": "Хабаровский край"
    },
    {
      "coords": {
        "lat": "50.02722",
        "lon": "45.46306"
      },
      "district": "Южный",
      "name": "Николаевск",
      "population": 13460,
      "range": 1471,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "59.53333",
        "lon": "45.45"
      },
      "district": "Северо-Западный",
      "name": "Никольск",
      "population": 7661,
      "range": 849,
      "subject": "Вологодская область"
    },
    {
      "coords": {
        "lat": "53.71667",
        "lon": "46.08333"
      },
      "district": "Приволжский",
      "name": "Никольск",
      "population": 19873,
      "range": 1187,
      "subject": "Пензенская область"
    },
    {
      "coords": {
        "lat": "59.704642",
        "lon": "30.788975"
      },
      "district": "Северо-Западный",
      "name": "Никольское",
      "population": 22355,
      "range": 47,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "60.106401",
        "lon": "32.316183"
      },
      "district": "Северо-Западный",
      "name": "Новая Ладога",
      "population": 7432,
      "range": 110,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "59.05",
        "lon": "60.6"
      },
      "district": "Уральский",
      "name": "Новая Ляля",
      "population": 10684,
      "range": 1699,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "45.49333",
        "lon": "41.21694"
      },
      "district": "Северо-Кавказский",
      "name": "Новоалександровск",
      "population": 26767,
      "range": 1775,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "53.4",
        "lon": "83.93333"
      },
      "district": "Сибирский",
      "name": "Новоалтайск",
      "population": 73049,
      "range": 3263,
      "subject": "Алтайский край"
    },
    {
      "coords": {
        "lat": "50.51667",
        "lon": "42.66667"
      },
      "district": "Южный",
      "name": "Новоаннинский",
      "population": 15351,
      "range": 1315,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "51.31667",
        "lon": "39.21667"
      },
      "district": "Центральный",
      "name": "Нововоронеж",
      "population": 30658,
      "range": 1122,
      "subject": "Воронежская область"
    },
    {
      "coords": {
        "lat": "64.41667",
        "lon": "40.81667"
      },
      "district": "Северо-Западный",
      "name": "Новодвинск",
      "population": 33294,
      "range": 727,
      "subject": "Архангельская область"
    },
    {
      "coords": {
        "lat": "52.53333",
        "lon": "31.93333"
      },
      "district": "Центральный",
      "name": "Новозыбков",
      "population": 38680,
      "range": 845,
      "subject": "Брянская область"
    },
    {
      "coords": {
        "lat": "45.1",
        "lon": "41.05"
      },
      "district": "Южный",
      "name": "Новокубанск",
      "population": 34000,
      "range": 1811,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "53.73333",
        "lon": "87.08333"
      },
      "district": "Сибирский",
      "name": "Новокузнецк",
      "population": 537480,
      "range": 3415,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "53.1",
        "lon": "49.91667"
      },
      "district": "Приволжский",
      "name": "Новокуйбышевск",
      "population": 98306,
      "range": 1424,
      "subject": "Самарская область"
    },
    {
      "coords": {
        "lat": "54.03333",
        "lon": "39.75"
      },
      "district": "Центральный",
      "name": "Новомичуринск",
      "population": 16900,
      "range": 880,
      "subject": "Рязанская область"
    },
    {
      "coords": {
        "lat": "54.03333",
        "lon": "38.26667"
      },
      "district": "Центральный",
      "name": "Новомосковск",
      "population": 119697,
      "range": 828,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "43.96361",
        "lon": "43.63944"
      },
      "district": "Северо-Кавказский",
      "name": "Новопавловск",
      "population": 20781,
      "range": 2003,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "57.03333",
        "lon": "29.33333"
      },
      "district": "Северо-Западный",
      "name": "Новоржев",
      "population": 3222,
      "range": 344,
      "subject": "Псковская область"
    },
    {
      "coords": {
        "lat": "44.71667",
        "lon": "37.76667"
      },
      "district": "Южный",
      "name": "Новороссийск",
      "population": 262293,
      "range": 1778,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "55.01667",
        "lon": "82.91667"
      },
      "district": "Сибирский",
      "name": "Новосибирск",
      "population": 1633595,
      "range": 3109,
      "subject": "Новосибирская область"
    },
    {
      "coords": {
        "lat": "52.96667",
        "lon": "37.05"
      },
      "district": "Центральный",
      "name": "Новосиль",
      "population": 2912,
      "range": 891,
      "subject": "Орловская область"
    },
    {
      "coords": {
        "lat": "56.33333",
        "lon": "30.15"
      },
      "district": "Северо-Западный",
      "name": "Новосокольники",
      "population": 6895,
      "range": 415,
      "subject": "Псковская область"
    },
    {
      "coords": {
        "lat": "51.20667",
        "lon": "58.32806"
      },
      "district": "Приволжский",
      "name": "Новотроицк",
      "population": 75960,
      "range": 1996,
      "subject": "Оренбургская область"
    },
    {
      "coords": {
        "lat": "50.45",
        "lon": "48.15"
      },
      "district": "Приволжский",
      "name": "Новоузенск",
      "population": 15216,
      "range": 1547,
      "subject": "Саратовская область"
    },
    {
      "coords": {
        "lat": "54.15",
        "lon": "48.38333"
      },
      "district": "Приволжский",
      "name": "Новоульяновск",
      "population": 13673,
      "range": 1270,
      "subject": "Ульяновская область"
    },
    {
      "coords": {
        "lat": "57.25",
        "lon": "60.08333"
      },
      "district": "Уральский",
      "name": "Новоуральск",
      "population": 78479,
      "range": 1739,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "51.1",
        "lon": "41.61667"
      },
      "district": "Центральный",
      "name": "Новохопёрск",
      "population": 5948,
      "range": 1223,
      "subject": "Воронежская область"
    },
    {
      "coords": {
        "lat": "56.12194",
        "lon": "47.4925"
      },
      "district": "Приволжский",
      "name": "Новочебоксарск",
      "population": 120375,
      "range": 1098,
      "subject": "Чувашия"
    },
    {
      "coords": {
        "lat": "47.43583",
        "lon": "40.09861"
      },
      "district": "Южный",
      "name": "Новочеркасск",
      "population": 163674,
      "range": 1544,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "47.76667",
        "lon": "39.91667"
      },
      "district": "Южный",
      "name": "Новошахтинск",
      "population": 103480,
      "range": 1505,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "50.76667",
        "lon": "37.86667"
      },
      "district": "Центральный",
      "name": "Новый Оскол",
      "population": 18359,
      "range": 1139,
      "subject": "Белгородская область"
    },
    {
      "coords": {
        "lat": "66.08472",
        "lon": "76.67889"
      },
      "district": "Уральский",
      "name": "Новый Уренгой",
      "population": 107251,
      "range": 2374,
      "subject": "Ямало-Ненецкий АО"
    },
    {
      "coords": {
        "lat": "55.85",
        "lon": "38.43333"
      },
      "district": "Центральный",
      "name": "Ногинск",
      "population": 103891,
      "range": 670,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "57.55722",
        "lon": "49.93417"
      },
      "district": "Приволжский",
      "name": "Нолинск",
      "population": 8262,
      "range": 1161,
      "subject": "Кировская область"
    },
    {
      "coords": {
        "lat": "69.33333",
        "lon": "88.21667"
      },
      "district": "Сибирский",
      "name": "Норильск",
      "population": 174453,
      "range": 2817,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "63.20167",
        "lon": "75.45167"
      },
      "district": "Уральский",
      "name": "Ноябрьск",
      "population": 100188,
      "range": 2366,
      "subject": "Ямало-Ненецкий АО"
    },
    {
      "coords": {
        "lat": "54.43333",
        "lon": "50.8"
      },
      "district": "Приволжский",
      "name": "Нурлат",
      "population": 33990,
      "range": 1378,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "57.93333",
        "lon": "55.33333"
      },
      "district": "Приволжский",
      "name": "Нытва",
      "population": 16675,
      "range": 1446,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "63.28333",
        "lon": "118.33333"
      },
      "district": "Дальневосточный",
      "name": "Нюрба",
      "population": 10138,
      "range": 4301,
      "subject": "Якутия"
    },
    {
      "coords": {
        "lat": "62.13333",
        "lon": "65.38333"
      },
      "district": "Уральский",
      "name": "Нягань",
      "population": 63034,
      "range": 1882,
      "subject": "Ханты-Мансийский АО"
    },
    {
      "coords": {
        "lat": "56.05",
        "lon": "59.6"
      },
      "district": "Уральский",
      "name": "Нязепетровск",
      "population": 10379,
      "range": 1767,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "61.666666666667",
        "lon": "40.2"
      },
      "district": "Северо-Западный",
      "name": "Няндома",
      "population": 18473,
      "range": 563,
      "subject": "Архангельская область"
    },
    {
      "coords": {
        "lat": "49",
        "lon": "131.05"
      },
      "district": "Дальневосточный",
      "name": "Облучье",
      "population": 7959,
      "range": 5971,
      "subject": "Еврейская АО"
    },
    {
      "coords": {
        "lat": "55.1",
        "lon": "36.61667"
      },
      "district": "Центральный",
      "name": "Обнинск",
      "population": 125376,
      "range": 666,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "51.21111",
        "lon": "36.27639"
      },
      "district": "Центральный",
      "name": "Обоянь",
      "population": 11844,
      "range": 1054,
      "subject": "Курская область"
    },
    {
      "coords": {
        "lat": "54.99167",
        "lon": "82.7125"
      },
      "district": "Сибирский",
      "name": "Обь",
      "population": 30369,
      "range": 3099,
      "subject": "Новосибирская область"
    },
    {
      "coords": {
        "lat": "55.67333",
        "lon": "37.27333"
      },
      "district": "Центральный",
      "name": "Одинцово",
      "population": 180530,
      "range": 638,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "54.41667",
        "lon": "22.01667"
      },
      "district": "Северо-Западный",
      "name": "Озёрск",
      "population": 4152,
      "range": 806,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "55.75",
        "lon": "60.71667"
      },
      "district": "Уральский",
      "name": "Озёрск",
      "population": 76896,
      "range": 1844,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "54.857875",
        "lon": "38.5438194"
      },
      "district": "Центральный",
      "name": "Озёры",
      "population": 24359,
      "range": 761,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "53.16667",
        "lon": "48.66667"
      },
      "district": "Приволжский",
      "name": "Октябрьск",
      "population": 20703,
      "range": 1355,
      "subject": "Самарская область"
    },
    {
      "coords": {
        "lat": "54.48333",
        "lon": "53.48333"
      },
      "district": "Приволжский",
      "name": "Октябрьский",
      "population": 115557,
      "range": 1517,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "58.38333",
        "lon": "33.3"
      },
      "district": "Северо-Западный",
      "name": "Окуловка",
      "population": 9949,
      "range": 253,
      "subject": "Новгородская область"
    },
    {
      "coords": {
        "lat": "68.15",
        "lon": "33.28333"
      },
      "district": "Северо-Западный",
      "name": "Оленегорск",
      "population": 21438,
      "range": 910,
      "subject": "Мурманская область"
    },
    {
      "coords": {
        "lat": "60.98333",
        "lon": "32.96667"
      },
      "district": "Северо-Западный",
      "name": "Олонец",
      "population": 7663,
      "range": 176,
      "subject": "Карелия"
    },
    {
      "coords": {
        "lat": "60.38333",
        "lon": "120.43333"
      },
      "district": "Дальневосточный",
      "name": "Олёкминск",
      "population": 8398,
      "range": 4588,
      "subject": "Якутия"
    },
    {
      "coords": {
        "lat": "54.96667",
        "lon": "73.38333"
      },
      "district": "Сибирский",
      "name": "Омск",
      "population": 1125695,
      "range": 2588,
      "subject": "Омская область"
    },
    {
      "coords": {
        "lat": "58.66667",
        "lon": "52.18333"
      },
      "district": "Приволжский",
      "name": "Омутнинск",
      "population": 19629,
      "range": 1245,
      "subject": "Кировская область"
    },
    {
      "coords": {
        "lat": "63.91667",
        "lon": "38.08333"
      },
      "district": "Северо-Западный",
      "name": "Онега",
      "population": 16947,
      "range": 589,
      "subject": "Архангельская область"
    },
    {
      "coords": {
        "lat": "56.71667",
        "lon": "28.65"
      },
      "district": "Северо-Западный",
      "name": "Опочка",
      "population": 9928,
      "range": 387,
      "subject": "Псковская область"
    },
    {
      "coords": {
        "lat": "51.76667",
        "lon": "55.1"
      },
      "district": "Приволжский",
      "name": "Оренбург",
      "population": 543654,
      "range": 1786,
      "subject": "Оренбургская область"
    },
    {
      "coords": {
        "lat": "55.8",
        "lon": "38.96667"
      },
      "district": "Центральный",
      "name": "Орехово-Зуево",
      "population": 105745,
      "range": 697,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "58.53889",
        "lon": "48.89861"
      },
      "district": "Приволжский",
      "name": "Орлов",
      "population": 5508,
      "range": 1067,
      "subject": "Кировская область"
    },
    {
      "coords": {
        "lat": "51.2",
        "lon": "58.61667"
      },
      "district": "Приволжский",
      "name": "Орск",
      "population": 189195,
      "range": 2003,
      "subject": "Оренбургская область"
    },
    {
      "coords": {
        "lat": "52.96667",
        "lon": "36.08333"
      },
      "district": "Центральный",
      "name": "Орёл",
      "population": 303169,
      "range": 865,
      "subject": "Орловская область"
    },
    {
      "coords": {
        "lat": "57.28333",
        "lon": "55.45"
      },
      "district": "Приволжский",
      "name": "Оса",
      "population": 19523,
      "range": 1480,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "53.61667",
        "lon": "87.33333"
      },
      "district": "Сибирский",
      "name": "Осинники",
      "population": 40367,
      "range": 3436,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "57.15",
        "lon": "33.1"
      },
      "district": "Центральный",
      "name": "Осташков",
      "population": 16674,
      "range": 362,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "57.33333",
        "lon": "28.35"
      },
      "district": "Северо-Западный",
      "name": "Остров",
      "population": 20923,
      "range": 325,
      "subject": "Псковская область"
    },
    {
      "coords": {
        "lat": "68.05306",
        "lon": "39.51306"
      },
      "district": "Северо-Западный",
      "name": "Островной",
      "population": 1487,
      "range": 994,
      "subject": "Мурманская область"
    },
    {
      "coords": {
        "lat": "50.86667",
        "lon": "39.06667"
      },
      "district": "Центральный",
      "name": "Острогожск",
      "population": 31699,
      "range": 1163,
      "subject": "Воронежская область"
    },
    {
      "coords": {
        "lat": "59.77409",
        "lon": "30.794553"
      },
      "district": "Северо-Западный",
      "name": "Отрадное",
      "population": 25706,
      "range": 41,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "53.36667",
        "lon": "51.35"
      },
      "district": "Приволжский",
      "name": "Отрадный",
      "population": 46984,
      "range": 1477,
      "subject": "Самарская область"
    },
    {
      "coords": {
        "lat": "53.58333",
        "lon": "142.95"
      },
      "district": "Дальневосточный",
      "name": "Оха",
      "population": 20357,
      "range": 6050,
      "subject": "Сахалинская область"
    },
    {
      "coords": {
        "lat": "57.71667",
        "lon": "55.38333"
      },
      "district": "Приволжский",
      "name": "Оханск",
      "population": 6430,
      "range": 1458,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "57.88333",
        "lon": "54.71667"
      },
      "district": "Приволжский",
      "name": "Очёр",
      "population": 14385,
      "range": 1414,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "55.96194",
        "lon": "43.09"
      },
      "district": "Приволжский",
      "name": "Павлово",
      "population": 57116,
      "range": 878,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "50.45",
        "lon": "40.06667"
      },
      "district": "Центральный",
      "name": "Павловск",
      "population": 22384,
      "range": 1235,
      "subject": "Воронежская область"
    },
    {
      "coords": {
        "lat": "59.68333",
        "lon": "30.43333"
      },
      "district": "Северо-Западный",
      "name": "Павловск",
      "population": 17463,
      "range": 43,
      "subject": "Санкт-Петербург"
    },
    {
      "coords": {
        "lat": "55.78333",
        "lon": "38.65"
      },
      "district": "Центральный",
      "name": "Павловский Посад",
      "population": 65098,
      "range": 685,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "50.05",
        "lon": "46.88333"
      },
      "district": "Южный",
      "name": "Палласовка",
      "population": 14966,
      "range": 1528,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "43.13333",
        "lon": "133.13333"
      },
      "district": "Дальневосточный",
      "name": "Партизанск",
      "population": 33832,
      "range": 6593,
      "subject": "Приморский край"
    },
    {
      "coords": {
        "lat": "69.7",
        "lon": "170.31667"
      },
      "district": "Дальневосточный",
      "name": "Певек",
      "population": 4015,
      "range": 5255,
      "subject": "Чукотский АО"
    },
    {
      "coords": {
        "lat": "53.2",
        "lon": "45"
      },
      "district": "Приволжский",
      "name": "Пенза",
      "population": 501109,
      "range": 1177,
      "subject": "Пензенская область"
    },
    {
      "coords": {
        "lat": "54.86667",
        "lon": "43.8"
      },
      "district": "Приволжский",
      "name": "Первомайск",
      "population": 13223,
      "range": 990,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "56.91667",
        "lon": "59.95"
      },
      "district": "Уральский",
      "name": "Первоуральск",
      "population": 114450,
      "range": 1746,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "55.6",
        "lon": "44.55"
      },
      "district": "Приволжский",
      "name": "Перевоз",
      "population": 8999,
      "range": 977,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "56.41667",
        "lon": "38.175"
      },
      "district": "Центральный",
      "name": "Пересвет",
      "population": 11752,
      "range": 613,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "56.7381333",
        "lon": "38.8561528"
      },
      "district": "Центральный",
      "name": "Переславль-Залесский",
      "population": 37738,
      "range": 620,
      "subject": "Ярославская область"
    },
    {
      "coords": {
        "lat": "58.01389",
        "lon": "56.24889"
      },
      "district": "Приволжский",
      "name": "Пермь",
      "population": 1034002,
      "range": 1493,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "58.6",
        "lon": "35.81667"
      },
      "district": "Северо-Западный",
      "name": "Пестово",
      "population": 14032,
      "range": 351,
      "subject": "Новгородская область"
    },
    {
      "coords": {
        "lat": "59.88333",
        "lon": "29.9"
      },
      "district": "Северо-Западный",
      "name": "Петергоф",
      "population": 80814,
      "range": 32,
      "subject": "Санкт-Петербург"
    },
    {
      "coords": {
        "lat": "50.13333",
        "lon": "45.21667"
      },
      "district": "Южный",
      "name": "Петров Вал",
      "population": 12526,
      "range": 1450,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "51.28333",
        "lon": "108.83333"
      },
      "district": "Сибирский",
      "name": "Петровск-Забайкальский",
      "population": 15015,
      "range": 4728,
      "subject": "Забайкальский край"
    },
    {
      "coords": {
        "lat": "52.31667",
        "lon": "45.38333"
      },
      "district": "Приволжский",
      "name": "Петровск",
      "population": 26319,
      "range": 1267,
      "subject": "Саратовская область"
    },
    {
      "coords": {
        "lat": "61.79611",
        "lon": "34.34917"
      },
      "district": "Северо-Западный",
      "name": "Петрозаводск",
      "population": 234897,
      "range": 291,
      "subject": "Карелия"
    },
    {
      "coords": {
        "lat": "53.01667",
        "lon": "158.65"
      },
      "district": "Дальневосточный",
      "name": "Петропавловск-Камчатский",
      "population": 164900,
      "range": 6637,
      "subject": "Камчатский край"
    },
    {
      "coords": {
        "lat": "55.06667",
        "lon": "67.88333"
      },
      "district": "Уральский",
      "name": "Петухово",
      "population": 8502,
      "range": 2280,
      "subject": "Курганская область"
    },
    {
      "coords": {
        "lat": "55.93333",
        "lon": "39.46667"
      },
      "district": "Центральный",
      "name": "Петушки",
      "population": 13317,
      "range": 708,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "65.11667",
        "lon": "57.11667"
      },
      "district": "Северо-Западный",
      "name": "Печора",
      "population": 35254,
      "range": 1473,
      "subject": "Коми"
    },
    {
      "coords": {
        "lat": "57.81667",
        "lon": "27.6"
      },
      "district": "Северо-Западный",
      "name": "Печоры",
      "population": 10247,
      "range": 297,
      "subject": "Псковская область"
    },
    {
      "coords": {
        "lat": "59.512684",
        "lon": "34.177483"
      },
      "district": "Северо-Западный",
      "name": "Пикалёво",
      "population": 20388,
      "range": 224,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "54.95",
        "lon": "20.21667"
      },
      "district": "Северо-Западный",
      "name": "Пионерский",
      "population": 12794,
      "range": 831,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "61.56667",
        "lon": "31.48333"
      },
      "district": "Северо-Западный",
      "name": "Питкяранта",
      "population": 8340,
      "range": 178,
      "subject": "Карелия"
    },
    {
      "coords": {
        "lat": "53.7",
        "lon": "37.3"
      },
      "district": "Центральный",
      "name": "Плавск",
      "population": 16893,
      "range": 825,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "54.36667",
        "lon": "60.81667"
      },
      "district": "Уральский",
      "name": "Пласт",
      "population": 18379,
      "range": 1926,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "57.45",
        "lon": "41.5"
      },
      "district": "Центральный",
      "name": "Плёс",
      "population": 1896,
      "range": 707,
      "subject": "Ивановская область"
    },
    {
      "coords": {
        "lat": "51.2",
        "lon": "42.25"
      },
      "district": "Центральный",
      "name": "Поворино",
      "population": 16417,
      "range": 1237,
      "subject": "Воронежская область"
    },
    {
      "coords": {
        "lat": "55.42972",
        "lon": "37.54444"
      },
      "district": "Центральный",
      "name": "Подольск",
      "population": 314934,
      "range": 671,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "60.912097",
        "lon": "34.167952"
      },
      "district": "Северо-Западный",
      "name": "Подпорожье",
      "population": 16123,
      "range": 230,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "61.75",
        "lon": "75.58333"
      },
      "district": "Уральский",
      "name": "Покачи",
      "population": 16040,
      "range": 2412,
      "subject": "Ханты-Мансийский АО"
    },
    {
      "coords": {
        "lat": "55.91778",
        "lon": "39.175"
      },
      "district": "Центральный",
      "name": "Покров",
      "population": 17747,
      "range": 697,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "61.48333",
        "lon": "129.15"
      },
      "district": "Дальневосточный",
      "name": "Покровск",
      "population": 12021,
      "range": 1385,
      "subject": "Якутия"
    },
    {
      "coords": {
        "lat": "56.45",
        "lon": "60.18333"
      },
      "district": "Уральский",
      "name": "Полевской",
      "population": 55182,
      "range": 1781,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "54.86667",
        "lon": "21.1"
      },
      "district": "Северо-Западный",
      "name": "Полесск",
      "population": 6926,
      "range": 801,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "54.6",
        "lon": "86.28333"
      },
      "district": "Сибирский",
      "name": "Полысаево",
      "population": 25631,
      "range": 3317,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "67.36583",
        "lon": "32.49806"
      },
      "district": "Северо-Западный",
      "name": "Полярные Зори",
      "population": 14146,
      "range": 820,
      "subject": "Мурманская область"
    },
    {
      "coords": {
        "lat": "69.19833",
        "lon": "33.45611"
      },
      "district": "Северо-Западный",
      "name": "Полярный",
      "population": 12293,
      "range": 1028,
      "subject": "Мурманская область"
    },
    {
      "coords": {
        "lat": "49.21667",
        "lon": "143.1"
      },
      "district": "Дальневосточный",
      "name": "Поронайск",
      "population": 16026,
      "range": 6458,
      "subject": "Сахалинская область"
    },
    {
      "coords": {
        "lat": "57.76667",
        "lon": "29.55"
      },
      "district": "Северо-Западный",
      "name": "Порхов",
      "population": 7309,
      "range": 262,
      "subject": "Псковская область"
    },
    {
      "coords": {
        "lat": "53.65",
        "lon": "52.13333"
      },
      "district": "Приволжский",
      "name": "Похвистнево",
      "population": 27333,
      "range": 1498,
      "subject": "Самарская область"
    },
    {
      "coords": {
        "lat": "52.93333",
        "lon": "33.45"
      },
      "district": "Центральный",
      "name": "Почеп",
      "population": 14991,
      "range": 818,
      "subject": "Брянская область"
    },
    {
      "coords": {
        "lat": "54.4",
        "lon": "32.45"
      },
      "district": "Центральный",
      "name": "Починок",
      "population": 7575,
      "range": 644,
      "subject": "Смоленская область"
    },
    {
      "coords": {
        "lat": "58.5",
        "lon": "39.11667"
      },
      "district": "Центральный",
      "name": "Пошехонье",
      "population": 5150,
      "range": 529,
      "subject": "Ярославская область"
    },
    {
      "coords": {
        "lat": "54.45",
        "lon": "21.01667"
      },
      "district": "Северо-Западный",
      "name": "Правдинск",
      "population": 3986,
      "range": 841,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "57.38333",
        "lon": "41.28333"
      },
      "district": "Центральный",
      "name": "Приволжск",
      "population": 14332,
      "range": 700,
      "subject": "Ивановская область"
    },
    {
      "coords": {
        "lat": "54.73333",
        "lon": "20"
      },
      "district": "Северо-Западный",
      "name": "Приморск",
      "population": 1436,
      "range": 859,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "60.366014",
        "lon": "28.613561"
      },
      "district": "Северо-Западный",
      "name": "Приморск",
      "population": 6537,
      "range": 101,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "46.05",
        "lon": "38.18333"
      },
      "district": "Южный",
      "name": "Приморско-Ахтарск",
      "population": 31087,
      "range": 1644,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "61.035979",
        "lon": "30.115589"
      },
      "district": "Северо-Западный",
      "name": "Приозерск",
      "population": 18777,
      "range": 108,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "53.88333",
        "lon": "86.71667"
      },
      "district": "Сибирский",
      "name": "Прокопьевск",
      "population": 177819,
      "range": 3386,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "46.70306",
        "lon": "41.71917"
      },
      "district": "Южный",
      "name": "Пролетарск",
      "population": 18983,
      "range": 1664,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "54.87944",
        "lon": "37.21389"
      },
      "district": "Центральный",
      "name": "Протвино",
      "population": 37735,
      "range": 711,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "43.750055",
        "lon": "44.033333"
      },
      "district": "Северо-Кавказский",
      "name": "Прохладный",
      "population": 59938,
      "range": 2035,
      "subject": "Кабардино-Балкария"
    },
    {
      "coords": {
        "lat": "57.81667",
        "lon": "28.33333"
      },
      "district": "Северо-Западный",
      "name": "Псков",
      "population": 193082,
      "range": 277,
      "subject": "Псковская область"
    },
    {
      "coords": {
        "lat": "52.01667",
        "lon": "48.8"
      },
      "district": "Приволжский",
      "name": "Пугачёв",
      "population": 40127,
      "range": 1451,
      "subject": "Саратовская область"
    },
    {
      "coords": {
        "lat": "61.8",
        "lon": "36.53333"
      },
      "district": "Северо-Западный",
      "name": "Пудож",
      "population": 7356,
      "range": 387,
      "subject": "Карелия"
    },
    {
      "coords": {
        "lat": "56.33333",
        "lon": "29.36667"
      },
      "district": "Северо-Западный",
      "name": "Пустошка",
      "population": 4070,
      "range": 420,
      "subject": "Псковская область"
    },
    {
      "coords": {
        "lat": "56.98333",
        "lon": "43.16667"
      },
      "district": "Центральный",
      "name": "Пучеж",
      "population": 6879,
      "range": 821,
      "subject": "Ивановская область"
    },
    {
      "coords": {
        "lat": "59.71667",
        "lon": "30.41667"
      },
      "district": "Северо-Западный",
      "name": "Пушкин",
      "population": 107223,
      "range": 40,
      "subject": "Санкт-Петербург"
    },
    {
      "coords": {
        "lat": "56.01667",
        "lon": "37.85"
      },
      "district": "Центральный",
      "name": "Пушкино",
      "population": 110868,
      "range": 632,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "54.83333",
        "lon": "37.61667"
      },
      "district": "Центральный",
      "name": "Пущино",
      "population": 19578,
      "range": 728,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "57.066666666667",
        "lon": "27.916666666667"
      },
      "district": "Северо-Западный",
      "name": "Пыталово",
      "population": 5263,
      "range": 364,
      "subject": "Псковская область"
    },
    {
      "coords": {
        "lat": "60.75",
        "lon": "72.78333"
      },
      "district": "Уральский",
      "name": "Пыть-Ях",
      "population": 40180,
      "range": 2301,
      "subject": "Ханты-Мансийский АО"
    },
    {
      "coords": {
        "lat": "44.0499664",
        "lon": "43.0600548"
      },
      "district": "Северо-Кавказский",
      "name": "Пятигорск",
      "population": 146473,
      "range": 1978,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "55.99778",
        "lon": "40.32972"
      },
      "district": "Центральный",
      "name": "Радужный",
      "population": 17569,
      "range": 743,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "62.13333",
        "lon": "77.46667"
      },
      "district": "Уральский",
      "name": "Радужный",
      "population": 43577,
      "range": 2495,
      "subject": "Ханты-Мансийский АО"
    },
    {
      "coords": {
        "lat": "49.8",
        "lon": "129.4"
      },
      "district": "Дальневосточный",
      "name": "Райчихинск",
      "population": 15797,
      "range": 5830,
      "subject": "Амурская область"
    },
    {
      "coords": {
        "lat": "55.56667",
        "lon": "38.21667"
      },
      "district": "Центральный",
      "name": "Раменское",
      "population": 114537,
      "range": 685,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "52.66667",
        "lon": "41.88333"
      },
      "district": "Центральный",
      "name": "Рассказово",
      "population": 47644,
      "range": 1088,
      "subject": "Тамбовская область"
    },
    {
      "coords": {
        "lat": "56.8",
        "lon": "59.91667"
      },
      "district": "Уральский",
      "name": "Ревда",
      "population": 60200,
      "range": 1749,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "57.36667",
        "lon": "61.4"
      },
      "district": "Уральский",
      "name": "Реж",
      "population": 36585,
      "range": 1807,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "55.760611",
        "lon": "37.855194"
      },
      "district": "Центральный",
      "name": "Реутов",
      "population": 113871,
      "range": 654,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "56.26556",
        "lon": "34.3275"
      },
      "district": "Центральный",
      "name": "Ржев",
      "population": 55757,
      "range": 485,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "57.1",
        "lon": "41.73333"
      },
      "district": "Центральный",
      "name": "Родники",
      "population": 24101,
      "range": 739,
      "subject": "Ивановская область"
    },
    {
      "coords": {
        "lat": "53.949166666667",
        "lon": "32.856944444444"
      },
      "district": "Центральный",
      "name": "Рославль",
      "population": 45416,
      "range": 699,
      "subject": "Смоленская область"
    },
    {
      "coords": {
        "lat": "50.2",
        "lon": "39.58333"
      },
      "district": "Центральный",
      "name": "Россошь",
      "population": 60879,
      "range": 1244,
      "subject": "Воронежская область"
    },
    {
      "coords": {
        "lat": "47.24056",
        "lon": "39.71056"
      },
      "district": "Южный",
      "name": "Ростов-на-Дону",
      "population": 1142162,
      "range": 1555,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "57.18333",
        "lon": "39.41667"
      },
      "district": "Центральный",
      "name": "Ростов",
      "population": 28122,
      "range": 616,
      "subject": "Ярославская область"
    },
    {
      "coords": {
        "lat": "55.66361",
        "lon": "39.865"
      },
      "district": "Центральный",
      "name": "Рошаль",
      "population": 21401,
      "range": 747,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "52.25",
        "lon": "43.78333"
      },
      "district": "Приволжский",
      "name": "Ртищево",
      "population": 37850,
      "range": 1201,
      "subject": "Саратовская область"
    },
    {
      "coords": {
        "lat": "51.52722",
        "lon": "81.218806"
      },
      "district": "Сибирский",
      "name": "Рубцовск",
      "population": 126834,
      "range": 3236,
      "subject": "Алтайский край"
    },
    {
      "coords": {
        "lat": "54.95",
        "lon": "31.06667"
      },
      "district": "Центральный",
      "name": "Рудня",
      "population": 8908,
      "range": 573,
      "subject": "Смоленская область"
    },
    {
      "coords": {
        "lat": "55.698888888889",
        "lon": "36.195277777778"
      },
      "district": "Центральный",
      "name": "Руза",
      "population": 16014,
      "range": 597,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "54.06667",
        "lon": "44.95"
      },
      "district": "Приволжский",
      "name": "Рузаевка",
      "population": 42989,
      "range": 1106,
      "subject": "Мордовия"
    },
    {
      "coords": {
        "lat": "58.05",
        "lon": "38.83333"
      },
      "district": "Центральный",
      "name": "Рыбинск",
      "population": 177295,
      "range": 573,
      "subject": "Ярославская область"
    },
    {
      "coords": {
        "lat": "54.73333",
        "lon": "39.51667"
      },
      "district": "Центральный",
      "name": "Рыбное",
      "population": 21069,
      "range": 809,
      "subject": "Рязанская область"
    },
    {
      "coords": {
        "lat": "51.56667",
        "lon": "34.68333"
      },
      "district": "Центральный",
      "name": "Рыльск",
      "population": 15069,
      "range": 984,
      "subject": "Курская область"
    },
    {
      "coords": {
        "lat": "53.71667",
        "lon": "40.06667"
      },
      "district": "Центральный",
      "name": "Ряжск",
      "population": 20634,
      "range": 922,
      "subject": "Рязанская область"
    },
    {
      "coords": {
        "lat": "54.61667",
        "lon": "39.71667"
      },
      "district": "Центральный",
      "name": "Рязань",
      "population": 528599,
      "range": 827,
      "subject": "Рязанская область"
    },
    {
      "coords": {
        "lat": "45.13361",
        "lon": "33.57722"
      },
      "district": "Южный",
      "name": "Саки",
      "population": 24285,
      "range": 1667,
      "subject": "Крым"
    },
    {
      "coords": {
        "lat": "53.36667",
        "lon": "55.93333"
      },
      "district": "Приволжский",
      "name": "Салават",
      "population": 148575,
      "range": 1720,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "54.23333",
        "lon": "85.8"
      },
      "district": "Сибирский",
      "name": "Салаир",
      "population": 7088,
      "range": 3312,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "66.53333",
        "lon": "66.63333"
      },
      "district": "Уральский",
      "name": "Салехард",
      "population": 47910,
      "range": 1922,
      "subject": "Ямало-Ненецкий АО"
    },
    {
      "coords": {
        "lat": "46.48333",
        "lon": "41.53333"
      },
      "district": "Южный",
      "name": "Сальск",
      "population": 57937,
      "range": 1682,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "53.18333",
        "lon": "50.11667"
      },
      "district": "Приволжский",
      "name": "Самара",
      "population": 1173299,
      "range": 1425,
      "subject": "Самарская область"
    },
    {
      "coords": {
        "lat": "59.95",
        "lon": "30.31667"
      },
      "district": "Северо-Западный",
      "name": "Санкт-Петербург",
      "population": 5601911,
      "range": 0,
      "subject": "Санкт-Петербург"
    },
    {
      "coords": {
        "lat": "54.18333",
        "lon": "45.18333"
      },
      "district": "Приволжский",
      "name": "Саранск",
      "population": 314871,
      "range": 1108,
      "subject": "Мордовия"
    },
    {
      "coords": {
        "lat": "56.46667",
        "lon": "53.8"
      },
      "district": "Приволжский",
      "name": "Сарапул",
      "population": 91115,
      "range": 1425,
      "subject": "Удмуртия"
    },
    {
      "coords": {
        "lat": "51.53333",
        "lon": "46"
      },
      "district": "Приволжский",
      "name": "Саратов",
      "population": 901361,
      "range": 1361,
      "subject": "Саратовская область"
    },
    {
      "coords": {
        "lat": "54.93333",
        "lon": "43.31667"
      },
      "district": "Приволжский",
      "name": "Саров",
      "population": 93357,
      "range": 965,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "54.35",
        "lon": "41.91667"
      },
      "district": "Центральный",
      "name": "Сасово",
      "population": 21628,
      "range": 944,
      "subject": "Рязанская область"
    },
    {
      "coords": {
        "lat": "55.05",
        "lon": "59.05"
      },
      "district": "Уральский",
      "name": "Сатка",
      "population": 42597,
      "range": 1786,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "55.1",
        "lon": "33.25"
      },
      "district": "Центральный",
      "name": "Сафоново",
      "population": 38403,
      "range": 579,
      "subject": "Смоленская область"
    },
    {
      "coords": {
        "lat": "53.1",
        "lon": "91.4"
      },
      "district": "Сибирский",
      "name": "Саяногорск",
      "population": 44872,
      "range": 3687,
      "subject": "Хакасия"
    },
    {
      "coords": {
        "lat": "54.11667",
        "lon": "102.16667"
      },
      "district": "Сибирский",
      "name": "Саянск",
      "population": 35561,
      "range": 4182,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "54.9394",
        "lon": "20.1565"
      },
      "district": "Северо-Западный",
      "name": "Светлогорск",
      "population": 16207,
      "range": 835,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "45.33083",
        "lon": "42.85111"
      },
      "district": "Северо-Кавказский",
      "name": "Светлоград",
      "population": 35703,
      "range": 1839,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "54.68333",
        "lon": "20.13333"
      },
      "district": "Северо-Западный",
      "name": "Светлый",
      "population": 21114,
      "range": 858,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "61.10833",
        "lon": "28.85833"
      },
      "district": "Северо-Западный",
      "name": "Светогорск",
      "population": 13784,
      "range": 141,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "53.08333",
        "lon": "103.33333"
      },
      "district": "Сибирский",
      "name": "Свирск",
      "population": 15485,
      "range": 4315,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "51.38333",
        "lon": "128.13333"
      },
      "district": "Дальневосточный",
      "name": "Свободный",
      "population": 48517,
      "range": 5637,
      "subject": "Амурская область"
    },
    {
      "coords": {
        "lat": "56.28333",
        "lon": "28.48333"
      },
      "district": "Северо-Западный",
      "name": "Себеж",
      "population": 6246,
      "range": 437,
      "subject": "Псковская область"
    },
    {
      "coords": {
        "lat": "44.6",
        "lon": "33.53333"
      },
      "district": "Южный",
      "name": "Севастополь",
      "population": 547820,
      "range": 1733,
      "subject": "Севастополь"
    },
    {
      "coords": {
        "lat": "50.66667",
        "lon": "156.11667"
      },
      "district": "Дальневосточный",
      "name": "Северо-Курильск",
      "population": 2374,
      "range": 6789,
      "subject": "Сахалинская область"
    },
    {
      "coords": {
        "lat": "55.63333",
        "lon": "109.31667"
      },
      "district": "Сибирский",
      "name": "Северобайкальск",
      "population": 24233,
      "range": 4429,
      "subject": "Бурятия"
    },
    {
      "coords": {
        "lat": "64.56667",
        "lon": "39.85"
      },
      "district": "Северо-Западный",
      "name": "Северодвинск",
      "population": 157213,
      "range": 700,
      "subject": "Архангельская область"
    },
    {
      "coords": {
        "lat": "69.06917",
        "lon": "33.41667"
      },
      "district": "Северо-Западный",
      "name": "Североморск",
      "population": 43327,
      "range": 1014,
      "subject": "Мурманская область"
    },
    {
      "coords": {
        "lat": "60.15",
        "lon": "59.93333"
      },
      "district": "Уральский",
      "name": "Североуральск",
      "population": 24428,
      "range": 1632,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "56.6",
        "lon": "84.85"
      },
      "district": "Сибирский",
      "name": "Северск",
      "population": 106648,
      "range": 3124,
      "subject": "Томская область"
    },
    {
      "coords": {
        "lat": "52.15",
        "lon": "34.49389"
      },
      "district": "Центральный",
      "name": "Севск",
      "population": 6732,
      "range": 918,
      "subject": "Брянская область"
    },
    {
      "coords": {
        "lat": "63.73333",
        "lon": "34.31667"
      },
      "district": "Северо-Западный",
      "name": "Сегежа",
      "population": 23543,
      "range": 459,
      "subject": "Карелия"
    },
    {
      "coords": {
        "lat": "53.36944",
        "lon": "34.1"
      },
      "district": "Центральный",
      "name": "Сельцо",
      "population": 15906,
      "range": 780,
      "subject": "Брянская область"
    },
    {
      "coords": {
        "lat": "47.51667",
        "lon": "40.8"
      },
      "district": "Южный",
      "name": "Семикаракорск",
      "population": 21719,
      "range": 1554,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "51.68333",
        "lon": "39.03333"
      },
      "district": "Центральный",
      "name": "Семилуки",
      "population": 27938,
      "range": 1077,
      "subject": "Воронежская область"
    },
    {
      "coords": {
        "lat": "56.78944",
        "lon": "44.49056"
      },
      "district": "Приволжский",
      "name": "Семёнов",
      "population": 25075,
      "range": 901,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "53.96667",
        "lon": "48.8"
      },
      "district": "Приволжский",
      "name": "Сенгилей",
      "population": 6407,
      "range": 1304,
      "subject": "Ульяновская область"
    },
    {
      "coords": {
        "lat": "49.58333",
        "lon": "42.73333"
      },
      "district": "Южный",
      "name": "Серафимович",
      "population": 8633,
      "range": 1408,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "55.53333",
        "lon": "45.46667"
      },
      "district": "Приволжский",
      "name": "Сергач",
      "population": 20256,
      "range": 1028,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "56.3",
        "lon": "38.13333"
      },
      "district": "Центральный",
      "name": "Сергиев Посад",
      "population": 101756,
      "range": 620,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "52.46667",
        "lon": "44.21667"
      },
      "district": "Приволжский",
      "name": "Сердобск",
      "population": 30220,
      "range": 1202,
      "subject": "Пензенская область"
    },
    {
      "coords": {
        "lat": "59.58333",
        "lon": "60.56667"
      },
      "district": "Уральский",
      "name": "Серов",
      "population": 94211,
      "range": 1681,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "54.91667",
        "lon": "37.4"
      },
      "district": "Центральный",
      "name": "Серпухов",
      "population": 133793,
      "range": 713,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "60.141613",
        "lon": "30.211879"
      },
      "district": "Северо-Западный",
      "name": "Сертолово",
      "population": 68241,
      "range": 11,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "60.1",
        "lon": "29.96667"
      },
      "district": "Северо-Западный",
      "name": "Сестрорецк",
      "population": 45192,
      "range": 21,
      "subject": "Санкт-Петербург"
    },
    {
      "coords": {
        "lat": "52.7",
        "lon": "58.65"
      },
      "district": "Приволжский",
      "name": "Сибай",
      "population": 56514,
      "range": 1911,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "54.98333",
        "lon": "57.68333"
      },
      "district": "Уральский",
      "name": "Сим",
      "population": 12858,
      "range": 1718,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "44.94806",
        "lon": "34.10417"
      },
      "district": "Южный",
      "name": "Симферополь",
      "population": 340540,
      "range": 1702,
      "subject": "Крым"
    },
    {
      "coords": {
        "lat": "53.98333",
        "lon": "123.93333"
      },
      "district": "Дальневосточный",
      "name": "Сковородино",
      "population": 7057,
      "range": 5233,
      "subject": "Амурская область"
    },
    {
      "coords": {
        "lat": "53.81667",
        "lon": "39.55"
      },
      "district": "Центральный",
      "name": "Скопин",
      "population": 25238,
      "range": 892,
      "subject": "Рязанская область"
    },
    {
      "coords": {
        "lat": "53",
        "lon": "78.65"
      },
      "district": "Сибирский",
      "name": "Славгород",
      "population": 27900,
      "range": 2999,
      "subject": "Алтайский край"
    },
    {
      "coords": {
        "lat": "55.05",
        "lon": "21.66667"
      },
      "district": "Северо-Западный",
      "name": "Славск",
      "population": 4153,
      "range": 762,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "45.25861",
        "lon": "38.12472"
      },
      "district": "Южный",
      "name": "Славянск-на-Кубани",
      "population": 62985,
      "range": 1727,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "59.11779",
        "lon": "28.088145"
      },
      "district": "Северо-Западный",
      "name": "Сланцы",
      "population": 34628,
      "range": 166,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "58.724167",
        "lon": "50.161167"
      },
      "district": "Приволжский",
      "name": "Слободской",
      "population": 29148,
      "range": 1132,
      "subject": "Кировская область"
    },
    {
      "coords": {
        "lat": "51.66667",
        "lon": "103.7"
      },
      "district": "Сибирский",
      "name": "Слюдянка",
      "population": 18058,
      "range": 4436,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "54.78278",
        "lon": "32.04528"
      },
      "district": "Центральный",
      "name": "Смоленск",
      "population": 316570,
      "range": 598,
      "subject": "Смоленская область"
    },
    {
      "coords": {
        "lat": "56.08333",
        "lon": "60.73333"
      },
      "district": "Уральский",
      "name": "Снежинск",
      "population": 50619,
      "range": 1829,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "69.19417",
        "lon": "33.23306"
      },
      "district": "Северо-Западный",
      "name": "Снежногорск",
      "population": 9942,
      "range": 1026,
      "subject": "Мурманская область"
    },
    {
      "coords": {
        "lat": "55.99",
        "lon": "40.01667"
      },
      "district": "Центральный",
      "name": "Собинка",
      "population": 17444,
      "range": 729,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "55.08333",
        "lon": "21.88333"
      },
      "district": "Северо-Западный",
      "name": "Советск",
      "population": 38910,
      "range": 750,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "57.601306",
        "lon": "48.938611"
      },
      "district": "Приволжский",
      "name": "Советск",
      "population": 14626,
      "range": 1106,
      "subject": "Кировская область"
    },
    {
      "coords": {
        "lat": "53.93333",
        "lon": "37.63333"
      },
      "district": "Центральный",
      "name": "Советск",
      "population": 7889,
      "range": 813,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "48.966373",
        "lon": "140.285189"
      },
      "district": "Дальневосточный",
      "name": "Советская Гавань",
      "population": 24231,
      "range": 6369,
      "subject": "Хабаровский край"
    },
    {
      "coords": {
        "lat": "61.36667",
        "lon": "63.56667"
      },
      "district": "Уральский",
      "name": "Советский",
      "population": 31138,
      "range": 1799,
      "subject": "Ханты-Мансийский АО"
    },
    {
      "coords": {
        "lat": "59.46667",
        "lon": "40.11667"
      },
      "district": "Северо-Западный",
      "name": "Сокол",
      "population": 34742,
      "range": 553,
      "subject": "Вологодская область"
    },
    {
      "coords": {
        "lat": "59.08333",
        "lon": "42.28333"
      },
      "district": "Центральный",
      "name": "Солигалич",
      "population": 5534,
      "range": 683,
      "subject": "Костромская область"
    },
    {
      "coords": {
        "lat": "59.63333",
        "lon": "56.76667"
      },
      "district": "Приволжский",
      "name": "Соликамск",
      "population": 89473,
      "range": 1471,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "56.185114",
        "lon": "36.977618"
      },
      "district": "Центральный",
      "name": "Солнечногорск",
      "population": 48413,
      "range": 583,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "51.16667",
        "lon": "54.98333"
      },
      "district": "Приволжский",
      "name": "Соль-Илецк",
      "population": 26149,
      "range": 1825,
      "subject": "Оренбургская область"
    },
    {
      "coords": {
        "lat": "61.33333",
        "lon": "46.91667"
      },
      "district": "Северо-Западный",
      "name": "Сольвычегодск",
      "population": 1952,
      "range": 914,
      "subject": "Архангельская область"
    },
    {
      "coords": {
        "lat": "58.11667",
        "lon": "30.31667"
      },
      "district": "Северо-Западный",
      "name": "Сольцы",
      "population": 8449,
      "range": 218,
      "subject": "Новгородская область"
    },
    {
      "coords": {
        "lat": "52.43333",
        "lon": "53.15"
      },
      "district": "Приволжский",
      "name": "Сорочинск",
      "population": 28478,
      "range": 1637,
      "subject": "Оренбургская область"
    },
    {
      "coords": {
        "lat": "54",
        "lon": "90.25"
      },
      "district": "Сибирский",
      "name": "Сорск",
      "population": 10124,
      "range": 3567,
      "subject": "Хакасия"
    },
    {
      "coords": {
        "lat": "61.7",
        "lon": "30.66667"
      },
      "district": "Северо-Западный",
      "name": "Сортавала",
      "population": 14867,
      "range": 183,
      "subject": "Карелия"
    },
    {
      "coords": {
        "lat": "54.05",
        "lon": "35.96667"
      },
      "district": "Центральный",
      "name": "Сосенский",
      "population": 11413,
      "range": 751,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "56.2543",
        "lon": "51.2812"
      },
      "district": "Приволжский",
      "name": "Сосновка",
      "population": 8428,
      "range": 1297,
      "subject": "Кировская область"
    },
    {
      "coords": {
        "lat": "56.13333",
        "lon": "93.36667"
      },
      "district": "Сибирский",
      "name": "Сосновоборск",
      "population": 40442,
      "range": 3596,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "59.9",
        "lon": "29.08611"
      },
      "district": "Северо-Западный",
      "name": "Сосновый Бор",
      "population": 65367,
      "range": 73,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "63.58333",
        "lon": "53.93333"
      },
      "district": "Северо-Западный",
      "name": "Сосногорск",
      "population": 22189,
      "range": 1292,
      "subject": "Коми"
    },
    {
      "coords": {
        "lat": "43.58528",
        "lon": "39.72028"
      },
      "district": "Южный",
      "name": "Сочи",
      "population": 466078,
      "range": 1940,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "54.409808",
        "lon": "34.018992"
      },
      "district": "Центральный",
      "name": "Спас-Деменск",
      "population": 4569,
      "range": 668,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "55.13333",
        "lon": "40.16667"
      },
      "district": "Центральный",
      "name": "Спас-Клепики",
      "population": 4743,
      "range": 804,
      "subject": "Рязанская область"
    },
    {
      "coords": {
        "lat": "44.6",
        "lon": "132.81667"
      },
      "district": "Дальневосточный",
      "name": "Спасск-Дальний",
      "population": 35732,
      "range": 6445,
      "subject": "Приморский край"
    },
    {
      "coords": {
        "lat": "54.4",
        "lon": "40.38333"
      },
      "district": "Центральный",
      "name": "Спасск-Рязанский",
      "population": 5796,
      "range": 873,
      "subject": "Рязанская область"
    },
    {
      "coords": {
        "lat": "53.93333",
        "lon": "43.18333"
      },
      "district": "Приволжский",
      "name": "Спасск",
      "population": 6936,
      "range": 1035,
      "subject": "Пензенская область"
    },
    {
      "coords": {
        "lat": "67.458",
        "lon": "153.706"
      },
      "district": "Дальневосточный",
      "name": "Среднеколымск",
      "population": 3131,
      "range": 5125,
      "subject": "Якутия"
    },
    {
      "coords": {
        "lat": "56.98333",
        "lon": "60.46667"
      },
      "district": "Уральский",
      "name": "Среднеуральск",
      "population": 23344,
      "range": 1771,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "52.25",
        "lon": "117.71667"
      },
      "district": "Сибирский",
      "name": "Сретенск",
      "population": 6093,
      "range": 5085,
      "subject": "Забайкальский край"
    },
    {
      "coords": {
        "lat": "45.03333",
        "lon": "41.96667"
      },
      "district": "Северо-Кавказский",
      "name": "Ставрополь",
      "population": 547443,
      "range": 1842,
      "subject": "Ставропольский край"
    },
    {
      "coords": {
        "lat": "55.8",
        "lon": "38.18333"
      },
      "district": "Центральный",
      "name": "Старая Купавна",
      "population": 22898,
      "range": 663,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "57.98333",
        "lon": "31.35"
      },
      "district": "Северо-Западный",
      "name": "Старая Русса",
      "population": 27487,
      "range": 239,
      "subject": "Новгородская область"
    },
    {
      "coords": {
        "lat": "56.51667",
        "lon": "34.93333"
      },
      "district": "Центральный",
      "name": "Старица",
      "population": 6938,
      "range": 479,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "52.58333",
        "lon": "32.76667"
      },
      "district": "Центральный",
      "name": "Стародуб",
      "population": 17687,
      "range": 847,
      "subject": "Брянская область"
    },
    {
      "coords": {
        "lat": "45.02917",
        "lon": "35.08861"
      },
      "district": "Южный",
      "name": "Старый Крым",
      "population": 10470,
      "range": 1703,
      "subject": "Крым"
    },
    {
      "coords": {
        "lat": "51.29806",
        "lon": "37.835"
      },
      "district": "Центральный",
      "name": "Старый Оскол",
      "population": 221676,
      "range": 1083,
      "subject": "Белгородская область"
    },
    {
      "coords": {
        "lat": "53.63333",
        "lon": "55.95"
      },
      "district": "Приволжский",
      "name": "Стерлитамак",
      "population": 277410,
      "range": 1703,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "60.73333",
        "lon": "77.58333"
      },
      "district": "Сибирский",
      "name": "Стрежевой",
      "population": 39169,
      "range": 2549,
      "subject": "Томская область"
    },
    {
      "coords": {
        "lat": "50.78333",
        "lon": "36.48333"
      },
      "district": "Центральный",
      "name": "Строитель",
      "population": 23780,
      "range": 1104,
      "subject": "Белгородская область"
    },
    {
      "coords": {
        "lat": "56.37333",
        "lon": "38.585"
      },
      "district": "Центральный",
      "name": "Струнино",
      "population": 11774,
      "range": 635,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "54.88694",
        "lon": "38.07722"
      },
      "district": "Центральный",
      "name": "Ступино",
      "population": 64412,
      "range": 740,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "54.11667",
        "lon": "36.5"
      },
      "district": "Центральный",
      "name": "Суворов",
      "population": 17598,
      "range": 759,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "44.85139",
        "lon": "34.9725"
      },
      "district": "Южный",
      "name": "Судак",
      "population": 17834,
      "range": 1722,
      "subject": "Крым"
    },
    {
      "coords": {
        "lat": "51.190694",
        "lon": "35.27083"
      },
      "district": "Центральный",
      "name": "Суджа",
      "population": 5127,
      "range": 1036,
      "subject": "Курская область"
    },
    {
      "coords": {
        "lat": "55.95",
        "lon": "40.86667"
      },
      "district": "Центральный",
      "name": "Судогда",
      "population": 10408,
      "range": 771,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "56.42111",
        "lon": "40.44889"
      },
      "district": "Центральный",
      "name": "Суздаль",
      "population": 9286,
      "range": 718,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "43.313475",
        "lon": "45.051581"
      },
      "district": "Северо-Кавказский",
      "name": "Сунжа",
      "population": 62078,
      "range": 2112,
      "subject": "Ингушетия"
    },
    {
      "coords": {
        "lat": "62.08333",
        "lon": "32.36667"
      },
      "district": "Северо-Западный",
      "name": "Суоярви",
      "population": 7190,
      "range": 250,
      "subject": "Карелия"
    },
    {
      "coords": {
        "lat": "53.01667",
        "lon": "32.4"
      },
      "district": "Центральный",
      "name": "Сураж",
      "population": 11176,
      "range": 796,
      "subject": "Брянская область"
    },
    {
      "coords": {
        "lat": "61.25",
        "lon": "73.43333"
      },
      "district": "Уральский",
      "name": "Сургут",
      "population": 396443,
      "range": 2315,
      "subject": "Ханты-Мансийский АО"
    },
    {
      "coords": {
        "lat": "48.6",
        "lon": "42.85"
      },
      "district": "Южный",
      "name": "Суровикино",
      "population": 18227,
      "range": 1508,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "53.08333",
        "lon": "45.7"
      },
      "district": "Приволжский",
      "name": "Сурск",
      "population": 6034,
      "range": 1218,
      "subject": "Пензенская область"
    },
    {
      "coords": {
        "lat": "62.78333",
        "lon": "148.15"
      },
      "district": "Дальневосточный",
      "name": "Сусуман",
      "population": 4439,
      "range": 5394,
      "subject": "Магаданская область"
    },
    {
      "coords": {
        "lat": "54.1",
        "lon": "35.35"
      },
      "district": "Центральный",
      "name": "Сухиничи",
      "population": 14806,
      "range": 730,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "56.90583",
        "lon": "62.03417"
      },
      "district": "Уральский",
      "name": "Сухой Лог",
      "population": 32748,
      "range": 1862,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "53.16667",
        "lon": "48.46667"
      },
      "district": "Приволжский",
      "name": "Сызрань",
      "population": 165725,
      "range": 1346,
      "subject": "Самарская область"
    },
    {
      "coords": {
        "lat": "61.66667",
        "lon": "50.81667"
      },
      "district": "Северо-Западный",
      "name": "Сыктывкар",
      "population": 220580,
      "range": 1122,
      "subject": "Коми"
    },
    {
      "coords": {
        "lat": "56.5",
        "lon": "60.81667"
      },
      "district": "Уральский",
      "name": "Сысерть",
      "population": 20634,
      "range": 1813,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "55.83333",
        "lon": "34.28333"
      },
      "district": "Центральный",
      "name": "Сычёвка",
      "population": 7544,
      "range": 527,
      "subject": "Смоленская область"
    },
    {
      "coords": {
        "lat": "60.137057",
        "lon": "32.561279"
      },
      "district": "Северо-Западный",
      "name": "Сясьстрой",
      "population": 12566,
      "range": 123,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "58.05",
        "lon": "65.26667"
      },
      "district": "Уральский",
      "name": "Тавда",
      "population": 32749,
      "range": 1993,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "47.23917",
        "lon": "38.88333"
      },
      "district": "Южный",
      "name": "Таганрог",
      "population": 245120,
      "range": 1537,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "56.06667",
        "lon": "85.61667"
      },
      "district": "Сибирский",
      "name": "Тайга",
      "population": 22375,
      "range": 3194,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "55.93333",
        "lon": "98.01667"
      },
      "district": "Сибирский",
      "name": "Тайшет",
      "population": 34491,
      "range": 3846,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "56.73333",
        "lon": "37.53333"
      },
      "district": "Центральный",
      "name": "Талдом",
      "population": 17317,
      "range": 561,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "57.0125",
        "lon": "63.72917"
      },
      "district": "Уральский",
      "name": "Талица",
      "population": 14808,
      "range": 1952,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "52.71667",
        "lon": "41.43333"
      },
      "district": "Центральный",
      "name": "Тамбов",
      "population": 261803,
      "range": 1065,
      "subject": "Тамбовская область"
    },
    {
      "coords": {
        "lat": "56.902383",
        "lon": "74.37079"
      },
      "district": "Сибирский",
      "name": "Тара",
      "population": 26878,
      "range": 2591,
      "subject": "Омская область"
    },
    {
      "coords": {
        "lat": "64.91472",
        "lon": "77.77278"
      },
      "district": "Уральский",
      "name": "Тарко-Сале",
      "population": 19900,
      "range": 2441,
      "subject": "Ямало-Ненецкий АО"
    },
    {
      "coords": {
        "lat": "54.71667",
        "lon": "37.18333"
      },
      "district": "Центральный",
      "name": "Таруса",
      "population": 9918,
      "range": 723,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "55.21667",
        "lon": "75.96667"
      },
      "district": "Сибирский",
      "name": "Татарск",
      "population": 23711,
      "range": 2719,
      "subject": "Новосибирская область"
    },
    {
      "coords": {
        "lat": "52.76667",
        "lon": "87.86667"
      },
      "district": "Сибирский",
      "name": "Таштагол",
      "population": 21980,
      "range": 3518,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "56.8578278",
        "lon": "35.9219278"
      },
      "district": "Центральный",
      "name": "Тверь",
      "population": 416219,
      "range": 483,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "43.449437",
        "lon": "41.74382"
      },
      "district": "Северо-Кавказский",
      "name": "Теберда",
      "population": 9020,
      "range": 2004,
      "subject": "Карачаево-Черкесия"
    },
    {
      "coords": {
        "lat": "56.85",
        "lon": "40.55"
      },
      "district": "Центральный",
      "name": "Тейково",
      "population": 31305,
      "range": 693,
      "subject": "Ивановская область"
    },
    {
      "coords": {
        "lat": "54.63333",
        "lon": "43.21667"
      },
      "district": "Приволжский",
      "name": "Темников",
      "population": 6451,
      "range": 981,
      "subject": "Мордовия"
    },
    {
      "coords": {
        "lat": "45.26667",
        "lon": "37.38333"
      },
      "district": "Южный",
      "name": "Темрюк",
      "population": 41608,
      "range": 1711,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "43.483317",
        "lon": "44.138871"
      },
      "district": "Северо-Кавказский",
      "name": "Терек",
      "population": 19948,
      "range": 2067,
      "subject": "Кабардино-Балкария"
    },
    {
      "coords": {
        "lat": "54.93333",
        "lon": "48.83333"
      },
      "district": "Приволжский",
      "name": "Тетюши",
      "population": 10535,
      "range": 1242,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "45.61667",
        "lon": "38.93333"
      },
      "district": "Южный",
      "name": "Тимашёвск",
      "population": 51858,
      "range": 1706,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "59.644213",
        "lon": "33.542105"
      },
      "district": "Северо-Западный",
      "name": "Тихвин",
      "population": 55415,
      "range": 185,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "45.85",
        "lon": "40.11667"
      },
      "district": "Южный",
      "name": "Тихорецк",
      "population": 55686,
      "range": 1709,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "58.19528",
        "lon": "68.25806"
      },
      "district": "Уральский",
      "name": "Тобольск",
      "population": 100352,
      "range": 2149,
      "subject": "Тюменская область"
    },
    {
      "coords": {
        "lat": "55.23333",
        "lon": "84.38333"
      },
      "district": "Сибирский",
      "name": "Тогучин",
      "population": 20766,
      "range": 3177,
      "subject": "Новосибирская область"
    },
    {
      "coords": {
        "lat": "53.516666666667",
        "lon": "49.416666666667"
      },
      "district": "Приволжский",
      "name": "Тольятти",
      "population": 684709,
      "range": 1368,
      "subject": "Самарская область"
    },
    {
      "coords": {
        "lat": "47.76667",
        "lon": "142.06667"
      },
      "district": "Дальневосточный",
      "name": "Томари",
      "population": 4313,
      "range": 6553,
      "subject": "Сахалинская область"
    },
    {
      "coords": {
        "lat": "58.96667",
        "lon": "126.26667"
      },
      "district": "Дальневосточный",
      "name": "Томмот",
      "population": 6440,
      "range": 4937,
      "subject": "Якутия"
    },
    {
      "coords": {
        "lat": "56.48861",
        "lon": "84.95222"
      },
      "district": "Сибирский",
      "name": "Томск",
      "population": 556478,
      "range": 3134,
      "subject": "Томская область"
    },
    {
      "coords": {
        "lat": "55.28333",
        "lon": "85.61667"
      },
      "district": "Сибирский",
      "name": "Топки",
      "population": 27158,
      "range": 3239,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "57.03333",
        "lon": "34.96667"
      },
      "district": "Центральный",
      "name": "Торжок",
      "population": 41116,
      "range": 431,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "56.5",
        "lon": "31.63333"
      },
      "district": "Центральный",
      "name": "Торопец",
      "population": 11441,
      "range": 406,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "59.541179",
        "lon": "30.875006"
      },
      "district": "Северо-Западный",
      "name": "Тосно",
      "population": 34066,
      "range": 66,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "59.98333",
        "lon": "42.76667"
      },
      "district": "Северо-Западный",
      "name": "Тотьма",
      "population": 8669,
      "range": 691,
      "subject": "Вологодская область"
    },
    {
      "coords": {
        "lat": "55.467",
        "lon": "37.3"
      },
      "district": "Центральный",
      "name": "Троицк",
      "population": 65043,
      "range": 657,
      "subject": "Москва"
    },
    {
      "coords": {
        "lat": "54.08333",
        "lon": "61.56667"
      },
      "district": "Уральский",
      "name": "Троицк",
      "population": 70301,
      "range": 1984,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "52.58333",
        "lon": "33.76667"
      },
      "district": "Центральный",
      "name": "Трубчевск",
      "population": 13287,
      "range": 861,
      "subject": "Брянская область"
    },
    {
      "coords": {
        "lat": "54.8",
        "lon": "58.45"
      },
      "district": "Уральский",
      "name": "Трёхгорный",
      "population": 32463,
      "range": 1769,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "44.100016",
        "lon": "39.083223"
      },
      "district": "Южный",
      "name": "Туапсе",
      "population": 61571,
      "range": 1872,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "54.6",
        "lon": "53.7"
      },
      "district": "Приволжский",
      "name": "Туймазы",
      "population": 68349,
      "range": 1522,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "54.2",
        "lon": "37.61667"
      },
      "district": "Центральный",
      "name": "Тула",
      "population": 473622,
      "range": 788,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "54.56667",
        "lon": "100.56667"
      },
      "district": "Сибирский",
      "name": "Тулун",
      "population": 38440,
      "range": 4069,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "52.1446",
        "lon": "93.9181"
      },
      "district": "Сибирский",
      "name": "Туран",
      "population": 5044,
      "range": 3889,
      "subject": "Тыва"
    },
    {
      "coords": {
        "lat": "58.03333",
        "lon": "63.7"
      },
      "district": "Уральский",
      "name": "Туринск",
      "population": 16561,
      "range": 1905,
      "subject": "Свердловская область"
    },
    {
      "coords": {
        "lat": "57.88333",
        "lon": "39.53333"
      },
      "district": "Центральный",
      "name": "Тутаев",
      "population": 39643,
      "range": 582,
      "subject": "Ярославская область"
    },
    {
      "coords": {
        "lat": "55.15",
        "lon": "124.71667"
      },
      "district": "Дальневосточный",
      "name": "Тында",
      "population": 28625,
      "range": 5174,
      "subject": "Амурская область"
    },
    {
      "coords": {
        "lat": "43.3892665",
        "lon": "42.9189065"
      },
      "district": "Северо-Кавказский",
      "name": "Тырныауз",
      "population": 22056,
      "range": 2040,
      "subject": "Кабардино-Балкария"
    },
    {
      "coords": {
        "lat": "55.86667",
        "lon": "72.2"
      },
      "district": "Сибирский",
      "name": "Тюкалинск",
      "population": 9894,
      "range": 2475,
      "subject": "Омская область"
    },
    {
      "coords": {
        "lat": "57.15",
        "lon": "65.53333"
      },
      "district": "Уральский",
      "name": "Тюмень",
      "population": 847488,
      "range": 2045,
      "subject": "Тюменская область"
    },
    {
      "coords": {
        "lat": "51.98333",
        "lon": "42.26667"
      },
      "district": "Центральный",
      "name": "Уварово",
      "population": 23584,
      "range": 1164,
      "subject": "Тамбовская область"
    },
    {
      "coords": {
        "lat": "49.06667",
        "lon": "142.03333"
      },
      "district": "Дальневосточный",
      "name": "Углегорск",
      "population": 8041,
      "range": 6430,
      "subject": "Сахалинская область"
    },
    {
      "coords": {
        "lat": "57.53333",
        "lon": "38.33333"
      },
      "district": "Центральный",
      "name": "Углич",
      "population": 32719,
      "range": 541,
      "subject": "Ярославская область"
    },
    {
      "coords": {
        "lat": "66.4",
        "lon": "112.3"
      },
      "district": "Дальневосточный",
      "name": "Удачный",
      "population": 12930,
      "range": 3872,
      "subject": "Якутия"
    },
    {
      "coords": {
        "lat": "57.88333",
        "lon": "35.01667"
      },
      "district": "Центральный",
      "name": "Удомля",
      "population": 25950,
      "range": 362,
      "subject": "Тверская область"
    },
    {
      "coords": {
        "lat": "55.31667",
        "lon": "89.81667"
      },
      "district": "Сибирский",
      "name": "Ужур",
      "population": 14134,
      "range": 3462,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "53.9791417",
        "lon": "38.1600833"
      },
      "district": "Центральный",
      "name": "Узловая",
      "population": 49427,
      "range": 827,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "51.83333",
        "lon": "107.61667"
      },
      "district": "Сибирский",
      "name": "Улан-Удэ",
      "population": 437565,
      "range": 4621,
      "subject": "Бурятия"
    },
    {
      "coords": {
        "lat": "54.316666666667",
        "lon": "48.366666666667"
      },
      "district": "Приволжский",
      "name": "Ульяновск",
      "population": 617352,
      "range": 1260,
      "subject": "Ульяновская область"
    },
    {
      "coords": {
        "lat": "52.85",
        "lon": "32.68333"
      },
      "district": "Центральный",
      "name": "Унеча",
      "population": 24274,
      "range": 817,
      "subject": "Брянская область"
    },
    {
      "coords": {
        "lat": "60.13333",
        "lon": "64.78333"
      },
      "district": "Уральский",
      "name": "Урай",
      "population": 41315,
      "range": 1895,
      "subject": "Ханты-Мансийский АО"
    },
    {
      "coords": {
        "lat": "57.46667",
        "lon": "45.78333"
      },
      "district": "Приволжский",
      "name": "Урень",
      "population": 12450,
      "range": 937,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "57.11667",
        "lon": "50"
      },
      "district": "Приволжский",
      "name": "Уржум",
      "population": 8448,
      "range": 1185,
      "subject": "Кировская область"
    },
    {
      "coords": {
        "lat": "43.129123",
        "lon": "45.54167"
      },
      "district": "Северо-Кавказский",
      "name": "Урус-Мартан",
      "population": 63449,
      "range": 2147,
      "subject": "Чечня"
    },
    {
      "coords": {
        "lat": "50.8",
        "lon": "42.01667"
      },
      "district": "Южный",
      "name": "Урюпинск",
      "population": 36669,
      "range": 1265,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "65.995028",
        "lon": "57.557139"
      },
      "district": "Северо-Западный",
      "name": "Усинск",
      "population": 32182,
      "range": 1511,
      "subject": "Коми"
    },
    {
      "coords": {
        "lat": "52.05",
        "lon": "39.73333"
      },
      "district": "Центральный",
      "name": "Усмань",
      "population": 19662,
      "range": 1066,
      "subject": "Липецкая область"
    },
    {
      "coords": {
        "lat": "52.75",
        "lon": "103.65"
      },
      "district": "Сибирский",
      "name": "Усолье-Сибирское",
      "population": 74762,
      "range": 4355,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "59.41667",
        "lon": "56.68333"
      },
      "district": "Приволжский",
      "name": "Усолье",
      "population": 6619,
      "range": 1473,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "43.8",
        "lon": "131.95"
      },
      "district": "Дальневосточный",
      "name": "Уссурийск",
      "population": 180393,
      "range": 6478,
      "subject": "Приморский край"
    },
    {
      "coords": {
        "lat": "44.08611",
        "lon": "41.97194"
      },
      "district": "Северо-Кавказский",
      "name": "Усть-Джегута",
      "population": 31137,
      "range": 1943,
      "subject": "Карачаево-Черкесия"
    },
    {
      "coords": {
        "lat": "58",
        "lon": "102.66667"
      },
      "district": "Сибирский",
      "name": "Усть-Илимск",
      "population": 79570,
      "range": 3954,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "54.93333",
        "lon": "58.16667"
      },
      "district": "Уральский",
      "name": "Усть-Катав",
      "population": 21439,
      "range": 1748,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "56.8",
        "lon": "105.83333"
      },
      "district": "Сибирский",
      "name": "Усть-Кут",
      "population": 36918,
      "range": 4176,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "45.21528",
        "lon": "39.68944"
      },
      "district": "Южный",
      "name": "Усть-Лабинск",
      "population": 40158,
      "range": 1766,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "58.83333",
        "lon": "36.43333"
      },
      "district": "Северо-Западный",
      "name": "Устюжна",
      "population": 7843,
      "range": 371,
      "subject": "Вологодская область"
    },
    {
      "coords": {
        "lat": "54.73333",
        "lon": "55.96667"
      },
      "district": "Приволжский",
      "name": "Уфа",
      "population": 1144809,
      "range": 1637,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "63.56667",
        "lon": "53.7"
      },
      "district": "Северо-Западный",
      "name": "Ухта",
      "population": 79899,
      "range": 1281,
      "subject": "Коми"
    },
    {
      "coords": {
        "lat": "54.31667",
        "lon": "59.38333"
      },
      "district": "Приволжский",
      "name": "Учалы",
      "population": 36175,
      "range": 1850,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "55.81667",
        "lon": "94.31667"
      },
      "district": "Сибирский",
      "name": "Уяр",
      "population": 12036,
      "range": 3666,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "52.08944",
        "lon": "35.85889"
      },
      "district": "Центральный",
      "name": "Фатеж",
      "population": 4691,
      "range": 952,
      "subject": "Курская область"
    },
    {
      "coords": {
        "lat": "45.04889",
        "lon": "35.37917"
      },
      "district": "Южный",
      "name": "Феодосия",
      "population": 66293,
      "range": 1708,
      "subject": "Крым"
    },
    {
      "coords": {
        "lat": "53.45",
        "lon": "34.41667"
      },
      "district": "Центральный",
      "name": "Фокино",
      "population": 12538,
      "range": 777,
      "subject": "Брянская область"
    },
    {
      "coords": {
        "lat": "42.96667",
        "lon": "132.4"
      },
      "district": "Дальневосточный",
      "name": "Фокино",
      "population": 19711,
      "range": 6574,
      "subject": "Приморский край"
    },
    {
      "coords": {
        "lat": "49.76667",
        "lon": "43.65"
      },
      "district": "Южный",
      "name": "Фролово",
      "population": 35661,
      "range": 1424,
      "subject": "Волгоградская область"
    },
    {
      "coords": {
        "lat": "55.95",
        "lon": "38.05"
      },
      "district": "Центральный",
      "name": "Фрязино",
      "population": 60580,
      "range": 645,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "57.25",
        "lon": "41.1"
      },
      "district": "Центральный",
      "name": "Фурманов",
      "population": 29715,
      "range": 698,
      "subject": "Ивановская область"
    },
    {
      "coords": {
        "lat": "48.48333",
        "lon": "135.06667"
      },
      "district": "Дальневосточный",
      "name": "Хабаровск",
      "population": 617441,
      "range": 6195,
      "subject": "Хабаровский край"
    },
    {
      "coords": {
        "lat": "44.42389",
        "lon": "39.53722"
      },
      "district": "Южный",
      "name": "Хадыженск",
      "population": 22094,
      "range": 1847,
      "subject": "Краснодарский край"
    },
    {
      "coords": {
        "lat": "61",
        "lon": "69"
      },
      "district": "Уральский",
      "name": "Ханты-Мансийск",
      "population": 107473,
      "range": 2094,
      "subject": "Ханты-Мансийский АО"
    },
    {
      "coords": {
        "lat": "47.4",
        "lon": "47.25"
      },
      "district": "Южный",
      "name": "Харабали",
      "population": 18514,
      "range": 1787,
      "subject": "Астраханская область"
    },
    {
      "coords": {
        "lat": "59.95",
        "lon": "40.2"
      },
      "district": "Северо-Западный",
      "name": "Харовск",
      "population": 8389,
      "range": 550,
      "subject": "Вологодская область"
    },
    {
      "coords": {
        "lat": "43.249937",
        "lon": "46.583247"
      },
      "district": "Северо-Кавказский",
      "name": "Хасавюрт",
      "population": 155144,
      "range": 2170,
      "subject": "Дагестан"
    },
    {
      "coords": {
        "lat": "52.48333",
        "lon": "48.1"
      },
      "district": "Приволжский",
      "name": "Хвалынск",
      "population": 12042,
      "range": 1379,
      "subject": "Саратовская область"
    },
    {
      "coords": {
        "lat": "51.35",
        "lon": "110.45"
      },
      "district": "Сибирский",
      "name": "Хилок",
      "population": 9948,
      "range": 4801,
      "subject": "Забайкальский край"
    },
    {
      "coords": {
        "lat": "55.88917",
        "lon": "37.445"
      },
      "district": "Центральный",
      "name": "Химки",
      "population": 257128,
      "range": 627,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "57.15",
        "lon": "31.18333"
      },
      "district": "Северо-Западный",
      "name": "Холм",
      "population": 3214,
      "range": 329,
      "subject": "Новгородская область"
    },
    {
      "coords": {
        "lat": "47.04028",
        "lon": "142.04306"
      },
      "district": "Дальневосточный",
      "name": "Холмск",
      "population": 25677,
      "range": 6619,
      "subject": "Сахалинская область"
    },
    {
      "coords": {
        "lat": "56.25",
        "lon": "37.98333"
      },
      "district": "Центральный",
      "name": "Хотьково",
      "population": 20466,
      "range": 618,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "55.86667",
        "lon": "47.48333"
      },
      "district": "Приволжский",
      "name": "Цивильск",
      "population": 12762,
      "range": 1112,
      "subject": "Чувашия"
    },
    {
      "coords": {
        "lat": "47.64667",
        "lon": "42.09472"
      },
      "district": "Южный",
      "name": "Цимлянск",
      "population": 14731,
      "range": 1579,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "51.7602528",
        "lon": "128.121175"
      },
      "district": "Дальневосточный",
      "name": "Циолковский",
      "population": 7194,
      "range": 5604,
      "subject": "Амурская область"
    },
    {
      "coords": {
        "lat": "51.28333",
        "lon": "91.56667"
      },
      "district": "Сибирский",
      "name": "Чадан",
      "population": 9732,
      "range": 3820,
      "subject": "Тыва"
    },
    {
      "coords": {
        "lat": "56.773291",
        "lon": "54.140386"
      },
      "district": "Приволжский",
      "name": "Чайковский",
      "population": 75837,
      "range": 1429,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "52.98333",
        "lon": "49.71667"
      },
      "district": "Приволжский",
      "name": "Чапаевск",
      "population": 70228,
      "range": 1421,
      "subject": "Самарская область"
    },
    {
      "coords": {
        "lat": "53.24167",
        "lon": "39.96667"
      },
      "district": "Центральный",
      "name": "Чаплыгин",
      "population": 11579,
      "range": 961,
      "subject": "Липецкая область"
    },
    {
      "coords": {
        "lat": "54.97778",
        "lon": "60.37"
      },
      "district": "Уральский",
      "name": "Чебаркуль",
      "population": 44693,
      "range": 1867,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "56.11667",
        "lon": "47.23333"
      },
      "district": "Приволжский",
      "name": "Чебоксары",
      "population": 497807,
      "range": 1084,
      "subject": "Чувашия"
    },
    {
      "coords": {
        "lat": "43.566657",
        "lon": "43.583325"
      },
      "district": "Северо-Кавказский",
      "name": "Чегем",
      "population": 20736,
      "range": 2041,
      "subject": "Кабардино-Балкария"
    },
    {
      "coords": {
        "lat": "54.1",
        "lon": "36.25"
      },
      "district": "Центральный",
      "name": "Чекалин",
      "population": 935,
      "range": 755,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "55.15",
        "lon": "61.4"
      },
      "district": "Уральский",
      "name": "Челябинск",
      "population": 1189525,
      "range": 1914,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "60.4",
        "lon": "56.48333"
      },
      "district": "Приволжский",
      "name": "Чердынь",
      "population": 4590,
      "range": 1439,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "53.15",
        "lon": "103.06667"
      },
      "district": "Сибирский",
      "name": "Черемхово",
      "population": 53958,
      "range": 4297,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "54.21667",
        "lon": "83.36667"
      },
      "district": "Сибирский",
      "name": "Черепаново",
      "population": 19900,
      "range": 3181,
      "subject": "Новосибирская область"
    },
    {
      "coords": {
        "lat": "59.11667",
        "lon": "37.9"
      },
      "district": "Северо-Западный",
      "name": "Череповец",
      "population": 305185,
      "range": 439,
      "subject": "Вологодская область"
    },
    {
      "coords": {
        "lat": "44.213888",
        "lon": "42.04431"
      },
      "district": "Северо-Кавказский",
      "name": "Черкесск",
      "population": 113226,
      "range": 1930,
      "subject": "Карачаево-Черкесия"
    },
    {
      "coords": {
        "lat": "56.01472",
        "lon": "38.38972"
      },
      "district": "Центральный",
      "name": "Черноголовка",
      "population": 19530,
      "range": 655,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "53.81667",
        "lon": "91.28333"
      },
      "district": "Сибирский",
      "name": "Черногорск",
      "population": 75745,
      "range": 3634,
      "subject": "Хакасия"
    },
    {
      "coords": {
        "lat": "56.5",
        "lon": "56.08333"
      },
      "district": "Приволжский",
      "name": "Чернушка",
      "population": 32991,
      "range": 1549,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "54.63333",
        "lon": "21.81667"
      },
      "district": "Северо-Западный",
      "name": "Черняховск",
      "population": 36128,
      "range": 793,
      "subject": "Калининградская область"
    },
    {
      "coords": {
        "lat": "55.145",
        "lon": "37.45556"
      },
      "district": "Центральный",
      "name": "Чехов",
      "population": 89025,
      "range": 694,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "55.36667",
        "lon": "50.63333"
      },
      "district": "Приволжский",
      "name": "Чистополь",
      "population": 58815,
      "range": 1311,
      "subject": "Татарстан"
    },
    {
      "coords": {
        "lat": "52.03333",
        "lon": "113.5"
      },
      "district": "Сибирский",
      "name": "Чита",
      "population": 334427,
      "range": 4900,
      "subject": "Забайкальский край"
    },
    {
      "coords": {
        "lat": "56.76667",
        "lon": "43.25"
      },
      "district": "Приволжский",
      "name": "Чкаловск",
      "population": 11535,
      "range": 837,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "59.12806",
        "lon": "31.65917"
      },
      "district": "Северо-Западный",
      "name": "Чудово",
      "population": 14302,
      "range": 130,
      "subject": "Новгородская область"
    },
    {
      "coords": {
        "lat": "55.1",
        "lon": "80.96667"
      },
      "district": "Сибирский",
      "name": "Чулым",
      "population": 11034,
      "range": 2999,
      "subject": "Новосибирская область"
    },
    {
      "coords": {
        "lat": "58.28333",
        "lon": "57.81667"
      },
      "district": "Приволжский",
      "name": "Чусовой",
      "population": 45471,
      "range": 1570,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "58.75",
        "lon": "42.7"
      },
      "district": "Центральный",
      "name": "Чухлома",
      "population": 4252,
      "range": 715,
      "subject": "Костромская область"
    },
    {
      "coords": {
        "lat": "58.78333",
        "lon": "56.15"
      },
      "district": "Приволжский",
      "name": "Чёрмоз",
      "population": 3044,
      "range": 1462,
      "subject": "Пермский край"
    },
    {
      "coords": {
        "lat": "51.53333",
        "lon": "92.9"
      },
      "district": "Сибирский",
      "name": "Шагонар",
      "population": 11772,
      "range": 3875,
      "subject": "Тыва"
    },
    {
      "coords": {
        "lat": "56.08333",
        "lon": "63.63333"
      },
      "district": "Уральский",
      "name": "Шадринск",
      "population": 68609,
      "range": 1990,
      "subject": "Курганская область"
    },
    {
      "coords": {
        "lat": "43.145",
        "lon": "45.903847"
      },
      "district": "Северо-Кавказский",
      "name": "Шали",
      "population": 55054,
      "range": 2156,
      "subject": "Чечня"
    },
    {
      "coords": {
        "lat": "55.525",
        "lon": "89.2"
      },
      "district": "Сибирский",
      "name": "Шарыпово",
      "population": 33961,
      "range": 3414,
      "subject": "Красноярский край"
    },
    {
      "coords": {
        "lat": "58.36667",
        "lon": "45.5"
      },
      "district": "Центральный",
      "name": "Шарья",
      "population": 20439,
      "range": 885,
      "subject": "Костромская область"
    },
    {
      "coords": {
        "lat": "55.5776722",
        "lon": "39.5446333"
      },
      "district": "Центральный",
      "name": "Шатура",
      "population": 38230,
      "range": 740,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "47.7122111",
        "lon": "40.2083694"
      },
      "district": "Южный",
      "name": "Шахты",
      "population": 226452,
      "range": 1518,
      "subject": "Ростовская область"
    },
    {
      "coords": {
        "lat": "57.67472",
        "lon": "46.62083"
      },
      "district": "Приволжский",
      "name": "Шахунья",
      "population": 17626,
      "range": 973,
      "subject": "Нижегородская область"
    },
    {
      "coords": {
        "lat": "54.03333",
        "lon": "41.7"
      },
      "district": "Центральный",
      "name": "Шацк",
      "population": 5927,
      "range": 962,
      "subject": "Рязанская область"
    },
    {
      "coords": {
        "lat": "50.40778",
        "lon": "36.89694"
      },
      "district": "Центральный",
      "name": "Шебекино",
      "population": 39680,
      "range": 1152,
      "subject": "Белгородская область"
    },
    {
      "coords": {
        "lat": "52.2",
        "lon": "104.1"
      },
      "district": "Сибирский",
      "name": "Шелехов",
      "population": 41998,
      "range": 4415,
      "subject": "Иркутская область"
    },
    {
      "coords": {
        "lat": "62.1",
        "lon": "42.9"
      },
      "district": "Северо-Западный",
      "name": "Шенкурск",
      "population": 4600,
      "range": 713,
      "subject": "Архангельская область"
    },
    {
      "coords": {
        "lat": "51.85",
        "lon": "116.03333"
      },
      "district": "Сибирский",
      "name": "Шилка",
      "population": 12046,
      "range": 5037,
      "subject": "Забайкальский край"
    },
    {
      "coords": {
        "lat": "52",
        "lon": "127.66667"
      },
      "district": "Дальневосточный",
      "name": "Шимановск",
      "population": 16488,
      "range": 5564,
      "subject": "Амурская область"
    },
    {
      "coords": {
        "lat": "52.1137809",
        "lon": "47.199229"
      },
      "district": "Приволжский",
      "name": "Шиханы",
      "population": 5155,
      "range": 1366,
      "subject": "Саратовская область"
    },
    {
      "coords": {
        "lat": "59.944959",
        "lon": "31.034754"
      },
      "district": "Северо-Западный",
      "name": "Шлиссельбург",
      "population": 14131,
      "range": 41,
      "subject": "Ленинградская область"
    },
    {
      "coords": {
        "lat": "55.5",
        "lon": "46.41667"
      },
      "district": "Приволжский",
      "name": "Шумерля",
      "population": 26873,
      "range": 1079,
      "subject": "Чувашия"
    },
    {
      "coords": {
        "lat": "55.23333",
        "lon": "63.28333"
      },
      "district": "Уральский",
      "name": "Шумиха",
      "population": 16264,
      "range": 2015,
      "subject": "Курганская область"
    },
    {
      "coords": {
        "lat": "56.85",
        "lon": "41.36667"
      },
      "district": "Центральный",
      "name": "Шуя",
      "population": 55225,
      "range": 736,
      "subject": "Ивановская область"
    },
    {
      "coords": {
        "lat": "55.5",
        "lon": "37.56667"
      },
      "district": "Центральный",
      "name": "Щербинка",
      "population": 56531,
      "range": 665,
      "subject": "Москва"
    },
    {
      "coords": {
        "lat": "51.88111",
        "lon": "36.90306"
      },
      "district": "Центральный",
      "name": "Щигры",
      "population": 14927,
      "range": 1000,
      "subject": "Курская область"
    },
    {
      "coords": {
        "lat": "55.21667",
        "lon": "62.76667"
      },
      "district": "Уральский",
      "name": "Щучье",
      "population": 8252,
      "range": 1986,
      "subject": "Курганская область"
    },
    {
      "coords": {
        "lat": "54",
        "lon": "37.51667"
      },
      "district": "Центральный",
      "name": "Щёкино",
      "population": 55109,
      "range": 803,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "45.42361",
        "lon": "35.81861"
      },
      "district": "Южный",
      "name": "Щёлкино",
      "population": 10131,
      "range": 1670,
      "subject": "Крым"
    },
    {
      "coords": {
        "lat": "55.91667",
        "lon": "38"
      },
      "district": "Центральный",
      "name": "Щёлково",
      "population": 134211,
      "range": 646,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "55.88333",
        "lon": "38.78333"
      },
      "district": "Центральный",
      "name": "Электрогорск",
      "population": 29982,
      "range": 683,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "55.8",
        "lon": "38.45"
      },
      "district": "Центральный",
      "name": "Электросталь",
      "population": 146403,
      "range": 676,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "55.71667",
        "lon": "38.21667"
      },
      "district": "Центральный",
      "name": "Электроугли",
      "population": 17944,
      "range": 672,
      "subject": "Московская область"
    },
    {
      "coords": {
        "lat": "46.31667",
        "lon": "44.26667"
      },
      "district": "Южный",
      "name": "Элиста",
      "population": 102583,
      "range": 1784,
      "subject": "Калмыкия"
    },
    {
      "coords": {
        "lat": "51.46667",
        "lon": "46.11667"
      },
      "district": "Приволжский",
      "name": "Энгельс",
      "population": 225428,
      "range": 1368,
      "subject": "Саратовская область"
    },
    {
      "coords": {
        "lat": "51.83333",
        "lon": "40.8"
      },
      "district": "Центральный",
      "name": "Эртиль",
      "population": 10024,
      "range": 1123,
      "subject": "Воронежская область"
    },
    {
      "coords": {
        "lat": "61.31667",
        "lon": "63.35"
      },
      "district": "Уральский",
      "name": "Югорск",
      "population": 38238,
      "range": 1788,
      "subject": "Ханты-Мансийский АО"
    },
    {
      "coords": {
        "lat": "56.58333",
        "lon": "42.01667"
      },
      "district": "Центральный",
      "name": "Южа",
      "population": 12957,
      "range": 785,
      "subject": "Ивановская область"
    },
    {
      "coords": {
        "lat": "46.95",
        "lon": "142.73333"
      },
      "district": "Дальневосточный",
      "name": "Южно-Сахалинск",
      "population": 181587,
      "range": 6655,
      "subject": "Сахалинская область"
    },
    {
      "coords": {
        "lat": "44.66667",
        "lon": "45.65"
      },
      "district": "Северо-Кавказский",
      "name": "Южно-Сухокумск",
      "population": 10503,
      "range": 1996,
      "subject": "Дагестан"
    },
    {
      "coords": {
        "lat": "54.45",
        "lon": "61.25"
      },
      "district": "Уральский",
      "name": "Южноуральск",
      "population": 37478,
      "range": 1947,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "55.73333",
        "lon": "84.9"
      },
      "district": "Сибирский",
      "name": "Юрга",
      "population": 79693,
      "range": 3177,
      "subject": "Кемеровская область"
    },
    {
      "coords": {
        "lat": "56.5",
        "lon": "39.68333"
      },
      "district": "Центральный",
      "name": "Юрьев-Польский",
      "population": 17276,
      "range": 676,
      "subject": "Владимирская область"
    },
    {
      "coords": {
        "lat": "57.31667",
        "lon": "43.1"
      },
      "district": "Центральный",
      "name": "Юрьевец",
      "population": 7899,
      "range": 799,
      "subject": "Ивановская область"
    },
    {
      "coords": {
        "lat": "54.86667",
        "lon": "58.43333"
      },
      "district": "Уральский",
      "name": "Юрюзань",
      "population": 10284,
      "range": 1766,
      "subject": "Челябинская область"
    },
    {
      "coords": {
        "lat": "54.75",
        "lon": "35.23333"
      },
      "district": "Центральный",
      "name": "Юхнов",
      "population": 6610,
      "range": 622,
      "subject": "Калужская область"
    },
    {
      "coords": {
        "lat": "55.95",
        "lon": "46.2"
      },
      "district": "Приволжский",
      "name": "Ядрин",
      "population": 7918,
      "range": 1041,
      "subject": "Чувашия"
    },
    {
      "coords": {
        "lat": "62.027222222222",
        "lon": "129.73194444444"
      },
      "district": "Дальневосточный",
      "name": "Якутск",
      "population": 355443,
      "range": 4834,
      "subject": "Якутия"
    },
    {
      "coords": {
        "lat": "44.49944",
        "lon": "34.15528"
      },
      "district": "Южный",
      "name": "Ялта",
      "range": 1752,
      "population": 74652,
      "subject": "Крым"
    },
    {
      "coords": {
        "lat": "56.65",
        "lon": "66.3"
      },
      "district": "Уральский",
      "name": "Ялуторовск",
      "population": 38853,
      "range": 2111,
      "subject": "Тюменская область"
    },
    {
      "coords": {
        "lat": "56.26667",
        "lon": "54.93333"
      },
      "district": "Приволжский",
      "name": "Янаул",
      "population": 25908,
      "range": 1497,
      "subject": "Башкортостан"
    },
    {
      "coords": {
        "lat": "57.303306",
        "lon": "47.868806"
      },
      "district": "Приволжский",
      "name": "Яранск",
      "population": 14284,
      "range": 1059,
      "subject": "Кировская область"
    },
    {
      "coords": {
        "lat": "52.93333",
        "lon": "78.58333"
      },
      "district": "Сибирский",
      "name": "Яровое",
      "population": 16424,
      "range": 3000,
      "subject": "Алтайский край"
    },
    {
      "coords": {
        "lat": "57.61667",
        "lon": "39.85"
      },
      "district": "Центральный",
      "name": "Ярославль",
      "population": 577279,
      "range": 614,
      "subject": "Ярославская область"
    },
    {
      "coords": {
        "lat": "55.06667",
        "lon": "32.68333"
      },
      "district": "Центральный",
      "name": "Ярцево",
      "population": 41452,
      "range": 575,
      "subject": "Смоленская область"
    },
    {
      "coords": {
        "lat": "54.4793833",
        "lon": "37.6933556"
      },
      "district": "Центральный",
      "name": "Ясногорск",
      "population": 15269,
      "range": 746,
      "subject": "Тульская область"
    },
    {
      "coords": {
        "lat": "51.03333",
        "lon": "59.86667"
      },
      "district": "Приволжский",
      "name": "Ясный",
      "population": 15471,
      "range": 2092,
      "subject": "Оренбургская область"
    },
    {
      "coords": {
        "lat": "56.28333",
        "lon": "37.48333"
      },
      "district": "Центральный",
      "name": "Яхрома",
      "population": 14011,
      "range": 594,
      "subject": "Московская область"
    }
];

const findCity = (value) => {
    const cityName = value.replace(/[^a-zA-Z | ^а-яА-Я]/g, "").toLowerCase();
    const targetCity = cityBase.find((cityObj) => cityObj.name.replace(/[^a-zA-Z | ^а-яА-Я]/g, "").toLowerCase() === cityName)
};

export default findCity;