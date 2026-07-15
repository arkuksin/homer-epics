import type { ComparisonContent } from '../types';

const comparison: ComparisonContent = {
  title: 'The Iliad and the Odyssey Compared',
  intro: [
    'Two epics, one cosmos – and yet two fundamentally different views of the world: the Iliad compresses a few weeks of war into a tragedy of wrath and mortality; the Odyssey stretches a decade of wandering into an adventure and homecoming novel in verse. Setting them side by side shows how closely the two works belong together – and how deliberately they differ.',
  ],
  columnIliad: 'Iliad',
  columnOdyssey: 'Odyssey',
  aspectLabel: 'Aspect',
  rows: [
    {
      aspect: 'Plot',
      iliad:
        'The wrath of Achilles in the tenth year of the Trojan War: the quarrel, the withdrawal, the death of Patroclus, the revenge on Hector, and the surrender of his body to Priam.',
      odyssey:
        'The homecoming of Odysseus after the fall of Troy: ten years of wandering across the sea, the return to Ithaca in a beggar’s guise, and the reckoning with the suitors.',
    },
    {
      aspect: 'Time Span',
      iliad:
        'Roughly 51 days – an extremely compressed slice that mirrors the whole war.',
      odyssey:
        'About 40 days of narrated present, but in flashbacks ten years of wandering and twenty years of absence.',
    },
    {
      aspect: 'Protagonist',
      iliad:
        'Achilles: the greatest warrior, uncompromising in honor, wrath, and grief – a hero who goes knowingly to an early death.',
      odyssey:
        'Odysseus: the man of many wiles, who survives by intellect, patience, and disguise – a hero of intelligence rather than strength.',
    },
    {
      aspect: 'Setting',
      iliad:
        'A single place: the plain before Troy between city and camp by the ships – plus the Olympus of the gods.',
      odyssey:
        'The whole Mediterranean of legend: islands, caves, palaces, even the underworld – and, again and again, Ithaca.',
    },
    {
      aspect: 'Narrative Structure',
      iliad:
        'Largely linear and chronological, opening in the midst of the conflict; carried by great battle scenes and speeches.',
      odyssey:
        'Artfully interlaced: it begins shortly before the end of the wanderings, with a great first-person flashback by the hero and parallel storylines of father and son.',
    },
    {
      aspect: 'Central Conflicts',
      iliad:
        'Hero against commander, Greek against Trojan, man against fate – and Achilles against his own wrath.',
      odyssey:
        'Man against the sea and divine wrath, the returning king against usurpers – and Odysseus against the temptation to forget his goal.',
    },
    {
      aspect: 'Role of the Gods',
      iliad:
        'Massive, constant intervention: the gods fight alongside mortals, against each other, and for their favorites; Zeus steers events toward their fated end.',
      odyssey:
        'More targeted and sparing: Athena as helper, Poseidon as pursuer; Zeus stresses that humans bear responsibility for their own suffering.',
    },
    {
      aspect: 'Core Values',
      iliad:
        'Honor (timē) and glory (kleos): the worth of a life is measured in standing and in fame preserved in song.',
      odyssey:
        'Homecoming (nostos), loyalty, and hospitality (xenia): the worth of life lies in what is one’s own – house, family, homeland.',
    },
    {
      aspect: 'Image of the Hero',
      iliad:
        'The warrior hero: greatness shows itself in battle and in facing inescapable death.',
      odyssey:
        'The wise endurer: greatness shows itself in perseverance, self-control, and ingenuity – “polytropos,” the man of many turns.',
    },
    {
      aspect: 'Prevailing Mood',
      iliad:
        'Tragic, dark, solemn: the beauty and horror of war, ending in mourning and compassion.',
      odyssey:
        'Adventurous, fabulous, conciliatory: danger and wonder, ending in reunion and peace.',
    },
    {
      aspect: 'Legacy',
      iliad:
        'Archetype of war and heroic poetry: from Virgil’s Aeneid to modern anti-war literature; a founding text of tragedy.',
      odyssey:
        'Archetype of the adventure and travel narrative: from the Aeneid through Joyce’s “Ulysses” to road movies; “odyssey” became the word for any long wandering.',
    },
  ],
  conclusion: [
    'Antiquity read the two epics as a pair: the Iliad shows how to die – the Odyssey, how to live. Where the Iliad, in the face of death, asks after the meaning of heroic greatness, the Odyssey celebrates the return to ordinary life as the true happiness. Only together do they yield the complete Homeric picture of humanity.',
  ],
};

export default comparison;
