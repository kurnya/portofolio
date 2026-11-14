export default function SectionHeading({ index, label, children, aside }) {
  return (
    <div className="sec-head" data-reveal="">
      <div>
        <div className="sec-idx mono">
          <b>{index}</b>— {label}
        </div>
        <h2>{children}</h2>
      </div>
      {aside}
    </div>
  );
}
