export default function HalfBanner({
  photo,
  text,
}: {
  photo: string;
  text: string;
}) {
  return (
    <div className="HalfBanner" style={{ backgroundImage: `url(${photo})` }}>
      <div className="HalfBanner-overlay">
        <div className="HalfBanner-content">
          <div className="HalfBanner-title-container">
            <h1 className="HalfBanner-title">{text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
