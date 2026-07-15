import type { JourneyContent } from '../types';

const iliadJourney: JourneyContent = {
  title: 'Werkreise durch die Ilias',
  intro: [
    'Die Ilias erzählt keine vollständige Geschichte des Trojanischen Krieges, sondern einen Ausschnitt von etwa 51 Tagen im zehnten Kriegsjahr. Ihr roter Faden ist der Zorn des Achilleus: Gekränkt von Agamemnon, zieht sich der beste Kämpfer der Griechen vom Kampf zurück – mit verheerenden Folgen für sein eigenes Heer, für seinen Freund Patroklos und schließlich für den Trojaner Hektor.',
    'Um diesen Kern spannt Homer ein gewaltiges Panorama: Schlachten und Zweikämpfe, Ratssitzungen der Götter, stille Familienszenen in Troja, Trauer und Versöhnung. Vom Streit im griechischen Lager bis zur Bestattung Hektors führt jeder der 24 Gesänge die Handlung ein Stück weiter – und vertieft zugleich die großen Themen des Epos: Ehre, Sterblichkeit und Menschlichkeit im Krieg.',
    'Diese Werkreise folgt der Ilias Gesang für Gesang. Jede Etappe fasst die Handlung eines Gesangs zusammen; die zentralen Wendepunkte sind eigens markiert, und aufklappbare Randnotizen liefern Hintergrund zu Figuren, Göttern und mythologischem Kontext.',
  ],
  stageLabel: 'Etappe',
  stages: [
    {
      id: 'gesang-1',
      books: 'Gesang 1',
      title: 'Der Zorn entbrennt',
      summary: [
        'Der Apollon-Priester Chryses kommt ins Lager der Griechen und bittet um die Freilassung seiner Tochter Chryseis, die Agamemnon als Beutefrau zugefallen ist. Der Heerführer weist ihn schroff ab, worauf Apollon eine Pest über das Heer schickt. Der Seher Kalchas nennt die Ursache: Chryseis muss zurückgegeben werden.',
        'Agamemnon willigt ein, nimmt sich aber als Ersatz Briseis, die Ehrengabe des Achilleus. Zutiefst gekränkt zieht sich dieser vom Kampf zurück. Seine Mutter, die Meergöttin Thetis, erwirkt bei Zeus die Zusage, dass die Griechen so lange unterliegen sollen, bis ihr Sohn seine Ehre zurückerhält.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'Warum zürnt Apollon?',
        text: 'Chryses ist Priester des Apollon – wer ihn kränkt, kränkt den Gott selbst. Apollon gilt als Gott, der mit seinen Pfeilen Krankheit senden, aber auch heilen kann. Die Pest im Lager ist darum kein Zufall, sondern göttliche Strafe: Sie zwingt die Griechen, das Unrecht an einem Schutzbefohlenen des Gottes wiedergutzumachen.',
      },
      location: 'Griechisches Lager / Olymp',
    },
    {
      id: 'gesang-2',
      books: 'Gesang 2',
      title: 'Traum und Heerschau',
      summary: [
        'Um sein Versprechen an Thetis einzulösen, schickt Zeus dem Agamemnon einen trügerischen Traum: Troja sei nun einnehmbar. Agamemnon will das Heer erst auf die Probe stellen und schlägt zum Schein die Heimfahrt vor – doch die kriegsmüden Männer stürmen begeistert zu den Schiffen. Erst Odysseus stellt mit Athenes Hilfe die Ordnung wieder her und bringt den Lästerer Thersites zum Schweigen.',
        'Das Heer rüstet sich zur Schlacht. Ein ausführlicher Katalog zählt die griechischen Schiffe und Kontingente auf, ein zweiter die Verbündeten Trojas.',
      ],
      sidenote: {
        title: 'Der Schiffskatalog',
        text: 'Die lange Aufzählung von 29 griechischen Kontingenten mit rund 1.186 Schiffen wirkt heute sperrig, war für das antike Publikum aber ein Höhepunkt: Viele Landschaften Griechenlands konnten sich darin wiederfinden. Die Forschung nutzt den Katalog zudem als Quelle für die politische Geographie des frühen Griechenland.',
      },
      location: 'Griechisches Lager',
    },
    {
      id: 'gesang-3',
      books: 'Gesang 3',
      title: 'Zweikampf um Helena',
      summary: [
        'Als die Heere aufeinandertreffen, fordert Paris großspurig die Besten der Griechen heraus – und weicht erschrocken zurück, als Menelaos ihm entgegentritt. Von Hektor beschämt, willigt Paris in einen Zweikampf ein: Der Sieger soll Helena und ihre Schätze erhalten, der Krieg wäre beendet. Auf der Stadtmauer zeigt Helena dem alten König Priamos die griechischen Anführer.',
        'Menelaos ist im Kampf klar überlegen, doch bevor er Paris töten kann, entrückt Aphrodite ihren Schützling in einer Wolke nach Troja. Der Krieg bleibt unentschieden.',
      ],
      location: 'Schlachtfeld vor Troja / Troja',
    },
    {
      id: 'gesang-4',
      books: 'Gesang 4',
      title: 'Der gebrochene Eid',
      summary: [
        'Auf dem Olymp beraten die Götter über den Ausgang des Zweikampfs. Zeus erwägt, den Krieg zu beenden, doch Hera besteht auf Trojas Untergang. Athene steigt hinab und verleitet den trojanischen Bogenschützen Pandaros zu einem heimtückischen Schuss auf Menelaos. Der Pfeil verwundet ihn nur leicht – aber der Waffenstillstand ist gebrochen, und die Schuld liegt nun bei den Trojanern.',
        'Agamemnon schreitet die Reihen ab, spornt die Anführer an und tadelt die Zögernden. Dann prallen die Heere aufeinander, und das große Sterben beginnt.',
      ],
      location: 'Olymp / Schlachtfeld vor Troja',
    },
    {
      id: 'gesang-5',
      books: 'Gesang 5',
      title: 'Diomedes’ großer Tag',
      summary: [
        'Athene erfüllt den jungen Diomedes mit übermenschlicher Kampfkraft. Er wütet unter den Trojanern, tötet Pandaros und verwundet Aineias schwer. Als Aphrodite ihren Sohn Aineias retten will, verletzt Diomedes sogar die Göttin an der Hand – Apollon muss den Trojaner in Sicherheit bringen.',
        'Nun greift der Kriegsgott Ares auf trojanischer Seite ein und wendet das Blatt. Doch mit Heras und Athenes Erlaubnis stellt sich Diomedes auch ihm: Sein Speer, von Athene gelenkt, trifft den Gott, der brüllend zum Olymp entweicht. Kein anderer Sterblicher der Ilias wagt sich so weit.',
      ],
      sidenote: {
        title: 'Was ist eine Aristie?',
        text: 'Als Aristie (von griechisch aristos, „der Beste") bezeichnet man die große Glanzszene eines Helden: eine Kampffolge, in der er alle überstrahlt und Gegner um Gegner bezwingt. Die Ilias reiht mehrere solcher Aristien aneinander – von Diomedes über Agamemnon und Patroklos bis zu Achilleus selbst. Sie strukturieren die Schlachtschilderungen und verteilen den Ruhm.',
      },
      location: 'Schlachtfeld vor Troja',
    },
    {
      id: 'gesang-6',
      books: 'Gesang 6',
      title: 'Hektor und Andromache',
      summary: [
        'Während die Schlacht tobt, begegnen sich Diomedes und der Lykier Glaukos – und erkennen, dass ihre Familien durch alte Gastfreundschaft verbunden sind. Statt zu kämpfen, tauschen sie die Rüstungen.',
        'Hektor geht in die Stadt, um ein Bittopfer der trojanischen Frauen an Athene zu veranlassen, das die Göttin jedoch verweigert. Am Skäischen Tor trifft er Andromache mit dem kleinen Sohn Astyanax. Sie fleht ihn an, die Stadt nicht wieder zu verlassen; er antwortet, dass ihn Pflicht und Ehre binden – im Wissen, dass Troja fallen wird. Das Kind erschrickt vor dem Helmbusch des Vaters, und für einen Moment lachen beide Eltern.',
      ],
      sidenote: {
        title: 'Eine Familienszene im Krieg',
        text: 'Der Abschied Hektors von Andromache und Astyanax gehört zu den berühmtesten Szenen der Weltliteratur. Mitten im Kriegsepos zeigt Homer, was auf dem Spiel steht: nicht nur Ruhm, sondern eine Familie, eine Stadt, eine Zukunft. Hektor erscheint hier nicht als Feind der Griechen, sondern als Ehemann und Vater – die Ilias nimmt auch die trojanische Seite ernst.',
      },
      location: 'Troja',
    },
    {
      id: 'gesang-7',
      books: 'Gesang 7',
      title: 'Hektor gegen Ajax',
      summary: [
        'Auf Anregung der Götter fordert Hektor den tapfersten Griechen zum Zweikampf. Das Los fällt auf den riesenhaften Ajax. Die beiden kämpfen verbissen bis zum Einbruch der Nacht, ohne dass einer siegt; Herolde trennen sie, und sie tauschen zum Zeichen gegenseitigen Respekts Geschenke – Hektor gibt sein Schwert, Ajax seinen Gürtel.',
        'Beide Seiten vereinbaren eine Waffenruhe, um die Gefallenen zu bestatten. Die Griechen nutzen die Pause und errichten auf Nestors Rat eine Mauer mit Graben um ihr Schiffslager – ein Bauwerk, das bald hart umkämpft sein wird.',
      ],
      location: 'Schlachtfeld vor Troja / Griechisches Lager',
    },
    {
      id: 'gesang-8',
      books: 'Gesang 8',
      title: 'Zeus greift durch',
      summary: [
        'Zeus verbietet allen Göttern bei schweren Strafen, in den Kampf einzugreifen – nun soll sich sein Versprechen an Thetis erfüllen. Vom Berg Ida aus lenkt er die Schlacht und wiegt die Todeslose beider Heere auf goldener Waage: Sie senkt sich gegen die Griechen.',
        'Unter Hektors Führung drängen die Trojaner die Griechen bis an den Graben ihres Lagers zurück. Hera und Athene wollen helfen, werden aber von Zeus zurückgepfiffen. Zum ersten Mal übernachtet das trojanische Heer siegesgewiss auf freiem Feld; unzählige Wachfeuer leuchten in der Ebene.',
      ],
      sidenote: {
        title: 'Die Parteien der Götter',
        text: 'Die Götter der Ilias sind alles andere als neutral: Hera, Athene und Poseidon stehen auf Seiten der Griechen, Apollon, Aphrodite und Ares unterstützen Troja. Der Zorn von Hera und Athene geht auf das Urteil des Paris zurück, der Aphrodite zur schönsten Göttin kürte. Zeus steht über den Parteien – und hält doch das Schicksal beider Seiten in der Hand.',
      },
      location: 'Olymp / Schlachtfeld vor Troja',
    },
    {
      id: 'gesang-9',
      books: 'Gesang 9',
      title: 'Die vergebliche Gesandtschaft',
      summary: [
        'Die Not der Griechen ist so groß, dass Agamemnon einlenkt: Er bietet Achilleus reiche Geschenke, die Rückgabe der Briseis und sogar eine seiner Töchter zur Ehe an. Odysseus, der alte Erzieher Phoinix und Ajax überbringen das Angebot.',
        'Doch Achilleus bleibt hart. Keine Gabe könne die erlittene Kränkung aufwiegen; er stellt sogar die Heimfahrt in Aussicht und spricht offen über die Wahl zwischen langem Leben und unsterblichem Ruhm. Auch Phoinix’ mahnende Erzählung vom Zorn des Meleagros und Ajax’ knappe Soldatenworte ändern nichts. Die Gesandtschaft kehrt unverrichteter Dinge zurück.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'Phoinix und die Bittgöttinnen',
        text: 'Phoinix, der Achilleus einst aufzog, mahnt mit einem Gleichnis: Die Litai, personifizierte Bitten, folgen der Verblendung und heilen, was sie anrichtet – wer sie abweist, verfällt selbst der Verblendung. Seine Beispielerzählung vom Helden Meleagros, der zu lange zürnte und am Ende leer ausging, ist eine unüberhörbare Warnung an Achilleus.',
      },
      location: 'Griechisches Lager',
    },
    {
      id: 'gesang-10',
      books: 'Gesang 10',
      title: 'Spähtrupp in der Nacht',
      summary: [
        'In der schlaflosen Nacht beschließen die griechischen Anführer, Kundschafter auszusenden. Diomedes und Odysseus schleichen sich ins Dunkel – und fangen den trojanischen Späher Dolon ab, der im Gegenzug für Achilleus’ Pferde das griechische Lager auskundschaften sollte. Sie pressen ihm alle Informationen ab und töten ihn trotz seines Flehens.',
        'Mit Dolons Wissen überfallen die beiden das Lager der eben eingetroffenen Thraker: Diomedes tötet deren König Rhesos und zwölf seiner Männer im Schlaf, Odysseus raubt die prächtigen Pferde. Unversehrt kehren sie zurück.',
      ],
      sidenote: {
        title: 'Die umstrittene Dolonie',
        text: 'Der zehnte Gesang, nach dem Späher Dolon „Dolonie" genannt, steht seit der Antike unter Verdacht: Er lässt sich aus der Handlung herauslösen, ohne dass etwas fehlt, und weicht in Sprache und Moral vom Rest des Epos ab. Viele Forscher halten ihn für eine spätere Hinzufügung – bewiesen ist das freilich nicht.',
      },
      location: 'Nächtliches Schlachtfeld',
    },
    {
      id: 'gesang-11',
      books: 'Gesang 11',
      title: 'Der Tag der Wunden',
      summary: [
        'Agamemnon hat seine große Kampfstunde und treibt die Trojaner weit zurück – bis ihn eine Speerwunde vom Feld zwingt. Nun wendet sich das Blatt: Nacheinander werden auch Diomedes, Odysseus und der Arzt Machaon verwundet. Die wichtigsten griechischen Kämpfer fallen aus, Hektor drängt unaufhaltsam nach.',
        'Achilleus beobachtet das Geschehen von seinem Schiff aus und schickt Patroklos zu Nestor, um Neuigkeiten einzuholen. Der alte König nutzt die Gelegenheit für einen folgenreichen Vorschlag: Wenn Achilleus selbst nicht kämpfen wolle, solle wenigstens Patroklos in dessen Rüstung die Griechen retten.',
      ],
      location: 'Schlachtfeld vor Troja / Griechisches Lager',
    },
    {
      id: 'gesang-12',
      books: 'Gesang 12',
      title: 'Sturm auf die Mauer',
      summary: [
        'Die Trojaner erreichen den Graben der Griechen. Auf den Rat des Sehers Polydamas lassen sie die Wagen zurück und greifen die Lagermauer zu Fuß in fünf Abteilungen an. Ein unheilvolles Vogelzeichen – ein Adler, der eine Schlange fallen lässt – schlägt Hektor in den Wind: Ein einziges Vogelzeichen zähle, das Vaterland zu verteidigen.',
        'Der Lykierfürst Sarpedon reißt eine Brustwehr ein, Ajax und Teukros halten dagegen. Schließlich sprengt Hektor mit einem gewaltigen Steinwurf das Tor. Die Trojaner fluten in das Lager, die Griechen fliehen zu den Schiffen.',
      ],
      location: 'Lagermauer der Griechen',
    },
    {
      id: 'gesang-13',
      books: 'Gesang 13',
      title: 'Poseidon greift ein',
      summary: [
        'Zeus wendet den Blick vom Schlachtfeld ab – das nutzt sein Bruder Poseidon. Heimlich, in Gestalt sterblicher Männer, durchstreift der Meergott die Reihen der Griechen und flößt ihnen neuen Kampfesmut ein.',
        'Vor allem der Kreterkönig Idomeneus tut sich hervor und tötet zahlreiche Trojaner. Um die Schiffe entbrennt ein erbittertes, wogendes Ringen: Die Griechen halten dank Poseidons verbotener Hilfe stand, obwohl Hektor immer wieder anstürmt. Polydamas rät den Trojanern, die Kräfte zu sammeln – doch Hektor drängt weiter vorwärts, und die Schlacht steht auf der Kippe.',
      ],
      location: 'Schiffslager der Griechen',
    },
    {
      id: 'gesang-14',
      books: 'Gesang 14',
      title: 'Heras List',
      summary: [
        'Hera will den Griechen helfen und schmiedet einen kühnen Plan: Sie leiht sich den Liebreiz weckenden Gürtel der Aphrodite, gewinnt den Gott des Schlafes als Verbündeten und verführt Zeus auf dem Berg Ida. Während der Göttervater in tiefen Schlaf sinkt, kann Poseidon offen eingreifen.',
        'Die Griechen fassen neuen Mut. Ajax streckt Hektor mit einem gewaltigen Steinwurf nieder; der trojanische Held wird bewusstlos vom Feld getragen. Ohne ihren Anführer geraten die Trojaner ins Wanken und werden über den Graben zurückgeworfen.',
      ],
      sidenote: {
        title: 'Die Täuschung des Zeus',
        text: 'Die Verführungsszene, in der Forschung „Dios apate" (Täuschung des Zeus) genannt, zeigt die Götter von ihrer allzu menschlichen Seite: Eitelkeit, Begierde und Ehestreit auf dem Olymp. Zugleich ist sie fein gebaute Komik mitten im Kriegsepos – und ein Beleg dafür, dass selbst der mächtigste Gott überlistet werden kann, wenn auch nur für kurze Zeit.',
      },
      location: 'Berg Ida / Schiffslager der Griechen',
    },
    {
      id: 'gesang-15',
      books: 'Gesang 15',
      title: 'Zeus erwacht',
      summary: [
        'Zeus erwacht, sieht die fliehenden Trojaner und durchschaut Heras List sofort. Zornig stellt er die Ordnung wieder her: Poseidon muss die Schlacht verlassen, Apollon erhält den Auftrag, Hektor neue Kraft einzuflößen. Zeus enthüllt zudem seinen Plan – die Trojaner sollen siegen, bis Achilleus zurückkehrt; danach werde Troja fallen.',
        'Mit Apollon an der Spitze, der den Graben einebnet und die Mauer niederreißt, stürmen die Trojaner erneut gegen die Schiffe. Ajax verteidigt sie fast allein mit einer langen Schiffsstange, doch Hektor fordert bereits Feuer, um die Flotte zu verbrennen.',
      ],
      location: 'Berg Ida / Schiffslager der Griechen',
    },
    {
      id: 'gesang-16',
      books: 'Gesang 16',
      title: 'Patroklos fällt',
      summary: [
        'Als das erste Schiff brennt, fleht Patroklos den Freund unter Tränen an. Achilleus gibt nach: Patroklos darf in seiner Rüstung kämpfen – aber nur, um die Schiffe zu retten, nicht bis vor Troja. Der Anblick der vermeintlichen Achilleus-Rüstung genügt, die Trojaner fliehen. Patroklos tötet viele, darunter Sarpedon, den Sohn des Zeus.',
        'Vom Erfolg berauscht, missachtet er die Warnung und stürmt gegen die Stadtmauer. Dort tritt ihm Apollon selbst entgegen, schlägt ihm Rüstung und Waffen vom Leib; Euphorbos verwundet ihn, und Hektor gibt dem Wehrlosen den Todesstoß. Sterbend prophezeit Patroklos Hektors nahes Ende.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'Sarpedon, Sohn des Zeus',
        text: 'Der Lykierkönig Sarpedon ist ein Sohn des Zeus – und selbst der Göttervater kann ihn nicht retten, ohne die Weltordnung zu erschüttern. Auf Heras Mahnung lässt Zeus den Sohn fallen und weint blutige Tropfen. Schlaf und Tod tragen den Leichnam in die Heimat Lykien: eines der eindrücklichsten Bilder der Ilias für die Grenzen göttlicher Macht.',
      },
      location: 'Schiffslager der Griechen / Schlachtfeld vor Troja',
    },
    {
      id: 'gesang-17',
      books: 'Gesang 17',
      title: 'Kampf um den Toten',
      summary: [
        'Um den Leichnam des Patroklos entbrennt ein verbissener Kampf. Menelaos tötet Euphorbos, muss aber vor Hektor zurückweichen, der dem Toten die Rüstung des Achilleus abnimmt und sie selbst anlegt. Die beiden Ajax, Menelaos und viele andere stemmen sich stundenlang gegen die andrängenden Trojaner.',
        'Abseits des Getümmels stehen die unsterblichen Pferde des Achilleus reglos und weinen um Patroklos. Schließlich gelingt es Menelaos und Meriones, den Leichnam aufzuheben und zu den Schiffen zu tragen, während die beiden Ajax den Rückzug decken. Antilochos eilt voraus, um Achilleus die Todesnachricht zu bringen.',
      ],
      location: 'Schlachtfeld vor Troja',
    },
    {
      id: 'gesang-18',
      books: 'Gesang 18',
      title: 'Trauer und neuer Schild',
      summary: [
        'Die Nachricht von Patroklos’ Tod trifft Achilleus wie ein Schlag: Er wirft sich in den Staub, sein Schrei ruft Thetis aus der Meerestiefe herbei. Nun ist sein Entschluss gefasst – er wird Hektor töten, auch wenn ihm damit der eigene frühe Tod bestimmt ist. Unbewaffnet tritt er an den Graben; sein bloßer Kampfruf, von Athene verstärkt, schlägt die Trojaner in Panik und rettet den Leichnam.',
        'Thetis eilt zu Hephaistos, der in seiner Werkstatt neue Waffen schmiedet – darunter den berühmten Schild, auf dem die ganze Welt abgebildet ist.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'Der Schild des Achilleus',
        text: 'Hephaistos schmiedet auf den Schild ein Bild des ganzen Kosmos: Erde, Himmel und Meer, eine Stadt im Frieden mit Hochzeit und Gerichtsszene, eine Stadt im Krieg, dazu Ackerbau, Ernte, Herden und Reigentanz. Diese ausführliche Beschreibung ist das älteste große Beispiel einer Ekphrasis – der literarischen Schilderung eines Kunstwerks – und wurde unzählige Male nachgeahmt.',
      },
      location: 'Griechisches Lager / Werkstatt des Hephaistos',
    },
    {
      id: 'gesang-19',
      books: 'Gesang 19',
      title: 'Die Aussöhnung',
      summary: [
        'Thetis überbringt die neuen Waffen. Vor versammeltem Heer sagt sich Achilleus förmlich von seinem Zorn los; Agamemnon schiebt die Schuld auf die von Zeus gesandte Verblendung und lässt die versprochenen Geschenke sowie Briseis herbeibringen. Briseis klagt ergreifend um den toten Patroklos, der stets gut zu ihr war.',
        'Achilleus verweigert jede Speise, bis er gerächt hat; Athene stärkt ihn heimlich mit Götternahrung. Als er den Streitwagen besteigt, verleiht Hera seinem Pferd Xanthos für einen Moment die Stimme: Es prophezeit ihm den nahen Tod. Achilleus fährt dennoch in die Schlacht.',
      ],
      sidenote: {
        title: 'Wer ist Briseis?',
        text: 'Briseis stammt aus Lyrnessos, einer Stadt in der Troas, die Achilleus eroberte; dabei verlor sie Mann und Brüder. Als Ehrengabe (geras) zugeteilt, ist sie in der Kriegslogik des Epos zugleich Kriegsbeute und Statussymbol – der Streit um sie ist ein Streit um Ehre. Ihre Totenklage um Patroklos gibt ihr für einen Moment eine eigene, bewegende Stimme.',
      },
      location: 'Griechisches Lager',
    },
    {
      id: 'gesang-20',
      books: 'Gesang 20',
      title: 'Götter in der Schlacht',
      summary: [
        'Zeus hebt sein Kampfverbot auf: Die Götter dürfen nun offen Partei ergreifen, damit Achilleus Troja nicht vorzeitig erobert. Hera, Athene, Poseidon, Hermes und Hephaistos treten auf die Seite der Griechen, Apollon, Artemis, Ares, Aphrodite und der Flussgott Skamandros auf die der Trojaner.',
        'Achilleus stürzt sich in den Kampf. Aineias stellt sich ihm und wäre verloren, würde ihn Poseidon nicht entrücken – denn ihm ist bestimmt, das trojanische Geschlecht weiterzuführen. Auch Hektor entzieht Apollon dem Rasenden. Achilleus mäht eine Schneise durch die trojanischen Reihen.',
      ],
      location: 'Schlachtfeld vor Troja',
    },
    {
      id: 'gesang-21',
      books: 'Gesang 21',
      title: 'Kampf mit dem Fluss',
      summary: [
        'Achilleus treibt die Hälfte der Trojaner in den Fluss Skamandros und richtet ein Blutbad an; zwölf Jünglinge nimmt er lebend gefangen, als Opfer für Patroklos. Den flehenden Priamos-Sohn Lykaon tötet er ohne Gnade. Da erhebt sich der Flussgott selbst: Empört über die Leichen in seinem Wasser, jagt er Achilleus mit gewaltigen Fluten über die Ebene.',
        'Erst Hephaistos rettet den Helden, indem er den Fluss mit Feuer zum Kochen bringt. Derweil geraten die Götter untereinander in einen grotesken Kampf. Die Trojaner fliehen in die Stadt; Apollon lenkt Achilleus mit einer List vom Tor ab.',
      ],
      location: 'Skamander / Ebene vor Troja',
    },
    {
      id: 'gesang-22',
      books: 'Gesang 22',
      title: 'Hektors Tod',
      summary: [
        'Allein Hektor bleibt vor dem Skäischen Tor zurück, trotz des Flehens seiner Eltern. Als Achilleus heranstürmt, verlässt ihn der Mut: Dreimal jagt ihn der Schnellere um die Stadtmauer. Dann greift Athene ein – in Gestalt seines Bruders Deiphobos gaukelt sie Hektor Beistand vor und verleitet ihn, sich zu stellen.',
        'Im Zweikampf durchbohrt Achilleus den Gegner, der die Rüstung des Patroklos trägt, an der ungeschützten Kehle. Er verweigert dem Sterbenden die Bestattung, durchbohrt die Fersen des Toten und schleift ihn hinter seinem Wagen zum Lager. Auf der Mauer brechen Priamos, Hekabe und Andromache in Klagen aus.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'Warum ist die Schleifung so ungeheuerlich?',
        text: 'Für die Griechen der homerischen Welt war die Bestattung eine heilige Pflicht: Ohne Totenklage, Verbrennung und Grabhügel fand die Seele keine Ruhe. Einen Leichnam zu schänden, verletzte die Ordnung von Göttern und Menschen. Achilleus’ Umgang mit Hektors Körper markiert den äußersten Punkt seiner Rache – von hier aus führt die Ilias zurück zur Menschlichkeit.',
      },
      location: 'Vor den Mauern Trojas',
    },
    {
      id: 'gesang-23',
      books: 'Gesang 23',
      title: 'Abschied von Patroklos',
      summary: [
        'Nachts erscheint Achilleus der Schatten des Patroklos und bittet um rasche Bestattung, damit er ins Totenreich eingehen kann. Am nächsten Tag wird der Scheiterhaufen errichtet: Achilleus opfert Pferde, Hunde und die zwölf gefangenen Trojaner und weiht dem Freund seine Locke. Die Winde entfachen das Feuer, die Gebeine werden in einer goldenen Urne geborgen.',
        'Danach richtet Achilleus prächtige Leichenspiele aus: Wagenrennen, Faustkampf, Ringen, Wettlauf, Bogenschießen und mehr. Als umsichtiger Kampfrichter, der Streit schlichtet und Preise verteilt, zeigt er sich erstmals wieder versöhnlich und großzügig.',
      ],
      sidenote: {
        title: 'Leichenspiele',
        text: 'Sportliche Wettkämpfe zu Ehren eines Verstorbenen waren in der griechischen Adelswelt fester Bestandteil der Totenehrung: Sie feierten das Leben und den Ruhm des Toten zugleich. Die Spiele für Patroklos sind die älteste ausführliche Sportschilderung der europäischen Literatur – und ein Vorläufer der großen panhellenischen Agone wie der Olympischen Spiele.',
      },
      location: 'Griechisches Lager',
    },
    {
      id: 'gesang-24',
      books: 'Gesang 24',
      title: 'Priamos bei Achilleus',
      summary: [
        'Tag für Tag schleift Achilleus Hektors Leichnam um das Grab des Patroklos, doch Apollon bewahrt den Toten vor jeder Entstellung. Schließlich beschließen die Götter ein Ende: Thetis überbringt Achilleus den Befehl des Zeus, den Leichnam freizugeben, und Iris weist Priamos an, Lösegeld ins Lager zu bringen.',
        'Von Hermes geleitet, gelangt der alte König nachts unbemerkt zu Achilleus, kniet nieder und küsst die Hände, die seine Söhne töteten. Im Gedenken an den eigenen Vater weint Achilleus mit ihm; beide Männer trauern gemeinsam. Er übergibt den Leichnam und gewährt elf Tage Waffenruhe. Die Ilias endet mit Hektors Bestattung.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'Hikesie – das Ritual des Bittflehens',
        text: 'Priamos handelt nach dem Ritual der Hikesie: Der Schutzflehende berührt Knie und Hände – hier sogar die Hände des Mörders seiner Söhne – und stellt sich unter den Schutz des Zeus. Wer einen Hiketes abweist, frevelt gegen den Göttervater selbst. Dass Achilleus den Bittenden annimmt, besiegelt seine Rückkehr zur Menschlichkeit.',
      },
      location: 'Griechisches Lager / Troja',
    },
  ],
};

export default iliadJourney;
