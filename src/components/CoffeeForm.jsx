

export default function CoffeForm() {
    return (
        <div className="w-full max-w-lg mx-auto bg-[#1e140f] border border-stone-800 p-8 rounded-2xl shadow-2xl my-10">            <h1>Coffee Form</h1>
            <h1 className="text-3xl font-black text-[#f7f4f0] mb-6 text-center border-b border-stone-800 pb-4">
                Add New <span className="text-amber-500">Coffee</span>
            </h1>
            <form className="flex flex-col space-y-5">
               <label htmlFor="type" className="text-amber-400 font-medium text-sm tracking-wide">Coffee Name:
               <input type="text" id="type" name="type" placeholder="Coffe name"
               className="w-full bg-[#2a1d16] text-[#f7f4f0] placeholder-stone-500 border border-stone-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-200"
               required
               />
              </label> 
               <label htmlFor="description" className="text-amber-400 font-medium text-sm tracking-wide">Description:
               <textarea id="description" name="description" placeholder="Coffe description"
               className="w-full bg-[#2a1d16] text-[#f7f4f0] placeholder-stone-500 border border-stone-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-200"
              required
              />
              </label>
               <label htmlFor="origin" className="text-amber-400 font-medium text-sm tracking-wide">Origin:
               <input type="text" id="origin" name="origin" placeholder="Coffe origin"
               className="w-full bg-[#2a1d16] text-[#f7f4f0] placeholder-stone-500 border border-stone-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-200"
               required
               />
              </label>
               <label htmlFor="price" className="text-amber-400 font-medium text-sm tracking-wide">price:
               <input type="number" id="price" name="price" placeholder="Coffe price"
               className="w-full bg-[#2a1d16] text-[#f7f4f0] placeholder-stone-500 border border-stone-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-200"
               required
               min={"0"} step={"0.1"}
               />
              </label>
              <button type="Submit" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </form>
        </div>
    )
}