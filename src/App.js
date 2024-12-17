// import React from 'react'

// import ProductCard from "./components/ProductCard"

// const App = () => {
//   return (
//     <div className='p-5 flex justify-center'>
//       <div className=' w-[300px] space-y-4 shadow-xl pb-5 rounded-bl-2xl rounded-br-2xl 	transition-property: box-shadow;
// transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
// transition-duration: 150ms;'>

//         <div>
//           <img className="w-full" src="https://i.pinimg.com/originals/21/d6/21/21d62106e83e8bddfa41024dfc195356.jpg" alt="" />
//         </div>
//         <div className='px-5' >

//           <div className='flex justify-between text-gray-400'>
//             <h1>Avenger:Endgame</h1>
//             <p>8.8/10</p>
//           </div>

//           <div className='flex justify-between text-gray-400'>
//             <h1>LAST UPDATE</h1>
//             <h1>RUNNING TIME</h1>
//           </div>
//         </div>
//       </div >

//     </div>
//   )
// }

// export default App



// import React from 'react';
// import './app.css';
// // import si from './data/data'
// // import { age, person } from './data/data'

// const App = () => {

//   // console.log(age);
//   // console.log(person);


//   const human = 'Swornim';
//   const bools = true;
//   const nums = 99.9;
//   const pers = {
//     name: 'Hello',
//     age: 80
//   };
//   const arn = ['ram','sita','hati'];



//   return (
//     <div>
//       <h1>{human}</h1>
//       <p>{`${bools}`}</p>
//       <p>{nums}</p>
//       <p>{pers.age}</p>
//       <p>{arn}</p>

//     </div>
//   )
// }

// export default App




// const App = () => {


//   const imagebase = 'https://image.tmdb.org/t/p/w400';

//   const movie = {
//     "adult": false,
//     "backdrop_path": "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
//     "id": 912649,
//     "original_language": "en",
//     "original_title": "Venom: The Last Dance",
//     "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
//     "popularity": 12413.089,
//     "poster_path": "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
//     "release_date": "2024-10-22",
//     "title": "Venom: The Last Dance",
//     "video": false,
//     "vote_average": 6.7,
//     "vote_count": 1262,
//     "genre": "Action,Adventure,Sci-Fi"
//   };

//   return (


//     <div className="p-10 flex justify-center ">
//       <div className="space-y-0 space-x-0 w-[400px] bg-slate-300 shadow-lg rounded-xl">


//         <img className='h-[400px] w-full rounded-tl-xl rounded-tr-xl' src={`${imagebase}${movie.poster_path}`} />

//         <div className="pl-6 pt-6 pb-2 space-y-0 relative inline-block">
//           <span class="absolute top-0 left-[342px] bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
//             {movie.id}
//           </span>
//           <span class="absolute top-0 left-0 bg-slate-600 text-white text-xs font-bold px-2 py-1 rounded">
//             {movie.original_language}
//           </span>


//           <h1 className="text-2xl font-semibold text-gray-800">{`${movie.original_title}`}</h1>

//         </div>
//         <div class="flex items-center space-x-1 pl-6 space-y-0">
//           {/* <!-- Filled stars for the rating --> */}
//           <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-300 fill-current" viewBox="0 0 24 24">
//             <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//           </svg>
//           <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-300 fill-current" viewBox="0 0 24 24">
//             <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//           </svg>
//           <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-300 fill-current" viewBox="0 0 24 24">
//             <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//           </svg>
//           <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-300 fill-current" viewBox="0 0 24 24">
//             <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//           </svg>
//           {/* <!-- Empty star for the rest --> */}
//           <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
//             <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//           </svg>
//         </div>

//         <div className="pl-6 pr-6 pb-6 pt-3">
//           <p className="line-clamp-4">{movie.overview}</p>

//         </div>


//         <p></p>
//       </div>
//     </div>
//   )
// }
// export default App


// const App = () => {
//   return (
//     <div className="p-4 flex gap-4 ">


//       <ProductCard label={'Alexa'} detail={`I'll help you buy stuffs on amazon`} />
//       <ProductCard label={'Cortana'} detail={`I'll help you do your calculation `} />
//       <ProductCard label={'Siri'} detail={`I'll help you when you are alone`} />
//     </div>



//   )
// }

// export default App



// const App = () => {
//   return (
//     <div>
//       <div className="flex">
//         <div className="flex h-full w-[9000px] bg-slate-200">
//           <div className="">
//             <img className='h-[200px] m-2 rounded-2xl' src="https://img.freepik.com/premium-vector/f-icon-logo-vector-template_672224-507.jpg" alt="" />
//             <div className="p-3 pl-7 ">
//               <h1>Collapse</h1>
//               <br />
//               <h2 className="m-2">My Courses</h2>
//               <h2 className="m-2">Browse</h2>
//               <h2 className="m-2">My account</h2>
//               <h2 className="m-2">Notification</h2>
//               <br />
//               <br />
//               <h2 className="m-2">Analytics</h2>
//               <h2 className="m-2">Staff</h2>
//               <h2 className="m-2">Admin</h2>
//               <h2 className="m-2">Studio</h2>
//               <br />
//               <br />
//               <h2 className="m-2">@Contact Us</h2>
//               <h2 className="m-2">Ticket</h2>
//               <h2 className="m-2">Logout</h2></div>
//             <h2>ok</h2>

//           </div>
//           <div className="flex rounded-3xl mt-2 pt-[0px] bg-white h-[100vh] w-[80vw]">
//             <h1 className="text-2xl p-5">My Courses</h1>

//             <div className="p-4 flex gap-4 ">


//               <ProductCard image={'https://img.freepik.com/premium-photo/glowing-ball-light-with-word-light-it_729592-2053.jpg?semt=ais_hybrid'} channel={"BBC"} name={'The Small Bang'}
//                 time={`Starts: 9 February 2011`} code={"TSB11"} roll={"Unenrol"} >

//               </ProductCard>
//               <ProductCard image={'https://img.freepik.com/free-photo/beautiful-strawberry-garden-sunrise-doi-ang-khang-chiang-mai-thailand_335224-762.jpg?t=st=1734289032~exp=1734292632~hmac=79ce84e53daa723000a8476ad1e8b020e7a8b6ad91c3dc09509e74b1a5655c40&w=1060'} channel={"CNN"} name={'The Great Discovery'}
//                 time={`Starts: 12 March 2015`} code={"TGD15"} roll={"Enrol"} >
//               </ProductCard>

//               <ProductCard image={'https://img.freepik.com/premium-photo/3d-render-netflix-logo-formed-transparent-dark-glass-floating-15-degree-angle-neon-red-lin_1020495-782875.jpg?semt=ais_hybrid'} channel={"Netflix"} name={'Journey to the Stars'}
//                 time={`End: 21 June 2018`} code={"JTS18"} roll={"Unenrol"} >
//               </ProductCard>

//               <ProductCard image={'https://img.freepik.com/free-vector/natural-disasters-cartoon-design-concept-illustrated-green-coniferous-deciduous-trees-forest-raging-fire-illustration_1284-28746.jpg?t=st=1734289113~exp=1734292713~hmac=22d3317d7ae2aa2253fcab91b4d3546f71b1643538e88c57fd34502f64ffe961&w=1060'} channel={"Discovery"} name={'Wildlife Chronicles'}
//                 time={`Starts: 5 November 2020`} code={"WC20"} roll={"Enrol"} >

//               </ProductCard>






//             </div>




//           </div>


//         </div>



//       </div>




//     </div >
//   )
// }

// export default App



// const App = () => {



//   const greet = (name) => {
//     alert(`Goodmorning ${name}`);
//   }
//   return (
//     <div className="p-6 space-y-4">
//       <button onClick={() => greet('ram')}


//         className="bg-black text-white px-2 py-1 rounded-lg">Click ME</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <div className=''>
//         <div className='flex bg-black h-[50px] w-full text-white sticky justify-between'>
//           <div>
//             <h1 className='flex text-2xl ml-5 p-2 sticky'>Demo</h1>
//           </div>
//           <div className='flex justify-between '>
//             <button className='p-2 mr-3 '>About</button>
//             <button className='p-2 mr-7 '>Contact</button>
//           </div>

//         </div>
//         <div className='grid grid-cols-2 grid-rows-3'>
//           <img className='h-[80%] w-[80%] m-9 ml-16' src="https://m.media-amazon.com/images/I/71F-DNisEWL.jpg" alt="" />
//           <div className='relative content-center'>
//             <div className='flex font-mono text-3xl font-semibold pb-1'><h1>Hi, I am Swornim</h1>
//             </div>
//             <div className='text-red-500 pb-2'><h2>Some Dev, Freelancer, Rounder</h2></div>
//             <div className='font-thin pb-[200px]'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam et ea eligendi quam, quis obcaecati eius blanditiis, mollitia suscipit nulla corrupti. Voluptatem autem quisquam nulla officiis animi esse sequi porro recusandae quasi vero quam necessitatibus natus, rerum expedita dolores.?</p></div></div>



//         </div>
//       </div>

//     </div>
//   )
// }

// export default App



import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Home />
    },
    {
      path: 'about',
      element: <About />
    }


  ]);





  return <RouterProvider router={router} />
}
export default App