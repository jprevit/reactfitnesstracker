import './App.css'
import React, { useState } from 'react'

type Workout = {
  name: string,
  duration: string,
  date: string
}


function WorkoutList({ workout }: { workout: Workout }) {
  return (
    <div className="col-12">
      <div className="row justify-content-between my-2">
        <p className='col-3 mb-0'>{workout.name}</p>
        <div className='col-5 mb-0'>
          <div className="row justify-content-center align-items-baseline">
            <button className='btn btn-info'>-</button>
            <p className='mx-3'>{workout.duration}</p>
            <button className='btn btn-info'>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}



function App() {

  const [workouts, setWorkouts] = useState<Workout[]>()

  return (
    <>
      <div className="container-fluid border text-light">
        <div className="row justify-content-around">
          <p className='col-3'>Workout</p>
          <p className='col-3'>Time</p>
        </div>
        <div className='row'>
          {workouts ? workouts.map(workout => <WorkoutList workout={workout} key={workout.name} : <h1>No workouts logged</h1> />)}
        </div>
      </div>
    </>
  )
}

export default App
