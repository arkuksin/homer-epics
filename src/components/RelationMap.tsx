import { useMemo, useState } from 'react';
import type { Character } from '../content/types';

/** Feste, kuratierte Positionen der Figuren auf der Beziehungskarte (viewBox 900×720). */
const POSITIONS: Record<string, { x: number; y: number }> = {
  zeus: { x: 450, y: 62 },
  hera: { x: 320, y: 100 },
  athene: { x: 565, y: 105 },
  apollon: { x: 205, y: 70 },
  aphrodite: { x: 90, y: 110 },
  poseidon: { x: 700, y: 68 },
  agamemnon: { x: 148, y: 225 },
  menelaos: { x: 75, y: 330 },
  achilleus: { x: 290, y: 265 },
  patroklos: { x: 415, y: 320 },
  ajax: { x: 180, y: 425 },
  helena: { x: 330, y: 430 },
  hektor: { x: 540, y: 275 },
  priamos: { x: 668, y: 215 },
  paris: { x: 520, y: 415 },
  andromache: { x: 680, y: 350 },
  odysseus: { x: 360, y: 540 },
  penelope: { x: 205, y: 585 },
  telemachos: { x: 425, y: 640 },
  laertes: { x: 280, y: 680 },
  eumaios: { x: 520, y: 690 },
  polyphem: { x: 700, y: 500 },
  kirke: { x: 820, y: 575 },
  kalypso: { x: 830, y: 445 },
  nausikaa: { x: 745, y: 655 },
  antinoos: { x: 68, y: 500 },
  eurymachos: { x: 88, y: 660 },
};

const AFFILIATION_COLORS: Record<string, string> = {
  greek: '#d8713f',
  trojan: '#c05f6b',
  god: '#dfa32e',
  ithaca: '#3aa9a0',
  other: '#95a061',
};

interface Edge {
  a: string;
  b: string;
  label: string;
}

export function RelationMap({
  characters,
  hint,
}: {
  characters: Character[];
  hint: string;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const nodes = useMemo(
    () => characters.filter((c) => POSITIONS[c.id]),
    [characters],
  );

  const edges = useMemo(() => {
    const seen = new Map<string, Edge>();
    for (const c of nodes) {
      for (const rel of c.relations) {
        if (!POSITIONS[rel.to]) continue;
        const key = [c.id, rel.to].sort().join('|');
        if (!seen.has(key)) seen.set(key, { a: c.id, b: rel.to, label: rel.label });
      }
    }
    return [...seen.values()];
  }, [nodes]);

  const toggle = (id: string) => setSelected((cur) => (cur === id ? null : id));

  const isEdgeActive = (e: Edge) =>
    selected !== null && (e.a === selected || e.b === selected);

  const connectedIds = useMemo(() => {
    if (!selected) return null;
    const set = new Set<string>([selected]);
    for (const e of edges) {
      if (e.a === selected) set.add(e.b);
      if (e.b === selected) set.add(e.a);
    }
    return set;
  }, [selected, edges]);

  return (
    <div className="relation-map">
      <svg viewBox="0 0 900 720" role="img" aria-label={hint}>
        {edges.map((e) => {
          const pa = POSITIONS[e.a];
          const pb = POSITIONS[e.b];
          const active = isEdgeActive(e);
          return (
            <g key={`${e.a}-${e.b}`}>
              <line
                className={`relation-edge${active ? ' is-active' : selected ? ' is-dim' : ''}`}
                x1={pa.x}
                y1={pa.y}
                x2={pb.x}
                y2={pb.y}
                strokeWidth={1.4}
              />
              {active && (
                <text
                  className="relation-edge-label"
                  x={(pa.x + pb.x) / 2}
                  y={(pa.y + pb.y) / 2 - 6}
                  textAnchor="middle"
                >
                  {e.label}
                </text>
              )}
            </g>
          );
        })}
        {nodes.map((c) => {
          const pos = POSITIONS[c.id];
          const dim = connectedIds !== null && !connectedIds.has(c.id);
          const isSel = selected === c.id;
          return (
            <g
              key={c.id}
              className={`relation-node${dim ? ' is-dim' : ''}`}
              transform={`translate(${pos.x}, ${pos.y})`}
              role="button"
              tabIndex={0}
              aria-pressed={isSel}
              aria-label={c.name}
              onClick={() => toggle(c.id)}
              onKeyDown={(ev) => {
                if (ev.key === 'Enter' || ev.key === ' ') {
                  ev.preventDefault();
                  toggle(c.id);
                }
              }}
            >
              <circle
                r={isSel ? 15 : 11}
                fill={AFFILIATION_COLORS[c.affiliation]}
                stroke={isSel ? '#ffd98a' : 'rgba(14,26,38,0.6)'}
                strokeWidth={isSel ? 3 : 1.5}
              />
              <text y={-18} textAnchor="middle">
                {c.name}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="relation-map__hint">{hint}</p>
    </div>
  );
}
