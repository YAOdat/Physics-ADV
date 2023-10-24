import React, { useState } from 'react';
import Modal from  './Modal'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'; // Import the Link component from React Router or your routing library

const grades = [
    {
      id: 1,
      name: 'Physics',
      href: '#',
      book: '9 Advanced',
      imageSrc: 'https://www.tawzea.ae/public/uploads/publications/moe_2023_24/922-T1-24.JPEG',
      imageAlt: '9 Advanced Grade Student Edition Book Cover',
      gradeNum: '9-adv'
    },
    {
      id: 2,
      name: 'Physics',
      href: '#',
      book: '10 Advanced',
      imageSrc: 'https://www.tawzea.ae/public/uploads/publications/moe_2023_24/1017-T1-24.JPEG',
      imageAlt: '10 Advanced Grade Student Edition Book Cover',
      gradeNum: '10-adv'
    },
    {
      id: 3,
      name: 'Physics',
      href: '#',
      book: '11 Advanced',
      imageSrc: 'https://www.tawzea.ae/public/uploads/publications/moe_2023_24/1124-T1-24.JPEG',
      imageAlt: '11 Advanced Grade Student Edition Book Cover',
      gradeNum: '11-adv'
    },
    {
      id: 4,
      name: 'Physics',
      href: '#',
      book: '12 Advanced',
      imageSrc: 'https://www.tawzea.ae/public/uploads/publications/moe_2023_24/1225-T1-24.JPEG',
      imageAlt: '12 Advanced Grade Student Edition Book Cover',
      gradeNum: '12-adv'
    },
  ]
  
  export default function GradesList() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    const openModal = (product) => {
      setSelectedProduct(product);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setSelectedProduct(null);
      setIsModalOpen(false);
    };
  
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Grades</h2>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Term 1
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              UAE
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              ~ 28 Aug - 12 Dec
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {grades.map((grade) => (
              <Link
                key={grade.id}
                to={`/grades/${grade.gradeNum}`} // Pass the gradeNum prop to the Link component
                className="group"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" style={{ border: '2px solid #000' }}>
                  <img
                    src={grade.imageSrc}
                    alt={grade.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
  
                <h3 className="mt-4 text-sm text-gray-700">{grade.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{grade.book}</p>
              </Link>
            ))}
          </div>
  
          {/* Step 3: Conditionally render the modal */}
          {isModalOpen && selectedProduct && (
            <Modal
              product={selectedProduct}
              onClose={closeModal} // Pass a function to close the modal
            />
          )}
        </div>
      </div>
    );
  }
  