

export default function Defective() {
  return (


    <div className=" flex flex-col items-center justify-center mt-[100px]">
      <div>
        <input className="border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm mr-3 mb-3 	" type="text" maxLength="8" placeholder="Complaint No..." />
        <button><i class="fa fa-search" aria-hidden="true"></i></button>
      </div>
      <div>
        <span class="group-hover/edit:text-gray-700 ...">Part Code</span>
        <input className="border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm mr-3 mb-3 read-only:bg-gray-100" />

      </div>


    </div>
  )
}