import React from 'react'

const card = ({name,age,email}) => {
  return (
    < >
       <div className="bg-white shadow-lg rounded-lg p-6  mx-auto ">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700">Age: {age}</p>
        <p className="text-gray-700">Email: {email}</p>
      </div>
    
    </>    
)
}

export default card