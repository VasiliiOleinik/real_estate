import React from 'react';

const NoData = () => {
  return (
    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl bg-white text-gray-700 shadow-md p-10">
      <div className='w-full flex items-center mx-auto py-12'>
        <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 12 5.419 3.871A1 1 0 0 0 16 15.057V2.943a1 1 0 0 0-1.581-.814L9 6m0 6V6m0 6H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7m-5 6h3v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5Zm15-3a3 3 0 0 1-3 3V6a3 3 0 0 1 3 3Z"></path>
        </svg>
      </div>
      <p className='text-gray-700 font-medium text-lg text-center'>Sorry, we didn't find any real estate ! :(</p>
      <p className='text-gray-500 text-center'>Please try again later</p>
      <button
        className='flex items-center px-4 py-1.5 border border-gray-400 mt-4 text-gray-600 rounded text-sm hover:bg-blue-600 mx-auto'
        type='button'>
        Go to Main Page
      </button>
    </div>
  );
};

export default NoData;
