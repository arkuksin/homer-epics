import type { CharactersContent } from '../types';

const characters: CharactersContent = {
  title: 'Characters',
  intro: [
    'Heroes, queens, gods: the Homeric epics unfold a dense web of kinship, alliance, and enmity. This overview introduces the most important figures of both works – filterable by allegiance and by epic.',
    'The relationship map below shows how the central figures are connected: by family, by loyalty, or by deadly conflict.',
  ],
  filterLabel: 'Filter by',
  filters: {
    all: 'All',
    greek: 'Greeks',
    trojan: 'Trojans',
    god: 'Gods',
    ithaca: 'Ithaca',
    other: 'Others',
  },
  workFilters: {
    all: 'Both works',
    iliad: 'Iliad',
    odyssey: 'Odyssey',
  },
  relationsTitle: 'Relationship Map',
  relationsIntro:
    'Family, alliance, enmity: the most important connections between the central figures of both epics at a glance.',
  relationsHint:
    'Tap or click a figure to highlight their connections.',
  characters: [
    {
      id: 'achilleus',
      name: 'Achilles',
      epithet: 'the swift-footed',
      role: 'Greatest warrior of the Greeks, son of the sea goddess Thetis',
      affiliation: 'greek',
      works: ['iliad'],
      description:
        'The finest fighter before Troy and the tragic protagonist of the Iliad. He knows that an early death awaits him at Troy, and still he chooses glory. His wrath over the insult dealt him by Agamemnon and his grief for Patroclus drive the entire plot – until, in his compassion for Priam, he finds his way back to his humanity.',
      relations: [
        { to: 'patroklos', label: 'closest friend of' },
        { to: 'agamemnon', label: 'in conflict with' },
        { to: 'hektor', label: 'kills' },
        { to: 'priamos', label: 'returns Hector’s body to' },
      ],
      portrait: 'portrait-achilles',
    },
    {
      id: 'hektor',
      name: 'Hector',
      epithet: 'tamer of horses',
      role: 'Crown prince and foremost defender of Troy',
      affiliation: 'trojan',
      works: ['iliad'],
      description:
        'The eldest son of Priam bears the full weight of Troy’s defense. Unlike Achilles, he fights not for glory but for city and family – his farewell scene with Andromache and little Astyanax is among the most moving in world literature. His death at the hands of Achilles seals the fate of Troy.',
      relations: [
        { to: 'priamos', label: 'son of' },
        { to: 'andromache', label: 'husband of' },
        { to: 'paris', label: 'brother of' },
        { to: 'patroklos', label: 'kills' },
      ],
      portrait: 'portrait-hector',
    },
    {
      id: 'agamemnon',
      name: 'Agamemnon',
      epithet: 'lord of men',
      role: 'King of Mycenae, commander-in-chief of the Greeks',
      affiliation: 'greek',
      works: ['iliad', 'odyssey'],
      description:
        'The mightiest of the Greek princes leads the army before Troy – and plunges it into crisis through his high-handedness when he takes Achilles’ prize of honor. In the Odyssey his shade meets Odysseus in the underworld: on his return home he was murdered by his wife Clytemnestra and her lover – the dark counter-image to the homecoming of Odysseus.',
      relations: [
        { to: 'menelaos', label: 'brother of' },
        { to: 'achilleus', label: 'in conflict with' },
      ],
    },
    {
      id: 'priamos',
      name: 'Priam',
      role: 'Aged king of Troy',
      affiliation: 'trojan',
      works: ['iliad'],
      description:
        'The old ruler of Troy loses many of his sons in the war, above all Hector. His night journey into the enemy camp, where he kneels before Achilles and begs for his son’s body, is the human high point of the Iliad: the father of the slain and the slayer recognize one another in grief.',
      relations: [
        { to: 'hektor', label: 'father of' },
        { to: 'paris', label: 'father of' },
        { to: 'achilleus', label: 'begs for Hector’s body from' },
      ],
    },
    {
      id: 'patroklos',
      name: 'Patroclus',
      role: 'Closest friend and comrade-in-arms of Achilles',
      affiliation: 'greek',
      works: ['iliad'],
      description:
        'The gentlest of the heroes of the Iliad. When the Greeks face defeat without Achilles, he rides into battle in his friend’s armor and saves the camp – but oversteps the agreed limit and falls at the hands of Hector. His death turns Achilles’ brooding wrath into raging grief and sets the catastrophe in motion.',
      relations: [
        { to: 'achilleus', label: 'closest friend of' },
        { to: 'hektor', label: 'killed by' },
      ],
    },
    {
      id: 'helena',
      name: 'Helen',
      epithet: 'fairest of women',
      role: 'Cause of the war, wife of Menelaus',
      affiliation: 'greek',
      works: ['iliad', 'odyssey'],
      description:
        'Her abduction by Paris – or her flight with him; the legend knows both versions – set off the Trojan War. The Iliad shows her torn: full of self-reproach, respected by the Trojans, manipulated by Aphrodite. In the Odyssey she lives once more as queen at Menelaus’ side in Sparta and receives Telemachus.',
      relations: [
        { to: 'menelaos', label: 'wife of' },
        { to: 'paris', label: 'abducted by' },
        { to: 'aphrodite', label: 'protégée of' },
      ],
    },
    {
      id: 'paris',
      name: 'Paris',
      epithet: 'also called Alexandros',
      role: 'Trojan prince, instigator of the war',
      affiliation: 'trojan',
      works: ['iliad'],
      description:
        'His judgment in the beauty contest of the goddesses and his abduction of Helen brought war upon Troy. In the epic he is the antithesis of his brother Hector: handsome, easygoing, and unreliable in battle – strongest with the bow. After the Iliad, so the later legend tells, his arrow, guided by Apollo, kills Achilles.',
      relations: [
        { to: 'helena', label: 'abducts' },
        { to: 'hektor', label: 'brother of' },
        { to: 'menelaos', label: 'duels with' },
        { to: 'aphrodite', label: 'favored by' },
      ],
    },
    {
      id: 'andromache',
      name: 'Andromache',
      role: 'Wife of Hector',
      affiliation: 'trojan',
      works: ['iliad'],
      description:
        'Hector’s wife and mother of little Astyanax embodies the perspective of those whom war leaves behind. Achilles has already killed her father and brothers; in the farewell scene at the Scaean Gate she begs Hector to think of her. Her lament for him is among the most haunting passages of the epic.',
      relations: [
        { to: 'hektor', label: 'wife of' },
      ],
    },
    {
      id: 'menelaos',
      name: 'Menelaus',
      role: 'King of Sparta, Helen’s wronged husband',
      affiliation: 'greek',
      works: ['iliad', 'odyssey'],
      description:
        'The abduction of his wife Helen is the cause of the war. In the Iliad he faces Paris in a duel that Aphrodite cuts short, and fights bravely over the body of Patroclus. In the Odyssey he has long since returned home and hospitably receives Telemachus in Sparta – reunited with Helen.',
      relations: [
        { to: 'helena', label: 'husband of' },
        { to: 'agamemnon', label: 'brother of' },
        { to: 'paris', label: 'duels with' },
      ],
    },
    {
      id: 'ajax',
      name: 'Ajax',
      epithet: 'son of Telamon, “the Great”',
      role: 'Second-greatest warrior of the Greeks',
      affiliation: 'greek',
      works: ['iliad'],
      description:
        'A giant of a man with a tower-like shield, the strongest Greek after Achilles – and his opposite: no runner, no orator, but an unshakable defender. He holds his own against Hector in single combat and defends the ships almost alone. His later fate – madness and suicide after losing the contest for Achilles’ arms – is told in other works.',
      relations: [
        { to: 'hektor', label: 'duels with' },
        { to: 'odysseus', label: 'rival of' },
      ],
    },
    {
      id: 'odysseus',
      name: 'Odysseus',
      epithet: 'the man of many wiles',
      role: 'King of Ithaca, hero of the Odyssey',
      affiliation: 'ithaca',
      works: ['iliad', 'odyssey'],
      description:
        'In the Iliad the shrewd counselor and orator of the Greeks; in the Odyssey the protagonist: for ten years after Troy he fights his way across the sea back to Ithaca – against monsters, divine wrath, and temptations, with no weapon stronger than his mind. The first hero in literature to survive by intelligence rather than strength.',
      relations: [
        { to: 'penelope', label: 'husband of' },
        { to: 'telemachos', label: 'father of' },
        { to: 'athene', label: 'protégé of' },
        { to: 'poseidon', label: 'pursued by' },
        { to: 'polyphem', label: 'blinds' },
        { to: 'laertes', label: 'son of' },
      ],
      portrait: 'portrait-odysseus',
    },
    {
      id: 'penelope',
      name: 'Penelope',
      epithet: 'the wise',
      role: 'Queen of Ithaca, wife of Odysseus',
      affiliation: 'ithaca',
      works: ['odyssey'],
      description:
        'For twenty years she waits for Odysseus, holding off more than a hundred suitors – most famously with her weaving ruse: each night she unravels what she has woven by day on the shroud for Laertes. Her caution is the equal of Odysseus’ own: only when he shows he knows the secret of the immovable marriage bed does she acknowledge him.',
      relations: [
        { to: 'odysseus', label: 'wife of' },
        { to: 'telemachos', label: 'mother of' },
        { to: 'antinoos', label: 'courted by' },
        { to: 'eurymachos', label: 'courted by' },
      ],
      portrait: 'portrait-penelope',
    },
    {
      id: 'telemachos',
      name: 'Telemachus',
      role: 'Son of Odysseus and Penelope',
      affiliation: 'ithaca',
      works: ['odyssey'],
      description:
        'An infant when Odysseus left for the war, he must now, as a young man, look on helplessly as the suitors devour the household. The first four books tell of his journey to Nestor and Menelaus – a search for his father on which he himself comes of age. In the slaying of the suitors he fights at his father’s side.',
      relations: [
        { to: 'odysseus', label: 'son of' },
        { to: 'penelope', label: 'son of' },
        { to: 'athene', label: 'guided by' },
      ],
    },
    {
      id: 'athene',
      name: 'Athena',
      epithet: 'the bright-eyed',
      role: 'Goddess of wisdom and strategic warfare',
      affiliation: 'god',
      works: ['iliad', 'odyssey'],
      description:
        'On the Greek side, the most influential goddess of both epics. In the Iliad she fights bitterly against Troy and guides the fatal spear against Hector; in the Odyssey she is the tireless protector of Odysseus and mentor of Telemachus. In the wily Odysseus she recognizes her own nature.',
      relations: [
        { to: 'odysseus', label: 'protects' },
        { to: 'telemachos', label: 'guides' },
        { to: 'zeus', label: 'daughter of' },
        { to: 'hektor', label: 'deceives' },
      ],
      portrait: 'portrait-athena',
    },
    {
      id: 'hera',
      name: 'Hera',
      role: 'Queen of the gods, wife of Zeus',
      affiliation: 'god',
      works: ['iliad'],
      description:
        'Since the Judgment of Paris, an implacable enemy of Troy. In the Iliad she schemes relentlessly for a Greek victory – up to the famous deception of Zeus, whom she seduces and lulls to sleep so that Poseidon can help the Greeks. Her harshness shows how unrelenting divine wrath is in the Homeric world.',
      relations: [
        { to: 'zeus', label: 'wife of' },
        { to: 'athene', label: 'allied with' },
      ],
    },
    {
      id: 'apollon',
      name: 'Apollo',
      epithet: 'the far-shooter',
      role: 'God of the bow, music, and prophecy',
      affiliation: 'god',
      works: ['iliad'],
      description:
        'Troy’s mightiest divine ally. His hail of arrows – the plague in the Greek camp – opens the action of the Iliad; later he strikes the armor from Patroclus’ body and leaves him defenseless. According to later legend, he also guides the arrow of Paris that kills Achilles.',
      relations: [
        { to: 'hektor', label: 'supports' },
        { to: 'patroklos', label: 'disarms' },
        { to: 'zeus', label: 'son of' },
      ],
    },
    {
      id: 'zeus',
      name: 'Zeus',
      epithet: 'the cloud-gatherer',
      role: 'Supreme god, keeper of order',
      affiliation: 'god',
      works: ['iliad', 'odyssey'],
      description:
        'The father of the gods stands above the factions – and is yet deeply entangled: in the Iliad he grants Thetis’ plea and lets the Greeks suffer defeat, weighs destinies on golden scales, and must accept the death of his own son Sarpedon. In the Odyssey he sanctions the homecoming and observes that mortals often bring their suffering upon themselves.',
      relations: [
        { to: 'hera', label: 'husband of' },
        { to: 'athene', label: 'father of' },
        { to: 'apollon', label: 'father of' },
        { to: 'poseidon', label: 'brother of' },
      ],
      portrait: 'portrait-zeus',
    },
    {
      id: 'aphrodite',
      name: 'Aphrodite',
      role: 'Goddess of love and beauty',
      affiliation: 'god',
      works: ['iliad'],
      description:
        'Paris awarded her the prize as the fairest – in return she procured Helen for him, and has stood by Troy ever since. In battle she is weak: when she tries to rescue her son Aeneas, Diomedes wounds even the goddess. Her power lies elsewhere – in desire, which not even Helen can resist.',
      relations: [
        { to: 'paris', label: 'favors' },
        { to: 'helena', label: 'controls' },
      ],
    },
    {
      id: 'poseidon',
      name: 'Poseidon',
      epithet: 'the earth-shaker',
      role: 'God of the sea',
      affiliation: 'god',
      works: ['iliad', 'odyssey'],
      description:
        'In the Iliad he helps the Greeks at times; in the Odyssey he is the pursuing power: because Odysseus blinded his son Polyphemus, the sea god denies him his homecoming for years and finally shatters his raft. Since Odysseus’ return is decreed by fate, Poseidon can only delay it – but he can make the delay agonizing.',
      relations: [
        { to: 'polyphem', label: 'father of' },
        { to: 'odysseus', label: 'pursues' },
        { to: 'zeus', label: 'brother of' },
      ],
    },
    {
      id: 'polyphem',
      name: 'Polyphemus',
      role: 'One-eyed Cyclops, son of Poseidon',
      affiliation: 'other',
      works: ['odyssey'],
      description:
        'The gigantic shepherd devours several of Odysseus’ companions in his cave – and falls victim to the most famous ruse of the epic: Odysseus makes him drunk, calls himself “Nobody,” and blinds him with a glowing stake. Polyphemus’ curse, addressed to his father Poseidon, prolongs the wanderings by years.',
      relations: [
        { to: 'poseidon', label: 'son of' },
        { to: 'odysseus', label: 'blinded by' },
      ],
    },
    {
      id: 'kirke',
      name: 'Circe',
      role: 'Sorceress on the island of Aeaea',
      affiliation: 'other',
      works: ['odyssey'],
      description:
        'The divine sorceress transforms Odysseus’ scouts into swine. Protected by the divine herb moly, Odysseus forces her to lift the spell – and wins an ally in her: for a year she hosts the companions, then shows the way to the underworld and warns of the Sirens, Scylla, and the cattle of Helios.',
      relations: [
        { to: 'odysseus', label: 'lover and adviser of' },
      ],
    },
    {
      id: 'kalypso',
      name: 'Calypso',
      epithet: 'the concealer',
      role: 'Nymph on the island of Ogygia',
      affiliation: 'other',
      works: ['odyssey'],
      description:
        'For seven years the nymph holds the shipwrecked Odysseus on her island and offers him immortality – in vain: evening after evening he sits on the shore, weeping for Ithaca. Only at the command of Zeus, delivered by Hermes, does she let him go – and helps him build his raft.',
      relations: [
        { to: 'odysseus', label: 'holds captive' },
        { to: 'zeus', label: 'obeys' },
      ],
    },
    {
      id: 'nausikaa',
      name: 'Nausicaa',
      role: 'Princess of the Phaeacians',
      affiliation: 'other',
      works: ['odyssey'],
      description:
        'The young princess finds the naked, shipwrecked Odysseus on the shore – and meets him with a composure and dignity that count among the most beautiful touches of the epic. She shows him the way to the palace of her parents, Alcinous and Arete, from where the Phaeacians finally carry him home to Ithaca.',
      relations: [
        { to: 'odysseus', label: 'rescues' },
      ],
    },
    {
      id: 'eumaios',
      name: 'Eumaeus',
      epithet: 'the noble swineherd',
      role: 'Loyal swineherd of Odysseus',
      affiliation: 'ithaca',
      works: ['odyssey'],
      description:
        'The very embodiment of the faithful servant: when Odysseus returns unrecognized as a beggar, the herdsman takes the stranger in according to every rule of hospitality – without suspecting whom he is hosting. In the slaying of the suitors he fights at his master’s side. He is the only figure the narrator addresses directly: “Then you said, Eumaeus …”',
      relations: [
        { to: 'odysseus', label: 'serves' },
        { to: 'telemachos', label: 'protects' },
      ],
    },
    {
      id: 'laertes',
      name: 'Laertes',
      role: 'Father of Odysseus',
      affiliation: 'ithaca',
      works: ['odyssey'],
      description:
        'The aged former king has withdrawn to the countryside in his grief, where he tends his garden in shabby clothes. The reunion with his returned son in the final book – Odysseus proves himself by recalling the trees his father gave him as a child – closes the circle of recognitions.',
      relations: [
        { to: 'odysseus', label: 'father of' },
      ],
    },
    {
      id: 'antinoos',
      name: 'Antinous',
      role: 'Ringleader of the suitors',
      affiliation: 'other',
      works: ['odyssey'],
      description:
        'The most brazen and brutal of the suitors: he drives the plot to murder Telemachus, hurls a stool at the supposed beggar in the palace, and leads the crowd that squanders Odysseus’ house. In the slaying of the suitors, the first arrow strikes him – in the very act of drinking from a golden cup.',
      relations: [
        { to: 'penelope', label: 'courts' },
        { to: 'telemachos', label: 'plots to murder' },
        { to: 'odysseus', label: 'killed by' },
      ],
    },
    {
      id: 'eurymachos',
      name: 'Eurymachus',
      role: 'Second leader of the suitors',
      affiliation: 'other',
      works: ['odyssey'],
      description:
        'The smoothest of the suitors: outwardly friendly and conciliatory, behind the facade every bit as ruthless as Antinous. After Antinous’ death he tries to shift all the blame onto the dead man and appease Odysseus with compensation – in vain. His double-dealing embodies the hypocrisy of the entire band of suitors.',
      relations: [
        { to: 'penelope', label: 'courts' },
        { to: 'odysseus', label: 'killed by' },
      ],
    },
  ],
};

export default characters;
