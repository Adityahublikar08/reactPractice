/* eslint-disable react/prop-types */
import React from 'react'

function CarForm({isEdit,setCarData,handleNewData,handleAddData,newData}) {
  return (
    <div>
       <form onSubmit={handleAddData} className="row g-3 mb-4">
        {/* First Row: Name and Car ID */}
        <div className="col-md-6">
          <label htmlFor="name" className="form-label" style={{ color: "red" }}>
            Car Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={newData.name}
            onChange={handleNewData}
            placeholder="Enter car name"
            style={{ backgroundColor: "" }}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="id" className="form-label" style={{ color: "red" }}>
            Car ID
          </label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={newData.id}
            onChange={handleNewData}
            placeholder="Enter car ID"
          />
        </div>

        {/* Second Row: Model and Brand */}
        <div className="col-md-6">
          <label
            htmlFor="model"
            className="form-label"
            style={{ color: "red" }}
          >
            Car Model
          </label>
          <input
            type="text"
            className="form-control"
            name="model"
            value={newData.model}
            onChange={handleNewData}
            placeholder="Enter car model"
          />
        </div>
        <div className="col-md-6">
          <label
            htmlFor="brand"
            className="form-label"
            style={{ color: "red" }}
          >
            Car Brand
          </label>
          <input
            type="text"
            className="form-control"
            name="brand"
            value={newData.brand}
            onChange={handleNewData}
            placeholder="Enter car brand"
          />
        </div>

        {/* Third Row: Price and Engine Type */}
        <div className="col-md-6">
          <label
            htmlFor="price"
            className="form-label"
            style={{ color: "red" }}
          >
            Price
          </label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={newData.price}
            onChange={handleNewData}
            placeholder="Enter car price"
          />
        </div>
        <div className="col-md-6">
          <label
            htmlFor="engineType"
            className="form-label"
            style={{ color: "red" }}
          >
            Engine Type
          </label>
          <select
            className="form-select"
            name="engineType"
            value={newData.engineType}
            onChange={handleNewData}
          >
            <option value="">Select Engine Type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="col-12 d-flex justify-content-center">
          <button type="submit" className="btn btn-success">
            {isEdit ? "Update Car" : "Add Car"}
          </button>
          <button
            className="btn btn-danger ms-2"
            onClick={() => setCarData([])}
          >
            Delete All
          </button>
        </div>
      </form> 

    </div>
  )
}

export default CarForm
