

import { data } from "autoprefixer";
import React, { useContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import CarForm from "./CarForm";
import CarList from "./CarList";
import {CarContext} from './CarContext'
const cars = [
  {
    id: uuidv4(),
    name: "Tesla Model S",
    model: "2023",
    brand: "Tesla",
    price: "80000",
    engineType: "Electric",
  },
  {
    id: uuidv4(),
    name: "BMW 3 Series",
    model: "2022",
    brand: "BMW",
    price: "45000",
    engineType: "Petrol",
  },
  {
    id: uuidv4(),
    name: "Audi A6",
    model: "2021",
    brand: "Audi",
    price: "50000",
    engineType: "Diesel",
  },
  {
    id: uuidv4(),
    name: "Mercedes-Benz C-Class",
    model: "2023",
    brand: "Mercedes-Benz",
    price: "60000",
    engineType: "Hybrid",
  },
];

function Car() {

  const {heading}=useContext(CarContext)
  const [carData, setCarData] = useState(cars);
  const [newData, setNewData] = useState({
    id: "",
    name: "",
    model: "",
    brand: "",
    price: "",
    engineType: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  // const [editIndex, setEditIndex] = useState(null);

  const handleNewData = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleAddData = (e) => {
    e.preventDefault();
    if (
      !newData.name ||
      !newData.brand ||
      !newData.price ||
      !newData.model ||
      !newData.id ||
      !newData.engineType
    )
      return;
    else {
      if (isEdit) {
        // const updatedData = [...carData];
        // updatedData[editIndex] = newData;
        // setCarData(updatedData);
        // setIsEdit(false);
        const dataaa = carData.map((item) =>
          item.id === newData.id ? { ...newData } : item
        );
        setCarData(dataaa);
        setIsEdit(false);
        setNewData({
          id: "",
          name: "",
          model: "",
          brand: "",
          price: "",
          engineType: "",
        });
      } else {
        setCarData([...carData, { ...newData, id: uuidv4() }]);
        setNewData({
          id: "",
          name: "",
          model: "",
          brand: "",
          price: "",
          engineType: "",
        });
      }
    }
  };

  const handleRemove = (carId) => {
    const temp = carData.filter((car) => car.id !== carId);
    setCarData(temp);
  };

  const handleEdit = (index) => {
    setIsEdit(true);

    const update = carData.find((item) => item.id === index);
    setNewData(update);
  };

  return (
    <div
      className="container mt-5"
      style={{ backgroundImage: "url(car.jpeg)", padding: "30px" }}
    >
      <h1 className="text-center mb-4">{heading}</h1>
    {/*form*/}
    <CarForm handleAddData={handleAddData} newData={newData} handleNewData={handleNewData} isEdit={isEdit}  setCarData={setCarData}/>
      {/* Car List */}

      <div className="row" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"10px"}}>
        {carData.map((car) => (
         <CarList key={car.id} car={car} handleRemove={handleRemove} handleEdit={handleEdit}/>
        ))}
      </div>
    </div>
  );
}

export default Car;


