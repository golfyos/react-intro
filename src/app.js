import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>(
  <header>
    <h1> {props.title}</h1>
    <SearchForm />
  </header>
)

const Items = (props) => {
    console.log(props.items)
    return (
        <ul>
        {props.items.map(item => (
            <li>{item}</li>
        ))}
        </ul>
    )
}

const Content = (props) =>(
  <section>
        <p>{props.description}</p>
        <Items items={props.items}/>
    </section>
)

const AppWithoutDescription = () => (
  <Header title="No description here"/>
)

const SearchForm =()=>{
  return(
    <form>
      <input type="text" />
      <button type="submit">search</button>
    </form>
  )
}
const App = () =>{
  const title = 'Frontechs: React'
  const description = 'This is a simple react application'
  const items = [
    "Cat",
    "Dog",
    "Bird",
    "Shit"
  ]
  return (
    <section>
      <Header title={title}/>
      <Content description={description}
      items = {items}/>
    </section>
  )
}



const element = document.getElementById('app')
ReactDOM.render(<App />,element)
