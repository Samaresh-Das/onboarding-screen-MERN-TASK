import React, { Fragment, useEffect, useState } from "react";
import { linkSite } from "../linkSite";
import TableJsx from "./TableJsx";

const Table = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(`${linkSite}admin/getData`);
      const data = await response.json();
      console.log(data);
      setUsers(data.users);
    };
    getUsers();
  }, []);

  return (
    <Fragment>
      <div class="relative overflow-x-auto">
        <table class="w-auto text-sm text-center mx-auto">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                E-mail
              </th>
            </tr>
          </thead>
          {users.length > 0 &&
            users.map((user, i) => (
              <TableJsx email={user.email} name={user.name} key={i} />
            ))}
        </table>
      </div>
    </Fragment>
  );
};

export default Table;
