import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className='banners container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 place-items-center'>
        <Link to='/shopping-project/hot'><img src="https://mystys2.github.io/shopping-project/assets/hot.png" /></Link>
        <Link to='/shopping-project/new'><img src="https://mystys2.github.io/shopping-project/assets/new.png" /></Link>
        <Link to='/shopping-project/long'><img src="https://mystys2.github.io/shopping-project/assets/long.png" /></Link>
        <Link to='/shopping-project/short'><img src="https://mystys2.github.io/shopping-project/assets/short.png" /></Link>
        <Link to='/shopping-project/gel'><img src="https://mystys2.github.io/shopping-project/assets/gel.png" /></Link>
        <Link to='/shopping-project/polish'><img src="https://mystys2.github.io/shopping-project/assets/polish.png" /></Link>     
      </div>
    </div>
  )
}

export default Home