import './App.css'
import React from 'react'

type Workout = {
  name: string,
  duration: string,
  date: string
}

const workouts = [
  { name: 'Running', duration: '30', date: '2021-09-01' },
  { name: 'Cycling', duration: '45 ', date: '2021-09-02' },
  { name: 'Swimming', duration: '6', date: '2021-09-03' },]

function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <div className="col-12">
      <div className="row justify-content-between">
        <p className='col-3'>{workout.name}</p>
        <p className='col-3'>{workout.duration}</p>
      </div>
    </div>
  )
}



function App() {

  return (
    <>
      <div className="container-fluid border text-light">
        <div className="row justify-content-around">
          <p className='col-3'>Workout</p>
          <p className='col-3'>Time</p>
        </div>
        <div className='row'>
          {workouts.map(workout => <WorkoutCard workout={workout} />)}
        </div>
      </div>
    </>
  )
}

export default App
