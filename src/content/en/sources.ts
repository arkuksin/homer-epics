import type { SourcesContent } from '../types';

const sources: SourcesContent = {
  title: 'Sources and Further Reading',
  intro: [
    'The content of this website is based on the Homeric epics themselves and on established scholarly and introductory literature. All summaries and explanations were written independently; verbatim quotations from modern translations have been deliberately avoided.',
    'The following selection lists reliable editions, standard works, and freely accessible resources for anyone who wants to go deeper.',
  ],
  note:
    'Note: statements about the origins, dating, and authorship of the epics reflect the current state of the debate – much of this is the subject of ongoing research and is marked as open on this website accordingly.',
  kinds: {
    edition: 'Editions & Translations',
    scholarship: 'Scholarship & Introductions',
    reference: 'Reference Works',
    web: 'Freely Accessible Online Resources',
  },
  entries: [
    {
      title: 'Homer: The Iliad / The Odyssey. Translated by Richmond Lattimore (University of Chicago Press, 1951 / 1965)',
      detail:
        'The classic modern verse translations, prized for staying close to the Greek line by line; for decades the standard text in universities.',
      kind: 'edition',
    },
    {
      title: 'Homer: The Iliad / The Odyssey. Translated by Robert Fagles (Penguin Classics, 1990 / 1996)',
      detail:
        'Vivid, fast-moving verse translations with excellent introductions and notes by Bernard Knox – a favorite with general readers.',
      kind: 'edition',
    },
    {
      title: 'Homer: The Odyssey / The Iliad. Translated by Robert Fitzgerald (1961 / 1974)',
      detail:
        'Poetically distinguished verse translations that have shaped how generations of English-speaking readers hear Homer.',
      kind: 'edition',
    },
    {
      title: 'Homer: The Odyssey (2017) / The Iliad (2023). Translated by Emily Wilson (W. W. Norton)',
      detail:
        'Acclaimed contemporary verse translations in iambic pentameter – clear, swift, and rigorously faithful; widely regarded as the modern points of reference.',
      kind: 'edition',
    },
    {
      title: 'Homer: Ilias / Odyssee. Translated by Johann Heinrich Voß (1781 / 1793)',
      detail:
        'The classic German verse translations, in the public domain and historically momentous: they shaped the German-speaking world’s image of Homer much as Pope and Chapman shaped the English one.',
      kind: 'edition',
    },
    {
      title: 'Joachim Latacz: Troia und Homer. Der Weg zur Lösung eines alten Rätsels',
      detail:
        'The standard work on the question of a historical core behind the Troy legend, drawing on the Hisarlik excavations and Hittite sources (first published 2001, repeatedly updated); available in English as “Troy and Homer” (Oxford, 2004).',
      kind: 'scholarship',
    },
    {
      title: 'Barbara Patzek: Homer und seine Zeit (C.H. Beck Wissen)',
      detail:
        'A concise, reliable German introduction to the historical context, the oral tradition, and the Homeric Question.',
      kind: 'scholarship',
    },
    {
      title: 'Milman Parry / Albert B. Lord: The Singer of Tales (1960)',
      detail:
        'The foundational work of oral poetry research: how oral singers compose long epics – with far-reaching consequences for our understanding of Homer.',
      kind: 'scholarship',
    },
    {
      title: 'Jasper Griffin: Homer on Life and Death (Oxford, 1980)',
      detail:
        'An influential study of mortality, the gods, and the image of humanity in the epics.',
      kind: 'scholarship',
    },
    {
      title: 'Der Neue Pauly. Enzyklopädie der Antike',
      detail:
        'The authoritative encyclopedia of classical antiquity for all persons, places, and concepts; available in English as “Brill’s New Pauly.”',
      kind: 'reference',
    },
    {
      title: 'The Homer Encyclopedia (ed. Margalit Finkelberg, Wiley-Blackwell, 2011)',
      detail:
        'A three-volume English-language reference work devoted specifically to Homer and the epics.',
      kind: 'reference',
    },
    {
      title: 'Perseus Digital Library (Tufts University)',
      detail:
        'The Greek original texts of the Iliad and the Odyssey with English translations and integrated dictionaries, freely accessible.',
      url: 'https://www.perseus.tufts.edu/',
      kind: 'web',
    },
    {
      title: 'Projekt Gutenberg-DE: Homer',
      detail:
        'Public-domain German translations of the Iliad and the Odyssey (including Voß) in full text.',
      url: 'https://www.projekt-gutenberg.org/',
      kind: 'web',
    },
    {
      title: 'Center for Hellenic Studies (Harvard University)',
      detail:
        'Freely accessible scholarship on Homeric poetry, including works by Gregory Nagy.',
      url: 'https://chs.harvard.edu/',
      kind: 'web',
    },
  ],
  imagesTitle: 'Image Credits',
  imagesNote:
    'All illustrations on this website were created specifically for the project using AI image generation (OpenAI Codex CLI, “image_generation” tool) – as modern interpretations of ancient Greek vase painting, frescoes, and mosaics. They are artistic reinterpretations, not reproductions of ancient originals.',
};

export default sources;
