import { useState } from "react";
import { useQuery } from "react-query";
import Orbital from "./Orbital";
import Phase from "./Phase";
import Physical from "./Physical";

export default function Data() {
  const [data, setData] = useState();
  async function getDatsa() {
    fetch(process.env.REACT_APP_URL, {
      headers: {
        [process.env.REACT_APP_KEY]: process.env.REACT_APP_VALUE,
        [process.env.REACT_APP_HOST]: process.env.REACT_APP_HOST_KEY,
      },
    })
      .then((r) => r.json())
      .then((d) => {
        setData(() => d);
      });
  }

  const { error, isError, isLoading } = useQuery("datsa", getDatsa, {
    refetchInterval: 2000,
  });

  return (
    <div className="data">
      {data && (
        <>
          <Physical />
          <Orbital />
          <Phase data={data} />
        </>
      )}
    </div>
  );
}
