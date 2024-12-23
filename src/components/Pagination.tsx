import React from 'react'

export default function Pagination() {
  return (
    <div className='w-full flex items-center justify-between p-4 text-gray-500 gap-8 '>
        <button disabled className='py-2 px-4 bg-slate-200 rounded-md text-xs font-semibold  disabled:opacity-50 disabled:cursor-not-allowed '>Prev</button>

        <div className='flex items-center gap-2 text-sm'>
            <button className='px-2 rounded-sm bg-talaSky'>1</button>
            <button className='px-2 rounded-sm '>2</button>
            <button className='px-2 rounded-sm '>3</button>
            ...
            <button className='px-2 rounded-sm '>10</button>

        </div>

        <button  className='py-2 px-4 bg-slate-200 rounded-md text-xs font-semibold  disabled:opacity-50 disabled:cursor-not-allowed '>Next</button>

    </div>
  )
}
