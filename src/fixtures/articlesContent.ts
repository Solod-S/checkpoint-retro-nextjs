import type { AppLocale } from "@/lib/i18n/config";
import type { FactBoxItem, TocItem } from "./singleArticle";

export interface ArticleSectionContent {
  id: string;
  title: string;
  paragraphs: string[];
  quote?: {
    text: string;
    author: string;
  };
  figure?: {
    imageUrl: string;
    caption: string;
  };
}

export interface DetailedArticleData {
  slugs: Record<AppLocale, string>;
  heroImageUrl: string;
  kicker: Record<AppLocale, string>;
  title: Record<AppLocale, string>;
  dek: Record<AppLocale, string>;
  readingTimeMinutes: number;
  publishedAt: Record<AppLocale, string>;
  author: {
    name: Record<AppLocale, string>;
    role: Record<AppLocale, string>;
  };
  toc: Record<AppLocale, TocItem[]>;
  factBox: Record<
    AppLocale,
    {
      title: string;
      items: FactBoxItem[];
    }
  >;
  sections: Record<AppLocale, ArticleSectionContent[]>;
}

export const detailedArticlesList: DetailedArticleData[] = [
  // 1. SEGA DREAMCAST
  {
    slugs: {
      ru: "pochemu-dreamcast-operedila-svoyo-vremya",
      uk: "chomu-dreamcast-vperedyla-sviy-chas",
      en: "why-dreamcast-was-ahead-of-its-time",
    },
    heroImageUrl: "/images/hardware/dreamcast-hero.jpg",
    kicker: {
      ru: "ГЛАВНАЯ ИСТОРИЯ",
      uk: "ГОЛОВНА ІСТОРІЯ",
      en: "FEATURED STORY",
    },
    title: {
      ru: "Почему Dreamcast опередила своё время",
      uk: "Чому Dreamcast випередила свій час",
      en: "Why Dreamcast was ahead of its time",
    },
    dek: {
      ru: "Смелые идеи, встроенный модем, экранчик VMU и игры, которые до сих пор выглядят современно. Разбираемся, почему последняя консоль Sega была взглядом в будущее.",
      uk: "Сміливі ідеї, вбудований модем, екранчик VMU та ігри, які досі виглядають сучасно. Досліджуємо останню домашню консоль Sega.",
      en: "Bold ideas, built-in 56k modem, VMU interactive memory cards, and timeless classics. Why Sega's swan song was a true vision of future gaming.",
    },
    readingTimeMinutes: 3,
    publishedAt: {
      ru: "16 августа 2024",
      uk: "16 серпня 2024",
      en: "August 16, 2024",
    },
    author: {
      name: {
        ru: "Алексей Морозов",
        uk: "Олексій Морозов",
        en: "Alexey Morozov",
      },
      role: {
        ru: "Редактор и автор",
        uk: "Редактор і автор",
        en: "Editor & Author",
      },
    },
    toc: {
      ru: [
        { id: "modem", number: "01", title: "Онлайн из коробки: эпоха 56k" },
        { id: "vmu", number: "02", title: "VMU — экран на контроллере" },
        { id: "games", number: "03", title: "Шедевры: от Shenmue до Jet Set Radio" },
        { id: "fate", number: "04", title: "Почему Sega ушла с рынка железа" },
      ],
      uk: [
        { id: "modem", number: "01", title: "Онлайн з коробки: епоха 56k" },
        { id: "vmu", number: "02", title: "VMU — екран на контролері" },
        { id: "games", number: "03", title: "Шедеври: від Shenmue до Jet Set Radio" },
        { id: "fate", number: "04", title: "Чому Sega пішла з ринку заліза" },
      ],
      en: [
        { id: "modem", number: "01", title: "Online Out of the Box: The 56k Era" },
        { id: "vmu", number: "02", title: "VMU: Second Screen on the Controller" },
        { id: "games", number: "03", title: "Masterpieces: Shenmue to Jet Set Radio" },
        { id: "fate", number: "04", title: "Why Sega Left the Hardware Race" },
      ],
    },
    factBox: {
      ru: {
        title: "Факты о Sega Dreamcast",
        items: [
          { label: "Год запуска", value: "1998 (Япония) / 1999 (Запад)", icon: "📅" },
          { label: "Процессор", value: "Hitachi SH-4 (200 МГц, 128-бит)", icon: "💻" },
          { label: "Графика", value: "NEC PowerVR2 (отложенный рендеринг)", icon: "🎮" },
          { label: "Сетевой модуль", value: "Встроенный модем 56k / Ethernet", icon: "🌐" },
          { label: "Инновация", value: "Интерактивная карта памяти VMU", icon: "⭐" },
        ],
      },
      uk: {
        title: "Факти про Sega Dreamcast",
        items: [
          { label: "Рік запуску", value: "1998 (Японія) / 1999 (Захід)", icon: "📅" },
          { label: "Процесор", value: "Hitachi SH-4 (200 МГц, 128-біт)", icon: "💻" },
          { label: "Графіка", value: "NEC PowerVR2", icon: "🎮" },
          { label: "Мережа", value: "Вбудований модем 56k / адаптер", icon: "🌐" },
          { label: "Інновація", value: "Інтерактивна карта пам'яті VMU", icon: "⭐" },
        ],
      },
      en: {
        title: "Sega Dreamcast Facts",
        items: [
          { label: "Release Year", value: "1998 (Japan) / 1999 (West)", icon: "📅" },
          { label: "CPU", value: "Hitachi SH-4 (200 MHz, 128-bit FPU)", icon: "💻" },
          { label: "Graphics", value: "NEC PowerVR2 Tile-Based", icon: "🎮" },
          { label: "Network", value: "Built-in 56k Modem / BBA", icon: "🌐" },
          { label: "Key Innovation", value: "Visual Memory Unit (VMU)", icon: "⭐" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "modem",
          title: "Онлайн из коробки: эпоха 56k",
          paragraphs: [
            "9 сентября 1999 года (легендарная дата 9/9/99) в Северной Америке вышла Sega Dreamcast. Она стала первой домашней консолью шестого поколения, укомплектованной полноценным модемом прямо в коробке. Пока конкуренты продолжали воспринимать приставки исключительно как изолированные устройства для картриджей и дисков, Sega уже строила платформу SegaNet.",
            "Phantasy Star Online доказала скептикам, что многопользовательские ролевые миры возможны на домашней консоли без сложной возни с ПК. Игроки со всего мира собирались в лобби Pioneer II, общались через экранную клавиатуру и вместе исследовали неизведанную планету Рагол.",
          ],
          quote: {
            text: "«Мы знали, что будущее за онлайном. Dreamcast должна была связать игроков задолго до того, как высокоскоростной интернет стал повседневностью».",
            author: "— Ю Судзуки, директор Sega AM2",
          },
        },
        {
          id: "vmu",
          title: "VMU — экран на контроллере",
          paragraphs: [
            "Визуальная карта памяти Visual Memory Unit (VMU) опередила появление концепции второго экрана почти на полтора десятилетия. Монохромный ЖК-экран прямо в геймпаде отображал пульс персонажа в Resident Evil, секретные подсказки в NFL 2K и позволял тренировать Chao из Sonic Adventure в мини-играх прямо в кармане по дороге в школу.",
          ],
        },
        {
          id: "games",
          title: "Шедевры: от Shenmue до Jet Set Radio",
          paragraphs: [
            "Каталог Dreamcast поражает невероятной концентрацией авторской смелости. Граффити-бунт в Jet Set Radio с сел-шейдинговой графикой, безумные гонки Crazy Taxi, джазовый ритм Space Channel 5 и монументальная эпопея Shenmue с живым симулированным городом и меняющейся погодой.",
            "Архитектура PowerVR2 позволяла выдавать чистейшую картинку 480p через кабель VGA, благодаря чему даже сегодня игры для Dreamcast на современных экранах выглядят поразительно свежо и четко.",
          ],
        },
        {
          id: "fate",
          title: "Почему Sega ушла с рынка железа",
          paragraphs: [
            "Несмотря на технологический триумф и преданную любовь игроков, финансовое бремя неудач предшественницы Sega Saturn и агрессивный маркетинг Sony PlayStation 2 с поддержкой формата DVD не оставили Dreamcast шансов. В январе 2001 года Sega официально объявила об уходе из консольного бизнеса, став сторонним издателем. Но след, оставленный Dreamcast, вдохновляет индустрию по сей день.",
          ],
        },
      ],
      uk: [
        {
          id: "modem",
          title: "Онлайн з коробки: епоха 56k",
          paragraphs: [
            "9 вересня 1999 року у Північній Америці стартувала Sega Dreamcast. Вона стала першою системою нового покоління, укомплектованою модемом прямо в коробці. Поки конкуренти дивилися на консолі як на ізольовані пристрої, Sega вже будувала мережу SegaNet.",
            "Phantasy Star Online довела, що повноцінні онлайн-світи можливі на домашніх телевізорах. Гравці збиралися на орбітальній станції Pioneer II та разом досліджували загадкову планету Рагол.",
          ],
          quote: {
            text: "«Ми знали, що майбутнє за онлайном. Dreamcast мала об'єднати гравців задовго до того, як швидкісний інтернет став стандартом».",
            author: "— Ю Судзукі, директор Sega AM2",
          },
        },
        {
          id: "vmu",
          title: "VMU — екран на контролері",
          paragraphs: [
            "Карта пам'яті Visual Memory Unit (VMU) випередила ідею другого екрана майже на півтора десятиліття. Мініатюрний монохромний РК-дисплей та кнопки перетворювали карту на самостійну кишенькову консоль.",
            "Вона показувала пульс персонажа в Resident Evil, секретні схеми пасів у NFL 2K і дозволяла брати із собою та тренувати вихованців Chao із Sonic Adventure прямо в кишені по дорозі до школи.",
          ],
        },
        {
          id: "games",
          title: "Шедеври: від Shenmue до Jet Set Radio",
          paragraphs: [
            "Бібліотека Dreamcast вражає сміливістю та експериментами: революційний сел-шейдинг і фанковий саундтрек Jet Set Radio, аркадний драйв Crazy Taxi та монументальна дилогія Shenmue Ю Судзукі з живим відкритим містом та симуляцією погодних умов.",
            "Графічний процесор NEC PowerVR2 видавав кришталево чисте зображення 480p через кабель VGA, завдяки чому ігри Dreamcast і сьогодні виглядають напрочуд свіжо.",
          ],
        },
        {
          id: "fate",
          title: "Чому Sega пішла з ринку заліза",
          paragraphs: [
            "Незважаючи на технічну досконалість та віддану любов спільноти, важкий фінансовий тягар невдач Saturn та вихід комерційного титана PlayStation 2 з підтримкою DVD визначили долю приставки. На початку 2001 року Sega оголосила про згортання апаратного напрямку та перехід до ролі стороннього видавця. Проте бунтарський дух Dreamcast назавжди залишився у серцях гравців.",
          ],
        },
      ],
      en: [
        {
          id: "modem",
          title: "Online Out of the Box: The 56k Era",
          paragraphs: [
            "On September 9, 1999 (the legendary 9/9/99 launch), Sega Dreamcast arrived in North America. It was the first sixth-generation system packed with an integrated modem right out of the box, building the foundation of console online multiplayer through SegaNet.",
            "Phantasy Star Online proved to skeptics that MMO experiences belonged on living room TVs. Players gathered in the lobbies of Pioneer II, typing with keyboard controllers and descending into the mysteries of Planet Ragol together.",
          ],
          quote: {
            text: "'We knew the future was connected. Dreamcast was built to bridge players across the globe long before broadband became standard.'",
            author: "— Yu Suzuki, Head of Sega AM2",
          },
        },
        {
          id: "vmu",
          title: "VMU: Second Screen on the Controller",
          paragraphs: [
            "The Visual Memory Unit (VMU) was a stroke of creative genius: an interactive memory card featuring an LCD screen, D-pad, and battery. It anticipated the second-screen gaming concept by nearly fifteen years.",
            "The screen displayed heartbeat status in Resident Evil, private offensive play selections in NFL 2K, and detached as a standalone virtual pet companion for raising Chao from Sonic Adventure on the go.",
          ],
        },
        {
          id: "games",
          title: "Masterpieces: Shenmue to Jet Set Radio",
          paragraphs: [
            "The Dreamcast catalog overflowed with raw, unapologetic creativity. From the cel-shaded urban rebellion of Jet Set Radio and the frantic pace of Crazy Taxi to Yu Suzuki's monumental life-simulation opus Shenmue, complete with NPC schedules and reactive weather.",
            "Its NEC PowerVR2 GPU supported pristine 480p progressive scan output via VGA, giving Dreamcast games an unmatched image sharpness that holds up astonishingly well on modern displays.",
          ],
        },
        {
          id: "fate",
          title: "Why Sega Left the Hardware Race",
          paragraphs: [
            "Despite its technical brilliance and devoted player base, Sega carried crippling debt from the Saturn era. When Sony's PlayStation 2 juggernaut arrived sporting a built-in DVD player, the commercial battle became unwinnable. In early 2001, Sega transitioned to become a pure third-party software publisher. Yet the Dreamcast remains one of the most beloved and visionary consoles ever built.",
          ],
        },
      ],
    },
  },

  // 2. FALLOUT (1997)
  {
    slugs: {
      ru: "kak-rozhdalsya-originalnyj-fallout-1997",
      uk: "yak-narodzhuvavsya-originalnyj-fallout-1997",
      en: "making-of-original-fallout-1997",
    },
    heroImageUrl: "/images/games/fallout-vault.jpg",
    kicker: {
      ru: "ИСТОРИЯ СОЗДАНИЯ",
      uk: "ІСТОРІЯ СТВОРЕННЯ",
      en: "DEV HISTORY",
    },
    title: {
      ru: "Как рождался оригинальный Fallout (1997): от GURPS к пустошам",
      uk: "Як народжувався оригінальний Fallout (1997): від GURPS до пусток",
      en: "The Making of the Original Fallout (1997): From GURPS to Wastelands",
    },
    dek: {
      ru: "История о том, как Тим Кейн, Леонард Боярский и небольшая команда энтузиастов создали эталон постапокалиптической RPG вопреки сомнениям руководства.",
      uk: "Історія про те, як Тім Кейн і невелика команда створили еталонну рольову гру всупереч скепсису видавця.",
      en: "How Tim Cain and a small dedicated crew crafted the definitive post-apocalyptic RPG despite corporate doubt.",
    },
    readingTimeMinutes: 3,
    publishedAt: {
      ru: "15 августа 2024",
      uk: "15 серпня 2024",
      en: "August 15, 2024",
    },
    author: {
      name: {
        ru: "Алексей Морозов",
        uk: "Олексій Морозов",
        en: "Alexey Morozov",
      },
      role: {
        ru: "Редактор и автор",
        uk: "Редактор і автор",
        en: "Editor & Author",
      },
    },
    toc: {
      ru: [
        { id: "world", number: "01", title: "Мир после катастрофы" },
        { id: "tabletop", number: "02", title: "От GURPS к системе SPECIAL" },
        { id: "cult", number: "03", title: "Почему Fallout стал бессмертным" },
      ],
      uk: [
        { id: "world", number: "01", title: "Світ після катастрофи" },
        { id: "tabletop", number: "02", title: "Від GURPS до системи SPECIAL" },
        { id: "cult", number: "03", title: "Чому Fallout став безсмертним" },
      ],
      en: [
        { id: "world", number: "01", title: "World After the Apocalypse" },
        { id: "tabletop", number: "02", title: "From GURPS to the SPECIAL System" },
        { id: "cult", number: "03", title: "Why Fallout Became Timeless" },
      ],
    },
    factBox: {
      ru: {
        title: "Факты о Fallout (1997)",
        items: [
          { label: "Год выхода", value: "1997", icon: "📅" },
          { label: "Разработчик", value: "Interplay (Black Isle Studios)", icon: "💻" },
          { label: "Ключевые авторы", value: "Тим Кейн, Леонард Боярский, Крис Тейлор", icon: "👤" },
          { label: "Ролевая система", value: "S.P.E.C.I.A.L. (создана после потери GURPS)", icon: "🎲" },
          { label: "Визуальный стиль", value: "Ретрофутуризм 1950-х и дизельпанк", icon: "☢️" },
        ],
      },
      uk: {
        title: "Факти про Fallout (1997)",
        items: [
          { label: "Рік виходу", value: "1997", icon: "📅" },
          { label: "Розробник", value: "Interplay (Black Isle Studios)", icon: "💻" },
          { label: "Ключові автори", value: "Тім Кейн, Леонард Боярський, Кріс Тейлор", icon: "👤" },
          { label: "Рольова система", value: "S.P.E.C.I.A.L.", icon: "🎲" },
          { label: "Візуальний стиль", value: "Ретрофутуризм 1950-х", icon: "☢️" },
        ],
      },
      en: {
        title: "Fallout (1997) Facts",
        items: [
          { label: "Release Year", value: "1997", icon: "📅" },
          { label: "Developer", value: "Interplay (Black Isle Studios)", icon: "💻" },
          { label: "Core Creators", value: "Tim Cain, Leonard Boyarsky, Chris Taylor", icon: "👤" },
          { label: "System", value: "S.P.E.C.I.A.L. (derived after losing GURPS)", icon: "🎲" },
          { label: "Aesthetic", value: "1950s Raygun Gothic Retrofuturism", icon: "☢️" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "world",
          title: "Мир после катастрофы",
          paragraphs: [
            "В середине 1990-х Тим Кейн в свободное от рутинных проектов время начал писать собственный изометрический игровой движок, мечтая создать бескомпромиссную ролевую игру. Так зародился проект Fallout — уникальный синтез наивного оптимизма американского ретрофутуризма 1950-х годов и суровой, безнадежной реальности выжженных радиоактивных пустошей Южной Калифорнии.",
            "Вместо привычных для фэнтези мечей и магии игрокам открылся мир, застрявший в ядерном полураспаде: ржавые автомобили с атомными двигателями Corvega, лучевые пистолеты из фантастических журналов pulp-эпохи, полуразрушенные бункеры Убежищ Vault-Tec и джазовые мотивы The Ink Spots. Этот контраст между глянцевыми пропагандистскими плакатами о «светлом атоме» и кошмаром радиационных мутаций стал фирменной ДНК вселенной.",
          ],
          quote: {
            text: "«Мы хотели показать не просто пустыню с мутантами, а живой мир, где люди продолжают выживать, торговать, конфликтовать и строить надежды — даже когда прежней цивилизации больше нет».",
            author: "— Тим Кейн, ведущий программист и создатель Fallout",
          },
        },
        {
          id: "tabletop",
          title: "От GURPS к системе SPECIAL",
          paragraphs: [
            "Изначально Fallout разрабатывался по официальной лицензии популярной универсальной настольной системы GURPS Стива Джексона. Однако, когда автор настолки ознакомился с рабочим билдом игры и увидел обилие расчленения, черного циничного юмора и возможность отыгрывать откровенного мерзавца, Jackson Games отозвали права на использование системы в ультимативном порядке.",
            "Оказавшись на грани закрытия проекта, команда не опустила руки. Буквально за пару недель мозговых штурмов Тим Кейн, Крис Тейлор и Леонард Боярский спроектировали абсолютно новую ролевую механику с семью базовыми характеристиками: Strength (Сила), Perception (Восприятие), Endurance (Выносливость), Charisma (Харизма), Intelligence (Интеллект), Agility (Ловкость) и Luck (Удача) — так родилась культовая аббревиатура S.P.E.C.I.A.L. А уникальные перки и особенности (traits) вроде «Кровавой бани» (Bloody Mess) придали прокачке неповторимый колорит.",
          ],
        },
        {
          id: "cult",
          title: "Почему Fallout стал бессмертным",
          paragraphs: [
            "Главная сила Fallout заключалась в бескомпромиссной свободе выбора и вариативности. Игра никогда не вела за руку маркерами на компасе. Любая задача — от проникновения в Некрополь до поиска водного чипа — решалась десятком способов: грубой силой, тонким взломом терминалов, скрытным воровством или дипломатическим даром.",
            "Вершиной нарративного дизайна стал финальный диалог с Создателем (The Master) в Соборе. Главного злодея пустошей не обязательно было расстреливать из плазменной винтовки: персонаж с высоким интеллектом и научной подготовкой мог предоставить Создателю неопровержимые медицинские доказательства бесплодности супермутантов, заставив чудовище осознать крах своей философии и самостоятельно запустить самоуничтожение базы.",
          ],
        },
      ],
      uk: [
        {
          id: "world",
          title: "Світ після катастрофи",
          paragraphs: [
            "У середині 1990-х Тім Кейн у вільний час почав створювати ізометричний рушій для RPG своєї мрії. Так народився Fallout — унікальний синтез американського ретрофутуризму 50-х років, джазових балад та безжальних ядерних пусток Південної Каліфорнії.",
            "Замість класичного фентезі гравці потрапили у світ, де наївний атомний оптимізм розбився об жорстоку реальність виживання: іржаві автівки Corvega, бункери Vault-Tec та променеві бластери стали візитівкою франшизи.",
          ],
          quote: {
            text: "«Ми хотіли створити живий соціум, де люди торгують, борються і вірять у майбутнє навіть на попелищі цивілізації».",
            author: "— Тім Кейн, автор і провідний розробник",
          },
        },
        {
          id: "tabletop",
          title: "Від GURPS до системи SPECIAL",
          paragraphs: [
            "Спочатку розробка велася за настільною ліцензією GURPS, проте через відверту жорстокість і чорний гумор правовласники розірвали контракт. Опинившись під загрозою скасування проєкту, команда створила власну рольову систему.",
            "Тім Кейн і Кріс Тейлор сформували систему S.P.E.C.I.A.L. (Strength, Perception, Endurance, Charisma, Intelligence, Agility, Luck) з перками та рисами характеру, яка запропонувала небувалу глибину кастомізації героя.",
          ],
        },
        {
          id: "cult",
          title: "Чому Fallout став безсмертним",
          paragraphs: [
            "Справжня свобода відіграшу ролі та наслідки кожного вчинку зробили Fallout революційним. Гра не нав'язувала єдиний стиль проходження: від харизматичного дипломата до нерозумного здорованя з двома словами в словниковому запасі.",
            "Фінал із Творцем (The Master), якого можна переконати скласти зброю за допомогою логічних медичних аргументів про безплідність мутантів, назавжди увійшов до золотого фонду відеоігрового дизайну.",
          ],
        },
      ],
      en: [
        {
          id: "world",
          title: "World After the Apocalypse",
          paragraphs: [
            "In the mid-1990s, programmer Tim Cain began prototyping an isometric role-playing engine after hours. That experimental project transformed into Fallout — a stark and unforgettable marriage between 1950s atomic-age optimism and barren, unforgiving Californian wastelands.",
            "Rather than leaning on conventional swords and sorcery, Fallout immersed players in a decaying retrofuture of rusted Corvega cruisers, Vault-Tec underground fallout shelters, rayguns, and the haunting serenades of The Ink Spots. The grim juxtaposition of happy propaganda posters against flesh-melting radiation forged a legendary setting.",
          ],
          quote: {
            text: "'We wanted a living wasteland where civilization clings to hope, barters for scrap, and rebuilds morality in the dirt.'",
            author: "— Tim Cain, Lead Programmer and Designer",
          },
        },
        {
          id: "tabletop",
          title: "From GURPS to the SPECIAL System",
          paragraphs: [
            "Fallout originally ran under the official license of Steve Jackson's GURPS tabletop system. However, upon reviewing an early game build filled with limb-severing combat and dark cynical humor, Jackson pulled the licensing rights immediately.",
            "Facing sudden cancellation, Tim Cain, Chris Taylor, and Leonard Boyarsky banded together and invented an entire bespoke character ruleset in a mere two weeks: Strength, Perception, Endurance, Charisma, Intelligence, Agility, and Luck — giving birth to the iconic S.P.E.C.I.A.L. stat array and flavorful perks like Bloody Mess.",
          ],
        },
        {
          id: "cult",
          title: "Why Fallout Became Timeless",
          paragraphs: [
            "Fallout's enduring greatness stems from uncompromising player freedom. Quests featured dozens of branching outcomes: stealth infiltration, computer hacking, silver-tongued negotiation, or explosive brute force.",
            "The climactic encounter with The Master stands as one of gaming's greatest achievements: a player with supreme intelligence and scientific autopsy records can logically persuade the monstrous antagonist that his mutant vision is sterile and flawed, prompting him to voluntarily abort the invasion.",
          ],
        },
      ],
    },
  },

  // 3. CASTLEVANIA SOTN
  {
    slugs: {
      ru: "castlevania-symphony-of-the-night-kak-sozdavalas-metroidvaniya",
      uk: "castlevania-sotn-istoriya",
      en: "castlevania-sotn-birth-of-metroidvania",
    },
    heroImageUrl: "/images/games/castlevania-sotn.jpg",
    kicker: {
      ru: "АНАЛИЗ",
      uk: "АНАЛІЗ",
      en: "ANALYSIS",
    },
    title: {
      ru: "Симфония ночи: Как Castlevania SOTN переизобрела жанр на PlayStation",
      uk: "Симфонія ночі: Як Castlevania SOTN перевинайшла жанр на PlayStation",
      en: "Symphony of the Night: How Castlevania Redefined 2D Action on PS1",
    },
    dek: {
      ru: "Кодзи Игараси и его революция в 2D-геймдизайне в эпоху тотального перехода индустрии в полигональное 3D.",
      uk: "Кодзі Іґарасі та його тріумф 2D-геймдизайну у часи масового переходу індустрії до тривимірності.",
      en: "Koji Igarashi's non-linear masterpiece proved that 2D gameplay could soar even during the dawn of 3D polygon craze.",
    },
    readingTimeMinutes: 3,
    publishedAt: {
      ru: "14 августа 2024",
      uk: "14 серпня 2024",
      en: "August 14, 2024",
    },
    author: {
      name: {
        ru: "Алексей Морозов",
        uk: "Олексій Морозов",
        en: "Alexey Morozov",
      },
      role: {
        ru: "Редактор и автор",
        uk: "Редактор і автор",
        en: "Editor & Author",
      },
    },
    toc: {
      ru: [
        { id: "2d-vs-3d", number: "01", title: "Бунт против полигонов" },
        { id: "mechanics", number: "02", title: "RPG-элементы и исследование" },
        { id: "music", number: "03", title: "Музыка Мичиру Яманэ" },
      ],
      uk: [
        { id: "2d-vs-3d", number: "01", title: "Бунт проти полігонів" },
        { id: "mechanics", number: "02", title: "RPG-елементи та дослідження" },
        { id: "music", number: "03", title: "Музика Мічіру Ямане" },
      ],
      en: [
        { id: "2d-vs-3d", number: "01", title: "Rebellion Against 3D Polygons" },
        { id: "mechanics", number: "02", title: "RPG Elements & Exploration" },
        { id: "music", number: "03", title: "The Score of Michiru Yamane" },
      ],
    },
    factBox: {
      ru: {
        title: "Факты о Castlevania: SOTN",
        items: [
          { label: "Год выхода", value: "1997", icon: "📅" },
          { label: "Платформа", value: "PlayStation / Sega Saturn", icon: "🎮" },
          { label: "Режиссер", value: "Тору Хагихара, Кодзи Игараси", icon: "👤" },
          { label: "Композитор", value: "Мичиру Яманэ", icon: "🎵" },
          { label: "Секрет", value: "Перевернутый замок Дракулы (удвоение игры)", icon: "⭐" },
        ],
      },
      uk: {
        title: "Факти про Castlevania: SOTN",
        items: [
          { label: "Рік виходу", value: "1997", icon: "📅" },
          { label: "Платформа", value: "PlayStation / Sega Saturn", icon: "🎮" },
          { label: "Режисер", value: "Кодзі Іґарасі", icon: "👤" },
          { label: "Композитор", value: "Мічіру Ямане", icon: "🎵" },
          { label: "Секрет", value: "Перевернутий замок Дракули", icon: "⭐" },
        ],
      },
      en: {
        title: "Castlevania: SOTN Facts",
        items: [
          { label: "Release Year", value: "1997", icon: "📅" },
          { label: "Platforms", value: "PlayStation, Sega Saturn", icon: "🎮" },
          { label: "Director", value: "Koji Igarashi, Toru Hagihara", icon: "👤" },
          { label: "Composer", value: "Michiru Yamane", icon: "🎵" },
          { label: "Legendary Secret", value: "The Inverted Castle (Doubled Game Length)", icon: "⭐" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "2d-vs-3d",
          title: "Бунт против полигонов",
          paragraphs: [
            "В 1997 году игровая индустрия переживала настоящую лихорадку трехмерной графики. После оглушительного успеха Super Mario 64 и первых хитов для PlayStation боссы игровых издательств считали двухмерные платформеры безнадежно устаревшим рудиментом 16-битной эпохи. Команде разработчиков Konami во главе с Тору Хагихарой и Кодзи Игараси пришлось преодолевать колоссальное внутреннее сопротивление, чтобы отстоять классический 2D-формат.",
            "Вместо погони за угловатыми и нестабильными ранними полигонами авторы сосредоточились на предельном качестве анимации и масштабе. Использовав вычислительную мощь 32-битной архитектуры и колоссальную емкость CD-ROM, команда создала один из самых детализированных визуальных стилей в истории. Плавные шлейфы при беге Алукарда, развевающийся плащ из десятков кадров ручной рисовки и полупрозрачные световые эффекты заклинаний выглядели как ожившая готическая картина.",
          ],
          figure: {
            imageUrl: "/images/articles/castlevania-alucard.jpg",
            caption: "Алукард у врат готического замка графа Дракулы — икона 2D-эстетики поколения 32-бит.",
          },
        },
        {
          id: "mechanics",
          title: "RPG-элементы и исследование",
          paragraphs: [
            "Источником вдохновения для новой формулы Castlevania послужили вовсе не предыдущие линейные части о семействе охотников за вампирами Бельмонтов, а серия The Legend of Zelda. Игараси стремился победить фундаментальную проблему платформеров тех лет: когда игра либо проходится за один вечер, либо забрасывается из-за завышенной аркадной сложности. В Symphony of the Night появились глубокие RPG-механики: уровни прокачки, сотни видов оружия и брони, щиты, магия и реликвии, открывающие новые способности перемещения.",
            "Однако главным триумфом геймдизайна стал сам замок Дракулы — не череда независимых этапов, а грандиозный бесшовный лабиринт с взаимосвязанными часовыми башнями, катакомбами и библиотеками. А когда игрок побеждал Рихтера и думал, что игра завершена, открывался Перевернутый замок: зеркальная копия всего сооружения, перевернутая вверх дном, с новыми секретами, сложнейшими боссами и истинной развязкой.",
          ],
          quote: {
            text: "«Мы стремились сделать игру, которая поощряет любопытство, а не наказывает за малейшую ошибку. Игрок должен был физически ощущать, как растет его сила».",
            author: "— Кодзи Игараси, сценарист и сорежиссер SOTN",
          },
        },
        {
          id: "music",
          title: "Музыка Мичиру Яманэ",
          paragraphs: [
            "Невозможно представить культурный феномен Symphony of the Night без шедеврального саундтрека композитора Мичиру Яманэ. Переход с картриджей на компакт-диски развязал руки музыкантам Konami: вместо синтезаторных чиптюн-тем на игроков обрушилась мощь живых инструментов, записанных в высоком разрешении Red Book Audio.",
            "От готического органного вступления и барочного великолепия «Dance of Pales» до яростного хэви-метала «Festival of Servants» и щемящей меланхолии «Lost Painting» — музыка Яманэ превратила исследование замка в неповторимый аудиовизуальный ритуал, признанный шедевром мировой игровой классики.",
          ],
        },
      ],
      uk: [
        {
          id: "2d-vs-3d",
          title: "Бунт проти полігонів",
          paragraphs: [
            "У 1997 році індустрія масово переходила у тривимірність. Коли видавці вимагали відмовлятися від спрайтів, Кодзі Іґарасі та Тору Хаґіхара пішли проти течії, створивши неперевершений 2D-шедевр із небаченою раніше деталізацією анімації.",
            "Обчислювальна потужність PlayStation дозволила реалізувати плавні шлейфи рухів Алукарда, динамічні тіні та розкішні готичні задники, які перевершили будь-які спроби раннього 3D.",
          ],
          figure: {
            imageUrl: "/images/articles/castlevania-alucard.jpg",
            caption: "Алукард у замку Дракули — вершина двовимірної естетики епохи 32 біт.",
          },
        },
        {
          id: "mechanics",
          title: "RPG-елементи та дослідження",
          paragraphs: [
            "Надихаючись концепцією The Legend of Zelda, автори надали гравцям свободу дослідження величного монолітного замку. Система спорядження, прокачування та магічні реліквії назавжди змінили формулу серії.",
            "Легендарний сюрприз із Перевернутим замком, який подвоював тривалість проходження та відкривав справжню кінцівку, став еталоном сміливого авторського геймдизайну.",
          ],
          quote: {
            text: "«Ми хотіли дати гравцеві відчуття постійного відкриття та зростання власної могутності».",
            author: "— Кодзі Іґарасі",
          },
        },
        {
          id: "music",
          title: "Музика Мічіру Ямане",
          paragraphs: [
            "Саундтрек Мічіру Ямане став візитівкою Symphony of the Night. Використання формату CD-Audio дало змогу поєднати готичний орган, класичні оркестрові струнні та драйвові гітарні рифи важкого року.",
            "Композиції на кшталт «Dance of Pales» та «Lost Painting» досі вважаються вершиною музичного супроводу в історії відеоігор.",
          ],
        },
      ],
      en: [
        {
          id: "2d-vs-3d",
          title: "Rebellion Against 3D Polygons",
          paragraphs: [
            "In 1997, the gaming industry was gripped by polygon fever. Following Super Mario 64, major executives considered 2D side-scrollers an obsolete relic of the 16-bit era. Toru Hagihara and Koji Igarashi faced massive skepticism inside Konami to keep Symphony of the Night in lush, hand-drawn two dimensions.",
            "Rather than chasing primitive blocky 3D models, the team harnessed PlayStation's memory and CD storage to build fluid sprite animations. Alucard's trailing silk cape, spectral after-images, and layered multi-plane parallax backgrounds transformed the game into an interactive gothic tapestry.",
          ],
          figure: {
            imageUrl: "/images/articles/castlevania-alucard.jpg",
            caption: "Alucard inside Dracula's fortress — the pinnacle of 32-bit 2D artistry.",
          },
        },
        {
          id: "mechanics",
          title: "RPG Elements & Exploration",
          paragraphs: [
            "Drawing heavy inspiration from The Legend of Zelda rather than traditional linear platformers, Igarashi aimed to eliminate punishing artificial game-overs. SOTN introduced comprehensive action-RPG mechanics: leveling stats, shields, swords, spells, and relics that unlocked dynamic movement capabilities like mist and bat transformations.",
            "The greatest masterstroke was Dracula's Castle itself. Rather than isolated stages, it functioned as an interconnected labyrinth. Defeating Richter Belmont with the Holy Glasses unveiled the game's greatest secret: the entire castle flipped upside-down, doubling the quest with brutal enemies and true closure.",
          ],
          quote: {
            text: "'We wanted a game that rewarded curiosity instead of penalizing mistakes. Players needed to feel their power steadily grow.'",
            author: "— Koji Igarashi, Co-Director and Writer",
          },
        },
        {
          id: "music",
          title: "The Score of Michiru Yamane",
          paragraphs: [
            "Michiru Yamane's soundtrack elevated Symphony of the Night to legendary status. Freed from chiptune limitations by Red Book CD-Audio, Yamane effortlessly fused baroque harpsichords, cathedral pipe organs, gothic opera, and fiery progressive rock solos.",
            "Tracks like 'Dance of Pales', 'Wood Carving Partita', and 'Lost Painting' created an evocative atmosphere that defined dark fantasy gaming audio for generations.",
          ],
        },
      ],
    },
  },

  // 4. SEGA SATURN
  {
    slugs: {
      ru: "sega-saturn-30-let-arhitektura-i-sudba",
      uk: "sega-saturn-30-rokiv-arhitektura",
      en: "sega-saturn-30-years-architecture-and-fate",
    },
    heroImageUrl: "/images/hardware/sega-saturn.jpg",
    kicker: {
      ru: "ИСТОРИЯ ЖЕЛЕЗА",
      uk: "ІСТОРІЯ ЗАЛІЗА",
      en: "HARDWARE HISTORY",
    },
    title: {
      ru: "Sega Saturn: 30 лет сложной архитектуре и недооцененным шедеврам",
      uk: "Sega Saturn: 30 років складній архітектурі та недооціненим шедеврам",
      en: "Sega Saturn at 30: Architecture, Ambition, and Overlooked Gems",
    },
    dek: {
      ru: "Два чипа Hitachi SH-2, квады вместо треугольников и богатейшая японская библиотека хардкорных игр.",
      uk: "Два процесори Hitachi SH-2, квади замість трикутників та унікальні ігрові шедеври японського ринку.",
      en: "Dual SH-2 processors, quadrilateral rendering, and a treasure trove of Japanese arcade masterpieces.",
    },
    readingTimeMinutes: 3,
    publishedAt: {
      ru: "10 августа 2024",
      uk: "10 серпня 2024",
      en: "August 10, 2024",
    },
    author: {
      name: {
        ru: "Алексей Морозов",
        uk: "Олексій Морозов",
        en: "Alexey Morozov",
      },
      role: {
        ru: "Редактор железа",
        uk: "Редактор заліза",
        en: "Hardware Editor",
      },
    },
    toc: {
      ru: [
        { id: "two-cpus", number: "01", title: "Два процессора SH-2: кошмар разработчиков" },
        { id: "quads", number: "02", title: "Квады вместо треугольников" },
        { id: "arcade-glory", number: "03", title: "Золотой век 2D и аркадных портов" },
      ],
      uk: [
        { id: "two-cpus", number: "01", title: "Два процесори SH-2: виклик для кодерів" },
        { id: "quads", number: "02", title: "Квади замість полігональних трикутників" },
        { id: "arcade-glory", number: "03", title: "Золотий вік 2D та аркадних портів" },
      ],
      en: [
        { id: "two-cpus", number: "01", title: "Dual SH-2 Processors: The Coder's Dilemma" },
        { id: "quads", number: "02", title: "Quadrilaterals vs. Polygons" },
        { id: "arcade-glory", number: "03", title: "The 2D Arcade Goldmine" },
      ],
    },
    factBox: {
      ru: {
        title: "Характеристики Sega Saturn",
        items: [
          { label: "Год запуска", value: "1994 (Япония) / 1995 (США)", icon: "📅" },
          { label: "Главные CPU", value: "2x Hitachi SH-2 @ 28.6 MHz", icon: "⚙️" },
          { label: "Видеочипы", value: "VDP1 (геометрия) + VDP2 (фоны)", icon: "🖥️" },
          { label: "Культовые игры", value: "Panzer Dragoon Saga, Virtua Fighter 2, Nights", icon: "⭐" },
        ],
      },
      uk: {
        title: "Специфікації Sega Saturn",
        items: [
          { label: "Рік запуску", value: "1994 (Японія) / 1995 (США)", icon: "📅" },
          { label: "Головні CPU", value: "2x Hitachi SH-2 @ 28.6 MHz", icon: "⚙️" },
          { label: "Відеочипи", value: "VDP1 + VDP2", icon: "🖥️" },
          { label: "Культові ігри", value: "Panzer Dragoon Saga, Nights into Dreams", icon: "⭐" },
        ],
      },
      en: {
        title: "Sega Saturn Specifications",
        items: [
          { label: "Launch Year", value: "1994 (Japan) / 1995 (West)", icon: "📅" },
          { label: "CPUs", value: "Dual Hitachi SH-2 RISC @ 28.6 MHz", icon: "⚙️" },
          { label: "Video", value: "VDP1 (sprites/3D) + VDP2 (backgrounds)", icon: "🖥️" },
          { label: "Iconic Titles", value: "Panzer Dragoon Saga, Virtua Fighter 2, Radiant Silvergun", icon: "⭐" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "two-cpus",
          title: "Два процессора SH-2: кошмар разработчиков",
          paragraphs: [
            "В начале 1990-х Sega безраздельно доминировала в аркадных залах благодаря мощной полигональной плате Model 1 (Virtua Racing, Virtua Fighter), но для домашнего рынка инженеры изначально проектировали идеальную 2D-машину. Когда до руководства дошли разведданные о колоссальной трехмерной мощи готовящейся Sony PlayStation, японские инженеры в спешном порядке приняли отчаянное решение: врезать в материнскую плату второй 32-битный RISC-процессор Hitachi SH-2.",
            "Архитектура без общей разделяемой памяти и без зрелых параллельных компиляторов превратилась в сущий кошмар для западных студий. Чтобы заставить оба процессора работать синхронно, разработчикам приходилось писать низкоуровневый ассемблерный код. В противном случае процессоры постоянно блокировали общую шину, и один из них просто простаивал. В результате большинство ранних мультиплатформенных игр использовали лишь один SH-2, катастрофически уступая PlayStation в стабильности фреймрейта.",
          ],
          quote: {
            text: "«Программировать под Saturn было все равно что собирать швейцарские часы в боксерских перчатках. Но если программист понимал ее логику, консоль творила неописуемые чудеса».",
            author: "— Ю Судзуки, глава Sega AM2",
          },
        },
        {
          id: "quads",
          title: "Квады вместо треугольников",
          paragraphs: [
            "В то время как Sony и Silicon Graphics выбрали треугольник фундаментальным графическим примитивом, видеопроцессор Saturn VDP1 оперировал четырехугольниками — деформированными спрайтами с четырьмя вершинами. Для отображения традиционного полигона приходилось вырождать одну из вершин четырехугольника в ноль.",
            "Это решение обеспечивало идеальную работу со сверхчеткими 2D-спрайтами, но создавало серьезные сложности при текстурировании 3D-сеток. Зато вспомогательный видеочип VDP2 творил настоящие чудеса: он аппаратно обрабатывал до пяти прокручиваемых слоев фона с бесконечным скейлингом и вращением, разгружая центральные процессоры и даря играм невероятно глубокие панорамные фоны.",
          ],
          figure: {
            imageUrl: "/images/hardware/sega-saturn.jpg",
            caption: "Sega Saturn — инженерная головоломка, опередившая массовое появление многоядерных систем.",
          },
        },
        {
          id: "arcade-glory",
          title: "Золотой век 2D и аркадных портов",
          paragraphs: [
            "Несмотря на коммерческое поражение на рынках США и Европы, в Японии Saturn стала культовым пристанищем хардкорных геймеров. Благодаря картриджам расширения оперативной памяти на 1 МБ и 4 МБ консоль стала единственной домашней платформой поколения, способной переносить аркадные хиты Capcom и SNK (X-Men vs. Street Fighter, Vampire Savior) в стопроцентном качестве «pixel-perfect» без малейшего урезания кадров анимации.",
            "А эксклюзивы высшей пробы — от головокружительного полета в Nights into Dreams и хардкорного шмапа Radiant Silvergun до грандиозной четырехдисковой ролевой саги Panzer Dragoon Saga — доказали, что на пике мастерства архитектура Saturn рождала нестареющие произведения цифрового искусства.",
          ],
        },
      ],
      uk: [
        {
          id: "two-cpus",
          title: "Два процесори SH-2: виклик для кодерів",
          paragraphs: [
            "Коли Sega усвідомила загрозу з боку Sony PlayStation, інженери екстрено додали в архітектуру Saturn другий процесор Hitachi SH-2. У 1994 році індустрія ще не володіла інструментами багатопотокового програмування, що перетворило розробку на справжній лабіринт.",
            "Розробникам доводилося вручну керувати шиною даних на рівні асемблера. Ті студії, які змогли приборкати тандем SH-2, створювали візуальні дива, недосяжні для конкурентів.",
          ],
          quote: {
            text: "«Це була складна система, але у вмілих руках вона демонструвала приголомшливу міць».",
            author: "— Ю Судзукі, автор Virtua Fighter",
          },
        },
        {
          id: "quads",
          title: "Квади замість полігональних трикутників",
          paragraphs: [
            "Графічний чип VDP1 працював з чотирикутними спрайтами, що забезпечувало найвищу щільність і чіткість 2D-графіки свого часу. А чип VDP2 апаратно обробляв складні шари фону з нескінченним масштабуванням.",
          ],
          figure: {
            imageUrl: "/images/hardware/sega-saturn.jpg",
            caption: "Sega Saturn — складна багатопроцесорна консоль п'ятого покоління.",
          },
        },
        {
          id: "arcade-glory",
          title: "Золотий вік 2D та аркадних портів",
          paragraphs: [
            "Завдяки фірмовим картриджам розширення пам'яті до 4 МБ, Saturn став королем 2D-файтингів і аркадних шутерів від Capcom та Treasure.",
            "Легендарні ігри на зразок Nights into Dreams, Radiant Silvergun та Panzer Dragoon Saga закарбували ім'я консолі в історії відеоігор.",
          ],
        },
      ],
      en: [
        {
          id: "two-cpus",
          title: "Dual SH-2 Processors: The Coder's Dilemma",
          paragraphs: [
            "In late 1993, stunned by secret briefings on Sony PlayStation's immense 3D floating-point power, Sega rushed to modify Saturn by adding a secondary Hitachi SH-2 RISC CPU. Multi-core programming without modern OS abstractions or cache coherence was uncharted territory.",
            "Western third-party studios struggled mightily. If both CPUs contended for the shared bus simultaneously, the system stalled. Many developers simply left the second SH-2 idle, resulting in compromised multiplatform ports that lagged behind Sony's console.",
          ],
          quote: {
            text: "'Developing on Saturn was like trying to assemble a luxury watch while wearing boxing gloves. Yet once mastered, it sang.'",
            author: "— Yu Suzuki, Head of Sega AM2",
          },
        },
        {
          id: "quads",
          title: "Quadrilaterals vs. Polygons",
          paragraphs: [
            "While PlayStation standardized on triangle primitives, Saturn's VDP1 rasterizer mapped quadrilateral sprites with four vertices. Creating 3D geometry meant degenerating quads, causing texture distortion if vertices became non-planar.",
            "However, the companion VDP2 background processor was pure wizardry. It natively rendered multiple rotating, scaling planes with infinite draw distances without taxing the main CPUs, creating the breathtaking rolling skies of Panzer Dragoon.",
          ],
          figure: {
            imageUrl: "/images/hardware/sega-saturn.jpg",
            caption: "Sega Saturn — an intricate multi-chip engineering puzzle that predated multi-core computing.",
          },
        },
        {
          id: "arcade-glory",
          title: "The 2D Arcade Goldmine",
          paragraphs: [
            "Though it faltered commercially in the West, Saturn became a revered arcade sanctuary in Japan. Utilizing official 1MB and 4MB RAM expansion cartridges, it was the only console capable of running arcade-perfect ports of Capcom and SNK fighting games with zero frame cuts.",
            "Timeless classics like Nights into Dreams, Treasure's Radiant Silvergun, and the legendary 4-disc RPG masterpiece Panzer Dragoon Saga cemented Saturn's legacy as an artist's console.",
          ],
        },
      ],
    },
  },

  // 5. DOOM 1993
  {
    slugs: {
      ru: "doom-1993-kak-id-software-vzorvala-mir",
      uk: "doom-1993-yak-id-software-pidirvala-svit",
      en: "doom-1993-how-id-software-changed-everything",
    },
    heroImageUrl: "/images/games/doom-classic.jpg",
    kicker: {
      ru: "ТЕХНОЛОГИИ",
      uk: "ТЕХНОЛОГІЇ",
      en: "TECHNOLOGY",
    },
    title: {
      ru: "DOOM (1993): Как четверо парней в Техасе изменили видеоигры навсегда",
      uk: "DOOM (1993): Як четверо хлопців у Техасі змінили відеоігри назавжди",
      en: "DOOM (1993): How Four Rebels in Texas Changed Video Games Forever",
    },
    dek: {
      ru: "Джон Кармак, Джон Ромеро и технологический прорыв id Software, определивший вектор индустрии на десятилетия.",
      uk: "Джон Кармак, Джон Ромеро та революція id Software, яка сформувала сучасний екшен від першої особи.",
      en: "John Carmack, John Romero, and id Software's seismic technological leap that reshaped PC gaming.",
    },
    readingTimeMinutes: 3,
    publishedAt: {
      ru: "11 августа 2024",
      uk: "11 серпня 2024",
      en: "August 11, 2024",
    },
    author: {
      name: {
        ru: "Алексей Морозов",
        uk: "Олексій Морозов",
        en: "Alexey Morozov",
      },
      role: {
        ru: "Главный редактор",
        uk: "Головний редактор",
        en: "Editor in Chief",
      },
    },
    toc: {
      ru: [
        { id: "bsp", number: "01", title: "Революция BSP-деревьев Кармака" },
        { id: "level-design", number: "02", title: "Драйв и дизайн Ромеро" },
        { id: "deathmatch", number: "03", title: "Рождение Deathmatch и сетевых баталий" },
      ],
      uk: [
        { id: "bsp", number: "01", title: "Революція BSP-дерев Кармака" },
        { id: "level-design", number: "02", title: "Драйв та левелдизайн Ромеро" },
        { id: "deathmatch", number: "03", title: "Народження Deathmatch" },
      ],
      en: [
        { id: "bsp", number: "01", title: "Carmack's Binary Space Partitioning" },
        { id: "level-design", number: "02", title: "Romero's Visceral Level Flow" },
        { id: "deathmatch", number: "03", title: "The Genesis of Deathmatch" },
      ],
    },
    factBox: {
      ru: {
        title: "Факты о DOOM (1993)",
        items: [
          { label: "Релиз", value: "10 декабря 1993", icon: "📅" },
          { label: "Платформа", value: "MS-DOS", icon: "💻" },
          { label: "Ключевые авторы", value: "Джон Кармак, Джон Ромеро, Адриан Кармак", icon: "👤" },
          { label: "Модель продаж", value: "Shareware (1-й эпизод бесплатно)", icon: "🌐" },
        ],
      },
      uk: {
        title: "Факти про DOOM (1993)",
        items: [
          { label: "Реліз", value: "10 грудня 1993", icon: "📅" },
          { label: "Платформа", value: "MS-DOS", icon: "💻" },
          { label: "Автори", value: "Джон Кармак, Джон Ромеро", icon: "👤" },
          { label: "Модель розповсюдження", value: "Shareware", icon: "🌐" },
        ],
      },
      en: {
        title: "DOOM (1993) Facts",
        items: [
          { label: "Release Date", value: "December 10, 1993", icon: "📅" },
          { label: "Primary Platform", value: "MS-DOS", icon: "💻" },
          { label: "Key Creators", value: "John Carmack, John Romero, Adrian Carmack", icon: "👤" },
          { label: "Distribution", value: "Shareware Episode 1", icon: "🌐" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "bsp",
          title: "Революция BSP-деревьев Кармака",
          paragraphs: [
            "В 1993 году индустрия трехмерной графики на персональных компьютерах находилась в зачаточном состоянии. Чтобы заставить процессоры Intel 486 выводить плавную псевдотрехмерную картинку с частотой 35 кадров в секунду, гениальный программист Джон Кармак применил метод двоичного разбиения пространства (Binary Space Partitioning, BSP).",
            "В отличие от Wolfenstein 3D с его плоскими квадратными комнатами под прямым углом 90 градусов, движок DOOM позволил создавать стены под любыми углами, разноуровневые полы и потолки, лестницы, открытые дворы и динамическое секторное освещение. Текстуры пола и потолка рассчитывались «на лету» без каких-либо 3D-видеокарт.",
          ],
          quote: {
            text: "«В физике нет нерешаемых проблем, есть лишь недостаток вычислительной элегантности. DOOM доказал, что математика способна творить чудеса на обычном офисном 'писишнике'».",
            author: "— Джон Кармак, ведущий программист id Software",
          },
        },
        {
          id: "level-design",
          title: "Драйв и дизайн Ромеро",
          paragraphs: [
            "Если Кармак создал совершенный технологический фундамент, то Джон Ромеро вдохнул в него бешеное сердце рок-н-ролла. Первый эпизод «Knee-Deep in the Dead», открывающийся легендарным уровнем E1M1: Hangar, задал эталон темпа, где поиск цветных ключей-карт органично чередовался с адреналиновыми перестрелками.",
            "Секретные ниши за фальшивыми стенами, внезапные ловушки с гаснущим светом, кислотные бассейны и культовый саундтрек Бобби Принса, вдохновленный тяжелыми риффами Slayer, Metallica и Pantera, создавали густую атмосферу первобытного научно-фантастического хоррора.",
          ],
          figure: {
            imageUrl: "/images/articles/doom-e1m1.jpg",
            caption: "Кислотный резервуар и стальные коридоры марсианской базы на уровне E1M1: Hangar в оригинальном DOOM (1993).",
          },
        },
        {
          id: "deathmatch",
          title: "Рождение Deathmatch и сетевых баталий",
          paragraphs: [
            "Именно Джон Ромеро ввел в обиход термин «Deathmatch». Когда в офисе id Software в Техасе впервые заработал многопользовательский режим по локальной сети IPX, разработка игры фактически остановилась на две недели: четверо создателей яростно отстреливали друг друга из дробовиков и ракетниц.",
            "После релиза 10 декабря 1993 года через бесплатный первый эпизод (Shareware) DOOM парализовал компьютерные сети университетов, корпораций и даже правительственных агентств США. DOOM стал не просто игрой — он породил современный киберспорт, культуру моддинга через файлы WAD и навсегда изменил мировую популярность PC.",
          ],
        },
      ],
      uk: [
        {
          id: "bsp",
          title: "Революція BSP-дерев Кармака",
          paragraphs: [
            "У 1993 році Джон Кармак перетворив звичайний ПК на найпотужнішу ігрову платформу завдяки математичному алгоритму BSP (Binary Space Partitioning).",
            "На зміну пласким коридорам Wolfenstein 3D прийшли стіни під довільними кутами, сходи, відкрите небо та динамічне освітлення, що обчислювалося на процесорах Intel 486 зі стабільними 35 кадрами на секунду.",
          ],
          quote: {
            text: "«DOOM довів, що елегантний програмний код перемагає будь-які апаратні обмеження».",
            author: "— Джон Кармак",
          },
        },
        {
          id: "level-design",
          title: "Драйв та левелдизайн Ромеро",
          paragraphs: [
            "Джон Ромеро перетворив чисті технології на рок-н-рольний драйв. Рівень E1M1: Hangar став бездоганним початком подорожі: потаємні кімнати, кислотні пастки та саундтрек Боббі Прінса, натхненний важким металом, занурювали у кривавий бій на супутнику Марса.",
          ],
          figure: {
            imageUrl: "/images/articles/doom-e1m1.jpg",
            caption: "Кислотний басейн та коридори марсіанської бази в легендарному першому рівні DOOM (1993).",
          },
        },
        {
          id: "deathmatch",
          title: "Народження Deathmatch",
          paragraphs: [
            "Джон Ромеро вигадав слово «Deathmatch», а сам DOOM паралізував локальні мережі університетів та офісів по всій планеті. Можливість створювати власні WAD-модифікації та мережеві баталії назавжди змінили культуру відеоігор.",
          ],
        },
      ],
      en: [
        {
          id: "bsp",
          title: "Carmack's Binary Space Partitioning",
          paragraphs: [
            "In 1993, 3D computer graphics on home hardware were notoriously slow and untextured. To force standard Intel 486 computers to render fluid 3D worlds at a rock-solid 35 frames per second, programming visionary John Carmack weaponized Binary Space Partitioning (BSP) trees.",
            "Unlike the rigid orthogonal maze of Wolfenstein 3D, Carmack's engine allowed walls angled in any direction, dynamic sector lighting, height-differentiated platforms, stairs, and skyboxes. Pixel rendering was calculated purely on the CPU, years before dedicated 3D accelerator cards existed.",
          ],
          quote: {
            text: "'In physics, there are no unsolvable bottlenecks, only shortcomings in mathematical elegance. DOOM demonstrated what raw software ingenuity could extract from consumer PC silicon.'",
            author: "— John Carmack, Lead Programmer",
          },
        },
        {
          id: "level-design",
          title: "Romero's Visceral Level Flow",
          paragraphs: [
            "While Carmack provided the technological foundation, John Romero infused it with raw rock-and-roll swagger. The shareware episode 'Knee-Deep in the Dead', spearheaded by E1M1: Hangar, created an immortal blueprint for pacing, mixing keycard exploration with furious shotgun ambushes.",
            "Darkened rooms triggering monster closets, noxious radioactive waste pools, and Bobby Prince's pulse-pounding MIDI riffs — heavily influenced by Pantera and Metallica — forged an incomparable mood of industrial sci-fi horror.",
          ],
          figure: {
            imageUrl: "/images/articles/doom-e1m1.jpg",
            caption: "The iconic radioactive acid pit and industrial corridors of E1M1: Hangar in the original DOOM (1993).",
          },
        },
        {
          id: "deathmatch",
          title: "The Genesis of Deathmatch",
          paragraphs: [
            "It was John Romero who coined the term 'Deathmatch'. When local-area network code first went live over IPX inside id Software's Mesquite office, development halted for weeks as the four partners engaged in relentless multiplayer bloodbaths.",
            "Released on December 10, 1993 as a shareware download, DOOM clogged university networks and corporate servers worldwide. It birthed modern esports, popularized online modding via WAD archives, and permanently crowned the PC as the preeminent gaming platform.",
          ],
        },
      ],
    },
  },

  // 6. SUPER FX
  {
    slugs: {
      ru: "super-fx-kak-nintendo-voshla-v-3d",
      uk: "super-fx-yak-nintendo-uviyshla-v-3d",
      en: "super-fx-how-nintendo-entered-3d",
    },
    heroImageUrl: "/images/hardware/snes-console.jpg",
    kicker: {
      ru: "ТЕХНОЛОГИИ",
      uk: "ТЕХНОЛОГІЇ",
      en: "INNOVATION",
    },
    title: {
      ru: "Super FX: Как Nintendo подарила 16-битной SNES настоящее 3D",
      uk: "Super FX: Як Nintendo подарувала 16-бітній SNES справжнє 3D",
      en: "Super FX: How Nintendo Brought True 3D to 16-Bit SNES",
    },
    dek: {
      ru: "История британских инженеров из Argonaut Games, создавших первый в мире массовый 3D-сопроцессор для картриджа.",
      uk: "Історія британських інженерів з Argonaut Games, які створили перший масовий 3D-співпроцесор для картриджа.",
      en: "How British pioneers Argonaut Games engineered the world's first mass-market 3D math coprocessor on a cartridge.",
    },
    readingTimeMinutes: 3,
    publishedAt: {
      ru: "13 августа 2024",
      uk: "13 серпня 2024",
      en: "August 13, 2024",
    },
    author: {
      name: {
        ru: "Алексей Морозов",
        uk: "Олексій Морозов",
        en: "Alexey Morozov",
      },
      role: {
        ru: "Редактор",
        uk: "Редактор",
        en: "Editor",
      },
    },
    toc: {
      ru: [
        { id: "argonaut", number: "01", title: "Британский десант: Argonaut и Nintendo" },
        { id: "starfox", number: "02", title: "Рождение Star Fox и чип MARIO" },
        { id: "legacy", number: "03", title: "Эволюция Super FX 2 и наследие" },
      ],
      uk: [
        { id: "argonaut", number: "01", title: "Британський десант: Argonaut та Nintendo" },
        { id: "starfox", number: "02", title: "Народження Star Fox та чип MARIO" },
        { id: "legacy", number: "03", title: "Еволюція Super FX 2 та спадщина" },
      ],
      en: [
        { id: "argonaut", number: "01", title: "British Vanguard: Argonaut & Nintendo" },
        { id: "starfox", number: "02", title: "Genesis of Star Fox & The MARIO Chip" },
        { id: "legacy", number: "03", title: "Super FX 2 Evolution & Legacy" },
      ],
    },
    factBox: {
      ru: {
        title: "Чип Super FX",
        items: [
          { label: "Частота", value: "21.4 МГц (RISC сопроцессор)", icon: "⚙️" },
          { label: "Флагман", value: "Star Fox (1993)", icon: "🦊" },
          { label: "Создатель чипа", value: "Argonaut Software (Джез Сан)", icon: "👤" },
          { label: "Производительность", value: "До сотен цветных полигонов в кадре", icon: "📐" },
        ],
      },
      uk: {
        title: "Чип Super FX",
        items: [
          { label: "Частота", value: "21.4 МГц (RISC співпроцесор)", icon: "⚙️" },
          { label: "Флагман", value: "Star Fox (1993)", icon: "🦊" },
          { label: "Творець чипа", value: "Argonaut Software (Джез Сан)", icon: "👤" },
          { label: "Продуктивність", value: "Сотні 3D-полігонів на кадр", icon: "📐" },
        ],
      },
      en: {
        title: "Super FX Chip Facts",
        items: [
          { label: "Clock Speed", value: "21.4 MHz Custom RISC", icon: "⚙️" },
          { label: "Flagship Title", value: "Star Fox (1993)", icon: "🦊" },
          { label: "Chip Architect", value: "Argonaut Software (Jez San)", icon: "👤" },
          { label: "Throughput", value: "Hundreds of flat-shaded polygons/frame", icon: "📐" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "argonaut",
          title: "Британский десант: Argonaut и Nintendo",
          paragraphs: [
            "В 1990 году юный программист Джез Сан и его лондонская команда Argonaut Software сумели взломать защиту Game Boy и запустить на маленьком монохромном экране настоящее трехмерное вращение куба. Когда они продемонстрировали этот прототип руководству Nintendo на выставке в Лас-Вегасе, президент Хироси Ямаути и Сигэру Миямото не поверили своим глазам.",
            "Nintendo мгновенно заключила контракт и профинансировала создание выделенного чипа математического ускорения. Проект получил кодовое название MARIO (Mathematical, Argonaut, Rotation & I/O), а затем был переименован в Super FX.",
            "Пока японские специалисты проектировали игровую архитектуру, британские хакеры писали RISC-процессор, работавший на частоте 21.4 МГц — почти в семь раз быстрее центрального процессора самой консоли SNES (3.58 МГц). Чип помещался прямо внутрь картриджа, вычисляя полигоны и записывая готовые видеобуферы в память приставки.",
          ],
          quote: {
            text: "«Мы сказали Nintendo: ваша консоль прекрасна для двухмерных спрайтов, но будущее за полигонами. И мы можем встроить 3D-компьютер прямо в картридж».",
            author: "— Джез Сан, основатель Argonaut Software",
          },
        },
        {
          id: "starfox",
          title: "Рождение Star Fox и чип MARIO",
          paragraphs: [
            "Вышедший в феврале 1993 года Star Fox стал настоящим культурным шоком для владельцев 16-битных систем. Игроки управляли истребителем Arwing, прорываясь сквозь эскадрильи полигональных кораблей планеты Корнерия под эпический кинематографичный саундтрек.",
            "Сигэру Миямото лично настоял на превращении безликих звездолетов в антропоморфных пилотов-животных, вдохновляясь святилищем Фусими Инари возле штаб-квартиры Nintendo. Лисица Фокс, ястреб Фэлко, лягушка Слиппи и заяц Пеппи навсегда вписали свои имена в историю Nintendo, доказав, что 3D-экшен возможен за годы до выхода Nintendo 64 и PlayStation.",
          ],
          figure: {
            imageUrl: "/images/articles/star-fox-arwing.jpg",
            caption: "Кабина истребителя Arwing и полигональный бой на орбите планеты Корнерия в оригинальном Star Fox (1993).",
          },
        },
        {
          id: "legacy",
          title: "Эволюция Super FX 2 и наследие",
          paragraphs: [
            "Успех Star Fox породил модернизированный чип Super FX 2 (GSU-2), работавший на двойной тактовой частоте и поддерживавший адресацию большего объема ROM. Именно этот чип позволил создать шедевральную графику Yoshi's Island (Super Mario World 2) с динамическим масштабированием и вращением гигантских спрайтов, имитирующих рисунок пастелью.",
            "Super FX также использовался для героического порта DOOM на Super Nintendo, заставившего 16-битную консоль исполнять движок Кармака без ПК. Архитектура Super FX заложила фундамент современной 3D-графики и навсегда изменила представления об аппаратных возможностях домашних платформ.",
          ],
        },
      ],
      uk: [
        {
          id: "argonaut",
          title: "Британський десант: Argonaut та Nintendo",
          paragraphs: [
            "На початку 1990-х Джез Сан та його молода команда Argonaut Software вразили японських інженерів, показавши реалістичне 3D на портативній Game Boy. Сіґеру Міямото негайно переконав керівництво Nintendo інвестувати у розробку спеціалізованого апаратного співпроцесора.",
            "Британці спроєктували швидкісний RISC-чип MARIO на частоті 21.4 МГц, здатний обраховувати полігональну геометрію прямо всередині картриджа, залишаючи центральному процесору SNES лише виведення кадру.",
          ],
          quote: {
            text: "«Ми довели, що 16-бітна приставка здатна генерувати справжні тривимірні світи без купівлі дорогого комп'ютера».",
            author: "— Джез Сан",
          },
        },
        {
          id: "starfox",
          title: "Народження Star Fox та чип MARIO",
          paragraphs: [
            "Star Fox (1993) став технологічною революцією. Керування зорельотом Arwing, динамічні бої над Корнерією та живі діалоги команди Фокса МакКлауда вивели домашній геймінг на якісно новий рівень задовго до епохи 32 біт.",
          ],
          figure: {
            imageUrl: "/images/articles/star-fox-arwing.jpg",
            caption: "Космічний полігональний бій винищувача Arwing на орбіті Корнерії.",
          },
        },
        {
          id: "legacy",
          title: "Еволюція Super FX 2 та спадщина",
          paragraphs: [
            "Удосконалений Super FX 2 подарував гравцям Yoshi's Island з його пластичною ручною анімацією та неймовірний консольний порт DOOM, закріпивши статус одного з найважливіших чипів в історії індустрії.",
          ],
        },
      ],
      en: [
        {
          id: "argonaut",
          title: "British Vanguard: Argonaut & Nintendo",
          paragraphs: [
            "In 1990, young British coder Jez San and his scrappy London studio Argonaut Software reverse-engineered the Game Boy, demonstrating a real-time rotating 3D wireframe cube to stunned Nintendo brass at the Consumer Electronics Show. Shigeru Miyamoto and Nintendo president Hiroshi Yamauchi recognized immediate revolutionary potential.",
            "Nintendo funded Argonaut to design custom hardware capable of rendering real-time mathematics on the Super Nintendo. Code-named MARIO (Mathematical, Argonaut, Rotation & I/O), the resulting silicon was christened the Super FX chip.",
            "While Japanese developers focused on character design, the British hardware squad architected a custom 21.4 MHz RISC coprocessor — clocking roughly six times faster than the SNES's native 3.58 MHz Ricoh 5A22 CPU. Embedded directly on the cartridge circuit board, Super FX calculated 3D vectors and piped rendered framebuffers back to console VRAM.",
          ],
          quote: {
            text: "'We told Nintendo: your console is a master of 2D sprites, but 3D is the inevitable future of gaming. We can build an entire 3D graphics computer directly onto your cartridge.'",
            author: "— Jez San, Argonaut Software Founder",
          },
        },
        {
          id: "starfox",
          title: "Genesis of Star Fox & The MARIO Chip",
          paragraphs: [
            "Released in February 1993, Star Fox was an astonishing sensory shock. Players piloted the nimble Arwing fighter craft through frantic dogfights over Planet Corneria, dodging enemy fire and navigating canyon crevices rendered in genuine flat-shaded polygons.",
            "Miyamoto personally conceived the animal squadron — Fox McCloud, Falco Lombardi, Slippy Toad, and Peppy Hare — inspired by the fox statues at Kyoto's Fushimi Inari shrine. Star Fox proved that gripping 3D flight action was viable on living room televisions years before the PlayStation and Nintendo 64.",
          ],
          figure: {
            imageUrl: "/images/articles/star-fox-arwing.jpg",
            caption: "Cockpit view of the Arwing interceptor in real-time 3D combat over Planet Corneria (Star Fox, 1993).",
          },
        },
        {
          id: "legacy",
          title: "Super FX 2 Evolution & Legacy",
          paragraphs: [
            "The monumental success of Star Fox led to the Super FX 2 (GSU-2), doubling memory bandwidth and clock capability. This upgraded chip powered Yoshi's Island (Super Mario World 2), manipulating gigantic rotating storybook bosses and squash-and-stretch sprite mechanics.",
            "Super FX 2 also brought an audacious conversion of id Software's DOOM to the SNES cartridge format, cementing the chip as one of the most innovative bridging technologies in the history of interactive entertainment.",
          ],
        },
      ],
    },
  },

  // 7. CHRONO TRIGGER
  {
    slugs: {
      ru: "chrono-trigger-istoriya-sozdaniya-dream-team",
      uk: "chrono-trigger-istoriya-stvorennya",
      en: "chrono-trigger-the-dream-team",
    },
    heroImageUrl: "/images/games/chrono-trigger.jpg",
    kicker: {
      ru: "ШЕДЕВРЫ",
      uk: "ШЕДЕВРИ",
      en: "MASTERPIECES",
    },
    title: {
      ru: "Chrono Trigger: История создания шедевра Команды Мечты",
      uk: "Chrono Trigger: Історія створення шедевра Команди Мрії",
      en: "Chrono Trigger: Inside Square's Legendary Dream Team",
    },
    dek: {
      ru: "Как Хиронобу Сакагути, Юдзи Хории и Акира Торияма объединились, чтобы создать величайшую JRPG эпохи 16-бит.",
      uk: "Як Хіронобу Сакагуті, Юдзі Хорії та Акіра Торіяма об'єдналися для створення вершини жанру JRPG.",
      en: "How Hironobu Sakaguchi, Yuji Horii, and Akira Toriyama united to create the definitive 16-bit role-playing experience.",
    },
    readingTimeMinutes: 3,
    publishedAt: {
      ru: "12 августа 2024",
      uk: "12 серпня 2024",
      en: "August 12, 2024",
    },
    author: {
      name: {
        ru: "Алексей Морозов",
        uk: "Олексій Морозов",
        en: "Alexey Morozov",
      },
      role: {
        ru: "Редактор",
        uk: "Редактор",
        en: "Editor",
      },
    },
    toc: {
      ru: [
        { id: "dream-team", number: "01", title: "Союз соперников: Square и Enix" },
        { id: "time-travel", number: "02", title: "Семь эпох и машина времени" },
        { id: "legacy", number: "03", title: "13 концовок и триумф Мицуды" },
      ],
      uk: [
        { id: "dream-team", number: "01", title: "Союз суперників: Square та Enix" },
        { id: "time-travel", number: "02", title: "Сім епох та машина часу" },
        { id: "legacy", number: "03", title: "13 фіналів та тріумф Міцуди" },
      ],
      en: [
        { id: "dream-team", number: "01", title: "The Rival Alliance: Square & Enix" },
        { id: "time-travel", number: "02", title: "Seven Eras & The Epoch" },
        { id: "legacy", number: "03", title: "13 Endings & Mitsuda's Triumph" },
      ],
    },
    factBox: {
      ru: {
        title: "Факты о Chrono Trigger",
        items: [
          { label: "Год выпуска", value: "1995", icon: "📅" },
          { label: "Платформа", value: "Super Nintendo (SNES)", icon: "🎮" },
          { label: "Авторы", value: "Сакагути, Хории, Торияма", icon: "👥" },
          { label: "Композиторы", value: "Ясунори Мицуда, Нобуо Уэмацу", icon: "🎵" },
          { label: "Концовки", value: "13 уникальных финалов + New Game+", icon: "⭐" },
        ],
      },
      uk: {
        title: "Факти про Chrono Trigger",
        items: [
          { label: "Рік випуску", value: "1995", icon: "📅" },
          { label: "Платформа", value: "SNES", icon: "🎮" },
          { label: "Автори", value: "Сакагуті, Хорії, Торіяма", icon: "👥" },
          { label: "Композитори", value: "Ясунорі Міцуда, Нобуо Уемацу", icon: "🎵" },
          { label: "Кінцівки", value: "13 фіналів + New Game+", icon: "⭐" },
        ],
      },
      en: {
        title: "Chrono Trigger Facts",
        items: [
          { label: "Release Year", value: "1995", icon: "📅" },
          { label: "Platform", value: "Super Famicom / SNES", icon: "🎮" },
          { label: "Dream Team", value: "Sakaguchi, Horii, Toriyama", icon: "👥" },
          { label: "Composers", value: "Yasunori Mitsuda, Nobuo Uematsu", icon: "🎵" },
          { label: "Endings", value: "13 unique conclusions + New Game+", icon: "⭐" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "dream-team",
          title: "Союз соперников: Square и Enix",
          paragraphs: [
            "В первой половине 1990-х годов две главные японские ролевые серии — Final Fantasy от Square и Dragon Quest от Enix — вели ожесточенную войну за любовь каждого японского школьника. Объединение их создателей казалось столь же невероятным, как совместный альбом The Beatles и The Rolling Stones.",
            "Однако в 1992 году во время поездки в США на конференцию создатель Final Fantasy Хиронобу Сакагути, архитектор Dragon Quest Юдзи Хории и создатель легендарной манги Dragon Ball Акира Торияма за ужином решили объединить творческие силы. Проект получил кодовое название «Maru-Island», а затем превратился в Chrono Trigger — игру, в которой не было компромиссов.",
            "Каждый участник «Команды Мечты» принес свою сильнейшую черту: Хории написал живой, остроумный сценарий без грамма традиционной затянутости, Торияма подарил персонажам незабываемый выразительный облик, а Сакагути срежиссировал темп и кинематографичную подачу сцен.",
          ],
          quote: {
            text: "«Мы просто хотели создать игру, которая удивит даже нас самих. Никаких рамок компаний, никакой конкуренции — только чистая радость приключения».",
            author: "— Хиронобу Сакагути, продюсер Chrono Trigger",
          },
        },
        {
          id: "time-travel",
          title: "Семь эпох и машина времени",
          paragraphs: [
            "Путешествия во времени в Chrono Trigger не были просто фоновой декорацией. Игровой мир охватывал семь кардинально различных эпох: от первобытного 65 000 000 до н.э. с динозаврами и королевства Зил в 12 000 до н.э. до мрачного постапокалипсиса 2300 года и Зала Конца Времен.",
            "События в прошлом напрямую меняли будущее: посаженное в средневековье семя превращалось в цветущий лес спустя сотни лет, а спасение персонажа открывало совершенно новые ветки квестов. Боевая система Active Time Battle 2.0 впервые избавилась от отдельных боевых экранов — враги бродили прямо по локациям, а герои проводили совместные комбо-атаки двойного и тройного действия.",
          ],
          figure: {
            imageUrl: "/images/articles/chrono-trigger-battle.jpg",
            caption: "Герои Кроно, Марли и Робо перед пространственными вратами в полуразрушенном куполе 2300 года н.э.",
          },
        },
        {
          id: "legacy",
          title: "13 концовок и триумф Мицуды",
          paragraphs: [
            "Chrono Trigger перевернула представление о повторном прохождении, изобретя концепцию «New Game+». Сохранив уровень и экипировку, игрок мог бросить вызов финальному боссу Лавосу буквально в первые минуты игры через телепорт на ярмарке Тысячелетия, открывая одну из 13 уникальных концовок — включая секретную комнату разработчиков с шутливыми диалогами авторов.",
            "Не меньшим чудом стал и саундтрек. Молодой композитор Ясунори Мицуда работал с такой одержимостью, что попал в больницу с язвой желудка, написав более пятидесяти бессмертных композиций. На помощь ему пришел легендарный Нобуо Уэмацу, завершивший партитуру. В результате музыка Chrono Trigger признана одним из величайших музыкальных произведений в истории индустрии.",
          ],
        },
      ],
      uk: [
        {
          id: "dream-team",
          title: "Союз суперників: Square та Enix",
          paragraphs: [
            "На початку 1990-х років протистояння Final Fantasy та Dragon Quest визначало вектор розвитку японських RPG. Об'єднання лідерів обох культових студій стало сенсацією, на яку гравці навіть не наважувалися сподіватися.",
            "Хіронобу Сакагуті, Юдзі Хорії та творець манґи Dragon Ball Акіра Торіяма домовилися створити проект мрії під час спільної поїздки до США. Результатом їхньої синергії став Chrono Trigger — шедевр без жанрових компромісів.",
            "Хорії забезпечив неймовірну динаміку сюжету та гумор, Торіяма створив впізнаваних героїв від шляхетного жаб'ячого лицаря Ґленна до робота Прометея, а Сакагуті вибудував досконалий режисерський темп.",
          ],
          quote: {
            text: "«Ми прагнули зробити гру, яка б захопила нас самих — вільну від корпоративних шаблонів і сповнену духу пригод».",
            author: "— Хіронобу Сакагуті",
          },
        },
        {
          id: "time-travel",
          title: "Сім епох та машина часу",
          paragraphs: [
            "Концепція подорожей крізь сім епох — від динозаврів до магічного королівства Зіл та спустошеного майбутнього 2300 року — стала взірцем нелінійного дизайну. Будь-яка дія у далекому минулому кардинально змінювала географію та долі людей у сьогоденні.",
            "Бойова система Active Time Battle 2.0 позбулася набридливих перехідних екранів. Бійці комбінували здібності у парні та потрійні комбо прямо на карті дослідження, зробивши кожну сутичку динамічною та тактичною.",
          ],
          figure: {
            imageUrl: "/images/articles/chrono-trigger-battle.jpg",
            caption: "Кроно, Марлі та Робо біля порталу машини часу Epoch у похмурому 2300 році.",
          },
        },
        {
          id: "legacy",
          title: "13 фіналів та тріумф Міцуди",
          paragraphs: [
            "Chrono Trigger подарувала світові концепцію New Game+, дозволивши гравцям кидати виклик Лавосу у будь-який момент та відкривати 13 варіативних кінцівок, включаючи таємну кімнату самих творців.",
            "Легендарний саундтрек Ясунорі Міцуди, завершений маестро Нобуо Уемацу, досі вважається недосяжною вершиною мелодійності та емоційної сили 16-бітної епохи.",
          ],
        },
      ],
      en: [
        {
          id: "dream-team",
          title: "The Rival Alliance: Square & Enix",
          paragraphs: [
            "In the early 1990s, Final Fantasy and Dragon Quest were locked in an intense war for RPG supremacy. The prospect of their masterminds collaborating seemed as impossible as John Lennon and Paul McCartney writing songs with the Rolling Stones.",
            "Yet during a 1992 research trip to California, Final Fantasy creator Hironobu Sakaguchi, Dragon Quest designer Yuji Horii, and Dragon Ball manga icon Akira Toriyama gathered over dinner and agreed to forge a joint venture code-named 'Project Maru-Island'. That ambitious spark evolved into Chrono Trigger.",
            "The division of genius was flawless: Horii crafted snappy, joyous dialogue without unnecessary exposition; Toriyama brought unforgettable vitality to characters like frog knight Glenn and steampunk inventor Lucca; and Sakaguchi directed the cinematic progression of each dramatic chapter.",
          ],
          quote: {
            text: "'We set out to build an adventure that would surprise even seasoned game creators — without corporate rivalry, fueled purely by passion for great storytelling.'",
            author: "— Hironobu Sakaguchi, Producer",
          },
        },
        {
          id: "time-travel",
          title: "Seven Eras & The Epoch",
          paragraphs: [
            "Time travel in Chrono Trigger was never a mere gimmick. Spanning seven vividly realized eras — from prehistory (65,000,000 BC) and the floating sky kingdom of Zeal (12,000 BC) to the mechanical ruin of 2300 AD and the mysterious End of Time — the world responded directly to player intervention.",
            "Planting a seed in the Middle Ages restored a barren desert into a verdant woodland centuries later. Meanwhile, the Active Time Battle 2.0 system discarded sluggish battle transition screens, allowing party members to execute fluid dual and triple combination techniques seamlessly in the environment.",
          ],
          figure: {
            imageUrl: "/images/articles/chrono-trigger-battle.jpg",
            caption: "Crono, Marle, and Robo standing before the Epoch time portal in the ruins of 2300 AD.",
          },
        },
        {
          id: "legacy",
          title: "13 Endings & Mitsuda's Triumph",
          paragraphs: [
            "Chrono Trigger pioneered the modern concept of 'New Game+', allowing empowered adventurers to confront the planetary parasite Lavos at virtually any point in the timeline, unlocking 13 distinct conclusions — including the legendary Dream Team developer room.",
            "No retrospective is complete without honoring Yasunori Mitsuda. The young sound designer poured such relentless dedication into his score that he was hospitalized with stomach ulcers, prompting Final Fantasy maestro Nobuo Uematsu to step in and finish the orchestration. The resulting soundtrack stands as a timeless masterpiece of game audio.",
          ],
        },
      ],
    },
  },

  // 8. GAME BOY (1989)
  {
    slugs: {
      ru: "game-boy-1989-filosofiya-monohromnoj-imperii",
      uk: "game-boy-1989-filosofiya-monohromnoyi-imperiyi",
      en: "game-boy-1989-monochrome-empire",
    },
    heroImageUrl: "/images/hardware/gameboy-classic.jpg",
    kicker: {
      ru: "КОНСОЛИ",
      uk: "КОНСОЛІ",
      en: "CONSOLES",
    },
    title: {
      ru: "Game Boy (1989): Гумпэй Ёкои и философия монохромной империи",
      uk: "Game Boy (1989): Ґунпей Йокої та філософія монохромної імперії",
      en: "Game Boy (1989): Gunpei Yokoi and the Monochromatic Empire",
    },
    dek: {
      ru: "Как дешевые батарейки, резкий монохромный экран и Тетрис позволили Nintendo уничтожить технически превосходящих конкурентов.",
      uk: "Як доступні батарейки, монохромний дисплей та Тетріс дозволили Nintendo здолати технологічно сильніших суперників.",
      en: "How cheap AA batteries, a reflective LCD screen, and Tetris allowed Nintendo to obliterate technologically superior rivals.",
    },
    readingTimeMinutes: 11,
    publishedAt: {
      ru: "7 августа 2024",
      uk: "7 серпня 2024",
      en: "August 7, 2024",
    },
    author: {
      name: {
        ru: "Сергей Зайцев",
        uk: "Сергій Зайцев",
        en: "Sergey Zaytsev",
      },
      role: {
        ru: "Ретро-инженер",
        uk: "Ретро-інженер",
        en: "Retro Engineer",
      },
    },
    toc: {
      ru: [
        { id: "lateral-thinking", number: "01", title: "Латеральное мышление с увядшей технологией" },
        { id: "tetris-pact", number: "02", title: "Битва за Тетрис и советский прорыв" },
        { id: "vanquishing-rivals", number: "03", title: "Разгром цветных гигантов: Sega и Atari" },
      ],
      uk: [
        { id: "lateral-thinking", number: "01", title: "Латеральне мислення зі зів'ялою технологією" },
        { id: "tetris-pact", number: "02", title: "Битва за Тетріс та радянський прорив" },
        { id: "vanquishing-rivals", number: "03", title: "Розгром кольорових гігантів: Sega та Atari" },
      ],
      en: [
        { id: "lateral-thinking", number: "01", title: "Lateral Thinking with Withered Technology" },
        { id: "tetris-pact", number: "02", title: "The Cold War Battle for Tetris" },
        { id: "vanquishing-rivals", number: "03", title: "Vanquishing the Color Titans: Sega & Atari" },
      ],
    },
    factBox: {
      ru: {
        title: "Факты о Game Boy",
        items: [
          { label: "Год запуска", value: "1989", icon: "📅" },
          { label: "Главный архитектор", value: "Гумпэй Ёкои (Nintendo R&D1)", icon: "👤" },
          { label: "Процессор", value: "Sharp LR35902 (8 бит, 4.19 МГц)", icon: "⚡" },
          { label: "Автономность", value: "До 30 часов на 4 батарейках AA", icon: "🔋" },
          { label: "Продажи семейства", value: "Более 118 миллионов штук", icon: "🏆" },
        ],
      },
      uk: {
        title: "Факти про Game Boy",
        items: [
          { label: "Рік випуску", value: "1989", icon: "📅" },
          { label: "Головний інженер", value: "Ґунпей Йокої (Nintendo R&D1)", icon: "👤" },
          { label: "Процесор", value: "Sharp LR35902 (8 біт, 4.19 МГц)", icon: "⚡" },
          { label: "Автономність", value: "До 30 годин на 4 батарейках AA", icon: "🔋" },
          { label: "Продажі лінійки", value: "Понад 118 мільйонів копій", icon: "🏆" },
        ],
      },
      en: {
        title: "Game Boy Key Facts",
        items: [
          { label: "Launch Year", value: "1989", icon: "📅" },
          { label: "Lead Architect", value: "Gunpei Yokoi (Nintendo R&D1)", icon: "👤" },
          { label: "CPU", value: "Sharp LR35902 (8-bit, 4.19 MHz)", icon: "⚡" },
          { label: "Battery Life", value: "Up to 30 hours on 4 AA batteries", icon: "🔋" },
          { label: "Total Lifetime Sales", value: "Over 118 Million units", icon: "🏆" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "lateral-thinking",
          title: "Латеральное мышление с увядшей технологией",
          paragraphs: [
            "Когда инженер Гумпэй Ёкои проектировал портативную систему для Nintendo, совет директоров требовал цветной жидкокристаллический экран с подсветкой. Ёкои категорически отверг эту идею. Его философия — «латеральное мышление с увядшей технологией» (Kareta Gijutsu no Suihei Shikō) — гласила: бери проверенные, массовые и дешевые компоненты, но находи для них радикально свежее применение.",
            "Вместо прожорливой цветной матрицы Ёкои установил монохромный отражающий LCD-экран с четырьмя градациями зеленовато-серого оттенка. Пока конкуренты гонялись за мегагерцами, Game Boy обеспечивал фантастические 30 часов непрерывной игры всего на четырех пальчиковых батарейках AA. Ребенок мог взять консоль в многочасовую поездку на автомобиле или в самолет, не беспокоясь о розетке.",
          ],
          quote: {
            text: "Самый продвинутый чип бесполезен, если устройство разряжается через сорок минут. Настоящая магия — в доступности и безотказности.",
            author: "Гумпэй Ёкои, создатель Game Boy",
          },
        },
        {
          id: "tetris-pact",
          title: "Битва за Тетрис и советский прорыв",
          paragraphs: [
            "Технический гений Ёкои был лишь половиной победы. Второй половиной стал феномен Тетриса. Издатель Хэнк Роджерс буквально прорвался сквозь бюрократический «железный занавес» в Москву, чтобы встретиться с создателем игры Алексеем Пажитновым и организацией «Электроноргтехника» (ЭЛОРГ). Роджерс убедил главу Nintendo of America Минору Аракаву: «Если вы положите в комплект Марио, Game Boy купят мальчики. Если вы положите Тетрис, его купят все».",
            "Решение оказалось судьбоносным. Игра с падающими тетрамино превратила серый пластиковый брусок в мировой культурный артефакт. Взрослые, бизнесмены в костюмах, студенты и дети часами не выпускали приставку из рук под аккомпанемент электронной мелодии Коробейников.",
          ],
        },
        {
          id: "vanquishing-rivals",
          title: "Разгром цветных гигантов: Sega и Atari",
          paragraphs: [
            "Конкуренты пытались раздавить Game Boy грубой вычислительной силой. Atari выпустила Lynx с 16-битным графическим сопроцессором и цветным экраном. Sega представила Game Gear — фактически портативную Mega Drive с роскошной подсветкой. Но обе портативки страдали фатальным пороком: они «пожирали» 6 батареек AA за неполные 3 часа игры и стоили вдвое дороже.",
            "Game Boy же был неубиваем. Знаменитый экземпляр, уцелевший во время взрыва казармы в ходе войны в Персидском заливе с оплавленным корпусом, продолжал безупречно запускать картриджи на витрине Nintendo World Store в Нью-Йорке. Спустя десятилетие, когда появился Pokemon Red и Blue, империя Ёкои доказала: безупречный геймплей всегда побеждает терафлопсы.",
          ],
        },
      ],
      uk: [
        {
          id: "lateral-thinking",
          title: "Латеральне мислення зі зів'ялою технологією",
          paragraphs: [
            "Коли інженер Ґунпей Йокої проектував портативну консоль для Nintendo, керівництво вимагало кольоровий екран. Йокої рішуче відмовився. Його філософія базувалася на використанні доступних, надійних та перевірених деталей у несподіваному новому контексті.",
            "Замість виснажливої кольорової матриці Game Boy отримав відбиваючий монохромний дисплей із чотирма градаціями сірого. Це дозволило грати до 30 годин на одному комплекті батарейок, що стало вирішальною перевагою.",
          ],
          quote: {
            text: "Найпотужніший чип марний, якщо пристрій вимикається через пів години. Справжнє мистецтво — у доступності.",
            author: "Ґунпей Йокої, творець Game Boy",
          },
        },
        {
          id: "tetris-pact",
          title: "Битва за Тетріс та радянський прорив",
          paragraphs: [
            "Другим ключем до тріумфу став Тетріс. Видавець Генк Роджерс уклав історичну угоду на права портативної версії шедевра Олексія Пажитнова. Комплектація консолі Тетрісом перетворила Game Boy на загальносвітовий феномен.",
            "Ця гра стерла вікові та гендерні бар'єри: у Тетріс на Game Boy захоплено грали дорослі в метро, школярі на перервах та політики під час перельотів.",
          ],
        },
        {
          id: "vanquishing-rivals",
          title: "Розгром кольорових гігантів: Sega та Atari",
          paragraphs: [
            "Sega Game Gear та Atari Lynx мали яскраві кольорові екрани, але розряджали батарейки за 2-3 години. До того ж вони були значно важчими та дорожчими.",
            "Неперевершена ергономіка, легендарна міцність корпусу та колосальна бібліотека ігор на чолі з Pokemon назавжди закріпили за Game Boy статус непохитного короля портативного геймінгу.",
          ],
        },
      ],
      en: [
        {
          id: "lateral-thinking",
          title: "Lateral Thinking with Withered Technology",
          paragraphs: [
            "When visionary engineer Gunpei Yokoi began designing Nintendo's handheld flagship, company executives demanded an illuminated, full-color display. Yokoi adamantly refused. His guiding principle — 'Lateral Thinking with Withered Technology' — dictated that innovation springs not from expensive unproven components, but from finding radical new uses for mature, cost-effective technology.",
            "By selecting a reflective monochrome LCD with four shades of olive green, Yokoi gave the Game Boy a staggering 30-hour battery life on four standard AA cells. While rivals required heavy external battery packs and wall plugs, Nintendo's compact grey slate offered true on-the-go freedom.",
          ],
          quote: {
            text: "The most powerful processor is worthless if the screen dies after thirty minutes. The real magic lies in affordability and utter dependability.",
            author: "Gunpei Yokoi, creator of Game Boy",
          },
        },
        {
          id: "tetris-pact",
          title: "The Cold War Battle for Tetris",
          paragraphs: [
            "Brilliant industrial design met pure game design perfection through Tetris. Publisher Henk Rogers journeyed behind the Iron Curtain to negotiate directly with Soviet agency ELORG and game creator Alexey Pajitnov. Rogers famously told Nintendo of America's Minoru Arakawa: 'If you pack in Mario, the Game Boy is for boys. If you pack in Tetris, the Game Boy is for everyone.'",
            "The partnership ignited a worldwide cultural craze. From Tokyo subways to Manhattan boardrooms, people of all generations were captivated by falling tetrominoes and the hypnotic chime of Korobeiniki.",
          ],
        },
        {
          id: "vanquishing-rivals",
          title: "Vanquishing the Color Titans: Sega & Atari",
          paragraphs: [
            "Both Atari (with the 16-bit color Lynx) and Sega (with the backlit Game Gear) sought to crush the Game Boy with sheer horsepower. Yet both systems bled through six AA batteries in under three hours, and their bulky form factors strained both coat pockets and wallets.",
            "The Game Boy proved indestructible. A battle-scarred unit retrieved from a bombed barracks during the Gulf War, with its casing melted and warped, famously continued running Tetris on display at the Nintendo World Store. When Pokemon arrived in 1996, it solidified Yokoi's philosophy: gameplay always triumphs over raw silicon.",
          ],
        },
      ],
    },
  },

  // 9. SID MEIER & CIVILIZATION
  {
    slugs: {
      ru: "sid-meier-chelovek-kotoryj-sozdal-civilization",
      uk: "sid-meier-lyudyna-yaka-stvorila-civilization",
      en: "sid-meier-architect-who-codified-civilization",
    },
    heroImageUrl: "/images/articles/sid-meier-civilization.jpg",
    kicker: {
      ru: "ЛЮДИ",
      uk: "ЛЮДИ",
      en: "PEOPLE",
    },
    title: {
      ru: "Сид Мейер: Человек, который придумал «Цивилизацию»",
      uk: "Сід Мейєр: Людина, яка створила «Цивілізацію»",
      en: "Sid Meier: The Architect Who Codified Civilization",
    },
    dek: {
      ru: "От авиасимуляторов MicroProse до формулы «еще одного хода»: как тихий инженер навсегда изменил жанр глобальных стратегий.",
      uk: "Від авіасимуляторів MicroProse до правила «ще один хід»: історія розробника, який винайшов еталон покрокових стратегій.",
      en: "From MicroProse flight simulators to 'just one more turn': how one quiet programmer codified the grand strategy genre.",
    },
    readingTimeMinutes: 13,
    publishedAt: {
      ru: "9 августа 2024",
      uk: "9 серпня 2024",
      en: "August 9, 2024",
    },
    author: {
      name: {
        ru: "Михаил Соколов",
        uk: "Михайло Соколов",
        en: "Mikhail Sokolov",
      },
      role: {
        ru: "Ведущий аналитик",
        uk: "Провідний аналітик",
        en: "Lead Analyst",
      },
    },
    toc: {
      ru: [
        { id: "flight-sims", number: "01", title: "Пари в Лас-Вегасе и взлет MicroProse" },
        { id: "interesting-choices", number: "02", title: "Философия «интересных решений»" },
        { id: "one-more-turn", number: "03", title: "Анатомия эффекта «Еще один ход»" },
      ],
      uk: [
        { id: "flight-sims", number: "01", title: "Парі в Лас-Вегасі та зліт MicroProse" },
        { id: "interesting-choices", number: "02", title: "Філософія «цікавих рішень»" },
        { id: "one-more-turn", number: "03", title: "Анатомія ефекту «Ще один хід»" },
      ],
      en: [
        { id: "flight-sims", number: "01", title: "The Vegas Bet and the Rise of MicroProse" },
        { id: "interesting-choices", number: "02", title: "The Philosophy of Interesting Decisions" },
        { id: "one-more-turn", number: "03", title: "The Anatomy of 'Just One More Turn'" },
      ],
    },
    factBox: {
      ru: {
        title: "Факты о Сиде Мейере",
        items: [
          { label: "Год выхода Civ 1", value: "1991", icon: "📅" },
          { label: "Компания", value: "MicroProse / Firaxis", icon: "🏢" },
          { label: "Соавтор дизайна", value: "Брюс Шелли (Bruce Shelley)", icon: "👥" },
          { label: "Ключевая инновация", value: "Дерево технологий (Tech Tree)", icon: "🌳" },
          { label: "Зал славы", value: "AIAS Hall of Fame (1999)", icon: "🎖️" },
        ],
      },
      uk: {
        title: "Факти про Сіда Мейєра",
        items: [
          { label: "Рік виходу Civ 1", value: "1991", icon: "📅" },
          { label: "Студія", value: "MicroProse / Firaxis", icon: "🏢" },
          { label: "Співавтор", value: "Брюс Шеллі (Bruce Shelley)", icon: "👥" },
          { label: "Ключова механіка", value: "Дерево технологій (Tech Tree)", icon: "🌳" },
          { label: "Визнання", value: "AIAS Hall of Fame (1999)", icon: "🎖️" },
        ],
      },
      en: {
        title: "Sid Meier Key Facts",
        items: [
          { label: "Civ 1 Release", value: "1991", icon: "📅" },
          { label: "Studios Founded", value: "MicroProse (1982), Firaxis (1996)", icon: "🏢" },
          { label: "Key Collaborator", value: "Bruce Shelley", icon: "👥" },
          { label: "Core Innovation", value: "Interactive Tech Tree & 4X Loop", icon: "🌳" },
          { label: "Hall of Fame", value: "AIAS Hall of Fame (2nd inductee after Miyamoto)", icon: "🎖️" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "flight-sims",
          title: "Пари в Лас-Вегасе и взлет MicroProse",
          paragraphs: [
            "История современной стратегии началась в казино Лас-Вегаса в 1982 году. Бывший военный пилот Билл Стили и скромный программист Сид Мейер играли в аркадный авиасимулятор Red Baron. Сид раз за разом побеждал Стили и наконец заявил: «Искусственный интеллект этой игры примитивен. Я напишу симулятор лучше за одну неделю». Стили ответил: «Если напишешь, я его продам». Так родилась MicroProse.",
            "Ранние хиты студии — F-15 Strike Eagle и Silent Service — доказали феноменальный талант Мейера. Однако сам Сид мечтал о чем-то неизмеримо более грандиозном, чем приборная панель истребителя: он хотел охватить шесть тысяч лет человеческой истории на одном экране.",
          ],
          quote: {
            text: "Хорошая игра — это серия интересных решений. Если у игрока есть очевидный лучший выбор, игра умирает.",
            author: "Сид Мейер",
          },
        },
        {
          id: "interesting-choices",
          title: "Философия «интересных решений»",
          paragraphs: [
            "Вместе с дизайнером настольных игр Брюсом Шелли Сид сформулировал главное правило геймдизайна: выбор должен иметь цену. Построить амбар или обучить фалангу гоплитов? Исследовать гончарное дело ради роста городов или бронзу для обороны? Каждое решение открывало новые горизонты и блокировало альтернативы.",
            "Именно в Civilization Мейер впервые в истории видеоигр реализовал разветвленное «Дерево технологий». Игрок видел причинно-следственную связь прогресса: от изобретения колеса и алфавита до расщепления атома и полета корабля к Альфе Центавра. История человечества оживала в руках игрока.",
          ],
        },
        {
          id: "one-more-turn",
          title: "Анатомия эффекта «Еще один ход»",
          paragraphs: [
            "Civilization обладала гипнотической силой, получившей название «синдром еще одного хода». Мейер гениально синхронизировал игровые циклы разной длины: исследование технологии занимает 4 хода, постройка чуда света — 7 ходов, перемещение легиона к границе — 2 хода. В любой момент времени что-то важное происходило прямо сейчас, а что-то завершалось через пару минут.",
            "В результате игрок садился за монитор в восемь вечера «на полчаса», а поднимал глаза, когда за окном начинался рассвет. Формула Сида Мейера заложила фундамент целого жанра 4X (eXplore, eXpand, eXploit, eXterminate) и остается непревзойденной классикой геймдизайна уже более тридцати лет.",
          ],
        },
      ],
      uk: [
        {
          id: "flight-sims",
          title: "Парі в Лас-Вегасі та зліт MicroProse",
          paragraphs: [
            "Історія Civilization почалася з випадкового парі в Лас-Вегасі, коли Сід Мейєр пообіцяв створити авіасимулятор кращий за аркадні автомати того часу. Разом із Біллом Стілі вони заснували легендарну студію MicroProse.",
            "Після успіху F-15 Strike Eagle та Railroad Tycoon Сід наважився на небачений масштаб — змоделювати весь розвиток людської цивілізації від кам'яного віку до космічної ери.",
          ],
          quote: {
            text: "Гра — це низка цікавих виборів. Якщо одне рішення очевидно виграшне, гра перестає бути живою.",
            author: "Сід Мейєр",
          },
        },
        {
          id: "interesting-choices",
          title: "Філософія «цікавих рішень»",
          paragraphs: [
            "Головна знахідка Сіда та Брюса Шеллі — інтерактивне дерево технологій. Гравець відчував безперервний прогрес, самостійно обираючи шлях: від колеса та писемності до залізниць та ядерної фізики.",
            "Дипломатія, будівництво чудес світу, релігія та військова тактика спліталися в гармонійну механіку, де кожен крок мав наслідки.",
          ],
        },
        {
          id: "one-more-turn",
          title: "Анатомія ефекту «Ще один хід»",
          paragraphs: [
            "Civilization породила феномен «ще одного ходу»: через накладання різних ігрових таймерів гравець не міг відірватися від екрана до ранку.",
            "Спадщина Сіда Мейєра визначила обличчя глобальних стратегій і довела, що глибокий інтелектуальний геймплей може бути масовим бестселером.",
          ],
        },
      ],
      en: [
        {
          id: "flight-sims",
          title: "The Vegas Bet and the Rise of MicroProse",
          paragraphs: [
            "The genesis of modern strategy gaming occurred in a Las Vegas casino in 1982. Former Air Force pilot Bill Stealey and quiet software engineer Sid Meier were playing Atari's Red Baron arcade machine. After Sid consistently bested the military pilot, he remarked: 'The AI in this machine is elementary. I can build a better flight simulator in a week.' Stealey shot back: 'If you build it, I will sell it.' MicroProse was born.",
            "Early breakthroughs like F-15 Strike Eagle and Silent Service established the studio's technical reputation. Yet Meier's imagination soon transcended cockpits: inspired by SimCity and tabletop board games, he envisioned simulating six thousand years of human ambition on a home PC.",
          ],
          quote: {
            text: "A game is a series of interesting choices. If there is one obviously correct move, the player stops making decisions and the game dies.",
            author: "Sid Meier",
          },
        },
        {
          id: "interesting-choices",
          title: "The Philosophy of Interesting Decisions",
          paragraphs: [
            "Collaborating with tabletop veteran Bruce Shelley, Meier established the foundational dogma of 4X game design: every decision must carry an opportunity cost. Do you build a granary to expand population, or train phalanx units to fend off barbarians? Do you research Pottery or Bronze Working? Each fork in the road unlocked new vistas while closing others.",
            "Civilization introduced the world to the interactive Tech Tree. For the first time, players navigated the causal chain of human genius — from the invention of the wheel and code of laws to the Manhattan Project and Apollo missions. History was no longer a textbook; it was a responsive sandbox.",
          ],
        },
        {
          id: "one-more-turn",
          title: "The Anatomy of 'Just One More Turn'",
          paragraphs: [
            "Civilization possessed a hypnotic psychological loop that coined the industry phrase 'Just One More Turn'. Meier purposefully misaligned progress cycles: a discovery would conclude in 3 turns, a wonder of the world in 6 turns, and a trireme would reach unknown shores in 1 turn. At any given moment, gratification was imminent.",
            "Generations of players sat down at 8 PM for a brief skirmish, only to watch the morning sun break across their keyboards. Sid Meier's masterpiece codified the 4X genre and remains a testament to the timeless power of human curiosity.",
          ],
        },
      ],
    },
  },

  // 10. 10 FORGOTTEN PLAYSTATION 1 MASTERPIECES
  {
    slugs: {
      ru: "10-zabytyh-shedevrov-playstation-1",
      uk: "10-zabutyh-shedevriv-playstation-1",
      en: "10-forgotten-playstation-1-masterpieces",
    },
    heroImageUrl: "/images/articles/ps1-masterpieces.jpg",
    kicker: {
      ru: "ПОДБОРКИ",
      uk: "ДОБІРКИ",
      en: "COLLECTIONS",
    },
    title: {
      ru: "10 забытых шедевров с PlayStation 1, в которые нужно сыграть",
      uk: "10 забутих шедеврів з PlayStation 1, які варто відкрити знову",
      en: "10 Forgotten PlayStation 1 Masterpieces You Need to Play",
    },
    dek: {
      ru: "Помимо Final Fantasy и Metal Gear Solid: смелые, экспериментальные и незаслуженно упущенные жемчужины золотой эпохи 32 бит.",
      uk: "Позаду Final Fantasy та Metal Gear: сміливі, незвичайні та несправедливо забуті перлини золотої доби 32 біт.",
      en: "Beyond Final Fantasy and Metal Gear: uncovering bold, experimental, and overlooked wonders on Sony's 32-bit grey box.",
    },
    readingTimeMinutes: 15,
    publishedAt: {
      ru: "15 августа 2024",
      uk: "15 серпня 2024",
      en: "August 15, 2024",
    },
    author: {
      name: {
        ru: "Виктор Коваль",
        uk: "Віктор Коваль",
        en: "Victor Koval",
      },
      role: {
        ru: "Архивист консолей",
        uk: "Архіваріус консолей",
        en: "Console Archivist",
      },
    },
    toc: {
      ru: [
        { id: "cd-revolution", number: "01", title: "Золотой век свободы на CD-ROM" },
        { id: "top-gems-part1", number: "02", title: "Vagrant Story, Alundra и Einhander" },
        { id: "top-gems-part2", number: "03", title: "Tobal 2, Klonoa и скрытая классика" },
      ],
      uk: [
        { id: "cd-revolution", number: "01", title: "Золотий вік свободи на CD-ROM" },
        { id: "top-gems-part1", number: "02", title: "Vagrant Story, Alundra та Einhander" },
        { id: "top-gems-part2", number: "03", title: "Tobal 2, Klonoa та прихована класика" },
      ],
      en: [
        { id: "cd-revolution", number: "01", title: "The CD-ROM Golden Age of Freedom" },
        { id: "top-gems-part1", number: "02", title: "Vagrant Story, Alundra & Einhander" },
        { id: "top-gems-part2", number: "03", title: "Tobal 2, Klonoa & Cult Gems" },
      ],
    },
    factBox: {
      ru: {
        title: "Эра PlayStation 1",
        items: [
          { label: "Годы расцвета", value: "1994–2000", icon: "📅" },
          { label: "Носитель", value: "CD-ROM (650 МБ)", icon: "💿" },
          { label: "Библиотека", value: "Более 4 000 релизов", icon: "🎮" },
          { label: "Жанровый фокус", value: "Экспериментальные 3D и 2.5D", icon: "💎" },
        ],
      },
      uk: {
        title: "Ера PlayStation 1",
        items: [
          { label: "Роки розквіту", value: "1994–2000", icon: "📅" },
          { label: "Носій", value: "CD-ROM (650 МБ)", icon: "💿" },
          { label: "Бібліотека", value: "Понад 4 000 релізів", icon: "🎮" },
          { label: "Особливість", value: "Сміливі експерименти з 3D", icon: "💎" },
        ],
      },
      en: {
        title: "PS1 Era Highlights",
        items: [
          { label: "Active Era", value: "1994–2000", icon: "📅" },
          { label: "Media Format", value: "Black-bottom CD-ROM (650 MB)", icon: "💿" },
          { label: "Global Library", value: "Over 4,000 distinct titles", icon: "🎮" },
          { label: "Design Spirit", value: "Limitless 3D & 2.5D exploration", icon: "💎" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "cd-revolution",
          title: "Золотой век свободы на CD-ROM",
          paragraphs: [
            "Когда Sony выпустила оригинальную PlayStation, индустрия изменилась навсегда. Дешевизна штамповки компакт-дисков и дружелюбный инструментарий разработки сняли финансовые оковы картриджей. Студии могли рисковать, экспериментировать с кинематографичной режиссурой, оркестровой музыкой и новаторскими механиками, которые на SNES или Genesis были немыслимы.",
            "Но колоссальный успех Final Fantasy VII, Resident Evil и Metal Gear Solid заслонил собой десятки шедевров калибром поменьше. Это игры, в которых разработчики выжимали последние капли вычислительной мощности из чипа R3000, создавая уникальный художественный стиль.",
          ],
          quote: {
            text: "Мы стремились выжать из 32-битного чипа кинематографичность, сравнимую с европейским кино. Каждая полигональная грань была на счету.",
            author: "Ясуми Мацуно, режиссер Vagrant Story",
          },
        },
        {
          id: "top-gems-part1",
          title: "Vagrant Story, Alundra и Einhander",
          paragraphs: [
            "Вершиной позднего периода PS1 стала Vagrant Story от Squaresoft и Ясуми Мацуно. Мрачный готический город Леа Монд, сложнейшая система крафта клинков, прицеливание по частям тела и кинематографичная операторская работа сделали её визуальным шедевром, опередившим свое время на десятилетие.",
            "Студия Matrix Software подарила миру Alundra — глубокую, мрачную action-RPG с невероятно изобретательными головоломками, которую заслуженно называют «взрослой Zelda для PlayStation». А космический скролл-шутер Einhander от Square доказал, что полигональное 2.5D может быть быстрым, агрессивным и сопровождаться эталонным немецким техно-саундтреком.",
          ],
        },
        {
          id: "top-gems-part2",
          title: "Tobal 2, Klonoa и скрытая классика",
          paragraphs: [
            "Файтинг Tobal 2 от DreamFactory поражал честным разрешением высокой четкости при стабильных 60 кадрах в секунду, дизайном персонажей от Акиры Ториямы и гигантским RPG-режимом Quest Mode с сотнями подземелий. Namco в то же время выпустила Klonoa: Door to Phantomile — трогательный до слез платформер, доказавший силу эмоционального повествования.",
            "Добавьте сюда Future Cop L.A.P.D., ритмичную Vib-Ribbon и футуристический мех-символ Omega Boost от Polyphony Digital — и вы поймете, почему каталог первой PlayStation остается неисчерпаемой сокровищницей для любого исследователя ретро-игр.",
          ],
        },
      ],
      uk: [
        {
          id: "cd-revolution",
          title: "Золотий вік свободи на CD-ROM",
          paragraphs: [
            "Поява PlayStation відкрила шлях безпрецедентній творчій свободі розробників. Доступність CD-носіїв дозволила втілювати ідеї, неможливі на дорогих картриджах.",
            "Поряд із глобальними блокбастерами на консолі виник пласт унікальних авторських проєктів, які поєднували полігональну графіку та бездоганний стиль.",
          ],
          quote: {
            text: "Ми прагнули вичавити з 32-бітного чипа кінематографічність європейського кіно.",
            author: "Ясумі Мацуно, режисер Vagrant Story",
          },
        },
        {
          id: "top-gems-part1",
          title: "Vagrant Story, Alundra та Einhander",
          paragraphs: [
            "Vagrant Story від Ясумі Мацуно вражала неймовірною роботою віртуальної камери та тактичною бойовою системою в готичному місті Леа Монд.",
            "Alundra стала еталонною пригодницькою action-RPG з інтелектуальними головоломками, а Einhander — зразковим 2.5D шутером з динамічним електронним саундтреком.",
          ],
        },
        {
          id: "top-gems-part2",
          title: "Tobal 2, Klonoa та прихована класика",
          paragraphs: [
            "Файтинг Tobal 2 демонстрував бездоганні 60 fps та арт від Акіри Торіями, а Klonoa стала одним із найзворушливіших платформерів в історії.",
            "Ці проєкти доводять: бібліотека першої PlayStation зберігає чимало нерозкритих діамантів, гідних уваги сучасного гравця.",
          ],
        },
      ],
      en: [
        {
          id: "cd-revolution",
          title: "The CD-ROM Golden Age of Freedom",
          paragraphs: [
            "Sony's launch of the original PlayStation dissolved the economic bottlenecks of the cartridge era. Inexpensive CD-ROM stamping and Sony's developer-first toolsets unleashed unprecedented risk-taking. Studios were suddenly free to orchestrate full CD-audio scores, integrate pre-rendered cinematics, and craft complex 3D worlds without dreading memory costs.",
            "While giants like Final Fantasy VII and Metal Gear Solid claimed historic acclaim, the console's vast 4,000-title library concealed extraordinary masterpieces where engineers pushed the geometry engine to its absolute limits.",
          ],
          quote: {
            text: "We wanted to extract cinematic European theater from a 32-bit CPU. Every single textured polygon was meticulously placed.",
            author: "Yasumi Matsuno, director of Vagrant Story",
          },
        },
        {
          id: "top-gems-part1",
          title: "Vagrant Story, Alundra & Einhander",
          paragraphs: [
            "The crowning pinnacle of late-era PS1 engineering was Squaresoft's Vagrant Story. Directed by Yasumi Matsuno, it featured an astonishing real-time camera system, a medieval Gothic French tapestry aesthetic in the ruined city of Leá Monde, and a deep limb-targeting combat system that still holds a perfect 40/40 Famitsu rating.",
            "Matrix Software delivered Alundra — a somber, puzzle-laden action-RPG that explored the trauma of villagers' nightmares, widely celebrated as PlayStation's finest answer to top-down Zelda. Meanwhile, Squaresoft's Einhander revolutionized side-scrolling shoot-em-ups with explosive 2.5D setpieces and a pulse-pounding techno score.",
          ],
        },
        {
          id: "top-gems-part2",
          title: "Tobal 2, Klonoa & Cult Gems",
          paragraphs: [
            "DreamFactory's Tobal 2 pushed Sony's hardware into rare high-resolution 60fps combat, featuring character designs by Akira Toriyama and an immense RPG dungeon crawl mode. Namco's Klonoa: Door to Phantomile utilized 2.5D perspective shifts and an unforgettable, heartbreaking narrative that remains a masterclass in emotional pacing.",
            "From the dual-mech warfare of Future Cop L.A.P.D. to Polyphony Digital's lightning-fast Omega Boost, the PlayStation 1 library proves that true artistic brilliance never fades.",
          ],
        },
      ],
    },
  },

  // 11. GREATEST 16-BIT SOUNDTRACKS
  {
    slugs: {
      ru: "luchshie-16-bitnye-saundtreki-mega-drive-i-snes",
      uk: "naykrashchi-16-bitni-saundtreky-mega-drive-ta-snes",
      en: "greatest-16-bit-soundtracks-megadrive-snes",
    },
    heroImageUrl: "/images/articles/16bit-soundtracks.jpg",
    kicker: {
      ru: "ПОДБОРКИ",
      uk: "ДОБІРКИ",
      en: "COLLECTIONS",
    },
    title: {
      ru: "Лучшие 16-битные саундтреки: от FM-синтезатора Mega Drive до чипа SNES",
      uk: "Найкращі 16-бітні саундтреки: від FM-синтезу Mega Drive до SNES SPC700",
      en: "Greatest 16-Bit Soundtracks: From Mega Drive FM-Synth to SNES SPC700",
    },
    dek: {
      ru: "Юдзо Косиро, Нобуо Уэмацу и золотая эпоха композиторов, творивших под суровыми аппаратными лимитами.",
      uk: "Юдзо Косіро, Нобуо Уемацу та шедеври музики в епоху суворих залізних обмежень.",
      en: "Yuzo Koshiro, Nobuo Uematsu, and the golden era of hardware-driven music composition.",
    },
    readingTimeMinutes: 12,
    publishedAt: {
      ru: "6 августа 2024",
      uk: "6 серпня 2024",
      en: "August 6, 2024",
    },
    author: {
      name: {
        ru: "Дмитрий Мельник",
        uk: "Дмитро Мельник",
        en: "Dmitry Melnik",
      },
      role: {
        ru: "Музыкальный редактор",
        uk: "Музичний редактор",
        en: "Music Editor",
      },
    },
    toc: {
      ru: [
        { id: "ym2612-fm", number: "01", title: "Yamaha YM2612: сырой драйв и клубный звук Mega Drive" },
        { id: "spc700-snes", number: "02", title: "Sony SPC700: оркестровая магия Super Nintendo" },
        { id: "composition-art", number: "03", title: "Мастерство ограничений: как создавались вечные треки" },
      ],
      uk: [
        { id: "ym2612-fm", number: "01", title: "Yamaha YM2612: сирий драйв та клубний звук Mega Drive" },
        { id: "spc700-snes", number: "02", title: "Sony SPC700: оркестрова магія Super Nintendo" },
        { id: "composition-art", number: "03", title: "Майстерність обмежень: як створювалися вічні треки" },
      ],
      en: [
        { id: "ym2612-fm", number: "01", title: "Yamaha YM2612: Industrial Grit & Club Beats" },
        { id: "spc700-snes", number: "02", title: "Sony SPC700: The 64KB Symphony" },
        { id: "composition-art", number: "03", title: "The Alchemy of Hardware Limits" },
      ],
    },
    factBox: {
      ru: {
        title: "Аппаратные чипы 16-бит",
        items: [
          { label: "Sega Mega Drive", value: "Yamaha YM2612 (6 каналов FM) + PSG", icon: "🎹" },
          { label: "Super Nintendo", value: "Sony SPC700 (8 каналов ADPCM, 64 КБ RAM)", icon: "🎼" },
          { label: "Ключевые авторы", value: "Юдзо Косиро, Дэвид Уайз, Нобуо Уэмацу", icon: "👥" },
          { label: "Стилевой охват", value: "Детройт-техно, эмбиент, симфоническая опера", icon: "🎧" },
        ],
      },
      uk: {
        title: "Апаратні чипи 16-біт",
        items: [
          { label: "Sega Mega Drive", value: "Yamaha YM2612 (6 каналів FM) + PSG", icon: "🎹" },
          { label: "Super Nintendo", value: "Sony SPC700 (8 каналів ADPCM, 64 КБ RAM)", icon: "🎼" },
          { label: "Легендарні автори", value: "Юдзо Косіро, Девід Вайз, Нобуо Уемацу", icon: "👥" },
          { label: "Жанри", value: "Техно, синрейв, симфонічна опера", icon: "🎧" },
        ],
      },
      en: {
        title: "16-Bit Audio Hardware",
        items: [
          { label: "Mega Drive Silicon", value: "Yamaha YM2612 (6-channel FM) + TI PSG", icon: "🎹" },
          { label: "SNES Sound System", value: "Sony SPC700 (8-channel ADPCM, 64 KB RAM)", icon: "🎼" },
          { label: "Pioneering Masters", value: "Yuzo Koshiro, David Wise, Nobuo Uematsu", icon: "👥" },
          { label: "Sonic Diversity", value: "Detroit techno, ambient synth, opera", icon: "🎧" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "ym2612-fm",
          title: "Yamaha YM2612: сырой драйв и клубный звук Mega Drive",
          paragraphs: [
            "Чип Yamaha YM2612 внутри Sega Mega Drive был настоящим монстром частотной модуляции (FM-синтеза). В неумелых руках он издавал металлическое дребезжание, но когда к нему прикасались гении вроде Юдзо Косиро, приставка превращалась в рейв-клуб середины девяностых.",
            "Для саундтрека Streets of Rage 2 Косиро лично запрограммировал собственный звуковой драйвер на ассемблере, вдохновляясь треками The Shamen и клубным андеграундом Токио и Лондона. Басовые линии YM2612 обладали хлестким, упругим панчем, который невозможно спутать ни с одной другой консолью.",
          ],
          quote: {
            text: "Я ходил в токийские клубы, слушал американский хаус и детройтское техно, возвращался в студию и заставлял чип Mega Drive звучать так же жирно.",
            author: "Юдзо Косиро, композитор Streets of Rage",
          },
        },
        {
          id: "spc700-snes",
          title: "Sony SPC700: оркестровая магия Super Nintendo",
          paragraphs: [
            "Nintendo пошла противоположным путем. Разработанный Кеном Кутараги аудиочип Sony SPC700 оперировал не синтезом, а цифровыми сэмплами ADPCM. Вся музыка, инструменты и звуковые эффекты должны были уместиться в крошечные 64 килобайта оперативной памяти.",
            "Британский композитор Дэвид Уайз совершил невозможное в Donkey Kong Country: за счет виртуозной компрессии и многослойного ревербератора он создал трек «Aquatic Ambiance» — медитативный звуковой шедевр, ставший гимном поколения. А Нобуо Уэмацу в Final Fantasy VI написал полноценную оперу «Aria di Mezzo Carattere», имитирующую оперное пение с помощью сжатых вокальных формант.",
          ],
        },
        {
          id: "composition-art",
          title: "Мастерство ограничений: как создавались вечные треки",
          paragraphs: [
            "Жесткие лимиты заставляли композиторов мыслить как инженеры. Чтобы освободить канал под звук прыжка или выстрела, композитор должен был мгновенно глушить одну из нот аккорда. Полифония требовала математической точности.",
            "Парадокс заключается в том, что именно эти аппаратные оковы породили самые запоминающиеся мелодии в истории индустрии. Мелодический хук должен был быть безупречным сам по себе, без студийного лоска и гигабайтов оркестровых библиотек.",
          ],
        },
      ],
      uk: [
        {
          id: "ym2612-fm",
          title: "Yamaha YM2612: сирий драйв та клубний звук Mega Drive",
          paragraphs: [
            "FM-синтезатор Yamaha YM2612 у Sega Mega Drive давав агресивний, пружний звук. Юдзо Косіро у Streets of Rage 2 створив на ньому еталонне клубне звучання, яке випередило комерційну електронну музику свого часу.",
            "Його бас-бочки та перевантажені синтезаторні рифи перетворили 16-бітну приставку на повноцінний синтезаторний сетап.",
          ],
          quote: {
            text: "Я прагнув принести енергію клубів та хаусу безпосередньо у вітальні гравців.",
            author: "Юдзо Косіро, композитор",
          },
        },
        {
          id: "spc700-snes",
          title: "Sony SPC700: оркестрова магія Super Nintendo",
          paragraphs: [
            "Sony SPC700 у SNES дозволяв використовувати 8-канальні оцифровані сэмпли з реверберацією, але мав усього 64 КБ пам'яті на всю музику та ефекти.",
            "Девід Вайз у Donkey Kong Country та Нобуо Уемацу у Final Fantasy VI створили звукові світи небаченої краси, змусивши мікрочип звучати як симфонічний оркестр.",
          ],
        },
        {
          id: "composition-art",
          title: "Майстерність обмежень: як створювалися вічні треки",
          paragraphs: [
            "Суворі апаратні рамки спонукали до пошуку ідеальних мелодій, де кожна нота мала вирішальну вагу.",
            "Саме тому музика 16-бітної доби залишається золотим стандартом мелодизму, яку оркестри виконують у філармоніях і сьогодні.",
          ],
        },
      ],
      en: [
        {
          id: "ym2612-fm",
          title: "Yamaha YM2612: Industrial Grit & Club Beats",
          paragraphs: [
            "The Yamaha YM2612 sound processor powering the Sega Mega Drive was a pure frequency modulation (FM) synthesizer. While untamed FM synthesis could sound harsh, in the hands of visionary prodigies like Yuzo Koshiro, the Genesis roared with the raw energy of underground Detroit techno and London breakbeat.",
            "For Streets of Rage 2, Koshiro programmed a proprietary assembly sound driver, directly feeding club music rhythms into the console. The resulting punchy sub-bass lines, crisp snare hits, and metallic stabs gave Sega's flagship an edgy sonic identity that home consoles had never witnessed.",
          ],
          quote: {
            text: "I spent weekends in Tokyo dance clubs absorbing house music, then went straight to my studio to program those exact frequencies into the Mega Drive.",
            author: "Yuzo Koshiro, composer of Streets of Rage",
          },
        },
        {
          id: "spc700-snes",
          title: "Sony SPC700: The 64KB Symphony",
          paragraphs: [
            "Nintendo countered with Sony's SPC700 sound coprocessor, engineered by Ken Kutaragi. Rather than synthesizing waveforms on the fly, the SNES utilized 8 channels of 16-bit ADPCM wavetable samples coupled with a hardware Gaussian interpolator and stereo echo delay.",
            "British composer David Wise achieved audio alchemy in Donkey Kong Country: fitting lush marimbas, acoustic strings, and underwater echoes into a mere 64 kilobytes of audio RAM for 'Aquatic Ambiance'. Meanwhile, Nobuo Uematsu staged an entire simulated opera in Final Fantasy VI, pioneering vocal synthesis through microscopic formant loops.",
          ],
        },
        {
          id: "composition-art",
          title: "The Alchemy of Hardware Limits",
          paragraphs: [
            "Composing for 16-bit chips resembled mathematical puzzle-solving. If a sound effect like a laser or coin pickup fired, an instrument channel had to be sacrificed for milliseconds without breaking the harmonic structure.",
            "This extreme technical austerity forced composers to write indelible, unforgettable melodic hooks. Stripped of multi-gigabyte modern orchestral sample libraries, 16-bit composers relied on pure melody, rhythm, and acoustic ingenuity.",
          ],
        },
      ],
    },
  },

  // 12. HOW 90S GAMING MAGAZINES SHAPED OUR IMAGINATION
  {
    slugs: {
      ru: "kak-igrovye-zhurnaly-90-h-menjali-mir",
      uk: "yak-igrovi-zhurnaly-90-h-zminyuvaly-svit",
      en: "how-90s-gaming-magazines-shaped-imagination",
    },
    heroImageUrl: "/images/articles/gaming-magazines-90s.jpg",
    kicker: {
      ru: "КУЛЬТУРА",
      uk: "КУЛЬТУРА",
      en: "CULTURE",
    },
    title: {
      ru: "Как игровые журналы 90-х меняли наше восприятие мира",
      uk: "Як ігрові журнали 90-х формували нашу культуру",
      en: "How 90s Gaming Magazines Shaped Our Imagination",
    },
    dek: {
      ru: "Демо-диски, рукописные карты, секретные коды и ламповая романтика печатной эпохи до появления интернета.",
      uk: "Демо-диски, таємні коди, написи від руки та магія друкованих сторінок до епохи інтернету.",
      en: "Demo discs, hand-drawn maps, pixelated secrets, and the tactile thrill of print journalism before the internet.",
    },
    readingTimeMinutes: 17,
    publishedAt: {
      ru: "14 августа 2024",
      uk: "14 серпня 2024",
      en: "August 14, 2024",
    },
    author: {
      name: {
        ru: "Анна Верещагина",
        uk: "Ганна Верещагіна",
        en: "Anna Vereshchagina",
      },
      role: {
        ru: "Культуролог",
        uk: "Культуролог",
        en: "Culture Critic",
      },
    },
    toc: {
      ru: [
        { id: "paper-window", number: "01", title: "Бумажное окно в недосягаемые миры" },
        { id: "demo-discs", number: "02", title: "Сокровище в конверте: магия демо-дисков" },
        { id: "community-ritual", number: "03", title: "Письма читателей и рукописная картография" },
      ],
      uk: [
        { id: "paper-window", number: "01", title: "Паперове вікно в недосяжні світи" },
        { id: "demo-discs", number: "02", title: "Скарб у конверті: магія демо-дисків" },
        { id: "community-ritual", number: "03", title: "Листи читачів та рукописна картографія" },
      ],
      en: [
        { id: "paper-window", number: "01", title: "The Paper Window to Distant Worlds" },
        { id: "demo-discs", number: "02", title: "The Polycarbonate Grail: Covermount Discs" },
        { id: "community-ritual", number: "03", title: "Secret Codes and Hand-Drawn Cartography" },
      ],
    },
    factBox: {
      ru: {
        title: "Эпоха игровой прессы",
        items: [
          { label: "Золотые годы", value: "1988–2002", icon: "📅" },
          { label: "Культовые издания", value: "Nintendo Power, EGM, Edge, Game.EXE", icon: "📰" },
          { label: "Приложения", value: "Пластиковые гибкие дискеты, CD-ROM", icon: "💿" },
          { label: "Тиражи", value: "Сотни тысяч экземпляров ежемесячно", icon: "📈" },
        ],
      },
      uk: {
        title: "Епоха ігрової преси",
        items: [
          { label: "Золоті роки", value: "1988–2002", icon: "📅" },
          { label: "Культові журнали", value: "Nintendo Power, EGM, Edge, Game.EXE", icon: "📰" },
          { label: "Додатки", value: "Дискети, повнорозмірні CD-ROM", icon: "💿" },
          { label: "Атмосфера", value: "Лампова журналістика до інтернету", icon: "☕" },
        ],
      },
      en: {
        title: "Print Magazine Era",
        items: [
          { label: "Golden Window", value: "1988–2002", icon: "📅" },
          { label: "Titans of Print", value: "Electronic Gaming Monthly, Nintendo Power, Edge", icon: "📰" },
          { label: "Cover Attachments", value: "Floppies, Jewel case CD-ROM demos", icon: "💿" },
          { label: "Community", value: "Reader letters, telephone tip hotlines", icon: "☎️" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "paper-window",
          title: "Бумажное окно в недосягаемые миры",
          paragraphs: [
            "До эпохи YouTube, Twitch и мгновенных трейлеров в 4K единственным мостом между игроком и индустрией была стопка глянцевых страниц. Раз в месяц свежий номер Nintendo Power, Electronic Gaming Monthly или Edge становился главным событием для миллионов подростков. Скриншоты разглядывали через увеличительное стекло, изучая каждый пиксель грядущих японских блокбастеров.",
            "Авторы игровых журналов были не просто обозревателями — они были исследователями неизвестных земель. Они летали на выставки Spaceworld и E3, вручную переводили японские интервью и делились слухами, которые передавались во дворах как священные легенды.",
          ],
          quote: {
            text: "Журнал был осязаемым артефактом. Ты ощущал запах свежей типографской краски, листал страницы на уроках и засыпал с ним под подушкой.",
            author: "Джулиан Ригналл, легендарный редактор Mean Machines",
          },
        },
        {
          id: "demo-discs",
          title: "Сокровище в конверте: магия демо-дисков",
          paragraphs: [
            "В середине 90-х журналы совершили технологический скачок, начав крепить к обложкам компакт-диски (covermount demo discs). Для обладателей первых PlayStation и ПК это было настоящее откровение. На одном диске умещались демо-версии Tony Hawk's Pro Skater, Metal Gear Solid и Tomb Raider.",
            "Нередко игроки затирали одну-единственную демо-версию до дыр, проходя вводный уровень сотни раз в ожидании зарплаты родителей или новогоднего подарка. Демо-диск обладал собственной аурой праздника.",
          ],
        },
        {
          id: "community-ritual",
          title: "Письма читателей и рукописная картография",
          paragraphs: [
            "Самым живым разделом журнала всегда была почта. Игроки присылали конверты с рисунками, вопросами о секретных комбо в Mortal Kombat и мольбами о помощи в прохождении лабиринтов Dungeon Master. Редакции вручную отвечали на тысячи писем, формируя уникальное братство единомышленников.",
            "Секретные коды вроде Konami Code, советы по спасению Аэрис и карты лабиринтов перерисовывались в школьные тетрадки. Это была эпоха совместного познания миров, которую невозможно воссоздать в эпоху мгновенного поиска в Google.",
          ],
        },
      ],
      uk: [
        {
          id: "paper-window",
          title: "Паперове вікно в недосяжні світи",
          paragraphs: [
            "До інтернету саме ігрові журнали були єдиним джерелом знань про нові ігри. Кожен новий випуск купувався із трепетом, а фотографії вивчалися до найменших деталей.",
            "Журналісти розповідали про далекі виставки в Токіо та Лос-Анджелесі, створюючи романтичний образ індустрії майбутнього.",
          ],
          quote: {
            text: "Журнал був відчутним скарбом. Його запах та глянцеві сторінки залишалися з тобою назавжди.",
            author: "Джуліан Ріґналл, редактор Mean Machines",
          },
        },
        {
          id: "demo-discs",
          title: "Скарб у конверті: магія демо-дисків",
          paragraphs: [
            "Додані до журналів компакт-диски з демо-версіями дарували можливість доторкнутися до світових хітів ще до їхнього виходу у продаж.",
            "Один рівень Metal Gear Solid чи Gran Turismo проходився десятками гравців по черзі під час домашніх посиденьок.",
          ],
        },
        {
          id: "community-ritual",
          title: "Листи читачів та рукописна картографія",
          paragraphs: [
            "Сторінки з листами читачів та порадами щодо проходження формували справжню спільноту однодумців.",
            "Секрети записувалися в окремі зошити, карти малювалися олівцями — це був час живої дослідницької магії.",
          ],
        },
      ],
      en: [
        {
          id: "paper-window",
          title: "The Paper Window to Distant Worlds",
          paragraphs: [
            "Before the era of Twitch streams and ubiquitous 4K trailers, the sole conduit between gamers and the cutting edge of electronic entertainment was the physical weight of glossy paper. Once a month, new issues of Electronic Gaming Monthly, Nintendo Power, or Edge represented seismic cultural events. Readers scrutinized thumbnail screenshots under magnifying glasses, decoding pixelated glimpses of unreleased Japanese epics.",
            "Games journalists of the 1990s were intrepid cartographers of uncharted digital continents. They journeyed to Makuhari Messe for Tokyo Game Show and Spaceworld, reporting rumors and translating designer journals that were recounted on school playgrounds like folklore.",
          ],
          quote: {
            text: "A magazine was a holy talisman. You smelled the fresh lacquer, snuck reads during algebra class, and fell asleep with it resting on your chest.",
            author: "Julian Rignall, legendary editor of Mean Machines",
          },
        },
        {
          id: "demo-discs",
          title: "The Polycarbonate Grail: Covermount Discs",
          paragraphs: [
            "In the mid-1990s, print media achieved its zenith by taping CD-ROMs directly to front covers. For owners of the original PlayStation and beige multimedia PCs, these covermount discs were pure gold. A single disc bundled interactive trials for Tony Hawk's Pro Skater, Silent Hill, or Tomb Raider.",
            "Countless kids played a single warehouse level hundreds of times across a summer vacation while saving allowances for the full retail box. The demo disc possessed an intoxicating ritualism unique to the era.",
          ],
        },
        {
          id: "community-ritual",
          title: "Secret Codes and Hand-Drawn Cartography",
          paragraphs: [
            "The beating heart of every periodical was the reader mailbag. Editorial departments received thousands of handwritten envelopes weekly, filled with colored pencil fan art, secret fatalites in Mortal Kombat, and urgent pleas for navigation tips in Metroid.",
            "Dungeon maps were meticulously drafted on gridded notebook paper, and cheat codes were exchanged like currency. It was a communal era of tactile discovery and collective wonder that the algorithmic internet can never replicate.",
          ],
        },
      ],
    },
  },

  // 13. THE NEON CATHEDRAL: RISE AND PRESERVATION OF COIN-OP ARCADES
  {
    slugs: {
      ru: "neonovye-hramy-rascvet-i-nasledie-arkadnyh-zalov",
      uk: "neonovi-hramy-rozkvit-ta-spadshchyna-arkadnyh-zaliv",
      en: "neon-cathedral-rise-and-preservation-of-coin-op-arcades",
    },
    heroImageUrl: "/images/articles/arcade-neon-hall.jpg",
    kicker: {
      ru: "КУЛЬТУРА",
      uk: "КУЛЬТУРА",
      en: "CULTURE",
    },
    title: {
      ru: "Неоновые храмы: расцвет и наследие аркадных залов на монетах",
      uk: "Неонові храми: розквіт та спадщина аркадних залів",
      en: "The Neon Cathedral: Rise and Preservation of Coin-Op Arcades",
    },
    dek: {
      ru: "Шумные залы, монеты на рамке кинескопа и зарождение киберспортивного духа соперничества: как аркады определили видеоигровую культуру.",
      uk: "Шумні зали, черги з монет на склі та зародження кіберспортивного суперництва: як аркади визначили ДНК сучасної гри.",
      en: "Crowded smoky halls, coin stacks on the bezel, and the competitive brotherhood that birthed modern esports.",
    },
    readingTimeMinutes: 14,
    publishedAt: {
      ru: "8 августа 2024",
      uk: "8 серпня 2024",
      en: "August 8, 2024",
    },
    author: {
      name: {
        ru: "Роман Васильев",
        uk: "Роман Васильєв",
        en: "Roman Vasiliev",
      },
      role: {
        ru: "Исследователь аркад",
        uk: "Дослідник аркад",
        en: "Arcade Historian",
      },
    },
    toc: {
      ru: [
        { id: "street-fighter-boom", number: "01", title: "Сто йен на кону: феномен Street Fighter II" },
        { id: "custom-silicon", number: "02", title: "Железо без компромиссов: Capcom CPS и Sega Model" },
        { id: "preservation-crusade", number: "03", title: "Битва за выживание и музейное сохранение" },
      ],
      uk: [
        { id: "street-fighter-boom", number: "01", title: "Сто єн на кону: феномен Street Fighter II" },
        { id: "custom-silicon", number: "02", title: "Залізо без компромісів: Capcom CPS та Sega Model" },
        { id: "preservation-crusade", number: "03", title: "Битва за виживання та музейне збереження" },
      ],
      en: [
        { id: "street-fighter-boom", number: "01", title: "100 Yen on the Bezel: The Fighting Revolution" },
        { id: "custom-silicon", number: "02", title: "Custom Silicon: Arcades Outpacing Consoles" },
        { id: "preservation-crusade", number: "03", title: "The Preservation Crusade and Modern Legacy" },
      ],
    },
    factBox: {
      ru: {
        title: "Золотой век аркад",
        items: [
          { label: "Пик популярности", value: "1991–1998", icon: "📅" },
          { label: "Легендарные платы", value: "Capcom CPS-2, Neo Geo MVS, Sega Model 2", icon: "🕹️" },
          { label: "Культовые центры", value: "Club Sega, Akihabara Hey, Mikado", icon: "🏮" },
          { label: "Главный ритуал", value: "Монета на экране для очереди в бой", icon: "🪙" },
        ],
      },
      uk: {
        title: "Золотий вік аркад",
        items: [
          { label: "Пік слави", value: "1991–1998", icon: "📅" },
          { label: "Відомі системи", value: "Capcom CPS-2, Neo Geo MVS, Sega Model 2", icon: "🕹️" },
          { label: "Центри культури", value: "Club Sega, Akihabara Hey, Mikado", icon: "🏮" },
          { label: "Традиція", value: "Монета на рамці екрана як право на поєдинок", icon: "🪙" },
        ],
      },
      en: {
        title: "Arcade Golden Era",
        items: [
          { label: "Apex Years", value: "1991–1998", icon: "📅" },
          { label: "Legendary Boards", value: "Capcom CPS-2, SNK Neo Geo MVS, Sega Model 2/3", icon: "🕹️" },
          { label: "Sacred Grounds", value: "Akihabara Hey, Takadanobaba Mikado, Club Sega", icon: "🏮" },
          { label: "The Code", value: "Quarter or 100-yen coin on the monitor bezel", icon: "🪙" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "street-fighter-boom",
          title: "Сто йен на кону: феномен Street Fighter II",
          paragraphs: [
            "В начале девяностых японские игровые залы пережили второе рождение благодаря одной игре — Street Fighter II: The World Warrior. Одиночное прохождение отошло на второй план. Наступила эра очного противостояния «игрок против игрока». В темных залах Токио, Лондона и Чикаго выстраивались очереди из десятков претендентов.",
            "Появился негласный этикет: чтобы занять очередь на бой с действующим чемпионом автомата, игрок клал монету достоинством 100 йен (или 25 центов) на скошенную рамку кинескопа. Побежденный уступал место следующему, а победитель мог удерживать автомат часами под одобрительный гул толпы.",
          ],
          quote: {
            text: "В аркадном зале вы играли не против машины. Вы смотрели в глаза живому сопернику, слышали стук его стика и чувствовали дыхание толпы за спиной.",
            author: "Ю Судзуки, создатель Virtua Fighter",
          },
        },
        {
          id: "custom-silicon",
          title: "Железо без компромиссов: Capcom CPS и Sega Model",
          paragraphs: [
            "Домашние консоли отставали от аркадных автоматов на целое поколение. Аркадные материнские платы не были ограничены розничной ценой в 200 долларов: операторы залов были готовы платить тысячи долларов за новейшие системные платы Capcom CPS-2, SNK Neo Geo MVS или трехмерные монстры Sega Model 2.",
            "Именно в аркадах игроки впервые увидели полигональную графику в Virtua Racing и Daytona USA с частотой 60 кадров в секунду, кинематографичные текстуры и реалистичную физику, о которых владельцы домашних 16-биток могли только мечтать.",
          ],
        },
        {
          id: "preservation-crusade",
          title: "Битва за выживание и музейное сохранение",
          paragraphs: [
            "С приходом мощных 128-битных консолей вроде Dreamcast и PS2 экономика аркад пошатнулась. Однако в Японии такие залы, как Mikado в Такаданобабе и HEY в Акихабаре, превратились в живые святилища соревновательной культуры.",
            "Сегодня сохранение аркадных автоматов — это международная борьба за спасение кинескопов, восстановление высоковольтных шасси и дампинг редких микросхем ПЗУ. Энтузиасты берегут эти неоновые соборы, потому что именно в них ковался бескомпромиссный соревновательный дух видеоигр.",
          ],
        },
      ],
      uk: [
        {
          id: "street-fighter-boom",
          title: "Сто єн на кону: феномен Street Fighter II",
          paragraphs: [
            "Street Fighter II перетворив аркадні зали на гладіаторські арени. Гравці збиралися навколо білих кабінетів Sega Astro City, щоб кинути виклик найкращим бійцям міста.",
            "Монета на рамці монітора була неписаним законом черги. Перемога вимагала сталевих нервів, витримки та миттєвої реакції.",
          ],
          quote: {
            text: "В аркадному залі ти бачив очі суперника і чув кожен рух його рук на стіку.",
            author: "Ю Судзукі, творець Virtua Fighter",
          },
        },
        {
          id: "custom-silicon",
          title: "Залізо без компромісів: Capcom CPS та Sega Model",
          paragraphs: [
            "Аркадне залізо значно випереджало домашні консолі. Системи Sega Model 2 та Capcom CPS демонстрували небачену швидкість та полігональну графіку.",
            "Daytona USA та Virtua Fighter створювали відчуття футуристичного атракціону, недосяжного вдома.",
          ],
        },
        {
          id: "preservation-crusade",
          title: "Битва за виживання та музейне збереження",
          paragraphs: [
            "Сьогодні клуби на зразок Mikado у Токіо є музеями живої соревновальної історії.",
            "Збереження аркадних машин та ЕПТ-моніторів — це місія з охорони унікальної матеріальної культури відеоігор.",
          ],
        },
      ],
      en: [
        {
          id: "street-fighter-boom",
          title: "100 Yen on the Bezel: The Fighting Revolution",
          paragraphs: [
            "In 1991, Capcom's Street Fighter II: The World Warrior sparked an unprecedented global renaissance in coin-op arcades. Single-player score attacks vanished beneath an electric frenzy of head-to-head competition. Crowds packed shoulder-to-shoulder around Japanese candy cabinets like the Sega Astro City.",
            "An unwritten social contract emerged: a prospective challenger slid a 100-yen coin (or quarter) onto the monitor's plastic bezel to reserve next match. Losers stepped aside in silence; reigning masters held court for hours amidst the cheers and shouts of spectators.",
          ],
          quote: {
            text: "In an arcade, you never played an algorithm. You faced another human soul, heard their hands slamming the stick, and felt the electric heat of the crowd.",
            author: "Yu Suzuki, creator of Virtua Fighter & OutRun",
          },
        },
        {
          id: "custom-silicon",
          title: "Custom Silicon: Arcades Outpacing Consoles",
          paragraphs: [
            "Home consoles were bound by retail price targets of $200. Arcade operators, however, readily paid thousands of dollars for cutting-edge arcade system boards. Capcom's CPS-2, SNK's cartridge-based Neo Geo MVS, and Sega's polygon-crunching Model 2 and Model 3 boards pushed compute limits that home hardware wouldn't match for half a decade.",
            "It was in Tokyo game centers that players first beheld fluid 60-frame-per-second texture-mapped 3D polygons in Virtua Fighter 2 and Daytona USA, witnessing tomorrow's future today.",
          ],
        },
        {
          id: "preservation-crusade",
          title: "The Preservation Crusade and Modern Legacy",
          paragraphs: [
            "As consumer hardware caught up with the launch of the Dreamcast and PS2, arcades receded from suburban malls. Yet in Tokyo sanctuaries like Takadanobaba Mikado and Akihabara Hey, coin-op culture evolved into living cultural temples.",
            "Today, arcade preservationists battle capacitor leakage, CRT phosphor degradation, and high-voltage chassis burnouts to keep original cathode ray tubes alive. These neon cathedrals preserve the tactile, fiercely communal soul from which modern competitive esports was born.",
          ],
        },
      ],
    },
  },

  // 14. SPACE INVADERS (1978)
  {
    slugs: {
      ru: "space-invaders-1978-arkadnaya-revolyuciya",
      uk: "space-invaders-1978-arkadna-revolyutsiya",
      en: "space-invaders-1978-arcade-revolution",
    },
    heroImageUrl: "/images/articles/space-invaders-arcade.jpg",
    kicker: {
      ru: "КУЛЬТУРА",
      uk: "КУЛЬТУРА",
      en: "CULTURE",
    },
    title: {
      ru: "Space Invaders (1978): Аркадный феномен, вызвавший дефицит 100-иеновых монет",
      uk: "Space Invaders (1978): Аркадний феномен, що створив дефіцит 100-єнових монет",
      en: "Space Invaders (1978): The Coin-Op Panic That Emptied 100-Yen Coins",
    },
    dek: {
      ru: "Одиночный инженерный подвиг Томохиро Нисикадо, породивший культуру аркадных центров и заложивший грамматику интерактивных развлечений.",
      uk: "Одиночний інженерний подвиг Томохіро Нішікадо, який започаткував еру аркадних залів та сформував основи відеоігрового геймплею.",
      en: "Tomohiro Nishikado's solitary engineering triumph that created arcade mania and codified the grammar of video game tension.",
    },
    readingTimeMinutes: 11,
    publishedAt: {
      ru: "05 АВГ 2024",
      uk: "05 СЕРП 2024",
      en: "AUG 05, 2024",
    },
    author: {
      name: { ru: "Алексей Соколов", uk: "Олексій Соколов", en: "Alexei Sokolov" },
      role: {
        ru: "Архивист аркадной индустрии",
        uk: "Архівіст аркадної індустрії",
        en: "Arcade Preservation Lead",
      },
    },
    toc: {
      ru: [
        { id: "nishikado-engineering", number: "01", title: "Инженерное чудо Нисикадо" },
        { id: "accidental-difficulty-curve", number: "02", title: "Случайный закон динамической сложности" },
        { id: "cultural-tsunami", number: "03", title: "Культурное цунами и Invader House" },
      ],
      uk: [
        { id: "nishikado-engineering", number: "01", title: "Інженерне диво Нішікадо" },
        { id: "accidental-difficulty-curve", number: "02", title: "Випадковий закон динамічної складності" },
        { id: "cultural-tsunami", number: "03", title: "Культурне цунамі та Invader House" },
      ],
      en: [
        { id: "nishikado-engineering", number: "01", title: "Nishikado's Custom Microcomputer" },
        { id: "accidental-difficulty-curve", number: "02", title: "The Accidental Dynamic Difficulty Curve" },
        { id: "cultural-tsunami", number: "03", title: "The 100-Yen Cultural Tsunami" },
      ],
    },
    factBox: {
      ru: {
        title: "ПАСПОРТ АРКАДЫ",
        items: [
          { label: "Год выпуска", value: "1978" },
          { label: "Разработчик", value: "Томохиро Нисикадо (Taito)" },
          { label: "Процессор", value: "Intel 8080 @ 1.99 МГц" },
          { label: "Звук", value: "Аналоговые схемы на SN76477" },
          { label: "Тираж автоматов", value: "Более 360 000 кабин" },
        ],
      },
      uk: {
        title: "ПАСПОРТ АРКАДИ",
        items: [
          { label: "Рік випуску", value: "1978" },
          { label: "Розробник", value: "Томохіро Нішікадо (Taito)" },
          { label: "Процесор", value: "Intel 8080 @ 1.99 МГц" },
          { label: "Звук", value: "Аналогові контури на SN76477" },
          { label: "Наклад автоматів", value: "Понад 360 000 кабінетів" },
        ],
      },
      en: {
        title: "ARCADE SPEC SHEET",
        items: [
          { label: "Release Year", value: "1978" },
          { label: "Creator", value: "Tomohiro Nishikado (Taito)" },
          { label: "CPU", value: "Intel 8080 @ 1.99 MHz" },
          { label: "Sound", value: "Discrete analog synthesis + SN76477" },
          { label: "Cabinet Production", value: "Over 360,000 units" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "nishikado-engineering",
          title: "Инженерное чудо Нисикадо: Железо, созданное вручную",
          paragraphs: [
            "До 1978 года японские аркадные автоматы строились на дискретной транзисторно-транзисторной логике (TTL), не способной отображать сложные анимированные спрайты. Инженер Taito Томохиро Нисикадо осознал: чтобы воплотить идею наступления орды пришельцев, ему нужен настоящий микропроцессор.",
            "Поскольку в Японии не существовало готовых девелоперских комплектов для Intel 8080, Нисикадо в одиночку разработал компьютерную плату, спаял видеоадаптер с растровым буфером кадра и написал на ассемблере собственные инструменты отладки.",
          ],
          quote: {
            text: "Самым тяжелым было не программирование игры, а создание самого компьютера с нуля, чтобы он вообще мог нарисовать хотя бы одного движущегося пришельца.",
            author: "Томохиро Нисикадо, создатель Space Invaders",
          },
        },
        {
          id: "accidental-difficulty-curve",
          title: "Случайный закон динамической сложности",
          paragraphs: [
            "Знаменитое ускорение пришельцев по мере их уничтожения возникло вовсе не из геймдизайнерского плана, а из аппаратных ограничений процессора Intel 8080. Когда на экране находились все 55 пришельцев, процессору не хватало тактов для быстрой отрисовки спрайтов, и игра двигалась медленно.",
            "Однако по мере того как игрок расстреливал захватчиков, процессору требовалось обновлять все меньше пикселей. Оставшиеся монстры начинали двигаться стремительно, а четырехнотный басовый ритм звучал всё быстрее, создавая невыносимое психологическое напряжение.",
          ],
        },
        {
          id: "cultural-tsunami",
          title: "Культурное цунами и токийские Invader House",
          paragraphs: [
            "Успех Space Invaders потряс экономику Японии. По всей стране открывались специализированные залы Invader House, где стояли десятки одинаковых автоматов. Монетные ящики переполнялись настолько быстро, что инкассаторам Taito приходилось вывозить 100-иеновые монеты грузовиками.",
            "Игра заложила фундаментальные концепции игровой индустрии: рекордный счет (Hi-Score), шкалу жизней, укрытия, разрушаемые выстрелами, и нарастающее аудиосопровождение, превратив видеоигры в глобальный социокультурный феномен.",
          ],
        },
      ],
      uk: [
        {
          id: "nishikado-engineering",
          title: "Інженерне диво Нішікадо: Залізо, створене власноруч",
          paragraphs: [
            "До 1978 року аркадні автомати будувалися на дискретній логіці без можливості гнучкої анімації десятків об'єктів. Інженер компанії Taito Томохіро Нішікадо вирішив застосувати новітній 8-бітний мікропроцесор Intel 8080.",
            "Через відсутність готових інженерних платформ у Японії, Нішікадо самотужки спроєктував апаратну плату, розробив графічний кадровий буфер та написав асемблерний компілятор.",
          ],
          quote: {
            text: "Найскладнішим завданням було створити мікрокомп'ютер з нуля, аби змусити десятки спрайтів рухатися на екрані.",
            author: "Томохіро Нішікадо, автор Space Invaders",
          },
        },
        {
          id: "accidental-difficulty-curve",
          title: "Випадковий закон динамічної складності",
          paragraphs: [
            "Легендарне прискорення ворогів виникло як наслідок процесорного навантаження: коли на екрані було 55 інопланетян, чип не встигав оновлювати картинку і рух був повільним.",
            "Коли ж гравець знищував частину армії, навантаження спадало, і залишки прибульців миттєво прискорювалися. Звуковий ритм набирав темп серцебиття, створюючи шалений адреналін.",
          ],
        },
        {
          id: "cultural-tsunami",
          title: "Культурне цунамі та токійські Invader House",
          paragraphs: [
            "По всій Японії з'явилися сотні клубів Invader House. Банк Японії зафіксував колосальний оборот монет номіналом 100 єн, а Taito заробила сотні мільйонів доларів.",
            "Гра сформувала канони сучасного геймдизайну: таблицю рекордів, поняття життів гравця та інтерактивні укриття, що руйнуються від влучань.",
          ],
        },
      ],
      en: [
        {
          id: "nishikado-engineering",
          title: "Nishikado's Custom Microcomputer: Hardware Built by Hand",
          paragraphs: [
            "Prior to 1978, arcade cabinets operated on rigid, hard-wired transistor-transistor logic (TTL) incapable of processing dozens of autonomous animated enemies. Taito engineer Tomohiro Nishikado realized that rendering an invading alien fleet required a programmable microprocessor.",
            "Because development workstations for the Intel 8080 were virtually nonexistent in Japan, Nishikado designed his own microcomputer mainboard from raw chips, hand-soldered a bitmapped video frame buffer, and hand-coded assembly routines from scratch.",
          ],
          quote: {
            text: "The hardest part was not designing the game itself, but inventing the entire computer architecture so it could draw even a single moving alien sprite.",
            author: "Tomohiro Nishikado, creator of Space Invaders",
          },
        },
        {
          id: "accidental-difficulty-curve",
          title: "The Accidental Dynamic Difficulty Curve",
          paragraphs: [
            "The iconic acceleration of the alien horde was never an intentional design flourish—it was a miraculous byproduct of computational bottlenecks. With all 55 invaders alive, the 8080 CPU struggled to render each frame, resulting in slow, rhythmic advance.",
            "As the player picked off targets, the processing burden decreased, allowing the system to update the display faster. The fewer invaders remained, the more ferocious their velocity became, perfectly synchronizing with an escalating four-note heartbeat soundtrack.",
          ],
        },
        {
          id: "cultural-tsunami",
          title: "The 100-Yen Cultural Tsunami",
          paragraphs: [
            "Space Invaders transformed Japan overnight. Dedicated 'Invader Houses' packed with rows of tabletop cocktail cabinets sprang up across Tokyo, causing an unprecedented circulation shortage of 100-yen coins.",
            "Nishikado's breakthrough codified the grammar of video games: high-score chase, destructible defensive bunkers, escalating peril, and an interactive soundtrack that responded directly to on-screen tension.",
          ],
        },
      ],
    },
  },

  // 15. PONG & MAGNAVOX ODYSSEY (1972)
  {
    slugs: {
      ru: "pong-i-magnavox-odyssey-rozhdenie-domashnih-videoigr",
      uk: "pong-ta-magnavox-odyssey-narodzhennya-domashnih-igor",
      en: "pong-and-magnavox-odyssey-tv-gaming-birth",
    },
    heroImageUrl: "/images/articles/pong-magnavox-odyssey.jpg",
    kicker: {
      ru: "КОНСОЛИ",
      uk: "КОНСОЛІ",
      en: "CONSOLES",
    },
    title: {
      ru: "Pong и Magnavox Odyssey: Как домашний телевизор стал игровой ареной",
      uk: "Pong та Magnavox Odyssey: Як екран телевізора став ігровим полем",
      en: "Pong & Magnavox Odyssey: How the Living Room TV Became an Interactive Screen",
    },
    dek: {
      ru: "От «Коричневой коробки» Ральфа Баера до монетного автомата Нолана Бушнелла: хроника зарождения индустрии видеоигр.",
      uk: "Від коричневої коробки Ральфа Баєра до комерційного тріумфу Atari: історія народження домашніх консолей.",
      en: "From Ralph Baer's Brown Box to Nolan Bushnell's coin-op machine: how electronic table tennis ignited consumer gaming.",
    },
    readingTimeMinutes: 10,
    publishedAt: {
      ru: "03 АВГ 2024",
      uk: "03 СЕРП 2024",
      en: "AUG 03, 2024",
    },
    author: {
      name: { ru: "Дмитрий Морозов", uk: "Дмитро Морозов", en: "Dmitry Morozov" },
      role: {
        ru: "Историк ранних консолей",
        uk: "Історик ранніх консолей",
        en: "First-Gen Console Historian",
      },
    },
    toc: {
      ru: [
        { id: "baer-brown-box", number: "01", title: "«Коричневая коробка» Ральфа Баера" },
        { id: "bushnell-andy-capps-tavern", number: "02", title: "Нолан Бушнелл и таверна Энди Кэппа" },
        { id: "legal-battle-and-home-pong", number: "03", title: "Судебная тяжба и домашний Pong" },
      ],
      uk: [
        { id: "baer-brown-box", number: "01", title: "«Коричнева коробка» Ральфа Баєра" },
        { id: "bushnell-andy-capps-tavern", number: "02", title: "Нолан Бушнелл і таверна Енді Кеппа" },
        { id: "legal-battle-and-home-pong", number: "03", title: "Судова угода та домашній Pong" },
      ],
      en: [
        { id: "baer-brown-box", number: "01", title: "Ralph Baer's Brown Box" },
        { id: "bushnell-andy-capps-tavern", number: "02", title: "Nolan Bushnell & Andy Capp's Tavern" },
        { id: "legal-battle-and-home-pong", number: "03", title: "The Licensing Feud & Home Pong" },
      ],
    },
    factBox: {
      ru: {
        title: "ИСТОРИЧЕСКИЙ ПАСПОРТ",
        items: [
          { label: "Год запуска Odyssey", value: "1972" },
          { label: "Год автомата Pong", value: "1972 (Atari)" },
          { label: "Изобретатель Odyssey", value: "Ральф Баер (Sanders Associates)" },
          { label: "Создатель Pong", value: "Ал Алкорн & Нолан Бушнелл" },
          { label: "Аппаратная база", value: "Дискретная транзисторная логика (без CPU)" },
        ],
      },
      uk: {
        title: "ІСТОРИЧНИЙ ПАСПОРТ",
        items: [
          { label: "Рік запуску Odyssey", value: "1972" },
          { label: "Рік автомата Pong", value: "1972 (Atari)" },
          { label: "Винахідник Odyssey", value: "Ральф Баєр (Sanders Associates)" },
          { label: "Творець Pong", value: "Ал Алкорн та Нолан Бушнелл" },
          { label: "Апаратна база", value: "Дискретна транзисторна логіка (без CPU)" },
        ],
      },
      en: {
        title: "HISTORICAL DOSSIER",
        items: [
          { label: "Odyssey Launch", value: "1972" },
          { label: "Pong Arcade Launch", value: "1972 (Atari)" },
          { label: "Odyssey Pioneer", value: "Ralph Baer (Sanders Associates)" },
          { label: "Pong Engineer", value: "Allan Alcorn & Nolan Bushnell" },
          { label: "Hardware Architecture", value: "Discrete diode-transistor logic (no CPU)" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "baer-brown-box",
          title: "«Коричневая коробка» Ральфа Баера: Рождение домашней приставки",
          paragraphs: [
            "В 1966 году инженер оборонной корпорации Sanders Associates Ральф Баер задался революционным вопросом: почему миллионы американских телевизоров используются исключительно как пассивные приемники сигнала, а не как интерактивный экран?",
            "Вместе с Биллом Харрисоном и Биллом Рушем Баер разработал прототип «Brown Box». Консоль не содержала микропроцессоров — изображение генерировалось десятками транзисторов и диодов, а графика имитировалась с помощью прозрачных цветных виниловых накладок на экран телевизора.",
          ],
          quote: {
            text: "В тот момент, когда мы впервые смогли управлять светящейся точкой на экране телевизора с помощью ручки потенциометра, родилась целая индустрия.",
            author: "Ральф Баер, отец видеоигр",
          },
        },
        {
          id: "bushnell-andy-capps-tavern",
          title: "Нолан Бушнелл, Ал Алкорн и переполненная монетница в Саннивейле",
          paragraphs: [
            "Осенью 1972 года основатель молодой компании Atari Нолан Бушнелл поручил начинающему инженеру Алу Алкорну тестовое задание: собрать простейший электронный настольный теннис со звуком удара ракетки.",
            "Прототип установили в таверне Andy Capp's в калифорнийском городке Саннивейл. Через две недели владелец бара в панике позвонил Алкорну: автомат сломался. Прибыв на место, инженер обнаружил, что автомат исправен — просто бумажный стаканчик для 25-центовых монет переполнился, и монеты закоротили монетоприемник.",
          ],
        },
        {
          id: "legal-battle-and-home-pong",
          title: "Судебная тяжба и триумф домашнего чипа Home Pong",
          paragraphs: [
            "Увидев ошеломительный успех Pong, Magnavox подала в суд на Atari за нарушение патентов Баера. Нолан Бушнелл предпочел пойти на мировое соглашение, выплатив 700 000 долларов за лицензию, что открыло Atari путь к созданию специализированного чипа Home Pong.",
            "К Рождеству 1975 года сеть супермаркетов Sears заказала 150 000 приставок Home Pong, навсегда сделав видеоигры обязательным атрибутом домашнего досуга.",
          ],
        },
      ],
      uk: [
        {
          id: "baer-brown-box",
          title: "«Коричнева коробка» Ральфа Баєра: Народження домашньої приставки",
          paragraphs: [
            "У середині 1960-х інженер Ральф Баєр сформулював концепцію використання звичайного домашнього телевізора для інтерактивних ігор.",
            "Розроблена ним Magnavox Odyssey працювала на дискретній транзисторній логіці без мікропроцесорів, а кольорові фони накладалися у вигляді прозорих плівок прямо на скло кінескопа.",
          ],
          quote: {
            text: "Той день, коли ми змістили світлову точку на екрані звичайного телевізора, став початком нової епохи.",
            author: "Ральф Баєр",
          },
        },
        {
          id: "bushnell-andy-capps-tavern",
          title: "Нолан Бушнелл, Ал Алкорн та переповнена монетниця в барі",
          paragraphs: [
            "Молода компанія Atari у 1972 році створила монетоприймальний автомат Pong. Встановлений у барі Andy Capp's Tavern апарат зламався через два тижні не від збоїв, а через те, що бак для четвертаків переповнився монетами.",
            "Простота правил, захоплюючий геймплей та приємний звук відскоку м'яча перетворили Pong на глобальний культурний символ.",
          ],
        },
        {
          id: "legal-battle-and-home-pong",
          title: "Судова угода та тріумф домашнього чіпа Home Pong",
          paragraphs: [
            "Atari ліцензувала патенти Баєра і у 1975 році випустила портативний чип для домашньої версії Home Pong через торговельну мережу Sears.",
            "Це стало початком масового поширення відеоігор у домівках мільйонів родин по всьому світу.",
          ],
        },
      ],
      en: [
        {
          id: "baer-brown-box",
          title: "Ralph Baer's Brown Box: Turning the Television Interactive",
          paragraphs: [
            "In 1966, Sanders Associates defense engineer Ralph Baer posed a radical question: why should millions of living room television sets remain passive broadcast receivers rather than interactive digital playfields?",
            "Collaborating with Bill Harrison and Bill Rusch, Baer developed the 'Brown Box.' Constructed entirely from discrete transistors and diodes without a central processor, it relied on transparent printed vinyl plastic overlays clinging to the CRT screen by static electricity.",
          ],
          quote: {
            text: "The moment we managed to manipulate a glowing dot across a common television screen with a potentiometer knob, an entirely new industry was born.",
            author: "Ralph Baer, father of video games",
          },
        },
        {
          id: "bushnell-andy-capps-tavern",
          title: "Nolan Bushnell, Allan Alcorn & the Overflowing Coin Cup",
          paragraphs: [
            "In late 1972, Atari co-founder Nolan Bushnell tasked young recruit Allan Alcorn with a hardware warm-up exercise: design a coin-operated electronic table tennis game with sharp deflection physics and realistic audio bleeps.",
            "They field-tested the prototype at Andy Capp's Tavern in Sunnyvale, California. Within two weeks, the bar owner called complaining the cabinet had broken down. Alcorn arrived to discover the mechanism was fine—the milk carton collecting 25-cent quarters had overflowed and shorted the coin switch.",
          ],
        },
        {
          id: "legal-battle-and-home-pong",
          title: "The Licensing Feud & the Home Pong Microchip",
          paragraphs: [
            "Faced with a patent infringement lawsuit from Magnavox, Bushnell prudently settled for a $700,000 paid-up license, granting Atari free rein to miniaturize the circuitry into an integrated CMOS microchip: Home Pong.",
            "Sears department stores ordered 150,000 units for Christmas 1975, establishing video gaming as a permanent fixture of living room entertainment.",
          ],
        },
      ],
    },
  },

  // 16. ATARI 2600 VCS (1977)
  {
    slugs: {
      ru: "atari-2600-vcs-derevyannaya-konsol-revolyuciya",
      uk: "atari-2600-vcs-derevyana-konsol-revolyutsiya",
      en: "atari-2600-vcs-woodgrain-console-revolution",
    },
    heroImageUrl: "/images/articles/atari-2600-console.jpg",
    kicker: {
      ru: "КОНСОЛИ",
      uk: "КОНСОЛІ",
      en: "CONSOLES",
    },
    title: {
      ru: "Atari 2600 VCS (1977): Консоль с отделкой под дерево, начавшая эру картриджей",
      uk: "Atari 2600 VCS (1977): Дерев'яна консоль, яка започаткувала еру картриджів",
      en: "Atari 2600 VCS (1977): The Wood-Grain Console That Started the Home Revolution",
    },
    dek: {
      ru: "Сменные картриджи, микросхема TIA, 128 байт оперативной памяти и первый массовый джойстик, покорившие гостиные всего мира.",
      uk: "Змінні картриджі, чип TIA, 128 байтів пам'яті та культовий джойстик, що змінили домашні розваги назавжди.",
      en: "Swappable ROM cartridges, the miraculous TIA chip with 128 bytes of RAM, and the single-button CX40 joystick that conquered the world.",
    },
    readingTimeMinutes: 13,
    publishedAt: {
      ru: "02 АВГ 2024",
      uk: "02 СЕРП 2024",
      en: "AUG 02, 2024",
    },
    author: {
      name: { ru: "Сергей Лазарев", uk: "Сергій Лазарєв", en: "Sergei Lazarev" },
      role: {
        ru: "Исследователь микропроцессорных систем",
        uk: "Дослідник мікропроцесорних систем",
        en: "Vintage Hardware Specialist",
      },
    },
    toc: {
      ru: [
        { id: "engineering-128-bytes", number: "01", title: "Чудо 128 байт ОЗУ и чип TIA" },
        { id: "killer-app-space-invaders", number: "02", title: "Space Invaders как killer-app" },
        { id: "hubris-and-the-1983-crash", number: "03", title: "Кризис 1983 года и пустыня Аламогордо" },
      ],
      uk: [
        { id: "engineering-128-bytes", number: "01", title: "Диво 128 байтів пам'яті та чип TIA" },
        { id: "killer-app-space-invaders", number: "02", title: "Space Invaders як головний рушій продажів" },
        { id: "hubris-and-the-1983-crash", number: "03", title: "Криза 1983 року та пустеля Аламогордо" },
      ],
      en: [
        { id: "engineering-128-bytes", number: "01", title: "The 128-Byte RAM Miracle & the TIA Chip" },
        { id: "killer-app-space-invaders", number: "02", title: "Space Invaders: The First Killer App" },
        { id: "hubris-and-the-1983-crash", number: "03", title: "Corporate Hubris & the 1983 Crash" },
      ],
    },
    factBox: {
      ru: {
        title: "ТЕХНИЧЕСКИЙ ПАСПОРТ",
        items: [
          { label: "Год выпуска", value: "Сентябрь 1977" },
          { label: "Процессор", value: "MOS Technology 6507 @ 1.19 МГц" },
          { label: "Оперативная память", value: "128 байт (в чипе RIOT)" },
          { label: "Видеоадаптер", value: "Кастомный чип TIA" },
          { label: "Мировые продажи", value: "Около 30 миллионов штук" },
        ],
      },
      uk: {
        title: "ТЕХНІЧНИЙ ПАСПОРТ",
        items: [
          { label: "Рік випуску", value: "Вересень 1977" },
          { label: "Процесор", value: "MOS Technology 6507 @ 1.19 МГц" },
          { label: "Оперативна пам'ять", value: "128 байтів (у чипі RIOT)" },
          { label: "Відеочип", value: "Кастомний TIA" },
          { label: "Світові продажі", value: "Близько 30 мільйонів штук" },
        ],
      },
      en: {
        title: "HARDWARE DOSSIER",
        items: [
          { label: "Launch Date", value: "September 1977" },
          { label: "CPU", value: "MOS Technology 6507 @ 1.19 MHz" },
          { label: "System RAM", value: "128 bytes (within RIOT 6532)" },
          { label: "Display Adapter", value: "Custom Television Interface Adaptor (TIA)" },
          { label: "Worldwide Sales", value: "Approx. 30 million units" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "engineering-128-bytes",
          title: "Чудо 128 байт ОЗУ: Программирование «на лету луча»",
          paragraphs: [
            "Созданная под кодовым именем «Stella» инженерами Джеем Майнером и Джо Декюиром, приставка Atari VCS 2600 была шедевром аппаратной экономии. Чтобы снизить себестоимость до приемлемых $199, приставку лишили экранного буфера памяти.",
            "В системе было всего 128 байт оперативной памяти. Программистам приходилось в буквальном смысле «гоняться за электронным лучом» (racing the beam): код должен был за считанные микросекунды горизонтального обратного хода луча успеть загрузить в регистры чипа TIA цвета и формы спрайтов для каждой строки развертки кинескопа.",
          ],
          quote: {
            text: "Программирование для 2600 было похоже на жонглирование горящими факелами на канате: если ты опоздал хотя бы на один такт процессора, картинка на экране рвалась и дрожала.",
            author: "Дэвид Крейн, сооснователь Activision и создатель Pitfall!",
          },
        },
        {
          id: "killer-app-space-invaders",
          title: "Space Invaders: Рождение концепции Killer-App",
          paragraphs: [
            "Первые два года продажи консоли шли сдержанно. Но в 1980 году Atari совершила историческую сделку, выкупив у Taito эксклюзивные права на домашнюю версию Space Invaders.",
            "Порт Рика Маурера стал первой в истории игрой, ради которой люди покупали саму консоль. Продажи Atari 2600 удвоились, превысив 2 миллиона штук за один год, и принесли Warner Communications баснословные прибыли.",
          ],
        },
        {
          id: "hubris-and-the-1983-crash",
          title: "Корпоративная жадность, крах 1983 года и пустыня Аламогордо",
          paragraphs: [
            "Взрывной успех породил опасную иллюзию: руководство Atari полагало, что публика проглотит любую низкопробную поделку. Спешная разработка адаптации фильма Стивена Спилберга E.T. the Extra-Terrestrial всего за пять недель и катастрофический порт Pac-Man переполнили склады непроданными картриджами.",
            "Рынок рухнул в 1983 году. Миллионы бракованных и возвращенных картриджей были тайно вывезены грузовиками и закатаны в бетон на свалке в Аламогордо, штат Нью-Мексико, ознаменовав конец первой золотой эры консолей.",
          ],
        },
      ],
      uk: [
        {
          id: "engineering-128-bytes",
          title: "Диво 128 байтів пам'яті: Програмування на швидкості променя",
          paragraphs: [
            "Atari 2600 VCS створювалася з метою максимального здешевлення компонентів. Консоль взагалі не мала кадрового буфера — усе зображення формувалося чипом TIA на льоту синхронно з рухом електронного променя кінескопа.",
            "Маючи в розпорядженні лише 128 байтів оперативної пам'яті, розробники здійснювали справжні інженерні дива, малюючи складні світи за допомогою ювелірної оптимізації на асемблері.",
          ],
          quote: {
            text: "Кожен такт процесора був на вагу золота. Якщо ви помилялися на один цикл, екран спотворювався.",
            author: "Девід Крейн, творець Pitfall!",
          },
        },
        {
          id: "killer-app-space-invaders",
          title: "Space Invaders: Перший систем-селлер в історії",
          paragraphs: [
            "Ліцензування аркадного хіта Space Invaders у 1980 році підірвало продажі: люди шикувалися в черги за приставкою лише заради того, аби грати в улюблену аркаду у себе у вітальні.",
            "Це закріпило статус картриджів як основного носія домашніх інтерактивних розваг.",
          ],
        },
        {
          id: "hubris-and-the-1983-crash",
          title: "Криза 1983 року та таємниця пустелі Аламогордо",
          paragraphs: [
            "Перенасичення ринку низькоякісними проєктами, поспішний реліз E.T. та слабкий порт Pac-Man призвели до грандіозного обвалу індустрії у 1983 році.",
            "Мільйони непроданих картриджів були закопані в пустелі Нью-Мексико, підбивши риску під першим етапом американського консольного панування.",
          ],
        },
      ],
      en: [
        {
          id: "engineering-128-bytes",
          title: "The 128-Byte RAM Miracle: Racing the Electron Beam",
          paragraphs: [
            "Conceived under project code-name 'Stella' by visionary engineers Jay Miner and Joe Decuir, the Atari VCS 2600 was a marvel of cost-constrained engineering. To hit the $199 consumer target, the system was stripped of a costly video frame buffer.",
            "Endowed with an astonishingly modest 128 bytes of RAM, programmers were forced into 'racing the beam': updating the Television Interface Adaptor's (TIA) sprite registers microsecond by microsecond during the CRT's horizontal blanking interval before the cathode ray scanned the next line of phosphor.",
          ],
          quote: {
            text: "Programming the 2600 felt like juggling flaming torches on a high wire: miss a single machine cycle, and your screen image fractured into visual noise.",
            author: "David Crane, co-founder of Activision and creator of Pitfall!",
          },
        },
        {
          id: "killer-app-space-invaders",
          title: "Space Invaders: The Genesis of the Killer App",
          paragraphs: [
            "Initial VCS sales were modest until 1980, when Atari executive vice president Ray Kassar secured exclusive home licensing rights to Taito's arcade sensation Space Invaders.",
            "Rick Maurer's faithful conversion became the industry's first true hardware driver. System sales doubled instantly to over two million units in 1980 alone, establishing the swappable ROM cartridge as a staple of global living rooms.",
          ],
        },
        {
          id: "hubris-and-the-1983-crash",
          title: "Corporate Hubris, the 1983 Crash & the Alamogordo Landfill",
          paragraphs: [
            "Explosive growth fostered toxic corporate complacency. Atari management flooded distribution pipelines with unchecked shovelware, climaxing in the disastrous six-week crunch adaptation of Steven Spielberg's E.T. and an atrocious Pac-Man port.",
            "Consumer trust collapsed into the catastrophic Video Game Crash of 1983. In September 1983, truckloads of unsold cartridges were famously buried and paved over in concrete at a municipal landfill in Alamogordo, New Mexico.",
          ],
        },
      ],
    },
  },

  // 17. FAMICOM & NES (1983)
  {
    slugs: {
      ru: "arhitektura-famicom-i-nes-spasenie-industrii",
      uk: "arhitektura-famicom-ta-nes-poryatunok-industriyi",
      en: "famicom-and-nes-architecture-industry-rebirth",
    },
    heroImageUrl: "/images/articles/nes-famicom-console.jpg",
    kicker: {
      ru: "ИСТОРИЯ СОЗДАНИЯ",
      uk: "ІСТОРІЯ СТВОРЕННЯ",
      en: "DEV HISTORY",
    },
    title: {
      ru: "Архитектура Famicom и NES: Как Nintendo спасла индустрию после краха 1983 года",
      uk: "Архітектура Famicom та NES: Як Nintendo врятувала індустрію після краху 1983 року",
      en: "Famicom & NES Architecture: How Nintendo Saved the Industry After the 1983 Crash",
    },
    dek: {
      ru: "Строгий контроль качества, звуковой процессор 2A03, чип безопасности 10NES и геймдизайн Сигэру Миямото, вернувшие доверие к домашним видеоиграм.",
      uk: "Суворий контроль якості, звуковий чип 2A03, чип безпеки 10NES та геній Сігеру Міямото, що відродили світову індустрію.",
      en: "Strict quality licensing, the Ricoh 2A03 audio core, the 10NES lockout chip, and Shigeru Miyamoto's creative renaissance.",
    },
    readingTimeMinutes: 15,
    publishedAt: {
      ru: "08 АВГ 2024",
      uk: "08 СЕРП 2024",
      en: "AUG 08, 2024",
    },
    author: {
      name: { ru: "Михаил Васильев", uk: "Михайло Васильєв", en: "Mikhail Vasiliev" },
      role: {
        ru: "Архитектурный аналитик",
        uk: "Архітектурний аналітик",
        en: "Retro Computing Specialist",
      },
    },
    toc: {
      ru: [
        { id: "masayuki-uemura-vision", number: "01", title: "Директива Ямаути и визия Масаюки Уэмуры" },
        { id: "audio-and-picture-processing", number: "02", title: "Чипы PPU и 2A03: Магия аппаратного скроллинга" },
        { id: "saving-the-western-market", number: "03", title: "Перерождение в NES и печать качества" },
      ],
      uk: [
        { id: "masayuki-uemura-vision", number: "01", title: "Директива Ямауті та бачення Масаюкі Уемури" },
        { id: "audio-and-picture-processing", number: "02", title: "Чипи PPU та 2A03: Магія апаратного скролінгу" },
        { id: "saving-the-western-market", number: "03", title: "Переродження в NES та Золота печатка якості" },
      ],
      en: [
        { id: "masayuki-uemura-vision", number: "01", title: "Yamauchi's Mandate & Masayuki Uemura" },
        { id: "audio-and-picture-processing", number: "02", title: "The PPU & 2A03: Hardware Smooth Scrolling" },
        { id: "saving-the-western-market", number: "03", title: "The NES Disguise & Seal of Quality" },
      ],
    },
    factBox: {
      ru: {
        title: "ТЕХНИЧЕСКИЙ ПАСПОРТ",
        items: [
          { label: "Запуск Famicom", value: "15 июля 1983 (Япония)" },
          { label: "Запуск NES", value: "18 октября 1985 (США)" },
          { label: "Процессор", value: "Ricoh 2A03 (клон 6502) @ 1.79 МГц" },
          { label: "Графика", value: "Ricoh 2C02 PPU (256x240, 64 спрайта)" },
          { label: "Суммарные продажи", value: "61.91 млн консолей" },
        ],
      },
      uk: {
        title: "ТЕХНІЧНИЙ ПАСПОРТ",
        items: [
          { label: "Реліз Famicom", value: "15 липня 1983 (Японія)" },
          { label: "Реліз NES", value: "18 жовтня 1985 (США)" },
          { label: "Процесор", value: "Ricoh 2A03 (ядро 6502) @ 1.79 МГц" },
          { label: "Графічний чип", value: "Ricoh 2C02 PPU (256x240, 64 спрайти)" },
          { label: "Сукупні продажі", value: "61.91 млн систем" },
        ],
      },
      en: {
        title: "HARDWARE SPECIFICATIONS",
        items: [
          { label: "Famicom Launch", value: "July 15, 1983 (Japan)" },
          { label: "NES Launch", value: "October 18, 1985 (North America)" },
          { label: "CPU", value: "Ricoh 2A03 (MOS 6502 core) @ 1.79 MHz" },
          { label: "Video", value: "Ricoh 2C02 PPU (256x240, 64 sprites)" },
          { label: "Lifetime Sales", value: "61.91 million consoles" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "masayuki-uemura-vision",
          title: "Директива Ямаути и визия Масаюки Уэмуры",
          paragraphs: [
            "В 1981 году президент Nintendo Хироси Ямаути вызвал к себе ведущего инженера отдела R&D2 Масаюки Уэмуру и поставил ультимативную задачу: разработать домашнюю приставку за 9800 иен с графикой, которую ни один конкурент не сможет повторить в течение трех лет.",
            "Уэмура отказался от модного 16-битного чипа Motorola 68000 из-за его дороговизны и обратился к Ricoh. Вместе они модернизировали проверенное 8-битное ядро 6502, интегрировав 5-канальный звуковой синтезатор и разработав специализированный графический процессор PPU.",
          ],
          quote: {
            text: "Ямаути сказал мне: 'Сделай систему, которая не устареет до конца десятилетия'. Мы проектировали Famicom не как игрушку, а как бескомпромиссную аркадную станцию для гостиной.",
            author: "Масаюки Уэмура, главный архитектор Famicom",
          },
        },
        {
          id: "audio-and-picture-processing",
          title: "Чипы PPU и 2A03: Магия аппаратного скроллинга",
          paragraphs: [
            "Секрет превосходства Famicom крылся в Picture Processing Unit (PPU 2C02). В отличие от западных систем, PPU аппаратно поддерживал тайловую графику и бесшовный попиксельный скроллинг фона. Именно это позволило Сигэру Миямото создать монументальный мир Super Mario Bros.",
            "Звуковой чип 2A03 с двумя прямоугольными каналами, треугольной басовой волной, генератором белого шума и 1-битным PCM-декодером определил неповторимое 8-битное звучание Кодзи Кондо, навсегда ставшее золотым каноном игровой музыки.",
          ],
        },
        {
          id: "saving-the-western-market",
          title: "Перерождение в NES и спасение западного рынка",
          paragraphs: [
            "Когда Nintendo привезла консоль в США после краха 1983 года, магазины отказывались брать любые «видеоигры». Nintendo пошла на гениальный маскировочный ход: консоль переименовали в Nintendo Entertainment System, корпус стилизовали под кассетный видеомагнитофон с фронтальной загрузкой, а в комплект включили робота R.O.B. и световой пистолет Zapper.",
            "Чтобы предотвратить наводнение рынка низкопробными играми, Nintendo установила в картриджи чип аутентификации 10NES и ввела строгое квотирование: не более 5 игр в год от одного стороннего издателя, отмеченных знаком Nintendo Seal of Quality. Это вернуло индустрии доверие родителей и возродило консольный бизнес во всем мире.",
          ],
        },
      ],
      uk: [
        {
          id: "masayuki-uemura-vision",
          title: "Директива Ямауті та бачення Масаюкі Уемури",
          paragraphs: [
            "Президент Nintendo Хіросі Ямауті поставив інженеру Масаюкі Уемурі мету: створити сімейну консоль, здатну випереджати конкурентів щонайменше три роки за ціни менше 10 000 єн.",
            "Уемура уклав стратегічне партнерство з Ricoh для кастомного чипсета на базі ядра 6502 та створення унікального графічного процесора PPU.",
          ],
          quote: {
            text: "Ми створили залізо, яке перетворило домашній телевізор на справжній аркадний автомат.",
            author: "Масаюкі Уемура",
          },
        },
        {
          id: "audio-and-picture-processing",
          title: "Чипи PPU та 2A03: Магія апаратного скролінгу",
          paragraphs: [
            "Графічний співпроцесор PPU забезпечив плавний попіксельний горизонтальний скролінг, що дозволило реалізувати легендарний дизайн Super Mario Bros.",
            "5-канальний аудіочип подарував світові безсмертні мелодії Кодзі Кондо до Mario та The Legend of Zelda.",
          ],
        },
        {
          id: "saving-the-western-market",
          title: "Переродження в NES та Золота печатка якості",
          paragraphs: [
            "Для американського ринку систему замаскували під Hi-Fi відеотехніку (NES) та оснастили чипом безпеки 10NES.",
            "Золота печатка 'Nintendo Seal of Quality' повернула довіру споживачів після краху 1983 року та врятувала світову індустрію.",
          ],
        },
      ],
      en: [
        {
          id: "masayuki-uemura-vision",
          title: "Yamauchi's Mandate: Outpacing Rivals for Three Years",
          paragraphs: [
            "In late 1981, Nintendo president Hiroshi Yamauchi issued an uncompromising ultimatum to R&D2 chief Masayuki Uemura: engineer a home video game console priced under 10,000 yen with visual capabilities no rival could replicate for three years.",
            "Rejecting the expensive Motorola 68000, Uemura struck an ambitious silicon fabrication partnership with Ricoh. Together, they modified the dependable 8-bit MOS 6502 core with an integrated 5-channel audio synthesizer and devised a dedicated co-processor: the Picture Processing Unit.",
          ],
          quote: {
            text: "Yamauchi told me: 'Make something that will not be obsolete before the decade ends.' We designed Famicom not as a plastic toy, but as a relentless arcade station for the living room.",
            author: "Masayuki Uemura, lead architect of Famicom & NES",
          },
        },
        {
          id: "audio-and-picture-processing",
          title: "The PPU & 2A03: Hardware Smooth Scrolling and Chiptune Mastery",
          paragraphs: [
            "The architectural masterpiece of the Famicom was its Picture Processing Unit (Ricoh 2C02 PPU). Capable of rendering 64 simultaneous hardware sprites and buttery-smooth single-pixel background scrolling, the PPU liberated game directors from static single-screen arenas.",
            "It was this fluid parallax capability that empowered Shigeru Miyamoto and Takashi Tezuka to architect the sprawling kinetic expanses of Super Mario Bros., backed by Koji Kondo's timeless 5-channel musical polyphony.",
          ],
        },
        {
          id: "saving-the-western-market",
          title: "The NES Disguise, 10NES Lockout & the Seal of Quality",
          paragraphs: [
            "When Nintendo approached American retailers post-1983 crash, merchants vehemently refused to stock 'video games.' Nintendo responded with brilliant industrial camouflage: reshaping the machine into the front-loading 'Nintendo Entertainment System' resembling a VCR, bundled with the robotic toy R.O.B. and the Zapper light gun.",
            "To permanently prevent the shovelware catastrophe that destroyed Atari, Nintendo embedded the proprietary 10NES security lockout chip and enforced ironclad publishing contracts capped at five titles per licensee per year under the golden 'Nintendo Seal of Quality.' The strategy single-handedly resurrected the global home video game industry.",
          ],
        },
      ],
    },
  },

  // 18. SEGA MEGA DRIVE (1988)
  {
    slugs: {
      ru: "sega-mega-drive-16bit-bunt-protiv-nintendo",
      uk: "sega-mega-drive-16bit-bunt-proty-nintendo",
      en: "sega-mega-drive-16bit-blast-processing",
    },
    heroImageUrl: "/images/hardware/sega-mega-drive.jpg",
    kicker: {
      ru: "КОНСОЛИ",
      uk: "КОНСОЛІ",
      en: "CONSOLES",
    },
    title: {
      ru: "Sega Mega Drive (1988): 16-битный бунт, бросивший вызов монополии Nintendo",
      uk: "Sega Mega Drive (1988): 16-бітний бунт, що кинув виклик гегемонії Nintendo",
      en: "Sega Mega Drive (1988): Blast Processing and 16-Bit Attitude",
    },
    dek: {
      ru: "Скорость аркадных автоматов, процессор Motorola 68000, дерзкий маркетинг и появление ежа Соника в золотую эпоху консольных войн.",
      uk: "Аркадна швидкість, процесор Motorola 68000 та поява їжака Соніка в епоху великої війни консолей.",
      en: "Arcade speed, Motorola 68000 horsepower, edgy marketing, and Sonic the Hedgehog challenging Nintendo's fortress.",
    },
    readingTimeMinutes: 14,
    publishedAt: {
      ru: "06 АВГ 2024",
      uk: "06 СЕРП 2024",
      en: "AUG 06, 2024",
    },
    author: {
      name: { ru: "Дмитрий Морозов", uk: "Дмитро Морозов", en: "Dmitry Morozov" },
      role: {
        ru: "Историк аркадных платформ",
        uk: "Історик аркадних платформ",
        en: "Arcade Platforms Historian",
      },
    },
    toc: {
      ru: [
        { id: "motorola-68000-powerhouse", number: "01", title: "Мощь Motorola 68000 и звук Yamaha" },
        { id: "genesis-does-what-nintendont", number: "02", title: "Genesis does what Nintendon't" },
        { id: "sonic-the-hedgehog-phenomenon", number: "03", title: "Феномен Соника и преодоление звукового барьера" },
      ],
      uk: [
        { id: "motorola-68000-powerhouse", number: "01", title: "Потужність Motorola 68000 та чип Yamaha" },
        { id: "genesis-does-what-nintendont", number: "02", title: "Genesis does what Nintendon't" },
        { id: "sonic-the-hedgehog-phenomenon", number: "03", title: "Феномен Соніка та надзвуковий геймплей" },
      ],
      en: [
        { id: "motorola-68000-powerhouse", number: "01", title: "Motorola 68000 & Yamaha FM Synthesis" },
        { id: "genesis-does-what-nintendont", number: "02", title: "Genesis Does What Nintendon't" },
        { id: "sonic-the-hedgehog-phenomenon", number: "03", title: "Sonic the Hedgehog & the Velocity Revolution" },
      ],
    },
    factBox: {
      ru: {
        title: "ТЕХНИЧЕСКИЙ ПАСПОРТ",
        items: [
          { label: "Запуск в Японии", value: "29 октября 1988" },
          { label: "Центральный процессор", value: "Motorola 68000 @ 7.67 МГц" },
          { label: "Сопроцессор звука", value: "Zilog Z80 @ 3.58 МГц" },
          { label: "Звуковой чип", value: "Yamaha YM2612 (6 FM-каналов)" },
          { label: "Мировые продажи", value: "Около 35 миллионов консолей" },
        ],
      },
      uk: {
        title: "ТЕХНІЧНИЙ ПАСПОРТ",
        items: [
          { label: "Реліз в Японії", value: "29 жовтня 1988" },
          { label: "Центральний процесор", value: "Motorola 68000 @ 7.67 МГц" },
          { label: "Звуковий чип", value: "Yamaha YM2612 (6 FM-каналів)" },
          { label: "Співпроцесор", value: "Zilog Z80 @ 3.58 МГц" },
          { label: "Світовий тираж", value: "Близько 35 мільйонів систем" },
        ],
      },
      en: {
        title: "HARDWARE DOSSIER",
        items: [
          { label: "Japan Launch", value: "October 29, 1988" },
          { label: "Main CPU", value: "Motorola 68000 @ 7.67 MHz" },
          { label: "Sound CPU", value: "Zilog Z80 @ 3.58 MHz" },
          { label: "FM Synthesizer", value: "Yamaha YM2612 (6 FM channels)" },
          { label: "Worldwide Sales", value: "Approx. 35 million units" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "motorola-68000-powerhouse",
          title: "Мощь Motorola 68000: Аркадная архитектура у вас дома",
          paragraphs: [
            "Когда Sega проектировала Mega Drive, её президент Хаяо Накаяма поставил амбициозную цель: перенести бескомпромиссную мощь аркадных автоматов Sega System 16 в домашнюю гостиную. Сердцем системы стал 16/32-битный процессор Motorola 68000 на тактовой частоте 7.67 МГц — вчетверо быстрее, чем чип Famicom.",
            "В паре с FM-синтезатором Yamaha YM2612 консоль выдавала резкий, звонкий, индустриальный звук с металлическим басом, идеально подходивший для клубной электроники и рока Юдзо Косиро в Streets of Rage.",
          ],
          quote: {
            text: "Мы хотели, чтобы подросток, играя на Mega Drive, чувствовал себя не ребенком с игрушкой, а крутым бунтарем, управляющим мощной рок-н-ролльной машиной.",
            author: "Том Калински, президент Sega of America",
          },
        },
        {
          id: "genesis-does-what-nintendont",
          title: "Genesis does what Nintendon't: Маркетинговая война",
          paragraphs: [
            "На американском рынке консоль под именем Genesis возглавил Том Калински. Он отбросил консервативные японские методы и развернул дерзкую рекламную кампанию под лозунгом 'Genesis does what Nintendon't'.",
            "Sega заключила контракты со спортивными суперзвездами Джо Монтаной и Майклом Джексоном, снизила цену консоли и заменила скучный бандл Altered Beast на совершенно новую игру, которой суждено было взорвать индустрию.",
          ],
        },
        {
          id: "sonic-the-hedgehog-phenomenon",
          title: "Феномен Соника и преодоление звукового барьера",
          paragraphs: [
            "23 июня 1991 года мир увидел Sonic the Hedgehog. Программист Юдзи Нака совершил технический триумф: он создал собственный движок физики криволинейных поверхностей с расчетом импульса и угла наклона, заставив синего ежа проноситься по мертвым петлям с головокружительной скоростью.",
            "Впервые за десять лет Nintendo потеряла доминирование в США: к Рождеству 1991 года доля рынка Sega Genesis достигла 65%, навсегда вписав 16-битную эру в историю как величайшую дуэль консольных титанов.",
          ],
        },
      ],
      uk: [
        {
          id: "motorola-68000-powerhouse",
          title: "Потужність Motorola 68000: Аркадне залізо у вашій оселі",
          paragraphs: [
            "Mega Drive базувалася на архітектурі аркадної системи Sega System 16. Швидкий чип Motorola 68000 та FM-синтезатор Yamaha YM2612 дозволили запускати ігри з небаченою динамікою.",
            "Саундтреки Юдзо Косіро у Streets of Rage продемонстрували здатність консолі звучати як справжній нічний клуб.",
          ],
          quote: {
            text: "Ми створювали образ драйвової та бунтарської консолі для підлітків.",
            author: "Том Калінскі",
          },
        },
        {
          id: "genesis-does-what-nintendont",
          title: "Genesis does what Nintendon't: Велика рекламна війна",
          paragraphs: [
            "Том Калінскі в США кинув прямий виклик Nintendo зі слоганом 'Genesis does what Nintendon't', залучаючи молодь через спорт, рок-музику та агресивний стиль.",
          ],
        },
        {
          id: "sonic-the-hedgehog-phenomenon",
          title: "Феномен Соніка та надзвуковий геймплей",
          paragraphs: [
            "Реліз Sonic the Hedgehog у 1991 році перевернув індустрію. Рушій Юдзі Наки забезпечив шалену швидкість пересування по мертвих петлях.",
            "У різдвяний сезон 1991 року Sega контролювала 65% американського ринку 16-бітних консолей.",
          ],
        },
      ],
      en: [
        {
          id: "motorola-68000-powerhouse",
          title: "Motorola 68000 Muscle: Arcade Hardware in the Living Room",
          paragraphs: [
            "When Sega engineers conceptualized the Mega Drive, president Hayao Nakayama issued a single objective: bring the uncompromised compute power of the Sega System 16 arcade board into living rooms. The console was anchored by the 16/32-bit Motorola 68000 clocked at a blazing 7.67 MHz—nearly four times faster than the Famicom CPU.",
            "Paired with the 6-channel Yamaha YM2612 FM synthesis chip, the hardware produced a crunchy, metallic bass tone that composer Yuzo Koshiro weaponized into the era-defining electronic club soundtracks of Streets of Rage.",
          ],
          quote: {
            text: "We wanted a teenager playing Genesis to feel not like a kid with a toy, but like a rebel driving a high-performance rock-and-roll engine.",
            author: "Tom Kalinske, president of Sega of America",
          },
        },
        {
          id: "genesis-does-what-nintendont",
          title: "Genesis Does What Nintendon't: The Marketing Blitzkrieg",
          paragraphs: [
            "In North America, Sega of America president Tom Kalinske discarded conservative tactics in favor of razor-sharp comparative marketing under the unforgettable battle cry: 'Genesis does what Nintendon't.'",
            "Sega locked in athlete endorsements from Joe Montana, lowered the console price, and boldly replaced the Altered Beast pack-in cartridge with a high-velocity mascot engineered to conquer the world.",
          ],
        },
        {
          id: "sonic-the-hedgehog-phenomenon",
          title: "Sonic the Hedgehog & the Velocity Revolution",
          paragraphs: [
            "On June 23, 1991, Sonic the Hedgehog shattered platformer conventions. Lead programmer Yuji Naka engineered a revolutionary algorithm for momentum physics along curved splines, sending Sonic looping through 360-degree corkscrews at blistering speeds.",
            "By holiday 1991, the Sega Genesis captured 65% of the 16-bit market share in North America, executing the greatest underdog corporate coup in interactive entertainment history.",
          ],
        },
      ],
    },
  },

  // 19. DEUS EX (2000)
  {
    slugs: {
      ru: "deus-ex-2000-kiberpank-shedevr-immersivnyh-simulyatorov",
      uk: "deus-ex-2000-kiberpank-shedevr-immersivnyh-symulyatoriv",
      en: "deus-ex-2000-cyberpunk-immersive-sim",
    },
    heroImageUrl: "/images/articles/deus-ex-cyberpunk.jpg",
    kicker: {
      ru: "ИСТОРИЯ СОЗДАНИЯ",
      uk: "ІСТОРІЯ СТВОРЕННЯ",
      en: "DEV HISTORY",
    },
    title: {
      ru: "Deus Ex (2000): Киберпанк-шедевр Уоррена Спектора и эталон свободы выбора",
      uk: "Deus Ex (2000): Кіберпанк-шедевр та еталон свободи вибору",
      en: "Deus Ex (2000): Warren Spector's Cyberpunk Immersion Masterpiece",
    },
    dek: {
      ru: "Невиданная вариативность прохождения, многослойные заговоры, наноаугментации и становление жанра immersive sim.",
      uk: "Небачена варіативність проходження, філософські змови та народження жанру імерсивного симулятора.",
      en: "Unrivaled player agency, emergent stealth systems, nanotech augmentations, and philosophical conspiracies that defined immersive sims."
    },
    readingTimeMinutes: 15,
    publishedAt: {
      ru: "04 АВГ 2024",
      uk: "04 СЕРП 2024",
      en: "AUG 04, 2024",
    },
    author: {
      name: { ru: "Константин Фомин", uk: "Костянтин Фомін", en: "Konstantin Fomin" },
      role: {
        ru: "Исследователь сюжетных RPG",
        uk: "Дослідник сюжетних RPG",
        en: "Narrative RPG Analyst",
      },
    },
    toc: {
      ru: [
        { id: "spector-manifesto", number: "01", title: "Манифест Уоррена Спектора" },
        { id: "emergent-level-design", number: "02", title: "Эмерджентный дизайн Острова Свободы" },
        { id: "philosophical-conspiracy", number: "03", title: "Философия заговора и выбор судьбы" },
      ],
      uk: [
        { id: "spector-manifesto", number: "01", title: "Маніфест Воррена Спектора" },
        { id: "emergent-level-design", number: "02", title: "Емерджентний дизайн Острова Свободи" },
        { id: "philosophical-conspiracy", number: "03", title: "Філософія змови та три фінали" },
      ],
      en: [
        { id: "spector-manifesto", number: "01", title: "Warren Spector's Agency Manifesto" },
        { id: "emergent-level-design", number: "02", title: "Emergent Design on Liberty Island" },
        { id: "philosophical-conspiracy", number: "03", title: "Philosophical Conspiracy & Three Destinies" },
      ],
    },
    factBox: {
      ru: {
        title: "ПАСПОРТ ПРОЕКТА",
        items: [
          { label: "Год выхода", value: "22 июня 2000" },
          { label: "Студия", value: "Ion Storm Austin" },
          { label: "Геймдиректор", value: "Уоррен Спектор & Харви Смит" },
          { label: "Движок", value: "Unreal Engine 1 (модифицированный)" },
          { label: "Главный герой", value: "JC Denton (Джей-Си Дентон)" },
        ],
      },
      uk: {
        title: "ПАСПОРТ ПРОЄКТУ",
        items: [
          { label: "Рік релізу", value: "22 червня 2000" },
          { label: "Студія", value: "Ion Storm Austin" },
          { label: "Геймдиректори", value: "Воррен Спектор та Гарві Сміт" },
          { label: "Рушій", value: "Unreal Engine 1 (модифікований)" },
          { label: "Головний герой", value: "JC Denton" },
        ],
      },
      en: {
        title: "PROJECT FILE",
        items: [
          { label: "Release Date", value: "June 22, 2000" },
          { label: "Studio", value: "Ion Storm Austin" },
          { label: "Directorial Leads", value: "Warren Spector & Harvey Smith" },
          { label: "Engine", value: "Heavily modified Unreal Engine 1" },
          { label: "Protagonist", value: "JC Denton (UNATCO agent)" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "spector-manifesto",
          title: "Манифест Уоррена Спектора: Никаких искусственных барьеров",
          paragraphs: [
            "К концу 1990-х ветеран Origin Systems и Looking Glass Studios Уоррен Спектор устал от линейных коридорных шутеров. Перейдя в студию Ion Storm, он сформулировал радикальное творческое кредо: создать игру, в которой геймдизайнер никогда не говорит игроку 'нет'.",
            "Deus Ex объединила элементы шутера от первого лица, глубокой ролевой системы и стелс-симулятора. Игрок сам решал, кем будет его агент Джей-Си Дентон: невидимым хакером с шокером, дипломатичным переговорщиком или тяжело бронированным бойцом с плазменной винтовкой.",
          ],
          quote: {
            text: "В хорошей игре мир не должен диктовать игроку правильный способ прохождения. Задача дизайнера — создать непротиворечивые правила симуляции и отойти в сторону.",
            author: "Уоррен Спектор, ведущий геймдизайнер Deus Ex",
          },
        },
        {
          id: "emergent-level-design",
          title: "Эмерджентный дизайн Острова Свободы",
          paragraphs: [
            "Первая же миссия на Острове Свободы у полуразрушенной Статуи Свободы стала хрестоматийным примером системного геймдизайна. Любая запертая дверь имела минимум четыре решения: взлом отмычками, подбор пароля в карманном компьютере охраны, подрыв гранатой или обходной путь через темную вентиляционную шахту.",
            "Система наноаугментаций позволяла на ходу адаптироваться к обстановке: прыгать на трехметровую высоту, становиться невидимым для камер или фильтровать ядовитый газ в катакомбах.",
          ],
        },
        {
          id: "philosophical-conspiracy",
          title: "Философия заговора и выбор судьбы человечества",
          paragraphs: [
            "Сюжет игры объединил в единую захватывающую мозаику все главные конспирологические теории рубежа тысячелетий: Иллюминатов, вирус 'Серая смерть', искусственный интеллект Helios, рыцарей Тамплиеров и Зону 51.",
            "Финал Deus Ex не сводился к убийству финального босса. В недрах Зоны 51 игрок стоял перед мучительным философским выбором трех путей будущего: погрузить мир в технологическое средневековье, передать власть тайному совету олигархов или слиться с вездесущим ИИ во имя абсолютного цифрового порядка.",
          ],
        },
      ],
      uk: [
        {
          id: "spector-manifesto",
          title: "Маніфест Воррена Спектора: Свобода гравця понад усе",
          paragraphs: [
            "Воррен Спектор прагнув подолати рамки класичних жанрів, поєднавши шутер від першої особи, глибоку рольову систему та стелс.",
            "Головний принцип Deus Ex полягав у тому, щоб надати гравцеві інструменти, а не вказувати єдино вірний шлях розв'язання ситуації.",
          ],
          quote: {
            text: "Ми створили світ, де кожне рішення має наслідки, а правила фізики та симуляції єдині для всіх.",
            author: "Воррен Спектор",
          },
        },
        {
          id: "emergent-level-design",
          title: "Емерджентний дизайн Острова Свободи",
          paragraphs: [
            "Вступний рівень на Острові Свободи став зразком імерсивного симулятора: проникнення через вентиляцію, злам комп'ютерів або прямий штурм — вибір завжди належав гравцеві.",
            "Нанотехнологічні аугментації дозволяли гнучко налаштовувати здібності агента Дентона.",
          ],
        },
        {
          id: "philosophical-conspiracy",
          title: "Філософія змови та три фінали людства",
          paragraphs: [
            "Сюжетна лінія переплела кіберпанк, штучний інтелект Helios, вірус 'Сіра смерть' та таємні урядові змови.",
            "Фінал у Зоні 51 пропонував три кардинально різні філософські концепції розвитку цивілізації, закріпивши Deus Ex у пантеоні найвизначніших ігор в історії.",
          ],
        },
      ],
      en: [
        {
          id: "spector-manifesto",
          title: "Warren Spector's Manifesto: Never Tell the Player 'No'",
          paragraphs: [
            "By 1997, Looking Glass and Origin veteran Warren Spector had grown frustrated by linear corridor shooters that treated the player like an actor reading a fixed script. Establishing Ion Storm Austin, Spector and lead designer Harvey Smith codified a design manifesto predicated on maximal emergent agency.",
            "Deus Ex melded first-person tactical shooting, systemic stealth, and granular RPG progression. Players shaped nano-augmented UNATCO agent JC Denton to their personal philosophy: a non-lethal ghost slipping through ventilation ducts, a persuasive diplomat, or an armored assault operative breaching blast doors with heavy ordnance.",
          ],
          quote: {
            text: "In a truly great simulation, designers do not solve puzzles for the player. Designers craft consistent systemic rules and step out of the way.",
            author: "Warren Spector, director of Deus Ex",
          },
        },
        {
          id: "emergent-level-design",
          title: "Emergent Design on Liberty Island",
          paragraphs: [
            "The opening infiltration of Liberty Island beneath the decapitated Statue of Liberty remains a masterclass in level architecture. Every locked security bulkhead possessed at least four systemic solutions: lockpicking the tumblers, hacking security terminals, finding an access pocket secretary on a guard, or stacking wooden crates to reach an unmapped roof intake.",
            "Real-time nano-augmentations—from sub-dermal ballistic armor and thermoptic cloaking to speed enhancement—fluidly transformed every hostile encounter into an improvisational playground.",
          ],
        },
        {
          id: "philosophical-conspiracy",
          title: "Philosophical Conspiracy & Three Destinies",
          paragraphs: [
            "Deus Ex wove every turn-of-the-millennium conspiracy theory—the Illuminati, MJ-12, the Gray Death nanovirus, Area 51, and rogue synthetic intelligence—into an intoxicating sociopolitical tapestry.",
            "Crucially, the climax avoided an arbitrary bullet-sponge boss fight. Inside the subterranean reactors of Area 51, Denton confronts three profound ideological forks: plunge humanity into a dark-age decentralization, empower a clandestine benevolent oligarchy, or merge consciousness with the AI Helios to govern as an omnipresent digital deity.",
          ],
        },
      ],
    },
  },

  // 20. HALF-LIFE 2 & STEAM (2004)
  {
    slugs: {
      ru: "half-life-2-dvizhok-source-i-revolyuciya-steam",
      uk: "half-life-2-rushiy-source-ta-revolyutsiya-steam",
      en: "half-life-2-source-engine-and-steam-revolution",
    },
    heroImageUrl: "/images/articles/half-life-2-city17.jpg",
    kicker: {
      ru: "ИСТОРИЯ СОЗДАНИЯ",
      uk: "ІСТОРІЯ СТВОРЕННЯ",
      en: "DEV HISTORY",
    },
    title: {
      ru: "Half-Life 2 (2004) и Steam: Как Valve заложила фундамент цифровой дистрибуции",
      uk: "Half-Life 2 (2004) та Steam: Як Valve заклала фундамент цифрової ери",
      en: "Half-Life 2 (2004) & Steam: How Valve Pioneered Digital Distribution",
    },
    dek: {
      ru: "Физика Havok и движок Source, атмосфера Сити-17, гравипушка и онлайн-клиент, навсегда изменивший ландшафт ПК-гейминга.",
      uk: "Фізика рушія Source, атмосфера Сіті-17, гравіпушка та інноваційний клієнт, що назавжди змінив ПК-геймінг.",
      en: "Source Engine physics, dystopian storytelling in City 17, the gravity gun, and the software client that transformed PC gaming forever.",
    },
    readingTimeMinutes: 16,
    publishedAt: {
      ru: "01 АВГ 2024",
      uk: "01 СЕРП 2024",
      en: "AUG 01, 2024",
    },
    author: {
      name: { ru: "Александр Гордон", uk: "Олександр Гордон", en: "Alexander Gordon" },
      role: {
        ru: "Обозреватель технологий ПК",
        uk: "Оглядач технологій ПК",
        en: "PC Gaming & Engine Analyst",
      },
    },
    toc: {
      ru: [
        { id: "source-engine-and-physics", number: "01", title: "Движок Source и гравитационная пушка" },
        { id: "city-17-and-environmental-narrative", number: "02", title: "Сити-17: Антиутопия Виктора Антонова" },
        { id: "the-steam-gamble", number: "03", title: "Риск со Steam: Рождение цифровой эры" },
      ],
      uk: [
        { id: "source-engine-and-physics", number: "01", title: "Рушій Source та гравітаційна гармата" },
        { id: "city-17-and-environmental-narrative", number: "02", title: "Сіті-17: Антиутопія Віктора Антонова" },
        { id: "the-steam-gamble", number: "03", title: "Авантюра зі Steam: Початок цифрової ери" },
      ],
      en: [
        { id: "source-engine-and-physics", number: "01", title: "Source Engine, Havok & the Gravity Gun" },
        { id: "city-17-and-environmental-narrative", number: "02", title: "City 17: Viktor Antonov's Dystopia" },
        { id: "the-steam-gamble", number: "03", title: "The Steam Gamble: Dawn of Digital Distribution" },
      ],
    },
    factBox: {
      ru: {
        title: "ПАСПОРТ ПРОЕКТА",
        items: [
          { label: "Дата релиза", value: "16 ноября 2004" },
          { label: "Разработчик", value: "Valve Corporation" },
          { label: "Движок", value: "Source Engine" },
          { label: "Художественный директор", value: "Виктор Антонов" },
          { label: "Продажи игры", value: "Более 12 миллионов копий" },
        ],
      },
      uk: {
        title: "ПАСПОРТ ПРОЄКТУ",
        items: [
          { label: "Дата релізу", value: "16 листопада 2004" },
          { label: "Розробник", value: "Valve Corporation" },
          { label: "Рушій", value: "Source Engine" },
          { label: "Арт-директор", value: "Віктор Антонов" },
          { label: "Продажі гри", value: "Понад 12 мільйонів копій" },
        ],
      },
      en: {
        title: "PROJECT SPEC SHEET",
        items: [
          { label: "Release Date", value: "November 16, 2004" },
          { label: "Developer", value: "Valve Corporation" },
          { label: "Engine", value: "Source Engine" },
          { label: "Art Director", value: "Viktor Antonov" },
          { label: "Retail & Digital Sales", value: "Over 12 million units" },
        ],
      },
    },
    sections: {
      ru: [
        {
          id: "source-engine-and-physics",
          title: "Движок Source и гравитационная пушка: Физика как оружие",
          paragraphs: [
            "Разработка Half-Life 2 длилась шесть мучительных лет и обошлась Valve более чем в 40 миллионов долларов. Вместо покупки чужих технологий Гейб Ньюэлл принял решение создать с нуля движок Source, глубоко интегрировав в него физическую модель Havok.",
            "Кульминацией этой инженерной мысли стала гравитационная пушка (Zero Point Energy Field Manipulator). Любой предмет в игре — ржавая бочка, циркулярный диск от пилы или радиатор отопления — мгновенно превращался в смертоносный снаряд. Игроки проходили уровень 'Рейвенхольм', практически не тратя огнестрельных патронов.",
          ],
          quote: {
            text: "Мы поняли, что физика не должна быть просто декорацией для падающих коробок. Физика должна стать базовым глаголом в словаре игрока.",
            author: "Гейб Ньюэлл, сооснователь Valve",
          },
        },
        {
          id: "city-17-and-environmental-narrative",
          title: "Сити-17: Антиутопия Виктора Антонова",
          paragraphs: [
            "Визуальный облик Сити-17, созданный болгарским художником Виктором Антоновым, стал шедевром повествования через окружение. Смешение неоклассической архитектуры Восточной Европы с инопланетным брутализмом Альянса (Combine) породило щемящее ощущение оккупации и безнадежности.",
            "Новаторская система лицевой анимации придала персонажам Аликс Вэнс, доктору Кляйнеру и Илаю Вэнсу поразительную эмоциональную глубину: их взгляды и мимика рассказывали историю без утомительных катсцен.",
          ],
        },
        {
          id: "the-steam-gamble",
          title: "Риск со Steam: Рождение цифровой эры",
          paragraphs: [
            "Релиз Half-Life 16 ноября 2004 года сопровождался беспрецедентным скандалом: впервые в истории физический диск с игрой в коробке требовал обязательной онлайн-активации через собственный сервис Valve — Steam.",
            "Серверы падали под наплывом сотен тысяч геймеров с коммутируемым dial-up доступом, профильные форумы кипели от ярости. Однако смелая ставка Гейба Ньюэлла оправдала себя на 100%: Steam преодолел диктат ритейлеров, подарил вторую жизнь инди-разработчикам и стал главным цифровым магазином для всего мирового ПК-гейминга.",
          ],
        },
      ],
      uk: [
        {
          id: "source-engine-and-physics",
          title: "Рушій Source та гравітаційна гармата: Фізика як зброя",
          paragraphs: [
            "Half-Life 2 стала віхою в історії інтерактивних технологій завдяки рушію Source та інтеграції фізики Havok.",
            "Гравітаційна гармата перетворила будь-який об'єкт довкілля — від пильних дисків до бочок — на смертоносну зброю, що найяскравіше проявилося у зловісному містечку Рейвенхольм.",
          ],
          quote: {
            text: "Фізика мала стати новим фундаментом для імерсивного геймплею.",
            author: "Ґейб Ньюелл",
          },
        },
        {
          id: "city-17-and-environmental-narrative",
          title: "Сіті-17: Антиутопія Віктора Антонова",
          paragraphs: [
            "Арт-директор Віктор Антонов поєднав європейську архітектуру з холодним металом окупаційних споруд Комбайнів.",
            "Система анімації облич передавала найтонші людські емоції Алікс Венс без відриву гравця від керування Гордоном Фріменом.",
          ],
        },
        {
          id: "the-steam-gamble",
          title: "Авантюра зі Steam: Початок цифрової ери",
          paragraphs: [
            "Вимога обов'язкової активації гри через Steam викликала хвилю обурення у 2004 році через повільний інтернет тих часів.",
            "Однак це рішення Valve зламало монополію дискового ритейлу і заклало основу сучасної ери цифрової дистрибуції.",
          ],
        },
      ],
      en: [
        {
          id: "source-engine-and-physics",
          title: "Source Engine, Havok & the Gravity Gun: Weaponizing Physics",
          paragraphs: [
            "Costing over $40 million across six grueling years, Half-Life 2 redefined the boundaries of real-time simulation. Rejecting licensed middleware, Gabe Newell funded the in-house development of the Source Engine, deeply intertwined with the Havok physics API.",
            "The crowning jewel was the Zero Point Energy Field Manipulator—the Gravity Gun. Everyday detritus—circular saw blades, cinderblocks, gas canisters—became lethal ballistic projectiles, enabling the unforgettable ammunition-free survival sequence through the zombie-infested alleys of Ravenholm.",
          ],
          quote: {
            text: "We realized physics shouldn't just be an aesthetic parlor trick for toppling crates. Physics had to become the foundational verb in the player's vocabulary.",
            author: "Gabe Newell, co-founder of Valve",
          },
        },
        {
          id: "city-17-and-environmental-narrative",
          title: "City 17: Viktor Antonov's Dystopia & Facial Animation",
          paragraphs: [
            "Architectural visionary Viktor Antonov fused Eastern European neoclassical grandeur with the alien brutalism of the Combine Citadel, establishing City 17 as an environmental narrative tour de force.",
            "Valve's proprietary muscle-driven Facial Animation System delivered uncanny emotional authenticity to companions Alyx Vance, Dr. Kleiner, and Eli Vance, dispensing entirely with jarring third-person cinematics.",
          ],
        },
        {
          id: "the-steam-gamble",
          title: "The Steam Gamble: Dawn of Digital Distribution",
          paragraphs: [
            "Half-Life 2's November 16, 2004 launch provoked intense controversy: for the first time, a packaged retail disc mandated broadband online authentication through Valve's fledgling client, Steam.",
            "Authentication servers choked under dial-up traffic and retail cartels threatened boycotts. Yet Newell's gambit succeeded decisively, dismantling physical distributor margins, establishing a digital haven for independent creators, and cementing Steam as the definitive bedrock of modern PC gaming.",
          ],
        },
      ],
    },
  },
];

export function getDetailedArticleBySlug(
  locale: AppLocale,
  slug: string
): { article: DetailedArticleData; currentLocale: AppLocale } | null {
  for (const art of detailedArticlesList) {
    if (
      art.slugs.ru === slug ||
      art.slugs.uk === slug ||
      art.slugs.en === slug
    ) {
      return { article: art, currentLocale: locale };
    }
  }
  return null;
}
