import { useEffect, useState } from "react";

export default function useFetchOnePiece(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!url) return;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => console.log(err.message));
  }, [url]);

  return { data };
}
