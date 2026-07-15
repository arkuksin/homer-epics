import type { SourcesContent } from '../types';

const sources: SourcesContent = {
  title: 'Quellen und weiterführende Literatur',
  intro: [
    'Die Inhalte dieser Website beruhen auf den homerischen Epen selbst sowie auf etablierter Forschungs- und Überblicksliteratur. Alle Zusammenfassungen und Erläuterungen wurden eigenständig formuliert; wörtliche Zitate aus modernen Übersetzungen wurden bewusst vermieden.',
    'Die folgende Auswahl nennt seriöse Ausgaben, Standardwerke und frei zugängliche Ressourcen für alle, die tiefer einsteigen möchten.',
  ],
  note:
    'Hinweis: Aussagen zu Entstehung, Datierung und Verfasserschaft der Epen geben den Diskussionsstand wieder – vieles davon ist Gegenstand laufender Forschung und wird auf dieser Website entsprechend als offen gekennzeichnet.',
  kinds: {
    edition: 'Textausgaben & Übersetzungen',
    scholarship: 'Forschung & Einführungen',
    reference: 'Nachschlagewerke',
    web: 'Frei zugängliche Online-Ressourcen',
  },
  entries: [
    {
      title: 'Homer: Ilias. Übersetzung von Johann Heinrich Voß (1793)',
      detail:
        'Die klassische deutsche Versübersetzung, gemeinfrei und in vielen Ausgaben greifbar; bis heute prägend für das deutsche Homer-Bild.',
      kind: 'edition',
    },
    {
      title: 'Homer: Ilias. Neuübersetzung von Kurt Steinmann (Manesse, 2017)',
      detail:
        'Moderne, gut lesbare deutsche Versübersetzung mit Anmerkungen und Nachwort.',
      kind: 'edition',
    },
    {
      title: 'Homer: Odyssee. Neuübersetzung von Kurt Steinmann (Manesse, 2007)',
      detail:
        'Vielgelobte moderne Versübersetzung der Odyssee ins Deutsche.',
      kind: 'edition',
    },
    {
      title: 'Homer: The Iliad / The Odyssey. Übersetzungen von Richmond Lattimore, Robert Fagles und Emily Wilson',
      detail:
        'Maßgebliche englische Übersetzungen; Emily Wilsons Odyssey (2017) und Iliad (2023) gelten als moderne Referenzen.',
      kind: 'edition',
    },
    {
      title: 'Joachim Latacz: Troia und Homer. Der Weg zur Lösung eines alten Rätsels',
      detail:
        'Standardwerk zur Frage nach dem historischen Kern der Troja-Sage, unter Einbeziehung der Hisarlik-Grabungen und hethitischer Quellen (zuerst 2001, mehrfach aktualisiert).',
      kind: 'scholarship',
    },
    {
      title: 'Barbara Patzek: Homer und seine Zeit (C.H. Beck Wissen)',
      detail:
        'Knappe, zuverlässige Einführung in Entstehungskontext, mündliche Tradition und Homerische Frage.',
      kind: 'scholarship',
    },
    {
      title: 'Milman Parry / Albert B. Lord: The Singer of Tales (1960)',
      detail:
        'Grundlagenwerk der Oral-Poetry-Forschung: Wie mündliche Sänger lange Epen komponieren – mit weitreichenden Folgen für das Verständnis Homers.',
      kind: 'scholarship',
    },
    {
      title: 'Jasper Griffin: Homer on Life and Death (Oxford, 1980)',
      detail:
        'Einflussreiche Studie zu Sterblichkeit, Göttern und Menschenbild in den Epen.',
      kind: 'scholarship',
    },
    {
      title: 'Der Neue Pauly. Enzyklopädie der Antike',
      detail:
        'Maßgebliches deutschsprachiges Nachschlagewerk zu allen Personen, Orten und Begriffen der Antike.',
      kind: 'reference',
    },
    {
      title: 'The Homer Encyclopedia (Hrsg. Margalit Finkelberg, Wiley-Blackwell, 2011)',
      detail:
        'Dreibändiges englischsprachiges Fachlexikon speziell zu Homer und den Epen.',
      kind: 'reference',
    },
    {
      title: 'Perseus Digital Library (Tufts University)',
      detail:
        'Griechische Originaltexte von Ilias und Odyssee mit englischen Übersetzungen und Wörterbuchanbindung, frei zugänglich.',
      url: 'https://www.perseus.tufts.edu/',
      kind: 'web',
    },
    {
      title: 'Projekt Gutenberg-DE: Homer',
      detail:
        'Gemeinfreie deutsche Übersetzungen (u. a. Voß) von Ilias und Odyssee im Volltext.',
      url: 'https://www.projekt-gutenberg.org/',
      kind: 'web',
    },
    {
      title: 'Center for Hellenic Studies (Harvard University)',
      detail:
        'Frei zugängliche Forschungsliteratur zur homerischen Dichtung, u. a. Werke von Gregory Nagy.',
      url: 'https://chs.harvard.edu/',
      kind: 'web',
    },
  ],
  imagesTitle: 'Bildnachweis',
  imagesNote:
    'Sämtliche Illustrationen dieser Website wurden eigens für das Projekt mit KI-Bildgenerierung (OpenAI Codex CLI, Werkzeug „image_generation“) erstellt – als moderne Interpretation antiker griechischer Vasenmalerei, Fresken und Mosaike. Sie sind künstlerische Neuinterpretationen und keine Reproduktionen antiker Originale.',
};

export default sources;
