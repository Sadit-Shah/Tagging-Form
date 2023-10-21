

export default function Defective() {
  return (


    <div className=" flex flex-col items-center justify-center w-full mt-[100px]">


      <div className="flex items-center justify-center w-52 h-30">
        <img src="/images/Hindware.jpg" />
      </div>


      <div className="flex flex-row space-x-20 justify-center items-center w-6/12 border py-5 px-3 bg-slate-200">
        <span className=" w-6/12 cursor-pointer   border border-slate-400 bg-amber-50 text-gray-400 rounded-md py-2 mb-2 pl-9 pr-3 shadow-sm">Choose File...</span>
        <button className=" w-6/12 bg-orange-400 hover:bg-blue-300 text-white rounded-md py-2 px-4 mb-2" >
          Upload</button>
      </div>


      <div className="flex items-center justify-center w-6/12 my-5  ">
        <input className="border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm mr-3 mb-3 w-6/12 uppercase	 	" type="text" maxLength="8" placeholder="Complaint No..." />
        <button><i class="fa fa-search" aria-hidden="true"></i></button>
      </div>


      <div className="flex flex-row justify-center w-6/12 font-bold border px-5 py-5  bg-slate-200">
        <div className="flex flex-col w6/12 pr-5 ">
          <span className="pt-3 pb-7 ">Part Code</span>
          <span className="pb-8">Part Description</span>
          <span>Part Quantity</span>
        </div>

        <div className="flex flex-col w-6/12">
          <label className="pointer-events-none  border border-slate-400 rounded-md py-5 pl-9 pr-3 shadow-sm mr-3 mb-3 read-only:bg-amber-50" />
          <label className="pointer-events-none  border border-slate-400 rounded-md py-5 pl-9 pr-3 shadow-sm mr-3 mb-3 read-only:bg-amber-50" />
          <label className="pointer-events-none  border border-slate-400 rounded-md py-5 pl-9 pr-3 shadow-sm mr-3 mb-3 read-only:bg-amber-50" />

        </div>


      </div>

        
      <div className="flex space-x-20 justify-center items-center w-6/12 mt-5">
        <button className="bg-orange-400 hover:bg-blue-300 text-white w-40 py-2 px-4 rounded-md mb-5">
          DELETE</button>
        <button className="bg-orange-400 hover:bg-blue-300 text-white w-40 py-2 px-4 rounded-md mb-5">
          ADD</button>
      </div>

    </div >
  )
}