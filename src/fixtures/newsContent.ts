import type { AppLocale } from "@/lib/i18n/config";

export interface DetailedNewsItem {
  slugs: Record<AppLocale, string>;
  title: Record<AppLocale, string>;
  excerpt: Record<AppLocale, string>;
  platform: { key: string; label: Record<AppLocale, string> };
  publishedAt: Record<AppLocale, string>;
  readingTimeMinutes: number;
  imageUrl: string;
  imageAlt: Record<AppLocale, string>;
  body: Record<AppLocale, string[]>;
}

export const detailedNewsList: DetailedNewsItem[] = [
  // 1. SNES Prototype
  {
    slugs: {
      ru: "neizvestnyj-prototip-dlya-snes",
      uk: "nevidomyj-prototyp-dlya-snes",
      en: "unknown-snes-prototype-discovered",
    },
    title: {
      ru: "Найден неизвестный прототип игры для SNES",
      uk: "Знайдено невідомий прототип гри для SNES",
      en: "Undiscovered SNES Prototype Cartridge Unveiled",
    },
    excerpt: {
      ru: "Энтузиасты обнаружили раннюю сборку неанонсированной игры Nintendo для Super Nintendo с уникальными уровнями и звуковыми эффектами.",
      uk: "Ентузіасти виявили ранній білд неанонсованої гри Nintendo для Super Nintendo з унікальними рівнями.",
      en: "Game archivists discovered an unreleased developmental build of a 1993 Super Nintendo platformer.",
    },
    platform: {
      key: "nintendo",
      label: { ru: "NINTENDO", uk: "NINTENDO", en: "NINTENDO" },
    },
    publishedAt: {
      ru: "15 АВГ 2024",
      uk: "15 СЕРП 2024",
      en: "AUG 15, 2024",
    },
    readingTimeMinutes: 2,
    imageUrl: "/images/hardware/snes-console.jpg",
    imageAlt: {
      ru: "Картридж прототипа Super Nintendo",
      uk: "Картридж прототипу Super Nintendo",
      en: "Super Nintendo prototype cartridge",
    },
    body: {
      ru: [
        "Сообщество исследователей игрового наследия из Video Game History Foundation сообщило о сенсационной находке: на закрытом японском интернет-аукционе в составе лота с тестовым оборудованием был выкуплен безымянный картридж разработки с наклейкой «Sample 1993.06.14».",
        "После аккуратного снятия дампа памяти с EPROM-чипов исследователи обнаружили полностью играбельный 16-битный экшен-платформер, создававшийся внутренней студией Nintendo. Игра активно задействует аппаратные возможности режима Mode 7 для динамического вращения фонов и специализированный сопроцессор DSP-1 для расчета трехмерных траекторий снарядов.",
        "Билд содержит пять законченных тематических миров, включая механизированную цитадель и подводные катакомбы, расширенное отладочное меню выбора контрольных точек, а также полноценный стереофонический саундтрек, никогда ранее не издававшийся.",
        "Архивисты подчеркнули, что после завершения сверки с патентными базами и правообладателями ROM-образ будет официально передан в открытый цифровой архив для сохранения истории игровой индустрии.",
      ],
      uk: [
        "Спільнота збереження цифрової спадщини Video Game History Foundation повідомила про сенсаційну знахідку: на закритому японському аукціоні викуплено немаркований картридж розробки з підписом «Sample 1993.06.14».",
        "Після успішного зняття дампу мікросхем EPROM дослідники отримали робочий 16-бітний платформер, створений внутрішньою командою Nintendo. Проєкт використовує ефекти Mode 7 для обертання площин та апаратний чип DSP-1 для розрахунку балістики.",
        "Збірка містить п'ять повністю завершених світів, розширене інженерне меню вибору локацій і невідомий раніше стереосаундтрек.",
        "Після фінальної юридичної верифікації дамп образу буде передано до публічного цифрового музею.",
      ],
      en: [
        "Video game preservationists from the Video Game History Foundation have uncovered an extraordinary piece of interactive history: an uncatalogued prototype cartridge labeled 'Sample 1993.06.14' surfaced on a private Japanese hardware auction.",
        "Following a delicate EPROM dump, archivists revealed a fully playable 16-bit action-platformer developed internally at Nintendo. The build extensively harnesses the Super Nintendo's Mode 7 background rotation alongside the DSP-1 math coprocessor for real-time projectile trajectory scaling.",
        "The ROM contains five fully realized thematic zones, including an underground volcanic foundry and clockwork citadel, a comprehensive developer debug suite, and an unreleased 8-channel stereo soundtrack.",
        "Archivists confirmed the image will be formally archived in public digital repositories once cataloging and rights clearances conclude.",
      ],
    },
  },

  // 2. PlayStation 30th
  {
    slugs: {
      ru: "sony-30-let-playstation",
      uk: "sony-30-rokiv-playstation",
      en: "sony-celebrates-30-years-of-playstation",
    },
    title: {
      ru: "Sony отмечает 30 лет PlayStation — главные моменты",
      uk: "Sony відзначає 30 років PlayStation — головні віхи",
      en: "Sony Celebrates 30 Years of PlayStation: Milestones & Legacy",
    },
    excerpt: {
      ru: "Вспоминаем запуск первой серой консоли в декабре 1994 года, CD-аудио и переход от 2D-спрайтов к 3D-мирам.",
      uk: "Згадуємо запуск культової консолі в грудні 1994 року, CD-аудіо та народження легендарних франшиз.",
      en: "Looking back at the December 1994 launch that changed home interactive entertainment forever.",
    },
    platform: {
      key: "playstation",
      label: { ru: "PLAYSTATION", uk: "PLAYSTATION", en: "PLAYSTATION" },
    },
    publishedAt: {
      ru: "14 АВГ 2024",
      uk: "14 СЕРП 2024",
      en: "AUG 14, 2024",
    },
    readingTimeMinutes: 2,
    imageUrl: "/images/news/playstation-launch-1994.jpg",
    imageAlt: {
      ru: "Оригинальная серая консоль PlayStation 1",
      uk: "Оригінальна сіра консоль PlayStation 1",
      en: "Original grey PlayStation 1 console",
    },
    body: {
      ru: [
        "3 декабря 1994 года в Японии начались продажи первой консоли PlayStation. Устройство, родившееся в результате драматического разрыва партнерства между Nintendo и Sony по разработке CD-привода для Super Nintendo, навсегда изменило расстановку сил и бизнес-модель всей индустрии интерактивных развлечений.",
        "Архитектор консоли Кен Кутараги пошел на смелый технологический риск: в то время как конкуренты все еще цеплялись за картриджи и двухмерную спрайтовую графику, PlayStation сделала абсолютную ставку на аппаратное 3D, поддержку текстурирования полигонов и сверхдешевый носитель CD-ROM. Это решение позволило разработчикам создавать кинематографичные миры невиданного ранее масштаба.",
        "Благодаря удобным инструментам разработки и лояльной политике к сторонним издателям каталог PS1 обогатился эпохальными шедеврами: от адреналиновых гонок Ridge Racer и Wipeout до монументальных Final Fantasy VII, Resident Evil, Metal Gear Solid и Silent Hill.",
        "В честь 30-летнего юбилея Sony запустила цикл ретроспективных материалов, раскрыв ранние инженерные чертежи прототипов и воспоминания композитора Такафуми Фудзисавы о создании того самого легендарного аккорда включения консоли.",
      ],
      uk: [
        "3 грудня 1994 року в Японії стартував продаж першої Sony PlayStation. Проєкт, який постав після скасування спільної угоди з Nintendo щодо розробки CD-приводу для SNES, назавжди переформатував світову індустрію відеоігор.",
        "Інженер Кен Кутарагі зробив ставку на тривимірну полігональну графіку та доступний формат CD-ROM. Це дозволило створювати кінематографічні ігри небаченого доти розмаху, привабивши сотні провідних студій з усього світу.",
        "Каталог системи став колискою для культових серій: Final Fantasy VII, Resident Evil, Metal Gear Solid, Tekken, Silent Hill та Gran Turismo закріпили лідерство PlayStation на довгі десятиліття.",
        "До 30-річного ювілею компанія опублікувала архівні креслення прототипів та інтерв'ю зі звукорежисерами про створення незабутнього вступного акорду увімкнення консолі.",
      ],
      en: [
        "On December 3, 1994, the original PlayStation hit retail shelves across Japan. Born from the ashes of a collapsed contract with Nintendo to build a CD add-on for the Super Famicom, Ken Kutaragi's grey console dramatically restructured global entertainment economics.",
        "Sony boldly wagered on dedicated 3D geometry hardware and low-cost CD-ROM optical media while competitors remained hesitant. The sheer storage capacity allowed creators to introduce full-motion video, high-fidelity Red Book audio, and expansive multi-disc narratives.",
        "Backed by developer-friendly C-language APIs, the PlayStation library hosted defining cultural touchstones: Final Fantasy VII, Resident Evil, Metal Gear Solid, Wipeout, Gran Turismo, and Tekken.",
        "To honor 30 years of PlayStation, Sony launched commemorative retrospective exhibits showcasing original hardware schematics and interviews with audio engineer Takafumi Fujisawa on creating the iconic chime.",
      ],
    },
  },

  // 3. Zelda Ocarina of Time Early Build
  {
    slugs: {
      ru: "zelda-ocarina-of-time-early-build",
      uk: "zelda-ocarina-of-time-ranij-bild",
      en: "zelda-ocarina-of-time-early-build-recovered",
    },
    title: {
      ru: "Раннюю версию Zelda: Ocarina of Time нашли в сети",
      uk: "Ранню версію Zelda: Ocarina of Time знайдено в мережі",
      en: "Early Build of Zelda: Ocarina of Time Discovered Online",
    },
    excerpt: {
      ru: "Архивисты опубликовали дамп картриджа Spaceworld 1997 с экспериментальной боевой системой и другими локациями.",
      uk: "Архівісти опублікували дамп картриджа Spaceworld 1997 з експериментальною бойовою системою.",
      en: "Archivists have dumped an elusive Spaceworld 1997 cartridge revealing early dungeon layouts and combat mechanics.",
    },
    platform: {
      key: "nintendo",
      label: { ru: "NINTENDO", uk: "NINTENDO", en: "NINTENDO" },
    },
    publishedAt: {
      ru: "13 АВГ 2024",
      uk: "13 СЕРП 2024",
      en: "AUG 13, 2024",
    },
    readingTimeMinutes: 2,
    imageUrl: "/images/news/zelda-spaceworld-room.jpg",
    imageAlt: {
      ru: "Ранний прототип The Legend of Zelda Spaceworld 1997",
      uk: "Ранній прототип The Legend of Zelda Spaceworld 1997",
      en: "Early prototype of The Legend of Zelda Spaceworld 1997",
    },
    body: {
      ru: [
        "Группа энтузиастов и цифровых археологов опубликовала подробный технический анализ недавно обнаруженного ROM-образа The Legend of Zelda: Ocarina of Time с легендарной выставки Nintendo Space World 1997 года.",
        "В представленной сборке образца конца 1997 года игра кардинально отличается от финального релиза: Хайрул был разбит на сегментированные комнаты, меч Линка наносил удары по другой физической модели, а экспериментальная система фиксации взгляда Z-targeting использовала яркие геометрические маркеры.",
        "Особый интерес вызвали вырезанные локации подземелий, анимации феи Нави с предупреждающими вспышками света и альтернативные хоровые аранжировки Кодзи Кондо, которые позже были признаны слишком мрачными для семейной аудитории.",
        "Исследователи отмечают, что сопоставление этой демонстрационной версии с релизом ноября 1998 года наглядно показывает, какую титаническую работу проделали Сигэру Миямото и Эйдзи Аонума за последний год разработки для создания безупречного шедевра.",
      ],
      uk: [
        "Спільнота цифрових археологів опублікувала детальний аналіз відновленого дампу The Legend of Zelda: Ocarina of Time з виставки Nintendo Space World 1997 року.",
        "Знайдений білд демонструє суттєві відмінності від фінального шедевра: рання модель Хайрула була побудована з окремих замкнених кімнат, а система захоплення цілей Z-targeting мала іншу логіку роботи.",
        "У коді знайдено вирізані архітектурні елементи Храму Часу, альтернативні магічні закляття та початкові оркестрові варіації саундтреку Кодзі Кондо.",
        "Аналіз прототипу наочно демонструє геніальність шліфування та трансформації проєкту під керівництвом Сіґеру Міямото за кілька місяців до релізу.",
      ],
      en: [
        "Digital archivists and reverse engineers have completed an in-depth dissection of a newly resurfaced Nintendo Space World 1997 developmental build of The Legend of Zelda: Ocarina of Time.",
        "Dating back to November 1997, the prototype reveals a starkly different design architecture: Hyrule was initially constructed from compact segmented chambers rather than vast rolling vistas, and early sword-swing physics featured distinct collision timing.",
        "Unused assets in the ROM include cut dungeon floorplans, early fairy companion behaviors for Navi, and darker choral arrangements composed by Koji Kondo that were softened for the final cartridge release.",
        "Comparing this Spaceworld demo with the finished November 1998 master shows the astonishing pace of creative refinement executed by Shigeru Miyamoto and Eiji Aonuma in the final stretch.",
      ],
    },
  },

  // 4. Sonic X-treme
  {
    slugs: {
      ru: "otmenennaya-sonic-x-treme",
      uk: "skasovana-sonic-x-treme",
      en: "canceled-sonic-x-treme-new-builds",
    },
    title: {
      ru: "Новые подробности об отменённой Sonic X-treme",
      uk: "Нові подробиці про скасовану Sonic X-treme",
      en: "New Revelations on the Canceled Sonic X-treme Project",
    },
    excerpt: {
      ru: "Бывшие разработчики Sega of America поделились видеозаписями геймплея на движке Boss Engine для Sega Saturn.",
      uk: "Колишні розробники Sega of America опублікували унікальні кадри геймплею скасованого 3D-платформера.",
      en: "Former STI developers share footage of the lost Saturn platformer running on the proprietary engine.",
    },
    platform: {
      key: "sega",
      label: { ru: "SEGA", uk: "SEGA", en: "SEGA" },
    },
    publishedAt: {
      ru: "12 АВГ 2024",
      uk: "12 СЕРП 2024",
      en: "AUG 12, 2024",
    },
    readingTimeMinutes: 2,
    imageUrl: "/images/news/sonic-xtreme-saturn.jpg",
    imageAlt: {
      ru: "Sonic X-treme прототип для Sega Saturn",
      uk: "Sonic X-treme прототип для Sega Saturn",
      en: "Sonic X-treme prototype for Sega Saturn",
    },
    body: {
      ru: [
        "История одной из самых громких невышедших игр 1990-х — Sonic X-treme для Sega Saturn — пополнилась ценными историческими свидетельствами. Бывший ведущий программист проекта Крис Сенн выложил новые архивные материалы и видеозаписи тестирования раннего движка.",
        "Игра создавалась силами американской студии Sega Technical Institute (STI) как ответ на трехмерные революции Super Mario 64 и Crash Bandicoot. Главной фишкой проекта была уникальная сферическая камера с эффектом «рыбий глаз», позволявшая Сонику бегать по изогнутым поверхностям стен и потолков с динамической сменой гравитации.",
        "Однако проект столкнулся с чередой катастрофических проблем: конфликт между STI и японским офисом Sega, техническая сложность архитектуры Saturn и запрет Юдзи Наки на использование движка Nights into Dreams привели к срыву всех дедлайнов.",
        "Разработчики трудились на пределе человеческих возможностей без сна, но осенью 1996 года проект был окончательно закрыт. Отсутствие полноценного трехмерного Соника стало сокрушительным ударом по позициям Sega Saturn в рождественский сезон продаж.",
      ],
      uk: [
        "Історія найвідомішого нерелізованого проєкту 90-х — Sonic X-treme для Sega Saturn — отримала нові унікальні свідчення. Провідний програміст Кріс Сенн опублікував архівні записи роботи оригінального рушія.",
        "Гра розроблялася американською студією STI з амбітною метою перевести синього їжака у тривимірний простір. Головною родзинкою була сферична камера з лінзою «риб'яче око», яка дозволяла бігати по стінах зі зміною гравітації.",
        "Через суперечки між американським і японським підрозділами Sega та відмову Юдзі Наки надати рушій Nights into Dreams розробка опинилася у глухому куті.",
        "Восени 1996 року гру було остаточно скасовано, що завдало непоправного удару по позиціях Saturn у протистоянні з PlayStation та Nintendo 64.",
      ],
      en: [
        "The saga of Sonic X-treme, Sega's infamous lost 3D flagship for the Sega Saturn, has received fresh historical insight following newly released source archives from lead designer Chris Senn.",
        "Developed by the Sega Technical Institute (STI), the project aimed to counter Super Mario 64 with a revolutionary fish-eye spherical lens camera that dynamically rotated gravity vectors as Sonic sprinted up walls and across curved terrain.",
        "However, production was plagued by grueling technical bottlenecks on Saturn hardware and corporate discord between Sega of America and Sega of Japan, culminating in Yuji Naka withholding the Nights into Dreams rendering engine.",
        "After team members fell ill from relentless crunch, management pulled the plug in late 1996. The absence of a mainline 3D Sonic platformer severely crippled the Saturn during the pivotal holiday retail battle.",
      ],
    },
  },

  // 5. Game Boy Revolution
  {
    slugs: {
      ru: "portativnaya-revolyutsiya",
      uk: "portatyvna-revolyutsiya-game-boy",
      en: "handheld-revolution-game-boy",
    },
    title: {
      ru: "Портативная революция: от Game Boy до современных систем",
      uk: "Портативна революція: від Game Boy до сучасних систем",
      en: "The Handheld Revolution: From Game Boy to the Present Day",
    },
    excerpt: {
      ru: "Как простота, батарейки AA и Тетрис позволили Nintendo сокрушить технологически превосходящих конкурентов.",
      uk: "Як доступність, енергоефективність та Тетріс допомогли Nintendo здобути світове лідерство.",
      en: "How Gumpei Yokoi's lateral thinking and long battery life conquered the color handheld market.",
    },
    platform: {
      key: "nintendo",
      label: { ru: "NINTENDO", uk: "NINTENDO", en: "NINTENDO" },
    },
    publishedAt: {
      ru: "11 АВГ 2024",
      uk: "11 СЕРП 2024",
      en: "AUG 11, 2024",
    },
    readingTimeMinutes: 2,
    imageUrl: "/images/hardware/gameboy-classic.jpg",
    imageAlt: {
      ru: "Классический Nintendo Game Boy",
      uk: "Класичний Nintendo Game Boy",
      en: "Classic Nintendo Game Boy",
    },
    body: {
      ru: [
        "В 1989 году легендарный инженер Nintendo Гумпэй Ёкои представил миру портативную консоль Game Boy. На бумаге устройство выглядело почти архаичным: серый четырехпозиционный монохромный экран без подсветки на фоне анонсированных цветных конкурентов Atari Lynx и Sega Game Gear.",
        "Однако Ёкои следовал своей фундаментальной философии: «Латеральное мышление зрелыми технологиями» (Kareta Gijutsu no Suihei Shikō). Дешевые и проверенные временем компоненты позволили добиться демократичной цены и поразительной энергоэффективности: Game Boy работал до 30 часов всего от четырех пальчиковых батареек AA, тогда как цветные конкуренты разряжали шесть батареек за два-три часа.",
        "Вторым фактором триумфа стало стратегическое решение президента Nintendo Хироси Ямаути укомплектовать консоль картриджем с головоломкой Tetris советского программиста Алексея Пажитнова. Игра мгновенно стерла демографические границы: в Game Boy начали играть взрослые, бизнесмены в поездах и дети на школьных переменах.",
        "А второе дыхание консоли открыл феномен Pokémon Red & Blue в 1996 году. В общей сложности семейство Game Boy разошлось тиражом более 118 миллионов устройств, заложив нерушимый фундамент доминирования Nintendo на рынке портативных систем.",
      ],
      uk: [
        "У 1989 році видатний інженер Гумпей Йокої створив Game Boy, поклавши в основу філософію «Латерального мислення зрілими технологіями». Замість дорогого кольорового дисплея приставка отримала простий монохромний екран без підсвічування.",
        "Це рішення забезпечило неймовірну автономність: до 30 годин гри від чотирьох батарейок AA, тоді як кольорові конкуренти від Sega та Atari сідали за пару годин.",
        "Комплектація картриджем Tetris перетворила консоль на глобальний феномен для будь-якого віку, а пізніший реліз Pokémon закріпив беззаперечне лідерство Nintendo.",
        "Сукупний наклад понад 118 мільйонів пристроїв довів, що доступність та якісний геймдизайн важливіші за технічні характеристики.",
      ],
      en: [
        "In 1989, Nintendo luminary Gunpei Yokoi launched the original Game Boy, embodying his philosophy of 'Lateral Thinking with Withered Technology.' On paper, its reflective monochrome LCD screen without a backlight seemed archaic against color rivals Atari Lynx and Sega Game Gear.",
        "Yet that intentional hardware frugality yielded unbeatable advantages: an affordable $89 retail price and exceptional battery stamina. The Game Boy delivered up to 30 continuous hours of gameplay on four AA cells, while battery-draining color competitors exhausted six batteries in under three hours.",
        "Nintendo president Hiroshi Yamauchi delivered the knockout blow by securing Alexey Pajitnov's Tetris as the system's pack-in cartridge. Tetris transformed the Game Boy from a toy into an omnipresent cultural lifestyle accessory embraced by business commuters and students alike.",
        "Reinvigorated in 1996 by Satoshi Tajiri's Pokémon Red & Blue, the Game Boy family surpassed 118 million units sold worldwide, creating the foundation for Nintendo's enduring handheld empire.",
      ],
    },
  },

  // 6. Quake II Multiplayer
  {
    slugs: {
      ru: "multiplayer-quake-2-restored",
      uk: "multiplayer-quake-2-restored",
      en: "multiplayer-quake-2-restored",
    },
    title: {
      ru: "Фанаты восстановили мультиплеер Quake II",
      uk: "Фанати відновили онлайн-мультиплеєр Quake II",
      en: "Fans Restore Original Quake II Online Multiplayer",
    },
    excerpt: {
      ru: "Работающий онлайн на оригинальном движке с аутентичным сетевым кодом и серверами спустя 25 лет после релиза.",
      uk: "Працюючий онлайн на оригінальному рушії через 25 років після релізу культового шутера.",
      en: "Authentic netcode, client master servers, and classic DM arenas running 25 years after release.",
    },
    platform: {
      key: "pc",
      label: { ru: "PC", uk: "PC", en: "PC" },
    },
    publishedAt: {
      ru: "12 АВГ 2024",
      uk: "12 СЕРП 2024",
      en: "AUG 12, 2024",
    },
    readingTimeMinutes: 2,
    imageUrl: "/images/news/quake-2-multiplayer.jpg",
    imageAlt: {
      ru: "Сетевой матч Quake II на ЭЛТ-мониторе",
      uk: "Мережевий матч Quake II на ЕПТ-моніторі",
      en: "Quake II multiplayer match on CRT monitor",
    },
    body: {
      ru: [
        "Группа ретро-энтузиастов и программистов объявила об успешном завершении проекта по реанимации оригинального мастер-сервера и сетевой инфраструктуры Quake II 1997 года выпуска.",
        "Благодаря воссозданию протоколов пакетов UDP и эмуляции аутентификации WON/GameSpy игроки теперь могут запускать оригинальный exe-файл версии 3.20 без сторонних модов и находить активные серверы прямо во встроенном игровом браузере.",
        "Сообщество уже развернуло выделенные серверы для классического дезматча на q2dm1 (The Edge), дуэлей на рельсотронах и командного режима Capture the Flag с аутентичным сетевым пингом и физикой распрыжки.",
        "Организаторы инициативы подчеркнули, что проект полностью бесплатен и нацелен на сохранение чистейшего соревновательного духа золотой эры сетевых баталий конца 90-х.",
      ],
      uk: [
        "Спільнота ретро-програмістів оголосила про успішне відновлення оригінального мастер-сервера та класичного мережевого коду Quake II 1997 року.",
        "Завдяки реконструкції мережевих протоколів та серверних відповідей гравці можуть запускати автентичний виконуваний файл версії 3.20 та знаходити матчі у вбудованому браузері серверів.",
        "Вже запущені цілодобові сервери для легендарної арени The Edge (q2dm1), запеклих дуелей на рейлганах та класичного режиму захоплення прапора (CTF).",
        "Проєкт повністю відкритий для спільноти і повертає ту саму неповторну атмосферу комп'ютерних клубів кінця дев'яностих.",
      ],
      en: [
        "A dedicated group of retro engineering enthusiasts has successfully brought the original 1997 Quake II master server ecosystem and network infrastructure back to life.",
        "By reverse-engineering the UDP heartbeat protocols and emulating legacy master server handshakes, players can now launch an unmodded, vanilla version 3.20 client and locate low-latency matches directly in the native in-game server browser.",
        "Active dedicated servers have already been spun up across North America and Europe, hosting frantic deathmatches on q2dm1 (The Edge), rocket-jumping duels, and classic ThreeWave Capture the Flag.",
        "The project organizers emphasized that this preservation effort is completely free and aims to honor the pristine competitive spirit of late-90s PC gaming culture.",
      ],
    },
  },

  // 7. Arcade CRT Preservation
  {
    slugs: {
      ru: "sohranenie-igrovyh-avtomatov",
      uk: "zberezhennya-arkadnyh-avtomativ",
      en: "saving-coin-op-crt-cabinets",
    },
    title: {
      ru: "Новая жизнь аркад: сохранение игровых автоматов",
      uk: "Нове життя аркад: порятунок ігрових автоматів",
      en: "Arcade Preservation: Saving Coin-Op CRT Cabinets",
    },
    excerpt: {
      ru: "Как сообщества по всему миру восстанавливают редкие аркадные кабинеты, меняют конденсаторы и спасают кинескопы.",
      uk: "Як ентузіасти по всьому світу реставрують рідкісні кабінети, перепаюють шасі та рятують ЕПТ-екрани.",
      en: "How worldwide communities restore and digitize rare coin-operated machines and salvage rare CRT chassis.",
    },
    platform: {
      key: "arcade",
      label: { ru: "АРКАДЫ", uk: "АРКАДИ", en: "ARCADE" },
    },
    publishedAt: {
      ru: "11 АВГ 2024",
      uk: "11 СЕРП 2024",
      en: "AUG 11, 2024",
    },
    readingTimeMinutes: 2,
    imageUrl: "/images/news/arcade-restoration-crt.jpg",
    imageAlt: {
      ru: "Мастерская по реставрации аркадных автоматов и ЭЛТ",
      uk: "Майстерня реставрації аркадних автоматів та ЕПТ",
      en: "Retro arcade restoration workshop with CRT tube",
    },
    body: {
      ru: [
        "Международная коалиция энтузиастов аркадной реставрации отчиталась о масштабной программе по спасению и документированию классических кабинетов 70-х, 80-х и 90-х годов.",
        "Главным вызовом для реставраторов остается дефицит исправных электронно-лучевых трубок (ЭЛТ) и высыхающие электролитические конденсаторы в высоковольтных блоках развертки. Инженеры создают подробные схемы замены компонентов (cap kits) и изготавливают современные безопасные импульсные блоки питания.",
        "Параллельно ведется дамп редчайших ROM-чипов и кастомных микросхем логики ASIC, многие из которых со временем деградируют от окисления контактов.",
        "Благодаря этим усилиям десятки легендарных автоматов, от оригинального Pong до четырехместных кабинетов Teenage Mutant Ninja Turtles, продолжают работать в интерактивных музеях по всему миру.",
      ],
      uk: [
        "Міжнародна коаліція ентузіастів аркадної реставрації відзвітувала про масштабну ініціативу зі збереження класичних кабінетів 70-х, 80-х та 90-х років.",
        "Найбільшою проблемою залишається деградація високовольтних шасі ЕПТ-моніторів та висихання електролітичних конденсаторів. Майстри створюють інструкції з перепайки схем і розробляють сучасні стабілізатори живлення.",
        "Водночас триває копіювання рідкісних чипів пам'яті ROM та мікросхем захисту, які з роками втрачають заряд у напівпровідниках.",
        "Завдяки цій праці десятки унікальних автоматів знаходять друге життя в публічних музеях та ретро-просторах.",
      ],
      en: [
        "An international alliance of coin-op preservationists has announced a landmark achievement in salvaging and restoring historical arcade cabinets across three decades.",
        "The most pressing battle involves preserving aging cathode ray tubes (CRTs) and replacing drying electrolytic capacitors on high-voltage deflection chassis. Skilled technicians are engineering modern custom capacitor kits and safe solid-state flyback transformers.",
        "Simultaneously, archivists are desoldering and dumping decaying bipolar PROMs and custom ASIC security modules before physical bit rot destroys rare game code forever.",
        "Their painstaking efforts ensure historic cabinets—from 1970s discrete-logic Pong tables to 4-player Konami brawlers—remain fully playable artifacts for generations to come.",
      ],
    },
  },

  // 8. 3dfx Voodoo Prototype
  {
    slugs: {
      ru: "redkaya-videokarta-3dfx",
      uk: "ridkisna-videokarta-3dfx",
      en: "rare-3dfx-voodoo-prototype-unearthed",
    },
    title: {
      ru: "Ретро-железо: редкая видеокарта 3dfx найдена на свалке",
      uk: "Ретро-залізо: рідкісна відеокарта 3dfx знайдена на розпродажі",
      en: "Retro Hardware: Rare 3dfx Voodoo Prototype Unearthed",
    },
    excerpt: {
      ru: "История удивительной находки раннего инженерного образца Voodoo Graphics и его запуск на ретро-стенде.",
      uk: "Історія дивовижної знахідки прототипу легендарного 3D-прискорювача Voodoo та тест на вінтажному ПК.",
      en: "An extraordinary find: early pre-production 3D accelerator silicon booted on a vintage Pentium II Windows 98 rig.",
    },
    platform: {
      key: "pc",
      label: { ru: "PC", uk: "PC", en: "PC" },
    },
    publishedAt: {
      ru: "9 АВГ 2024",
      uk: "09 СЕРП 2024",
      en: "AUG 09, 2024",
    },
    readingTimeMinutes: 2,
    imageUrl: "/images/news/voodoo-graphics-card.jpg",
    imageAlt: {
      ru: "Инженерная плата видеокарты 3dfx Voodoo",
      uk: "Інженерна плата відеокарти 3dfx Voodoo",
      en: "Engineering prototype of 3dfx Voodoo 3D accelerator",
    },
    body: {
      ru: [
        "Коллекционер винтажного компьютерного железа случайно обнаружил на техническом складе в Кремниевой долине уникальный инженерный прототип первой 3dfx Voodoo Graphics образца середины 1996 года.",
        "Плата отличается от финального коммерческого продукта зеленой маской печатной платы ручной пайки, ранней ревизией чипсета SST-1 с маркировкой «Confidential Sample» и внешним кабелем синхронизации.",
        "После тщательной ультразвуковой чистки и восстановления питания плату установили в материнскую плату Socket 7 с процессором Pentium MMX 233 МГц под управлением Windows 95. Ускоритель успешно запустил демоверсию Tomb Raider и GLQuake через фирменный API Glide.",
        "Находка подтверждает, что 3dfx тестировала аппаратную билинейную фильтрацию текстур еще за несколько месяцев до официального триумфального анонса.",
      ],
      uk: [
        "Колекціонер вінтажного комп'ютерного заліза випадково виявив на технічному складі в Каліфорнії рідкісний інженерний зразок 3dfx Voodoo Graphics зразка 1996 року.",
        "Плата має характерні ознаки прототипу: сліди ручного монтажу, ранні ревізії чипсета SST-1 з грифом «Confidential» та нестандартну розводку живлення.",
        "Після дбайливого відновлення контактів відеокарту підключили до ПК на базі Pentium MMX. Прискорювач бездоганно запустив Tomb Raider і GLQuake через культовий API Glide.",
        "Цей унікальний артефакт буде збережено у приватному музеї мікроелектроніки як свідчення народження апаратного 3D-геймінгу на ПК.",
      ],
      en: [
        "A hardware collector scouring an electronics liquidation warehouse in Silicon Valley has uncovered an authentic pre-production prototype of the groundbreaking 1996 3dfx Voodoo Graphics accelerator.",
        "The board bears hallmark engineering traits: hand-soldered jumper wire bodge fixes, unmasked green prototype PCB substrate, and prototype silicon stamped 'SST-1 Engineering Sample - Confidential.'",
        "Following ultrasonic flux cleaning and trace inspection, the card was seated into a Socket 7 Pentium MMX 233 MHz testbench running Windows 95 OSR2. Paired via VGA pass-through with a 2D card, it smoothly fired up GLQuake and Tomb Raider via the native Glide API.",
        "Benchmarking tests confirm the board delivers the silky-smooth bilinear texture filtering and alpha blending that instantly catalyzed the PC 3D graphics revolution.",
      ],
    },
  },

  // 9. Sega Saturn 30 Years
  {
    slugs: {
      ru: "sega-saturn-30-let",
      uk: "sega-saturn-30-rokiv",
      en: "sega-saturn-30-years-anniversary",
    },
    title: {
      ru: "Sega Saturn отмечает 30 лет с момента запуска",
      uk: "Sega Saturn святкує 30 років з моменту запуску",
      en: "Sega Saturn Turns 30: Architecture, Innovation & Legacy",
    },
    excerpt: {
      ru: "Вспоминаем историю консоли, которая опередила своё время сложной архитектурой из двух процессоров.",
      uk: "Згадуємо історію консолі, що випередила свій час складною архітектурою з двома процесорами.",
      en: "Revisiting the twin-CPU marvel that challenged the 32-bit generation with unmatched 2D and fierce 3D ambition.",
    },
    platform: {
      key: "sega",
      label: { ru: "SEGA", uk: "SEGA", en: "SEGA" },
    },
    publishedAt: {
      ru: "8 АВГ 2024",
      uk: "08 СЕРП 2024",
      en: "AUG 08, 2024",
    },
    readingTimeMinutes: 2,
    imageUrl: "/images/hardware/sega-saturn.jpg",
    imageAlt: {
      ru: "Игровая консоль Sega Saturn",
      uk: "Ігрова консоль Sega Saturn",
      en: "Sega Saturn console",
    },
    body: {
      ru: [
        "22 ноября 1994 года на прилавках японских магазинов появилась 32-битная консоль Sega Saturn. Продажи стартовали триумфально: первая партия из 200 000 коробок была сметена покупателями за считанные часы благодаря порту файтинга Virtua Fighter.",
        "Архитектура Saturn была техническим шедевром и одновременно ночным кошмаром для программистов: два центральных процессора Hitachi SH-2, вспомогательный SH-1 для CD-привода, два кастомных видеочипа VDP1 и VDP2, а также звуковой чип Motorola 68EC000 с процессором SCSP.",
        "Хотя на западном рынке консоль пострадала из-за внезапного раннего анонса на E3 1995 и сложного инструментария, в Японии Saturn стала культовым феноменом с непревзойденной библиотекой 2D-файтингов, шмапов и RPG, включая незабвенную Panzer Dragoon Saga.",
        "Спустя три десятилетия сообщество вспоминает Saturn как систему смелых инженерных идей, которая доказала безграничную глубину настоящего хардкорного геймдизайна.",
      ],
      uk: [
        "22 листопада 1994 року в Японії відбувся реліз 32-бітної консолі Sega Saturn. Перша партія розлетілася за лічені години завдяки аркадному хіту Virtua Fighter.",
        "Інженерна архітектура системи вражала масштабністю: пара процесорів Hitachi SH-2, окремі чипи VDP1 та VDP2 для роботи зі спрайтами та фонами, а також передове звукове апаратне забезпечення.",
        "Попри труднощі розробки для західних студій, в Японії Saturn став справжнім культом, подарувавши гравцям найкращі 2D-файтинги від Capcom та неперевершені шедеври на кшталт Panzer Dragoon Saga.",
        "Сьогодні ентузіасти віддають шану консолі, яка стала символом безкомпромісного та самобутнього духу компанії Sega.",
      ],
      en: [
        "On November 22, 1994, the Sega Saturn officially launched in Japan. Backed by an astonishingly accurate home translation of Yu Suzuki's arcade sensation Virtua Fighter, the initial shipment of 200,000 units vanished from store shelves within hours.",
        "Under the hood lay one of the most sophisticated computing architectures ever devised for consumer electronics: dual 28.6 MHz Hitachi SH-2 processors, an SH-1 optical drive manager, twin video display processors (VDP1 for distorted quadrilateral sprites and VDP2 for multi-plane backgrounds), and a Yamaha/Motorola audio subsystem.",
        "While parallel-processing complexity and a chaotic Western surprise launch at E3 1995 created headwinds abroad, in Japan the Saturn established a golden sanctuary for lightning-fast 2D fighters, vertical shooters, and cinematic role-playing masterpieces like Panzer Dragoon Saga.",
        "Three decades on, the Saturn is celebrated not as a runner-up, but as a monument to uncompromising engineering and audacious arcade craftsmanship.",
      ],
    },
  },
];

export function getDetailedNewsBySlug(
  locale: AppLocale,
  slug: string
): { news: DetailedNewsItem; currentLocale: AppLocale } | null {
  for (const n of detailedNewsList) {
    if (
      n.slugs.ru === slug ||
      n.slugs.uk === slug ||
      n.slugs.en === slug
    ) {
      return { news: n, currentLocale: locale };
    }
  }
  return null;
}
