

// const ProductCard = ({ label, detail }) => {
//   return (
//     <div>
//       <div className="p-4">
//         <div className="max-w-[200px] border-2 to-black]">
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DcVy5VfrRXTN99WxGvT7gKkavRKqDiKTsQ&s" alt="" />


//           <div className="px-2 pb-3 space-y-2">
//             <h1 className="text-2xl">{label}</h1>
//             <p>{detail}</p>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }


// export default ProductCard




const ProductCard = ({ image, channel, name, code, time, roll }) => {
  return (
    <div className="">
      <div className="h-[300px] w-[250px] bg-white rounded-xl border-blue-900 shadow-2xl">
        <img className='rounded-xl w-full h-[50%]' src={image} alt="" />

        <div className="p-2 ">

          <h4 className="text-xs text-blue-400">{channel}</h4>
          <h1 className="text-[20px] font-serif">{name}</h1>
          <h1 className="font-extralight text-[18px]">{code}</h1>
          <h3 className="py-3 font-medium text-[13px]">{time}</h3>

          <span class="flex border-black bg-red-700 text-white text-xs font-bold rounded">

            {roll}
          </span>




        </div>


      </div>


    </div>
  )
}

export default ProductCard
