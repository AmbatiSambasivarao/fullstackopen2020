import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.content.name} {props.content.exercises}</p>
        </div>
    )
}

const Content = (props) => {
    return (
      <div>
        <div>
            <p></p>
            <Part content={props.content[0]} />
            <Part content={props.content[1]} />
            <Part content={props.content[2]} />
        </div>
      </div>
    )
}

const Total = (props) => {
    return (
      <div>
        <p>yhteensä {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises} tehtävää</p>
      </div>
    )
}


const App = () => {
    const kurssi = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
          {
            name: 'abc',
            exercises: 10
          },
          {
            name: 'xyz',
            exercises: 7
          },
          {
            name: 'pqrs',
            exercises: 14
          }
        ]
      }

  return (
    <div>
      <Header course={kurs.name} />
      <Content content={kurs.parts} />
      <Total total={kurs.parts} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)