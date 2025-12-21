const Table = () => {
  return (
    <div className="overflow-x-auto rounded-lg border bg-white">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 border-b">
              Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 border-b">
              Status
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 border-b">
              Date
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="text-gray-400">
            <td className="px-4 py-3 border-b">---</td>
            <td className="px-4 py-3 border-b">---</td>
            <td className="px-4 py-3 border-b">---</td>
          </tr>

          <tr className="text-gray-400">
            <td className="px-4 py-3 border-b">---</td>
            <td className="px-4 py-3 border-b">---</td>
            <td className="px-4 py-3 border-b">---</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
