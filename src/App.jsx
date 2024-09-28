import React from 'react'
import Card from './components/card'


const users = [
  {
    name: 'Mayank',
    age: 20,
    email: 'abc@gmail.com',
  },
  {
    name: 'Kay',
    age: 20,
    email: 'def@gmail.com',
  },
  {
    name: 'ani',
    age: 20,
    email: 'ghi@gmail.com',
  }
]

const App = () => {

  

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-300">
      <div className="flex gap-20 text-center">
        {users.map((user, index) => (
          <Card key={index} name={user.name} age={user.age} email={user.email} />
        ))}
      </div>
    </div>
  )
}

export default App