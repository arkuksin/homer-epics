import type { CharactersContent } from '../types';

const characters: CharactersContent = {
  title: 'Figuren',
  intro: [
    'Helden, Königinnen, Götter: Die homerischen Epen entfalten ein dichtes Netz aus Verwandtschaft, Bündnis und Feindschaft. Diese Übersicht stellt die wichtigsten Figuren beider Werke vor – filterbar nach Zugehörigkeit und Werk.',
    'Die Beziehungskarte darunter zeigt, wie die zentralen Figuren miteinander verbunden sind: durch Familie, Loyalität oder tödlichen Konflikt.',
  ],
  filterLabel: 'Filtern nach',
  filters: {
    all: 'Alle',
    greek: 'Griechen',
    trojan: 'Trojaner',
    god: 'Götter',
    ithaca: 'Ithaka',
    other: 'Andere',
  },
  workFilters: {
    all: 'Beide Werke',
    iliad: 'Ilias',
    odyssey: 'Odyssee',
  },
  relationsTitle: 'Beziehungskarte',
  relationsIntro:
    'Familie, Bündnis, Feindschaft: Die wichtigsten Verbindungen zwischen den zentralen Figuren beider Epen auf einen Blick.',
  relationsHint:
    'Figur antippen oder anklicken, um ihre Verbindungen hervorzuheben.',
  characters: [
    {
      id: 'achilleus',
      name: 'Achilleus',
      epithet: 'der Fußschnelle',
      role: 'Größter Krieger der Griechen, Sohn der Meergöttin Thetis',
      affiliation: 'greek',
      works: ['iliad'],
      description:
        'Der beste Kämpfer vor Troja und die tragische Hauptfigur der Ilias. Er weiß, dass ihn vor Troja ein früher Tod erwartet, und wählt dennoch den Ruhm. Sein Zorn über die Kränkung durch Agamemnon und seine Trauer um Patroklos treiben die gesamte Handlung – bis er im Mitgefühl mit Priamos zu seiner Menschlichkeit zurückfindet.',
      relations: [
        { to: 'patroklos', label: 'engster Freund von' },
        { to: 'agamemnon', label: 'im Streit mit' },
        { to: 'hektor', label: 'tötet' },
        { to: 'priamos', label: 'gibt Hektors Leichnam an' },
      ],
      portrait: 'portrait-achilles',
    },
    {
      id: 'hektor',
      name: 'Hektor',
      epithet: 'der Rossebändiger',
      role: 'Kronprinz und bester Verteidiger Trojas',
      affiliation: 'trojan',
      works: ['iliad'],
      description:
        'Der älteste Sohn des Priamos trägt die ganze Last der Verteidigung Trojas. Anders als Achilleus kämpft er nicht für den Ruhm, sondern für Stadt und Familie – die Abschiedsszene mit Andromache und dem kleinen Astyanax gehört zu den berührendsten der Weltliteratur. Sein Tod durch Achilleus besiegelt das Schicksal Trojas.',
      relations: [
        { to: 'priamos', label: 'Sohn von' },
        { to: 'andromache', label: 'Ehemann von' },
        { to: 'paris', label: 'Bruder von' },
        { to: 'patroklos', label: 'tötet' },
      ],
      portrait: 'portrait-hector',
    },
    {
      id: 'agamemnon',
      name: 'Agamemnon',
      epithet: 'Herr der Männer',
      role: 'König von Mykene, Oberbefehlshaber der Griechen',
      affiliation: 'greek',
      works: ['iliad', 'odyssey'],
      description:
        'Der mächtigste der griechischen Fürsten führt das Heer vor Troja – und stürzt es durch seine Selbstherrlichkeit in die Krise, als er Achilleus dessen Ehrengabe nimmt. In der Odyssee begegnet sein Schatten Odysseus in der Unterwelt: Bei der Heimkehr wurde er von seiner Frau Klytaimnestra und ihrem Geliebten ermordet – das dunkle Gegenbild zur Heimkehr des Odysseus.',
      relations: [
        { to: 'menelaos', label: 'Bruder von' },
        { to: 'achilleus', label: 'im Streit mit' },
      ],
    },
    {
      id: 'priamos',
      name: 'Priamos',
      role: 'Greiser König von Troja',
      affiliation: 'trojan',
      works: ['iliad'],
      description:
        'Der alte Herrscher Trojas verliert im Krieg viele seiner Söhne, allen voran Hektor. Seine nächtliche Fahrt ins Feindeslager, wo er vor Achilleus kniet und um den Leichnam seines Sohnes bittet, ist der menschliche Höhepunkt der Ilias: Der Vater des Getöteten und der Töter erkennen einander im Leid.',
      relations: [
        { to: 'hektor', label: 'Vater von' },
        { to: 'paris', label: 'Vater von' },
        { to: 'achilleus', label: 'bittet um Hektors Leichnam' },
      ],
    },
    {
      id: 'patroklos',
      name: 'Patroklos',
      role: 'Engster Freund und Waffengefährte des Achilleus',
      affiliation: 'greek',
      works: ['iliad'],
      description:
        'Der sanfteste unter den Helden der Ilias. Als die Griechen ohne Achilleus zu unterliegen drohen, zieht er in dessen Rüstung in die Schlacht und rettet das Lager – überschreitet aber die vereinbarte Grenze und fällt durch Hektor. Sein Tod verwandelt den Groll des Achilleus in rasende Trauer und leitet die Katastrophe ein.',
      relations: [
        { to: 'achilleus', label: 'engster Freund von' },
        { to: 'hektor', label: 'getötet von' },
      ],
    },
    {
      id: 'helena',
      name: 'Helena',
      epithet: 'die Schönste der Frauen',
      role: 'Anlass des Krieges, Gattin des Menelaos',
      affiliation: 'greek',
      works: ['iliad', 'odyssey'],
      description:
        'Ihre Entführung durch Paris – oder ihre Flucht mit ihm, die Sage kennt beide Deutungen – löste den Trojanischen Krieg aus. Die Ilias zeigt sie zwiegespalten: voller Selbstvorwürfe, von den Trojanern respektiert, von Aphrodite manipuliert. In der Odyssee lebt sie wieder als Königin an Menelaos’ Seite in Sparta und empfängt Telemachos.',
      relations: [
        { to: 'menelaos', label: 'Ehefrau von' },
        { to: 'paris', label: 'entführt von' },
        { to: 'aphrodite', label: 'Schützling von' },
      ],
    },
    {
      id: 'paris',
      name: 'Paris',
      epithet: 'auch Alexandros genannt',
      role: 'Trojanischer Prinz, Urheber des Krieges',
      affiliation: 'trojan',
      works: ['iliad'],
      description:
        'Sein Urteil im Schönheitsstreit der Göttinnen und die Entführung Helenas brachten den Krieg über Troja. Im Epos ist er der Gegenentwurf zu seinem Bruder Hektor: schön, leichtlebig und im Kampf unzuverlässig – stark vor allem mit dem Bogen. Nach der Ilias, so erzählt die spätere Sage, tötet sein Pfeil mit Apollons Hilfe den Achilleus.',
      relations: [
        { to: 'helena', label: 'entführt' },
        { to: 'hektor', label: 'Bruder von' },
        { to: 'menelaos', label: 'Zweikampf mit' },
        { to: 'aphrodite', label: 'begünstigt von' },
      ],
    },
    {
      id: 'andromache',
      name: 'Andromache',
      role: 'Gattin Hektors',
      affiliation: 'trojan',
      works: ['iliad'],
      description:
        'Die Frau Hektors und Mutter des kleinen Astyanax verkörpert die Perspektive derer, die der Krieg zurücklässt. Achilleus hat bereits ihren Vater und ihre Brüder getötet; in der Abschiedsszene am Skäischen Tor fleht sie Hektor an, an sie zu denken. Ihre Totenklage um ihn gehört zu den eindringlichsten Passagen des Epos.',
      relations: [
        { to: 'hektor', label: 'Ehefrau von' },
      ],
    },
    {
      id: 'menelaos',
      name: 'Menelaos',
      role: 'König von Sparta, betrogener Ehemann Helenas',
      affiliation: 'greek',
      works: ['iliad', 'odyssey'],
      description:
        'Der Raub seiner Frau Helena ist der Kriegsgrund. In der Ilias stellt er sich Paris zum Zweikampf, den Aphrodite unterbricht, und kämpft tapfer um den Leichnam des Patroklos. In der Odyssee ist er längst heimgekehrt und empfängt Telemachos gastfreundlich in Sparta – wieder vereint mit Helena.',
      relations: [
        { to: 'helena', label: 'Ehemann von' },
        { to: 'agamemnon', label: 'Bruder von' },
        { to: 'paris', label: 'Zweikampf mit' },
      ],
    },
    {
      id: 'ajax',
      name: 'Ajax',
      epithet: 'der Telamonier, „der Große“',
      role: 'Zweitbester Kämpfer der Griechen',
      affiliation: 'greek',
      works: ['iliad'],
      description:
        'Ein Hüne mit turmhohem Schild, der stärkste Grieche nach Achilleus – und dessen Gegenbild: kein Läufer, kein Redner, sondern ein unerschütterlicher Verteidiger. Er trotzt Hektor im Zweikampf und hält fast allein die Schiffe. Sein späteres Schicksal – Wahnsinn und Selbstmord nach dem verlorenen Streit um Achilleus’ Waffen – erzählen andere Werke.',
      relations: [
        { to: 'hektor', label: 'Zweikampf mit' },
        { to: 'odysseus', label: 'Rivale von' },
      ],
    },
    {
      id: 'odysseus',
      name: 'Odysseus',
      epithet: 'der Listenreiche',
      role: 'König von Ithaka, Held der Odyssee',
      affiliation: 'ithaca',
      works: ['iliad', 'odyssey'],
      description:
        'In der Ilias der kluge Ratgeber und Redner der Griechen, in der Odyssee die Hauptfigur: Zehn Jahre kämpft er sich nach Troja über das Meer zurück nach Ithaka – gegen Ungeheuer, Götterzorn und Versuchungen, mit keiner Waffe stärker als seinem Verstand. Der erste Held der Literatur, der durch Intelligenz statt Kraft überlebt.',
      relations: [
        { to: 'penelope', label: 'Ehemann von' },
        { to: 'telemachos', label: 'Vater von' },
        { to: 'athene', label: 'Schützling von' },
        { to: 'poseidon', label: 'verfolgt von' },
        { to: 'polyphem', label: 'blendet' },
        { to: 'laertes', label: 'Sohn von' },
      ],
      portrait: 'portrait-odysseus',
    },
    {
      id: 'penelope',
      name: 'Penelope',
      epithet: 'die Kluge',
      role: 'Königin von Ithaka, Gattin des Odysseus',
      affiliation: 'ithaca',
      works: ['odyssey'],
      description:
        'Zwanzig Jahre wartet sie auf Odysseus und hält dabei über hundert Freier hin – am berühmtesten mit der Weblist: Nachts trennt sie wieder auf, was sie tagsüber am Leichentuch für Laertes gewebt hat. Ihre Vorsicht ist der des Odysseus ebenbürtig: Erst als er das Geheimnis des unverrückbaren Ehebetts kennt, erkennt sie ihn an.',
      relations: [
        { to: 'odysseus', label: 'Ehefrau von' },
        { to: 'telemachos', label: 'Mutter von' },
        { to: 'antinoos', label: 'umworben von' },
        { to: 'eurymachos', label: 'umworben von' },
      ],
      portrait: 'portrait-penelope',
    },
    {
      id: 'telemachos',
      name: 'Telemachos',
      role: 'Sohn des Odysseus und der Penelope',
      affiliation: 'ithaca',
      works: ['odyssey'],
      description:
        'Als Odysseus in den Krieg zog, war er ein Säugling; nun muss er als junger Mann hilflos zusehen, wie die Freier das Haus verzehren. Die ersten vier Bücher erzählen seine Reise zu Nestor und Menelaos – eine Suche nach dem Vater, auf der er selbst erwachsen wird. Beim Freiermord kämpft er an der Seite des Vaters.',
      relations: [
        { to: 'odysseus', label: 'Sohn von' },
        { to: 'penelope', label: 'Sohn von' },
        { to: 'athene', label: 'geführt von' },
      ],
    },
    {
      id: 'athene',
      name: 'Athene',
      epithet: 'die Helläugige',
      role: 'Göttin der Weisheit und des klugen Krieges',
      affiliation: 'god',
      works: ['iliad', 'odyssey'],
      description:
        'Auf griechischer Seite die wirkmächtigste Göttin beider Epen. In der Ilias kämpft sie erbittert gegen Troja und lenkt den tödlichen Speer gegen Hektor; in der Odyssee ist sie die unermüdliche Beschützerin des Odysseus und Mentorin des Telemachos. Im listenreichen Odysseus erkennt sie ihr eigenes Wesen wieder.',
      relations: [
        { to: 'odysseus', label: 'beschützt' },
        { to: 'telemachos', label: 'führt' },
        { to: 'zeus', label: 'Tochter von' },
        { to: 'hektor', label: 'täuscht' },
      ],
      portrait: 'portrait-athena',
    },
    {
      id: 'hera',
      name: 'Hera',
      role: 'Göttermutter, Gattin des Zeus',
      affiliation: 'god',
      works: ['iliad'],
      description:
        'Seit dem Urteil des Paris eine unversöhnliche Feindin Trojas. In der Ilias intrigiert sie unablässig für den griechischen Sieg – bis hin zur berühmten Täuschung des Zeus, den sie verführt und einschläfert, damit Poseidon den Griechen helfen kann. Ihre Härte zeigt, wie unerbittlich Götterzorn in der homerischen Welt wirkt.',
      relations: [
        { to: 'zeus', label: 'Ehefrau von' },
        { to: 'athene', label: 'verbündet mit' },
      ],
    },
    {
      id: 'apollon',
      name: 'Apollon',
      epithet: 'der Ferntreffer',
      role: 'Gott des Bogens, der Musik und der Weissagung',
      affiliation: 'god',
      works: ['iliad'],
      description:
        'Der mächtigste göttliche Verbündete Trojas. Sein Pfeilhagel – die Pest im griechischen Lager – eröffnet die Handlung der Ilias; später schlägt er Patroklos die Rüstung vom Leib und macht ihn wehrlos. Der späteren Sage nach lenkt er auch den Pfeil des Paris, der Achilleus tötet.',
      relations: [
        { to: 'hektor', label: 'unterstützt' },
        { to: 'patroklos', label: 'entwaffnet' },
        { to: 'zeus', label: 'Sohn von' },
      ],
    },
    {
      id: 'zeus',
      name: 'Zeus',
      epithet: 'der Wolkensammler',
      role: 'Höchster Gott, Wahrer der Ordnung',
      affiliation: 'god',
      works: ['iliad', 'odyssey'],
      description:
        'Der Göttervater steht über den Parteien – und ist doch tief verstrickt: In der Ilias erfüllt er Thetis’ Bitte und lässt die Griechen unterliegen, wägt Schicksale auf goldener Waage und muss den Tod seines eigenen Sohnes Sarpedon hinnehmen. In der Odyssee gibt er die Heimkehr frei und mahnt, die Menschen schüfen sich ihr Leid oft selbst.',
      relations: [
        { to: 'hera', label: 'Ehemann von' },
        { to: 'athene', label: 'Vater von' },
        { to: 'apollon', label: 'Vater von' },
        { to: 'poseidon', label: 'Bruder von' },
      ],
      portrait: 'portrait-zeus',
    },
    {
      id: 'aphrodite',
      name: 'Aphrodite',
      role: 'Göttin der Liebe und Schönheit',
      affiliation: 'god',
      works: ['iliad'],
      description:
        'Paris sprach ihr den Preis der Schönsten zu – dafür verschaffte sie ihm Helena und steht seither auf Seiten Trojas. Im Kampf ist sie schwach: Als sie ihren Sohn Aineias retten will, verwundet Diomedes sogar die Göttin. Ihre Macht liegt woanders – im Begehren, dem sich selbst Helena nicht entziehen kann.',
      relations: [
        { to: 'paris', label: 'begünstigt' },
        { to: 'helena', label: 'lenkt' },
      ],
    },
    {
      id: 'poseidon',
      name: 'Poseidon',
      epithet: 'der Erderschütterer',
      role: 'Gott des Meeres',
      affiliation: 'god',
      works: ['iliad', 'odyssey'],
      description:
        'In der Ilias hilft er zeitweise den Griechen; in der Odyssee ist er die verfolgende Macht: Weil Odysseus seinen Sohn Polyphem geblendet hat, verwehrt ihm der Meeresgott jahrelang die Heimkehr und zerschmettert zuletzt sein Floß. Da Odysseus’ Rückkehr vom Schicksal bestimmt ist, kann Poseidon sie nur verzögern – aber qualvoll verlängern.',
      relations: [
        { to: 'polyphem', label: 'Vater von' },
        { to: 'odysseus', label: 'verfolgt' },
        { to: 'zeus', label: 'Bruder von' },
      ],
    },
    {
      id: 'polyphem',
      name: 'Polyphem',
      role: 'Einäugiger Kyklop, Sohn Poseidons',
      affiliation: 'other',
      works: ['odyssey'],
      description:
        'Der riesenhafte Hirte verschlingt in seiner Höhle mehrere Gefährten des Odysseus – und wird zum Opfer der berühmtesten List des Epos: Odysseus macht ihn trunken, nennt sich „Niemand“ und blendet ihn mit einem glühenden Pfahl. Polyphems Fluch, gerichtet an seinen Vater Poseidon, verlängert die Irrfahrt um Jahre.',
      relations: [
        { to: 'poseidon', label: 'Sohn von' },
        { to: 'odysseus', label: 'geblendet von' },
      ],
    },
    {
      id: 'kirke',
      name: 'Kirke',
      role: 'Zauberin auf der Insel Aiaia',
      affiliation: 'other',
      works: ['odyssey'],
      description:
        'Die göttliche Zauberin verwandelt Odysseus’ Kundschafter in Schweine. Mit dem Götterkraut Moly gefeit, zwingt Odysseus sie, den Zauber zu lösen – und gewinnt in ihr eine Verbündete: Ein Jahr beherbergt sie die Gefährten, dann weist sie den Weg in die Unterwelt und warnt vor Sirenen, Skylla und den Rindern des Helios.',
      relations: [
        { to: 'odysseus', label: 'Geliebte und Ratgeberin von' },
      ],
    },
    {
      id: 'kalypso',
      name: 'Kalypso',
      epithet: 'die Verbergende',
      role: 'Nymphe auf der Insel Ogygia',
      affiliation: 'other',
      works: ['odyssey'],
      description:
        'Sieben Jahre hält die Nymphe den schiffbrüchigen Odysseus auf ihrer Insel fest und bietet ihm Unsterblichkeit an – vergeblich: Abend für Abend sitzt er am Strand und weint nach Ithaka. Erst auf Befehl des Zeus, überbracht durch Hermes, lässt sie ihn ziehen und hilft ihm beim Bau des Floßes.',
      relations: [
        { to: 'odysseus', label: 'hält fest' },
        { to: 'zeus', label: 'gehorcht' },
      ],
    },
    {
      id: 'nausikaa',
      name: 'Nausikaa',
      role: 'Königstochter der Phaiaken',
      affiliation: 'other',
      works: ['odyssey'],
      description:
        'Die junge Prinzessin findet den nackten, schiffbrüchigen Odysseus am Strand – und begegnet ihm mit einer Selbstverständlichkeit und Würde, die zu den schönsten Zügen des Epos gehört. Sie weist ihm den Weg zum Palast ihrer Eltern Alkinoos und Arete, von wo aus die Phaiaken ihn endlich nach Ithaka bringen.',
      relations: [
        { to: 'odysseus', label: 'rettet' },
      ],
    },
    {
      id: 'eumaios',
      name: 'Eumaios',
      epithet: 'der göttliche Sauhirt',
      role: 'Treuer Schweinehirt des Odysseus',
      affiliation: 'ithaca',
      works: ['odyssey'],
      description:
        'Der Inbegriff des treuen Dieners: Als Odysseus unerkannt als Bettler heimkehrt, nimmt der Hirte den Fremden nach allen Regeln der Gastfreundschaft auf – ohne zu ahnen, wen er bewirtet. Beim Freiermord kämpft er an der Seite seines Herrn. Der Erzähler spricht ihn als einzige Figur direkt an: „Da sagtest du, Eumaios …“',
      relations: [
        { to: 'odysseus', label: 'dient' },
        { to: 'telemachos', label: 'beschützt' },
      ],
    },
    {
      id: 'laertes',
      name: 'Laertes',
      role: 'Vater des Odysseus',
      affiliation: 'ithaca',
      works: ['odyssey'],
      description:
        'Der greise Altkönig hat sich vor Gram aufs Land zurückgezogen, wo er in ärmlicher Kleidung seinen Garten bestellt. Die Wiederbegegnung mit dem heimgekehrten Sohn im letzten Buch – Odysseus beweist sich mit der Erinnerung an die Bäume, die der Vater ihm als Kind schenkte – schließt den Kreis der Wiedererkennungen.',
      relations: [
        { to: 'odysseus', label: 'Vater von' },
      ],
    },
    {
      id: 'antinoos',
      name: 'Antinoos',
      role: 'Anführer der Freier',
      affiliation: 'other',
      works: ['odyssey'],
      description:
        'Der dreisteste und brutalste der Freier: Er betreibt den Mordplan gegen Telemachos, wirft im Palast einen Schemel nach dem vermeintlichen Bettler und führt die Runde an, die Odysseus’ Haus verprasst. Beim Freiermord trifft ihn der erste Pfeil – mitten beim Trinken aus dem goldenen Becher.',
      relations: [
        { to: 'penelope', label: 'umwirbt' },
        { to: 'telemachos', label: 'plant Mord an' },
        { to: 'odysseus', label: 'getötet von' },
      ],
    },
    {
      id: 'eurymachos',
      name: 'Eurymachos',
      role: 'Zweiter Anführer der Freier',
      affiliation: 'other',
      works: ['odyssey'],
      description:
        'Der glatteste der Freier: nach außen freundlich und beschwichtigend, hinter der Fassade ebenso rücksichtslos wie Antinoos. Nach dessen Tod versucht er, alle Schuld auf den Toten zu schieben und Odysseus mit Entschädigung zu besänftigen – vergeblich. Sein Doppelspiel verkörpert die Heuchelei der ganzen Freierschar.',
      relations: [
        { to: 'penelope', label: 'umwirbt' },
        { to: 'odysseus', label: 'getötet von' },
      ],
    },
  ],
};

export default characters;
