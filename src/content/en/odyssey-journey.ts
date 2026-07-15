import type { JourneyContent } from '../types';

const odysseyJourney: JourneyContent = {
  title: 'A Reading Journey Through the Odyssey',
  intro: [
    'The Odyssey tells of the homecoming of Odysseus, who wanders the seas for ten years after the fall of Troy – but it does not tell the story in order. The epic begins shortly before the end of the wanderings: the narrated present spans only about 40 days, in which the fate of the hero and his house is decided.',
    'Three great arcs give the work its shape. First, the “Telemachy” (Books 1–4) follows the son, Telemachus, as he sets out in search of news of his father while suitors besiege the palace on Ithaca. Then Odysseus himself takes the stage: among the hospitable Phaeacians, in a great flashback (Books 9–12), he tells of the Cyclopes, Circe, the underworld, and the loss of all his companions. The second half finally recounts the homecoming – the cautious return of the disguised hero, the trial of the bow, the slaying of the suitors, and the reunion with Penelope.',
    'This reading journey leads book by book through all 24 books of the Odyssey. Each stage summarizes the action; turning points are marked, and sidenotes explain the background, from guest-friendship to the secret of the marriage bed.',
  ],
  stageLabel: 'Stage',
  stages: [
    {
      id: 'buch-1',
      books: 'Book 1',
      title: 'The Decision of the Gods',
      summary: [
        'Ten years after the fall of Troy, all the heroes have returned home or died – only Odysseus remains stranded on the island of the nymph Calypso. In the assembly of the gods, Athena takes advantage of the absence of the wrathful Poseidon: Zeus agrees that Odysseus shall at last come home.',
        'Athena herself travels to Ithaca in the guise of the stranger Mentes. There, more than a hundred suitors carouse in the palace, harass Penelope, and devour the absent master’s estate. The goddess encourages young Telemachus to call an assembly and go in search of his father – the son begins to become a man.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'Straight Into the Action: In Medias Res',
        text: 'The Odyssey does not begin with the departure from Troy but in the final year of the wanderings – “into the middle of things,” as the Roman poet Horace would later put it. The backstory is supplied only when Odysseus tells it himself. This technique of the in medias res opening became the model for countless novels and films.',
      },
      location: 'Mount Olympus / Ithaca, palace of Odysseus',
    },
    {
      id: 'buch-2',
      books: 'Book 2',
      title: 'The Son Sets Out',
      summary: [
        'Telemachus calls the first public assembly on Ithaca in twenty years and openly accuses the suitors. Their spokesman Antinous shifts the blame onto Penelope: for three years she strung the men along with a ruse – by day she wove at a shroud for old Laertes, by night she unraveled it again, until a maid betrayed her.',
        'An eagle omen from Zeus portends disaster, but the suitors only scoff. Athena, now in the guise of Mentor, procures a ship and crew; Telemachus puts to sea in secret.',
      ],
      sidenote: {
        title: 'Penelope’s Weaving Ruse',
        text: 'The weaving ruse makes Penelope the female counterpart of her wily husband: with cleverness she buys time where open resistance is impossible. The image of the woman who undoes her own work in order to remain faithful became an emblem of patience and constancy – and shows that the Odyssey takes its women seriously as intelligent agents.',
      },
      location: 'Ithaca',
    },
    {
      id: 'buch-3',
      books: 'Book 3',
      title: 'With Old Nestor',
      summary: [
        'At Pylos, Telemachus finds King Nestor, the oldest of the Trojan War veterans, in the midst of a great sacrificial feast for Poseidon. The old man welcomes the guests warmly and tells of the heroes’ homecomings: of the quarrel between the sons of Atreus after the victory, of the murder of Agamemnon by Aegisthus and Clytemnestra, and of Orestes’ revenge – a cautionary yet encouraging example for the son.',
        'Of Odysseus, however, Nestor knows nothing. He advises asking Menelaus in Sparta and sends his own son Peisistratus along as a companion for the journey overland.',
      ],
      sidenote: {
        title: 'Nostos – the Song of Homecoming',
        text: 'Nostos, the homecoming, is the leitmotif of the entire epic; our word “nostalgia” – the ache of longing for return – derives from it. Alongside the Odyssey there was once a whole epic called the “Nostoi,” about the heroes’ voyages home. Agamemnon’s dark end serves as a foil throughout: this is how a homecoming can also fail.',
      },
      location: 'Pylos',
    },
    {
      id: 'buch-4',
      books: 'Book 4',
      title: 'Splendor and Sorrow in Sparta',
      summary: [
        'In Sparta, Menelaus and Helen receive the young guests amid a double wedding. The memory of Troy mingles splendor and pain: Helen recounts how Odysseus slipped into the city disguised as a beggar, Menelaus how they waited through the night inside the wooden horse. From Proteus, the old man of the sea whom he outwitted on his voyage home, Menelaus knows the crucial fact: Odysseus is alive – held captive by the nymph Calypso, without ship or companions.',
        'On Ithaca, meanwhile, the suitors discover Telemachus’ departure. Alarmed by the son’s awakening, they lay an ambush to murder him on his return voyage.',
      ],
      location: 'Sparta / Ithaca',
    },
    {
      id: 'buch-5',
      books: 'Book 5',
      title: 'Farewell to Calypso',
      summary: [
        'Only now does Odysseus himself appear: for seven years Calypso has held him on her island of Ogygia; every day he sits weeping on the shore, gazing out to sea. On Zeus’ command, Hermes brings the nymph the order to let him go. Reluctantly she yields – not even her offer of immortality could overcome his longing for home and for Penelope.',
        'Odysseus builds a raft and sails for seventeen days, until Poseidon catches sight of him and unleashes a terrible storm. With the help of the sea goddess Ino, the shipwrecked man saves himself, naked, on the coast of the Phaeacians.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'Why Does Poseidon Hate Odysseus?',
        text: 'The sea god pursues Odysseus because he blinded his son, the Cyclops Polyphemus. Polyphemus’ curse – told only in Book 9 – begged Poseidon to deny the culprit his homecoming, or to let it come late, in misery, and alone. The god may not kill him, for fate has decreed the homecoming; but he can turn the way home into torment.',
      },
      location: 'Ogygia / The open sea / Scheria',
    },
    {
      id: 'buch-6',
      books: 'Book 6',
      title: 'Nausicaa on the Shore',
      summary: [
        'Athena sends the king’s daughter Nausicaa a dream: she should drive to the river and wash the family’s clothes – after all, her wedding is surely near. While the girls play ball after finishing their work, the shipwrecked Odysseus awakes in the bushes.',
        'Wild-looking and covered only by a branch, he steps before the girls; all flee except Nausicaa. With a carefully composed, flattering speech of supplication, the stranger wins her trust. She gives him clothing and shows him the way to the city of the Phaeacians – wary of gossip, she asks him to walk separately from her and, at the palace, to appeal to Queen Arete.',
      ],
      location: 'Scheria, river mouth by the sea',
    },
    {
      id: 'buch-7',
      books: 'Book 7',
      title: 'At the Court of Alcinous',
      summary: [
        'Cloaked in a mist that Athena wraps around him, Odysseus crosses the city of the Phaeacians, marveling at the harbor, the squares, and the fairytale palace of King Alcinous with its orchards that bear fruit all year round. As a suppliant, he clasps the knees of Queen Arete.',
        'He is received kindly and feasted, and need give neither name nor origin – so custom of hospitality demands. He recounts only his voyage from Ogygia to Scheria. Alcinous is so impressed that he even offers the stranger his daughter in marriage – but above all he promises him safe passage home.',
      ],
      sidenote: {
        title: 'Xenia – Sacred Hospitality',
        text: 'Hospitality (xenia) is the central social institution of the Odyssey: to take in strangers, feast them, and only then ask their name is commanded by Zeus himself as protector of guests. Everyone is measured against xenia – the exemplary Phaeacians and Eumaeus as much as its wicked violators: the man-eating Polyphemus and the suitors, who as permanent guests devour another man’s house.',
      },
      location: 'Scheria, palace of Alcinous',
    },
    {
      id: 'buch-8',
      books: 'Book 8',
      title: 'The Bard and the Tears',
      summary: [
        'Alcinous holds a feast with athletic contests for his guest. When a young Phaeacian mocks him, Odysseus hurls the discus farther than anyone else – the stranger is clearly no ordinary man.',
        'Three times the blind bard Demodocus sings: of the quarrel between Odysseus and Achilles, of the exposed love affair of Ares and Aphrodite, and finally, at Odysseus’ own request, of the wooden horse and the fall of Troy. During the songs of Troy the guest hides his face and weeps. Alcinous notices and asks the decisive question: who are you?',
      ],
      sidenote: {
        title: 'Demodocus – the Epic Within the Epic',
        text: 'In the blind bard Demodocus, the Odyssey portrays its own profession: the aoidos, gifted by the Muse, who sings at feasts. That Odysseus weeps at the song of his own deeds shows the power of this art – and antiquity liked to see in the blind singer a self-portrait of Homer, whom tradition also calls blind.',
      },
      location: 'Scheria, palace of Alcinous',
    },
    {
      id: 'buch-9',
      books: 'Book 9',
      title: 'Nobody and the Cyclops',
      summary: [
        '“I am Odysseus” – with the revelation of his name, the hero begins his great flashback. After setting out from Troy, his companions sacked the city of the Cicones and lost many men; among the Lotus-eaters, those drugged by the lotus, forgetting all thought of home, had to be dragged back on board by force.',
        'Then the Cyclopes: the giant Polyphemus traps the companions in his cave and devours six of them. Odysseus makes him drunk with wine, calls himself “Nobody,” blinds him with a glowing stake, and escapes beneath the sheep. But in his triumph he reveals his true name – and Polyphemus begs his father Poseidon for revenge.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'The “Nobody” Wordplay',
        text: 'When the blinded Polyphemus bellows for help, the other Cyclopes ask who is harming him. His answer – “Nobody!” – sends them away shaking their heads. The ruse shows Odysseus as a master of language; in Greek, the alias Outis also echoes mētis (“cunning, craft”). Yet the vain revelation of his name afterwards very nearly costs him his homecoming.',
      },
      location: 'Scheria (narrated: Thrace, land of the Lotus-eaters, island of the Cyclopes)',
    },
    {
      id: 'buch-10',
      books: 'Book 10',
      title: 'The Bag of Winds, Giants, and Circe',
      summary: [
        'The wind god Aeolus gives Odysseus a bag in which all the adverse winds are bound. Ithaca is already in sight when the mistrustful companions open the sack – the storm drives them back, and Aeolus refuses any further help. Among the gigantic Laestrygonians, catastrophe follows: they smash eleven of the twelve ships with all hands.',
        'On the island of Aeaea, the sorceress Circe transforms the scouts into swine. Protected by the herb moly, given to him by Hermes, Odysseus forces her to undo the spell. The enemy becomes a hostess; the men stay a year before Circe points the way onward – it leads to the realm of the dead.',
      ],
      sidenote: {
        title: 'Moly – the Herb of the Gods',
        text: 'Moly is probably the most famous magical plant in ancient literature: black at the root, with a milk-white flower, “hard for mortals to dig up” – only gods bestow it. What plant Homer had in mind is still debated; suggestions have included the snowdrop and Syrian rue. As an antidote to enchantment, moly became proverbial.',
      },
      location: 'Scheria (narrated: Aeolia, land of the Laestrygonians, Aeaea)',
    },
    {
      id: 'buch-11',
      books: 'Book 11',
      title: 'At the Edge of the Underworld',
      summary: [
        'At the edge of the world, Odysseus digs a sacrificial pit; the blood draws the souls of the dead. The seer Tiresias prophesies his homecoming – provided no one touches the cattle of Helios – as well as the state of affairs on Ithaca and a late, gentle death. Shaken, Odysseus recognizes among the shades his mother Anticleia, who died of grief for him; three times he reaches for her, three times he grasps empty air.',
        'Famous encounters follow: Agamemnon warns him about his homecoming, Achilles declares he would rather be the poorest serf among the living than king of all the dead, and the aggrieved Ajax turns away in silence.',
      ],
      sidenote: {
        title: 'The Nekyia',
        text: 'The summoning of the dead – called the “Nekyia” after the Greek word for the sacrificial rite – is the oldest fully developed underworld scene in European literature. It founded a long tradition of journeys to the beyond: Virgil sent Aeneas down into the underworld, and Dante walked through the Inferno. What stands out is Homer’s sober afterlife: a shadow existence without consolation, which makes life all the more precious.',
      },
      location: 'Scheria (narrated: entrance to the underworld by the stream of Oceanus)',
    },
    {
      id: 'buch-12',
      books: 'Book 12',
      title: 'Sirens, Scylla, and the Cattle of Helios',
      summary: [
        'Circe describes the final dangers. Passing the Sirens, Odysseus has himself bound to the mast while his companions row with wax in their ears – so he alone hears their beguiling song and survives. In the strait between the six-headed monster Scylla and the whirlpool Charybdis he chooses the lesser evil: Scylla snatches six men from the deck.',
        'On the island of Thrinacia, the starving companions slaughter the sacred cattle of the sun god despite all their oaths. Zeus shatters the ship with a thunderbolt; all drown. Only Odysseus drifts on a piece of wreckage to Ogygia – and the circle of the tale closes.',
      ],
      sidenote: {
        title: 'The Sirens After Homer',
        text: 'Homer never describes what the Sirens look like – only their voice, which promises all knowledge and lures men to destruction. It was later art that made them bird-women with wings and claws, and the Middle Ages then fish-tailed beings, from whom our mermaids descend. The scene of the bound Odysseus is among the most interpreted images of antiquity – as an emblem of reason withstanding temptation.',
      },
      location: 'Scheria (narrated: island of the Sirens, the strait, Thrinacia)',
    },
    {
      id: 'buch-13',
      books: 'Book 13',
      title: 'Arrival on Ithaca',
      summary: [
        'The tale is told; richly laden with gifts, Odysseus embarks on the final crossing. The marvelous ships of the Phaeacians carry him to Ithaca in his sleep and set him ashore with his treasures. Poseidon takes revenge on the ferrymen: the returning ship is turned to stone before its harbor.',
        'Odysseus awakes and at first does not recognize his own homeland, which Athena has shrouded in mist. Disguised as a shepherd, the goddess puts him to the test – and is amused by the lying tale he invents on the spot. Together they plan revenge on the suitors; Athena transforms the hero into an old beggar.',
      ],
      isTurningPoint: true,
      location: 'Ithaca, harbor of Phorcys',
    },
    {
      id: 'buch-14',
      books: 'Book 14',
      title: 'With Eumaeus the Swineherd',
      summary: [
        'The beggar knocks at the hut of the swineherd Eumaeus – and is taken in, fed, and given gifts, though the herdsman has little himself. Eumaeus laments the suitors, who are squandering his lost master’s herds, and believes Odysseus dead; too many vagrants have already consoled Penelope with false hopes.',
        'The disguised Odysseus serves up an elaborate lying tale: as a Cretan adventurer, he claims to have heard that Odysseus will soon return. The faithful herdsman remains skeptical, but his simple warmth passes the test of hospitality with flying colors.',
      ],
      sidenote: {
        title: 'The Faithful Servants',
        text: 'Eumaeus, the nurse Eurycleia, and the cowherd Philoetius form the counter-image to the disloyal maids and the goatherd Melanthius: in the Odyssey, loyalty – not rank – decides a person’s worth and fate. Eumaeus himself is a king’s tale in a minor key: stolen and sold as a child, the slave is of princely birth.',
      },
      location: 'Ithaca, hut of Eumaeus',
    },
    {
      id: 'buch-15',
      books: 'Book 15',
      title: 'Telemachus Returns',
      summary: [
        'Athena urges Telemachus in Sparta to head home and warns him of the suitors’ ambush. With guest-gifts from Menelaus and Helen, he travels back via Pylos; on board he takes in the fugitive seer Theoclymenus. Steering a different course, the ship slips past the lurking assassins.',
        'In the hut, meanwhile, Eumaeus tells his life story: a king’s child, he was abducted by a Phoenician slave woman, sold, and bought by Laertes – in the house of Odysseus he found a second home. At sunrise, Telemachus lands on Ithaca and makes for the swineherd’s hut.',
      ],
      location: 'Sparta / Pylos / Ithaca',
    },
    {
      id: 'buch-16',
      books: 'Book 16',
      title: 'Father and Son',
      summary: [
        'Telemachus reaches the hut and sends Eumaeus to Penelope with news of his return. As soon as father and son are alone, Athena transforms the beggar back: Odysseus reveals himself. Telemachus at first takes him for a god; then the two fall weeping into each other’s arms – after twenty years.',
        'Together they forge the plan of revenge: Odysseus will go to the palace as a beggar and endure every abuse; the weapons in the hall are to be removed, and no one – not even Penelope – may know of his return. The suitors, meanwhile, deliberate in vain over a new murder plot.',
      ],
      location: 'Ithaca, hut of Eumaeus',
    },
    {
      id: 'buch-17',
      books: 'Book 17',
      title: 'A Beggar in His Own House',
      summary: [
        'Odysseus makes his way to the palace as a beggar; on the road, the goatherd Melanthius insults and kicks him. At the courtyard gate, on the dungheap, lies the aged hunting dog Argos, whom Odysseus once raised: he alone knows his master after twenty years, wags his tail one last time – and dies. Odysseus must hide a tear.',
        'In his own hall, the master of the house begs the suitors for bread. Most give, but Antinous hurls a footstool at his shoulder – an outrage against the guest-right that makes even the other suitors murmur. Penelope asks to speak with the stranger.',
      ],
      sidenote: {
        title: 'Argos, the Faithful Dog',
        text: 'The Argos scene is only a few lines long, yet world-famous: the once-finest hunting dog, now old and neglected on the dungheap, is the first living creature to recognize the returning master – without any test of disguise, out of loyalty alone. That he dies in the moment of reunion condenses twenty years of waiting into a single image of quiet devotion.',
      },
      location: 'Ithaca, palace of Odysseus',
    },
    {
      id: 'buch-18',
      books: 'Book 18',
      title: 'The Battle of the Beggars',
      summary: [
        'Irus, a beggar known throughout the town, tries to drive the newcomer from the door; the amused suitors arrange a boxing match. Odysseus fells the braggart with a single, carefully measured blow – a foretaste that no one understands.',
        'Penelope, suffused with beauty by Athena, shows herself to the suitors: she rebukes Telemachus for appearances’ sake, laments her plight, and coaxes rich gifts from the wooers – Odysseus quietly delights in his wife’s cunning. The maid Melantho mocks the beggar, and the suitor Eurymachus throws a stool at him. The tension in the hall keeps rising.',
      ],
      location: 'Ithaca, palace of Odysseus',
    },
    {
      id: 'buch-19',
      books: 'Book 19',
      title: 'The Nurse and the Scar',
      summary: [
        'By night, Odysseus and Telemachus carry the weapons out of the hall. Then the beggar sits with Penelope: he passes himself off as a Cretan who once entertained Odysseus, describing his clothing so precisely that Penelope weeps. Her guest comforts her: Odysseus is near.',
        'While washing his feet, the old nurse Eurycleia recognizes her master by the scar above his knee, torn long ago by a boar on a hunt on Mount Parnassus. Odysseus stifles her cry of joy and swears her to silence. Penelope recounts a portentous dream and comes to a decision: tomorrow, the trial of the bow shall determine her new husband.',
      ],
      location: 'Ithaca, palace of Odysseus',
    },
    {
      id: 'buch-20',
      books: 'Book 20',
      title: 'The Night Before the Reckoning',
      summary: [
        'Odysseus lies sleepless in the entrance hall and watches the disloyal maids steal off to the suitors; his heart growls like a she-dog, but he forces himself to be patient – he endured worse with Polyphemus. Athena calms him, and Zeus sends a favorable sign of thunder.',
        'On the feast day of Apollo, the hall fills one last time. The cowherd Philoetius shows the beggar kindness; the suitor Ctesippus hurls an ox’s hoof at him. Then an uncanny laughter, sent by Athena, seizes the suitors; the seer Theoclymenus sees blood on the walls and the hall full of shades – and leaves the house in horror.',
      ],
      location: 'Ithaca, palace of Odysseus',
    },
    {
      id: 'buch-21',
      books: 'Book 21',
      title: 'The Trial of the Bow',
      summary: [
        'Penelope fetches the great bow of Odysseus from the storeroom and announces the contest: whoever strings the bow and shoots an arrow through the sockets of twelve axes set in a row, him she will marry. Suitor after suitor strains in vain – the weapon cannot even be strung.',
        'Outside, Odysseus reveals himself to the swineherd Eumaeus and the cowherd Philoetius and assigns them their roles. Then the beggar himself asks for the bow; the suitors rage, but Telemachus sees it done. Effortlessly Odysseus strings the bow, the string sings under his hand – and the arrow flies through all twelve axes.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'The Bow as the Master’s Token',
        text: 'The bow came from the hero Eurytus and was a guest-gift to the young Odysseus – only its rightful master can string it. The trial is therefore more than a feat of strength: it is an ordeal deciding who rules Ithaca. That Penelope sets the contest at precisely this moment is read by many as her own – perhaps knowing – stratagem.',
      },
      location: 'Ithaca, great hall of the palace',
    },
    {
      id: 'buch-22',
      books: 'Book 22',
      title: 'The Slaying of the Suitors',
      summary: [
        'Odysseus throws off his rags, leaps onto the threshold, and sends the next arrow through the throat of Antinous. Then he speaks his name: the judgment of the suitors begins. Eurymachus’ offer of compensation he rejects; the time for pleading is past.',
        'At his side fight Telemachus, Eumaeus, and Philoetius; Athena holds her protecting hand over them. The traitor Melanthius, who smuggles weapons to the suitors, is caught. In the end all the suitors lie slain; only the bard Phemius and the herald Medon are spared. The twelve disloyal maids must clean the hall and are hanged; Melanthius is mutilated.',
      ],
      isTurningPoint: true,
      location: 'Ithaca, great hall of the palace',
    },
    {
      id: 'buch-23',
      books: 'Book 23',
      title: 'The Secret of the Marriage Bed',
      summary: [
        'Eurycleia wakes Penelope with the incredible news. But the queen remains wary – she has been deceived too often, and the man before her might be a god in disguise. Coolly she sets the final test: let the bed of Odysseus be moved out of the bedchamber.',
        'At that the hero flares up: no man can move his bed, for he himself built it around the trunk of a living olive tree – a secret only husband and wife share. Only now does Penelope fall weeping into his arms. Athena lengthens the night in which the two tell each other their twenty years.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'The Marriage Bed as Symbol',
        text: 'The bed built around the rooted olive tree is the most powerful symbol of the Odyssey: a marriage that is literally rooted and immovable. Penelope’s test also shows that she is her husband’s equal in cunning – she outwits the master of tricks. It is the shared secret, not the scar or the bow, that here confirms his identity.',
      },
      location: 'Ithaca, palace of Odysseus',
    },
    {
      id: 'buch-24',
      books: 'Book 24',
      title: 'Peace on Ithaca',
      summary: [
        'Hermes leads the souls of the suitors down to the underworld, where Agamemnon and Achilles are conversing: the one praises Achilles’ glorious funeral, then both praise the faithfulness of Penelope – the shining counter-image to Agamemnon’s own murderous wife.',
        'Odysseus goes out into the countryside to his father Laertes, whom he finds impoverished and grieving at his gardening, and after a gentle test reveals himself. But the kinsmen of the slain suitors take up arms. A final battle looms, and Laertes even strikes down the father of Antinous – then Zeus and Athena call a halt and establish lasting peace on Ithaca.',
      ],
      location: 'The underworld / Ithaca, farm of Laertes',
    },
  ],
};

export default odysseyJourney;
