import React, { useEffect, useState, useMemo } from "react";
import { Icon } from "@iconify/react";

const URL =
  "https://owfetechtask.blob.core.windows.net/titledata/testdata.json";
const TitleListPage = ({ setView, setDetails }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [order, setOrder] = useState("");
  const [sortParameter, setSortParameter] = useState("");

  const pageSize = 5;

  const pageCount = useMemo(() => Math.ceil(data.length / pageSize), [data]);

  const fetchTitles = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchTitles();
  }, []);

  const handleNext = () => {
    if (currentPage < pageCount - 1)
      setCurrentPage((currentPage) => currentPage + 1);
  };
  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage((currentPage) => currentPage - 1);
  };

  const sortedData = useMemo(() => {
    const sortedList = [...data];
    return sortedList.sort((a, b) => {
      if (order === "ASC") {
        if (a[sortParameter] < b[sortParameter]) {
          return -1;
        } else {
          return 1;
        }
      } else if (order === "DESC") {
        if (a[sortParameter] < b[sortParameter]) {
          return 1;
        } else {
          return -1;
        }
      }
      return 0;
    });
  }, [data, order, sortParameter]);

  return (
    <div>
      <table>
        <thead>
          <tr
            onClick={() => {
              if (order === "") {
                setOrder("ASC");
              } else if (order === "ASC") {
                setOrder("DESC");
              } else if (order === "DESC") {
                setOrder("");
              }
            }}
          >
            <th>ID</th>
            <th onClick={() => setSortParameter("Title Number")}>
              Title number <Icon icon="mdi:sort-alphabetically" />
            </th>
            <th onClick={() => setSortParameter("Tenure")}>Class of Title</th>
          </tr>
        </thead>
        <tbody>
          {data?.length
            ? sortedData
                .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
                .map((data, index) => (
                  <tr
                    data-testid="title-row"
                    key={index}
                    onClick={() => {
                      setDetails(data);
                      setView("details");
                    }}
                  >
                    <td>{index}</td>
                    <td>{data["Title Number"]}</td>
                    <td>{data.Tenure}</td>
                  </tr>
                ))
            : null}
        </tbody>
      </table>
      <div className="buttons-wrapper">
        <button
          className="nav-button"
          id={currentPage === 0 ? "disabled" : ""}
          onClick={handlePrevious}
        >
          Previous Page
        </button>
        <button
          className="nav-button"
          id={currentPage === pageCount - 1 ? "disabled" : ""}
          onClick={handleNext}
        >
          Next page
        </button>
      </div>
    </div>
  );
};

export default TitleListPage;
