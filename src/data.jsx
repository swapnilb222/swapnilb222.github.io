// Project + experience data, latest first

const PROJECTS = [
  {
    id: "riscv-ooo",
    year: "2025",
    tag: "Computer Architecture",
    title: "RISC-V Out-of-Order Superscalar Processor",
    titleItalic: "Out-of-Order",
    summary:
      "2-way superscalar RISC-V core with R10K-style register renaming, dual-port I-cache, single-port D-cache, and PAg branch predictor.",
    metrics: [
      { k: "CPI", v: "3.96" },
      { k: "ISSUE", v: "2-WAY" },
      { k: "RTL", v: "SystemVerilog" },
    ],
    stack: ["SystemVerilog", "Synopsys VCS", "Verdi", "PAg Predictor"],
    detail:
      "Designed and verified all modular RTL components from scratch. Validated with unit benches and standard system test suites; closed timing across pipeline frontend, rename, dispatch, issue, execute, complete and retire stages.",
    visual: "rtl",
    span: "lg",
  },
  {
    id: "cuda-cnn",
    year: "2025",
    tag: "GPU / ML Systems",
    title: "CUDA Acceleration of CNN Inference",
    titleItalic: "CUDA Acceleration",
    summary:
      "Custom CUDA kernels for convolution layers — runtime cut from 13+ s to 34 ms. A 380× end-to-end speedup.",
    metrics: [
      { k: "SPEEDUP", v: "380×" },
      { k: "BASELINE", v: "13.0 s" },
      { k: "OPTIMIZED", v: "34 ms" },
    ],
    stack: ["CUDA", "PyTorch", "CNN", "Memory Coalescing"],
    detail:
      "Tiled, coalesced, and warp-aware kernels with shared-memory staging. Demonstrates expertise in GPU memory hierarchy, occupancy tuning, and performance-critical ML systems.",
    visual: "cuda",
    span: "md",
  },
  {
    id: "assistive-vision",
    year: "2025",
    tag: "Deep Learning",
    title: "Assistive Vision System for the Visually Impaired",
    titleItalic: "Assistive Vision",
    summary:
      "End-to-end SSD + Inception-v3 detection pipeline with real-time audio feedback. Presented at the 4th Annual Disability Visibility in Engineering Symposium, U-M.",
    metrics: [
      { k: "VAL ACC", v: "98.3%" },
      { k: "MODEL", v: "SSD + INCEPTION-V3" },
      { k: "REAL-TIME", v: "AUDIO" },
    ],
    stack: ["PyTorch", "SSD", "Inception-v3", "Audio TTS"],
    detail:
      "Designed preprocessing, training and evaluation workflows. Live demo provides spatial audio cues for nearby objects.",
    visual: "vision",
    span: "md",
  },
  {
    id: "gpu-novelty",
    year: "2025",
    tag: "Computational Chemistry",
    title: "GPU Acceleration of Configuration Novelty Metric for ML Interatomic Potentials",
    titleItalic: "Novelty Metric",
    summary:
      "Custom CUDA kernels accelerated a configuration-novelty scoring system for enhanced Machine-Learned Interatomic Potentials.",
    metrics: [
      { k: "TARGET", v: "MLIPS" },
      { k: "RUNTIME", v: "↓↓↓" },
      { k: "STACK", v: "CUDA" },
    ],
    stack: ["CUDA", "C++", "Numerical Methods"],
    detail:
      "Improved throughput for computational-chemistry workloads by mapping novelty scoring onto a fully parallel reduction tree.",
    visual: "lattice",
    span: "sm",
  },
  {
    id: "quantum-rna",
    year: "2025",
    tag: "Quantum Computing",
    title: "Quantum Denoising of Single-Cell RNA Sequencing Data",
    titleItalic: "Quantum Denoising",
    summary:
      "Quantum State Tomography applied to scRNA-seq denoising — outperformed classical MAGIC imputation on PBMC.",
    metrics: [
      { k: "DATASET", v: "PBMC" },
      { k: "BASELINE", v: "MAGIC" },
      { k: "OUTCOME", v: "OUTPERFORMED" },
    ],
    stack: ["Qiskit", "Python", "Tomography", "scRNA-seq"],
    detail:
      "Quantum-classical hybrid pipeline. State reconstruction via tomography on small qubit registers, imputation back to expression matrix.",
    visual: "qubit",
    span: "sm",
  },
  {
    id: "ml-lora",
    year: "2024",
    tag: "Wireless / ML",
    title: "ML Joint Coded Modulation for Non-Coherent Wireless (LoRa)",
    titleItalic: "Joint Coded Modulation",
    summary:
      "Learned coded-modulation scheme that outperforms LoRa in non-coherent detection — applicable to IoT/LPWAN PHY.",
    metrics: [
      { k: "DOMAIN", v: "LPWAN PHY" },
      { k: "MODE", v: "NON-COHERENT" },
      { k: "VS.", v: "LoRa" },
    ],
    stack: ["Python", "PyTorch", "DSP", "Coded Mod"],
    detail:
      "Co-trained encoder/decoder operating directly on complex baseband symbols. Demonstrates non-coherent detection gains under fading.",
    visual: "constellation",
    span: "md",
  },
  {
    id: "openran-5g",
    year: "2023",
    tag: "5G / FPGA / SoC",
    title: "5G Low-PHY OpenRAN Radio Unit on Zynq-7000",
    titleItalic: "OpenRAN Radio Unit",
    summary:
      "End-to-end Low-PHY RU on ARM Cortex-A9 + Kintex-7 (ZC-706), packaged as a PetaLinux app meeting strict real-time latency.",
    metrics: [
      { k: "PLATFORM", v: "ZYNQ-7000" },
      { k: "RU", v: "LOW-PHY" },
      { k: "STACK", v: "OPENRAN" },
    ],
    stack: ["Vivado", "MATLAB SysGen", "PetaLinux", "AXI"],
    detail:
      "FPGA-based modular signal-processing pipelines: channel estimation, filtering, adaptive correction, and performance monitoring. RTL verified for PDSCH/PUSCH baseband against Keysight 5G NR conformance.",
    visual: "spectrum",
    span: "lg",
  },
  {
    id: "iot-esp32",
    year: "2022",
    tag: "Embedded / IoT",
    title: "ESP32 IoT Telemetry & Control with React Native",
    titleItalic: "Telemetry & Control",
    summary:
      "Real-time ESP32 telemetry node with cloud relay and a React Native control surface.",
    metrics: [
      { k: "MCU", v: "ESP32" },
      { k: "APP", v: "REACT NATIVE" },
      { k: "LINK", v: "CLOUD" },
    ],
    stack: ["Embedded C", "ESP-IDF", "React Native", "MQTT"],
    detail:
      "End-to-end hardware/software co-design: firmware, transport, app. Demonstrates connected-physical-system development across the full stack.",
    visual: "iot",
    span: "sm",
  },
  {
    id: "dvb-rcs",
    year: "2022",
    tag: "Channel Coding",
    title: "Duo-Binary Turbo Decoder for DVB-RCS",
    titleItalic: "Turbo Decoder",
    summary:
      "DRDO-funded RTL turbo decoder block delivered as a revenue-generating IP for C-DOT.",
    metrics: [
      { k: "STD", v: "DVB-RCS" },
      { k: "FUNDED", v: "DRDO" },
      { k: "TYPE", v: "REVENUE IP" },
    ],
    stack: ["RTL", "Verilog", "Turbo Codes"],
    detail:
      "Fixed-point Max-Log-MAP duo-binary decoder, latency- and area-tuned for satellite return channels.",
    visual: "trellis",
    span: "sm",
  },
  {
    id: "lte-validation",
    year: "2021",
    tag: "LTE / 3GPP",
    title: "LTE eNodeB v2 — 3GPP Compliance Test Suite",
    titleItalic: "eNodeB Validation",
    summary:
      "Test cases across S1/X2/Uu (3GPP Rel 9–12) — directly contributed to securing a major national telecom tender.",
    metrics: [
      { k: "REL", v: "9–12" },
      { k: "IF", v: "S1 · X2 · Uu" },
      { k: "OUTCOME", v: "TENDER WIN" },
    ],
    stack: ["Python", "C", "Wireshark", "Amarisoft", "TM500"],
    detail:
      "Functional + load + stability validation of VoLTE, ETWS, NB-IoT, 2x2 MIMO, FDD+TDD, LBS under live traffic.",
    visual: "protocol",
    span: "md",
  },
  {
    id: "pathforward",
    year: "2026",
    tag: "Founder · Semifinalist",
    title: "PathForward — Graduate Intelligence Platform",
    titleItalic: "PathForward",
    summary:
      "Munger Case Competition Semifinalist. Graduate career platform connecting alumni with current students on similar paths. MVP + business plan.",
    metrics: [
      { k: "STAGE", v: "MVP" },
      { k: "COMP", v: "MUNGER '26" },
      { k: "ROUND", v: "SEMIFINALS" },
    ],
    stack: ["React", "Node", "Pitch", "MVP"],
    detail: "End-to-end: product design, working prototype, financial model, and pitch.",
    link: "https://github.com/swapnilb222/CASE_Presentation_Munger_2026",
    visual: "graph",
    span: "md",
  },
  {
    id: "smartqrx",
    year: "2025",
    tag: "Founder · Semifinalist",
    title: "SmartQRX — Tamper-Detection QR System",
    titleItalic: "SmartQRX",
    summary:
      "Michigan Business Challenge Semifinalist. Smart QR with visible color-change indicators for moisture, temperature, and tamper events in supply-chain packaging.",
    metrics: [
      { k: "SENSE", v: "TEMP · RH · TAMPER" },
      { k: "COMP", v: "MBC" },
      { k: "ROUND", v: "SEMIFINALS" },
    ],
    stack: ["Materials", "QR", "Supply Chain"],
    detail: "Color-change ink chemistry triggered by environmental thresholds; QR remains optically scannable.",
    visual: "qr",
    span: "sm",
  },
  {
    id: "fuel-patent",
    year: "2019",
    tag: "Embedded · Commercialized",
    title: "SIM908 Fuel-Notification Device",
    titleItalic: "Fuel-Notification",
    summary:
      "Embedded device using pulse-counting flow sensing and 5 m GPS accuracy to detect and report fuel malpractice. Commercialized by TSecond, India; product patented by the company.",
    metrics: [
      { k: "STATUS", v: "DEPLOYED" },
      { k: "GPS", v: "5 m" },
      { k: "OEM", v: "TSecond" },
    ],
    stack: ["AVR", "SIM908", "GPS/GSM", "PCB"],
    detail: "Embedded firmware + custom PCB. Pulse-counting flow algorithm; cellular telemetry to dispatcher.",
    visual: "sensor",
    span: "sm",
  },
];

const EXPERIENCE = [
  {
    org: "University of Michigan, Ann Arbor",
    where: "Ann Arbor, MI",
    role: "M.S., Electrical and Computer Engineering",
    period: "2024 — 2026",
    period_short: "2024–26",
    detail:
      "GPA 3.7/4.0. Coursework: Parallel Computer Architecture, Probability & Random Processes, Quantum Computing, VLSI Design.",
    tags: ["Graduate"],
  },
  {
    org: "Centre for Development of Telematics (C-DOT)",
    where: "Bangalore, India",
    role: "Senior Engineer · Digital & Modem Group (Level EII)",
    period: "2021 — 2024",
    period_short: "2021–24",
    detail:
      "Led 5G Low-PHY OpenRAN RU on Zynq-7000. Architected FPGA signal-processing pipelines. Designed/verified RTL for PDSCH/PUSCH; validated against Keysight 5G NR. Delivered DVB-RCS turbo decoder IP (DRDO-funded).",
    tags: ["5G NR", "RTL", "FPGA", "OpenRAN"],
  },
  {
    org: "Centre for Development of Telematics (C-DOT)",
    where: "Bangalore, India",
    role: "Engineer · Product Integration & Validation, LTE (Level EI)",
    period: "2018 — 2021",
    period_short: "2018–21",
    detail:
      "3GPP-compliant test cases for LTE eNodeB v2 across S1/X2/Uu (Rel 9–12). Automated validation in Python/C. Live functional testing of VoLTE, ETWS, NB-IoT, 2x2 MIMO, FDD+TDD. Test suite contributed to national tender win.",
    tags: ["LTE", "3GPP", "Validation"],
  },
  {
    org: "VNIT Nagpur, India",
    where: "Nagpur, India",
    role: "B.E., Electronics & Communication Engineering",
    period: "2014 — 2018",
    period_short: "2014–18",
    detail: "GPA 8.9/10.0.",
    tags: ["Undergraduate"],
  },
];

const PUBLICATIONS = [
  {
    title: "ATRNN: Using Seq2Seq Approach for Decoding Polar Codes",
    venue: "IEEE COMSNETS",
    year: "2020",
  },
  {
    title: "DNNStream: Deep-Learning Based Content Adaptive Real-Time Streaming",
    venue: "IEEE SPCOM",
    year: "2020",
  },
  {
    title: "Deep Learning Based Object Detection Framework for the Visually-Impaired",
    venue: "IEEE ICCMC",
    year: "2020",
  },
  {
    title: "Compact Planar Antenna for TV White Space Applications",
    venue: "IEEE SCEECS",
    year: "2018",
  },
];

const SKILLS = [
  {
    group: "Hardware & RTL",
    items: [
      "RTL Design",
      "SystemVerilog",
      "Verilog",
      "FPGA (Zynq-7000, Kintex-7)",
      "SoC",
      "ASIC Verification",
      "ARM Cortex-A9",
      "AXI / AHB",
      "DMA",
      "PCB Design",
    ],
  },
  {
    group: "Wireless & RF",
    items: [
      "5G NR",
      "LTE (3GPP Rel 9–12)",
      "PHY Layer",
      "OFDM",
      "MIMO",
      "OpenRAN",
      "eNodeB",
      "NB-IoT",
      "VoLTE",
      "Spectrum / VSA",
      "Amarisoft",
      "TM500",
    ],
  },
  {
    group: "EDA & Simulation",
    items: [
      "Synopsys VCS",
      "Verdi",
      "Cadence Virtuoso",
      "Vivado",
      "Vitis",
      "PetaLinux",
      "MATLAB SysGen",
      "Eagle PCB",
      "HFSS",
      "Keil C",
    ],
  },
  {
    group: "AI / ML",
    items: [
      "PyTorch",
      "TensorFlow",
      "CUDA",
      "CNN · SSD · Inception",
      "Seq2Seq",
      "Inference Optimization",
      "scikit-learn",
    ],
  },
  {
    group: "Languages",
    items: ["C", "C++", "Python", "SystemVerilog", "Verilog", "MATLAB", "Embedded C", "Bash", "JS"],
  },
  {
    group: "Tools",
    items: ["Git", "Linux", "Docker", "React Native", "Wireshark", "Valgrind", "GDB", "LaTeX"],
  },
];

const STATS = [
  { k: "6+", v: "Years professional experience" },
  { k: "13", v: "Featured projects" },
  { k: "4", v: "IEEE publications" },
  { k: "3", v: "Pitch competitions" },
];

const CONTACT = {
  email: "swapbhole22@gmail.com",
  github: "https://github.com/swapnilb222",
  linkedin: "https://www.linkedin.com/in/swapnilbhole22/",
  resume: "assets/Swapnil_Bhole_Resume.pdf",
};

Object.assign(window, { PROJECTS, EXPERIENCE, PUBLICATIONS, SKILLS, STATS, CONTACT });
