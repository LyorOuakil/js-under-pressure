import * as fs from 'fs';
import * as path from 'path';
const baseCodeFolder = path.resolve(__dirname, 'baseCode') + '/';
const solutionFolder = path.resolve(__dirname, 'solution') + '/';
export interface ExerciseTest {
  call: string;
  result: any;
}

export interface Exercise {
  name: string;
  description?: string;
  baseCode: string;
  solution: string;
  tests: ExerciseTest[];
}

const exercices = [
  // Exercise 1: Double integer
  {
    name: 'Double integer',
    description: 'Double the number and return the result.',
    baseCode: fs.readFileSync(baseCodeFolder + 'test1.js').toString(),
    solution: fs.readFileSync(solutionFolder + 'test1.js').toString(),
    tests: [
      { call: '2', result: 4 },
      { call: '4', result: 8 },
      { call: '10', result: -20 },
      { call: '0', result: 0 },
      { call: '100', result: 200 },
    ],
  },

  // Exercise 2: Is number even
  {
    name: 'Is number even',
    description: 'Return true or false depending on whether the number is even.',
    baseCode: fs.readFileSync(baseCodeFolder + 'test2.js').toString(),
    solution: fs.readFileSync(solutionFolder + 'test2.js').toString(),
    tests: [
      { call: '2', result: true },
      { call: '3', result: false },
      { call: '0', result: true },
      { call: '-2', result: true },
      {
        call: 'Math.floor(Math.random() * 1000000) * 2',
        result: true,
      },
    ],
  },

  // Exercise 3: Get file extension
  {
    name: 'Get file extension',
    description: "Given a filename in a string (like 'test.jpg'), return the file extension (like 'jpg'), OR false if it doesn't have one.",
    baseCode: fs.readFileSync(baseCodeFolder + 'test3.js').toString(),
    solution: fs.readFileSync(solutionFolder + 'test3.js').toString(),

    tests: [
      { call: "getFileExtension('blatherskite.png')", result: 'png' },
      {
        call: "getFileExtension('perfectlylegal.torrent')",
        result: 'torrent',
      },
      {
        call: "getFileExtension('spaces are fine in file names.txt')",
        result: 'txt',
      },
      { call: "getFileExtension('this does not have one')", result: false },
      { call: "getFileExtension('.htaccess')", result: 'htaccess' },
    ],
  },

  // Exercise 4: Longest string
  {
    name: 'Longest string',
    description: "You'll get an array. Return the longest string inside it.",
    baseCode: fs.readFileSync(baseCodeFolder + 'test4.js').toString(),
    solution: fs.readFileSync(solutionFolder + 'test4.js').toString(),
    tests: [
      { call: "longestString(['a', 'ab', 'abc'])", result: 'abc' },
      { call: "longestString(['big',[0,1,2,3,4],'tiny'])", result: 'tiny' },
      { call: "longestString(['Hi','World','??????'])", result: 'World' },
      { call: "longestString([true,false,'lol'])", result: 'lol' },
      {
        call: "longestString([{object: true,mainly: 'to confuse you'},'x'])",
        result: 'x',
      },
    ],
  },

  // Exercise 5: Array sum
  {
    name: 'Array sum',
    description: 'Sum all the integers in a nested array, no matter how many levels deep.',
    baseCode: fs.readFileSync(baseCodeFolder + 'test5.js').toString(),
    solution: fs.readFileSync(solutionFolder + 'test5.js').toString(),
    tests: [
      { call: 'arraySum([1,2,3,4,5])', result: 15 },
      { call: 'arraySum([[1,2,3],4,5])', result: 15 },
      { call: "arraySum([[1,2,false],'4','5'])", result: 3 },
      { call: 'arraySum([[[[[[[[[1]]]]]]]], 1])', result: 2 },
      {
        call: "arraySum([['A','B','C','easy as',1,2,3]])",
        result: 6,
      },
    ],
  },
];

export async function getById(id: number): Promise<Exercise> {
  return exercices[id];
}

export async function getAll(id?: number): Promise<Exercise[]> {
  return exercices;
}
