import React from "react";

const Data = () => {
  const displayData = JSON.parse(localStorage.getItem("data")) || [];
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Mail</th>
        </tr>
        {displayData.map((data) => {
          return (
            <tr key={data.email}>
              <td>{data.mail}</td>
              <td>{data.name}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Data;
