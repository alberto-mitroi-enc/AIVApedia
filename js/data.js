const agents = [
  {
    number: "01",
    title: "Knowledge Summarization Agent",
    description:
      "Analyze existing documentation and gather domain context to kick off the project.",
    bgClass: "bg-encoraNavy",
    textClass: "text-white",
    descriptionClass: "text-gray-300",
    spanClass: "",
    docId: "knowledge-summarization-agent",
  },
  {
    number: "02",
    title: "SRD Generator",
    description:
      "Generate comprehensive Software Requirements Documents automatically.",
    bgClass: "bg-encoraCoral",
    textClass: "text-encoraNavy",
    descriptionClass: "text-encoraNavy/80",
    spanClass: "",
    docId: "srd-generator",
  },
  {
    number: "03",
    title: "JIRA User-Story Generator",
    description:
      "Break down the SRD into actionable, well-defined Jira user stories and epics.",
    bgClass: "bg-encoraPeriwinkle",
    textClass: "text-encoraNavy",
    descriptionClass: "text-encoraNavy/80",
    spanClass: "",
    docId: "jira-user-story-generator",
  },
  {
    number: "04",
    title: "Code Planner Agent",
    description:
      "Plan code structure, logic flow, and architectural patterns before implementation.",
    bgClass: "bg-encoraLime",
    textClass: "text-encoraNavy",
    descriptionClass: "text-encoraNavy/80",
    spanClass: "",
    docId: "code-planner-agent",
  },
  {
    number: "05",
    title: "Code Documenter",
    description:
      "Automatically generate inline comments, readmes, and technical documentation.",
    bgClass: "bg-encoraNavy",
    textClass: "text-white",
    descriptionClass: "text-gray-300",
    spanClass: "",
    docId: "code-documenter",
  },
  {
    number: "06",
    title: "Code Reviewer",
    description:
      "Analyze pull requests for bugs, performance issues, and adherence to standards.",
    bgClass: "bg-encoraCoral",
    textClass: "text-encoraNavy",
    descriptionClass: "text-encoraNavy/80",
    spanClass: "",
    docId: "code-reviewer",
  },
  {
    number: "07",
    title: "Test Data Generator",
    description:
      "Create comprehensive mock datasets and synthetic data for secure testing environments.",
    bgClass: "bg-encoraPeriwinkle",
    textClass: "text-encoraNavy",
    descriptionClass: "text-encoraNavy/80",
    spanClass: "",
    docId: "test-data-generator",
  },
  {
    number: "08",
    title: "Test Case Generator",
    description:
      "Formulate exhaustive test cases covering edge cases directly from requirements.",
    bgClass: "bg-encoraLime",
    textClass: "text-encoraNavy",
    descriptionClass: "text-encoraNavy/80",
    spanClass: "",
    docId: "test-case-generator",
  },
  {
    number: "09",
    title: "Automation Test Script Generator",
    description:
      "Write functional automated test scripts based on the previously defined test cases.",
    bgClass: "bg-encoraNavy",
    textClass: "text-white",
    descriptionClass: "text-gray-300",
    spanClass: "",
    docId: "automation-test-script-generator",
  },
  {
    number: "10",
    title: "Build Script Generator",
    description:
      "Generate Jenkinsfiles and pipeline configurations to automate the build process.",
    bgClass: "bg-encoraCoral",
    textClass: "text-encoraNavy",
    descriptionClass: "text-encoraNavy/80",
    spanClass: "",
    docId: "build-script-generator",
  },
  {
    number: "11",
    title: "Project Status Reporter",
    description:
      "Aggregate data across the SDLC to provide real-time updates and summary reports for stakeholders.",
    bgClass: "bg-encoraPeriwinkle",
    textClass: "text-encoraNavy",
    descriptionClass: "text-encoraNavy/80",
    spanClass: "md:col-span-2",
    descriptionWrapperClass: "max-w-3xl",
    docId: "project-status-reporter",
  },
];

const faqs = [
  {
    question: "How do I install the AIVA application?",
    answer:
      "You can install the AIVA extension directly from the internal company portal or fetch the latest .vsix file from the central repository. Detailed step-by-step instructions are available in our Getting Started guide.",
    expanded: true,
  },
  {
    question: "What exactly does AIVA do?",
    answer:
      "AIVA is our Composable AI Engine. It provides a suite of specialized agents that automate various parts of the Software Development Life Cycle (SDLC), like writing test cases, reviewing code, and generating user stories, allowing engineers to focus on orchestration rather than repetitive tasks.",
    expanded: false,
  },
  {
    question: "How do I trigger a specific agent?",
    answer:
      "Once the extension is installed in your IDE, you can invoke agents using the command palette (Ctrl+Shift+P or Cmd+Shift+P) by typing 'AIVA:' followed by the agent name, or by interacting directly with the dedicated AIVA sidebar panel.",
    expanded: false,
  },
  {
    question: "Where can I report bugs or suggest new features?",
    answer:
      "Please submit any bugs, feedback, or feature requests via our internal Jira board. Just create a ticket under the 'AIVA Extension' project and it will be triaged directly to the platform engineering team.",
    expanded: false,
  },
];
