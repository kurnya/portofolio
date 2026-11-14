export default function Marquee({ items }) {
  const loop = [...items, ...items];

  return (
    <div className="marq" aria-hidden="true">
      <div className="marq-track">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
