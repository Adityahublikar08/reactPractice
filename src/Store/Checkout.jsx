/* eslint-disable react/prop-types */


function Checkout({count,price}) {
  return (
    <div style={{padding:'30px'}}>
        <div>
            Total Bill:{count*price}
        </div>
      
    </div>
  )
}

export default Checkout
