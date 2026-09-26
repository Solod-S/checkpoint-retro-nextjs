import { PostKind, PostStatus } from "@prisma/client";
import { prisma } from "@/lib/db/prisma";
import { toPrismaLocale, type AppLocale } from "@/lib/i18n/config";
import type { PlatformKey } from "@/types/content";
import type {
  SearchHit,
  SearchParams,
  SearchProvider,
  SearchResult,
} from "./types";

function getSearchableFallbackItems(locale: AppLocale): SearchHit[] {
  if (locale === "en") {
    return [
      // 1970s
      {
        id: "art-space-invaders",
        kind: "ARTICLE",
        title: "Space Invaders (1978): The Coin-Op Panic That Emptied 100-Yen Coins",
        slug: "/en/articles/space-invaders-1978-arcade-revolution",
        excerpt: "Tomohiro Nishikado's solitary masterpiece created an arcade mania and defined the grammar of video game interaction.",
        publishedAt: "AUG 05, 2024",
        readingTimeMinutes: 11,
        imageUrl: "/images/articles/space-invaders-arcade.jpg",
        platform: { key: "arcade", label: "ARCADE" },
        era: "1970s",
        score: 0,
      },
      {
        id: "art-pong-odyssey",
        kind: "STORY",
        title: "Pong & Magnavox Odyssey: How the Living Room TV Became an Interactive Screen",
        slug: "/en/articles/pong-and-magnavox-odyssey-tv-gaming-birth",
        excerpt: "From Ralph Baer's brown box to Nolan Bushnell's coin-op machine: how electronic table tennis started home gaming.",
        publishedAt: "AUG 03, 2024",
        readingTimeMinutes: 10,
        imageUrl: "/images/articles/pong-magnavox-odyssey.jpg",
        platform: { key: "arcade", label: "ARCADE" },
        era: "1970s",
        score: 0,
      },
      {
        id: "art-atari-2600",
        kind: "STORY",
        title: "Atari 2600 VCS (1977): The Wood-Grain Console That Started the Home Revolution",
        slug: "/en/articles/atari-2600-vcs-woodgrain-console-revolution",
        excerpt: "Microprocessor architecture, swappable ROM cartridges, and joystick controls that brought arcades into millions of living rooms.",
        publishedAt: "AUG 02, 2024",
        readingTimeMinutes: 13,
        imageUrl: "/images/articles/atari-2600-console.jpg",
        platform: { key: "arcade", label: "ATARI" },
        era: "1970s",
        score: 0,
      },

      // 1980s
      {
        id: "art-nes-famicom",
        kind: "ARTICLE",
        title: "Famicom & NES Architecture: How Nintendo Saved the Industry After the 1983 Crash",
        slug: "/en/articles/famicom-and-nes-architecture-industry-rebirth",
        excerpt: "Strict quality licensing, the 2A03 audio chip, and Shigeru Miyamoto's creative rebirth of console video games.",
        publishedAt: "AUG 08, 2024",
        readingTimeMinutes: 15,
        imageUrl: "/images/articles/nes-famicom-console.jpg",
        platform: { key: "nintendo", label: "NINTENDO" },
        era: "1980s",
        score: 0,
      },
      {
        id: "art-gameboy",
        kind: "STORY",
        title: "Game Boy (1989): Gunpei Yokoi and the Monochromatic Empire",
        excerpt: "How cheap batteries, a sharp monochrome LCD, and Tetris conquered the portable gaming universe.",
        slug: "/en/articles/game-boy-1989-monochrome-empire",
        publishedAt: "AUG 07, 2024",
        readingTimeMinutes: 11,
        imageUrl: "/images/hardware/gameboy-classic.jpg",
        platform: { key: "nintendo", label: "GAME BOY" },
        era: "1980s",
        score: 0,
      },
      {
        id: "art-sega-megadrive",
        kind: "STORY",
        title: "Sega Mega Drive (1988): Blast Processing and 16-Bit Attitude",
        excerpt: "How Sega dared to challenge Nintendo with arcade speed, Motorola 68000 power, and Sonic the Hedgehog.",
        slug: "/en/articles/sega-mega-drive-16bit-blast-processing",
        publishedAt: "AUG 06, 2024",
        readingTimeMinutes: 14,
        imageUrl: "/images/hardware/sega-mega-drive.jpg",
        platform: { key: "sega", label: "SEGA" },
        era: "1980s",
        score: 0,
      },

      // 1990s
      {
        id: "art-fallout",
        kind: "STORY",
        title: "The Making of the Original Fallout (1997): From GURPS to Wastelands",
        slug: "/en/articles/making-of-original-fallout-1997",
        excerpt: "How Tim Cain, Leonard Boyarsky, and a passionate team engineered the gold standard of post-apocalyptic RPGs.",
        publishedAt: "AUG 15, 2024",
        readingTimeMinutes: 18,
        imageUrl: "/images/games/fallout-vault.jpg",
        platform: { key: "pc", label: "PC" },
        era: "1990s",
        score: 0,
      },
      {
        id: "art-castlevania",
        kind: "ARTICLE",
        title: "Symphony of the Night: How Castlevania Redefined 2D Action on PS1",
        slug: "/en/articles/castlevania-sotn-birth-of-metroidvania",
        excerpt: "Koji Igarashi's non-linear masterpiece proved that 2D gameplay could soar even during the dawn of 3D polygon craze.",
        publishedAt: "AUG 14, 2024",
        readingTimeMinutes: 16,
        imageUrl: "/images/games/castlevania-sotn.jpg",
        platform: { key: "playstation", label: "PLAYSTATION" },
        era: "1990s",
        score: 0,
      },
      {
        id: "art-doom",
        kind: "ARTICLE",
        title: "DOOM (1993): How Four Rebels in Texas Changed Video Games Forever",
        slug: "/en/articles/doom-1993-how-id-software-changed-everything",
        excerpt: "John Carmack, John Romero, and id Software's seismic technological leap that reshaped PC gaming.",
        publishedAt: "AUG 11, 2024",
        readingTimeMinutes: 14,
        imageUrl: "/images/games/doom-classic.jpg",
        platform: { key: "pc", label: "PC" },
        era: "1990s",
        score: 0,
      },
      {
        id: "art-saturn",
        kind: "STORY",
        title: "Sega Saturn at 30: Architecture, Ambition, and Overlooked Gems",
        slug: "/en/articles/sega-saturn-30-years-architecture-and-fate",
        excerpt: "Dual SH-2 processors, quadrilateral rendering, and a treasure trove of Japanese arcade masterpieces.",
        publishedAt: "AUG 10, 2024",
        readingTimeMinutes: 16,
        imageUrl: "/images/hardware/sega-saturn.jpg",
        platform: { key: "sega", label: "SEGA" },
        era: "1990s",
        score: 0,
      },
      {
        id: "art-superfx",
        kind: "ARTICLE",
        title: "Super FX: How Nintendo Brought True 3D to 16-Bit SNES",
        slug: "/en/articles/super-fx-how-nintendo-entered-3d",
        excerpt: "How British pioneers Argonaut Games engineered the world's first mass-market 3D math coprocessor on a cartridge.",
        publishedAt: "AUG 13, 2024",
        readingTimeMinutes: 14,
        imageUrl: "/images/hardware/snes-console.jpg",
        platform: { key: "nintendo", label: "NINTENDO" },
        era: "1990s",
        score: 0,
      },
      {
        id: "art-chrono",
        kind: "ARTICLE",
        title: "Chrono Trigger: Inside Square's Legendary Dream Team",
        slug: "/en/articles/chrono-trigger-the-dream-team",
        excerpt: "How Hironobu Sakaguchi, Yuji Horii, and Akira Toriyama united to create the definitive 16-bit role-playing experience.",
        publishedAt: "AUG 12, 2024",
        readingTimeMinutes: 15,
        imageUrl: "/images/games/chrono-trigger.jpg",
        platform: { key: "nintendo", label: "NINTENDO" },
        era: "1990s",
        score: 0,
      },
      {
        id: "news-snes-proto",
        kind: "NEWS",
        title: "Undiscovered SNES Prototype Cartridge Unveiled",
        slug: "/en/news/unknown-snes-prototype-discovered",
        excerpt: "Game archivists discovered an unreleased developmental build of a 1993 Super Nintendo platformer.",
        publishedAt: "AUG 15, 2024",
        readingTimeMinutes: 5,
        imageUrl: "/images/hardware/snes-console.jpg",
        platform: { key: "nintendo", label: "NINTENDO" },
        era: "1990s",
        score: 0,
      },
      {
        id: "news-ps-30",
        kind: "NEWS",
        title: "Sony Celebrates 30 Years of PlayStation: Milestones & Legacy",
        slug: "/en/news/sony-celebrates-30-years-of-playstation",
        excerpt: "Looking back at the December 1994 launch that changed home console gaming.",
        publishedAt: "AUG 14, 2024",
        readingTimeMinutes: 6,
        imageUrl: "/images/hardware/ps1-console.jpg",
        platform: { key: "playstation", label: "PLAYSTATION" },
        era: "1990s",
        score: 0,
      },
      {
        id: "news-zelda-early",
        kind: "NEWS",
        title: "Early Build of Zelda: Ocarina of Time Discovered",
        slug: "/en/news/zelda-ocarina-of-time-early-build-recovered",
        excerpt: "Archivists dump authentic Spaceworld 1997 build with cut dungeons and combat logic.",
        publishedAt: "AUG 10, 2024",
        readingTimeMinutes: 5,
        imageUrl: "/images/games/zelda-ocarina.jpg",
        platform: { key: "nintendo", label: "NINTENDO" },
        era: "1990s",
        score: 0,
      },

      // 2000s
      {
        id: "art-dreamcast",
        kind: "STORY",
        title: "Why Dreamcast was Ahead of Its Time",
        slug: "/en/articles/why-dreamcast-was-ahead-of-its-time",
        excerpt: "Bold ideas, built-in 56k modem, VMU memory card screen, and timeless classics. Why Sega's swan song was a vision of future gaming.",
        publishedAt: "AUG 16, 2024",
        readingTimeMinutes: 12,
        imageUrl: "/images/hardware/dreamcast-hero.jpg",
        platform: { key: "sega", label: "SEGA" },
        era: "2000s",
        score: 0,
      },
      {
        id: "art-deus-ex",
        kind: "ARTICLE",
        title: "Deus Ex (2000): Warren Spector's Cyberpunk Immersion Masterpiece",
        slug: "/en/articles/deus-ex-2000-cyberpunk-immersive-sim",
        excerpt: "Unrivaled player agency, emergent stealth systems, and philosophical conspiracies that defined immersive sims.",
        publishedAt: "AUG 04, 2024",
        readingTimeMinutes: 15,
        imageUrl: "/images/articles/deus-ex-cyberpunk.jpg",
        platform: { key: "pc", label: "PC" },
        era: "2000s",
        score: 0,
      },
      {
        id: "art-halflife-2",
        kind: "STORY",
        title: "Half-Life 2 (2004) & Steam: How Valve Pioneered Digital Distribution",
        slug: "/en/articles/half-life-2-source-engine-and-steam-revolution",
        excerpt: "Source Engine physics, dystopian storytelling in City 17, and the software client that transformed PC gaming forever.",
        publishedAt: "AUG 01, 2024",
        readingTimeMinutes: 16,
        imageUrl: "/images/articles/half-life-2-city17.jpg",
        platform: { key: "pc", label: "PC" },
        era: "2000s",
        score: 0,
      },
    ];
  }

  if (locale === "uk") {
    return [
      // 1970s
      {
        id: "art-space-invaders",
        kind: "ARTICLE",
        title: "Space Invaders (1978): Аркадний феномен, що створив дефіцит 100-єнових монет",
        slug: "/uk/articles/space-invaders-1978-arkadna-revolyutsiya",
        excerpt: "Шедевр Томохіро Нішікадо, який започаткував еру аркадних залів та сформував основи відеоігрового геймплею.",
        publishedAt: "05 СЕРП 2024",
        readingTimeMinutes: 11,
        imageUrl: "/images/articles/space-invaders-arcade.jpg",
        platform: { key: "arcade", label: "ARCADE" },
        era: "1970s",
        score: 0,
      },
      {
        id: "art-pong-odyssey",
        kind: "STORY",
        title: "Pong та Magnavox Odyssey: Як екран телевізора став ігровим полем",
        slug: "/uk/articles/pong-ta-magnavox-odyssey-narodzhennya-domashnih-igor",
        excerpt: "Від коричневої коробки Ральфа Баєра до комерційного тріумфу Atari: історія народження домашніх консолей.",
        publishedAt: "03 СЕРП 2024",
        readingTimeMinutes: 10,
        imageUrl: "/images/articles/pong-magnavox-odyssey.jpg",
        platform: { key: "arcade", label: "ARCADE" },
        era: "1970s",
        score: 0,
      },
      {
        id: "art-atari-2600",
        kind: "STORY",
        title: "Atari 2600 VCS (1977): Дерев'яна консоль, яка започаткувала еру картриджів",
        slug: "/uk/articles/atari-2600-vcs-derevyana-konsol-revolyutsiya",
        excerpt: "Перша по-справжньому масова система зі змінними іграми, що змінила домашні розваги назавжди.",
        publishedAt: "02 СЕРП 2024",
        readingTimeMinutes: 13,
        imageUrl: "/images/articles/atari-2600-console.jpg",
        platform: { key: "arcade", label: "ATARI" },
        era: "1970s",
        score: 0,
      },

      // 1980s
      {
        id: "art-nes-famicom",
        kind: "ARTICLE",
        title: "Архітектура Famicom та NES: Як Nintendo врятувала індустрію після краху 1983 року",
        slug: "/uk/articles/arhitektura-famicom-ta-nes-poryatunok-industriyi",
        excerpt: "Суворий контроль якості, чип 2A03 та геній Сігеру Міямото, що повернули довіру гравців у всьому світі.",
        publishedAt: "08 СЕРП 2024",
        readingTimeMinutes: 15,
        imageUrl: "/images/articles/nes-famicom-console.jpg",
        platform: { key: "nintendo", label: "NINTENDO" },
        era: "1980s",
        score: 0,
      },
      {
        id: "art-gameboy",
        kind: "STORY",
        title: "Game Boy (1989): Ґунпей Йокої та філософія монохромної імперії",
        excerpt: "Як доступні батарейки, надійність та Тетріс підкорили світ портативних відеоігор.",
        slug: "/uk/articles/game-boy-1989-monohromna-imperiya",
        publishedAt: "07 СЕРП 2024",
        readingTimeMinutes: 11,
        imageUrl: "/images/hardware/gameboy-classic.jpg",
        platform: { key: "nintendo", label: "GAME BOY" },
        era: "1980s",
        score: 0,
      },
      {
        id: "art-sega-megadrive",
        kind: "STORY",
        title: "Sega Mega Drive (1988): 16-бітний бунт, що кинув виклик гегемонії Nintendo",
        excerpt: "Аркадна швидкість, процесор Motorola 68000 та поява їжака Соніка в епоху великої війни консолей.",
        slug: "/uk/articles/sega-mega-drive-16bit-bunt-proty-nintendo",
        publishedAt: "06 СЕРП 2024",
        readingTimeMinutes: 14,
        imageUrl: "/images/hardware/sega-mega-drive.jpg",
        platform: { key: "sega", label: "SEGA" },
        era: "1980s",
        score: 0,
      },

      // 1990s
      {
        id: "art-fallout",
        kind: "STORY",
        title: "Як народжувався оригінальний Fallout (1997): від GURPS до пусток",
        slug: "/uk/articles/yak-narodzhuvavsya-originalnyj-fallout-1997",
        excerpt: "Історія про те, як Тім Кейн і невелика команда ентузіастів створили еталонну рольову гру всупереч скепсису видавця.",
        publishedAt: "15 СЕРП 2024",
        readingTimeMinutes: 18,
        imageUrl: "/images/games/fallout-vault.jpg",
        platform: { key: "pc", label: "PC" },
        era: "1990s",
        score: 0,
      },
      {
        id: "art-castlevania",
        kind: "ARTICLE",
        title: "Симфонія ночі: Як Castlevania SOTN перевинайшла жанр на PlayStation",
        slug: "/uk/articles/castlevania-sotn-istoriya",
        excerpt: "Кодзі Іґарасі та його тріумф 2D-геймдизайну у часи масового переходу індустрії до тривимірності.",
        publishedAt: "14 СЕРП 2024",
        readingTimeMinutes: 16,
        imageUrl: "/images/games/castlevania-sotn.jpg",
        platform: { key: "playstation", label: "PLAYSTATION" },
        era: "1990s",
        score: 0,
      },
      {
        id: "art-doom",
        kind: "ARTICLE",
        title: "DOOM (1993): Як четверо хлопців у Техасі змінили відеоігри назавжди",
        slug: "/uk/articles/doom-1993-yak-id-software-pidirvala-svit",
        excerpt: "Джон Кармак, Джон Ромеро та революція id Software, яка сформувала сучасний екшен від першої особи.",
        publishedAt: "11 СЕРП 2024",
        readingTimeMinutes: 14,
        imageUrl: "/images/games/doom-classic.jpg",
        platform: { key: "pc", label: "PC" },
        era: "1990s",
        score: 0,
      },
      {
        id: "art-saturn",
        kind: "STORY",
        title: "Sega Saturn: 30 років складній архітектурі та недооціненим шедеврам",
        slug: "/uk/articles/sega-saturn-30-rokiv-arhitektura",
        excerpt: "Два процесори Hitachi SH-2, квади замість трикутників та унікальні ігрові шедеври японського ринку.",
        publishedAt: "10 СЕРП 2024",
        readingTimeMinutes: 16,
        imageUrl: "/images/hardware/sega-saturn.jpg",
        platform: { key: "sega", label: "SEGA" },
        era: "1990s",
        score: 0,
      },
      {
        id: "art-superfx",
        kind: "ARTICLE",
        title: "Super FX: Як Nintendo подарувала 16-бітній SNES справжнє 3D",
        excerpt: "Як британські розробники з Argonaut створили перший масовий 3D-чип усередині картриджа.",
        slug: "/uk/articles/super-fx-yak-nintendo-uviyshla-v-3d",
        publishedAt: "13 СЕРП 2024",
        readingTimeMinutes: 14,
        imageUrl: "/images/hardware/snes-console.jpg",
        platform: { key: "nintendo", label: "NINTENDO" },
        era: "1990s",
        score: 0,
      },
      {
        id: "art-chrono",
        kind: "ARTICLE",
        title: "Chrono Trigger: Історія створення шедевра Команди Мрії",
        excerpt: "Як Сакагучі, Хорії та Торіяма об'єдналися заради створення вічної 16-бітної RPG.",
        slug: "/uk/articles/chrono-trigger-istoriya-stvorennya",
        publishedAt: "12 СЕРП 2024",
        readingTimeMinutes: 15,
        imageUrl: "/images/games/chrono-trigger.jpg",
        platform: { key: "nintendo", label: "NINTENDO" },
        era: "1990s",
        score: 0,
      },
      {
        id: "news-snes-proto",
        kind: "NEWS",
        title: "Знайдено невідомий прототип гри для SNES",
        slug: "/uk/news/nevidomyj-prototyp-dlya-snes",
        excerpt: "Архівісти виявили неанонсований білд 1993 року з ефектами Mode 7.",
        publishedAt: "15 СЕРП 2024",
        readingTimeMinutes: 5,
        imageUrl: "/images/hardware/snes-console.jpg",
        platform: { key: "nintendo", label: "NINTENDO" },
        era: "1990s",
        score: 0,
      },
      {
        id: "news-ps-30",
        kind: "NEWS",
        title: "Sony святкує 30-річчя бренду PlayStation: віхи та спадщина",
        slug: "/uk/news/sony-30-rokiv-playstation",
        excerpt: "Згадуємо запуск грудня 1994 року, що назавжди змінив консольний ринок.",
        publishedAt: "14 СЕРП 2024",
        readingTimeMinutes: 6,
        imageUrl: "/images/news/playstation-launch-1994.jpg",
        platform: { key: "playstation", label: "PLAYSTATION" },
        era: "1990s",
        score: 0,
      },

      // 2000s
      {
        id: "art-dreamcast",
        kind: "STORY",
        title: "Чому Dreamcast випередила свій час",
        slug: "/uk/articles/chomu-dreamcast-vperedyla-sviy-chas",
        excerpt: "Сміливі ідеї, вбудований модем, екранчик VMU та ігри, які досі виглядають сучасно. Досліджуємо останню домашню консоль Sega.",
        publishedAt: "16 СЕРП 2024",
        readingTimeMinutes: 12,
        imageUrl: "/images/hardware/dreamcast-hero.jpg",
        platform: { key: "sega", label: "SEGA" },
        era: "2000s",
        score: 0,
      },
      {
        id: "art-deus-ex",
        kind: "ARTICLE",
        title: "Deus Ex (2000): Кіберпанк-шедевр та еталон свободи вибору",
        slug: "/uk/articles/deus-ex-2000-kiberpank-shedevr-immersivnyh-symulyatoriv",
        excerpt: "Небачена варіативність проходження, філософські змови та народження жанру імерсивного симулятора.",
        publishedAt: "04 СЕРП 2024",
        readingTimeMinutes: 15,
        imageUrl: "/images/articles/deus-ex-cyberpunk.jpg",
        platform: { key: "pc", label: "PC" },
        era: "2000s",
        score: 0,
      },
      {
        id: "art-halflife-2",
        kind: "STORY",
        title: "Half-Life 2 (2004) та Steam: Як Valve заклала фундамент цифрової ери",
        slug: "/uk/articles/half-life-2-rushiy-source-ta-revolyutsiya-steam",
        excerpt: "Фізика рушія Source, атмосфера Сіті-17 та інноваційний клієнт, що назавжди змінив ПК-геймінг.",
        publishedAt: "01 СЕРП 2024",
        readingTimeMinutes: 16,
        imageUrl: "/images/articles/half-life-2-city17.jpg",
        platform: { key: "pc", label: "PC" },
        era: "2000s",
        score: 0,
      },
    ];
  }

  // ru
  return [
    // 1970s
    {
      id: "art-space-invaders",
      kind: "ARTICLE",
      title: "Space Invaders (1978): Аркадный феномен, вызвавший дефицит 100-иеновых монет",
      slug: "/ru/articles/space-invaders-1978-arkadnaya-revolyuciya",
      excerpt: "Одиночный триумф Томохиро Нисикадо, породивший культуру аркадных центров и заложивший грамматику интерактивных развлечений.",
      publishedAt: "05 АВГ 2024",
      readingTimeMinutes: 11,
      imageUrl: "/images/articles/space-invaders-arcade.jpg",
      platform: { key: "arcade", label: "ARCADE" },
      era: "1970s",
      score: 0,
    },
    {
      id: "art-pong-odyssey",
      kind: "STORY",
      title: "Pong и Magnavox Odyssey: Как домашний телевизор стал игровой ареной",
      slug: "/ru/articles/pong-i-magnavox-odyssey-rozhdenie-domashnih-videoigr",
      excerpt: "От «Коричневой коробки» Ральфа Баера до монетного автомата Нолана Бушнелла: хроника зарождения индустрии видеоигр.",
      publishedAt: "03 АВГ 2024",
      readingTimeMinutes: 10,
      imageUrl: "/images/articles/pong-magnavox-odyssey.jpg",
      platform: { key: "arcade", label: "ARCADE" },
      era: "1970s",
      score: 0,
    },
    {
      id: "art-atari-2600",
      kind: "STORY",
      title: "Atari 2600 VCS (1977): Консоль с отделкой под дерево, начавшая эру картриджей",
      slug: "/ru/articles/atari-2600-vcs-derevyannaya-konsol-revolyuciya",
      excerpt: "Сменные картриджи, одноплатная микросхема и первый домашний контроллер-джойстик, покорившие гостиные всего мира.",
      publishedAt: "02 АВГ 2024",
      readingTimeMinutes: 13,
      imageUrl: "/images/articles/atari-2600-console.jpg",
      platform: { key: "arcade", label: "ATARI" },
      era: "1970s",
      score: 0,
    },

    // 1980s
    {
      id: "art-nes-famicom",
      kind: "ARTICLE",
      title: "Архитектура Famicom и NES: Как Nintendo спасла индустрию после краха 1983 года",
      slug: "/ru/articles/arhitektura-famicom-i-nes-spasenie-industrii",
      excerpt: "Строгий контроль качества, звуковой процессор 2A03 и геймдизайн Сигэру Миямото, вернувшие доверие к домашним консолям.",
      publishedAt: "08 АВГ 2024",
      readingTimeMinutes: 15,
      imageUrl: "/images/articles/nes-famicom-console.jpg",
      platform: { key: "nintendo", label: "NINTENDO" },
      era: "1980s",
      score: 0,
    },
    {
      id: "art-gameboy",
      kind: "STORY",
      title: "Game Boy (1989): Гумпэй Ёкои и философия монохромной империи",
      excerpt: "Как дешевые батарейки, резкий монохромный экран и Тетрис покорили мир портативных видеоигр.",
      slug: "/ru/articles/game-boy-1989-monohromnaya-imperiya",
      publishedAt: "07 АВГ 2024",
      readingTimeMinutes: 11,
      imageUrl: "/images/hardware/gameboy-classic.jpg",
      platform: { key: "nintendo", label: "GAME BOY" },
      era: "1980s",
      score: 0,
    },
    {
      id: "art-sega-megadrive",
      kind: "STORY",
      title: "Sega Mega Drive (1988): 16-битный бунт, бросивший вызов монополии Nintendo",
      excerpt: "Скорость аркадных автоматов, мощный чип Motorola 68000 и появление ежа Соника в золотую эпоху консольных войн.",
      slug: "/ru/articles/sega-mega-drive-16bit-bunt-protiv-nintendo",
      publishedAt: "06 АВГ 2024",
      readingTimeMinutes: 14,
      imageUrl: "/images/hardware/sega-mega-drive.jpg",
      platform: { key: "sega", label: "SEGA" },
      era: "1980s",
      score: 0,
    },

    // 1990s
    {
      id: "art-fallout",
      kind: "STORY",
      title: "Как рождался оригинальный Fallout (1997): от GURPS к пустошам",
      slug: "/ru/articles/kak-rozhdalsya-originalnyj-fallout-1997",
      excerpt: "История о том, как Тим Кейн, Леонард Боярский и небольшая команда энтузиастов создали эталон постапокалиптической RPG вопреки сомнениям руководства.",
      publishedAt: "15 АВГ 2024",
      readingTimeMinutes: 18,
      imageUrl: "/images/games/fallout-vault.jpg",
      platform: { key: "pc", label: "PC" },
      era: "1990s",
      score: 0,
    },
    {
      id: "art-castlevania",
      kind: "ARTICLE",
      title: "Симфония ночи: Как Castlevania SOTN переизобрела жанр на PlayStation",
      slug: "/ru/articles/castlevania-symphony-of-the-night-kak-sozdavalas-metroidvaniya",
      excerpt: "Кодзи Игараси и его революция в 2D-геймдизайне в эпоху тотального перехода индустрии в полигональное 3D.",
      publishedAt: "14 АВГ 2024",
      readingTimeMinutes: 16,
      imageUrl: "/images/games/castlevania-sotn.jpg",
      platform: { key: "playstation", label: "PLAYSTATION" },
      era: "1990s",
      score: 0,
    },
    {
      id: "art-doom",
      kind: "ARTICLE",
      title: "DOOM (1993): Как четверо парней в Техасе изменили видеоигры навсегда",
      slug: "/ru/articles/doom-1993-kak-id-software-vzorvala-mir",
      excerpt: "Джон Кармак, Джон Ромеро и технологический прорыв id Software, определивший вектор индустрии на десятилетия.",
      publishedAt: "11 АВГ 2024",
      readingTimeMinutes: 14,
      imageUrl: "/images/games/doom-classic.jpg",
      platform: { key: "pc", label: "PC" },
      era: "1990s",
      score: 0,
    },
    {
      id: "art-saturn",
      kind: "STORY",
      title: "Sega Saturn: 30 лет сложной архитектуре и недооцененным шедеврам",
      slug: "/ru/articles/sega-saturn-30-let-arhitektura-i-sudba",
      excerpt: "Два чипа Hitachi SH-2, квады вместо треугольников и богатейшая японская библиотека хардкорных игр.",
      publishedAt: "10 АВГ 2024",
      readingTimeMinutes: 16,
      imageUrl: "/images/hardware/sega-saturn.jpg",
      platform: { key: "sega", label: "SEGA" },
      era: "1990s",
      score: 0,
    },
    {
      id: "art-superfx",
      kind: "ARTICLE",
      title: "Super FX: Как Nintendo подарила 16-битной SNES настоящее 3D",
      slug: "/ru/articles/super-fx-kak-nintendo-voshla-v-3d",
      excerpt: "Как британские инженеры из Argonaut создали первый массовый 3D-чип внутри картриджа.",
      publishedAt: "13 АВГ 2024",
      readingTimeMinutes: 14,
      imageUrl: "/images/hardware/snes-console.jpg",
      platform: { key: "nintendo", label: "NINTENDO" },
      era: "1990s",
      score: 0,
    },
    {
      id: "art-chrono",
      kind: "ARTICLE",
      title: "Chrono Trigger: История создания шедевра Команды Мечты",
      excerpt: "Как Сакагути, Хории и Акира Торияма объединились ради создания неподвластной времени ролевой игры.",
      slug: "/ru/articles/chrono-trigger-istoriya-sozdaniya-dream-team",
      publishedAt: "12 АВГ 2024",
      readingTimeMinutes: 15,
      imageUrl: "/images/games/chrono-trigger.jpg",
      platform: { key: "nintendo", label: "NINTENDO" },
      era: "1990s",
      score: 0,
    },

    // 2000s
    {
      id: "art-dreamcast",
      kind: "STORY",
      title: "Почему Sega Dreamcast опередила свое время",
      slug: "/ru/articles/pochemu-dreamcast-operedila-svoyo-vremya",
      excerpt: "Смелые идеи, встроенный модем, экранчик VMU и игры, которые до сих пор выглядят современно. Разбираемся, почему последняя консоль Sega была взглядом в будущее.",
      publishedAt: "16 АВГ 2024",
      readingTimeMinutes: 12,
      imageUrl: "/images/hardware/dreamcast-hero.jpg",
      platform: { key: "sega", label: "SEGA" },
      era: "2000s",
      score: 0,
    },
    {
      id: "art-deus-ex",
      kind: "ARTICLE",
      title: "Deus Ex (2000): Киберпанк-шедевр Уоррена Спектора и эталон свободы выбора",
      slug: "/ru/articles/deus-ex-2000-kiberpank-shedevr-immersivnyh-simulyatorov",
      excerpt: "Невиданная вариативность прохождения, многослойные заговоры и становление жанра immersive sim.",
      publishedAt: "04 АВГ 2024",
      readingTimeMinutes: 15,
      imageUrl: "/images/articles/deus-ex-cyberpunk.jpg",
      platform: { key: "pc", label: "PC" },
      era: "2000s",
      score: 0,
    },
    {
      id: "art-halflife-2",
      kind: "STORY",
      title: "Half-Life 2 (2004) и Steam: Как Valve заложила фундамент цифровой дистрибуции",
      slug: "/ru/articles/half-life-2-dvizhok-source-i-revolyuciya-steam",
      excerpt: "Физика Source, атмосфера Сити-17 и онлайн-клиент, навсегда изменивший ландшафт ПК-гейминга.",
      publishedAt: "01 АВГ 2024",
      readingTimeMinutes: 16,
      imageUrl: "/images/articles/half-life-2-city17.jpg",
      platform: { key: "pc", label: "PC" },
      era: "2000s",
      score: 0,
    },
    {
      id: "news-snes-proto",
      kind: "NEWS",
      title: "Найден неизвестный прототип игры для SNES",
      slug: "/ru/news/neizvestnyj-prototip-dlya-snes",
      excerpt: "Архивисты обнаружили неанонсированную сборку 1993 года с эффектами Mode 7.",
      publishedAt: "15 АВГ 2024",
      readingTimeMinutes: 5,
      imageUrl: "/images/hardware/snes-console.jpg",
      platform: { key: "nintendo", label: "NINTENDO" },
      era: "1990s",
      score: 0,
    },
    {
      id: "news-ps-30",
      kind: "NEWS",
      title: "Sony отмечает 30-летие PlayStation: вехи и наследие",
      slug: "/ru/news/sony-30-let-playstation",
      excerpt: "Вспоминаем релиз декабря 1994 года, навсегда изменивший расстановку сил в индустрии.",
      publishedAt: "14 АВГ 2024",
      readingTimeMinutes: 6,
      imageUrl: "/images/news/playstation-launch-1994.jpg",
      platform: { key: "playstation", label: "PLAYSTATION" },
      era: "1990s",
      score: 0,
    },
  ];
}

export class FallbackSearchProvider implements SearchProvider {
  async search(params: SearchParams): Promise<SearchResult> {
    const {
      query,
      locale,
      kind = "ALL",
      platform,
      era,
      page = 1,
      pageSize = 6,
      sort = "relevance",
    } = params;

    const allItems = getSearchableFallbackItems(locale);
    const cleanQuery = query.trim().toLowerCase();
    const queryTerms = cleanQuery.split(/\s+/).filter(Boolean);

    // Score hits based on query match
    const scoredHits = allItems
      .map((item) => {
        if (!cleanQuery) {
          return { ...item, score: 10 };
        }

        let score = 0;
        const lowerTitle = item.title.toLowerCase();
        const lowerExcerpt = item.excerpt.toLowerCase();
        const lowerPlatform = (item.platform?.label ?? "").toLowerCase();
        const lowerEra = (item.era ?? "").toLowerCase();

        // 1. Exact phrase match in title
        if (lowerTitle.includes(cleanQuery)) {
          score += 100;
        }

        // 2. Exact phrase match in excerpt
        if (lowerExcerpt.includes(cleanQuery)) {
          score += 50;
        }

        // 3. Platform match
        if (lowerPlatform.includes(cleanQuery)) {
          score += 40;
        }

        // 4. Era match
        if (lowerEra.includes(cleanQuery)) {
          score += 35;
        }

        // 5. Term matches
        for (const term of queryTerms) {
          if (lowerTitle.includes(term)) score += 30;
          if (lowerExcerpt.includes(term)) score += 15;
          if (lowerPlatform.includes(term)) score += 20;
          if (lowerEra.includes(term)) score += 20;
        }

        // 6. Recency factor
        score += 5;

        return { ...item, score };
      })
      .filter((item) => {
        // If query was entered, only return items with positive match
        if (cleanQuery && item.score <= 5) return false;

        // Filter by Kind
        if (kind !== "ALL") {
          if (item.kind !== kind) return false;
        }

        // Filter by Platform
        if (platform && platform !== "all") {
          if (item.platform?.key.toLowerCase() !== platform.toLowerCase()) {
            return false;
          }
        }

        // Filter by Era
        if (era && era !== "all") {
          const cleanEra = era.toLowerCase().replace("era-", "");
          if (!item.era || !item.era.toLowerCase().includes(cleanEra)) {
            return false;
          }
        }

        return true;
      });

    // Counts by kind across the filtered query
    const counts = {
      all: scoredHits.length,
      news: scoredHits.filter((h) => h.kind === "NEWS").length,
      article: scoredHits.filter((h) => h.kind === "ARTICLE").length,
      story: scoredHits.filter((h) => h.kind === "STORY").length,
    };

    // Sort
    if (sort === "date_desc") {
      scoredHits.reverse();
    } else {
      scoredHits.sort((a, b) => b.score - a.score);
    }

    // Pagination
    const total = scoredHits.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const safePage = Math.max(1, Math.min(page, totalPages));
    const offset = (safePage - 1) * pageSize;
    const paginatedHits = scoredHits.slice(offset, offset + pageSize);

    return {
      query,
      hits: paginatedHits,
      total,
      page: safePage,
      pageSize,
      totalPages,
      countsByKind: counts,
    };
  }
}

export class PostgresSearchProvider implements SearchProvider {
  private fallback = new FallbackSearchProvider();

  async search(params: SearchParams): Promise<SearchResult> {
    try {
      const prismaLocale = toPrismaLocale(params.locale);
      const cleanQuery = params.query.trim();
      const pageSize = params.pageSize ?? 6;
      const requestedPage = Math.max(1, params.page ?? 1);

      // Base filter for search query and platform
      const baseFilter = {
        status: PostStatus.PUBLISHED,
        deletedAt: null,
        ...(params.platform && params.platform !== "all"
          ? {
              platforms: {
                some: {
                  platform: { key: params.platform },
                },
              },
            }
          : {}),
        translations: {
          some: {
            locale: prismaLocale,
            ...(cleanQuery
              ? {
                  OR: [
                    { title: { contains: cleanQuery, mode: "insensitive" as const } },
                    { excerpt: { contains: cleanQuery, mode: "insensitive" as const } },
                  ],
                }
              : {}),
          },
        },
      };

      const queryWithKind = {
        ...baseFilter,
        ...(params.kind && params.kind !== "ALL"
          ? { kind: params.kind as PostKind }
          : {}),
      };

      const [totalMatchingKind, totalNews, totalArticles, totalStories] =
        await Promise.all([
          prisma.post.count({ where: queryWithKind }),
          prisma.post.count({ where: { ...baseFilter, kind: PostKind.NEWS } }),
          prisma.post.count({ where: { ...baseFilter, kind: PostKind.ARTICLE } }),
          prisma.post.count({ where: { ...baseFilter, kind: PostKind.STORY } }),
        ]);

      if (totalMatchingKind === 0 && cleanQuery === "" && params.era) {
        return this.fallback.search(params);
      }

      const totalAll = totalNews + totalArticles + totalStories;
      const totalPages = Math.max(1, Math.ceil(totalMatchingKind / pageSize));
      const safePage = Math.max(1, Math.min(requestedPage, totalPages));

      const posts = await prisma.post.findMany({
        where: queryWithKind,
        include: {
          translations: { where: { locale: prismaLocale } },
          platforms: {
            include: {
              platform: {
                include: { translations: { where: { locale: prismaLocale } } },
              },
            },
          },
          author: {
            include: { translations: { where: { locale: prismaLocale } } },
          },
          featuredMedia: true,
        },
        orderBy: { publishedAt: "desc" },
        take: pageSize,
        skip: (safePage - 1) * pageSize,
      });

      const hits: SearchHit[] = posts.map((post) => {
        const tr = post.translations[0];
        const plat = post.platforms[0]?.platform;
        const platTr = plat?.translations[0];

        return {
          id: post.id,
          kind: post.kind,
          title: tr?.title ?? "",
          slug: `/${params.locale}/${post.kind === PostKind.NEWS ? "news" : "articles"}/${tr?.slug ?? post.id}`,
          excerpt: tr?.excerpt ?? "",
          publishedAt: post.publishedAt
            ? new Intl.DateTimeFormat(params.locale, {
                day: "numeric",
                month: "short",
                year: "numeric",
              }).format(post.publishedAt)
            : "",
          readingTimeMinutes: 3,
          imageUrl: post.featuredMedia?.storageKey ?? "/images/games/fallout-vault.jpg",
          platform: plat
            ? {
                key: plat.key as PlatformKey,
                label: platTr?.name ?? plat.key.toUpperCase(),
              }
            : undefined,
          authorName: post.author?.translations[0]?.name,
          score: 10,
        };
      });

      return {
        query: params.query,
        hits,
        total: totalMatchingKind,
        page: safePage,
        pageSize,
        totalPages,
        countsByKind: {
          all: totalAll,
          news: totalNews,
          article: totalArticles,
          story: totalStories,
        },
      };
    } catch {
      return this.fallback.search(params);
    }
  }
}

export function getSearchProvider(): SearchProvider {
  return new PostgresSearchProvider();
}
