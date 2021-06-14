const table = (data) => {
  try {
    const title = flatten("title", data);
    const description = flatten("description", data);
    const date = flatten("date", data);
    const time = flatten("time", data);

    let arr = [];

    if (title.length > 0) {
      for (let i = 0; i < title.length; i++) {
        arr.push(
          <tr key={i}>
            <td className="title">{title[i]}</td>
            <td className="description">{description[i]}</td>
            <td className="date">{date[i]}</td>
            <td className="time">{time[i]}</td>
          </tr>
        );
      }
    }
    return arr;
  } catch (error) {
    console.error(error);
  }
};

export default table;

const flatten = (field, obj) => {
  const arr = obj.map((i) => i[field]);
  return arr;
};
