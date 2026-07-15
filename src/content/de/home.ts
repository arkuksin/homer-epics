import type { HomeContent } from '../types';

const home: HomeContent = {
  heroTitle: 'Zorn und Heimkehr',
  heroSubtitle:
    'Zwei Epen stehen am Anfang der europäischen Literatur: die Ilias und die Odyssee. Diese digitale Ausstellung führt durch beide Werke – ihre Geschichten, Figuren, Orte und Ideen.',
  heroAlt:
    'Ein antiker Dichter mit Lyra am Meer; links das brennende Troja, rechts ein griechisches Schiff auf dunkelblauen Wellen – Illustration im Stil griechischer Vasenmalerei.',
  ctaIliad: 'Zur Ilias',
  ctaOdyssey: 'Zur Odyssee',
  introTitle: 'Wer war Homer?',
  intro: [
    'Homer gilt der Überlieferung nach als Dichter der Ilias und der Odyssee – und damit als Begründer der abendländischen Literatur. Doch schon in der Antike wusste niemand Genaues über ihn: Sieben Städte beanspruchten, sein Geburtsort zu sein, und die Legende beschreibt ihn als blinden Sänger. Ob Homer eine historische Person war, ob er beide Epen schuf oder nur eines, ob hinter dem Namen mehrere Dichter oder eine lange Tradition steht – all das wird in der Forschung bis heute diskutiert. Diese Debatte trägt einen eigenen Namen: die „Homerische Frage“.',
    'Sicher ist: Beide Epen entstanden vermutlich im 8. oder frühen 7. Jahrhundert v. Chr. im griechischsprachigen Kleinasien und schöpfen aus einer jahrhundertealten mündlichen Erzähltradition. Sie erzählen von einer noch älteren, halb mythischen Vergangenheit – der Welt der mykenischen Bronzezeit, wie spätere Generationen sie sich vorstellten.',
    'Für die Griechen der Antike waren Ilias und Odyssee weit mehr als Literatur: Sie waren Schule, Geschichtsbuch und moralischer Kompass zugleich. Wer die Epen kannte, kannte die Götter, die Helden und die Werte seiner Kultur.',
  ],
  worksTitle: 'Zwei Epen, zwei Welten',
  works: {
    iliad: {
      title: 'Ilias',
      tagline: 'Der Zorn des Achilleus',
      text: 'Wenige Wochen im zehnten Jahr des Trojanischen Krieges: Ein Streit zwischen Achilleus und Agamemnon entfesselt eine Kette aus Stolz, Trauer und Rache – bis hin zu jener Nacht, in der ein alter König den Mörder seines Sohnes um dessen Leichnam bittet.',
      link: 'Die Ilias entdecken',
    },
    odyssey: {
      title: 'Odyssee',
      tagline: 'Die lange Heimkehr',
      text: 'Zehn Jahre nach dem Fall Trojas irrt Odysseus noch immer über das Meer. Zwischen Zyklopen, Zauberinnen und Sirenen kämpft er um seine Heimkehr – während auf Ithaka Freier um seine Frau werben und sein Sohn erwachsen werden muss.',
      link: 'Die Odyssee entdecken',
    },
  },
  contrastTitle: 'Krieg und Meer',
  contrast: [
    'Die Ilias ist ein Epos des Krieges: konzentriert auf wenige Wochen, verdichtet auf einen einzigen Konflikt, getragen von Zorn, Ehre und Sterblichkeit. Die Odyssee ist ein Epos der Rückkehr: ausgreifend über zehn Jahre und ein ganzes Meer, getragen von List, Sehnsucht und Treue.',
    'Zusammen bilden beide Werke ein Doppelbild des menschlichen Lebens – der Mensch im Ausnahmezustand der Schlacht und der Mensch auf dem langen Weg nach Hause. Nicht zufällig hat man die Ilias das Epos des Todes und die Odyssee das Epos des Lebens genannt.',
  ],
  contextTitle: 'Zeit und Kultur',
  context: [
    'Die Handlung beider Epen spielt in der Welt der mykenischen Palastkultur, die um 1200 v. Chr. unterging. Die Epen selbst wurden aber erst Jahrhunderte später gedichtet – in der frühen Archaik, als die griechische Schrift gerade neu entstand. Homers Welt ist deshalb ein Mosaik: bronzezeitliche Erinnerungen, Verhältnisse der eigenen Gegenwart und rein Dichterisches verschmelzen darin.',
    'Ob dem Trojanischen Krieg ein historisches Ereignis zugrunde liegt, ist umstritten. Die Ausgrabungen in Hisarlik in der heutigen Türkei zeigen, dass dort eine bedeutende bronzezeitliche Stadt lag, die mehrfach zerstört wurde – ob eine dieser Zerstörungen mit der Sage zusammenhängt, lässt sich jedoch nicht beweisen.',
  ],
  oralityTitle: 'Vom Gesang zum Buch',
  orality: [
    'Bevor die Epen aufgeschrieben wurden, lebten sie in den Stimmen von Sängern, den Aoiden. Diese trugen Heldenlieder zur Leier vor und improvisierten dabei nach festen Mustern: wiederkehrende Schmuckwörter („der fußschnelle Achilleus“, „die rosenfingrige Eos“), formelhafte Verse und typische Szenen halfen ihnen, Tausende von Versen im gleichmäßigen Rhythmus des Hexameters frei vorzutragen.',
    'Die Forschung des 20. Jahrhunderts – vor allem die Arbeiten von Milman Parry und Albert Lord – hat gezeigt, dass Ilias und Odyssee tief in dieser mündlichen Dichtungstechnik verwurzelt sind. Irgendwann, wohl im 8. oder 7. Jahrhundert v. Chr., wurden die Epen schriftlich fixiert; wie genau dieser Übergang ablief, ist eine der spannendsten offenen Fragen der Altertumswissenschaft.',
    'Erst in hellenistischer Zeit teilten Gelehrte in Alexandria beide Epen in je 24 Gesänge ein – einen für jeden Buchstaben des griechischen Alphabets.',
  ],
  exploreTitle: 'Die Ausstellung entdecken',
  exploreCards: [
    {
      id: 'journeys',
      title: 'Geführte Werkreisen',
      text: 'Gesang für Gesang durch beide Epen – mit Etappen, Wendepunkten und Hintergrundwissen.',
      to: '/iliad/journey',
    },
    {
      id: 'characters',
      title: 'Figuren',
      text: 'Helden, Königinnen und Götter: Wer mit wem verwandt, verbündet oder verfeindet ist.',
      to: '/characters',
    },
    {
      id: 'places',
      title: 'Orte & Route',
      text: 'Von Troja bis Ithaka: die Schauplätze der Epen und die Irrfahrt des Odysseus auf einer stilisierten Karte.',
      to: '/places',
    },
    {
      id: 'comparison',
      title: 'Vergleich',
      text: 'Ilias und Odyssee Seite an Seite: Handlung, Erzählkunst, Heldenbild und Wirkung.',
      to: '/comparison',
    },
    {
      id: 'glossary',
      title: 'Glossar',
      text: 'Von „Ägis“ bis „Xenia“: die wichtigsten Begriffe der homerischen Welt, durchsuchbar erklärt.',
      to: '/glossary',
    },
    {
      id: 'sources',
      title: 'Quellen',
      text: 'Seriöse Ausgaben, Forschungsliteratur und frei zugängliche Ressourcen zum Weiterlesen.',
      to: '/sources',
    },
  ],
};

export default home;
