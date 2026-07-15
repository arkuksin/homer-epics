/** Gemeinsame Inhaltstypen für alle drei Sprachversionen. */

export type WorkId = 'iliad' | 'odyssey';

export type Affiliation = 'greek' | 'trojan' | 'god' | 'ithaca' | 'other';

export interface EpicSection {
  id: string;
  title: string;
  /** Absätze */
  body: string[];
}

export interface ThemeCard {
  id: string;
  title: string;
  text: string;
}

export interface JourneyStage {
  id: string;
  /** z. B. "Gesang 1" oder "Buch 9–10" */
  books: string;
  title: string;
  /** Kurzzusammenfassung der Handlung, 1–2 Absätze */
  summary: string[];
  /** Zentraler Wendepunkt der Handlung */
  isTurningPoint?: boolean;
  /** Aufklappbare Hintergrundinformation (Mythologie, Figuren, Orte) */
  sidenote?: { title: string; text: string };
  /** Schauplatz der Etappe */
  location?: string;
}

export interface JourneyContent {
  title: string;
  intro: string[];
  /** Beschriftung des Etappen-Zählers, z. B. "Etappe" */
  stageLabel: string;
  stages: JourneyStage[];
}

export interface CharacterRelation {
  /** id der Zielfigur */
  to: string;
  /** z. B. "Sohn von", "tötet", "Ehefrau von" */
  label: string;
}

export interface Character {
  id: string;
  name: string;
  epithet?: string;
  role: string;
  affiliation: Affiliation;
  works: WorkId[];
  description: string;
  relations: CharacterRelation[];
  /** Schlüssel eines generierten Porträts, falls vorhanden */
  portrait?: string;
}

export type GlossaryCategory = 'person' | 'place' | 'concept' | 'literary';

export interface GlossaryEntry {
  term: string;
  also?: string;
  definition: string;
  category: GlossaryCategory;
}

export type PlaceStatus = 'historical' | 'mythological' | 'disputed';

export interface Place {
  id: string;
  name: string;
  status: PlaceStatus;
  work: WorkId | 'both';
  description: string;
  /** Position auf der stilisierten Karte in Prozent (x: 0–100, y: 0–100) */
  coords?: { x: number; y: number };
  /** Reihenfolge auf der Route des Odysseus (1-basiert), falls Teil der Route */
  routeIndex?: number;
}

export interface ComparisonRow {
  aspect: string;
  iliad: string;
  odyssey: string;
}

export interface SourceEntry {
  title: string;
  detail: string;
  url?: string;
  kind: 'edition' | 'scholarship' | 'reference' | 'web';
}

export interface EpicPageContent {
  title: string;
  subtitle: string;
  heroAlt: string;
  sections: EpicSection[];
  themes: { title: string; intro: string; cards: ThemeCard[] };
  /** Bildunterschriften für Szenen-Illustrationen, nach Bildschlüssel */
  figures: Record<string, { caption: string; alt: string }>;
}

export interface HomeContent {
  heroTitle: string;
  heroSubtitle: string;
  heroAlt: string;
  ctaIliad: string;
  ctaOdyssey: string;
  introTitle: string;
  intro: string[];
  worksTitle: string;
  works: {
    iliad: { title: string; tagline: string; text: string; link: string };
    odyssey: { title: string; tagline: string; text: string; link: string };
  };
  contrastTitle: string;
  contrast: string[];
  contextTitle: string;
  context: string[];
  oralityTitle: string;
  orality: string[];
  exploreTitle: string;
  exploreCards: { id: string; title: string; text: string; to: string }[];
}

export interface CharactersContent {
  title: string;
  intro: string[];
  filterLabel: string;
  filters: Record<'all' | Affiliation, string>;
  workFilters: Record<'all' | WorkId, string>;
  relationsTitle: string;
  relationsIntro: string;
  relationsHint: string;
  characters: Character[];
}

export interface PlacesContent {
  title: string;
  intro: string[];
  mapTitle: string;
  mapNote: string;
  mapAlt: string;
  routeTitle: string;
  routeIntro: string;
  legend: Record<PlaceStatus, string>;
  statusExplanation: Record<PlaceStatus, string>;
  disclaimer: string;
  places: Place[];
}

export interface ComparisonContent {
  title: string;
  intro: string[];
  columnIliad: string;
  columnOdyssey: string;
  aspectLabel: string;
  rows: ComparisonRow[];
  conclusion: string[];
}

export interface GlossaryContent {
  title: string;
  intro: string;
  searchPlaceholder: string;
  noResults: string;
  categories: Record<GlossaryCategory | 'all', string>;
  entries: GlossaryEntry[];
}

export interface SourcesContent {
  title: string;
  intro: string[];
  note: string;
  kinds: Record<SourceEntry['kind'], string>;
  entries: SourceEntry[];
  imagesTitle: string;
  imagesNote: string;
}

export interface Content {
  home: HomeContent;
  iliad: EpicPageContent;
  odyssey: EpicPageContent;
  iliadJourney: JourneyContent;
  odysseyJourney: JourneyContent;
  characters: CharactersContent;
  places: PlacesContent;
  comparison: ComparisonContent;
  glossary: GlossaryContent;
  sources: SourcesContent;
}
