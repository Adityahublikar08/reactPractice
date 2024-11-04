import React from 'react'

function Button({handleRemove,handleEdit,car}) {
  return (
    <div>
         <button
                  className="btn btn-danger me-2"
                  onClick={() => handleRemove(car.id)}
                >
                  Remove
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEdit(car.id)}
                >
                  Edit
                </button>
      
    </div>
  )
}

export default Button
