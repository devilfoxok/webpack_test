import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import About from '@/pages/about/About';
import jpg from '@/assets/jpg.jpg'
import png from '@/assets/png.png'
import Svg from '@/assets/svg.svg'

const todo = (e: number) => {
  console.log(e)
}

export const App = () => {
    const [count, setCount] = useState<number>(0)
    const increment = () => setCount(prev => prev + 1)

    // if (__PLATFORM__ === 'mobile') {
    //   return <div>IS MOBILE PLATFORM</div>
    // }
    // todo(111)
  return (
    <div>
      <h1>123Platform={__PLATFORM__}</h1>
      <div>
        <img src={jpg}></img>
        <img src={png}></img>
      </div>
      <div>
        <Svg width={800} height={400} fill='pink' />
      </div>
      <Link to={'/about'}>about</Link>
      <br/>
      <Link to={'/shop'}>Shop</Link>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment}>+++</button>
      <About/>
    </div>
  )
}


