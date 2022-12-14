import React from "react";

const Table = ({ newData }) => {
  return (
    <>
      {newData && (
        <table className="w-75 text-center table">
          <thead className="w-50">
            <tr>
              <th className="border border-2">Name</th>
              <th className="border border-2">Divition</th>
            </tr>
          </thead>
          <tbody>
            {newData?.map((data, id) => {
              return (
                <tr key={id}>
                  <td className="border border-2">{data?.name}</td>
                  <td className="border border-2">{data?.divition}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
