import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Table from "../components/Table";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Home() {
  const [filterData, setFilterData] = useState("");
  const [newData, setNewData] = useState([]);
  const router = useRouter();
  const { dataLogin } = useSelector((globalStore) => globalStore.authReducer);

  const dataEmployee = [
    {
      name: "Arsyad",
      divition: "IT",
    },
    {
      name: "Jayden",
      divition: "Pemasaran",
    },
    {
      name: "Justin",
      divition: "Produksi",
    },
    {
      name: "Raisa",
      divition: "Umum",
    },
    {
      name: "Budi",
      divition: "Keuangan",
    },
    {
      name: "Rizky",
      divition: "Umum",
    },
    {
      name: "Lily",
      divition: "Produksi",
    },
    {
      name: "Fauzan",
      divition: "Pemasaran",
    },
    {
      name: "Nayla",
      divition: "Produksi",
    },
    {
      name: "Arsyad",
      divition: "IT",
    },
    {
      name: "Jayden",
      divition: "Pemasaran",
    },
    {
      name: "Justin",
      divition: "Produksi",
    },
    {
      name: "Raisa",
      divition: "Umum",
    },
    {
      name: "Budi",
      divition: "Keuangan",
    },
  ];

  const checkLogin = () => {
    if (dataLogin === null) router.push("/login");
  };

  useEffect(() => {
    setNewData(dataEmployee);
    checkLogin();
  }, [dataLogin]);

  useEffect(() => {
    checkLogin();
  }, []);

  const handleFilterData = () => {
    if (filterData === "") {
      return setNewData(dataEmployee);
    } else {
      setNewData(
        dataEmployee?.filter((data) =>
          data?.name.toLowerCase().includes(filterData.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center mb-3">
      <Search
        setFilterData={setFilterData}
        filterData={filterData}
        handleFilterData={handleFilterData}
      />
      <Table newData={newData} />
    </div>
  );
}
