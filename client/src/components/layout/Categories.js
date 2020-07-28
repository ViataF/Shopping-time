import React from "react";

const Categories = () => {
  return (
    <div className="container categories">
      <h2 className="categories">Catergories</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <a href="./api/places/all">Catergories</a>
            </td>
            <td>Smith</td>
            <td>50</td>
          </tr>

          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
