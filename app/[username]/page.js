import React from 'react'

const Username = ({params}) => {
  return (
    <>
      
    <div className='cover w-full bg-red-50 relative'>
      <img  className='object-cover w-full h-[400px]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/1254716/4de72cd385a944899a35bfdc1f732491/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/8.JPG?token-hash=QiPiADMhL3YNw8EHHW_DBO1ygRuNRGWGtmynkoYYBxc%3D&token-time=1759536000" alt="" />
      <div className='absolute -bottom-20 right-[46%] border-white border-2 rounded-full'> 
        <img className='rounded-full'width={150} height={150} src="https://img.freepik.com/free-vector/monogram-letter-logo-design-template_23-2151040157.jpg?semt=ais_incoming&w=740&q=80" alt="" />
      </div>
    </div>
    <div className="info flex text-white justify-center items-center my-24 flex-col">
      <div className='font-bold text-lg '>

      @{params.username}
      </div>
      <div>
        creating animated art for vit
      </div>
      <div>
        1289 members  82posts  $12,235/release
      </div>
    </div>
    </>
  )
}

export default Username
