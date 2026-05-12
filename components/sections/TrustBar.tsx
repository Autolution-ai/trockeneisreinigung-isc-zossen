const items = [
  "ISO 9001 Zertifiziert",
  "Eigenproduktion Trockeneis",
  "Bundesweit tätig",
  "IceTech-Partner",
  "KAESER Kompressoren",
  "Trockeneis 24 / 7",
  "Maschinenverkauf & Vermietung",
  "Über 10 Jahre Erfahrung",
];

export default function TrustBar() {
  const track = [...items, ...items];

  return (
    <div className="bg-navy-950 border-y border-white/6 overflow-hidden py-3">
      <div className="flex animate-marquee">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-5 whitespace-nowrap text-xs font-semibold text-steel-400 uppercase tracking-widest px-8"
          >
            <span className="w-1 h-1 rounded-full bg-ice-500 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
