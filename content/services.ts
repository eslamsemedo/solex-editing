export interface Service {
  id: string
  name: string
  description: string
  features: string[]
  deliverables: string[]
  turnaround: string
  audience: string
}

export const editingServices: Service[] = [
  {
    id: "substantive-editing",
    name: "Substantive Editing",
    description:
      "Comprehensive editing focused on improving structure, argument clarity, tone, and flow for maximum research impact. Our editors work on the big picture elements that make your research compelling and accessible.",
    features: [
      "Structural reorganization and flow improvement",
      "Argument strengthening and logical coherence",
      "Tone and style optimization for target audience",
      "Content clarity and readability enhancement",
      "Research methodology review and suggestions",
      "Literature review organization and integration",
    ],
    deliverables: [
      "Manuscript with tracked changes",
      "Clean version of edited manuscript",
      "Detailed editor report with recommendations",
      "Summary of major changes and improvements",
    ],
    turnaround: "7-14 days",
    audience: "All researchers",
  },
  {
    id: "copy-editing",
    name: "Copy Editing",
    description:
      "Meticulous line-by-line editing to perfect grammar, usage, terminology, and style guide compliance. Ensures your manuscript meets the highest standards of academic writing.",
    features: [
      "Grammar, punctuation, and syntax correction",
      "Terminology consistency and accuracy",
      "Style guide compliance (APA, AMA, Chicago, etc.)",
      "Citation format verification and correction",
      "Word choice optimization and clarity",
      "Sentence structure improvement",
    ],
    deliverables: [
      "Manuscript with tracked changes",
      "Clean version of edited manuscript",
      "Style guide compliance report",
      "Terminology glossary (if applicable)",
    ],
    turnaround: "5-10 days",
    audience: "All researchers",
  },
  {
    id: "proofreading",
    name: "Proofreading",
    description:
      "Final polish for manuscripts that are nearly ready for submission. Focuses on eliminating typos, punctuation errors, and minor formatting inconsistencies.",
    features: [
      "Typo and spelling error correction",
      "Punctuation and capitalization fixes",
      "Minor formatting inconsistencies",
      "Reference list accuracy check",
      "Table and figure caption review",
      "Final quality assurance pass",
    ],
    deliverables: ["Manuscript with tracked changes", "Clean proofread version", "Proofreading checklist report"],
    turnaround: "3-5 days",
    audience: "Near-final manuscripts",
  },
]

export const publicationServices: Service[] = [
  {
    id: "peer-review",
    name: "Pre-Submission Peer Review",
    description:
      "Comprehensive reviewer-style feedback before journal submission. Our experts simulate the peer review process to identify potential issues and strengthen your manuscript.",
    features: [
      "Comprehensive manuscript evaluation",
      "Methodology and analysis review",
      "Literature review assessment",
      "Statistical analysis verification",
      "Recommendation for target journals",
      "Revision suggestions and priorities",
    ],
    deliverables: [
      "Detailed peer review report",
      "Scored evaluation rubric",
      "Revision priority recommendations",
      "Journal targeting suggestions",
    ],
    turnaround: "10-14 days",
    audience: "Pre-submission manuscripts",
  },
  {
    id: "plagiarism-check",
    name: "Plagiarism Checker",
    description:
      "Comprehensive similarity scan with expert guidance on proper citation and paraphrasing. Ensures your manuscript meets originality standards.",
    features: [
      "Advanced similarity detection scan",
      "Citation and reference verification",
      "Paraphrasing improvement suggestions",
      "Self-plagiarism identification",
      "Proper attribution guidance",
      "Originality enhancement recommendations",
    ],
    deliverables: [
      "Detailed similarity report",
      "Highlighted problematic sections",
      "Citation improvement suggestions",
      "Paraphrasing alternatives",
    ],
    turnaround: "2-3 days",
    audience: "All manuscripts",
  },
  {
    id: "formatting-artwork",
    name: "Formatting & Artwork Editing",
    description:
      "Professional journal-ready formatting with high-quality figure and table preparation. Ensures your manuscript meets specific journal requirements.",
    features: [
      "Journal-specific formatting compliance",
      "Reference style formatting",
      "Table design and optimization",
      "Figure quality enhancement",
      "Image resolution optimization",
      "Layout and typography perfection",
    ],
    deliverables: [
      "Journal-ready formatted manuscript",
      "High-resolution figures and tables",
      "Formatting compliance checklist",
      "Submission-ready file package",
    ],
    turnaround: "5-7 days",
    audience: "Pre-submission manuscripts",
  },
  {
    id: "rejected-paper-editing",
    name: "Rejected Paper Editing",
    description:
      "Specialized support for manuscripts that have received reviewer feedback. Includes targeted revisions and response letter preparation for resubmission.",
    features: [
      "Reviewer comment analysis and interpretation",
      "Targeted revision implementation",
      "Response letter drafting and editing",
      "Resubmission strategy development",
      "Additional research recommendations",
      "Journal selection guidance",
    ],
    deliverables: [
      "Revised manuscript with tracked changes",
      "Point-by-point response letter",
      "Revision summary document",
      "Resubmission strategy guide",
    ],
    turnaround: "7-10 days",
    audience: "Previously rejected manuscripts",
  },
]
