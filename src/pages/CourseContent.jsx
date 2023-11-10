const javascriptContent = [
  {
    title: 'Introduction to JavaScript',
    children: [
      'What is JavaScript?',
      'Brief history of JavaScript',
      'Importance of JavaScript in web development',
    ],
  },
  {
    title: 'Basic Syntax',
    children: [
      'Variables and data types',
      'Operators in JavaScript',
      'Conditional statements (if, else, switch)',
    ],
  },
  {
    title: 'Functions',
    children: [
      'Declaring and calling functions',
      'Parameters and return values',
      'Anonymous functions and arrow functions',
    ],
  },
  {
    title: 'Arrays and Objects',
    children: [
      'Creating arrays and accessing elements',
      'Working with objects and their properties',
      'Iterating through arrays and objects',
    ],
  },
  {
    title: 'Control Flow',
    children: ['Loops (for, while, do-while)', 'Break and continue statements'],
  },
  {
    title: 'Error Handling',
    children: ['Try, catch, and throw statements', 'Handling exceptions'],
  },
  {
    title: 'DOM Manipulation',
    children: [
      'Introduction to the Document Object Model (DOM)',
      'Selecting and manipulating HTML elements',
    ],
  },
  {
    title: 'Events',
    children: [
      'Handling events in JavaScript',
      'Commonly used events (click, mouseover, etc.)',
    ],
  },
  {
    title: 'AJAX and Fetch API',
    children: [
      'Making asynchronous requests',
      'Handling responses using Promises',
    ],
  },
  {
    title: 'ES6 Features',
    children: [
      'Let and const',
      'Template literals',
      'Arrow functions and default parameters',
      'Destructuring assignments',
    ],
  },
  {
    title: 'Promises and Async/Await',
    children: [
      'Working with Promises',
      'Introduction to asynchronous programming',
      'Using async/await for asynchronous operationssssssssssssssssssssssssssssssssssssss',
    ],
  },
  {
    title: 'Modules',
    children: ['Import and export statements', 'Organizing code with modules'],
  },
];

import { Disclosure } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import ContentCourse from '../components/organism/ContentCourse';

export default function CourseContent() {
  return (
    <main className='flex'>
      <section className='flex-1 h-[calc(100vh-64px)] overflow-auto p-4 text-justify'>
        <ContentCourse />
      </section>
      <aside className='w-[400px] h-[calc(100vh-64px)] bg-slate-100 flex flex-col items-start text-xl py-4 px-8 overflow-y-auto overflow-x-hidden'>
        {javascriptContent.map((item, index) => (
          <Disclosure key={index} className=''>
            {({ open }) => (
              <>
                <div className='flex items-center gap-4 my-4'>
                  {item.children.length > 0 && (
                    <FontAwesomeIcon
                      icon={open ? faChevronDown : faChevronRight}
                    />
                  )}
                  <Disclosure.Button>{item.title}</Disclosure.Button>
                </div>

                <Disclosure.Panel as='ul'>
                  {item.children.map((child, index) => (
                    <li
                      key={index}
                      className='cursor-pointer ml-8 pl-4 border-l-2 text-sm my-2'
                    >
                      <button className='text-start'>- {child}</button>
                    </li>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </aside>
    </main>
  );
}
