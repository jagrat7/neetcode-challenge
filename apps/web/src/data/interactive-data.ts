// Algorithm Walkthrough: Contains Duplicate
// nums = [1, 2, 3, 3] → true

export const WALKTHROUGH_NUMS = [1, 2, 3, 3]

export interface AlgorithmStep {
  pointerIndex: number
  seen: number[]
  message: string
  found: boolean
}

export const ALGORITHM_STEPS: AlgorithmStep[] = [
  { pointerIndex: -1, seen: [], message: "Start iterating through array", found: false },
  { pointerIndex: 0, seen: [], message: "Check: is 1 in seen? No", found: false },
  { pointerIndex: 0, seen: [1], message: "Add 1 to seen", found: false },
  { pointerIndex: 1, seen: [1], message: "Check: is 2 in seen? No", found: false },
  { pointerIndex: 1, seen: [1, 2], message: "Add 2 to seen", found: false },
  { pointerIndex: 2, seen: [1, 2], message: "Check: is 3 in seen? No", found: false },
  { pointerIndex: 2, seen: [1, 2, 3], message: "Add 3 to seen", found: false },
  { pointerIndex: 3, seen: [1, 2, 3], message: "Check: is 3 in seen? Yes!", found: true },
  { pointerIndex: 3, seen: [1, 2, 3], message: "Duplicate found! Return true", found: true },
]

// NeetBot AI Chat

export interface ChatMessage {
  role: "user" | "bot"
  text: string
}

export interface ChatScript {
  trigger: string
  messages: ChatMessage[]
}

export const NEETBOT_SCRIPTS: ChatScript[] = [
  {
    trigger: "I'm stuck on two sum",
    messages: [
      { role: "user", text: "I'm stuck on two sum" },
      {
        role: "bot",
        text: "Think about what data structure lets you check if a complement exists in O(1). A hash map stores values you've seen — for each number, check if (target - number) is already in the map.",
      },
    ],
  },
  {
    trigger: "How do I approach sliding window?",
    messages: [
      { role: "user", text: "How do I approach sliding window?" },
      {
        role: "bot",
        text: "Maintain a valid range by expanding right and shrinking left. Start both pointers at 0, expand right to include elements, shrink left when the window constraint is violated.",
      },
    ],
  },
  {
    trigger: "How do I solve graph problems?",
    messages: [
      { role: "user", text: "How do I solve graph problems?" },
      {
        role: "bot",
        text: "First, identify if it's directed or undirected. For shortest path in unweighted graphs, use BFS. Build an adjacency list, then traverse level by level from the source node.",
      },
    ],
  },
]

export const DEFAULT_NEETBOT_CHAT: ChatMessage[] = NEETBOT_SCRIPTS[0].messages

// Video course chapters (for the embedded video player mock)

export const VIDEO_CHAPTERS = [
  { title: "RAM", duration: "6 min", free: true },
  { title: "Static Arrays", duration: "15 min", free: false },
  { title: "Dynamic Arrays", duration: "16 min", free: false },
  { title: "Stacks", duration: "4 min", free: false },
  { title: "Singly Linked Lists", duration: "12 min", free: true },
  { title: "Doubly Linked Lists", duration: "10 min", free: false },
]
