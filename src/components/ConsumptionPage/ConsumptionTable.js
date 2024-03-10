const ConsumptionTable = ({ categories }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700 text-black">
            <th className="px-4 py-2 dark:text-gray-200">Time</th>
            {categories.map((category) => (
              <th
                key={category.name}
                className="px-4 py-2 dark:text-gray-200 text-black"
              >
                {category.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {categories[0].data.map((_, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0
                  ? "bg-gray-100 dark:bg-gray-800"
                  : "bg-white dark:bg-gray-900"
              }`}
            >
              <td className="border px-4 py-2 dark:border-gray-700 dark:text-gray-200 text-black">{`${index}:00`}</td>
              {categories.map((category) => (
                <td
                  key={category.name + index}
                  className="border px-4 py-2 dark:border-gray-700 dark:text-gray-200 text-black"
                >
                  {category.data[index]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsumptionTable;
