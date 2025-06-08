export const linkedListQuestions = [
  {
    question: "In a singly linked list, each node contains...",
    options: ["Data only", "Data and next pointer", "Only a pointer", "Two next pointers"],
    answer: "Data and next pointer",
  },
  {
    question: "Which operation is more efficient in linked lists than arrays?",
    options: ["Access by index", "Traversal", "Insertion at start", "Sorting"],
    answer: "Insertion at start",
  },
  {
    question: "Time complexity to access the N-th node in a singly linked list is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(n)",
  },
];

export const arraysQuestions = [
  {
    question: "Which of the following is true about arrays in most programming languages?",
    options: [
      "Arrays are dynamic in size",
      "All elements are stored non-contiguously",
      "Elements can be accessed in O(1) time",
      "Array indices start at 1",
    ],
    answer: "Elements can be accessed in O(1) time",
  },
  {
    question: "What is the time complexity to insert an element at the beginning of an array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(n)",
  },
  {
    question: "Which of these operations is fastest in an array?",
    options: ["Insertion at end", "Insertion at beginning", "Deletion at index", "Traversal"],
    answer: "Traversal",
  },
];

export const stackQuestions = [
  {
    question: "What is the order of element access in a stack?",
    options: ["FIFO", "LIFO", "Random", "Circular"],
    answer: "LIFO",
  },
  {
    question: "Which operation is used to add an element to a stack?",
    options: ["enqueue", "dequeue", "push", "append"],
    answer: "push",
  },
  {
    question: "Which of the following applications use stacks?",
    options: ["Undo in editors", "Level-order traversal", "Job scheduling", "Hashing"],
    answer: "Undo in editors",
  },
];

export const queueQuestions = [
  {
    question: "What is the access order in a standard queue?",
    options: ["LIFO", "Random", "FIFO", "Circular"],
    answer: "FIFO",
  },
  {
    question: "Which operation removes an element from the front of a queue?",
    options: ["push", "pop", "dequeue", "shift"],
    answer: "dequeue",
  },
  {
    question: "Circular queues help to...",
    options: [
      "Reduce space wastage",
      "Sort data efficiently",
      "Implement recursion",
      "Reduce time complexity of search",
    ],
    answer: "Reduce space wastage",
  },
];

export const treeQuestions = [
  {
    question: "What is the maximum number of children a binary tree node can have?",
    options: ["1", "2", "3", "Unlimited"],
    answer: "2",
  },
  {
    question: "Which traversal visits nodes in sorted order for a BST?",
    options: ["Pre-order", "Post-order", "In-order", "Level-order"],
    answer: "In-order",
  },
  {
    question: "The height of a complete binary tree with N nodes is:",
    options: ["log N", "N", "N log N", "sqrt(N)"],
    answer: "log N",
  },
];

export const graphQuestions = [
  {
    question: "What is the primary data structure used to represent graphs?",
    options: ["Array", "Linked List", "Matrix", "Tree"],
    answer: "Matrix",
  },
  {
    question: "Which algorithm is used for finding the shortest path in a weighted graph?",
    options: ["DFS", "BFS", "Dijkstra's Algorithm", "Prim's Algorithm"],
    answer: "Dijkstra's Algorithm",
  },
  {
    question: "In a directed graph, an edge from A to B means...",
    options: ["A can reach B", "B can reach A", "A and B are connected bidirectionally", "None of the above"],
    answer: "A can reach B",
  },
];

export const bfsQuestions = [
  {
    question: "Which data structure is primarily used to implement Breadth-First Search (BFS)?",
    options: ["Stack", "Queue", "Heap", "Recursion"],
    answer: "Queue",
  },
  {
    question: "In BFS, the algorithm explores...",
    options: [
      "As deep as possible before backtracking",
      "Only leaf nodes",
      "All neighbors at the present depth first",
      "Nodes randomly",
    ],
    answer: "All neighbors at the present depth first",
  },
  {
    question: "What is the time complexity of BFS in a graph with V vertices and E edges?",
    options: ["O(V + E)", "O(V²)", "O(log V)", "O(E log V)"],
    answer: "O(V + E)",
  },
];

export const dfsQuestions = [
  {
    question: "Which data structure is typically used in Depth-First Search (DFS)?",
    options: ["Queue", "Stack", "Heap", "Priority Queue"],
    answer: "Stack",
  },
  {
    question: "DFS is most suitable for...",
    options: [
      "Finding shortest path",
      "Topological sorting",
      "Level-order traversal",
      "Checking even cycles",
    ],
    answer: "Topological sorting",
  },
  {
    question: "What happens if DFS is run on a graph with a cycle and no visited check?",
    options: [
      "Terminates successfully",
      "Only visits leaf nodes",
      "Goes into infinite recursion or loop",
      "Skips all nodes",
    ],
    answer: "Goes into infinite recursion or loop",
  },
];








