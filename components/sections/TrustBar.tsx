import { Award, MapPin, Snowflake, Globe } from "lucide-react";

const items = [
  {
    icon: Award,
    label: "ISO 9001",
    sub: "Zertifiziert",
  },
  {
    icon: Snowflake,
    label: "Eigenproduktion",
    sub: "Trockeneis 24/7",
  },
  {
    icon: Globe,
    label: "Bundesweit",
    sub: "Berlin & überregional",
  },
  {
    icon: MapPin,
    label: "Zossen bei Berlin",
    sub: "Seit über 10 Jahren",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-steel-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-steel-100">
          {items.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-center gap-3 py-5 px-6"
            >
              <div className="w-9 h-9 rounded-lg bg-ice-100 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-ice-500" />
              </div>
              <div>
                <div className="text-sm font-bold text-navy-900">{label}</div>
                <div className="text-xs text-steel-500">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
