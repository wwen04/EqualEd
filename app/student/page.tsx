export default function StudentPage() {
  return (
    <main className="mt-16 mb-8 mx-16">
      <section>
        <div className="flex justify-between border-b-2 border-gray-200 pb-4">
          <h1 className="text-5xl font-bold font-mono">My Courses</h1>
          <div className="flex gap-2">
            <button
              type="button"
              className="p-3 rounded-full font-semibold bg-green-700 text-white"
            >
              Default
            </button>
            <button
              type="button"
              className="p-3 rounded-full font-semibold border-gray-200 border"
            >
              A - Z
            </button>
            <button
              type="button"
              className="p-3 rounded-full font-semibold border-gray-200 border"
            >
              List View
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
