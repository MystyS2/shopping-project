import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className='banners container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 place-items-center'>
        <Link to='/shopping-project/hot'><img src="https://github.com/MystyS2/shopping-project/blob/master/public/assets/hot.png?raw=true" alt='hot'/></Link>
        <Link to='/shopping-project/new'><img src="https://github.com/MystyS2/shopping-project/blob/master/public/assets/new.png?raw=true" alt='new'/></Link>
        <Link to='/shopping-project/long'><img src="https://github.com/MystyS2/shopping-project/blob/master/public/assets/long.png?raw=true" alt='long'/></Link>
        <Link to='/shopping-project/short'><img src="https://github.com/MystyS2/shopping-project/blob/master/public/assets/short.png?raw=true" alt='short'/></Link>
        <Link to='/shopping-project/gel'><img src="https://github.com/MystyS2/shopping-project/blob/master/public/assets/gel.png?raw=true" alt='gel'/></Link>
        <Link to='/shopping-project/polish'><img src="https://github.com/MystyS2/shopping-project/blob/master/public/assets/polish.png?raw=true" alt='polish'/></Link>     
      </div>
    </div>
  )
}

export default Home