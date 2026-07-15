import type { JourneyContent } from '../types';

const odysseyJourney: JourneyContent = {
  title: 'Werkreise durch die Odyssee',
  intro: [
    'Die Odyssee erzählt von der Heimkehr des Odysseus, der nach dem Fall Trojas zehn Jahre über die Meere irrt – doch sie erzählt es nicht der Reihe nach. Das Epos beginnt kurz vor dem Ende der Irrfahrt: Die erzählte Gegenwart umfasst nur rund 40 Tage, in denen sich das Schicksal des Helden und seines Hauses entscheidet.',
    'Drei große Bögen bauen das Werk auf. Zunächst folgt die „Telemachie" (Bücher 1–4) dem Sohn Telemachos, der sich auf die Suche nach Nachrichten vom Vater macht, während Freier den Palast auf Ithaka belagern. Dann tritt Odysseus selbst auf: Bei den gastlichen Phaiaken erzählt er in einer großen Rückblende (Bücher 9–12) von Kyklopen, Kirke, der Unterwelt und dem Untergang aller Gefährten. Die zweite Hälfte schildert schließlich die Heimkehr – die vorsichtige Rückkehr des verkleideten Helden, die Bogenprobe, den Freiermord und die Wiedervereinigung mit Penelope.',
    'Diese Werkreise führt Buch für Buch durch alle 24 Bücher der Odyssee. Jede Etappe fasst die Handlung zusammen; Wendepunkte sind markiert, und Randnotizen erklären Hintergründe von der Gastfreundschaft bis zum Geheimnis des Ehebetts.',
  ],
  stageLabel: 'Etappe',
  stages: [
    {
      id: 'buch-1',
      books: 'Buch 1',
      title: 'Der Beschluss der Götter',
      summary: [
        'Zehn Jahre nach dem Fall Trojas sind alle Helden heimgekehrt oder tot – nur Odysseus sitzt auf der Insel der Nymphe Kalypso fest. In der Götterversammlung nutzt Athene die Abwesenheit des zürnenden Poseidon: Zeus stimmt zu, dass Odysseus endlich heimkehren soll.',
        'Athene selbst reist in Gestalt des Fremden Mentes nach Ithaka. Dort prassen über hundert Freier im Palast, bedrängen Penelope und zehren das Gut des Hausherrn auf. Die Göttin ermutigt den jungen Telemachos, eine Versammlung einzuberufen und nach dem Vater zu suchen – der Sohn beginnt, zum Mann zu werden.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'Mitten hinein: in medias res',
        text: 'Die Odyssee beginnt nicht mit der Abfahrt von Troja, sondern im letzten Jahr der Irrfahrt – „mitten in die Dinge hinein", wie es der römische Dichter Horaz später nannte. Die Vorgeschichte wird erst nachgeliefert, wenn Odysseus sie selbst erzählt. Diese Technik des In-medias-res-Einstiegs wurde zum Vorbild unzähliger Romane und Filme.',
      },
      location: 'Olymp / Ithaka, Palast des Odysseus',
    },
    {
      id: 'buch-2',
      books: 'Buch 2',
      title: 'Aufbruch des Sohnes',
      summary: [
        'Telemachos beruft die erste Volksversammlung auf Ithaka seit zwanzig Jahren ein und klagt die Freier öffentlich an. Deren Wortführer Antinoos schiebt die Schuld auf Penelope: Drei Jahre lang habe sie die Männer mit einer List hingehalten – tagsüber webte sie am Totentuch für den alten Laertes, nachts trennte sie es wieder auf, bis eine Magd sie verriet.',
        'Ein Adlerzeichen des Zeus deutet Unheil an, doch die Freier spotten nur. Athene, nun in Gestalt Mentors, beschafft Schiff und Mannschaft; heimlich sticht Telemachos in See.',
      ],
      sidenote: {
        title: 'Penelopes Weblist',
        text: 'Die Weblist macht Penelope zum weiblichen Gegenstück ihres listenreichen Mannes: Mit Klugheit gewinnt sie Zeit, wo offene Gegenwehr unmöglich ist. Das Bild der Frau, die ihr Werk auflöst, um treu bleiben zu können, wurde zum Sinnbild für Geduld und Beständigkeit – und zeigt, dass die Odyssee ihre Frauenfiguren als kluge Handelnde ernst nimmt.',
      },
      location: 'Ithaka',
    },
    {
      id: 'buch-3',
      books: 'Buch 3',
      title: 'Beim alten Nestor',
      summary: [
        'In Pylos trifft Telemachos auf König Nestor, den ältesten der Troja-Kämpfer, gerade bei einem großen Opferfest für Poseidon. Der Alte nimmt die Gäste herzlich auf und erzählt von den Heimfahrten der Helden: vom Streit der Atriden nach dem Sieg, von der Ermordung Agamemnons durch Aigisthos und Klytaimnestra und von Orestes’ Rache – ein warnendes und zugleich ermutigendes Beispiel für den Sohn.',
        'Von Odysseus aber weiß Nestor nichts. Er rät, Menelaos in Sparta zu befragen, und gibt Telemachos seinen Sohn Peisistratos als Begleiter für die Fahrt über Land mit.',
      ],
      sidenote: {
        title: 'Nostos – das Lied von der Heimkehr',
        text: 'Nostos, die Heimkehr, ist das Leitmotiv des ganzen Epos; unser Wort „Nostalgie" – der Schmerz der Sehnsucht nach Heimkehr – leitet sich davon ab. Neben der Odyssee gab es ein ganzes Epos namens „Nostoi" über die Rückfahrten der Helden. Agamemnons düsteres Ende dient dabei als Kontrastfolie: So kann Heimkehr auch misslingen.',
      },
      location: 'Pylos',
    },
    {
      id: 'buch-4',
      books: 'Buch 4',
      title: 'Glanz und Trauer in Sparta',
      summary: [
        'In Sparta empfangen Menelaos und Helena die jungen Gäste inmitten einer Doppelhochzeit. Die Erinnerung an Troja mischt Glanz und Schmerz: Helena erzählt, wie Odysseus als Bettler verkleidet in die Stadt eindrang, Menelaos vom nächtlichen Warten im Hölzernen Pferd. Vom Meergreis Proteus, den er auf der Heimfahrt überlistete, weiß Menelaos das Entscheidende: Odysseus lebt – gefangen bei der Nymphe Kalypso, ohne Schiff und Gefährten.',
        'Auf Ithaka entdecken unterdessen die Freier Telemachos’ Abreise. Erschrocken über den erwachten Sohn legen sie einen Hinterhalt, um ihn auf der Rückfahrt zu ermorden.',
      ],
      location: 'Sparta / Ithaka',
    },
    {
      id: 'buch-5',
      books: 'Buch 5',
      title: 'Abschied von Kalypso',
      summary: [
        'Erst jetzt tritt Odysseus selbst auf: Seit sieben Jahren hält ihn Kalypso auf ihrer Insel Ogygia fest; täglich sitzt er weinend am Strand und blickt übers Meer. Auf Zeus’ Befehl überbringt Hermes der Nymphe die Weisung, ihn ziehen zu lassen. Widerwillig fügt sie sich – nicht einmal ihr Angebot der Unsterblichkeit hatte seine Sehnsucht nach Heimat und Penelope besiegen können.',
        'Odysseus baut ein Floß und segelt siebzehn Tage, bis Poseidon ihn erblickt und einen furchtbaren Sturm entfesselt. Mit Hilfe der Meergöttin Ino rettet sich der Schiffbrüchige nackt an die Küste der Phaiaken.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'Warum hasst Poseidon Odysseus?',
        text: 'Der Meergott verfolgt Odysseus, weil dieser seinen Sohn geblendet hat: den Kyklopen Polyphem. Dessen Fluch – erzählt wird davon erst in Buch 9 – bat Poseidon, dem Täter die Heimkehr zu verwehren oder sie spät, elend und allein geschehen zu lassen. Töten darf der Gott ihn nicht, denn das Schicksal hat die Heimkehr beschlossen; aber er kann den Weg zur Qual machen.',
      },
      location: 'Ogygia / Offenes Meer / Scheria',
    },
    {
      id: 'buch-6',
      books: 'Buch 6',
      title: 'Nausikaa am Strand',
      summary: [
        'Athene schickt der Königstochter Nausikaa einen Traum: Sie solle zum Fluss fahren und die Wäsche der Familie waschen – schließlich stehe ihre Hochzeit bevor. Während die Mädchen nach getaner Arbeit Ball spielen, erwacht der schiffbrüchige Odysseus im Gebüsch.',
        'Verwildert und nur mit einem Zweig bedeckt, tritt er vor die Mädchen; alle fliehen außer Nausikaa. Mit einer wohlgesetzten, schmeichelnden Bittrede gewinnt der Fremde ihr Vertrauen. Sie gibt ihm Kleidung und weist ihm den Weg in die Stadt der Phaiaken – aus Vorsicht vor Gerede soll er getrennt von ihr gehen und sich im Palast an die Königin Arete wenden.',
      ],
      location: 'Scheria, Flussmündung am Meer',
    },
    {
      id: 'buch-7',
      books: 'Buch 7',
      title: 'Am Hof des Alkinoos',
      summary: [
        'In einen Nebel gehüllt, den Athene um ihn legt, durchquert Odysseus die Stadt der Phaiaken und bestaunt Hafen, Plätze und den märchenhaften Palast des Königs Alkinoos mit seinen ganzjährig tragenden Obstgärten. Als Schutzflehender umfasst er die Knie der Königin Arete.',
        'Er wird freundlich aufgenommen, bewirtet und muss weder Namen noch Herkunft nennen – so gebietet es die Sitte der Gastfreundschaft. Nur seine Fahrt von Ogygia bis Scheria erzählt er. Alkinoos ist so beeindruckt, dass er dem Fremden sogar seine Tochter zur Frau anbietet, vor allem aber sicheres Geleit in die Heimat verspricht.',
      ],
      sidenote: {
        title: 'Xenia – heilige Gastfreundschaft',
        text: 'Gastfreundschaft (xenia) ist die zentrale soziale Institution der Odyssee: Fremde aufzunehmen, zu bewirten und erst dann nach dem Namen zu fragen, gebietet Zeus selbst als Schützer der Gäste. An der Xenia werden alle gemessen – die vorbildlichen Phaiaken und Eumaios ebenso wie ihre frevelhaften Verächter: der menschenfressende Polyphem und die Freier, die als Dauergäste ein fremdes Haus verzehren.',
      },
      location: 'Scheria, Palast des Alkinoos',
    },
    {
      id: 'buch-8',
      books: 'Buch 8',
      title: 'Der Sänger und die Tränen',
      summary: [
        'Alkinoos richtet dem Gast ein Fest mit Wettspielen aus. Als ein junger Phaiake ihn verspottet, schleudert Odysseus den Diskus weiter als alle anderen – der Fremde ist offenkundig kein gewöhnlicher Mann.',
        'Dreimal singt der blinde Sänger Demodokos: vom Streit des Odysseus mit Achilleus, von der ertappten Liebschaft des Ares mit Aphrodite und schließlich, auf Odysseus’ eigenen Wunsch, vom Hölzernen Pferd und dem Fall Trojas. Bei den Troja-Liedern verbirgt der Gast sein Gesicht und weint. Alkinoos bemerkt es und stellt die entscheidende Frage: Wer bist du?',
      ],
      sidenote: {
        title: 'Demodokos – das Epos im Epos',
        text: 'Mit dem blinden Sänger Demodokos porträtiert die Odyssee den eigenen Berufsstand: den Aoiden, der von der Muse begabt zu Festen singt. Dass Odysseus beim Lied über die eigenen Taten weint, zeigt die Macht dieser Kunst – und die Antike sah in dem blinden Sänger gern ein Selbstporträt Homers, den die Überlieferung ebenfalls blind nennt.',
      },
      location: 'Scheria, Palast des Alkinoos',
    },
    {
      id: 'buch-9',
      books: 'Buch 9',
      title: 'Niemand und der Kyklop',
      summary: [
        '„Ich bin Odysseus" – mit der Enthüllung seines Namens beginnt der Held seine große Rückblende. Nach dem Aufbruch von Troja plünderten die Gefährten die Stadt der Kikonen und verloren viele Männer; bei den Lotophagen mussten die vom Lotos Betäubten, die alle Heimkehr vergaßen, mit Gewalt an Bord zurückgebracht werden.',
        'Dann die Kyklopen: Der Riese Polyphem sperrt die Gefährten in seine Höhle und frisst sechs von ihnen. Odysseus macht ihn mit Wein trunken, nennt sich „Niemand", blendet ihn mit einem glühenden Pfahl und entkommt unter den Schafen. Doch im Triumph verrät er seinen wahren Namen – und Polyphem erfleht von seinem Vater Poseidon Rache.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'Das „Niemand"-Wortspiel',
        text: 'Als der geblendete Polyphem um Hilfe brüllt, fragen die anderen Kyklopen, wer ihm Gewalt antue. Seine Antwort – „Niemand!" – lässt sie kopfschüttelnd abziehen. Die List zeigt Odysseus als Meister der Sprache; im Griechischen klingt der Deckname Outis zudem an metis („Klugheit, List") an. Doch der eitle Namensverrat danach kostet ihn beinahe die Heimkehr.',
      },
      location: 'Scheria (Erzählung: Thrakien, Land der Lotophagen, Insel der Kyklopen)',
    },
    {
      id: 'buch-10',
      books: 'Buch 10',
      title: 'Windsack, Riesen und Kirke',
      summary: [
        'Der Windgott Aiolos schenkt Odysseus einen Schlauch, in dem alle widrigen Winde gebunden sind. Schon ist Ithaka in Sicht, da öffnen die misstrauischen Gefährten den Sack – der Sturm treibt sie zurück, und Aiolos verweigert jede weitere Hilfe. Bei den riesenhaften Laistrygonen folgt die Katastrophe: Sie zerschmettern elf der zwölf Schiffe samt Besatzung.',
        'Auf der Insel Aiaia verwandelt die Zauberin Kirke die Kundschafter in Schweine. Gefeit durch das Kraut Moly, das Hermes ihm gab, zwingt Odysseus sie zur Rückverwandlung. Aus der Feindin wird eine Gastgeberin; ein Jahr bleiben die Männer, ehe Kirke den Weg weist – er führt ins Totenreich.',
      ],
      sidenote: {
        title: 'Moly – das Götterkraut',
        text: 'Moly ist die wohl berühmteste Zauberpflanze der antiken Literatur: schwarz an der Wurzel, mit milchweißer Blüte, „für Sterbliche schwer zu graben" – nur Götter geben sie. Was Homer botanisch meinte, ist bis heute umstritten; diskutiert wurden unter anderem Schneeglöckchen und Steppenraute. Als Gegengift gegen Verzauberung wurde Moly sprichwörtlich.',
      },
      location: 'Scheria (Erzählung: Aiolia, Land der Laistrygonen, Aiaia)',
    },
    {
      id: 'buch-11',
      books: 'Buch 11',
      title: 'Am Rand der Unterwelt',
      summary: [
        'Am Rand der Welt gräbt Odysseus eine Opfergrube; das Blut lockt die Seelen der Toten herbei. Der Seher Teiresias prophezeit ihm die Heimkehr – sofern niemand die Rinder des Helios antastet – sowie die Zustände auf Ithaka und einen späten, sanften Tod. Erschüttert erkennt Odysseus unter den Schatten seine Mutter Antikleia, die aus Gram um ihn starb; dreimal greift er nach ihr, dreimal fasst er ins Leere.',
        'Es folgen berühmte Begegnungen: Agamemnon warnt vor der Heimkehr, Achilleus erklärt, er wäre lieber ärmster Knecht unter Lebenden als König aller Toten, und der gekränkte Ajax wendet sich schweigend ab.',
      ],
      sidenote: {
        title: 'Die Nekyia',
        text: 'Die Totenbeschwörung – nach dem griechischen Wort für das Opferritual „Nekyia" genannt – ist die älteste ausgeführte Unterweltsszene der europäischen Literatur. Sie begründete eine lange Tradition der Jenseitsreisen: Vergil ließ Aeneas in die Unterwelt hinabsteigen, Dante wanderte durch das Inferno. Auffällig ist Homers nüchternes Jenseits: ein Schattendasein ohne Trost, das das Leben umso kostbarer macht.',
      },
      location: 'Scheria (Erzählung: Eingang zur Unterwelt am Okeanos)',
    },
    {
      id: 'buch-12',
      books: 'Buch 12',
      title: 'Sirenen, Skylla und die Rinder des Helios',
      summary: [
        'Kirke weist die letzten Gefahren. An den Sirenen vorbei lässt sich Odysseus an den Mast binden, während die Gefährten mit Wachs in den Ohren rudern – so hört er als Einziger ihren betörenden Gesang und überlebt. In der Meerenge zwischen dem sechsköpfigen Ungeheuer Skylla und dem Strudel Charybdis wählt er das kleinere Übel: Skylla reißt sechs Männer von Bord.',
        'Auf der Insel Thrinakia schlachten die ausgehungerten Gefährten trotz aller Schwüre die heiligen Rinder des Sonnengottes. Zeus zerschmettert das Schiff mit dem Blitz; alle ertrinken. Nur Odysseus treibt auf einem Wrackteil nach Ogygia – der Kreis der Erzählung schließt sich.',
      ],
      sidenote: {
        title: 'Die Sirenen nach Homer',
        text: 'Homer beschreibt das Aussehen der Sirenen gar nicht – nur ihre Stimme, die alles Wissen verspricht und ins Verderben lockt. Erst die spätere Kunst machte aus ihnen Vogelfrauen mit Flügeln und Krallen, das Mittelalter dann Fischwesen, aus denen unsere Meerjungfrauen wurden. Die Szene des angebundenen Odysseus zählt zu den meistgedeuteten Bildern der Antike – als Sinnbild widerstehender Vernunft.',
      },
      location: 'Scheria (Erzählung: Sireneninsel, Meerenge, Thrinakia)',
    },
    {
      id: 'buch-13',
      books: 'Buch 13',
      title: 'Ankunft auf Ithaka',
      summary: [
        'Die Erzählung ist beendet; reich beschenkt tritt Odysseus die letzte Überfahrt an. Die wundersamen Schiffe der Phaiaken tragen ihn im Schlaf nach Ithaka und setzen ihn samt Schätzen an Land. Poseidon rächt sich an den Fährleuten: Das heimkehrende Schiff erstarrt vor dem Hafen zu Stein.',
        'Odysseus erwacht und erkennt die eigene Heimat zunächst nicht, die Athene in Nebel gehüllt hat. Als Hirte verkleidet, stellt die Göttin ihn auf die Probe – und amüsiert sich über seine sofort erfundene Lügengeschichte. Gemeinsam planen sie die Rache an den Freiern; Athene verwandelt den Helden in einen alten Bettler.',
      ],
      isTurningPoint: true,
      location: 'Ithaka, Bucht des Phorkys',
    },
    {
      id: 'buch-14',
      books: 'Buch 14',
      title: 'Beim Schweinehirten Eumaios',
      summary: [
        'Der Bettler klopft an die Hütte des Schweinehirten Eumaios – und wird aufgenommen, bewirtet und beschenkt, obwohl der Hirte selbst wenig hat. Eumaios klagt über die Freier, die die Herden seines verschollenen Herrn verprassen, und hält Odysseus für tot; zu viele Landstreicher hätten Penelope schon mit falschen Hoffnungen getröstet.',
        'Der verkleidete Odysseus tischt eine kunstvolle Lügengeschichte auf: Als kretischer Abenteurer will er von Odysseus gehört haben, der bald zurückkehre. Der treue Hirte bleibt skeptisch, doch seine schlichte Herzlichkeit besteht die Probe der Gastfreundschaft glänzend.',
      ],
      sidenote: {
        title: 'Die treuen Diener',
        text: 'Eumaios, die Amme Eurykleia und der Rinderhirt Philoitios bilden das Gegenbild zu den treulosen Mägden und dem Ziegenhirten Melanthios: Loyalität entscheidet in der Odyssee über Wert und Schicksal eines Menschen, nicht der Stand. Eumaios ist dabei selbst eine Königsgeschichte in Moll – als Kind geraubt und verkauft, stammt der Sklave aus fürstlichem Haus.',
      },
      location: 'Ithaka, Hütte des Eumaios',
    },
    {
      id: 'buch-15',
      books: 'Buch 15',
      title: 'Telemachos kehrt zurück',
      summary: [
        'Athene mahnt Telemachos in Sparta zur Heimkehr und warnt ihn vor dem Hinterhalt der Freier. Mit Gastgeschenken des Menelaos und der Helena reist er über Pylos zurück; an Bord nimmt er den flüchtigen Seher Theoklymenos auf. Auf anderer Route umschifft das Schiff die lauernden Mörder.',
        'In der Hütte erzählt unterdessen Eumaios seine Lebensgeschichte: Als Königskind wurde er von einer phönizischen Sklavin entführt, verkauft und von Laertes gekauft – im Haus des Odysseus fand er ein zweites Zuhause. Bei Sonnenaufgang landet Telemachos auf Ithaka und schlägt den Weg zur Hütte des Schweinehirten ein.',
      ],
      location: 'Sparta / Pylos / Ithaka',
    },
    {
      id: 'buch-16',
      books: 'Buch 16',
      title: 'Vater und Sohn',
      summary: [
        'Telemachos erreicht die Hütte und schickt Eumaios mit der Nachricht seiner Rückkehr zu Penelope. Kaum sind Vater und Sohn allein, verwandelt Athene den Bettler zurück: Odysseus gibt sich zu erkennen. Telemachos hält ihn erst für einen Gott, dann liegen sich beide weinend in den Armen – nach zwanzig Jahren.',
        'Gemeinsam schmieden sie den Racheplan: Odysseus wird als Bettler in den Palast gehen und jede Misshandlung ertragen; die Waffen in der Halle sollen beiseitegeschafft werden, und niemand – auch Penelope nicht – darf von seiner Rückkehr wissen. Die Freier beraten unterdessen vergeblich über einen neuen Mordplan.',
      ],
      location: 'Ithaka, Hütte des Eumaios',
    },
    {
      id: 'buch-17',
      books: 'Buch 17',
      title: 'Der Bettler im eigenen Haus',
      summary: [
        'Odysseus wandert als Bettler zum Palast; unterwegs beschimpft und tritt ihn der Ziegenhirt Melanthios. Am Hoftor liegt auf dem Misthaufen der greise Jagdhund Argos, den Odysseus einst aufzog: Er allein erkennt den Herrn nach zwanzig Jahren, wedelt ein letztes Mal – und stirbt. Odysseus muss sich eine Träne verbergen.',
        'In der eigenen Halle bettelt der Hausherr die Freier um Brot an. Die meisten geben, doch Antinoos wirft ihm einen Fußschemel an die Schulter – ein Frevel am Gastrecht, der selbst die anderen Freier murren lässt. Penelope wünscht, den Fremden zu sprechen.',
      ],
      sidenote: {
        title: 'Argos, der treue Hund',
        text: 'Die Argos-Szene ist nur wenige Verse lang und doch weltberühmt: Der einst beste Jagdhund, nun alt und verwahrlost auf dem Mist, erkennt als erstes Lebewesen den Heimkehrer – ohne Verkleidungsprobe, allein aus Treue. Dass er im Moment des Wiedersehens stirbt, verdichtet zwanzig Jahre Wartezeit in ein einziges Bild stiller Loyalität.',
      },
      location: 'Ithaka, Palast des Odysseus',
    },
    {
      id: 'buch-18',
      books: 'Buch 18',
      title: 'Der Kampf der Bettler',
      summary: [
        'Der stadtbekannte Bettler Iros will den Neuling vom Tor vertreiben; die Freier arrangieren belustigt einen Faustkampf. Odysseus streckt den Prahler mit einem einzigen, wohldosierten Schlag nieder – ein Vorgeschmack, den niemand versteht.',
        'Penelope zeigt sich, von Athene mit Schönheit übergossen, den Freiern: Sie tadelt Telemachos zum Schein, beklagt ihre Lage und entlockt den Werbern reiche Geschenke – Odysseus freut sich still über die List seiner Frau. Die Magd Melantho verhöhnt den Bettler, der Freier Eurymachos wirft einen Schemel nach ihm. Die Spannungen in der Halle wachsen.',
      ],
      location: 'Ithaka, Palast des Odysseus',
    },
    {
      id: 'buch-19',
      books: 'Buch 19',
      title: 'Die Narbe der Amme',
      summary: [
        'Nachts schaffen Odysseus und Telemachos die Waffen aus der Halle. Dann sitzt der Bettler bei Penelope: Als Kreter gibt er sich aus, der Odysseus einst bewirtete, und beschreibt dessen Kleidung so genau, dass Penelope weint. Ihr Gast tröstet sie: Odysseus sei nah.',
        'Beim Fußwaschen erkennt die alte Amme Eurykleia ihren Herrn an der Narbe über dem Knie, die ihm einst ein Eber auf der Jagd am Parnass riss. Odysseus erstickt ihren Freudenschrei und verpflichtet sie zum Schweigen. Penelope erzählt einen deutungsschweren Traum und fasst einen Entschluss: Morgen soll die Bogenprobe den neuen Gatten bestimmen.',
      ],
      location: 'Ithaka, Palast des Odysseus',
    },
    {
      id: 'buch-20',
      books: 'Buch 20',
      title: 'Die Nacht vor der Entscheidung',
      summary: [
        'Odysseus liegt schlaflos in der Vorhalle und sieht die treulosen Mägde zu den Freiern schleichen; sein Herz knurrt wie eine Hündin, doch er zwingt sich zur Geduld – Schlimmeres hat er bei Polyphem ertragen. Athene beruhigt ihn, Zeus sendet ein günstiges Donnerzeichen.',
        'Am Festtag des Apollon füllt sich die Halle ein letztes Mal. Der Rinderhirt Philoitios erweist dem Bettler Freundlichkeit, der Freier Ktesippos wirft einen Kuhfuß nach ihm. Da überfällt die Freier ein unheimliches, von Athene gesandtes Gelächter; der Seher Theoklymenos sieht Blut an den Wänden und die Halle voller Schatten – und verlässt entsetzt das Haus.',
      ],
      location: 'Ithaka, Palast des Odysseus',
    },
    {
      id: 'buch-21',
      books: 'Buch 21',
      title: 'Die Bogenprobe',
      summary: [
        'Penelope holt den großen Bogen des Odysseus aus der Kammer und verkündet den Wettkampf: Wer den Bogen spannt und durch die Ösen von zwölf aufgereihten Äxten schießt, den wird sie heiraten. Freier um Freier müht sich vergeblich – die Waffe lässt sich nicht einmal spannen.',
        'Draußen gibt sich Odysseus dem Schweinehirten Eumaios und dem Rinderhirten Philoitios zu erkennen und weist ihnen ihre Rollen zu. Dann bittet der Bettler selbst um den Bogen; die Freier toben, doch Telemachos setzt es durch. Mühelos spannt Odysseus die Sehne, sie singt unter seinem Griff – und der Pfeil fliegt durch alle zwölf Äxte.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'Der Bogen als Zeichen des Herrn',
        text: 'Der Bogen stammt vom Helden Eurytos und war ein Gastgeschenk an den jungen Odysseus – nur der rechtmäßige Herr kann ihn spannen. Die Probe ist darum mehr als ein Kraftakt: Sie ist ein Gottesurteil über die Herrschaft auf Ithaka. Dass Penelope ausgerechnet jetzt den Wettkampf ansetzt, deuten viele als ihre eigene, vielleicht ahnende List.',
      },
      location: 'Ithaka, Festsaal des Palasts',
    },
    {
      id: 'buch-22',
      books: 'Buch 22',
      title: 'Der Freiermord',
      summary: [
        'Odysseus wirft die Lumpen ab, springt auf die Schwelle und schießt den nächsten Pfeil dem Antinoos in die Kehle. Dann nennt er seinen Namen: Das Gericht über die Freier beginnt. Eurymachos’ Angebot einer Entschädigung weist er zurück; Bitten gelten nicht mehr.',
        'An seiner Seite kämpfen Telemachos, Eumaios und Philoitios; Athene hält schützend die Hand über sie. Der Verräter Melanthios, der den Freiern Waffen zusteckt, wird gefasst. Am Ende liegen alle Freier erschlagen; nur der Sänger Phemios und der Herold Medon werden verschont. Die zwölf treulosen Mägde müssen die Halle reinigen und werden gehängt, Melanthios wird verstümmelt.',
      ],
      isTurningPoint: true,
      location: 'Ithaka, Festsaal des Palasts',
    },
    {
      id: 'buch-23',
      books: 'Buch 23',
      title: 'Das Geheimnis des Ehebetts',
      summary: [
        'Eurykleia weckt Penelope mit der unglaublichen Nachricht. Doch die Königin bleibt misstrauisch – zu oft wurde sie getäuscht, und vor ihr sitzt womöglich ein Gott in fremder Gestalt. Kühl stellt sie die letzte Probe: Man möge das Bett des Odysseus vor die Kammer rücken.',
        'Da braust der Held auf: Sein Bett kann kein Mensch verrücken, denn er selbst hat es um den Stamm eines lebenden Ölbaums gebaut – ein Geheimnis, das nur die Eheleute kennen. Nun erst fällt Penelope ihm weinend um den Hals. Athene verlängert die Nacht, in der sich beide ihre zwanzig Jahre erzählen.',
      ],
      isTurningPoint: true,
      sidenote: {
        title: 'Das Ehebett als Symbol',
        text: 'Das um den wurzelnden Ölbaum gezimmerte Bett ist das stärkste Symbol der Odyssee: eine Ehe, die buchstäblich verwurzelt und unverrückbar ist. Penelopes Probe zeigt zudem, dass sie ihrem Mann an List ebenbürtig ist – sie überlistet den Meister der Listen. Erst das geteilte Geheimnis, nicht die Narbe oder der Bogen, beglaubigt hier die Identität.',
      },
      location: 'Ithaka, Palast des Odysseus',
    },
    {
      id: 'buch-24',
      books: 'Buch 24',
      title: 'Frieden auf Ithaka',
      summary: [
        'Hermes geleitet die Seelen der Freier in die Unterwelt, wo Agamemnon und Achilleus sich unterhalten: Der eine preist Achilleus’ ruhmvolle Bestattung, dann beide die Treue Penelopes – das strahlende Gegenbild zur eigenen mörderischen Gattin.',
        'Odysseus geht aufs Land zu seinem Vater Laertes, den er verarmt und in Trauer beim Gärtnern findet, und gibt sich nach behutsamer Prüfung zu erkennen. Doch die Angehörigen der erschlagenen Freier greifen zu den Waffen. Ein letztes Gefecht bahnt sich an, Laertes streckt noch den Vater des Antinoos nieder – da gebieten Zeus und Athene Einhalt und stiften dauerhaften Frieden auf Ithaka.',
      ],
      location: 'Unterwelt / Ithaka, Landgut des Laertes',
    },
  ],
};

export default odysseyJourney;
