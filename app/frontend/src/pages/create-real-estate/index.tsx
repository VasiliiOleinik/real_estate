// import UploadImage from '../../../../frontend/src/components/UploadImage'
// import ImageCard from './ImageCard'
// import { Controller } from 'react-hook-form'

// export const metadata = {
//   title: 'Create new Real Estate',
//   description: 'The official Next.js Course Dashboard, built with App Router.',
// }

// const { WithAuth, getServerSideProps } = withAuth(CreateRealEstate)

// function CreateRealEstate() {
//   const {
//     onImageInputChange,
//     isLoading,
//     fields,
//     estateID,
//     control,
//     onInfrastructureChange,
//     onExtraChange,
//     handleSubmit,
//     onSubmit,
//     remove,
//   } = useCreateRealEstate()

//   return (
//     <RootLayout metadata={metadata}>
//       <p className="text-white">{estateID}</p>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="grid gap-6 mb-6 md:grid-cols-6">
//           <Controller
//             name="title"
//             control={control}
//             render={({ field }) => (
//               <div>
//                 <label
//                   htmlFor="title"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Title
//                 </label>
//                 <input
//                   {...field}
//                   type="text"
//                   id="title"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="Villa Madrid"
//                 />
//               </div>
//             )}
//           />
//           <Controller
//             name="property_type"
//             control={control}
//             render={({ field }) => (
//               <div>
//                 <label
//                   htmlFor="property_type"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Select an proprty type
//                 </label>
//                 <select
//                   {...field}
//                   id="property_type"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 >
//                   <option selected>Choose a property type</option>
//                   <option value="Villa">Villa</option>
//                   <option value="Apartment">Apartment</option>
//                   <option value="Bungalow">Bungalow</option>
//                   <option value="Townhouse">Townhouse</option>
//                   <option value="Penthouse">Penthouse</option>
//                 </select>
//               </div>
//             )}
//           />
//           <Controller
//             name="property_rooms"
//             control={control}
//             render={({ field }) => (
//               <div>
//                 <label
//                   htmlFor="property_rooms"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Property rooms
//                 </label>
//                 <input
//                   {...field}
//                   type="text"
//                   id="property_rooms"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="5"
//                   required
//                 />
//               </div>
//             )}
//           />
//           <Controller
//             name="estate_status"
//             control={control}
//             render={({ field }) => (
//               <div>
//                 <label
//                   htmlFor="estate_status"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Select an estate status
//                 </label>
//                 <select
//                   {...field}
//                   id="estate_status"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 >
//                   <option value="">Select a status</option>
//                   <option value="For rent">For Rent</option>
//                   <option value="For sale">For Sale</option>
//                   <option value="Sold">Sold</option>
//                   <option value="Rented">Rented</option>
//                   <option value="Under construction">Under Construction</option>
//                 </select>
//               </div>
//             )}
//           />
//           <Controller
//             name="country"
//             control={control}
//             render={({ field }) => (
//               <div>
//                 <label
//                   htmlFor="country"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Country
//                 </label>
//                 <input
//                   {...field}
//                   type="text"
//                   id="country"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="Italy"
//                   required
//                 />
//               </div>
//             )}
//           />
//           <Controller
//             name="region"
//             control={control}
//             render={({ field }) => (
//               <div>
//                 <label
//                   htmlFor="region"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Region
//                 </label>
//                 <input
//                   {...field}
//                   type="text"
//                   id="region"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="Tuscany"
//                   required
//                 />
//               </div>
//             )}
//           />
//           <Controller
//             name="location_details"
//             control={control}
//             render={({ field }) => (
//               <div>
//                 <label
//                   htmlFor="location_details"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Location details
//                 </label>
//                 <input
//                   {...field}
//                   type="text"
//                   id="location_details"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="Hillside"
//                   required
//                 />
//               </div>
//             )}
//           />
//           <Controller
//             name="price"
//             control={control}
//             render={({ field }) => (
//               <div>
//                 <label
//                   htmlFor="price"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Price
//                 </label>
//                 <input
//                   {...field}
//                   type="text"
//                   id="price"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="1 000 000"
//                   required
//                 />
//               </div>
//             )}
//           />
//           <Controller
//             name="building_type"
//             control={control}
//             render={({ field }) => (
//               <div>
//                 <label
//                   htmlFor="building_type"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Building type
//                 </label>
//                 <select
//                   {...field}
//                   id="building_type"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   required
//                 >
//                   <option value="">Select a building type</option>
//                   <option value="Residential">Residential</option>
//                   <option value="Commercial">Commercial</option>
//                   <option value="Industrial">Industrial</option>
//                   <option value="Mixed use">Mixed Use</option>
//                 </select>
//               </div>
//             )}
//           />
//           <Controller
//             name="energy_level"
//             control={control}
//             render={({ field }) => (
//               <div>
//                 <label
//                   htmlFor="energy_level"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Energy level
//                 </label>
//                 <select
//                   {...field}
//                   id="energy_level"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   required
//                 >
//                   <option value="">Select an energy level</option>
//                   <option value="low">Low</option>
//                   <option value="medium">Medium</option>
//                   <option value="high">High</option>
//                   <option value="very_high">Very High</option>
//                   <option value="extreme">Extreme</option>
//                 </select>
//               </div>
//             )}
//           />
//           <Controller
//             name="ownership"
//             control={control}
//             render={({ field }) => (
//               <div>
//                 <label
//                   htmlFor="ownership"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Ownership
//                 </label>
//                 <select
//                   {...field}
//                   id="ownership"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   required
//                 >
//                   <option value="">Select an ownership type</option>
//                   <option value="Freehold">Freehold</option>
//                   <option value="Leasehold">Leasehold</option>
//                   <option value="Commonhold">Commonhold</option>
//                   <option value="Share of freehold">Share of Freehold</option>
//                 </select>
//               </div>
//             )}
//           />
//           <Controller
//             name="floor"
//             control={control}
//             render={({ field }) => (
//               <div>
//                 <label
//                   htmlFor="floor"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Floor
//                 </label>
//                 <input
//                   {...field}
//                   type="text"
//                   id="floor"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="2"
//                   required
//                 />
//               </div>
//             )}
//           />

//           <Controller
//             name="usefull_area"
//             control={control}
//             render={({ field }) => (
//               <div>
//                 <label
//                   htmlFor="usefull_area"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Usefull area
//                 </label>
//                 <input
//                   {...field}
//                   type="text"
//                   id="usefull_area"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="200"
//                   required
//                 />
//               </div>
//             )}
//           />
//           <Controller
//             name="availability"
//             control={control}
//             render={({ field }) => (
//               <div>
//                 <label
//                   htmlFor="availability"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Availability
//                 </label>
//                 <select
//                   {...field}
//                   id="availability"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   required
//                 >
//                   <option value="">Select availability</option>
//                   <option value="Available now">Available Now</option>
//                   <option value="Available soon">Available Soon</option>
//                   <option value="Occupied">Occupied</option>
//                   <option value="Under construction">Under Construction</option>
//                   <option value="Sold out">Sold Out</option>
//                 </select>
//               </div>
//             )}
//           />
//         </div>
//         <div>
//           <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//             Infrastructure
//           </p>
//           <div className="flex">
//             <div className="flex items-center mb-4">
//               <input
//                 onChange={onInfrastructureChange}
//                 id="pool"
//                 type="checkbox"
//                 value="pool"
//                 name="pool"
//                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//               />
//               <label
//                 htmlFor="pool"
//                 className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//               >
//                 Pool
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ml-4">
//               <input
//                 onChange={onInfrastructureChange}
//                 id="garden"
//                 type="checkbox"
//                 value="garden"
//                 name="garden"
//                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//               />
//               <label
//                 htmlFor="garden"
//                 className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//               >
//                 Garden
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ml-4">
//               <input
//                 onChange={onInfrastructureChange}
//                 id="parking"
//                 type="checkbox"
//                 name="parking"
//                 // value="parking"
//                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//               />
//               <label
//                 htmlFor="parking"
//                 className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//               >
//                 Parking
//               </label>
//             </div>
//             <div className="flex items-center mb-4 ml-4">
//               <input
//                 onChange={onInfrastructureChange}
//                 id="garage"
//                 type="checkbox"
//                 value="garage"
//                 name="garage"
//                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//               />
//               <label
//                 htmlFor="garage"
//                 className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//               >
//                 Garage
//               </label>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="flex">
//             <div>
//               <label
//                 htmlFor="garden_area"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Garden area
//               </label>
//               <input
//                 onChange={onExtraChange}
//                 name="garden_area"
//                 type="text"
//                 id="garden_area"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="500"
//                 required
//               />
//             </div>
//             <div className="ml-4">
//               <label
//                 htmlFor="pool_area"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Pool area
//               </label>
//               <input
//                 onChange={onExtraChange}
//                 name="pool_area"
//                 type="text"
//                 id="pool_area"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="100"
//                 required
//               />
//             </div>
//             <div className="ml-4">
//               <label
//                 htmlFor="garage_area"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Garage area
//               </label>
//               <input
//                 onChange={onExtraChange}
//                 name="garage_area"
//                 type="text"
//                 id="garage_area"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="50"
//                 required
//               />
//             </div>
//             <div className="ml-4">
//               <label
//                 htmlFor="parking_area"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Parking area
//               </label>
//               <input
//                 onChange={onExtraChange}
//                 name="parking_area"
//                 type="text"
//                 id="parking_area"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="100"
//                 required
//               />
//             </div>
//           </div>
//         </div>

//         <Controller
//           name="description"
//           control={control}
//           render={({ field }: any) => (
//             <div>
//               <label
//                 htmlFor="description"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Description
//               </label>
//               <textarea
//                 {...field}
//                 id="description"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="Your text here"
//                 required
//               />
//             </div>
//           )}
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Submit
//         </button>
//       </form>
//       <div className="grid grid-cols-5 gap-4">
//         {fields.map(({ url, id }: any) => (
//           <ImageCard
//             key={id}
//             image={url}
//             estateID={estateID}
//             removeImage={remove}
//             removeId={id}
//           />
//         ))}
//         <UploadImage onInputChange={onImageInputChange} isLoading={isLoading} />
//       </div>
//     </RootLayout>
//   )
// }

// export default WithAuth
// export { getServerSideProps }
