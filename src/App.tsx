import Section from './components/Section';

import './App.css';



import Heading from './components/Heading';
import Counter from './components/Counter';
import { useState } from 'react';
import List from './components/List';





function App() {
  const [count,setCount]=useState<number>(0)
  return (
    <>
    <Heading title='hello' />
      <Section>Ima Children</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["Coffe", "Tacos", "Code"]} render={(item: string) => <span className='gold'>{item}</span>}/>
      </>
  )
}

export default App;
 