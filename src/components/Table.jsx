const Table = ({ sat }) => {
  console.log(sat);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>{sat[0].name}</td>
          <td>{sat[0].type}</td>
          <td>{sat[0].launchDate}</td>
          {sat[0].operational == true ? <td>Active</td> : <td>Inactive</td>}
        </tr> */}
        {sat.map((data) => {
          return (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              {sat.operational === true ? <td>Active</td> : <td>Inactive</td>}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
