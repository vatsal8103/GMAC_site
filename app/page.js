import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center text-white h-[44vh]">
        <div className="font-bold flex gap-2 text-5xl justify-center items-center "> buy me a chai <span><img src="/tea.gif" width={88} alt="" /></span></div>
        <p>
          a crowdfunding plateform for creators
        </p>
        <div>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">Start here!</span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">Read more</span>
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10 ">

      </div>

      <div className="text-white container bg-slate-950 rounded-xl  mx-auto pb-32 pt-14" >
        <h2 className="text-3xl font-bold text-center mb-14"> Your fans can buy you a chai !</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3">
            <img className="bg-slate-400 rounded-full  p-1 text-black" width={88} src="/man.gif" alt="" />
            <p className="font-bold">fans are availbale to help you </p>
            <p className=" text-center"> Your fans are available for you to help</p>

          </div>
          <div className="item space-y-3">
            <img className="bg-slate-400 rounded-full p-1 text-black" width={88} src="/coin.gif" alt="" />
            <p className="font-bold">fans are availbale to help you </p>
            <p className=" text-center"> Your fans are available for you to help</p>

          </div>
          <div className="item space-y-3 flex flex-col items-center  justify-center">
            <img className="bg-slate-400 rounded-full p-1 text-black" width={88} src="/group.gif" alt="" />
            <p className="font-bold">fans are availbale to help you </p>
            <p className=" text-center"> Your fans are available for you to help</p>
          </div>

        </div>
      </div>


      <div className="bg-white h-1 opacity-16 ">

      </div>
      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center" >
        <h2 className="text-3xl font-bold text-center mb-14"> Learn more about us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qYNweeDHiyU?si=E_TvbpKOpnAZZse3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        
      </div>
    </>
  );
}
