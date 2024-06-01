import React from "react";
import Counter from "./Counter";
import { useEffect, useState } from "react";

import axios from "axios";

const apiUrl = "http://localhost:8000/api/orderlist";

const Cashbox = () => {
  let totalAmount, ordersCount;
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);

      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  if (data) {
    totalAmount = data.reduce((acc, obj) => acc + obj.amount, 0);

    ordersCount = data.length;
  }

  return (
    <div className="App">
      <div className="photo-profile">{/* <img  /> */}</div>
      {loading ? null : (
        <div className="numbers">
          <Counter number={ordersCount} title="Orders" />
          <Counter number={totalAmount} title="Funds" />
          <Counter number={13} title="Items" />
        </div>
      )}
    </div>
  );
};

export default Cashbox;
