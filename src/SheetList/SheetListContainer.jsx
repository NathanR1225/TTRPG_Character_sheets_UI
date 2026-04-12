import axios from "axios";
import { SERVER_LOCATION } from "../constants.js";
import { useState, useEffect, useMemo } from "react";

export default function SheetListContainer({ width }) {
  const [sheets, setSheets] = useState([]);

  const getSheetList = () => {
    return axios.get(`${SERVER_LOCATION}/getSheetList`).then((res) => {
      console.log("res", res);

      setSheets(res.data);
    });
  };

  useEffect(() => {
    getSheetList();
  }, []);

  const displaySheets = useMemo(() => {
    let out = [];
    for (let i = 0; i < sheets.length; i++) {
      const curr = sheets[i];

      out.push(
        <div style={{ backgroundColor: "#eeeeee" }}>
          <div>{curr.Name}</div>
        </div>,
      );
    }
    return out;
  }, [sheets]);

  return (
    <div style={{ width: `${width}px`, height: "100vh" }}>
      <div style={{ height: "100px" }}>header</div>
      <div style={{height:'calc(100vh - 200px)'}}>{displaySheets}</div>
      <div style={{ height: "100px" }}>footer</div>
    </div>
  );
}
