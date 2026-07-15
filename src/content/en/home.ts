import type { HomeContent } from '../types';

const home: HomeContent = {
  heroTitle: 'Wrath and Homecoming',
  heroSubtitle:
    'Two epics stand at the beginning of European literature: the Iliad and the Odyssey. This digital exhibition guides you through both works – their stories, characters, places, and ideas.',
  heroAlt:
    'An ancient poet with a lyre by the sea; burning Troy on the left, a Greek ship on dark blue waves on the right – illustration in the style of Greek vase painting.',
  ctaIliad: 'Explore the Iliad',
  ctaOdyssey: 'Explore the Odyssey',
  introTitle: 'Who Was Homer?',
  intro: [
    'Tradition names Homer as the poet of the Iliad and the Odyssey – and thus as the founder of Western literature. Yet even in antiquity, no one knew anything certain about him: seven cities claimed to be his birthplace, and legend describes him as a blind singer. Whether Homer was a historical person, whether he composed both epics or only one, whether the name conceals several poets or a long tradition – all of this is still debated by scholars today. The debate even has a name of its own: the “Homeric Question.”',
    'What is certain is that both epics probably took shape in the eighth or early seventh century BCE in the Greek-speaking regions of Asia Minor, drawing on an oral storytelling tradition that was already centuries old. They tell of an even older, half-mythical past – the world of the Mycenaean Bronze Age as later generations imagined it.',
    'For the Greeks of antiquity, the Iliad and the Odyssey were far more than literature: they were school, history book, and moral compass all at once. Whoever knew the epics knew the gods, the heroes, and the values of their culture.',
  ],
  worksTitle: 'Two Epics, Two Worlds',
  works: {
    iliad: {
      title: 'Iliad',
      tagline: 'The Wrath of Achilles',
      text: 'A few weeks in the tenth year of the Trojan War: a quarrel between Achilles and Agamemnon unleashes a chain of pride, grief, and vengeance – culminating in the night when an old king begs his son’s killer for the body of his child.',
      link: 'Discover the Iliad',
    },
    odyssey: {
      title: 'Odyssey',
      tagline: 'The Long Journey Home',
      text: 'Ten years after the fall of Troy, Odysseus is still wandering the seas. Past Cyclopes, sorceresses, and Sirens he fights his way home – while on Ithaca suitors court his wife and his son must grow into a man.',
      link: 'Discover the Odyssey',
    },
  },
  contrastTitle: 'War and Sea',
  contrast: [
    'The Iliad is an epic of war: concentrated into a few weeks, compressed into a single conflict, driven by wrath, honor, and mortality. The Odyssey is an epic of return: ranging across ten years and an entire sea, carried by cunning, longing, and loyalty.',
    'Together the two works form a double portrait of human life – humankind in the extremity of battle, and humankind on the long road home. It is no accident that the Iliad has been called the epic of death and the Odyssey the epic of life.',
  ],
  contextTitle: 'Time and Culture',
  context: [
    'The action of both epics is set in the world of the Mycenaean palace culture, which collapsed around 1200 BCE. The epics themselves, however, were composed only centuries later – in the early Archaic period, just as the Greek alphabet was coming into being. Homer’s world is therefore a mosaic: Bronze Age memories, conditions of his own day, and pure poetic invention all merge within it.',
    'Whether a historical event lies behind the Trojan War is disputed. The excavations at Hisarlik in present-day Turkey show that a significant Bronze Age city once stood there and was destroyed several times – but whether any of these destructions is connected to the legend cannot be proven.',
  ],
  oralityTitle: 'From Song to Book',
  orality: [
    'Before the epics were written down, they lived in the voices of singers, the aoidoi. These bards performed heroic songs to the lyre, improvising within fixed patterns: recurring epithets (“swift-footed Achilles,” “rosy-fingered Dawn”), formulaic verses, and typical scenes helped them recite thousands of lines freely in the steady rhythm of the hexameter.',
    'Twentieth-century scholarship – above all the work of Milman Parry and Albert Lord – has shown that the Iliad and the Odyssey are deeply rooted in this technique of oral composition. At some point, probably in the eighth or seventh century BCE, the epics were fixed in writing; exactly how this transition took place is one of the most fascinating open questions in classical studies.',
    'Only in the Hellenistic period did scholars in Alexandria divide each epic into 24 books – one for each letter of the Greek alphabet.',
  ],
  exploreTitle: 'Explore the Exhibition',
  exploreCards: [
    {
      id: 'journeys',
      title: 'Guided Reading Journeys',
      text: 'Book by book through both epics – with stages, turning points, and background knowledge.',
      to: '/iliad/journey',
    },
    {
      id: 'characters',
      title: 'Characters',
      text: 'Heroes, queens, and gods: who is related, allied, or at war with whom.',
      to: '/characters',
    },
    {
      id: 'places',
      title: 'Places & Route',
      text: 'From Troy to Ithaca: the settings of the epics and the wanderings of Odysseus on a stylized map.',
      to: '/places',
    },
    {
      id: 'comparison',
      title: 'Comparison',
      text: 'The Iliad and the Odyssey side by side: plot, narrative art, heroic ideals, and legacy.',
      to: '/comparison',
    },
    {
      id: 'glossary',
      title: 'Glossary',
      text: 'From “Aegis” to “Xenia”: the key terms of the Homeric world, explained and searchable.',
      to: '/glossary',
    },
    {
      id: 'sources',
      title: 'Sources',
      text: 'Reliable editions, scholarly literature, and freely accessible resources for further reading.',
      to: '/sources',
    },
  ],
};

export default home;
