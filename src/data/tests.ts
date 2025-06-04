import type { Test } from '@/types'

export const tests: Test[] = [
  {
    id: 1,
    title: 'React Fundamentals',
    description: 'Test your knowledge of React.js basics',
    questions: [
      {
        id: 1,
        text: 'Which hook is used to manage state in a functional component?',
        answers: [
          { id: 1, text: 'useEffect', isCorrect: false },
          { id: 2, text: 'useRef', isCorrect: false },
          { id: 3, text: 'useState', isCorrect: true },
          { id: 4, text: 'useReducer', isCorrect: false },
        ],
      },
      {
        id: 2,
        text: 'JSX stands for?',
        answers: [
          { id: 1, text: 'Java Syntax Extension', isCorrect: false },
          { id: 2, text: 'JavaScript XML', isCorrect: true },
          { id: 3, text: 'JavaScript Xtension', isCorrect: false },
          { id: 4, text: 'Java Syntax Xtended', isCorrect: false },
        ],
      },
      {
        id: 3,
        text: 'What is the correct way to pass props in React?',
        answers: [
          { id: 1, text: '<Component prop=value />', isCorrect: true },
          { id: 2, text: '<Component.prop=value>', isCorrect: false },
          { id: 3, text: '<Component:prop=value>', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Solid.js Fundamentals',
    description: 'Evaluate your understanding of Solid.js core concepts',
    questions: [
      {
        id: 1,
        text: 'What is the primary way Solid.js tracks reactivity?',
        answers: [
          { id: 1, text: 'Virtual DOM', isCorrect: false },
          { id: 2, text: 'Proxies', isCorrect: false },
          { id: 3, text: 'Signals', isCorrect: true },
          { id: 4, text: 'Observers', isCorrect: false },
        ],
      },
      {
        id: 2,
        text: 'Which function creates reactive state in Solid.js?',
        answers: [
          { id: 1, text: 'useState', isCorrect: false },
          { id: 2, text: 'createSignal', isCorrect: true },
          { id: 3, text: 'useEffect', isCorrect: false },
        ],
      },
      {
        id: 3,
        text: 'Solid’s JSX compilation happens:',
        answers: [
          { id: 1, text: 'In the browser', isCorrect: false },
          { id: 2, text: 'At runtime', isCorrect: false },
          { id: 3, text: 'At compile time', isCorrect: true },
          { id: 4, text: 'With Babel runtime only', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Vue.js Quiz',
    description: 'Check your understanding of Vue.js concepts',
    questions: [
      {
        id: 1,
        text: 'What directive is used to bind data in Vue?',
        answers: [
          { id: 1, text: 'v-if', isCorrect: false },
          { id: 2, text: 'v-bind', isCorrect: true },
          { id: 3, text: 'v-model', isCorrect: false },
        ],
      },
      {
        id: 2,
        text: 'Which Vue feature allows two-way data binding?',
        answers: [
          { id: 1, text: 'v-on', isCorrect: false },
          { id: 2, text: 'v-model', isCorrect: true },
          { id: 3, text: 'v-bind', isCorrect: false },
          { id: 4, text: 'v-pre', isCorrect: false },
        ],
      },
      {
        id: 3,
        text: 'Vue components are defined with which property?',
        answers: [
          { id: 1, text: 'setup()', isCorrect: false },
          { id: 2, text: 'data()', isCorrect: true },
          { id: 3, text: 'computed()', isCorrect: false },
          { id: 4, text: 'methods()', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Angular Basics',
    description: 'Evaluate your Angular framework knowledge',
    questions: [
      {
        id: 1,
        text: 'Which decorator defines a class as an Angular component?',
        answers: [
          { id: 1, text: '@NgModule', isCorrect: false },
          { id: 2, text: '@Component', isCorrect: true },
          { id: 3, text: '@Injectable', isCorrect: false },
        ],
      },
      {
        id: 2,
        text: 'What is the file extension for Angular templates?',
        answers: [
          { id: 1, text: '.js', isCorrect: false },
          { id: 2, text: '.html', isCorrect: true },
          { id: 3, text: '.css', isCorrect: false },
          { id: 4, text: '.ts', isCorrect: false },
        ],
      },
      {
        id: 3,
        text: 'Which Angular directive is used for looping?',
        answers: [
          { id: 1, text: '*ngIf', isCorrect: false },
          { id: 2, text: '*ngFor', isCorrect: true },
          { id: 3, text: '*ngSwitch', isCorrect: false },
          { id: 4, text: '*ngLoop', isCorrect: false },
          { id: 5, text: '*forEach', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Svelte Essentials',
    description: 'Quiz yourself on core Svelte concepts',
    questions: [
      {
        id: 1,
        text: 'How does Svelte differ from other frameworks?',
        answers: [
          { id: 1, text: 'It uses a virtual DOM', isCorrect: false },
          {
            id: 2,
            text: 'It compiles to efficient JavaScript',
            isCorrect: true,
          },
          { id: 3, text: 'It only works with TypeScript', isCorrect: false },
        ],
      },
      {
        id: 2,
        text: 'Which keyword is used to make a reactive variable in Svelte?',
        answers: [
          { id: 1, text: '$:', isCorrect: true },
          { id: 2, text: 'reactive', isCorrect: false },
          { id: 3, text: '@reactive', isCorrect: false },
          { id: 4, text: 'observable', isCorrect: false },
        ],
      },
      {
        id: 3,
        text: 'What file extension does Svelte use?',
        answers: [
          { id: 1, text: '.svelte', isCorrect: true },
          { id: 2, text: '.vue', isCorrect: false },
          { id: 3, text: '.jsx', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Node.js Fundamentals',
    description: 'Test your Node.js backend development knowledge',
    questions: [
      {
        id: 1,
        text: 'Which module is used to create a server in Node.js?',
        answers: [
          { id: 1, text: 'fs', isCorrect: false },
          { id: 2, text: 'http', isCorrect: true },
          { id: 3, text: 'url', isCorrect: false },
          { id: 4, text: 'path', isCorrect: false },
        ],
      },
      {
        id: 2,
        text: 'What command initializes a new Node.js project?',
        answers: [
          { id: 1, text: 'npm install', isCorrect: false },
          { id: 2, text: 'node init', isCorrect: false },
          { id: 3, text: 'npm init', isCorrect: true },
          { id: 4, text: 'npx start', isCorrect: false },
        ],
      },
      {
        id: 3,
        text: 'Which keyword is used to import a module in CommonJS?',
        answers: [
          { id: 1, text: 'import', isCorrect: false },
          { id: 2, text: 'require', isCorrect: true },
          { id: 3, text: 'include', isCorrect: false },
          { id: 4, text: 'use', isCorrect: false },
          { id: 5, text: 'load', isCorrect: false },
        ],
      },
    ],
  },
]
