import React from 'react'
import Loading from '../Loading'

const UploadImage = ({ isLoading, onInputChange }) => {
  return (
    <div className="max-w-md mx-auto rounded-lg md:max-w-xl">
      <div
        className="relative 
        bg-clip-border
        rounded-xl
       bg-white
        text-gray-700
        shadow-md p-2
        shadow-dark
        transition-all
        flex
        justify-center
        items-center
        h-60
        w-60"
      >
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="absolute ">
              <div className="flex flex-col items-center">
                <i className="fa fa-folder-open fa-4x text-blue-700"></i>
                <svg
                  className="w-20 h-20 text-gray-800 hover:text-gray-100 cursor-pointer"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 26"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                  />
                </svg>
              </div>
            </div>

            <input
              type="file"
              className="h-full w-full opacity-0 cursor-pointer "
              name=""
              onChange={onInputChange}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default UploadImage
