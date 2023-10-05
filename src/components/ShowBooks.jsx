import React from 'react'
import axios from 'axios'

const ShowBooks = () => {
  return (
    <div className='h-screen w-full bg-red-100'>
        <h1 className='text-center pt-10'>Show Books</h1>

        <div className='w-[90%] mx-auto'>
          <table className='mx-auto mt-10'>
            <thead></thead>
            <tr>
              <th className='w-[200px]'>Author</th>
              <th className='w-[200px]'>Title</th>
              <th className='w-[200px]'>Publish Year</th>
              <th className='w-[200px]'>ID</th>
            </tr>
          </table>
        </div>
    </div>
  )
}

export default ShowBooks