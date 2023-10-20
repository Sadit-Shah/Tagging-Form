

export default function Defective() {
  return (


    <div className=" flex flex-col items-center justify-center w-full mt-[100px]">
      <div className="flex items-center justify-center w-6/12 ">
        <input className="border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm mr-3 mb-3 w-6/12 uppercase	 	" type="text" maxLength="8" placeholder="Complaint No..." />
        <button><i class="fa fa-search" aria-hidden="true"></i></button>
      </div>
      <div className="flex flex-row justify-center w-6/12 font-bold">
        <div className="flex flex-col w6/12 pr-5 ">
        <span className="pt-3 pb-7">Part Code</span>
        <span className="pb-8">Part Description</span>
        <span>Part Quantity</span>
        </div>

        <div className="flex flex-col w-6/12">
        <label className="pointer-events-none  border border-slate-400 rounded-md py-5 pl-9 pr-3 shadow-sm mr-3 mb-3 read-only:bg-gray-100" />
        <label className="pointer-events-none  border border-slate-400 rounded-md py-5 pl-9 pr-3 shadow-sm mr-3 mb-3 read-only:bg-gray-100" />
        <label className="pointer-events-none  border border-slate-400 rounded-md py-5 pl-9 pr-3 shadow-sm mr-3 mb-3 read-only:bg-gray-100" />
        
        </div>
        

      </div>
      <div className="flex space-x-20 justify-center items-center mt-5">
      <button className="bg-orange-400 hover:bg-blue-300 text-white w-40 py-2 px-4 rounded-md mb-5">
      DELETE</button>
        <button className="bg-orange-400 hover:bg-blue-300 text-white w-40 py-2 px-4 rounded-md mb-5">
        ADD</button>
      </div>




      {/* <div className=" flex flex-col items-center justify-center w-full">
    <div>
        <span class="group-hover/edit:text-gray-700 pr-5 ...">Part Code</span>
        <input className="pointer-events-none  border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm mr-3 mb-3 read-only:bg-gray-100" />
      </div>
      <div>
        <span class="group-hover/edit:text-gray-700 pr-5 ...">Part Description</span>
        <input className="pointer-events-none  border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm mr-3 mb-3 read-only:bg-gray-100" />
      </div>
      <div>
        <span class="group-hover/edit:text-gray-700 pr-5 ...">Quantity</span>
        <input className="pointer-events-none  border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm mr-3 mb-3 read-only:bg-gray-100" />
      </div>
    </div> */}





    </div>
  )
}