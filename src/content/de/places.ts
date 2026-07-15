import type { PlacesContent } from '../types';

const places: PlacesContent = {
  title: 'Orte & Reiseroute',
  intro: [
    'Die homerischen Epen spielen in einer Welt, in der reale Geografie und mythische Erzähllandschaft ineinander übergehen. Troja und Ithaka lassen sich auf der Landkarte suchen – die Inseln der Kirke oder der Sirenen dagegen gehören der Dichtung.',
    'Die Karte unten ist eine stilisierte Darstellung: Sie ordnet die Schauplätze so an, wie die Erzählung sie verbindet, und erhebt keinen Anspruch auf geografische Genauigkeit. Schon in der Antike stritten Gelehrte darüber, wo Odysseus wirklich umherirrte – der Geograf Eratosthenes spottete, man werde die Route des Odysseus finden, sobald man den Schuster ausfindig gemacht habe, der den Sack der Winde nähte.',
  ],
  mapTitle: 'Stilisierte Karte der homerischen Welt',
  mapNote:
    'Stilisierte Darstellung – Positionen mythischer Orte folgen der Erzähllogik und traditionellen Verortungsvorschlägen, nicht gesicherter Geografie.',
  mapAlt:
    'Stilisierte Karte des östlichen Mittelmeers mit Troja, Ithaka und den Stationen der Irrfahrt des Odysseus, verbunden durch eine gestrichelte Route.',
  routeTitle: 'Die Route des Odysseus',
  routeIntro:
    'Von Troja bis Ithaka: die Stationen der zehnjährigen Irrfahrt in der Reihenfolge der Erzählung. Nur Anfang und Ende sind geografisch gesichert – dazwischen liegt das Meer der Dichtung.',
  legend: {
    historical: 'Historisch fassbar',
    mythological: 'Mythisch / dichterisch',
    disputed: 'Lokalisierung umstritten',
  },
  statusExplanation: {
    historical:
      'Orte, die archäologisch oder historisch eindeutig identifiziert sind.',
    mythological:
      'Orte der dichterischen Erzählwelt ohne gesicherte reale Entsprechung.',
    disputed:
      'Orte, für die es Verortungsvorschläge gibt, die aber wissenschaftlich umstritten sind.',
  },
  disclaimer:
    'Wichtig: Für keine Station der Irrfahrt zwischen Kap Malea und Ithaka gibt es eine wissenschaftlich gesicherte Lokalisierung. Traditionelle Zuordnungen – etwa Sizilien für die Kyklopen oder die Straße von Messina für Skylla und Charybdis – sind spätere Deutungen und werden hier als solche gekennzeichnet.',
  places: [
    {
      id: 'troja',
      name: 'Troja (Ilios)',
      status: 'historical',
      work: 'both',
      description:
        'Schauplatz der Ilias und Ausgangspunkt der Irrfahrt. Die Ruinen am Hügel Hisarlik in der Nordwesttürkei gelten seit den Ausgrabungen Schliemanns als das historische Troja; die Stadt war in der Bronzezeit ein bedeutendes Zentrum. Ob sich dort ein Krieg wie der homerische abspielte, bleibt allerdings offen.',
      coords: { x: 88, y: 22 },
      routeIndex: 1,
    },
    {
      id: 'ithaka',
      name: 'Ithaka',
      status: 'disputed',
      work: 'both',
      description:
        'Heimat des Odysseus und Ziel der Heimkehr. Die heutige Insel Ithaki im Ionischen Meer trägt den Namen, doch ihre Beschreibung bei Homer passt nicht in allen Details – weshalb einzelne Forscher auch Nachbarinseln wie Kefalonia vorgeschlagen haben. Die Mehrheit hält an Ithaki fest.',
      coords: { x: 22, y: 42 },
      routeIndex: 14,
    },
    {
      id: 'mykene',
      name: 'Mykene',
      status: 'historical',
      work: 'iliad',
      description:
        'Burg des Agamemnon und mächtigstes Zentrum der griechischen Bronzezeit. Die gewaltigen Ruinen mit dem Löwentor auf der Peloponnes gaben der mykenischen Kultur ihren Namen – jener Epoche, in der die Sage den Trojanischen Krieg ansiedelt.',
      coords: { x: 38, y: 55 },
    },
    {
      id: 'sparta',
      name: 'Sparta',
      status: 'historical',
      work: 'both',
      description:
        'Reich des Menelaos und der Helena. Von hier wurde Helena entführt; hierhin reist Telemachos in der Odyssee, um Nachricht vom Vater zu suchen. Das homerische Sparta ist ein bronzezeitlicher Palast, nicht der spätere Militärstaat.',
      coords: { x: 40, y: 68 },
    },
    {
      id: 'pylos',
      name: 'Pylos',
      status: 'historical',
      work: 'odyssey',
      description:
        'Sitz des greisen Nestor, erste Station der Reise des Telemachos. Bei Ano Englianos wurde tatsächlich ein großer mykenischer Palast ausgegraben – der sogenannte Nestorpalast, einer der besterhaltenen der Bronzezeit.',
      coords: { x: 30, y: 66 },
    },
    {
      id: 'olymp',
      name: 'Olymp',
      status: 'mythological',
      work: 'both',
      description:
        'Sitz der Götter. Der reale Berg an der Grenze Thessaliens ist der höchste Griechenlands; der homerische Olymp aber ist eine mythische Sphäre über allen Wolken, in der die Götter tagen, streiten und das Schicksal der Sterblichen verhandeln.',
      coords: { x: 42, y: 18 },
    },
    {
      id: 'kikonen',
      name: 'Ismaros (Kikonen)',
      status: 'disputed',
      work: 'odyssey',
      description:
        'Erste Station nach Troja: Odysseus’ Leute plündern die Stadt der Kikonen und werden zurückgeschlagen. Das Volk der Kikonen ist in Thrakien, an der Nordägäis, auch außerhalb Homers bezeugt – die genaue Lage von Ismaros ist unsicher.',
      coords: { x: 72, y: 12 },
      routeIndex: 2,
    },
    {
      id: 'lotophagen',
      name: 'Land der Lotophagen',
      status: 'disputed',
      work: 'odyssey',
      description:
        'Nach neun Tagen Sturm um Kap Malea erreichen die Schiffe das Land der Lotosesser, deren Frucht die Heimkehr vergessen lässt. Antike Autoren verorteten es an der nordafrikanischen Küste, oft auf der Insel Djerba – beweisbar ist das nicht.',
      coords: { x: 30, y: 92 },
      routeIndex: 3,
    },
    {
      id: 'kyklopen',
      name: 'Land der Kyklopen',
      status: 'mythological',
      work: 'odyssey',
      description:
        'Heimat des Polyphem: eine wilde, gesetzlose Küste mit fruchtbarem, unbestelltem Land. Die Tradition dachte oft an Sizilien mit dem Ätna – doch die Kyklopenwelt ist in erster Linie ein dichterisches Gegenbild zur menschlichen Ordnung von Recht und Gastfreundschaft.',
      coords: { x: 10, y: 74 },
      routeIndex: 4,
    },
    {
      id: 'aiolia',
      name: 'Aiolia (Insel des Aiolos)',
      status: 'mythological',
      work: 'odyssey',
      description:
        'Die schwimmende Insel des Windgottes, umgeben von einer Mauer aus Bronze. Der Name lebt in den Äolischen Inseln nördlich Siziliens fort – die Beschreibung als treibende Insel zeigt aber, dass hier reine Märchengeografie vorliegt.',
      coords: { x: 10, y: 56 },
      routeIndex: 5,
    },
    {
      id: 'laistrygonen',
      name: 'Telepylos (Laistrygonen)',
      status: 'mythological',
      work: 'odyssey',
      description:
        'Hafen der riesenhaften Laistrygonen, die elf der zwölf Schiffe mit Felsbrocken zerschmettern – die größte Katastrophe der Irrfahrt. Der enge Hafen mit hohen Klippen wurde auf Sardinien, Sizilien oder gar am Schwarzen Meer gesucht; gesichert ist nichts.',
      coords: { x: 9, y: 40 },
      routeIndex: 6,
    },
    {
      id: 'aiaia',
      name: 'Aiaia (Insel der Kirke)',
      status: 'mythological',
      work: 'odyssey',
      description:
        'Waldige Insel der Zauberin Kirke, auf der die Gefährten ein Jahr bleiben. Die römische Tradition verband sie mit dem Monte Circeo an der Küste Latiums – einem Vorgebirge, das wie eine Insel wirkt. Auch dies ist Deutung, nicht Befund.',
      coords: { x: 14, y: 28 },
      routeIndex: 7,
    },
    {
      id: 'unterwelt',
      name: 'Eingang zur Unterwelt',
      status: 'mythological',
      work: 'odyssey',
      description:
        'Am Rand der Welt, jenseits des Okeanos-Stroms im Land der Kimmerier, das nie die Sonne sieht, befragt Odysseus die Toten – den Seher Teiresias, seine Mutter, die gefallenen Helden von Troja. Ein rein mythischer Ort ohne jede reale Entsprechung.',
      coords: { x: 9, y: 12 },
      routeIndex: 8,
    },
    {
      id: 'sirenen',
      name: 'Insel der Sirenen',
      status: 'mythological',
      work: 'odyssey',
      description:
        'Blumige Wiese zwischen bleichenden Gebeinen: Wer den Gesang der Sirenen hört, kehrt nicht heim. Spätere Tradition verortete sie bei den Galli-Inseln vor der Amalfiküste. Ihr Lied verspricht Wissen um alles, was auf Erden geschieht – die vielleicht subtilste Versuchung des Epos.',
      coords: { x: 20, y: 52 },
      routeIndex: 9,
    },
    {
      id: 'skylla-charybdis',
      name: 'Skylla und Charybdis',
      status: 'disputed',
      work: 'odyssey',
      description:
        'Eine enge Durchfahrt zwischen zwei Übeln: dem sechsköpfigen Ungeheuer in der Felshöhle und dem alles verschlingenden Strudel. Seit der Antike denkt man an die Straße von Messina zwischen Italien und Sizilien, deren Strömungen berüchtigt waren – eine plausible, aber unbeweisbare Deutung.',
      coords: { x: 13, y: 62 },
      routeIndex: 10,
    },
    {
      id: 'thrinakia',
      name: 'Thrinakia (Rinder des Helios)',
      status: 'mythological',
      work: 'odyssey',
      description:
        'Weideinsel der heiligen Rinder des Sonnengottes. Als die ausgehungerten Gefährten die Tiere schlachten, besiegelt das ihren Untergang. Der Name wurde früh mit Sizilien („Trinakria“, die Dreizackige) verbunden – im Epos ist die Insel vor allem Schauplatz der letzten, tödlichen Prüfung.',
      coords: { x: 16, y: 82 },
      routeIndex: 11,
    },
    {
      id: 'ogygia',
      name: 'Ogygia (Insel der Kalypso)',
      status: 'mythological',
      work: 'odyssey',
      description:
        '„Der Nabel des Meeres“: die ferne Insel der Nymphe Kalypso, auf der Odysseus sieben Jahre festgehalten wird. Homer legt sie bewusst ins Nirgendwo; spätere Vorschläge reichen von Gozo bei Malta bis zum Atlantik. Ein Ort vollkommener, aber erstickender Abgeschiedenheit.',
      coords: { x: 42, y: 88 },
      routeIndex: 12,
    },
    {
      id: 'scheria',
      name: 'Scheria (Land der Phaiaken)',
      status: 'disputed',
      work: 'odyssey',
      description:
        'Das Reich des Seefahrervolks der Phaiaken mit dem Palast des Alkinoos – letzte Station vor der Heimkehr. Schon in der Antike mit Kerkyra (Korfu) gleichgesetzt, doch die märchenhaften Züge des Landes sprechen für eine idealisierte Dichterwelt zwischen Mythos und Utopie.',
      coords: { x: 16, y: 20 },
      routeIndex: 13,
    },
  ],
};

export default places;
