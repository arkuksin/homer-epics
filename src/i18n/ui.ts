/**
 * Kleine, statisch gebündelte UI-Strings (Navigation, Buttons, Meta).
 * Der umfangreiche Seiteninhalt liegt in src/content/<lang>/ und wird
 * pro Sprache dynamisch nachgeladen (Code-Splitting).
 */

export type Lang = 'de' | 'en' | 'ru';

export const LANGS: Lang[] = ['de', 'en', 'ru'];

export const LANG_NAMES: Record<Lang, string> = {
  de: 'Deutsch',
  en: 'English',
  ru: 'Русский',
};

export interface UIStrings {
  siteName: string;
  siteTagline: string;
  nav: {
    home: string;
    iliad: string;
    iliadJourney: string;
    odyssey: string;
    odysseyJourney: string;
    characters: string;
    places: string;
    comparison: string;
    glossary: string;
    sources: string;
  };
  navGroups: { iliad: string; odyssey: string; explore: string };
  actions: {
    menuOpen: string;
    menuClose: string;
    backToTop: string;
    skipToContent: string;
    languageSwitcher: string;
    readMore: string;
    showDetails: string;
    hideDetails: string;
    next: string;
    previous: string;
    toJourney: string;
    turningPoint: string;
    progress: string;
    chapterNav: string;
    onThisPage: string;
    loading: string;
  };
  meta: {
    titleSuffix: string;
    descriptions: Record<string, string>;
  };
  notFound: {
    title: string;
    text: string;
    back: string;
  };
  footer: {
    about: string;
    imprint: string;
    license: string;
    sources: string;
    madeWith: string;
  };
}

export const UI: Record<Lang, UIStrings> = {
  de: {
    siteName: 'Homers Epen',
    siteTagline: 'Eine Reise durch Ilias und Odyssee',
    nav: {
      home: 'Startseite',
      iliad: 'Ilias',
      iliadJourney: 'Ilias – Werkreise',
      odyssey: 'Odyssee',
      odysseyJourney: 'Odyssee – Werkreise',
      characters: 'Figuren',
      places: 'Orte & Route',
      comparison: 'Vergleich',
      glossary: 'Glossar',
      sources: 'Quellen',
    },
    navGroups: { iliad: 'Ilias', odyssey: 'Odyssee', explore: 'Entdecken' },
    actions: {
      menuOpen: 'Menü öffnen',
      menuClose: 'Menü schließen',
      backToTop: 'Zurück nach oben',
      skipToContent: 'Zum Inhalt springen',
      languageSwitcher: 'Sprache wählen',
      readMore: 'Weiterlesen',
      showDetails: 'Hintergrund einblenden',
      hideDetails: 'Hintergrund ausblenden',
      next: 'Weiter',
      previous: 'Zurück',
      toJourney: 'Zur geführten Werkreise',
      turningPoint: 'Wendepunkt',
      progress: 'Lesefortschritt',
      chapterNav: 'Kapitelnavigation',
      onThisPage: 'Auf dieser Seite',
      loading: 'Inhalt wird geladen …',
    },
    meta: {
      titleSuffix: 'Homers Epen',
      descriptions: {
        home: 'Eine mehrsprachige, interaktive Entdeckungsreise durch Homers Ilias und Odyssee – Handlung, Figuren, Orte, Themen und Wirkungsgeschichte.',
        iliad: 'Die Ilias: Der Zorn des Achilleus, der Trojanische Krieg, Hektor und Priamos – Entstehung, Handlung, Figuren und Themen des Epos.',
        odyssey: 'Die Odyssee: Odysseus’ lange Heimkehr, Polyphem, Kirke, die Sirenen und Penelope – Entstehung, Handlung, Figuren und Themen des Epos.',
        iliadJourney: 'Geführte Reise durch alle 24 Gesänge der Ilias – mit Etappen, Wendepunkten und Hintergrundwissen.',
        odysseyJourney: 'Geführte Reise durch alle 24 Bücher der Odyssee – mit Etappen, Wendepunkten und Hintergrundwissen.',
        characters: 'Die wichtigsten Figuren aus Ilias und Odyssee – Helden, Götter und ihre Beziehungen im Überblick.',
        places: 'Troja, Ithaka und die Stationen der Irrfahrt: Orte der homerischen Epen auf einer stilisierten Karte.',
        comparison: 'Ilias und Odyssee im direkten Vergleich: Handlung, Erzählstruktur, Heldenbild, Götter und Wirkung.',
        glossary: 'Durchsuchbares Glossar zu Begriffen, Namen und Konzepten der homerischen Epen.',
        sources: 'Quellen und weiterführende Literatur zu Homer, Ilias und Odyssee.',
      },
    },
    notFound: {
      title: 'Seite nicht gefunden',
      text: 'Diese Seite existiert nicht – vielleicht hat ein Lotophage sie verschlungen. Kehren Sie zur Startseite zurück und setzen Sie die Reise fort.',
      back: 'Zur Startseite',
    },
    footer: {
      about: 'Ein Bildungsprojekt über die homerischen Epen – erstellt als moderne digitale Ausstellung.',
      imprint: 'Alle Inhaltszusammenfassungen wurden eigenständig formuliert. Illustrationen wurden mit KI (Codex CLI) im Stil antiker griechischer Vasenmalerei erzeugt.',
      license: 'Quellcode unter MIT-Lizenz',
      sources: 'Quellen & Literatur',
      madeWith: 'Erstellt mit React, TypeScript und Vite',
    },
  },
  en: {
    siteName: "Homer's Epics",
    siteTagline: 'A journey through the Iliad and the Odyssey',
    nav: {
      home: 'Home',
      iliad: 'Iliad',
      iliadJourney: 'Iliad – Guided Tour',
      odyssey: 'Odyssey',
      odysseyJourney: 'Odyssey – Guided Tour',
      characters: 'Characters',
      places: 'Places & Route',
      comparison: 'Comparison',
      glossary: 'Glossary',
      sources: 'Sources',
    },
    navGroups: { iliad: 'Iliad', odyssey: 'Odyssey', explore: 'Explore' },
    actions: {
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      backToTop: 'Back to top',
      skipToContent: 'Skip to content',
      languageSwitcher: 'Choose language',
      readMore: 'Read more',
      showDetails: 'Show background',
      hideDetails: 'Hide background',
      next: 'Next',
      previous: 'Previous',
      toJourney: 'Start the guided tour',
      turningPoint: 'Turning point',
      progress: 'Reading progress',
      chapterNav: 'Chapter navigation',
      onThisPage: 'On this page',
      loading: 'Loading content …',
    },
    meta: {
      titleSuffix: "Homer's Epics",
      descriptions: {
        home: "A multilingual, interactive journey through Homer's Iliad and Odyssey – plot, characters, places, themes and legacy.",
        iliad: 'The Iliad: the wrath of Achilles, the Trojan War, Hector and Priam – origins, plot, characters and themes of the epic.',
        odyssey: "The Odyssey: Odysseus' long journey home, Polyphemus, Circe, the Sirens and Penelope – origins, plot, characters and themes.",
        iliadJourney: 'A guided tour through all 24 books of the Iliad – with stages, turning points and background knowledge.',
        odysseyJourney: 'A guided tour through all 24 books of the Odyssey – with stages, turning points and background knowledge.',
        characters: 'The most important characters of the Iliad and the Odyssey – heroes, gods and their relationships at a glance.',
        places: "Troy, Ithaca and the stations of Odysseus' wanderings: the places of the Homeric epics on a stylised map.",
        comparison: 'The Iliad and the Odyssey compared: plot, narrative structure, heroism, gods and legacy.',
        glossary: 'A searchable glossary of terms, names and concepts of the Homeric epics.',
        sources: 'Sources and further reading on Homer, the Iliad and the Odyssey.',
      },
    },
    notFound: {
      title: 'Page not found',
      text: 'This page does not exist – perhaps a Lotus-eater devoured it. Return to the home page and continue your journey.',
      back: 'Back to home',
    },
    footer: {
      about: 'An educational project about the Homeric epics – built as a modern digital exhibition.',
      imprint: 'All plot summaries were written independently. Illustrations were generated with AI (Codex CLI) in the style of ancient Greek vase painting.',
      license: 'Source code under MIT license',
      sources: 'Sources & further reading',
      madeWith: 'Built with React, TypeScript and Vite',
    },
  },
  ru: {
    siteName: 'Эпосы Гомера',
    siteTagline: 'Путешествие по «Илиаде» и «Одиссее»',
    nav: {
      home: 'Главная',
      iliad: 'Илиада',
      iliadJourney: 'Илиада – путеводитель',
      odyssey: 'Одиссея',
      odysseyJourney: 'Одиссея – путеводитель',
      characters: 'Персонажи',
      places: 'Места и маршрут',
      comparison: 'Сравнение',
      glossary: 'Глоссарий',
      sources: 'Источники',
    },
    navGroups: { iliad: 'Илиада', odyssey: 'Одиссея', explore: 'Исследовать' },
    actions: {
      menuOpen: 'Открыть меню',
      menuClose: 'Закрыть меню',
      backToTop: 'Наверх',
      skipToContent: 'Перейти к содержанию',
      languageSwitcher: 'Выбрать язык',
      readMore: 'Читать далее',
      showDetails: 'Показать подробности',
      hideDetails: 'Скрыть подробности',
      next: 'Далее',
      previous: 'Назад',
      toJourney: 'Начать путеводитель',
      turningPoint: 'Поворотный момент',
      progress: 'Прогресс чтения',
      chapterNav: 'Навигация по главам',
      onThisPage: 'На этой странице',
      loading: 'Загрузка …',
    },
    meta: {
      titleSuffix: 'Эпосы Гомера',
      descriptions: {
        home: 'Многоязычное интерактивное путешествие по «Илиаде» и «Одиссее» Гомера: сюжет, персонажи, места, темы и наследие.',
        iliad: '«Илиада»: гнев Ахилла, Троянская война, Гектор и Приам – происхождение, сюжет, персонажи и темы эпоса.',
        odyssey: '«Одиссея»: долгое возвращение Одиссея, Полифем, Цирцея, сирены и Пенелопа – происхождение, сюжет, персонажи и темы.',
        iliadJourney: 'Путеводитель по всем 24 песням «Илиады»: этапы, поворотные моменты и справочная информация.',
        odysseyJourney: 'Путеводитель по всем 24 песням «Одиссеи»: этапы, поворотные моменты и справочная информация.',
        characters: 'Важнейшие персонажи «Илиады» и «Одиссеи»: герои, боги и их взаимоотношения.',
        places: 'Троя, Итака и станции странствий Одиссея: места гомеровских эпосов на стилизованной карте.',
        comparison: '«Илиада» и «Одиссея» в сравнении: сюжет, повествование, образ героя, боги и наследие.',
        glossary: 'Глоссарий терминов, имён и понятий гомеровских эпосов с поиском.',
        sources: 'Источники и рекомендуемая литература о Гомере, «Илиаде» и «Одиссее».',
      },
    },
    notFound: {
      title: 'Страница не найдена',
      text: 'Этой страницы не существует – возможно, её поглотили лотофаги. Вернитесь на главную и продолжите путешествие.',
      back: 'На главную',
    },
    footer: {
      about: 'Образовательный проект о гомеровских эпосах, задуманный как современная цифровая выставка.',
      imprint: 'Все пересказы сюжета написаны самостоятельно. Иллюстрации созданы с помощью ИИ (Codex CLI) в стиле древнегреческой вазописи.',
      license: 'Исходный код под лицензией MIT',
      sources: 'Источники и литература',
      madeWith: 'Создано с помощью React, TypeScript и Vite',
    },
  },
};
