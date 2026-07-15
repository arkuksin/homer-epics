import type { JourneyContent } from '../types';

const iliadJourney: JourneyContent = {
  title: 'A Reading Journey Through the Iliad',
  intro: [
    'The Iliad does not tell the full story of the Trojan War, but a slice of roughly 51 days in its tenth year. Its guiding thread is the wrath of Achilles: insulted by Agamemnon, the greatest warrior of the Greeks withdraws from battle – with devastating consequences for his own army, for his friend Patroclus, and finally for the Trojan Hector.',
    'Around this core Homer unfolds a vast panorama: battles and duels, councils of the gods, quiet family scenes in Troy, mourning and reconciliation. From the quarrel in the Greek camp to the burial of Hector, each of the 24 books carries the action a step further – while deepening the epic’s great themes: honor, mortality, and humanity in war.',
    'This reading journey follows the Iliad book by book. Each stage summarizes the action of one book; the central turning points are specially marked, and expandable sidenotes provide background on characters, gods, and mythological context.',
  ],
  stageLabel: 'Stage',
  stages: [
    {
      id: 'gesang-1',
      books: 'Book 1',
      title: 'The Wrath Ignites',
      summary: [
        'Chryses, a priest of Apollo, comes to the Greek camp and begs for the release of his daughter Chryseis, who has fallen to Agamemnon as a prize of war. The commander rebuffs him harshly, whereupon Apollo sends a plague upon the army. The seer Calchas names the cause: Chryseis must be returned.',
        'Agamemnon consents, but takes Briseis, Achilles’ prize of honor, as a replacement. Deeply insulted, Achilles withdraws from the fighting. His mother, the sea goddess Thetis, obtains a promise from Zeus that the Greeks shall suffer defeat until her son’s honor is restored.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'Why Is Apollo Angry?',
        text: 'Chryses is a priest of Apollo – to insult him is to insult the god himself. Apollo is the god who can send disease with his arrows, but also heal. The plague in the camp is therefore no accident but divine punishment: it forces the Greeks to make amends for the wrong done to a man under the god’s protection.',
      },
      location: 'Greek camp / Mount Olympus',
    },
    {
      id: 'gesang-2',
      books: 'Book 2',
      title: 'Dream and Muster',
      summary: [
        'To fulfill his promise to Thetis, Zeus sends Agamemnon a deceptive dream: Troy can now be taken. Agamemnon decides first to test the army and feigns a proposal to sail home – but the war-weary men rush eagerly to the ships. Only Odysseus, with Athena’s help, restores order and silences the scoffer Thersites.',
        'The army arms for battle. An extensive catalogue lists the Greek ships and contingents, and a second one the allies of Troy.',
      ],
      sidenote: {
        title: 'The Catalogue of Ships',
        text: 'The long enumeration of 29 Greek contingents with some 1,186 ships feels unwieldy today, but for the ancient audience it was a highlight: many regions of Greece could find themselves in it. Scholars also use the catalogue as a source for the political geography of early Greece.',
      },
      location: 'Greek camp',
    },
    {
      id: 'gesang-3',
      books: 'Book 3',
      title: 'A Duel for Helen',
      summary: [
        'As the armies clash, Paris boastfully challenges the best of the Greeks – then shrinks back in fright when Menelaus steps forward. Shamed by Hector, Paris agrees to a duel: the victor shall have Helen and her treasures, and the war would be over. On the city wall, Helen points out the Greek leaders to old King Priam.',
        'Menelaus is clearly the stronger fighter, but before he can kill Paris, Aphrodite spirits her favorite away to Troy in a cloud. The war remains undecided.',
      ],
      location: 'Battlefield before Troy / Troy',
    },
    {
      id: 'gesang-4',
      books: 'Book 4',
      title: 'The Broken Oath',
      summary: [
        'On Olympus the gods debate the outcome of the duel. Zeus considers ending the war, but Hera insists on Troy’s destruction. Athena descends and tempts the Trojan archer Pandarus into a treacherous shot at Menelaus. The arrow wounds him only slightly – but the truce is broken, and the guilt now lies with the Trojans.',
        'Agamemnon strides along the ranks, spurring on the leaders and rebuking the hesitant. Then the armies collide, and the great slaughter begins.',
      ],
      location: 'Mount Olympus / Battlefield before Troy',
    },
    {
      id: 'gesang-5',
      books: 'Book 5',
      title: 'Diomedes’ Great Day',
      summary: [
        'Athena fills young Diomedes with superhuman fighting strength. He rages among the Trojans, kills Pandarus, and gravely wounds Aeneas. When Aphrodite tries to rescue her son Aeneas, Diomedes wounds even the goddess in the hand – Apollo must carry the Trojan to safety.',
        'Now the war god Ares intervenes on the Trojan side and turns the tide. But with the permission of Hera and Athena, Diomedes confronts even him: his spear, guided by Athena, strikes the god, who flees bellowing to Olympus. No other mortal in the Iliad dares go so far.',
      ],
      sidenote: {
        title: 'What Is an Aristeia?',
        text: 'An aristeia (from Greek aristos, “the best”) is a hero’s great moment of glory: a sequence of combat in which he outshines everyone and overcomes opponent after opponent. The Iliad strings together several such aristeiai – from Diomedes through Agamemnon and Patroclus to Achilles himself. They structure the battle narratives and apportion the glory.',
      },
      location: 'Battlefield before Troy',
    },
    {
      id: 'gesang-6',
      books: 'Book 6',
      title: 'Hector and Andromache',
      summary: [
        'While the battle rages, Diomedes and the Lycian Glaucus come face to face – and discover that their families are bound by an old tie of guest-friendship. Instead of fighting, they exchange armor.',
        'Hector goes into the city to arrange a supplicatory offering by the Trojan women to Athena, which the goddess refuses. At the Scaean Gate he meets Andromache with their little son Astyanax. She begs him not to leave the city again; he replies that duty and honor bind him – knowing that Troy will fall. The child shrinks in fear from his father’s helmet crest, and for a moment both parents laugh.',
      ],
      sidenote: {
        title: 'A Family Scene in Wartime',
        text: 'Hector’s farewell to Andromache and Astyanax is among the most famous scenes in world literature. In the midst of a war epic, Homer shows what is at stake: not only glory, but a family, a city, a future. Here Hector appears not as the enemy of the Greeks but as husband and father – the Iliad takes the Trojan side seriously too.',
      },
      location: 'Troy',
    },
    {
      id: 'gesang-7',
      books: 'Book 7',
      title: 'Hector Against Ajax',
      summary: [
        'At the prompting of the gods, Hector challenges the bravest of the Greeks to single combat. The lot falls to the towering Ajax. The two fight doggedly until nightfall without either prevailing; heralds separate them, and as a token of mutual respect they exchange gifts – Hector gives his sword, Ajax his belt.',
        'Both sides agree on a truce to bury the fallen. The Greeks use the pause and, on Nestor’s advice, build a wall and ditch around their camp by the ships – a fortification that will soon be fiercely contested.',
      ],
      location: 'Battlefield before Troy / Greek camp',
    },
    {
      id: 'gesang-8',
      books: 'Book 8',
      title: 'Zeus Takes Command',
      summary: [
        'Zeus forbids all gods, on pain of severe punishment, to intervene in the fighting – now his promise to Thetis is to be fulfilled. From Mount Ida he directs the battle and weighs the fates of the two armies on golden scales: they sink against the Greeks.',
        'Under Hector’s leadership, the Trojans drive the Greeks back to the ditch of their camp. Hera and Athena want to help but are called sharply to heel by Zeus. For the first time, the Trojan army, confident of victory, camps in the open field; countless watchfires glow across the plain.',
      ],
      sidenote: {
        title: 'The Gods Take Sides',
        text: 'The gods of the Iliad are anything but neutral: Hera, Athena, and Poseidon stand with the Greeks; Apollo, Aphrodite, and Ares support Troy. The anger of Hera and Athena goes back to the Judgment of Paris, who crowned Aphrodite the fairest goddess. Zeus stands above the factions – and yet holds the fate of both sides in his hands.',
      },
      location: 'Mount Olympus / Battlefield before Troy',
    },
    {
      id: 'gesang-9',
      books: 'Book 9',
      title: 'The Failed Embassy',
      summary: [
        'The Greeks’ plight is so dire that Agamemnon relents: he offers Achilles rich gifts, the return of Briseis, and even one of his daughters in marriage. Odysseus, the old tutor Phoenix, and Ajax deliver the offer.',
        'But Achilles stands firm. No gift can outweigh the insult he has suffered; he even threatens to sail home and speaks openly of the choice between a long life and immortal glory. Neither Phoenix’s cautionary tale of the wrath of Meleager nor Ajax’s blunt soldier’s words change anything. The embassy returns empty-handed.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'Phoenix and the Goddesses of Prayer',
        text: 'Phoenix, who once raised Achilles, warns him with a parable: the Litai, prayers personified, follow in the wake of Delusion and heal what she wreaks – whoever rejects them falls prey to delusion himself. His exemplary tale of the hero Meleager, who nursed his anger too long and in the end gained nothing, is an unmistakable warning to Achilles.',
      },
      location: 'Greek camp',
    },
    {
      id: 'gesang-10',
      books: 'Book 10',
      title: 'Night Raid',
      summary: [
        'In the sleepless night, the Greek leaders decide to send out scouts. Diomedes and Odysseus steal into the darkness – and intercept the Trojan spy Dolon, who was to reconnoiter the Greek camp in exchange for Achilles’ horses. They wring every piece of information from him and kill him despite his pleading.',
        'Armed with Dolon’s knowledge, the two raid the camp of the newly arrived Thracians: Diomedes kills their king Rhesus and twelve of his men in their sleep, while Odysseus steals the magnificent horses. They return unscathed.',
      ],
      sidenote: {
        title: 'The Disputed Doloneia',
        text: 'The tenth book, called the “Doloneia” after the spy Dolon, has been under suspicion since antiquity: it can be lifted out of the plot without anything going missing, and it diverges from the rest of the epic in language and morality. Many scholars consider it a later addition – though this has never been proven.',
      },
      location: 'The battlefield by night',
    },
    {
      id: 'gesang-11',
      books: 'Book 11',
      title: 'The Day of Wounds',
      summary: [
        'Agamemnon has his great hour in battle and drives the Trojans far back – until a spear wound forces him from the field. Now the tide turns: one after another, Diomedes, Odysseus, and the healer Machaon are wounded as well. The most important Greek fighters are out of action, and Hector presses forward relentlessly.',
        'Achilles watches events from his ship and sends Patroclus to Nestor for news. The old king seizes the opportunity to make a fateful suggestion: if Achilles will not fight himself, then at least Patroclus should save the Greeks wearing his armor.',
      ],
      location: 'Battlefield before Troy / Greek camp',
    },
    {
      id: 'gesang-12',
      books: 'Book 12',
      title: 'Storming the Wall',
      summary: [
        'The Trojans reach the Greek ditch. On the advice of the seer Polydamas, they leave their chariots behind and attack the camp wall on foot in five divisions. An ominous bird sign – an eagle dropping a snake – is brushed aside by Hector: one bird sign alone counts, he says, to fight for one’s country.',
        'The Lycian prince Sarpedon tears down a section of the parapet; Ajax and Teucer hold the line against him. Finally Hector shatters the gate with a mighty boulder. The Trojans flood into the camp, and the Greeks flee to the ships.',
      ],
      location: 'The Greek camp wall',
    },
    {
      id: 'gesang-13',
      books: 'Book 13',
      title: 'Poseidon Intervenes',
      summary: [
        'Zeus turns his gaze away from the battlefield – and his brother Poseidon seizes the moment. Secretly, in the guise of mortal men, the sea god moves through the Greek ranks, breathing new fighting spirit into them.',
        'The Cretan king Idomeneus distinguishes himself above all, killing numerous Trojans. Around the ships a bitter, surging struggle erupts: thanks to Poseidon’s forbidden help the Greeks hold their ground, though Hector storms against them again and again. Polydamas advises the Trojans to gather their forces – but Hector presses on, and the battle hangs in the balance.',
      ],
      location: 'The Greek camp by the ships',
    },
    {
      id: 'gesang-14',
      books: 'Book 14',
      title: 'Hera’s Ruse',
      summary: [
        'Hera wants to help the Greeks and devises a bold plan: she borrows Aphrodite’s girdle of desire, wins the god of sleep as an ally, and seduces Zeus on Mount Ida. While the father of the gods sinks into deep slumber, Poseidon can intervene openly.',
        'The Greeks take new heart. Ajax fells Hector with a tremendous throw of a stone; the Trojan hero is carried unconscious from the field. Without their leader, the Trojans waver and are hurled back across the ditch.',
      ],
      sidenote: {
        title: 'The Deception of Zeus',
        text: 'The seduction scene, known in scholarship as the “Dios apate” (deception of Zeus), shows the gods at their all-too-human: vanity, desire, and marital strife on Olympus. It is also finely wrought comedy in the midst of a war epic – and proof that even the mightiest god can be outwitted, if only for a short while.',
      },
      location: 'Mount Ida / The Greek camp by the ships',
    },
    {
      id: 'gesang-15',
      books: 'Book 15',
      title: 'Zeus Awakes',
      summary: [
        'Zeus awakes, sees the Trojans in flight, and instantly sees through Hera’s ruse. Angrily he restores order: Poseidon must leave the battle, and Apollo is charged with breathing new strength into Hector. Zeus also reveals his plan – the Trojans shall prevail until Achilles returns; after that, Troy will fall.',
        'With Apollo at their head, leveling the ditch and tearing down the wall, the Trojans storm the ships once more. Ajax defends them almost single-handedly with a long ship’s pike, but Hector is already calling for fire to burn the fleet.',
      ],
      location: 'Mount Ida / The Greek camp by the ships',
    },
    {
      id: 'gesang-16',
      books: 'Book 16',
      title: 'Patroclus Falls',
      summary: [
        'As the first ship goes up in flames, Patroclus tearfully implores his friend. Achilles yields: Patroclus may fight in his armor – but only to save the ships, not to press on to Troy. The mere sight of what appears to be Achilles’ armor is enough; the Trojans flee. Patroclus kills many, among them Sarpedon, son of Zeus.',
        'Intoxicated by success, he ignores the warning and storms toward the city wall. There Apollo himself confronts him, striking armor and weapons from his body; Euphorbus wounds him, and Hector delivers the death blow to the defenseless man. Dying, Patroclus prophesies Hector’s imminent end.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'Sarpedon, Son of Zeus',
        text: 'The Lycian king Sarpedon is a son of Zeus – and even the father of the gods cannot save him without shaking the order of the world. At Hera’s admonition, Zeus lets his son fall and weeps tears of blood. Sleep and Death carry the body home to Lycia: one of the Iliad’s most striking images of the limits of divine power.',
      },
      location: 'The Greek camp by the ships / Battlefield before Troy',
    },
    {
      id: 'gesang-17',
      books: 'Book 17',
      title: 'The Fight Over the Body',
      summary: [
        'A grim struggle erupts over the body of Patroclus. Menelaus kills Euphorbus but must give way before Hector, who strips Achilles’ armor from the dead man and puts it on himself. The two Ajaxes, Menelaus, and many others hold out for hours against the surging Trojans.',
        'Away from the tumult, the immortal horses of Achilles stand motionless, weeping for Patroclus. At last Menelaus and Meriones manage to lift the body and carry it to the ships, while the two Ajaxes cover the retreat. Antilochus hurries ahead to bring Achilles the news of the death.',
      ],
      location: 'Battlefield before Troy',
    },
    {
      id: 'gesang-18',
      books: 'Book 18',
      title: 'Grief and a New Shield',
      summary: [
        'The news of Patroclus’ death strikes Achilles like a blow: he throws himself into the dust, and his cry summons Thetis from the depths of the sea. Now his resolve is fixed – he will kill Hector, even though it seals his own early death. Unarmed, he steps to the ditch; his battle cry alone, amplified by Athena, throws the Trojans into panic and saves the body.',
        'Thetis hurries to Hephaestus, who forges new weapons in his workshop – among them the famous shield on which the whole world is depicted.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'The Shield of Achilles',
        text: 'Hephaestus forges onto the shield an image of the entire cosmos: earth, sky, and sea, a city at peace with a wedding and a court scene, a city at war, plus plowing, harvest, herds, and dancing. This extended description is the oldest great example of ekphrasis – the literary depiction of a work of art – and has been imitated countless times.',
      },
      location: 'Greek camp / The forge of Hephaestus',
    },
    {
      id: 'gesang-19',
      books: 'Book 19',
      title: 'The Reconciliation',
      summary: [
        'Thetis delivers the new weapons. Before the assembled army, Achilles formally renounces his wrath; Agamemnon blames the delusion sent by Zeus and has the promised gifts, along with Briseis, brought forth. Briseis movingly laments the dead Patroclus, who was always kind to her.',
        'Achilles refuses all food until he has taken his revenge; Athena secretly strengthens him with divine nourishment. As he mounts his chariot, Hera briefly gives his horse Xanthus the power of speech: it prophesies his approaching death. Achilles rides into battle nonetheless.',
      ],
      sidenote: {
        title: 'Who Is Briseis?',
        text: 'Briseis comes from Lyrnessus, a city in the Troad that Achilles conquered; she lost her husband and brothers in its fall. Allotted to him as a prize of honor (geras), she is, in the war logic of the epic, both spoils and status symbol – the quarrel over her is a quarrel over honor. Her lament for Patroclus gives her, for a moment, a moving voice of her own.',
      },
      location: 'Greek camp',
    },
    {
      id: 'gesang-20',
      books: 'Book 20',
      title: 'Gods in Battle',
      summary: [
        'Zeus lifts his ban on fighting: the gods may now openly take sides, so that Achilles does not capture Troy before its time. Hera, Athena, Poseidon, Hermes, and Hephaestus join the Greeks; Apollo, Artemis, Ares, Aphrodite, and the river god Scamander side with the Trojans.',
        'Achilles hurls himself into the fray. Aeneas confronts him and would be lost, did Poseidon not spirit him away – for it is his destiny to carry on the Trojan line. Apollo likewise snatches Hector from the raging Achilles, who cuts a swath through the Trojan ranks.',
      ],
      location: 'Battlefield before Troy',
    },
    {
      id: 'gesang-21',
      books: 'Book 21',
      title: 'Battle with the River',
      summary: [
        'Achilles drives half the Trojans into the river Scamander and wreaks a bloodbath; twelve young men he takes alive, as an offering for Patroclus. The pleading Lycaon, a son of Priam, he kills without mercy. Then the river god himself rises up: outraged at the corpses in his waters, he hunts Achilles across the plain with mighty floods.',
        'Only Hephaestus saves the hero, setting the river boiling with fire. Meanwhile the gods fall into a grotesque brawl among themselves. The Trojans flee into the city; Apollo lures Achilles away from the gate with a trick.',
      ],
      location: 'The river Scamander / The plain before Troy',
    },
    {
      id: 'gesang-22',
      books: 'Book 22',
      title: 'The Death of Hector',
      summary: [
        'Hector alone remains before the Scaean Gate, despite the pleas of his parents. As Achilles storms toward him, his courage fails: three times the swifter man chases him around the city walls. Then Athena intervenes – in the guise of his brother Deiphobus she feigns support and lures Hector into making his stand.',
        'In the duel, Achilles drives his spear through the unprotected throat of his opponent, who wears Patroclus’ armor. He denies the dying man burial, pierces the dead man’s heels, and drags him behind his chariot to the camp. On the wall, Priam, Hecuba, and Andromache break into lamentation.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'Why Is the Dragging So Monstrous?',
        text: 'For the Greeks of the Homeric world, burial was a sacred duty: without funeral lament, cremation, and burial mound, the soul found no rest. To desecrate a corpse violated the order of gods and men alike. Achilles’ treatment of Hector’s body marks the outermost point of his revenge – from here, the Iliad leads back toward humanity.',
      },
      location: 'Before the walls of Troy',
    },
    {
      id: 'gesang-23',
      books: 'Book 23',
      title: 'Farewell to Patroclus',
      summary: [
        'At night the shade of Patroclus appears to Achilles and asks for a swift burial so that he may enter the realm of the dead. The next day the pyre is built: Achilles sacrifices horses, dogs, and the twelve captured Trojans, and dedicates a lock of his hair to his friend. The winds fan the flames, and the bones are gathered into a golden urn.',
        'Achilles then holds magnificent funeral games: chariot racing, boxing, wrestling, a footrace, archery, and more. As a judicious umpire who settles disputes and distributes prizes, he shows himself conciliatory and generous for the first time since his wrath began.',
      ],
      sidenote: {
        title: 'Funeral Games',
        text: 'Athletic contests in honor of the dead were a fixture of aristocratic Greek funerary custom: they celebrated the life and the glory of the deceased at once. The games for Patroclus are the oldest detailed account of sport in European literature – and a forerunner of the great Panhellenic contests such as the Olympic Games.',
      },
      location: 'Greek camp',
    },
    {
      id: 'gesang-24',
      books: 'Book 24',
      title: 'Priam Before Achilles',
      summary: [
        'Day after day Achilles drags Hector’s body around the tomb of Patroclus, yet Apollo preserves the dead man from all disfigurement. At last the gods decree an end: Thetis brings Achilles the command of Zeus to release the body, and Iris instructs Priam to bring ransom to the camp.',
        'Guided by Hermes, the old king reaches Achilles unseen by night, kneels down, and kisses the hands that killed his sons. Remembering his own father, Achilles weeps with him; the two men mourn together. He hands over the body and grants an eleven-day truce. The Iliad ends with the burial of Hector.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'Hiketeia – the Ritual of Supplication',
        text: 'Priam acts according to the ritual of hiketeia: the suppliant touches knees and hands – here, even the hands of his sons’ killer – and places himself under the protection of Zeus. Whoever rejects a suppliant sins against the father of the gods himself. That Achilles accepts the suppliant seals his return to humanity.',
      },
      location: 'Greek camp / Troy',
    },
  ],
};

export default iliadJourney;
