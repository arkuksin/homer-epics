import type { GlossaryContent } from '../types';

const glossary: GlossaryContent = {
  title: 'Glossar',
  intro:
    'Begriffe, Namen und Konzepte der homerischen Welt – kurz erklärt und durchsuchbar.',
  searchPlaceholder: 'Begriff suchen, z. B. „Xenia“ oder „Hexameter“ …',
  noResults: 'Kein Eintrag gefunden. Versuchen Sie einen anderen Suchbegriff.',
  categories: {
    all: 'Alle',
    person: 'Personen & Wesen',
    place: 'Orte',
    concept: 'Konzepte & Werte',
    literary: 'Dichtung & Überlieferung',
  },
  entries: [
    {
      term: 'Achaier',
      also: 'Danaer, Argeier',
      definition:
        'Homers Sammelnamen für die Griechen vor Troja – das Wort „Griechen“ (Hellenen) verwendet er noch nicht. „Achaier“ könnte an das hethitische „Ahhijawa“ anklingen, den Namen einer westlichen Macht in bronzezeitlichen Texten.',
      category: 'concept',
    },
    {
      term: 'Ägis',
      definition:
        'Schild- oder umhangartiges Schreckensattribut des Zeus und der Athene, oft mit dem Gorgonenhaupt besetzt. Wer die Ägis schüttelt, verbreitet Panik unter den Feinden. Sprichwörtlich lebt sie in der Wendung „unter jemandes Ägide“ fort.',
      category: 'concept',
    },
    {
      term: 'Aoide',
      also: 'Aöde, Sänger',
      definition:
        'Berufssänger, der Heldenlieder zur Leier vortrug – wie Demodokos bei den Phaiaken oder Phemios auf Ithaka. Die Aoiden improvisierten nach festen Formeln und Mustern; aus ihrer Kunst gingen Ilias und Odyssee hervor.',
      category: 'literary',
    },
    {
      term: 'Apologoi',
      definition:
        'Die große Ich-Erzählung des Odysseus am Hof der Phaiaken (Bücher 9–12), in der er seine Abenteuer von den Kikonen bis Kalypso berichtet. Kunstgriff der Rückblende: Der Held wird selbst zum Erzähler.',
      category: 'literary',
    },
    {
      term: 'Areté',
      definition:
        'Bestheit, Tüchtigkeit, Vortrefflichkeit – das Leitideal des homerischen Adels: im Kampf, im Rat, im Wettkampf jeweils der Beste zu sein. Nicht zu verwechseln mit der Phaiakenkönigin Arete.',
      category: 'concept',
    },
    {
      term: 'Aristie',
      definition:
        'Die große Glanzleistung eines einzelnen Helden in der Schlacht, in der er reihenweise Gegner überwindet – etwa die Aristie des Diomedes im 5. Gesang der Ilias. Festes Bauelement der epischen Erzählung.',
      category: 'literary',
    },
    {
      term: 'Bogenprobe',
      definition:
        'Penelopes Wettkampf: Wer Odysseus’ gewaltigen Bogen spannen und einen Pfeil durch die Ösen von zwölf Äxten schießen kann, soll sie zum Mann bekommen. Nur der als Bettler verkleidete Odysseus besteht die Probe – das Signal zum Freiermord.',
      category: 'concept',
    },
    {
      term: 'Chryseis',
      definition:
        'Tochter des Apollon-Priesters Chryses und Kriegsgefangene Agamemnons. Weil dieser ihre Rückgabe verweigert, schickt Apollon die Pest ins griechische Lager – der Auslöser der Streitkette, mit der die Ilias beginnt.',
      category: 'person',
    },
    {
      term: 'Briseis',
      definition:
        'Kriegsgefangene und Ehrengabe des Achilleus. Agamemnon nimmt sie ihm als Ersatz für Chryseis weg – die Kränkung, die Achilleus’ Zorn entfacht. Ihre Klage um den toten Patroklos gibt der Figur ein eigenes, menschliches Profil.',
      category: 'person',
    },
    {
      term: 'Hekabe',
      definition:
        'Königin von Troja, Gattin des Priamos und Mutter Hektors. Ihre Klagen um den Sohn – erst vergeblich von der Mauer herab, dann an der Bahre – gehören zu den erschütterndsten Frauenszenen der Ilias.',
      category: 'person',
    },
    {
      term: 'Hexameter',
      definition:
        'Das Versmaß der Epen: sechs Takte aus langen und kurzen Silben (daktylischer Hexameter), im Deutschen meist durch Betonungen nachgebildet. Sein gleichmäßiger Fluss trug den Sänger durch Tausende von Versen – und prägte die europäische Dichtung bis Klopstock und Goethe.',
      category: 'literary',
    },
    {
      term: 'Homerische Frage',
      definition:
        'Die seit dem 18. Jahrhundert geführte Forschungsdebatte über Entstehung und Verfasserschaft der Epen: Gab es einen Dichter Homer? Einen für beide Werke? Wie verhalten sich mündliche Tradition und schriftliche Fixierung? Trotz großer Fortschritte – etwa der Oral-Poetry-Forschung – ist die Frage bis heute offen.',
      category: 'literary',
    },
    {
      term: 'Ichor',
      definition:
        'Das „Blut“ der Götter – eine göttliche Flüssigkeit anstelle sterblichen Blutes. Als Diomedes Aphrodite verwundet, fließt Ichor: Selbst Götter sind bei Homer verletzlich, nur sterben können sie nicht.',
      category: 'concept',
    },
    {
      term: 'In medias res',
      definition:
        '„Mitten in die Dinge“: Der Einstieg in die Handlung nicht am chronologischen Anfang, sondern an einem dramatischen Punkt – die Ilias beginnt im zehnten Kriegsjahr, die Odyssee kurz vor dem Ende der Irrfahrt. Der Begriff stammt aus der Poetik des Horaz, das Verfahren von Homer.',
      category: 'literary',
    },
    {
      term: 'Kleos',
      definition:
        '„Ruhm, Kunde“ – der Nachruhm im Lied, die einzige Unsterblichkeit, die Sterblichen offensteht. Für kleos wählt Achilleus den frühen Tod. Das Epos selbst ist das Medium dieses Ruhms: Wer besungen wird, lebt weiter.',
      category: 'concept',
    },
    {
      term: 'Kimmerier',
      definition:
        'Sagenhaftes Volk am Rand der Welt, in ewigen Nebel und Dunkel gehüllt – in ihrem Land liegt der Eingang zur Unterwelt, den Odysseus aufsucht. Nicht zu verwechseln mit dem historischen Reitervolk gleichen Namens.',
      category: 'place',
    },
    {
      term: 'Kyklopen',
      also: 'Zyklopen',
      definition:
        'Einäugige Riesen, die ohne Gesetze, Versammlungen und Ackerbau leben – das dichterische Gegenbild zur menschlichen Zivilisation. Der bekannteste ist Polyphem, Sohn des Poseidon, den Odysseus blendet.',
      category: 'person',
    },
    {
      term: 'Lotophagen',
      also: 'Lotosesser',
      definition:
        'Friedliches Volk, dessen Lotosfrucht jeden, der sie kostet, Heimat und Heimkehr vergessen lässt. Die erste und leiseste Versuchung der Irrfahrt: nicht Gewalt, sondern das süße Vergessen des Ziels.',
      category: 'person',
    },
    {
      term: 'Mänis',
      also: 'Menis',
      definition:
        'Der grollende Zorn – das allererste Wort der Ilias („Den Zorn singe, Göttin …“). Anders als gewöhnliche Wut ist mēnis ein anhaltender, fast göttlicher Groll; sein Weg von der Kränkung bis zur Lösung im Mitgefühl strukturiert das ganze Epos.',
      category: 'concept',
    },
    {
      term: 'Mētis',
      definition:
        'Klugheit, Verschlagenheit, praktische Intelligenz – die Kardinaltugend des Odysseus. Sie zeigt sich in Plänen, Verkleidungen und Wortspielen wie dem berühmten „Niemand“. Auch Penelope und Athene verkörpern mētis.',
      category: 'concept',
    },
    {
      term: 'Moira',
      definition:
        'Das zugeteilte Los, das Schicksal, das selbst über den Göttern steht: Auch Zeus kann seinen Sohn Sarpedon nicht vor dem bestimmten Tod retten. Der Mensch beweist sich nicht im Entrinnen, sondern im Umgang mit dem Unausweichlichen.',
      category: 'concept',
    },
    {
      term: 'Moly',
      definition:
        'Zauberkraut mit schwarzer Wurzel und milchweißer Blüte, das Hermes dem Odysseus gibt – das Gegenmittel gegen Kirkes Verwandlungszauber. „Für Menschen schwer zu graben, doch Götter vermögen alles.“',
      category: 'concept',
    },
    {
      term: 'Nekyia',
      definition:
        'Die Totenbeschwörung des 11. Buches der Odyssee: Am Rand der Welt befragt Odysseus die Schatten – Teiresias, seine Mutter, Agamemnon, Achilleus. Urszene aller literarischen Unterweltsfahrten von Vergil bis Dante.',
      category: 'literary',
    },
    {
      term: 'Nostos',
      definition:
        '„Heimkehr“ – Leitmotiv der Odyssee und Name eines ganzen Sagenkreises über die Rückfahrten der Troja-Helden. Aus nostos und algos („Schmerz“) ist unser Wort „Nostalgie“ gebildet: der Schmerz der Sehnsucht nach Heimkehr.',
      category: 'concept',
    },
    {
      term: 'Oral Poetry',
      definition:
        'Mündliche Dichtkunst: Die Forschung von Milman Parry und Albert Lord zeigte an lebenden Sängertraditionen, wie Dichter mit Formeln, Schmuckwörtern und typischen Szenen lange Epen frei vortragen – und dass Ilias und Odyssee aus einer solchen Tradition stammen.',
      category: 'literary',
    },
    {
      term: 'Phaiaken',
      definition:
        'Märchenhaftes Seefahrervolk auf Scheria unter König Alkinoos. Ihre Schiffe finden den Weg von selbst. Als vorbildliche Gastgeber hören sie Odysseus’ Erzählung und bringen ihn reich beschenkt nach Ithaka – wofür Poseidon ihr Schiff versteinert.',
      category: 'person',
    },
    {
      term: 'Rhapsode',
      definition:
        'Berufsvortragender, der die homerischen Epen in klassischer Zeit rezitierte – mit dem Stab statt der Leier, aus dem Gedächtnis, im Wettkampf. An den Panathenäen in Athen wurden beide Epen vollständig vorgetragen.',
      category: 'literary',
    },
    {
      term: 'Skäisches Tor',
      definition:
        'Das Haupttor Trojas, Schauplatz zentraler Szenen: Hier verabschiedet sich Hektor von Andromache, hier fällt er schließlich – und hier wird nach der Sage später auch Achilleus vom Pfeil getroffen.',
      category: 'place',
    },
    {
      term: 'Telemachie',
      definition:
        'Die ersten vier Bücher der Odyssee, die von Telemachos’ Reise zu Nestor und Menelaos erzählen. Eine Erzählung vom Erwachsenwerden – und ein kunstvoller Auftakt, der den abwesenden Helden durch die Erinnerungen anderer einführt.',
      category: 'literary',
    },
    {
      term: 'Timē',
      definition:
        '„Ehre, Wertschätzung“ – im homerischen Adel messbar in Rang, Ehrengaben und Beuteanteilen. Die Wegnahme der Briseis verletzt Achilleus’ timē: kein Liebesdrama, sondern ein Angriff auf seinen gesellschaftlichen Wert.',
      category: 'concept',
    },
    {
      term: 'Troja',
      also: 'Ilios, Ilion',
      definition:
        'Die belagerte Stadt der Ilias, nach der das Epos benannt ist („Ilias“ = Dichtung über Ilios). Seit Schliemanns Grabungen mit dem Ruinenhügel Hisarlik in der Türkei identifiziert; die Gleichsetzung der Sage mit einem historischen Krieg bleibt umstritten.',
      category: 'place',
    },
    {
      term: 'Weblist',
      definition:
        'Penelopes berühmte Verzögerungstaktik: Sie verspricht, nach Vollendung des Leichentuchs für Laertes einen Freier zu wählen – und trennt drei Jahre lang nachts wieder auf, was sie tags gewebt hat, bis eine Magd sie verrät.',
      category: 'concept',
    },
    {
      term: 'Xenia',
      definition:
        'Das heilige Gastrecht: Fremde aufzunehmen, zu bewirten und zu beschenken, bevor man nach ihrem Namen fragt. Zeus selbst wacht als „Zeus Xenios“ darüber. Die Odyssee misst fast jede Begegnung an dieser Norm – von den Phaiaken bis zu den Freiern.',
      category: 'concept',
    },
    {
      term: 'Zwölf Äxte',
      definition:
        'Bei der Bogenprobe schießt Odysseus einen Pfeil durch die Ösen von zwölf hintereinander aufgestellten Äxten – vermutlich durch die Ringe der Stielösen. Das Kunststück beweist: Nur der wahre Herr des Bogens ist zurückgekehrt.',
      category: 'concept',
    },
  ],
};

export default glossary;
