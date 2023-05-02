import React from "react";

const TableJsx = ({ name, email }) => {
  return (
    <tbody>
      <tr class="bg-white border-b  dark:border-gray-700">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
          {name}
        </th>
        <td class="px-6 py-4">{email}</td>
      </tr>
    </tbody>
  );
};

export default TableJsx;
