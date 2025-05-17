export default function IdeaCard({ idea, backgroundColor }) {
  return (
    <div
      className={`p-4 rounded-md text-black mb-4`}
      style={{ backgroundColor }}
    >
      <p>{idea}</p>
    </div>
  );
}
