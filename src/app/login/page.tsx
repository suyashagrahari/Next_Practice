import React from 'react'
const axios = require('axios');

const options = {
//   method: 'GET', 
//   url: 'https://netflix54.p.rapidapi.com/search/',
//   params: {
//     query: 'stranger',
//     offset: '0',
//     limit_titles: '50',
//     limit_suggestions: '20',
//     lang: 'en'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'afb66e6f93mshde1c52e86afbc20p15b406jsnfe3d74e2315d',
//     'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
//   }
};

const Login = async () => {
    // try {
    //     const response = await axios.request(options);
    //     const data = await response.data;
    //     console.log(data);
    // } catch (error) {
    //     console.error(error);
    // }


  return (
    <>
    {/* <!-- component --> */}
<div className="w-full h-screen flex">
    <img src="https://images.unsplash.com/photo-1540569876033-6e5d046a1d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="background" className="object-cover object-center h-screen w-7/12"/>
    <div className="bg-white flex flex-col justify-center items-center w-5/12 shadow-lg">
      <h1 className="text-3xl font-bold text-orange-500 mb-2">LOGIN</h1>
      <div className="w-1/2 text-center">
        <input type="text" name="username" placeholder="username" 
            className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"/>
        <input type="password" name="password" placeholder="password" 
            className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"/>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-lg focus:outline-none shadow">Sign In</button>
      </div>
    </div>
  </div>
    </>
  )
}

export default Login