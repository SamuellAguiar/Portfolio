export default function SectionHeading({ number, label, title }) {
  return <div className="section-heading"><p className="eyebrow">{number} · {label}</p><h2>{title}</h2></div>
}
