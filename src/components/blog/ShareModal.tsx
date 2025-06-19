// "use client"

// import type React from "react"
// import { useRef, useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { IoClose, IoShareSocial, IoShareSocialOutline } from "react-icons/io5"

// interface ShareModalProps {
//     url: string
//     title: string
// }

// const ShareModal: React.FC<ShareModalProps> = ({ url, title }) => {
//     const [isOpen, setIsOpen] = useState(false)
//     const modalRef = useRef<HTMLDivElement>(null)

//     const onClose = () => {
//         setIsOpen(false)
//     }

//     // Close modal when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
//                 onClose()
//             }
//         }

//         if (isOpen) {
//             document.addEventListener("mousedown", handleClickOutside)
//         }

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside)
//         }
//     }, [isOpen])

//     return (
//         <>
//             <div className={`w-fit h-fit p-1 shadow border rounded-full`}>
//             {/* <div className={`absolute right-2 -top-1 p-1 shadow border rounded-full`}> */}
//                 <IoShareSocialOutline
//                     className="text-lg sm:text-xl cursor-pointer hover:text-primary transition-colors"
//                     onClick={() => setIsOpen(true)}
//                 />
//             </div>
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
//                     >
//                         <motion.div
//                             ref={modalRef}
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             exit={{ opacity: 0, scale: 0.9 }}
//                             transition={{ duration: 0.3, ease: "easeOut" }}
//                             className="relative bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4"
//                         >
//                             <button
//                                 onClick={onClose}
//                                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors"
//                                 aria-label="Close"
//                             >
//                                 <IoClose size={24} />
//                             </button>

//                             <div className="mb-4">
//                                 <h3 className="text-lg font-medium text-center mb-4">Share This Post</h3>
//                                 <IoShareSocial url={url} socialTypes={["facebook", "twitter", "linkedin", "whatsapp"]} title={title} />
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </>
//     )
// }

// export default ShareModal
