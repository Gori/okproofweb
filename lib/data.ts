export const navItems = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#infopoint" },
  { label: "Get started", href: "#get-started" },
];

export const subnavItems = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "For teams", href: "#for-teams" },
  { label: "Tech", href: "#tech" },
];

export const tiles = [
  {
    id: "sandbox",
    title: "sandbox",
    description:
      "Every candidate gets an isolated cloud VM. Their own filesystem, processes, and network. Nothing shared, nothing leaked. Each test runs in its own world.",
    color: "bg-pink-400",
    images: [] as string[],
  },
  {
    id: "build",
    title: "build",
    description:
      "Candidates describe what they want. The AI writes code. A live preview updates in real time. No IDE setup, no boilerplate, no excuses.",
    color: "bg-yellow-400",
    images: [] as string[],
  },
  {
    id: "watch",
    title: "watch",
    description:
      "See exactly how candidates think, communicate, and iterate. Every message, every file change, every decision — captured and replayable.",
    color: "bg-green-400",
    images: [] as string[],
  },
  {
    id: "review",
    title: "review",
    description:
      "Full chat replay, code snapshots, and a working demo of what they built. Review on your schedule, not theirs.",
    color: "bg-blue-500",
    images: [] as string[],
  },
];

export const rooms = [
  {
    type: "For teams",
    priceLabel: "create, invite, review",
    variants: [
      {
        floor: "1. Create a test",
        price: "Write a title, description, and instructions. Set a time limit, prompt cap, and choose which AI model candidates use.",
        size: "Claude, GPT, or Gemini",
      },
      {
        floor: "2. Invite candidates",
        price: "Generate a unique invite link per candidate. Share it however you like. No accounts needed on their end.",
        size: "Token-based links",
      },
      {
        floor: "3. Review submissions",
        price: "See each candidate\u2019s chat replay, final code snapshot, and a live preview of what they actually built.",
        size: "Full audit trail",
      },
    ],
  },
  {
    type: "For candidates",
    priceLabel: "open, build, submit",
    variants: [
      {
        floor: "1. Open the link",
        price: "Read the instructions and rules. No signup required. No IDE to install. Just click and start.",
        size: "Zero friction",
      },
      {
        floor: "2. Build with AI",
        price: "Chat with an AI agent in a sandboxed environment. Describe what you want, iterate on the result, see it live.",
        size: "Real-time preview",
      },
      {
        floor: "3. Submit",
        price: "Click submit when you\u2019re done, or the timer runs out. Your code, chat history, and working demo are preserved.",
        size: "Auto-captured",
      },
    ],
  },
];

export const sharedSpaces = [
  {
    title: "Sandboxed Environments",
    description:
      "Each candidate gets an isolated E2B sandbox with its own filesystem, processes, and network. Nothing is shared between candidates. No cross-contamination, no cheating vectors.",
    color: "bg-yellow-400",
  },
  {
    title: "AI-Powered Coding",
    description:
      "Candidates work through an AI agent running inside the sandbox. The agent can read, write, and execute files — just like a real coding workflow. You see how they direct it, not just what it produces.",
    color: "bg-pink-400",
  },
  {
    title: "Multi-Provider AI",
    description:
      "Tests can use Anthropic (Claude), OpenAI (GPT), or Google (Gemini). You choose the model when creating a test. Different roles, different models, different signal.",
    color: "bg-green-400",
  },
  {
    title: "Live Preview",
    description:
      "A static file server runs on port 8080 inside each sandbox. As the AI creates or updates files, the candidate sees results immediately in an embedded iframe. No deploy step, no waiting.",
    color: "bg-blue-500",
  },
  {
    title: "Real-Time Chat",
    description:
      "Message bubbles, streaming markdown, work log cards showing tool calls and file changes, a working timer, and completion dividers. Candidates see exactly what the AI is doing.",
    color: "bg-purple-400",
  },
  {
    title: "Time & Prompt Limits",
    description:
      "Configure time limits and prompt caps per test. A countdown timer is always visible to the candidate. When limits are reached, the chat disables automatically.",
    color: "bg-orange-400",
  },
  {
    title: "Invite Links",
    description:
      "Token-based, no account required for candidates. Each link is single-use and tied to one candidate. Generate as many as you need from the admin dashboard.",
    color: "bg-turquoise-400",
  },
];

export const services = {
  students: {
    title: "For hiring teams",
    items: [
      "Find out who can actually ship with AI, not just talk about it",
      "Watch the full session: every prompt, every decision, every revision",
      "Review a working demo of what they built, not just source code",
      "Replace week-long take-homes with focused 45-minute sessions",
      "Send a link to start. No scheduling calls, no calendar coordination",
      "Compare candidates side by side in one dashboard",
    ],
  },
  parents: {
    title: "For candidates",
    items: [
      "Build something real instead of solving whiteboard puzzles",
      "Use AI the way you actually work. No pretending.",
      "Everything runs in the browser. No setup, no installs.",
      "Know the rules before you start: time limit, scope, AI model",
      "See your project come alive in real time as you work",
      "Click a link and begin. No account needed.",
    ],
  },
};

export const locationItems = [
  {
    time: "E2B",
    label: "Cloud micro-VMs for sandboxing",
    color: "bg-purple-400",
  },
  {
    time: "Convex",
    label: "Real-time database & serverless functions",
    color: "bg-yellow-400",
  },
  {
    time: "TanStack",
    label: "React 19 framework with SSR & file-based routing",
    color: "bg-brown-400",
  },
  {
    time: "OpenCode",
    label: "AI agent running inside each sandbox",
    color: "bg-blue-500",
  },
  {
    time: "WorkOS",
    label: "Passwordless admin auth with magic links",
    color: "bg-orange-400",
  },
  {
    time: "Tailwind",
    label: "CSS v4 with @tailwindcss/typography",
    color: "bg-green-400",
  },
  {
    time: "React 19",
    label: "UI runtime with streaming SSR",
    color: "bg-cream-700",
  },
  {
    time: "pnpm",
    label: "Fast, disk-efficient package manager",
    color: "bg-pink-400",
  },
];

export const faqItems = [
  {
    question: "How is this different from a take-home?",
    answer:
      "Take-homes take days and you only see the end result. Here, candidates finish in one sitting and you see how they got there.",
    color: "bg-purple-400",
  },
  {
    question: "Do candidates need to install anything?",
    answer:
      "No. You send them a link. They open it in a browser and start building. No account, no IDE, no setup.",
    color: "bg-yellow-400",
  },
  {
    question: "What stops candidates from cheating?",
    answer:
      "Each candidate gets an isolated Linux VM. The only way to write code is through the AI chat. Every prompt, tool call, and file change is logged and replayable.",
    color: "bg-blue-500",
  },
  {
    question: "How long should a test be?",
    answer:
      "Most teams run 30\u201360 minute sessions. You can set anywhere from 5 minutes to 8 hours depending on the role.",
    color: "bg-orange-400",
  },
  {
    question: "Which AI models can candidates use?",
    answer:
      "Claude Sonnet, Opus, or Haiku. GPT-5.2, GPT-5.2 Codex, or O4 Mini. Gemini 2.5 Pro, Flash, or 3.1 Pro. You pick the model when you create the test.",
    color: "bg-green-400",
  },
  {
    question: "What does it cost?",
    answer:
      "Free during early access. Join the waitlist and you\u2019ll be among the first to try it.",
    color: "bg-pink-400",
  },
];

export const roleOptions = [
  "Engineering Manager",
  "Technical Recruiter",
  "VP of Engineering",
  "CTO / Co-founder",
  "Other",
];

export const teamSizeOptions = [
  "1\u201310 engineers",
  "11\u201350 engineers",
  "51\u2013200 engineers",
  "200+ engineers",
];

export const howMeetOptions = [
  "Twitter / X",
  "Hacker News",
  "LinkedIn",
  "Friend or colleague",
  "Search engine",
  "Other",
];
