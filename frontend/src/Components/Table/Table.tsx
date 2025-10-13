interface Props {
  config: any;
  data: any;
}

const Table = ({ config, data }: Props) => {
  const renderedHeader = (
    <tr>
      {config.map((col: any) => (
        <th
          key={col.label}
          className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          {col.label}
        </th>
      ))}
    </tr>
  );

  const renderedRows = data.map((company: any) => (
    <tr key={company.cik}>
      {config.map((col: any) => (
        <td key={col.label} className="p-3">
          {col.render(company)}
        </td>
      ))}
    </tr>
  ));

  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>{renderedHeader}</thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
