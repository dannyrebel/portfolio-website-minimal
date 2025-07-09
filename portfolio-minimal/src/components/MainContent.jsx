export default function MainContent() {
  return (
    <div className="flex-1 overflow-y-auto p-8 h-screen">
      <h2 className="text-3xl font-semibold mb-4">Main Content</h2>
      <div className="space-y-4">
        {Array.from({ length: 50 }).map((_, i) => (
          <p key={i} className="text-gray-700">
            Scrollable content line {i + 1}
          </p>
        ))}
      </div>
    </div>
  );
}
