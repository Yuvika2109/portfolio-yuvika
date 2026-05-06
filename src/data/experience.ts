export const experiences = [
  {
    role: "Machine Learning Intern", company: "JA Assure",
    period: "Dec 2025 – Present", location: "Remote",
    highlights: [
  "1. Designed and implemented a multilingual conversational AI pipeline capable of processing both text and voice inputs, using Python with Speech-to-Text, language detection, and document retrieval to generate context-aware responses",
  "2. Built a semantic retrieval system leveraging Sentence-BERT embeddings and FAISS vector search to efficiently retrieve relevant information from insurance FAQ documents within a Retrieval-Augmented Generation (RAG) architecture",
  "3. Developed RESTful APIs using FastAPI to support chat interactions, speech-to-text transcription, and text-to-speech generation, enabling seamless communication between the frontend interface and the AI-powered backend system"
],
    tech: ["Python", "Sentence-BERT", "FAISS", "REST APIs", "NLP"],
  },
  {
    role: "SDE Intern", company: "PayU (Wimbo)",
    period: "Jan 2026 – Apr 2026", location: "Remote",
    highlights: [
      "1. Designed and built an end-to-end agentic pipeline that converts plain-English fraud scenarios into fully labelled synthetic transaction datasets, eliminating dependency on PII-sensitive production data for model training",
      "2. Engineered a deterministic fraud injection engine supporting 13 fraud scenarios across Card (EMVCo 3DS v2.3.1) and UPI payment rails, integrated with a local LLM (Llama3 via Ollama) as a blueprint generation layer — ensuring zero data leaves the system while enabling dynamic, scenario-aware dataset specifications",
      "3. Built a 4-step Rule Engine evaluation suite measuring Precision, Recall, F1 Score, and Fraud Hit Rate against ground-truth labelled datasets, with dual interfaces (Streamlit web app + CLI) enabling technical and non-technical stakeholders to generate, preview, and export datasets in CSV, JSON, and Parquet formats",
    ],
    tech: ["Python", "Ollama (Llama3)", "Streamlit", "Pandas", "NumPy", "PyArrow", "Git"],
  },
  {
    role: "Machine Learning Intern", company: "IIT Kharagpur",
    period: "Jun 2025 – Jul 2025", location: "Kharagpur, West Bengal",
    highlights: [
      "1. Analyzed large-scale manufacturing datasets comprising 30,000+ samples across multiple production parameters, performing comprehensive exploratory data analysis, feature engineering, and statistical profiling to identify key quality predictors",
      "2. Developed end-to-end automated ML pipelines for model training, hyperparameter tuning, evaluation, and comparison across four architectures — Random Forest, XGBoost, Artificial Neural Networks (ANN), and LSTM — achieving a best R² score of 0.99 on held-out test data",
      "3. Built an interactive Streamlit dashboard with multi-page navigation for real-time performance visualization, experiment tracking, model comparison charts, and automated PDF report generation to support data-driven decision-making by the research team",
      "4. Co-author of ASME book chapter: “Data-driven Modeling and Optimization for Manufacturing Processes” (copyright received)."
    ],
    tech: ["Python", "Scikit-learn", "XGBoost", "TensorFlow", "LSTM", "Streamlit"],
  },
  {
    role: "Generative AI Intern", company: "Tata Steel Downstream Products Limited",
    period: "Dec 2024 – Jan 2025", location: "Kolkata, West Bengal",
    highlights: [
      "1. Engineered an LLM-powered automation framework using Python and advanced NLP techniques to streamline end-to-end procurement workflows — including vendor evaluation, document parsing, and compliance checking — reducing manual review time by 20% across 5 departments",
      "2. Developed ProcurAIytics, an intelligent AI chatbot built with LangChain that automated complex SQL query generation from natural language prompts, enabling non-technical procurement staff to retrieve data 3x faster with a 40% improvement in overall query efficiency",
    ],
    tech: ["Python", "LangChain", "NLP", "SQL", "LLMs", "Prompt Engineering"],
  },
];
