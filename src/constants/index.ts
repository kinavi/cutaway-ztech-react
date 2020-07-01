import {
  TableType, ShowCasesType, ContactsType,
  ILanguage, ILanguageLink, HeaderType, AboutType, AdvantagesType, NavigationBarType,
} from './types';

import icon1 from '../../image/photo/icon/1.png';
import icon2 from '../../image/photo/icon/2.png';
import icon3 from '../../image/photo/icon/3.png';
import icon4 from '../../image/photo/icon/4.png';
import icon5 from '../../image/photo/icon/5.png';
import icon6 from '../../image/photo/icon/6.png';

export const ICONS_IMG = [
  icon1, icon2, icon3, icon4, icon5, icon6,
];

const LANGUAGES: ILanguage = {
  sr: 'sr',
  ru: 'ru',
};

export const LANGUAGES_LINKS: Array<ILanguageLink> = [
  {
    label: 'српски',
    url: '/',
  },
  {
    label: 'русский',
    url: `/${LANGUAGES.ru}`,
  },
];

const NUMBER_PHONE = '+381616454683';
const MAIL = 'order@disin-tech.com';
const ADDRESS = 'Maksima Gorkog 29, Beograd - Vračar, Srbija';
export const COMPANY_NAME = 'disin-tech';

interface IConstant<T> {
    [key: string]: T
}

export const NAVIGATION_BAR: IConstant<NavigationBarType> = {
  [LANGUAGES.ru]: {
    label: 'Язык',
    links: LANGUAGES_LINKS,
  },
  [LANGUAGES.sr]: {
    label: 'Језик',
    links: LANGUAGES_LINKS,
  },
};

export const HEADER: IConstant<HeaderType> = {
  [LANGUAGES.ru]: {
    Navigationlinks: [
      {
        label: 'Преимущества',
        url: '#advantage',
      },
      {
        label: 'Товары',
        url: '#showcase',
      },
      {
        label: 'Контакты',
        url: '#contacts',
      },
    ],
    urlLogo: '',
    nameCompany: COMPANY_NAME,
    phone: NUMBER_PHONE,
  },
  [LANGUAGES.sr]: {
    Navigationlinks: [
      {
        label: 'Предности',
        url: '#advantage',
      },
      {
        label: 'Производи',
        url: '#showcase',
      },
      {
        label: 'Контакти',
        url: '#contacts',
      },
    ],
    urlLogo: '',
    nameCompany: COMPANY_NAME,
    phone: NUMBER_PHONE,
  },
};

export const ABOUT: IConstant<AboutType> = {
  [LANGUAGES.ru]: {
    nameCompany: COMPANY_NAME,
    caption: 'Бесконтактный Автоматический дезинфектор для рук',
    description: 'Эффективная защита здоровья сотрудников и посетителей',
    advantage: 'Уничтожает 99,99% микробов',
  },
  [LANGUAGES.sr]: {
    nameCompany: COMPANY_NAME,
    caption: 'БЕСКОНТАКТНИ ДЕЗИНФЕКТОР РУКУ',
    description: 'Ефикасна заштита здравља запослених и посетиоциа',
    advantage: 'Уништава 99,99% микроба',
  },
};

export const ADVANTAGES: IConstant<AdvantagesType> = {
  [LANGUAGES.ru]: {
    title: 'Откройте для себя преимущества интеллектуального дезинфицирующего средства',
    titleOutsid: 'Снаружи',
    titleInterior: 'Внутри',
    outsides: [
      {
        advantage: 'Антивандальный защищенный корпус',
      },
      {
        advantage: 'Яркий информационный дисплей 22"',
        explanation: 'Реклама и информирование, отображение инструкций, экстренное оповещение',
      },
      {
        advantage: 'Датчик движения',
        explanation: 'Определяет момент поднесения рук к диспенсеру',
      },
      {
        advantage: 'Дозатор антисептика',
        explanation: 'Распрыскивает антисептик на руки',
      },
      {
        advantage: 'Индикатор с подсветкой',
        explanation: 'Включается при подаче антисептика и помогает в работе с устройством',
      },
    ],
    interior: [
      'Переключатель дозировки',
      'Контроллер дозатора',
      'Датчик окончания жидкости',
      'Встроенный компьютер и программное обеспечение для удаленного мониторинга расхода антисептика и для демонстрации информации на экране',
      'Емкость на 10 литров антисептика',
    ],
    icons: [
      {
        label: 'Автоматическое оповещение',
        index: 0,
      },
      {
        label: 'Бесконтактная работа',
        index: 1,
      },
      {
        label: 'Снижение затрат',
        index: 2,
      },
      {
        label: 'Безопасность и защита',
        index: 3,
      },
      {
        label: 'Экология и контроль',
        index: 4,
      },
      {
        label: 'Имидж заботливой компании',
        index: 5,
      },
    ],
  },
  [LANGUAGES.sr]: {
    title: 'Откријте предности интелигентни дезинфектор',
    titleOutsid: 'Споља',
    titleInterior: 'Унутра',
    outsides: [
      {
        advantage: 'Противградно кућиште',
      },
      {
        advantage: 'Светли информациони дисплеј од 22"',
        explanation: 'Реклама и информисаньје, приказ упутстава, обавештење о хитним случајевима',
      },
      {
        advantage: 'Сензор покрета',
        explanation: 'Одређује када се руке поднесени у дозатор',
      },
      {
        advantage: 'Антисептички дозатор',
        explanation: 'Распрска антисептик на руке',
      },
      {
        advantage: 'Индикатор са позадинским осветљењем',
        explanation: 'Укључује се када се нанесе антисептик и помаже у раду са уређајем',
      },
    ],
    interior: [
      'Прекидач за дозирање',
      'Регулатор расподјеле',
      'Сензор на крају течности',
      'Уграђени рачунар и софтвер за даљинско надгледање потрошње антисептика и за приказивање информација на екрану',
      'Капацитет антисептика од 10 литара',
    ],
    icons: [
      {
        label: 'Аутоматско упозорење',
        index: 0,
      },
      {
        label: 'Бесконтактни рад',
        index: 1,
      },
      {
        label: 'Смањење трошкова',
        index: 2,
      },
      {
        label: 'Безбедност и заштита',
        index: 3,
      },
      {
        label: 'Екологија и контрола',
        index: 4,
      },
      {
        label: 'Слика брижне компаније',
        index: 5,
      },
    ],
  },
};

export const TABLE: IConstant<TableType> = {
  [LANGUAGES.ru]: {
    title: 'Преимущества перед обычными средствам дезинфекции',
    head: [
      '', 'Бесконтактный дезинфектор Disin-tech', 'Обычное дезинфицирующее средство с дозатором',
    ],
    body: [
      {
        label: 'Объем антисептика',
        text: [
          '5-15 л.',
          '0,3-1,5 л.',
        ],
      },
      {
        label: 'Средняя цена одной дезинфекции',
        text: [
          '0,1 руб.', '0,5 руб.',
        ],
      },
      // {
      //   label: 'Возможность брендирования',
      // },
      {
        label: 'Средняя цена одной дезинфекции',
      },
      {
        label: 'Безопасность конструкции',
      },
      {
        label: 'Регулируемый дозатор',
      },
      {
        label: 'Время испарения',
        text: [
          'очень быстро', 'медленно',
        ],
      },
      {
        label: 'Современный дизайн',
      },
      {
        label: 'Беззвучная система распыления',
      },
      {
        label: 'Исключает протекание антисептика',
      },
      {
        label: 'Форм-фактор',
        text: [
          'настольный, настенный, напольный', 'настольный',
        ],
      },
    ],
  },
  [LANGUAGES.sr]: {
    title: 'Предности у односу на класична дезинфекциона средства',
    head: [
      '', 'Бесконтактни дезинфектор Disin-tech', 'Конвенционално дезинфекцијско средство с дозатором',
    ],
    body: [
      {
        label: 'Запремина антисептичког резервоара',
        text: [
          '5-15 литара',
          '0,3-1,5 литара',
        ],
      },
      {
        label: 'Просечна цена једне дезинфекције',
        text: [
          '0,1 din.', '0,5 din.',
        ],
      },
      // {
      //   label: 'Могућност брендирања',
      // },
      {
        label: 'Безбедност конструкциjи',
      },
      {
        label: 'Могућност регулације дозе',
      },
      {
        label: 'Време испаравања',
        text: [
          'врло брзо', 'полако',
        ],
      },
      {
        label: 'Модеран дизајн',
      },
      {
        label: 'Безвучни систем спреја',
      },
      {
        label: 'Елиминише цуренье антисептика',
      },
      {
        label: 'Фактор форме',
        text: [
          'под, зид, сто', 'сто',
        ],
      },
    ],
  },
};

export const SHOWCASES: IConstant<ShowCasesType> = {
  [LANGUAGES.ru]: {
    title: 'Товары',
    cases: [
      {
        name: 'Настольный дезинфектор для небольших компаний',
        nameModel: 'Модель 5',
        price: 'руб',
        characteristics: [
          {
            label: 'Корпус: ',
            description: ' напольный, антивнадальное исполнение.',
          },
          {
            label: 'Сензор: ',
            description: ' Датчик приближения, 2 режима работы распылителя. Датчик окончания антисептика.',
          },
          {
            label: 'Объем резервуара: ',
            description: ' 5 л. ',
          },
          // {
          //   label: 'Ресурс: ',
          //   description: ' 5 млн. циклов.',
          // },
          {
            label: 'Размеры: ',
            description: ' 500к300к300мм. ',
          },
          {
            label: 'Вес: ',
            description: ' 7 кг.',
          },
          {
            label: 'Потребляемая мощность: ',
            description: ' 10 Вт',
          },
          {
            label: 'Гарантия:',
            description: ' 2 года.',
          },
        ],
      },
      {
        name: 'Напольный дезинфектор для организаций  со средним человекопотоком',
        nameModel: 'Модель 7',
        price: 'руб',
        characteristics: [
          {
            label: 'Корпус: ',
            description: ' напольный, антивнадальное исполнение.',
          },
          {
            label: 'Материал корпуса: ',
            description: ' конструкционная сталь, фасад из закаленного тонированного стекла. Подсветка логотипа.',
          },
          {
            label: 'Датчик приближения: ',
            description: ' Датчик приближения, 2 режима работы распылителя. Датчик окончания антисептика.',
          },
          {
            label: 'Объем резервуара: ',
            description: ' 10 л. ',
          },
          // {
          //   label: 'Ресурс:',
          //   description: ' 5 млн. циклов.',
          // },
          {
            label: 'Размеры:',
            description: ' 1500к300к300мм.',
          },
          {
            label: 'Вес: ',
            description: ' 15 кг.',
          },
          {
            label: 'Потребляемая мощность: ',
            description: ' 10 Вт',
          },
          {
            label: 'Гарантия:',
            description: ' 2 года.',
          },
        ],
      },
      {
        name: 'Интерактивный дезинфектор для крупных публичных организаций с высоким потоком посетителей',
        nameModel: 'Модель 9 Pro',
        price: 'руб',
        characteristics: [
          {
            label: 'Корпус: ',
            description: ' напольный, антивнадальное исполнение.',
          },
          {
            label: 'Материал корпуса: ',
            description: ' конструкционная сталь, фасад из закаленного тонированного стекла. конструкционная сталь, фасад из закаленного тонированного стекла.',
          },
          {
            label: 'Датчик приближения: ',
            description: ' Датчик приближения, 2 режима работы распылителя. Датчик окончания антисептика.',
          },
          {
            label: 'Монитор: ',
            description: ' Рекламный Led монитор 22" для отображения информации и рекламы.',
          },
          {
            label: 'Встроенный компьютер: ',
            description: 'Встроенный компьютер на базе Android 8.1 с процессором ARM Cortex-A53 и 2 ГБ оперативной памяти, динамики 10Вт. Разъемы Rj45, USB.',
          },
          {
            label: 'Программное обеспечение: ',
            description: ' Программное обеспечение для удаленного мониторинга и управление через сеть Интернет.',
          },
          {
            label: 'Объем резервуара: ',
            description: ' 15 л. ',
          },
          // {
          //   label: 'Ресурс:',
          //   description: ' 5 млн. циклов.',
          // },
          {
            label: 'Размеры:',
            description: ' 1600к300к300мм.',
          },
          {
            label: 'Вес:',
            description: ' 25 кг.',
          },
          {
            label: 'Потребляемая мощность: ',
            description: ' 80 Вт',
          },
          {
            label: 'Гарантия:',
            description: ' 2 года.',
          },
        ],
      },
    ],
  },
  [LANGUAGES.sr]: {
    title: 'Производи',
    cases: [
      {
        name: 'Столни дезинфектор за мале предузеће',
        nameModel: 'Модел 5',
        price: 'din',
        characteristics: [
          {
            label: 'Кућиште: ',
            description: ' столно, противоударно.',
          },
          {
            label: 'Сензор: ',
            description: ' Сензор покрета, 2 режима рада прскалице, сензор на крају течности.',
          },
          {
            label: 'Запремина резервоара је: ',
            description: ' 5 л. ',
          },
          // {
          //   label: 'Ресурс:',
          //   description: ' 5 милиона циклуса',
          // },
          {
            label: 'Димензије:',
            description: ' 500к300к300мм. ',
          },
          {
            label: 'Тежина:',
            description: ' 7 кг.',
          },
          {
            label: 'Потрошња енергије: ',
            description: ' 10 Вт',
          },
          {
            label: 'Гаранција:',
            description: ' 2 године.',
          },
        ],
      },
      {
        name: 'Подни дезинфектор за организације са средњим и великим људским током',
        nameModel: 'Модел 7',
        price: 'din',
        characteristics: [
          {
            label: 'Кућиште: ',
            description: ' подно, противоударно.',
          },
          {
            label: 'Материјал кућишта: ',
            description: ' конструкцијски челик, фасада од тонираног каљеног стакла.',
          },
          {
            label: 'Сензор: ',
            description: ' Сензор покрета, 2 режима рада прскалице, сензор на крају течности.',
          },
          {
            label: 'Запремина резервоара је: ',
            description: ' 10 л. ',
          },
          // {
          //   label: 'Ресурс:',
          //   description: ' 5 милиона циклуса',
          // },
          {
            label: 'Димензије:',
            description: ' 1500к300к300мм.',
          },
          {
            label: 'Тежина:',
            description: ' 15 кг.',
          },
          {
            label: 'Потрошња енергије: ',
            description: ' 10 Вт',
          },
          {
            label: 'Гаранција:',
            description: ' 2 године.',
          },
        ],
      },
      {
        name: 'Интерактивни дезинфектор за велике јавне организације са великим протоком посетилаца',
        nameModel: 'Модел 9 Pro',
        price: 'din',
        characteristics: [
          {
            label: 'Кућиште: ',
            description: ' подно, противоударно.',
          },
          {
            label: 'Материјал кућишта: ',
            description: ' конструкцијски челик, фасада од тонираног каљеног стакла.',
          },
          {
            label: 'Сензор: ',
            description: ' Сензор покрета, 2 режима рада прскалице, сензор на крају течности.',
          },
          {
            label: 'Монитор: ',
            description: ' Рекламни LED монитор 22" за приказивање информација и рекламе.',
          },
          {
            label: 'Уграђени рачунар: ',
            description: ' Уграђени рачунар на бази Android 8.1 са ARM Cortex-A53 процесором и 2 ГБ РАМ-а, звучници од 10 В. Конектори Rј45,USB.',
          },
          {
            label: 'Софтвер: ',
            description: ' Софтвер за даљинско надгледање и управљање преко Интернета.',
          },
          {
            label: 'Запремина резервоара је: ',
            description: ' 15 л. ',
          },
          // {
          //   label: 'Ресурс:',
          //   description: ' 5 милиона циклуса',
          // },
          {
            label: 'Димензије:',
            description: ' 1600к300к300мм.',
          },
          {
            label: 'Тежина:',
            description: ' 25 кг.',
          },
          {
            label: 'Потрошња енергије: ',
            description: ' 80 Вт',
          },
          {
            label: 'Гаранција:',
            description: ' 2 године.',
          },
        ],
      },
    ],
  },
};

export const CONTACTS: IConstant<ContactsType> = {
  [LANGUAGES.ru]: {
    title: 'Контакты',
    phone: NUMBER_PHONE,
    email: MAIL,
    address: ADDRESS,
  },
  [LANGUAGES.sr]: {
    title: 'Контакти',
    phone: NUMBER_PHONE,
    email: MAIL,
    address: ADDRESS,
  },
};
