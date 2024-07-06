"use client";

function ResourcesPage() {
  return (
    <main className="text-black p-4">
      <h1 className="text-2xl font-bold mb-4">Resources</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pages
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created On
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Owner
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            <tr className="hover:bg-gray-200">
              <td className="px-6 py-4 whitespace-nowrap">
                FundamentalsofPython.pdf
              </td>
              <td className="px-6 py-4 whitespace-nowrap">24</td>
              <td className="px-6 py-4 whitespace-nowrap">12/05/2024</td>
              <td className="px-6 py-4 whitespace-nowrap">Chua Hock Seng</td>
            </tr>
            <tr className="hover:bg-gray-200">
              <td className="px-6 py-4 whitespace-nowrap">
                DataStructures.pdf
              </td>
              <td className="px-6 py-4 whitespace-nowrap">240</td>
              <td className="px-6 py-4 whitespace-nowrap">16/05/2024</td>
              <td className="px-6 py-4 whitespace-nowrap">Addison Wesley</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default ResourcesPage;
