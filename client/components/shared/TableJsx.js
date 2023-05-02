import React from "react";

const TableJsx = ({ name, email, key }) => {
  return (
    <tbody key={key}>
      <tr className="bg-white border-b  dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
          {name}
        </th>
        <td className="px-6 py-4">{email}</td>
      </tr>
    </tbody>
  );
};

export default TableJsx;
