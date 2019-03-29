import React, { useState, useEffect } from "react";

interface IItem {
  id: number;
  name: string;
}

const iterate = (items: IItem[]) => {
  if (items.length < 20) {
    const n = items.length;
    return items.concat({ id: n, name: n.toString() });
  } else {
    return items.slice(1).concat(items[0]);
  }
};

function List() {
  // Liste d'items
  const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => {
    // componentDidMount
    const intervalId = setInterval(() => {
      setItems(iterate);
    }, 100);
    return () => {
      // componentWillUnmount
      clearInterval(intervalId);
    };
  }, []);

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default List;
