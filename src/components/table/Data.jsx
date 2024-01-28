function Data({ data }) {
  let svg = <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>;
  return (
    <tr>
      <td>{data.title}</td>
      <td className="text-start">{data.options[0] == 0 ? "" : svg}</td>
      <td className="text-start">{data.options[1] == 0 ? "" : svg}</td>
      <td className="text-start">{data.options[2] == 0 ? "" : svg}</td>
    </tr>
  );
}

export default Data;
