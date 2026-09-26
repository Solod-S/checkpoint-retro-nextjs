import {
  Locale,
  PostKind,
  PostStatus,
  PrismaClient,
  TranslationStatus,
  UserRole,
} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Checkpoint Retro database with rich gaming content...");

  // 1. User & Author
  const user = await prisma.user.upsert({
    where: { email: "editor@checkpoint-retro.local" },
    update: {},
    create: {
      email: "editor@checkpoint-retro.local",
      name: "Алексей Морозов",
      role: UserRole.ADMIN,
    },
  });

  let author = await prisma.author.findUnique({
    where: { userId: user.id },
  });

  if (!author) {
    author = await prisma.author.create({
      data: {
        userId: user.id,
        translations: {
          create: [
            {
              locale: Locale.RU,
              slug: "alexey-morozov",
              name: "Алексей Морозов",
              roleLabel: "Редактор и автор",
              bio: "Пишет статьи, берёт интервью и исследует историю индустрии.",
            },
            {
              locale: Locale.UK,
              slug: "alexey-morozov",
              name: "Олексій Морозов",
              roleLabel: "Редактор і автор",
              bio: "Пише статті, бере інтерв'ю та досліджує історію індустрії.",
            },
            {
              locale: Locale.EN,
              slug: "alexey-morozov",
              name: "Alexey Morozov",
              roleLabel: "Editor & Author",
              bio: "Writes features, interviews veterans, and unearths gaming history.",
            },
          ],
        },
      },
    });
  }

  // 2. Media Assets
  const mediaAssets = [
    {
      storageKey: "/images/hardware/dreamcast-hero.jpg",
      mimeType: "image/jpeg",
      altRu: "Sega Dreamcast крупным планом с VMU и спиральным логотипом",
      altUk: "Sega Dreamcast зблизька з VMU та спіральним логотипом",
      altEn: "Sega Dreamcast hero view with VMU controller",
    },
    {
      storageKey: "/images/hardware/snes-console.jpg",
      mimeType: "image/jpeg",
      altRu: "Консоль Super Nintendo Entertainment System с картриджем Super FX",
      altUk: "Консоль Super Nintendo Entertainment System з картриджем Super FX",
      altEn: "Super Nintendo Entertainment System 16-bit console",
    },
    {
      storageKey: "/images/hardware/ps1-console.jpg",
      mimeType: "image/jpeg",
      altRu: "Оригинальная PlayStation 1 и фирменный диск с черной подложкой",
      altUk: "Оригінальна PlayStation 1 та фірмовий чорний компакт-диск",
      altEn: "Original PlayStation 1 console with black disc",
    },
    {
      storageKey: "/images/hardware/gameboy-classic.jpg",
      mimeType: "image/jpeg",
      altRu: "Nintendo Game Boy Classic с монохромным экраном",
      altUk: "Nintendo Game Boy Classic з монохромним екраном",
      altEn: "Classic Nintendo Game Boy handheld",
    },
    {
      storageKey: "/images/hardware/sega-mega-drive.jpg",
      mimeType: "image/jpeg",
      altRu: "Sega Mega Drive 16-BIT с контроллером",
      altUk: "Sega Mega Drive 16-BIT з контролером",
      altEn: "Sega Mega Drive 16-BIT system",
    },
    {
      storageKey: "/images/hardware/sega-saturn.jpg",
      mimeType: "image/jpeg",
      altRu: "Sega Saturn черная японская модель",
      altUk: "Sega Saturn чорна японська модель",
      altEn: "Sega Saturn console",
    },
    {
      storageKey: "/images/games/castlevania-sotn.jpg",
      mimeType: "image/jpeg",
      altRu: "Castlevania: Symphony of the Night готический замок и Алукард",
      altUk: "Castlevania: Symphony of the Night готичний замок та Алукард",
      altEn: "Castlevania: Symphony of the Night gothic art",
    },
    {
      storageKey: "/images/games/fallout-vault.jpg",
      mimeType: "image/jpeg",
      altRu: "Оригинальный Fallout 1997 Убежище 13 и Pip-Boy",
      altUk: "Оригінальний Fallout 1997 Сховище 13 та Pip-Boy",
      altEn: "Original Fallout 1997 Vault 13 and Pip-Boy terminal",
    },
    {
      storageKey: "/images/games/doom-classic.jpg",
      mimeType: "image/jpeg",
      altRu: "DOOM 1993 Марсианская база и классический дробовик",
      altUk: "DOOM 1993 Марсіанська база та класичний дробовик",
      altEn: "DOOM 1993 Mars base battle scene",
    },
    {
      storageKey: "/images/games/chrono-trigger.jpg",
      mimeType: "image/jpeg",
      altRu: "Chrono Trigger Врата времени и Хроно",
      altUk: "Chrono Trigger Брама часу та Хроно",
      altEn: "Chrono Trigger Time Gate and party art",
    },
    {
      storageKey: "/images/games/zelda-ocarina.jpg",
      mimeType: "image/jpeg",
      altRu: "The Legend of Zelda: Ocarina of Time просторы Хайрула",
      altUk: "The Legend of Zelda: Ocarina of Time простори Хайрулу",
      altEn: "The Legend of Zelda: Ocarina of Time Hyrule field",
    },
    {
      storageKey: "/images/about/crt-arcade.jpg",
      mimeType: "image/jpeg",
      altRu: "Ретро аркадный ЭЛТ экран с надписью Press Start",
      altUk: "Ретро аркадний ЕПТ екран з написом Press Start",
      altEn: "Retro CRT arcade monitor glowing Press Start",
    },
  ];

  const mediaMap = new Map<string, string>();

  for (const m of mediaAssets) {
    const asset = await prisma.mediaAsset.upsert({
      where: { storageKey: m.storageKey },
      update: {
        alt: { ru: m.altRu, uk: m.altUk, en: m.altEn },
      },
      create: {
        storageKey: m.storageKey,
        mimeType: m.mimeType,
        alt: { ru: m.altRu, uk: m.altUk, en: m.altEn },
      },
    });
    mediaMap.set(m.storageKey, asset.id);
  }

  // 3. Platforms
  const platformsData = [
    { key: "pc", nameRu: "PC", nameUk: "PC", nameEn: "PC", color: "#f4df19" },
    { key: "playstation", nameRu: "PlayStation", nameUk: "PlayStation", nameEn: "PlayStation", color: "#27b7ff" },
    { key: "nintendo", nameRu: "Nintendo", nameUk: "Nintendo", nameEn: "Nintendo", color: "#ff3b25" },
    { key: "sega", nameRu: "SEGA", nameUk: "SEGA", nameEn: "SEGA", color: "#27b7ff" },
    { key: "arcade", nameRu: "Аркады", nameUk: "Аркади", nameEn: "Arcade", color: "#b7ff3c" },
    { key: "dreamcast", nameRu: "Dreamcast", nameUk: "Dreamcast", nameEn: "Dreamcast", color: "#ff5a1f" },
  ];

  const platformMap = new Map<string, string>();
  for (const plat of platformsData) {
    const p = await prisma.platform.upsert({
      where: { key: plat.key },
      update: { colorToken: plat.color },
      create: {
        key: plat.key,
        colorToken: plat.color,
        translations: {
          create: [
            { locale: Locale.RU, slug: plat.key, name: plat.nameRu },
            { locale: Locale.UK, slug: plat.key, name: plat.nameUk },
            { locale: Locale.EN, slug: plat.key, name: plat.nameEn },
          ],
        },
      },
    });
    platformMap.set(plat.key, p.id);
  }

  // 4. Categories
  const categoriesData = [
    { key: "dev-history", sortOrder: 1, nameRu: "Истории создания", nameUk: "Історії створення", nameEn: "Dev History" },
    { key: "consoles", sortOrder: 2, nameRu: "Консоли", nameUk: "Консолі", nameEn: "Consoles" },
    { key: "people", sortOrder: 3, nameRu: "Люди", nameUk: "Люди", nameEn: "People" },
    { key: "collections", sortOrder: 4, nameRu: "Подборки", nameUk: "Добірки", nameEn: "Collections" },
    { key: "culture", sortOrder: 5, nameRu: "Культура", nameUk: "Культура", nameEn: "Culture" },
  ];

  const categoryMap = new Map<string, string>();
  for (const cat of categoriesData) {
    const c = await prisma.category.upsert({
      where: { key: cat.key },
      update: { sortOrder: cat.sortOrder },
      create: {
        key: cat.key,
        sortOrder: cat.sortOrder,
        translations: {
          create: [
            { locale: Locale.RU, slug: cat.key, name: cat.nameRu },
            { locale: Locale.UK, slug: cat.key, name: cat.nameUk },
            { locale: Locale.EN, slug: cat.key, name: cat.nameEn },
          ],
        },
      },
    });
    categoryMap.set(cat.key, c.id);
  }

  // 5. Eras
  const erasData = [
    { key: "1970s", startYear: 1970, endYear: 1979, nameRu: "1970-е: Рождение индустрии", nameUk: "1970-ті: Народження індустрії", nameEn: "1970s: Birth of Gaming" },
    { key: "1980s", startYear: 1980, endYear: 1989, nameRu: "1980-е: Домашние компьютеры", nameUk: "1980-ті: Домашні комп'ютери", nameEn: "1980s: Home Micros" },
    { key: "1990s", startYear: 1990, endYear: 1999, nameRu: "1990-е: 16 БИТ и 3D-революция", nameUk: "1990-ті: 16 БІТ та 3D-революція", nameEn: "1990s: 16-Bit & 3D Era" },
    { key: "2000s", startYear: 2000, endYear: 2009, nameRu: "2000-е: Онлайн и новые миры", nameUk: "2000-ні: Онлайн та нові світи", nameEn: "2000s: Online Worlds" },
  ];

  const eraMap = new Map<string, string>();
  for (const era of erasData) {
    const e = await prisma.era.upsert({
      where: { key: era.key },
      update: {},
      create: {
        key: era.key,
        startYear: era.startYear,
        endYear: era.endYear,
        translations: {
          create: [
            { locale: Locale.RU, slug: era.key, name: era.nameRu },
            { locale: Locale.UK, slug: era.key, name: era.nameUk },
            { locale: Locale.EN, slug: era.key, name: era.nameEn },
          ],
        },
      },
    });
    eraMap.set(era.key, e.id);
  }

  // 6. Posts Data definition
  interface PostSeedItem {
    kind: PostKind;
    mediaKey: string;
    platformKey: string;
    categoryKey: string;
    eraKey: string;
    publishedAt: string;
    isHero?: boolean;
    isBreaking?: boolean;
    translations: {
      ru: { title: string; slug: string; excerpt: string };
      uk: { title: string; slug: string; excerpt: string };
      en: { title: string; slug: string; excerpt: string };
    };
  }

  const postsToSeed: PostSeedItem[] = [
    {
      kind: PostKind.STORY,
      mediaKey: "/images/hardware/dreamcast-hero.jpg",
      platformKey: "dreamcast",
      categoryKey: "consoles",
      eraKey: "1990s",
      publishedAt: "2024-08-16T10:00:00Z",
      isHero: true,
      translations: {
        ru: {
          title: "Почему Dreamcast опередила своё время",
          slug: "pochemu-dreamcast-operedila-svoyo-vremya",
          excerpt:
            "Смелые идеи, встроенный модем, экранчик VMU и игры, которые до сих пор выглядят современно. Разбираемся, почему последняя консоль Sega была взглядом в будущее.",
        },
        uk: {
          title: "Чому Dreamcast випередила свій час",
          slug: "chomu-dreamcast-vperedyla-sviy-chas",
          excerpt:
            "Сміливі ідеї, вбудований модем, екранчик VMU та ігри, які досі виглядають сучасно. Досліджуємо останню домашню консоль Sega.",
        },
        en: {
          title: "Why Dreamcast was ahead of its time",
          slug: "why-dreamcast-was-ahead-of-its-time",
          excerpt:
            "Bold ideas, built-in modem, VMU interactive memory cards, and timeless classics. Why Sega's swan song was a vision of future gaming.",
        },
      },
    },
    {
      kind: PostKind.ARTICLE,
      mediaKey: "/images/games/fallout-vault.jpg",
      platformKey: "pc",
      categoryKey: "dev-history",
      eraKey: "1990s",
      publishedAt: "2024-08-15T12:00:00Z",
      translations: {
        ru: {
          title: "Как рождался оригинальный Fallout (1997): от GURPS к пустошам",
          slug: "kak-rozhdalsya-originalnyj-fallout-1997",
          excerpt:
            "История о том, как Тим Кейн, Леонард Боярский и небольшая команда энтузиастов создали эталон постапокалиптической RPG вопреки сомнениям руководства.",
        },
        uk: {
          title: "Як народжувався оригінальний Fallout (1997): від GURPS до пусток",
          slug: "yak-narodzhuvavsya-originalnyj-fallout-1997",
          excerpt:
            "Історія про те, як Тім Кейн і невелика команда ентузіастів створили еталонну рольову гру всупереч скепсису видавця.",
        },
        en: {
          title: "The Making of the Original Fallout (1997): From GURPS to Wastelands",
          slug: "making-of-original-fallout-1997",
          excerpt:
            "How Tim Cain and a small dedicated crew crafted the definitive post-apocalyptic RPG despite corporate doubt.",
        },
      },
    },
    {
      kind: PostKind.ARTICLE,
      mediaKey: "/images/games/castlevania-sotn.jpg",
      platformKey: "playstation",
      categoryKey: "dev-history",
      eraKey: "1990s",
      publishedAt: "2024-08-14T09:00:00Z",
      translations: {
        ru: {
          title: "Симфония ночи: Как Castlevania SOTN переизобрела жанр на PlayStation",
          slug: "castlevania-symphony-of-the-night-kak-sozdavalas-metroidvaniya",
          excerpt:
            "Кодзи Игараси и его революция в 2D-геймдизайне в эпоху тотального перехода индустрии в полигональное 3D.",
        },
        uk: {
          title: "Симфонія ночі: Як Castlevania SOTN перевинайшла жанр на PlayStation",
          slug: "castlevania-sotn-istoriya",
          excerpt:
            "Кодзі Іґарасі та його тріумф 2D-геймдизайну у часи масового переходу індустрії до тривимірності.",
        },
        en: {
          title: "Symphony of the Night: How Castlevania Redefined 2D Action on PS1",
          slug: "castlevania-sotn-birth-of-metroidvania",
          excerpt:
            "Koji Igarashi's non-linear masterpiece proved that 2D gameplay could soar even during the dawn of 3D polygon craze.",
        },
      },
    },
    {
      kind: PostKind.ARTICLE,
      mediaKey: "/images/hardware/snes-console.jpg",
      platformKey: "nintendo",
      categoryKey: "consoles",
      eraKey: "1990s",
      publishedAt: "2024-08-13T14:30:00Z",
      translations: {
        ru: {
          title: "Super FX: Как Nintendo подарила 16-битной SNES настоящее 3D",
          slug: "super-fx-kak-nintendo-voshla-v-3d",
          excerpt:
            "История британских инженеров Argonaut Software и аппаратного сопроцессора, сделавшего революционный Star Fox реальностью.",
        },
        uk: {
          title: "Super FX: Як Nintendo подарувала 16-бітній SNES справжнє 3D",
          slug: "super-fx-yak-nintendo-uviyshla-v-3d",
          excerpt:
            "Історія британських інженерів Argonaut Software та чипа, що зробив можливим реліз Star Fox.",
        },
        en: {
          title: "Super FX: How Nintendo Brought True 3D to 16-Bit SNES",
          slug: "super-fx-how-nintendo-entered-3d",
          excerpt:
            "The British engineers at Argonaut and the co-processor technology behind Star Fox and Yoshi's Island.",
        },
      },
    },
    {
      kind: PostKind.ARTICLE,
      mediaKey: "/images/games/chrono-trigger.jpg",
      platformKey: "nintendo",
      categoryKey: "dev-history",
      eraKey: "1990s",
      publishedAt: "2024-08-12T11:00:00Z",
      translations: {
        ru: {
          title: "Chrono Trigger: История создания шедевра Команды Мечты",
          slug: "chrono-trigger-istoriya-sozdaniya-dream-team",
          excerpt:
            "Сакагути, Хории и Акира Торияма — как союз трёх гениев породил самую совершенную JRPG золотой эры.",
        },
        uk: {
          title: "Chrono Trigger: Історія створення шедевра Команди Мрії",
          slug: "chrono-trigger-istoriya-stvorennya",
          excerpt:
            "Сакагуті, Хорії та Акіра Торіяма — союз трьох титанів, що подарував світові неперевершену подорож крізь епохи.",
        },
        en: {
          title: "Chrono Trigger: Inside Square's Legendary Dream Team",
          slug: "chrono-trigger-the-dream-team",
          excerpt:
            "When Sakaguchi, Horii, and Toriyama joined forces to craft the pinnacle of 16-bit role-playing games.",
        },
      },
    },
    {
      kind: PostKind.ARTICLE,
      mediaKey: "/images/games/doom-classic.jpg",
      platformKey: "pc",
      categoryKey: "dev-history",
      eraKey: "1990s",
      publishedAt: "2024-08-11T16:00:00Z",
      translations: {
        ru: {
          title: "DOOM (1993): Как четверо парней в Техасе изменили видеоигры навсегда",
          slug: "doom-1993-kak-id-software-vzorvala-mir",
          excerpt:
            "Джон Кармак, Джон Ромеро и технологический прорыв id Software, определивший вектор индустрии на десятилетия.",
        },
        uk: {
          title: "DOOM (1993): Як четверо хлопців у Техасі змінили відеоігри назавжди",
          slug: "doom-1993-yak-id-software-pidirvala-svit",
          excerpt:
            "Джон Кармак, Джон Ромеро та революція id Software, яка сформувала сучасний екшен від першої особи.",
        },
        en: {
          title: "DOOM (1993): How Four Rebels in Texas Changed Video Games Forever",
          slug: "doom-1993-how-id-software-changed-everything",
          excerpt:
            "John Carmack, John Romero, and id Software's seismic technological leap that reshaped PC gaming.",
        },
      },
    },
    {
      kind: PostKind.ARTICLE,
      mediaKey: "/images/hardware/sega-saturn.jpg",
      platformKey: "sega",
      categoryKey: "consoles",
      eraKey: "1990s",
      publishedAt: "2024-08-10T13:00:00Z",
      translations: {
        ru: {
          title: "Sega Saturn: 30 лет сложной архитектуре и недооцененным шедеврам",
          slug: "sega-saturn-30-let-arhitektura-i-sudba",
          excerpt:
            "Два чипа Hitachi SH-2, квады вместо треугольников и богатейшая японская библиотека хардкорных игр.",
        },
        uk: {
          title: "Sega Saturn: 30 років складній архітектурі та недооціненим шедеврам",
          slug: "sega-saturn-30-rokiv-arhitektura",
          excerpt:
            "Два процесори Hitachi SH-2, квади замість трикутників та унікальні ігрові шедеври японського ринку.",
        },
        en: {
          title: "Sega Saturn at 30: Architecture, Ambition, and Overlooked Gems",
          slug: "sega-saturn-30-years-architecture-and-fate",
          excerpt:
            "Dual SH-2 processors, quadrilateral rendering, and a treasure trove of Japanese arcade masterpieces.",
        },
      },
    },
    // NEWS items
    {
      kind: PostKind.NEWS,
      mediaKey: "/images/hardware/snes-console.jpg",
      platformKey: "nintendo",
      categoryKey: "consoles",
      eraKey: "1990s",
      publishedAt: "2024-08-15T15:00:00Z",
      isBreaking: true,
      translations: {
        ru: {
          title: "Найден неизвестный прототип игры для SNES",
          slug: "neizvestnyj-prototip-dlya-snes",
          excerpt:
            "Энтузиасты обнаружили раннюю сборку неанонсированной игры Nintendo для Super Nintendo с уникальными уровнями и звуковыми эффектами.",
        },
        uk: {
          title: "Знайдено невідомий прототип гри для SNES",
          slug: "nevidomyj-prototyp-dlya-snes",
          excerpt:
            "Ентузіасти виявили ранній білд неанонсованої гри Nintendo для Super Nintendo з унікальними рівнями.",
        },
        en: {
          title: "Undiscovered SNES Prototype Cartridge Unveiled",
          slug: "unknown-snes-prototype-discovered",
          excerpt:
            "Game archivists discovered an unreleased developmental build of a 1993 Super Nintendo platformer.",
        },
      },
    },
    {
      kind: PostKind.NEWS,
      mediaKey: "/images/hardware/ps1-console.jpg",
      platformKey: "playstation",
      categoryKey: "consoles",
      eraKey: "1990s",
      publishedAt: "2024-08-14T17:00:00Z",
      isBreaking: true,
      translations: {
        ru: {
          title: "Sony отмечает 30 лет PlayStation — главные моменты",
          slug: "sony-30-let-playstation",
          excerpt:
            "Вспоминаем запуск первой серой консоли в декабре 1994 года, CD-аудио и переход от 2D-спрайтов к 3D-мирам.",
        },
        uk: {
          title: "Sony відзначає 30 років PlayStation — головні віхи",
          slug: "sony-30-rokiv-playstation",
          excerpt:
            "Згадуємо запуск культової консолі в грудні 1994 року, CD-аудіо та народження легендарних франшиз.",
        },
        en: {
          title: "Sony Celebrates 30 Years of PlayStation: Milestones & Legacy",
          slug: "sony-celebrates-30-years-of-playstation",
          excerpt:
            "Looking back at the December 1994 launch that changed home interactive entertainment forever.",
        },
      },
    },
    {
      kind: PostKind.NEWS,
      mediaKey: "/images/games/zelda-ocarina.jpg",
      platformKey: "nintendo",
      categoryKey: "dev-history",
      eraKey: "1990s",
      publishedAt: "2024-08-13T12:00:00Z",
      isBreaking: true,
      translations: {
        ru: {
          title: "Раннюю версию Zelda: Ocarina of Time нашли в сети",
          slug: "zelda-ocarina-of-time-early-build",
          excerpt:
            "Архивисты опубликовали дамп картриджа Spaceworld 1997 с экспериментальной боевой системой и другими локациями.",
        },
        uk: {
          title: "Ранню версію Zelda: Ocarina of Time знайдено в мережі",
          slug: "zelda-ocarina-of-time-ranij-bild",
          excerpt:
            "Архівісти опублікували дамп картриджа Spaceworld 1997 з експериментальною бойовою системою.",
        },
        en: {
          title: "Early Build of Zelda: Ocarina of Time Discovered Online",
          slug: "zelda-ocarina-of-time-early-build-recovered",
          excerpt:
            "Archivists have dumped an elusive Spaceworld 1997 cartridge revealing early dungeon layouts and combat mechanics.",
        },
      },
    },
    {
      kind: PostKind.NEWS,
      mediaKey: "/images/hardware/sega-mega-drive.jpg",
      platformKey: "sega",
      categoryKey: "dev-history",
      eraKey: "1990s",
      publishedAt: "2024-08-12T18:00:00Z",
      translations: {
        ru: {
          title: "Новые подробности об отменённой Sonic X-treme",
          slug: "otmenennaya-sonic-x-treme",
          excerpt:
            "Бывшие разработчики Sega of America поделились видеозаписями геймплея на движке Boss Engine для Sega Saturn.",
        },
        uk: {
          title: "Нові подробиці про скасовану Sonic X-treme",
          slug: "skasovana-sonic-x-treme",
          excerpt:
            "Колишні розробники Sega of America опублікували унікальні кадри геймплею скасованого 3D-платформера.",
        },
        en: {
          title: "New Revelations on the Canceled Sonic X-treme Project",
          slug: "canceled-sonic-x-treme-new-builds",
          excerpt:
            "Former STI developers share footage of the lost Saturn platformer running on the proprietary engine.",
        },
      },
    },
    {
      kind: PostKind.NEWS,
      mediaKey: "/images/hardware/gameboy-classic.jpg",
      platformKey: "nintendo",
      categoryKey: "consoles",
      eraKey: "1980s",
      publishedAt: "2024-08-11T10:00:00Z",
      translations: {
        ru: {
          title: "Портативная революция: от Game Boy до современных систем",
          slug: "portativnaya-revolyutsiya",
          excerpt:
            "Как простота, батарейки AA и Тетрис позволили Nintendo сокрушить технологически превосходящих конкурентов.",
        },
        uk: {
          title: "Портативна революція: від Game Boy до сучасних систем",
          slug: "portatyvna-revolyutsiya-game-boy",
          excerpt:
            "Як доступність, енергоефективність та Тетріс допомогли Nintendo здобути світове лідерство.",
        },
        en: {
          title: "The Handheld Revolution: From Game Boy to the Present Day",
          slug: "handheld-revolution-game-boy",
          excerpt:
            "How Gumpei Yokoi's lateral thinking and long battery life conquered the color handheld market.",
        },
      },
    },
  ];

  // 7. Seed Posts and placements
  // Clear old placements to keep clean state
  await prisma.homepagePlacement.deleteMany({});

  let sortOrderBreaking = 1;

  for (const postData of postsToSeed) {
    const featuredMediaId = mediaMap.get(postData.mediaKey);
    const platformId = platformMap.get(postData.platformKey);
    const categoryId = categoryMap.get(postData.categoryKey);
    const eraId = eraMap.get(postData.eraKey);

    // Check if post already exists by checking RU slug
    const existing = await prisma.postTranslation.findUnique({
      where: {
        locale_slug: {
          locale: Locale.RU,
          slug: postData.translations.ru.slug,
        },
      },
      include: { post: true },
    });

    let postId = existing?.postId;

    if (!existing) {
      const createdPost = await prisma.post.create({
        data: {
          kind: postData.kind,
          status: PostStatus.PUBLISHED,
          authorId: author.id,
          featuredMediaId: featuredMediaId ?? null,
          publishedAt: new Date(postData.publishedAt),
          translations: {
            create: [
              {
                locale: Locale.RU,
                slug: postData.translations.ru.slug,
                title: postData.translations.ru.title,
                excerpt: postData.translations.ru.excerpt,
                content: { type: "doc", content: [] },
                translationStatus: TranslationStatus.PUBLISHED,
              },
              {
                locale: Locale.UK,
                slug: postData.translations.uk.slug,
                title: postData.translations.uk.title,
                excerpt: postData.translations.uk.excerpt,
                content: { type: "doc", content: [] },
                translationStatus: TranslationStatus.PUBLISHED,
              },
              {
                locale: Locale.EN,
                slug: postData.translations.en.slug,
                title: postData.translations.en.title,
                excerpt: postData.translations.en.excerpt,
                content: { type: "doc", content: [] },
                translationStatus: TranslationStatus.PUBLISHED,
              },
            ],
          },
          platforms: platformId ? { create: [{ platformId }] } : undefined,
          categories: categoryId ? { create: [{ categoryId }] } : undefined,
          eras: eraId ? { create: [{ eraId }] } : undefined,
        },
      });
      postId = createdPost.id;
      console.log(`Created post: ${postData.translations.ru.title}`);
    } else {
      // Update featured media and taxonomy if already exists
      await prisma.post.update({
        where: { id: existing.postId },
        data: {
          featuredMediaId: featuredMediaId ?? null,
          publishedAt: new Date(postData.publishedAt),
        },
      });
    }

    if (postId && postData.isHero) {
      await prisma.homepagePlacement.create({
        data: {
          slot: "hero",
          postId,
          sortOrder: 1,
        },
      });
      console.log(`Assigned hero placement for ${postId}`);
    }

    if (postId && postData.isBreaking) {
      await prisma.homepagePlacement.create({
        data: {
          slot: "breaking",
          postId,
          sortOrder: sortOrderBreaking++,
        },
      });
      console.log(`Assigned breaking placement #${sortOrderBreaking - 1} for ${postId}`);
    }
  }

  console.log("Database seeded successfully with all authentic retro content!");
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
