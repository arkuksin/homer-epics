import type { GlossaryContent } from '../types';

const glossary: GlossaryContent = {
  title: 'Glossary',
  intro:
    'Terms, names, and concepts of the Homeric world – briefly explained and searchable.',
  searchPlaceholder: 'Search for a term, e.g. “Xenia” or “Hexameter” …',
  noResults: 'No entry found. Try a different search term.',
  categories: {
    all: 'All',
    person: 'People & Beings',
    place: 'Places',
    concept: 'Concepts & Values',
    literary: 'Poetry & Transmission',
  },
  entries: [
    {
      term: 'Achaeans',
      also: 'Danaans, Argives',
      definition:
        'Homer’s collective names for the Greeks at Troy – he does not yet use the word “Greeks” (Hellenes). “Achaeans” may echo the Hittite “Ahhiyawa,” the name of a western power in Bronze Age texts.',
      category: 'concept',
    },
    {
      term: 'Aegis',
      definition:
        'A shield- or cloak-like attribute of terror belonging to Zeus and Athena, often set with the head of the Gorgon. Whoever shakes the aegis spreads panic among the enemy. It lives on proverbially in the phrase “under someone’s aegis.”',
      category: 'concept',
    },
    {
      term: 'Bard (aoidos)',
      also: 'aoidos, singer',
      definition:
        'A professional singer who performed heroic songs to the lyre – like Demodocus among the Phaeacians or Phemius on Ithaca. The aoidoi improvised within fixed formulas and patterns; from their art the Iliad and the Odyssey emerged.',
      category: 'literary',
    },
    {
      term: 'Apologoi',
      definition:
        'The great first-person narrative of Odysseus at the court of the Phaeacians (Books 9–12), in which he recounts his adventures from the Cicones to Calypso. A masterstroke of the flashback: the hero becomes his own narrator.',
      category: 'literary',
    },
    {
      term: 'Aretē',
      definition:
        'Excellence, prowess, being the best – the guiding ideal of the Homeric nobility: to be foremost in battle, in council, in competition. Not to be confused with Arete, the Phaeacian queen.',
      category: 'concept',
    },
    {
      term: 'Aristeia',
      definition:
        'The great shining moment of a single hero in battle, in which he overcomes opponent after opponent – such as the aristeia of Diomedes in Book 5 of the Iliad. A fixed building block of epic narrative.',
      category: 'literary',
    },
    {
      term: 'Trial of the bow',
      definition:
        'Penelope’s contest: whoever can string Odysseus’ mighty bow and shoot an arrow through the sockets of twelve axes shall have her as his wife. Only Odysseus, disguised as a beggar, passes the test – the signal for the slaying of the suitors.',
      category: 'concept',
    },
    {
      term: 'Chryseis',
      definition:
        'Daughter of the Apollo priest Chryses and Agamemnon’s captive of war. Because Agamemnon refuses to return her, Apollo sends the plague into the Greek camp – the trigger of the chain of quarrels with which the Iliad begins.',
      category: 'person',
    },
    {
      term: 'Briseis',
      definition:
        'Captive of war and Achilles’ prize of honor. Agamemnon takes her from him as a substitute for Chryseis – the insult that ignites Achilles’ wrath. Her lament for the dead Patroclus gives the figure a human profile of her own.',
      category: 'person',
    },
    {
      term: 'Hecuba',
      definition:
        'Queen of Troy, wife of Priam, and mother of Hector. Her laments for her son – first in vain from the city wall, then at his bier – are among the most harrowing women’s scenes of the Iliad.',
      category: 'person',
    },
    {
      term: 'Hexameter',
      definition:
        'The meter of the epics: six feet of long and short syllables (dactylic hexameter), usually rendered in English by stress patterns. Its steady flow carried the singer through thousands of lines – and shaped European poetry from antiquity to the moderns.',
      category: 'literary',
    },
    {
      term: 'Homeric Question',
      definition:
        'The scholarly debate, conducted since the eighteenth century, over the origins and authorship of the epics: was there a poet named Homer? One poet for both works? How do oral tradition and written fixation relate? Despite great advances – such as oral poetry research – the question remains open to this day.',
      category: 'literary',
    },
    {
      term: 'Ichor',
      definition:
        'The “blood” of the gods – a divine fluid in place of mortal blood. When Diomedes wounds Aphrodite, ichor flows: even gods can be hurt in Homer; they simply cannot die.',
      category: 'concept',
    },
    {
      term: 'In medias res',
      definition:
        '“Into the middle of things”: beginning the story not at its chronological start but at a dramatic point – the Iliad opens in the tenth year of the war, the Odyssey shortly before the end of the wanderings. The term comes from Horace’s Ars Poetica, the technique from Homer.',
      category: 'literary',
    },
    {
      term: 'Kleos',
      definition:
        '“Glory, renown” – fame preserved in song, the only immortality open to mortals. For kleos, Achilles chooses an early death. The epic itself is the medium of this glory: whoever is sung of lives on.',
      category: 'concept',
    },
    {
      term: 'Cimmerians',
      definition:
        'A legendary people at the edge of the world, wrapped in eternal mist and darkness – in their land lies the entrance to the underworld that Odysseus seeks out. Not to be confused with the historical horse-riding people of the same name.',
      category: 'place',
    },
    {
      term: 'Cyclopes',
      also: 'Kyklopes',
      definition:
        'One-eyed giants who live without laws, assemblies, or agriculture – the poetic counter-image to human civilization. The best known is Polyphemus, son of Poseidon, whom Odysseus blinds.',
      category: 'person',
    },
    {
      term: 'Lotus-eaters',
      also: 'Lotophagi',
      definition:
        'A peaceful people whose lotus fruit makes anyone who tastes it forget home and homecoming. The first and quietest temptation of the wanderings: not violence, but the sweet forgetting of the goal.',
      category: 'person',
    },
    {
      term: 'Wrath (mēnis)',
      also: 'menis',
      definition:
        'Brooding, wrathful anger – the very first word of the Iliad (“Sing, goddess, the wrath …”). Unlike ordinary anger, mēnis is a lasting, almost divine rage; its course from insult to resolution in compassion structures the entire epic.',
      category: 'concept',
    },
    {
      term: 'Mētis',
      definition:
        'Cunning, craft, practical intelligence – the cardinal virtue of Odysseus. It shows itself in schemes, disguises, and wordplays like the famous “Nobody.” Penelope and Athena embody mētis as well.',
      category: 'concept',
    },
    {
      term: 'Moira',
      definition:
        'The allotted portion, the fate that stands even above the gods: not even Zeus can save his son Sarpedon from his appointed death. A person proves themselves not by escaping the inevitable, but in how they face it.',
      category: 'concept',
    },
    {
      term: 'Moly',
      definition:
        'A magical herb with a black root and a milk-white flower, given to Odysseus by Hermes – the antidote to Circe’s transforming spell. “Hard for mortals to dig up, but the gods can do all things.”',
      category: 'concept',
    },
    {
      term: 'Nekyia',
      definition:
        'The summoning of the dead in Book 11 of the Odyssey: at the edge of the world, Odysseus questions the shades – Tiresias, his mother, Agamemnon, Achilles. The primal scene of all literary journeys to the underworld, from Virgil to Dante.',
      category: 'literary',
    },
    {
      term: 'Homecoming (nostos)',
      definition:
        '“Return home” – the leitmotif of the Odyssey and the name of a whole cycle of legends about the voyages home of the heroes of Troy. From nostos and algos (“pain”) our word “nostalgia” is formed: the ache of longing for home.',
      category: 'concept',
    },
    {
      term: 'Oral poetry',
      definition:
        'The art of oral composition: the research of Milman Parry and Albert Lord showed, through living singer traditions, how poets perform long epics freely using formulas, epithets, and typical scenes – and that the Iliad and the Odyssey spring from such a tradition.',
      category: 'literary',
    },
    {
      term: 'Phaeacians',
      definition:
        'A fabled seafaring people on Scheria under King Alcinous. Their ships find their way by themselves. As exemplary hosts they listen to Odysseus’ tale and carry him, laden with gifts, to Ithaca – for which Poseidon turns their ship to stone.',
      category: 'person',
    },
    {
      term: 'Rhapsode',
      definition:
        'A professional reciter who performed the Homeric epics in the classical period – with a staff instead of a lyre, from memory, in competition. At the Panathenaea in Athens, both epics were recited in full.',
      category: 'literary',
    },
    {
      term: 'Scaean Gate',
      definition:
        'The main gate of Troy, scene of pivotal moments: here Hector takes leave of Andromache, here he finally falls – and here, according to legend, Achilles too is later struck by the arrow.',
      category: 'place',
    },
    {
      term: 'Telemachy',
      definition:
        'The first four books of the Odyssey, which tell of Telemachus’ journey to Nestor and Menelaus. A coming-of-age story – and an artful overture that introduces the absent hero through the memories of others.',
      category: 'literary',
    },
    {
      term: 'Timē',
      definition:
        '“Honor, esteem” – measurable in the Homeric nobility in rank, prizes of honor, and shares of spoils. The taking of Briseis violates Achilles’ timē: not a love drama, but an attack on his social worth.',
      category: 'concept',
    },
    {
      term: 'Troy',
      also: 'Ilios, Ilion',
      definition:
        'The besieged city of the Iliad, after which the epic is named (“Iliad” = poem about Ilios). Since Schliemann’s excavations identified with the ruin mound of Hisarlik in Turkey; whether the legend corresponds to a historical war remains disputed.',
      category: 'place',
    },
    {
      term: 'Web of Penelope',
      definition:
        'Penelope’s famous delaying tactic: she promises to choose a suitor once the shroud for Laertes is finished – and for three years unravels by night what she has woven by day, until a maid betrays her.',
      category: 'concept',
    },
    {
      term: 'Guest-friendship (xenia)',
      definition:
        'The sacred law of hospitality: to take in strangers, feast them, and give them gifts before asking their name. Zeus himself watches over it as “Zeus Xenios.” The Odyssey measures nearly every encounter against this norm – from the Phaeacians to the suitors.',
      category: 'concept',
    },
    {
      term: 'Twelve axes',
      definition:
        'In the trial of the bow, Odysseus shoots an arrow through the sockets of twelve axes set up in a row – presumably through the rings of their haft-holes. The feat proves it: only the true master of the bow has returned.',
      category: 'concept',
    },
  ],
};

export default glossary;
