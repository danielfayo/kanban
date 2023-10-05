// import React from "react";
// import { Select, Option } from "@material-tailwind/react";

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       <Select
//         label="Current Status"
//         className="w-full bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//         isOpen={isOpen}
//         onToggle={handleToggle}
//       >
//         <Option value="todo">Todo</Option>
//         <Option value="doing">Doing</Option>
//         <Option value="done">Done</Option>
//       </Select>
//       <div
//         className={`absolute z-10 top-0 left-0 right-0 rounded-md shadow-lg overflow-hidden transition duration-300 transform ${
//           isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
//         }`}
//       >
//         <ul className="bg-white">
//           <li className="px-4 py-2 hover:bg-gray-100">Todo</li>
//           <li className="px-4 py-2 hover:bg-gray-100">Doing</li>
//           <li className="px-4 py-2 hover:bg-gray-100">Done</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;
