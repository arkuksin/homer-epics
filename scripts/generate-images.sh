#!/bin/zsh
# Generiert alle Illustrationen der Website über die Codex CLI (image_generation).
# Aufruf: ./scripts/generate-images.sh [nur-diese-datei.png ...]
# Rohbilder landen in src/assets/images/raw/ und werden anschließend
# mit `npm run images:optimize` zu responsiven WebP-Dateien verarbeitet.

set -u
RAW_DIR="$(cd "$(dirname "$0")/.." && pwd)/src/assets/images/raw"
mkdir -p "$RAW_DIR"

STYLE="Modern editorial illustration inspired by ancient Greek red-figure vase painting, Minoan frescoes and mosaics. Flat rich colors on a warm sand-beige fresco background: terracotta, deep Aegean blue, lapis lazuli, olive green, wine red, bronze, with turquoise and saffron accents. Elegant dark contour lines, clear silhouettes in profile view like Greek pottery, subtle aged fresco texture. Historically inspired Bronze-Age / archaic Greek clothing, armor, ships and architecture. Strictly no text, no letters, no numbers, no watermark, no modern objects, no photorealism, no fantasy video-game armor. Well-composed with generous negative space."

typeset -A PROMPTS
PROMPTS=(
  hero-home "Wide panoramic landscape composition (1536x1024): an ancient blind poet with a lyre seated on marble steps by the Aegean sea at golden hour, before him a dreamlike panorama merging two worlds - on the left the burning walled city of Troy with bronze-clad warriors, on the right a lone Greek ship with a striped sail on deep blue waves. $STYLE"
  hero-iliad "Wide panoramic landscape composition (1536x1024): the plain of Troy at dawn in dramatic warm terracotta and wine-red tones, massed ranks of Greek warriors with tall spears and round decorated shields facing the great walls and gate of Troy, chariots, dust clouds, gods watching as large translucent figures in the sky. $STYLE"
  hero-odyssey "Wide panoramic landscape composition (1536x1024): a single Greek ship with oars and a striped square sail crossing a vast mysterious sea at night in deep blue and turquoise tones, huge constellations and a crescent moon above, distant islands with cypress trees, a sea monster's silhouette deep under the waves, Odysseus standing at the bow. $STYLE"
  achilles-hector "Wide landscape composition: the duel of Achilles and Hector before the high walls of Troy, two bronze-armored warriors with crested helmets, round shields and spears in dynamic profile poses like on a red-figure amphora, watching figures on the city walls, warm terracotta and wine-red palette with dust and dramatic sky. $STYLE"
  priam-achilles "Landscape composition, intimate night scene: old king Priam in simple robes kneeling and touching the hands of seated Achilles inside a warm lamplit war tent, Hermes' silhouette by the entrance, quiet grief and compassion, warm bronze and wine-red tones with deep blue night visible through the tent opening. $STYLE"
  trojan-horse "Landscape composition: the giant wooden horse of Troy on wheels being pulled through the city gate by celebrating Trojans at dusk, the horse built from planks with visible joints and a small hatch, city walls with towers, saffron and terracotta festive light with ominous deep-blue shadows. $STYLE"
  odysseus-polyphemus "Landscape composition: inside a cave, the giant one-eyed cyclops Polyphemus seated among sheep, while small Odysseus and his men offer him a large wine cup, a sharpened olive stake glowing in the fire, dramatic deep blue and bronze cave light. $STYLE"
  circe "Portrait-oriented composition: the enchantress Circe in a richly patterned robe standing in her marble hall raising a wand and a cup, pigs with the sad eyes of men at her feet, olive green and turquoise palette with saffron accents, mysterious elegant atmosphere. $STYLE"
  sirens "Landscape composition: Odysseus bound to the mast of his ship straining against the ropes while his crew rows with wax-sealed ears, two sirens as bird-bodied women with beautiful faces perched on rocky cliffs singing, bones at the base of the rocks, deep blue sea and pale dangerous light. $STYLE"
  scylla-charybdis "Landscape composition: a Greek ship steering through a narrow strait between two cliffs, on one side the six-headed serpent monster Scylla reaching down from her cave toward the rowers, on the other side the giant whirlpool Charybdis swallowing the sea, dramatic deep blue, turquoise and wine-red palette. $STYLE"
  return-ithaca "Landscape composition: Odysseus disguised as an old beggar in a rough cloak standing in his own great hall drawing an enormous bow, the arrow aimed through a row of twelve axe heads, arrogant suitors feasting unaware at long tables, Penelope's loom in the shadows, warm bronze and terracotta light. $STYLE"
  journey-map "Decorative stylized ancient map of the eastern Mediterranean and Aegean sea seen from above, painted like a fresco: stylized coastlines and islands in sand and olive tones on a deep Aegean blue sea, a dotted sailing route winding between small vignettes of a cyclops, sirens, a sorceress' island, a whirlpool and a windswept ship, tiny Troy citadel in the upper right and Ithaca island on the left, decorative meander border, compass rose in one corner. Absolutely no text or letters anywhere. $STYLE"
  portrait-achilles "Square portrait: Achilles, a young powerful Greek hero in profile view like on a red-figure vase, bronze crested helmet pushed back showing golden hair, ornate cuirass, intense mournful expression, terracotta and bronze palette on sand background with a thin meander ring framing the portrait. $STYLE"
  portrait-hector "Square portrait: Hector, a noble dark-bearded Trojan prince in profile, bronze helmet with horsehair crest under his arm, dignified and burdened expression, city wall of Troy softly in the background, wine-red and bronze palette on sand background with a thin meander ring framing the portrait. $STYLE"
  portrait-odysseus "Square portrait: Odysseus, a weathered clever Greek hero in profile with short curled beard, simple traveler's cloak pinned at the shoulder and a conical pilos cap, thoughtful cunning gaze toward the sea, deep blue and turquoise palette on sand background with a thin meander ring framing the portrait. $STYLE"
  portrait-penelope "Square portrait: Penelope, a graceful queen in profile seated at her loom with fine woven cloth, elegant layered chiton and veil, patient melancholic expression, olive and wine-red palette on sand background with a thin meander ring framing the portrait. $STYLE"
  portrait-athena "Square portrait: the goddess Athena in profile with a crested helmet, aegis with a small gorgon face, a small owl perched on her shoulder and a spear, wise commanding expression, lapis lazuli and bronze palette with saffron accents on sand background with a thin meander ring framing the portrait. $STYLE"
  portrait-zeus "Square portrait: Zeus, the mature bearded king of the gods in profile enthroned with a lightning bolt in hand and an eagle beside him, majestic calm expression, deep blue and bronze palette with saffron accents on sand background with a thin meander ring framing the portrait. $STYLE"
)

ORDER=(hero-home hero-iliad hero-odyssey achilles-hector priam-achilles trojan-horse odysseus-polyphemus circe sirens scylla-charybdis return-ithaca journey-map portrait-achilles portrait-hector portrait-odysseus portrait-penelope portrait-athena portrait-zeus)

generate() {
  local name="$1"
  local out="$RAW_DIR/$name.png"
  if [[ -s "$out" ]]; then
    echo "[skip] $name.png existiert bereits"
    return 0
  fi
  echo "[gen ] $name.png ..."
  local tmpdir
  tmpdir="$(mktemp -d)"
  codex exec --skip-git-repo-check --ephemeral --sandbox workspace-write -C "$tmpdir" \
    "Use your image generation tool to create ONE image and save it as $name.png in the current working directory. Prompt: ${PROMPTS[$name]}" \
    > "$RAW_DIR/$name.log" 2>&1
  if [[ -s "$tmpdir/$name.png" ]]; then
    mv "$tmpdir/$name.png" "$out"
    echo "[ ok ] $name.png"
  else
    # Fallback: PNG im Tempordner suchen
    local found
    found="$(find "$tmpdir" -name '*.png' -size +10k | head -1)"
    if [[ -n "$found" ]]; then
      mv "$found" "$out"
      echo "[ ok ] $name.png (umbenannt)"
    else
      echo "[FAIL] $name.png – siehe $RAW_DIR/$name.log"
    fi
  fi
  rm -rf "$tmpdir"
}

TARGETS=("$@")
if [[ ${#TARGETS[@]} -eq 0 ]]; then
  TARGETS=("${ORDER[@]}")
fi

# Begrenzte Parallelität: 3 gleichzeitige Generierungen
active=0
for name in "${TARGETS[@]}"; do
  name="${name%.png}"
  generate "$name" &
  active=$((active + 1))
  if [[ $active -ge 3 ]]; then
    wait
    active=0
  fi
done
wait
echo "Fertig. Rohbilder in $RAW_DIR"
