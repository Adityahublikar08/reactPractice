/* eslint-disable react/prop-types */

import Button from './Button'

function CarList({car,handleEdit,handleRemove}) {
  return (
    <div>
       <div className="col-md-6 mb-3" key={car.id}>
            <div
              className="card"
              style={{
                backgroundColor: "transparent",
                color: "whitesmoke",
                boxShadow: "2px 2px 2px whitesmoke",
              }}
            >
              <div className="card-body">
                <h5 className="card-title">{car.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{car.brand}</h6>
                <p className="card-text">
                  <strong>Model:</strong> {car.model}
                  <br />
                  <strong>Price:</strong> ${car.price}
                  <br />
                  <strong>Engine Type:</strong> {car.engineType}
                </p>
               <Button handleEdit={handleEdit} handleRemove={handleRemove} car={car}/>
              </div>
            </div>
          </div>
    </div>
  )
}

export default CarList
