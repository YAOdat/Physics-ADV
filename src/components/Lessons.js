import React, { useState } from 'react';
import { ImBook } from 'react-icons/im';
import Modal from './Modal'; // Import the Example modal component
import data from '../assets/data.json';
import { useParams } from 'react-router-dom';
import Calculator from './Calculator'; // Import the Calculator component

const Lessons = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const { gradeParam } = useParams();

  const openModal = (lesson) => {
    setSelectedLesson({ ...lesson, lessonNumber: lesson.id, gradeParam: gradeParam });
  };
  


  // Filter lessons based on the current gradeParam (e.g., "9-adv")
  const filteredLessons = data[gradeParam] ? data[gradeParam].lessons : [];

  return (
    <div className="flex flex-col mx-9">
      <h2 className="text-2xl font-bold mt-4">
        Lessons for {gradeParam} Grade
      </h2>
      <ul role="list" className="divide-y divide-gray-100">
        {filteredLessons.map((lesson) => (
          <li key={lesson.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <div>
                  <div className="flex items-center gap-x-1">
                    <p
                      className="text-lg font-bold cursor-pointer"
                      onClick={() => openModal(lesson)}
                    >
                      {lesson.lessonName}: {lesson.lessonTitle}
                    </p>
                    <ImBook className="h-6 w-6 text-gray-600" />
                  </div>
                </div>

                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {lesson.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedLesson && (
        <Modal
          lesson={selectedLesson}
          onClose={() => setSelectedLesson(null)}
          lessonNumber={selectedLesson.lessonNumber} // Pass the lessonNumber to the Calculator component
        />
      )}
    </div>
  );
};

export default Lessons;
