export default function PixelAvatar({ size = 200 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: "pixelated" }}
    >
      {/* Background */}
      <rect width="200" height="200" fill="#FFFFFF" />

      {/* ── FLOOR ── */}
      <rect x="0" y="190" width="200" height="10" fill="#DDDDDD" />
      <rect x="0" y="190" width="200" height="2" fill="#1A1A1A" />

      {/* ── DESK ── */}
      <rect x="20" y="148" width="176" height="14" fill="#DDDDDD" />
      <rect x="20" y="148" width="176" height="3" fill="#1A1A1A" />
      <rect x="20" y="159" width="176" height="3" fill="#1A1A1A" />
      {/* Desk legs */}
      <rect x="26" y="162" width="8" height="28" fill="#888888" />
      <rect x="26" y="188" width="8" height="4" fill="#1A1A1A" />
      <rect x="180" y="162" width="8" height="28" fill="#888888" />
      <rect x="180" y="188" width="8" height="4" fill="#1A1A1A" />

      {/* ── CHAIR ── */}
      {/* Chair back */}
      <rect x="12" y="80" width="24" height="68" fill="#444444" />
      <rect x="12" y="80" width="24" height="3" fill="#1A1A1A" />
      <rect x="12" y="80" width="3" height="68" fill="#1A1A1A" />
      <rect x="33" y="80" width="3" height="68" fill="#1A1A1A" />
      {/* Chair back cushion detail */}
      <rect x="16" y="85" width="16" height="18" fill="#555555" />
      <rect x="16" y="108" width="16" height="18" fill="#555555" />
      {/* Chair seat */}
      <rect x="12" y="132" width="72" height="16" fill="#444444" />
      <rect x="12" y="132" width="72" height="3" fill="#1A1A1A" />
      <rect x="12" y="145" width="72" height="3" fill="#1A1A1A" />
      <rect x="12" y="132" width="3" height="16" fill="#1A1A1A" />
      <rect x="81" y="132" width="3" height="16" fill="#1A1A1A" />
      {/* Seat cushion */}
      <rect x="16" y="136" width="64" height="8" fill="#555555" />
      {/* Armrest */}
      <rect x="33" y="110" width="48" height="6" fill="#222222" />
      <rect x="33" y="110" width="48" height="2" fill="#1A1A1A" />
      {/* Chair legs */}
      <rect x="16" y="148" width="7" height="40" fill="#888888" />
      <rect x="74" y="148" width="7" height="40" fill="#888888" />
      <rect x="13" y="185" width="13" height="5" fill="#1A1A1A" />
      <rect x="71" y="185" width="13" height="5" fill="#1A1A1A" />

      {/* ── MONITOR ── */}
      {/* Bezel */}
      <rect x="128" y="70" width="66" height="76" fill="#2C2C2C" />
      <rect x="128" y="70" width="66" height="3" fill="#1A1A1A" />
      <rect x="128" y="70" width="3" height="76" fill="#1A1A1A" />
      <rect x="191" y="70" width="3" height="76" fill="#1A1A1A" />
      <rect x="128" y="143" width="66" height="3" fill="#1A1A1A" />
      {/* Screen */}
      <rect x="133" y="75" width="56" height="62" fill="#111111" />
      {/* Code lines — varied grays for contrast */}
      <rect x="137" y="81" width="24" height="3" fill="#FFFFFF" />
      <rect x="137" y="88" width="36" height="3" fill="#BBBBBB" />
      <rect x="141" y="95" width="28" height="3" fill="#BBBBBB" />
      <rect x="137" y="102" width="32" height="3" fill="#EEEEEE" />
      <rect x="137" y="109" width="20" height="3" fill="#FFFFFF" />
      <rect x="141" y="116" width="30" height="3" fill="#999999" />
      <rect x="137" y="123" width="25" height="3" fill="#BBBBBB" />
      <rect x="141" y="130" width="18" height="3" fill="#FFFFFF" />
      {/* Cursor */}
      <rect x="160" y="130" width="3" height="7" fill="#FFFFFF" />
      {/* Power LED */}
      <rect x="156" y="141" width="4" height="3" fill="#AAAAAA" />
      {/* Stand neck */}
      <rect x="154" y="146" width="12" height="5" fill="#3C3C3C" />
      <rect x="154" y="146" width="12" height="2" fill="#1A1A1A" />
      {/* Stand base */}
      <rect x="140" y="148" width="40" height="4" fill="#3C3C3C" />
      <rect x="140" y="148" width="40" height="2" fill="#1A1A1A" />

      {/* ── KEYBOARD ── */}
      <rect x="96" y="148" width="40" height="7" fill="#3C3C3C" />
      <rect x="96" y="148" width="40" height="2" fill="#1A1A1A" />
      <rect x="96" y="153" width="40" height="2" fill="#1A1A1A" />
      {/* Keys */}
      <rect x="99" y="149" width="5" height="3" fill="#666666" />
      <rect x="106" y="149" width="5" height="3" fill="#666666" />
      <rect x="113" y="149" width="5" height="3" fill="#666666" />
      <rect x="120" y="149" width="5" height="3" fill="#666666" />
      <rect x="127" y="149" width="5" height="3" fill="#666666" />
      {/* Mouse */}
      <rect x="144" y="149" width="10" height="7" fill="#3C3C3C" />
      <rect x="144" y="149" width="10" height="2" fill="#1A1A1A" />
      <rect x="148" y="149" width="2" height="5" fill="#1A1A1A" />

      {/* ── PERSON ── */}

      {/* Shoes */}
      <rect x="36" y="180" width="26" height="8" fill="#1A1A1A" />
      <rect x="58" y="180" width="26" height="8" fill="#1A1A1A" />
      <rect x="40" y="181" width="8" height="3" fill="#2C2C2C" />
      <rect x="62" y="181" width="8" height="3" fill="#2C2C2C" />

      {/* Lower legs */}
      <rect x="42" y="148" width="16" height="34" fill="#333333" />
      <rect x="62" y="148" width="16" height="34" fill="#333333" />

      {/* Upper legs (horizontal on seat) */}
      <rect x="42" y="130" width="50" height="18" fill="#333333" />
      <rect x="42" y="130" width="50" height="2" fill="#222222" />

      {/* Body — suit jacket */}
      <rect x="40" y="94" width="56" height="38" fill="#333333" />

      {/* Pocket square */}
      <rect x="44" y="98" width="10" height="6" fill="#FFFFFF" />
      <rect x="44" y="98" width="10" height="2" fill="#DDDDDD" />

      {/* Lapels */}
      <rect x="60" y="94" width="8" height="22" fill="#222222" />
      <rect x="76" y="94" width="8" height="22" fill="#222222" />

      {/* Shirt */}
      <rect x="68" y="94" width="8" height="32" fill="#FFFFFF" />

      {/* Shirt collar */}
      <rect x="62" y="94" width="4" height="6" fill="#FFFFFF" />
      <rect x="78" y="94" width="4" height="6" fill="#FFFFFF" />

      {/* Tie — dark gray */}
      <rect x="70" y="96" width="4" height="26" fill="#1A1A1A" />
      <rect x="69" y="94" width="6" height="5" fill="#2C2C2C" />

      {/* Jacket buttons */}
      <rect x="71" y="106" width="2" height="2" fill="#222222" />
      <rect x="71" y="112" width="2" height="2" fill="#222222" />

      {/* Left arm (behind, toward keyboard) */}
      <rect x="80" y="100" width="14" height="10" fill="#222222" />
      <rect x="86" y="109" width="12" height="10" fill="#222222" />
      <rect x="86" y="118" width="10" height="7" fill="#EEEEEE" />
      <rect x="88" y="123" width="6" height="4" fill="#EEEEEE" />

      {/* Right arm (front, toward keyboard) */}
      <rect x="88" y="98" width="14" height="10" fill="#333333" />
      <rect x="96" y="107" width="12" height="12" fill="#333333" />
      <rect x="96" y="117" width="10" height="8" fill="#EEEEEE" />
      <rect x="100" y="123" width="6" height="4" fill="#EEEEEE" />

      {/* Neck */}
      <rect x="66" y="86" width="12" height="10" fill="#EEEEEE" />

      {/* ── HEAD (profile facing right) ── */}
      <rect x="52" y="50" width="40" height="38" fill="#EEEEEE" />

      {/* Hair — top & back */}
      <rect x="52" y="50" width="40" height="12" fill="#1A1A1A" />
      <rect x="52" y="50" width="8" height="30" fill="#1A1A1A" />
      {/* Hair highlight */}
      <rect x="56" y="51" width="32" height="6" fill="#2C2C2C" />

      {/* Ear */}
      <rect x="47" y="66" width="7" height="9" fill="#DDDDDD" />
      <rect x="47" y="68" width="3" height="5" fill="#CCCCCC" />

      {/* Eyebrow */}
      <rect x="74" y="62" width="10" height="3" fill="#1A1A1A" />

      {/* Eye */}
      <rect x="75" y="66" width="9" height="6" fill="#1A1A1A" />
      <rect x="77" y="67" width="4" height="3" fill="#FFFFFF" />
      <rect x="78" y="68" width="2" height="2" fill="#333333" />
      <rect x="79" y="67" width="2" height="1" fill="#FFFFFF" />

      {/* Nose */}
      <rect x="84" y="72" width="5" height="5" fill="#DDDDDD" />
      <rect x="87" y="75" width="3" height="3" fill="#CCCCCC" />

      {/* Mouth */}
      <rect x="76" y="80" width="10" height="3" fill="#AAAAAA" />
      <rect x="82" y="80" width="4" height="2" fill="#1A1A1A" />

      {/* ── PIXEL BORDER ── */}
      <rect
        x="1.5"
        y="1.5"
        width="197"
        height="197"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="3"
      />
    </svg>
  );
}
