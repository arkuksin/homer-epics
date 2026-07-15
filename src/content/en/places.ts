import type { PlacesContent } from '../types';

const places: PlacesContent = {
  title: 'Places & Route',
  intro: [
    'The Homeric epics unfold in a world where real geography and mythical storytelling merge into one another. Troy and Ithaca can be sought on the map – but the islands of Circe or the Sirens belong to poetry.',
    'The map below is a stylized representation: it arranges the settings as the narrative connects them and makes no claim to geographic accuracy. Even in antiquity, scholars argued over where Odysseus really wandered – the geographer Eratosthenes quipped that one would find the route of Odysseus as soon as one tracked down the cobbler who stitched the bag of winds.',
  ],
  mapTitle: 'Stylized Map of the Homeric World',
  mapNote:
    'Stylized representation – the positions of mythical places follow the logic of the narrative and traditional proposals, not established geography.',
  mapAlt:
    'Stylized map of the eastern Mediterranean with Troy, Ithaca, and the stations of Odysseus’ wanderings, connected by a dashed route.',
  routeTitle: 'The Route of Odysseus',
  routeIntro:
    'From Troy to Ithaca: the stations of the ten-year wanderings in the order of the narrative. Only the beginning and the end are geographically certain – in between lies the sea of poetry.',
  legend: {
    historical: 'Historically attested',
    mythological: 'Mythical / poetic',
    disputed: 'Location disputed',
  },
  statusExplanation: {
    historical:
      'Places that have been clearly identified archaeologically or historically.',
    mythological:
      'Places of the poetic world with no established real-world counterpart.',
    disputed:
      'Places for which locations have been proposed but remain scholarly contested.',
  },
  disclaimer:
    'Important: for no station of the wanderings between Cape Malea and Ithaca is there a scientifically established location. Traditional identifications – such as Sicily for the Cyclopes or the Strait of Messina for Scylla and Charybdis – are later interpretations and are labeled as such here.',
  places: [
    {
      id: 'troja',
      name: 'Troy (Ilios)',
      status: 'historical',
      work: 'both',
      description:
        'Setting of the Iliad and starting point of the wanderings. Since Schliemann’s excavations, the ruins on the mound of Hisarlik in northwestern Turkey have been regarded as the historical Troy; the city was a significant center in the Bronze Age. Whether a war like the Homeric one was fought there, however, remains an open question.',
      coords: { x: 88, y: 22 },
      routeIndex: 1,
    },
    {
      id: 'ithaka',
      name: 'Ithaca',
      status: 'disputed',
      work: 'both',
      description:
        'Home of Odysseus and goal of the homecoming. The present-day island of Ithaki in the Ionian Sea bears the name, but Homer’s description does not fit in every detail – which is why some scholars have proposed neighboring islands such as Cephalonia. The majority holds to Ithaki.',
      coords: { x: 22, y: 42 },
      routeIndex: 14,
    },
    {
      id: 'mykene',
      name: 'Mycenae',
      status: 'historical',
      work: 'iliad',
      description:
        'Citadel of Agamemnon and the mightiest center of Bronze Age Greece. The massive ruins with the Lion Gate on the Peloponnese gave the Mycenaean culture its name – the era in which legend places the Trojan War.',
      coords: { x: 38, y: 55 },
    },
    {
      id: 'sparta',
      name: 'Sparta',
      status: 'historical',
      work: 'both',
      description:
        'Realm of Menelaus and Helen. From here Helen was abducted; here Telemachus travels in the Odyssey in search of news of his father. Homeric Sparta is a Bronze Age palace, not the later military state.',
      coords: { x: 40, y: 68 },
    },
    {
      id: 'pylos',
      name: 'Pylos',
      status: 'historical',
      work: 'odyssey',
      description:
        'Seat of the aged Nestor, first station of Telemachus’ journey. At Ano Englianos, a great Mycenaean palace was in fact excavated – the so-called Palace of Nestor, one of the best preserved of the Bronze Age.',
      coords: { x: 30, y: 66 },
    },
    {
      id: 'olymp',
      name: 'Mount Olympus',
      status: 'mythological',
      work: 'both',
      description:
        'Seat of the gods. The real mountain on the border of Thessaly is the highest in Greece; the Homeric Olympus, however, is a mythical sphere above all clouds, where the gods convene, quarrel, and decide the fates of mortals.',
      coords: { x: 42, y: 18 },
    },
    {
      id: 'kikonen',
      name: 'Ismarus (Cicones)',
      status: 'disputed',
      work: 'odyssey',
      description:
        'First station after Troy: Odysseus’ men sack the city of the Cicones and are driven back. The Cicones are attested as a people of Thrace, on the northern Aegean coast, outside Homer as well – the exact location of Ismarus is uncertain.',
      coords: { x: 72, y: 12 },
      routeIndex: 2,
    },
    {
      id: 'lotophagen',
      name: 'Land of the Lotus-eaters',
      status: 'disputed',
      work: 'odyssey',
      description:
        'After nine days of storm around Cape Malea, the ships reach the land of the Lotus-eaters, whose fruit makes men forget their homecoming. Ancient authors placed it on the North African coast, often on the island of Djerba – but this cannot be proven.',
      coords: { x: 30, y: 92 },
      routeIndex: 3,
    },
    {
      id: 'kyklopen',
      name: 'Land of the Cyclopes',
      status: 'mythological',
      work: 'odyssey',
      description:
        'Home of Polyphemus: a wild, lawless coast with fertile, untilled land. Tradition often pointed to Sicily and Mount Etna – but the world of the Cyclopes is above all a poetic counter-image to the human order of law and hospitality.',
      coords: { x: 10, y: 74 },
      routeIndex: 4,
    },
    {
      id: 'aiolia',
      name: 'Aeolia (Island of Aeolus)',
      status: 'mythological',
      work: 'odyssey',
      description:
        'The floating island of the wind god, surrounded by a wall of bronze. The name lives on in the Aeolian Islands north of Sicily – but the description of a drifting island shows that this is pure fairy-tale geography.',
      coords: { x: 10, y: 56 },
      routeIndex: 5,
    },
    {
      id: 'laistrygonen',
      name: 'Telepylos (Laestrygonians)',
      status: 'mythological',
      work: 'odyssey',
      description:
        'Harbor of the gigantic Laestrygonians, who smash eleven of the twelve ships with boulders – the greatest catastrophe of the wanderings. The narrow harbor with its high cliffs has been sought on Sardinia, on Sicily, and even on the Black Sea; nothing is certain.',
      coords: { x: 9, y: 40 },
      routeIndex: 6,
    },
    {
      id: 'aiaia',
      name: 'Aeaea (Island of Circe)',
      status: 'mythological',
      work: 'odyssey',
      description:
        'Wooded island of the sorceress Circe, where the companions stay for a year. Roman tradition linked it to Monte Circeo on the coast of Latium – a promontory that looks like an island. This too is interpretation, not evidence.',
      coords: { x: 14, y: 28 },
      routeIndex: 7,
    },
    {
      id: 'unterwelt',
      name: 'Entrance to the Underworld',
      status: 'mythological',
      work: 'odyssey',
      description:
        'At the edge of the world, beyond the stream of Oceanus in the land of the Cimmerians, which never sees the sun, Odysseus questions the dead – the seer Tiresias, his mother, the fallen heroes of Troy. A purely mythical place with no real-world counterpart whatsoever.',
      coords: { x: 9, y: 12 },
      routeIndex: 8,
    },
    {
      id: 'sirenen',
      name: 'Island of the Sirens',
      status: 'mythological',
      work: 'odyssey',
      description:
        'A flowering meadow amid bleaching bones: whoever hears the song of the Sirens never returns home. Later tradition placed them near the Galli Islands off the Amalfi coast. Their song promises knowledge of everything that happens on earth – perhaps the subtlest temptation of the epic.',
      coords: { x: 20, y: 52 },
      routeIndex: 9,
    },
    {
      id: 'skylla-charybdis',
      name: 'Scylla and Charybdis',
      status: 'disputed',
      work: 'odyssey',
      description:
        'A narrow passage between two evils: the six-headed monster in its rocky cave and the all-devouring whirlpool. Since antiquity, people have thought of the Strait of Messina between Italy and Sicily, whose currents were notorious – a plausible but unprovable interpretation.',
      coords: { x: 13, y: 62 },
      routeIndex: 10,
    },
    {
      id: 'thrinakia',
      name: 'Thrinacia (Cattle of Helios)',
      status: 'mythological',
      work: 'odyssey',
      description:
        'Pasture island of the sacred cattle of the sun god. When the starving companions slaughter the animals, their doom is sealed. The name was early associated with Sicily (“Trinacria,” the three-pointed) – in the epic, the island is above all the scene of the final, fatal test.',
      coords: { x: 16, y: 82 },
      routeIndex: 11,
    },
    {
      id: 'ogygia',
      name: 'Ogygia (Island of Calypso)',
      status: 'mythological',
      work: 'odyssey',
      description:
        '“The navel of the sea”: the remote island of the nymph Calypso, where Odysseus is held for seven years. Homer deliberately places it nowhere; later proposals range from Gozo near Malta to the Atlantic. A place of perfect, but suffocating, seclusion.',
      coords: { x: 42, y: 88 },
      routeIndex: 12,
    },
    {
      id: 'scheria',
      name: 'Scheria (Land of the Phaeacians)',
      status: 'disputed',
      work: 'odyssey',
      description:
        'The realm of the seafaring Phaeacians with the palace of Alcinous – the last station before the homecoming. Identified with Corcyra (Corfu) as early as antiquity, yet the fairy-tale features of the land point to an idealized poetic world between myth and utopia.',
      coords: { x: 16, y: 20 },
      routeIndex: 13,
    },
  ],
};

export default places;
