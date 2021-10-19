import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    data.forEach((td) => {
      if (td.id === id) {
        setItem(td);
      }
    });
}, [data]);
  // let ExactItem = data.filter(td => td.id === _id);
  // console.log(ExactItem)



  return (
    <div className="my-5">
      <Container>
        <div className="card">
          <img src={item?.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h1 className="card-title">{item?.name}</h1>
            <p className="card-text">{item?.description}</p>
            <Link to="/services">
              <Button variant="dark">Back to all Services</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetails;
