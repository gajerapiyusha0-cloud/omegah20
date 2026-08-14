import type { Domain, Twin } from "./api";

export const FALLBACK_DOMAINS: Domain[] = [
  {
    "slug": "artificial-intelligence",
    "name": "Artificial Intelligence",
    "category": "Computing & AI",
    "summary": "Artificial Intelligence is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 0.0,
    "inclination": -80.0,
    "tags": [
      "computing",
      "artificial"
    ],
    "lesson_count": 4,
    "id": 1
  },
  {
    "slug": "machine-learning",
    "name": "Machine Learning",
    "category": "Computing & AI",
    "summary": "Machine Learning is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 137.508,
    "inclination": -56.3,
    "tags": [
      "computing",
      "machine"
    ],
    "lesson_count": 5,
    "id": 2
  },
  {
    "slug": "deep-learning",
    "name": "Deep Learning",
    "category": "Computing & AI",
    "summary": "Deep Learning is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 275.016,
    "inclination": -32.6,
    "tags": [
      "computing",
      "deep"
    ],
    "lesson_count": 6,
    "id": 3
  },
  {
    "slug": "data-science",
    "name": "Data Science",
    "category": "Computing & AI",
    "summary": "Data Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 52.524,
    "inclination": -8.9,
    "tags": [
      "computing",
      "data"
    ],
    "lesson_count": 7,
    "id": 4
  },
  {
    "slug": "robotics",
    "name": "Robotics",
    "category": "Computing & AI",
    "summary": "Robotics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 190.032,
    "inclination": 14.8,
    "tags": [
      "computing",
      "robotics"
    ],
    "lesson_count": 8,
    "id": 5
  },
  {
    "slug": "mechatronics",
    "name": "Mechatronics",
    "category": "Computing & AI",
    "summary": "Mechatronics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 327.54,
    "inclination": 38.5,
    "tags": [
      "computing",
      "mechatronics"
    ],
    "lesson_count": 9,
    "id": 6
  },
  {
    "slug": "computer-vision",
    "name": "Computer Vision",
    "category": "Computing & AI",
    "summary": "Computer Vision is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 105.048,
    "inclination": 62.2,
    "tags": [
      "computing",
      "computer"
    ],
    "lesson_count": 10,
    "id": 7
  },
  {
    "slug": "natural-language-processing",
    "name": "Natural Language Processing",
    "category": "Computing & AI",
    "summary": "Natural Language Processing is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 242.556,
    "inclination": -74.1,
    "tags": [
      "computing",
      "natural"
    ],
    "lesson_count": 11,
    "id": 8
  },
  {
    "slug": "reinforcement-learning",
    "name": "Reinforcement Learning",
    "category": "Computing & AI",
    "summary": "Reinforcement Learning is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 20.064,
    "inclination": -50.4,
    "tags": [
      "computing",
      "reinforcement"
    ],
    "lesson_count": 4,
    "id": 9
  },
  {
    "slug": "generative-ai",
    "name": "Generative AI",
    "category": "Computing & AI",
    "summary": "Generative AI is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 157.572,
    "inclination": -26.7,
    "tags": [
      "computing",
      "generative"
    ],
    "lesson_count": 5,
    "id": 10
  },
  {
    "slug": "knowledge-graphs",
    "name": "Knowledge Graphs",
    "category": "Computing & AI",
    "summary": "Knowledge Graphs is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 295.08,
    "inclination": -3.0,
    "tags": [
      "computing",
      "knowledge"
    ],
    "lesson_count": 6,
    "id": 11
  },
  {
    "slug": "expert-systems",
    "name": "Expert Systems",
    "category": "Computing & AI",
    "summary": "Expert Systems is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 72.588,
    "inclination": 20.7,
    "tags": [
      "computing",
      "expert"
    ],
    "lesson_count": 7,
    "id": 12
  },
  {
    "slug": "neural-architecture-search",
    "name": "Neural Architecture Search",
    "category": "Computing & AI",
    "summary": "Neural Architecture Search is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 210.096,
    "inclination": 44.4,
    "tags": [
      "computing",
      "neural"
    ],
    "lesson_count": 8,
    "id": 13
  },
  {
    "slug": "mlops",
    "name": "MLOps",
    "category": "Computing & AI",
    "summary": "MLOps is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 347.604,
    "inclination": 68.1,
    "tags": [
      "computing",
      "mlops"
    ],
    "lesson_count": 9,
    "id": 14
  },
  {
    "slug": "automl",
    "name": "AutoML",
    "category": "Computing & AI",
    "summary": "AutoML is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 125.112,
    "inclination": -68.2,
    "tags": [
      "computing",
      "automl"
    ],
    "lesson_count": 10,
    "id": 15
  },
  {
    "slug": "speech-recognition",
    "name": "Speech Recognition",
    "category": "Computing & AI",
    "summary": "Speech Recognition is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 262.62,
    "inclination": -44.5,
    "tags": [
      "computing",
      "speech"
    ],
    "lesson_count": 11,
    "id": 16
  },
  {
    "slug": "multimodal-learning",
    "name": "Multimodal Learning",
    "category": "Computing & AI",
    "summary": "Multimodal Learning is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 40.128,
    "inclination": -20.8,
    "tags": [
      "computing",
      "multimodal"
    ],
    "lesson_count": 4,
    "id": 17
  },
  {
    "slug": "explainable-ai",
    "name": "Explainable AI",
    "category": "Computing & AI",
    "summary": "Explainable AI is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 177.636,
    "inclination": 2.9,
    "tags": [
      "computing",
      "explainable"
    ],
    "lesson_count": 5,
    "id": 18
  },
  {
    "slug": "edge-ai",
    "name": "Edge AI",
    "category": "Computing & AI",
    "summary": "Edge AI is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 315.144,
    "inclination": 26.6,
    "tags": [
      "computing",
      "edge"
    ],
    "lesson_count": 6,
    "id": 19
  },
  {
    "slug": "federated-learning",
    "name": "Federated Learning",
    "category": "Computing & AI",
    "summary": "Federated Learning is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 92.652,
    "inclination": 50.3,
    "tags": [
      "computing",
      "federated"
    ],
    "lesson_count": 7,
    "id": 20
  },
  {
    "slug": "computer-graphics",
    "name": "Computer Graphics",
    "category": "Computing & AI",
    "summary": "Computer Graphics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 230.16,
    "inclination": 74.0,
    "tags": [
      "computing",
      "computer"
    ],
    "lesson_count": 8,
    "id": 21
  },
  {
    "slug": "human-computer-interaction",
    "name": "Human-Computer Interaction",
    "category": "Computing & AI",
    "summary": "Human-Computer Interaction is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 7.668,
    "inclination": -62.3,
    "tags": [
      "computing",
      "human"
    ],
    "lesson_count": 9,
    "id": 22
  },
  {
    "slug": "information-retrieval",
    "name": "Information Retrieval",
    "category": "Computing & AI",
    "summary": "Information Retrieval is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 145.176,
    "inclination": -38.6,
    "tags": [
      "computing",
      "information"
    ],
    "lesson_count": 10,
    "id": 23
  },
  {
    "slug": "recommender-systems",
    "name": "Recommender Systems",
    "category": "Computing & AI",
    "summary": "Recommender Systems is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 282.684,
    "inclination": -14.9,
    "tags": [
      "computing",
      "recommender"
    ],
    "lesson_count": 11,
    "id": 24
  },
  {
    "slug": "quantum-computing",
    "name": "Quantum Computing",
    "category": "Computing & AI",
    "summary": "Quantum Computing is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 60.192,
    "inclination": 8.8,
    "tags": [
      "computing",
      "quantum"
    ],
    "lesson_count": 4,
    "id": 25
  },
  {
    "slug": "high-performance-computing",
    "name": "High Performance Computing",
    "category": "Computing & AI",
    "summary": "High Performance Computing is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 197.7,
    "inclination": 32.5,
    "tags": [
      "computing",
      "high"
    ],
    "lesson_count": 5,
    "id": 26
  },
  {
    "slug": "parallel-computing",
    "name": "Parallel Computing",
    "category": "Computing & AI",
    "summary": "Parallel Computing is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 335.208,
    "inclination": 56.2,
    "tags": [
      "computing",
      "parallel"
    ],
    "lesson_count": 6,
    "id": 27
  },
  {
    "slug": "distributed-systems",
    "name": "Distributed Systems",
    "category": "Computing & AI",
    "summary": "Distributed Systems is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 112.716,
    "inclination": 79.9,
    "tags": [
      "computing",
      "distributed"
    ],
    "lesson_count": 7,
    "id": 28
  },
  {
    "slug": "operating-systems",
    "name": "Operating Systems",
    "category": "Computing & AI",
    "summary": "Operating Systems is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 250.224,
    "inclination": -56.4,
    "tags": [
      "computing",
      "operating"
    ],
    "lesson_count": 8,
    "id": 29
  },
  {
    "slug": "compilers",
    "name": "Compilers",
    "category": "Computing & AI",
    "summary": "Compilers is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 27.732,
    "inclination": -32.7,
    "tags": [
      "computing",
      "compilers"
    ],
    "lesson_count": 9,
    "id": 30
  },
  {
    "slug": "programming-languages",
    "name": "Programming Languages",
    "category": "Computing & AI",
    "summary": "Programming Languages is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 165.24,
    "inclination": -9.0,
    "tags": [
      "computing",
      "programming"
    ],
    "lesson_count": 10,
    "id": 31
  },
  {
    "slug": "software-engineering",
    "name": "Software Engineering",
    "category": "Computing & AI",
    "summary": "Software Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 302.748,
    "inclination": 14.7,
    "tags": [
      "computing",
      "software"
    ],
    "lesson_count": 11,
    "id": 32
  },
  {
    "slug": "software-architecture",
    "name": "Software Architecture",
    "category": "Computing & AI",
    "summary": "Software Architecture is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 80.256,
    "inclination": 38.4,
    "tags": [
      "computing",
      "software"
    ],
    "lesson_count": 4,
    "id": 33
  },
  {
    "slug": "devops",
    "name": "DevOps",
    "category": "Computing & AI",
    "summary": "DevOps is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 217.764,
    "inclination": 62.1,
    "tags": [
      "computing",
      "devops"
    ],
    "lesson_count": 5,
    "id": 34
  },
  {
    "slug": "site-reliability-engineering",
    "name": "Site Reliability Engineering",
    "category": "Computing & AI",
    "summary": "Site Reliability Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 355.272,
    "inclination": -74.2,
    "tags": [
      "computing",
      "site"
    ],
    "lesson_count": 6,
    "id": 35
  },
  {
    "slug": "cloud-computing",
    "name": "Cloud Computing",
    "category": "Computing & AI",
    "summary": "Cloud Computing is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 132.78,
    "inclination": -50.5,
    "tags": [
      "computing",
      "cloud"
    ],
    "lesson_count": 7,
    "id": 36
  },
  {
    "slug": "serverless-computing",
    "name": "Serverless Computing",
    "category": "Computing & AI",
    "summary": "Serverless Computing is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 270.288,
    "inclination": -26.8,
    "tags": [
      "computing",
      "serverless"
    ],
    "lesson_count": 8,
    "id": 37
  },
  {
    "slug": "container-orchestration",
    "name": "Container Orchestration",
    "category": "Computing & AI",
    "summary": "Container Orchestration is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 47.796,
    "inclination": -3.1,
    "tags": [
      "computing",
      "container"
    ],
    "lesson_count": 9,
    "id": 38
  },
  {
    "slug": "databases",
    "name": "Databases",
    "category": "Computing & AI",
    "summary": "Databases is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 185.304,
    "inclination": 20.6,
    "tags": [
      "computing",
      "databases"
    ],
    "lesson_count": 10,
    "id": 39
  },
  {
    "slug": "data-engineering",
    "name": "Data Engineering",
    "category": "Computing & AI",
    "summary": "Data Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 322.812,
    "inclination": 44.3,
    "tags": [
      "computing",
      "data"
    ],
    "lesson_count": 11,
    "id": 40
  },
  {
    "slug": "big-data",
    "name": "Big Data",
    "category": "Computing & AI",
    "summary": "Big Data is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 100.32,
    "inclination": 68.0,
    "tags": [
      "computing",
      "big"
    ],
    "lesson_count": 4,
    "id": 41
  },
  {
    "slug": "streaming-systems",
    "name": "Streaming Systems",
    "category": "Computing & AI",
    "summary": "Streaming Systems is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 237.828,
    "inclination": -68.3,
    "tags": [
      "computing",
      "streaming"
    ],
    "lesson_count": 5,
    "id": 42
  },
  {
    "slug": "cybersecurity",
    "name": "Cybersecurity",
    "category": "Computing & AI",
    "summary": "Cybersecurity is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 15.336,
    "inclination": -44.6,
    "tags": [
      "computing",
      "cybersecurity"
    ],
    "lesson_count": 6,
    "id": 43
  },
  {
    "slug": "cryptography",
    "name": "Cryptography",
    "category": "Computing & AI",
    "summary": "Cryptography is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 152.844,
    "inclination": -20.9,
    "tags": [
      "computing",
      "cryptography"
    ],
    "lesson_count": 7,
    "id": 44
  },
  {
    "slug": "network-security",
    "name": "Network Security",
    "category": "Computing & AI",
    "summary": "Network Security is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 290.352,
    "inclination": 2.8,
    "tags": [
      "computing",
      "network"
    ],
    "lesson_count": 8,
    "id": 45
  },
  {
    "slug": "privacy-engineering",
    "name": "Privacy Engineering",
    "category": "Computing & AI",
    "summary": "Privacy Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 67.86,
    "inclination": 26.5,
    "tags": [
      "computing",
      "privacy"
    ],
    "lesson_count": 9,
    "id": 46
  },
  {
    "slug": "digital-forensics",
    "name": "Digital Forensics",
    "category": "Computing & AI",
    "summary": "Digital Forensics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 205.368,
    "inclination": 50.2,
    "tags": [
      "computing",
      "digital"
    ],
    "lesson_count": 10,
    "id": 47
  },
  {
    "slug": "blockchain",
    "name": "Blockchain",
    "category": "Computing & AI",
    "summary": "Blockchain is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 342.876,
    "inclination": 73.9,
    "tags": [
      "computing",
      "blockchain"
    ],
    "lesson_count": 11,
    "id": 48
  },
  {
    "slug": "web-engineering",
    "name": "Web Engineering",
    "category": "Computing & AI",
    "summary": "Web Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 120.384,
    "inclination": -62.4,
    "tags": [
      "computing",
      "web"
    ],
    "lesson_count": 4,
    "id": 49
  },
  {
    "slug": "mobile-computing",
    "name": "Mobile Computing",
    "category": "Computing & AI",
    "summary": "Mobile Computing is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 257.892,
    "inclination": -38.7,
    "tags": [
      "computing",
      "mobile"
    ],
    "lesson_count": 5,
    "id": 50
  },
  {
    "slug": "embedded-systems",
    "name": "Embedded Systems",
    "category": "Computing & AI",
    "summary": "Embedded Systems is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 35.4,
    "inclination": -15.0,
    "tags": [
      "computing",
      "embedded"
    ],
    "lesson_count": 6,
    "id": 51
  },
  {
    "slug": "internet-of-things",
    "name": "Internet of Things",
    "category": "Computing & AI",
    "summary": "Internet of Things is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 172.908,
    "inclination": 8.7,
    "tags": [
      "computing",
      "internet"
    ],
    "lesson_count": 7,
    "id": 52
  },
  {
    "slug": "networking",
    "name": "Networking",
    "category": "Computing & AI",
    "summary": "Networking is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 310.416,
    "inclination": 32.4,
    "tags": [
      "computing",
      "networking"
    ],
    "lesson_count": 8,
    "id": 53
  },
  {
    "slug": "computer-architecture",
    "name": "Computer Architecture",
    "category": "Computing & AI",
    "summary": "Computer Architecture is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 87.924,
    "inclination": 56.1,
    "tags": [
      "computing",
      "computer"
    ],
    "lesson_count": 9,
    "id": 54
  },
  {
    "slug": "theory-of-computation",
    "name": "Theory of Computation",
    "category": "Computing & AI",
    "summary": "Theory of Computation is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 225.432,
    "inclination": 79.8,
    "tags": [
      "computing",
      "theory"
    ],
    "lesson_count": 10,
    "id": 55
  },
  {
    "slug": "algorithms",
    "name": "Algorithms",
    "category": "Computing & AI",
    "summary": "Algorithms is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 2.94,
    "inclination": -56.5,
    "tags": [
      "computing",
      "algorithms"
    ],
    "lesson_count": 11,
    "id": 56
  },
  {
    "slug": "data-structures",
    "name": "Data Structures",
    "category": "Computing & AI",
    "summary": "Data Structures is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 140.448,
    "inclination": -32.8,
    "tags": [
      "computing",
      "data"
    ],
    "lesson_count": 4,
    "id": 57
  },
  {
    "slug": "formal-methods",
    "name": "Formal Methods",
    "category": "Computing & AI",
    "summary": "Formal Methods is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 277.956,
    "inclination": -9.1,
    "tags": [
      "computing",
      "formal"
    ],
    "lesson_count": 5,
    "id": 58
  },
  {
    "slug": "humanoid-robotics",
    "name": "Humanoid Robotics",
    "category": "Computing & AI",
    "summary": "Humanoid Robotics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 55.464,
    "inclination": 14.6,
    "tags": [
      "computing",
      "humanoid"
    ],
    "lesson_count": 6,
    "id": 59
  },
  {
    "slug": "autonomous-vehicles",
    "name": "Autonomous Vehicles",
    "category": "Computing & AI",
    "summary": "Autonomous Vehicles is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Computing & AI.",
    "color": "#22d3ee",
    "orbit": 192.972,
    "inclination": 38.3,
    "tags": [
      "computing",
      "autonomous"
    ],
    "lesson_count": 7,
    "id": 60
  },
  {
    "slug": "mathematics",
    "name": "Mathematics",
    "category": "Mathematics & Statistics",
    "summary": "Mathematics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 330.48,
    "inclination": 62.0,
    "tags": [
      "mathematics",
      "mathematics"
    ],
    "lesson_count": 8,
    "id": 61
  },
  {
    "slug": "statistics",
    "name": "Statistics",
    "category": "Mathematics & Statistics",
    "summary": "Statistics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 107.988,
    "inclination": -74.3,
    "tags": [
      "mathematics",
      "statistics"
    ],
    "lesson_count": 9,
    "id": 62
  },
  {
    "slug": "linear-algebra",
    "name": "Linear Algebra",
    "category": "Mathematics & Statistics",
    "summary": "Linear Algebra is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 245.496,
    "inclination": -50.6,
    "tags": [
      "mathematics",
      "linear"
    ],
    "lesson_count": 10,
    "id": 63
  },
  {
    "slug": "calculus",
    "name": "Calculus",
    "category": "Mathematics & Statistics",
    "summary": "Calculus is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 23.004,
    "inclination": -26.9,
    "tags": [
      "mathematics",
      "calculus"
    ],
    "lesson_count": 11,
    "id": 64
  },
  {
    "slug": "differential-equations",
    "name": "Differential Equations",
    "category": "Mathematics & Statistics",
    "summary": "Differential Equations is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 160.512,
    "inclination": -3.2,
    "tags": [
      "mathematics",
      "differential"
    ],
    "lesson_count": 4,
    "id": 65
  },
  {
    "slug": "discrete-mathematics",
    "name": "Discrete Mathematics",
    "category": "Mathematics & Statistics",
    "summary": "Discrete Mathematics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 298.02,
    "inclination": 20.5,
    "tags": [
      "mathematics",
      "discrete"
    ],
    "lesson_count": 5,
    "id": 66
  },
  {
    "slug": "number-theory",
    "name": "Number Theory",
    "category": "Mathematics & Statistics",
    "summary": "Number Theory is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 75.528,
    "inclination": 44.2,
    "tags": [
      "mathematics",
      "number"
    ],
    "lesson_count": 6,
    "id": 67
  },
  {
    "slug": "abstract-algebra",
    "name": "Abstract Algebra",
    "category": "Mathematics & Statistics",
    "summary": "Abstract Algebra is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 213.036,
    "inclination": 67.9,
    "tags": [
      "mathematics",
      "abstract"
    ],
    "lesson_count": 7,
    "id": 68
  },
  {
    "slug": "real-analysis",
    "name": "Real Analysis",
    "category": "Mathematics & Statistics",
    "summary": "Real Analysis is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 350.544,
    "inclination": -68.4,
    "tags": [
      "mathematics",
      "real"
    ],
    "lesson_count": 8,
    "id": 69
  },
  {
    "slug": "complex-analysis",
    "name": "Complex Analysis",
    "category": "Mathematics & Statistics",
    "summary": "Complex Analysis is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 128.052,
    "inclination": -44.7,
    "tags": [
      "mathematics",
      "complex"
    ],
    "lesson_count": 9,
    "id": 70
  },
  {
    "slug": "topology",
    "name": "Topology",
    "category": "Mathematics & Statistics",
    "summary": "Topology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 265.56,
    "inclination": -21.0,
    "tags": [
      "mathematics",
      "topology"
    ],
    "lesson_count": 10,
    "id": 71
  },
  {
    "slug": "geometry",
    "name": "Geometry",
    "category": "Mathematics & Statistics",
    "summary": "Geometry is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 43.068,
    "inclination": 2.7,
    "tags": [
      "mathematics",
      "geometry"
    ],
    "lesson_count": 11,
    "id": 72
  },
  {
    "slug": "differential-geometry",
    "name": "Differential Geometry",
    "category": "Mathematics & Statistics",
    "summary": "Differential Geometry is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 180.576,
    "inclination": 26.4,
    "tags": [
      "mathematics",
      "differential"
    ],
    "lesson_count": 4,
    "id": 73
  },
  {
    "slug": "graph-theory",
    "name": "Graph Theory",
    "category": "Mathematics & Statistics",
    "summary": "Graph Theory is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 318.084,
    "inclination": 50.1,
    "tags": [
      "mathematics",
      "graph"
    ],
    "lesson_count": 5,
    "id": 74
  },
  {
    "slug": "combinatorics",
    "name": "Combinatorics",
    "category": "Mathematics & Statistics",
    "summary": "Combinatorics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 95.592,
    "inclination": 73.8,
    "tags": [
      "mathematics",
      "combinatorics"
    ],
    "lesson_count": 6,
    "id": 75
  },
  {
    "slug": "probability-theory",
    "name": "Probability Theory",
    "category": "Mathematics & Statistics",
    "summary": "Probability Theory is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 233.1,
    "inclination": -62.5,
    "tags": [
      "mathematics",
      "probability"
    ],
    "lesson_count": 7,
    "id": 76
  },
  {
    "slug": "bayesian-statistics",
    "name": "Bayesian Statistics",
    "category": "Mathematics & Statistics",
    "summary": "Bayesian Statistics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 10.608,
    "inclination": -38.8,
    "tags": [
      "mathematics",
      "bayesian"
    ],
    "lesson_count": 8,
    "id": 77
  },
  {
    "slug": "stochastic-processes",
    "name": "Stochastic Processes",
    "category": "Mathematics & Statistics",
    "summary": "Stochastic Processes is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 148.116,
    "inclination": -15.1,
    "tags": [
      "mathematics",
      "stochastic"
    ],
    "lesson_count": 9,
    "id": 78
  },
  {
    "slug": "optimization",
    "name": "Optimization",
    "category": "Mathematics & Statistics",
    "summary": "Optimization is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 285.624,
    "inclination": 8.6,
    "tags": [
      "mathematics",
      "optimization"
    ],
    "lesson_count": 10,
    "id": 79
  },
  {
    "slug": "numerical-analysis",
    "name": "Numerical Analysis",
    "category": "Mathematics & Statistics",
    "summary": "Numerical Analysis is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 63.132,
    "inclination": 32.3,
    "tags": [
      "mathematics",
      "numerical"
    ],
    "lesson_count": 11,
    "id": 80
  },
  {
    "slug": "mathematical-logic",
    "name": "Mathematical Logic",
    "category": "Mathematics & Statistics",
    "summary": "Mathematical Logic is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 200.64,
    "inclination": 56.0,
    "tags": [
      "mathematics",
      "mathematical"
    ],
    "lesson_count": 4,
    "id": 81
  },
  {
    "slug": "category-theory",
    "name": "Category Theory",
    "category": "Mathematics & Statistics",
    "summary": "Category Theory is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 338.148,
    "inclination": 79.7,
    "tags": [
      "mathematics",
      "category"
    ],
    "lesson_count": 5,
    "id": 82
  },
  {
    "slug": "measure-theory",
    "name": "Measure Theory",
    "category": "Mathematics & Statistics",
    "summary": "Measure Theory is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 115.656,
    "inclination": -56.6,
    "tags": [
      "mathematics",
      "measure"
    ],
    "lesson_count": 6,
    "id": 83
  },
  {
    "slug": "game-theory",
    "name": "Game Theory",
    "category": "Mathematics & Statistics",
    "summary": "Game Theory is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 253.164,
    "inclination": -32.9,
    "tags": [
      "mathematics",
      "game"
    ],
    "lesson_count": 7,
    "id": 84
  },
  {
    "slug": "operations-research",
    "name": "Operations Research",
    "category": "Mathematics & Statistics",
    "summary": "Operations Research is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 30.672,
    "inclination": -9.2,
    "tags": [
      "mathematics",
      "operations"
    ],
    "lesson_count": 8,
    "id": 85
  },
  {
    "slug": "actuarial-science",
    "name": "Actuarial Science",
    "category": "Mathematics & Statistics",
    "summary": "Actuarial Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 168.18,
    "inclination": 14.5,
    "tags": [
      "mathematics",
      "actuarial"
    ],
    "lesson_count": 9,
    "id": 86
  },
  {
    "slug": "time-series-analysis",
    "name": "Time Series Analysis",
    "category": "Mathematics & Statistics",
    "summary": "Time Series Analysis is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 305.688,
    "inclination": 38.2,
    "tags": [
      "mathematics",
      "time"
    ],
    "lesson_count": 10,
    "id": 87
  },
  {
    "slug": "causal-inference",
    "name": "Causal Inference",
    "category": "Mathematics & Statistics",
    "summary": "Causal Inference is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 83.196,
    "inclination": 61.9,
    "tags": [
      "mathematics",
      "causal"
    ],
    "lesson_count": 11,
    "id": 88
  },
  {
    "slug": "experimental-design",
    "name": "Experimental Design",
    "category": "Mathematics & Statistics",
    "summary": "Experimental Design is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 220.704,
    "inclination": -74.4,
    "tags": [
      "mathematics",
      "experimental"
    ],
    "lesson_count": 4,
    "id": 89
  },
  {
    "slug": "multivariate-statistics",
    "name": "Multivariate Statistics",
    "category": "Mathematics & Statistics",
    "summary": "Multivariate Statistics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Mathematics & Statistics.",
    "color": "#a78bfa",
    "orbit": 358.212,
    "inclination": -50.7,
    "tags": [
      "mathematics",
      "multivariate"
    ],
    "lesson_count": 5,
    "id": 90
  },
  {
    "slug": "physics",
    "name": "Physics",
    "category": "Physical Sciences",
    "summary": "Physics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 135.72,
    "inclination": -27.0,
    "tags": [
      "physical",
      "physics"
    ],
    "lesson_count": 6,
    "id": 91
  },
  {
    "slug": "classical-mechanics",
    "name": "Classical Mechanics",
    "category": "Physical Sciences",
    "summary": "Classical Mechanics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 273.228,
    "inclination": -3.3,
    "tags": [
      "physical",
      "classical"
    ],
    "lesson_count": 7,
    "id": 92
  },
  {
    "slug": "quantum-mechanics",
    "name": "Quantum Mechanics",
    "category": "Physical Sciences",
    "summary": "Quantum Mechanics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 50.736,
    "inclination": 20.4,
    "tags": [
      "physical",
      "quantum"
    ],
    "lesson_count": 8,
    "id": 93
  },
  {
    "slug": "thermodynamics",
    "name": "Thermodynamics",
    "category": "Physical Sciences",
    "summary": "Thermodynamics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 188.244,
    "inclination": 44.1,
    "tags": [
      "physical",
      "thermodynamics"
    ],
    "lesson_count": 9,
    "id": 94
  },
  {
    "slug": "statistical-mechanics",
    "name": "Statistical Mechanics",
    "category": "Physical Sciences",
    "summary": "Statistical Mechanics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 325.752,
    "inclination": 67.8,
    "tags": [
      "physical",
      "statistical"
    ],
    "lesson_count": 10,
    "id": 95
  },
  {
    "slug": "electromagnetism",
    "name": "Electromagnetism",
    "category": "Physical Sciences",
    "summary": "Electromagnetism is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 103.26,
    "inclination": -68.5,
    "tags": [
      "physical",
      "electromagnetism"
    ],
    "lesson_count": 11,
    "id": 96
  },
  {
    "slug": "optics",
    "name": "Optics",
    "category": "Physical Sciences",
    "summary": "Optics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 240.768,
    "inclination": -44.8,
    "tags": [
      "physical",
      "optics"
    ],
    "lesson_count": 4,
    "id": 97
  },
  {
    "slug": "acoustics",
    "name": "Acoustics",
    "category": "Physical Sciences",
    "summary": "Acoustics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 18.276,
    "inclination": -21.1,
    "tags": [
      "physical",
      "acoustics"
    ],
    "lesson_count": 5,
    "id": 98
  },
  {
    "slug": "fluid-dynamics",
    "name": "Fluid Dynamics",
    "category": "Physical Sciences",
    "summary": "Fluid Dynamics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 155.784,
    "inclination": 2.6,
    "tags": [
      "physical",
      "fluid"
    ],
    "lesson_count": 6,
    "id": 99
  },
  {
    "slug": "plasma-physics",
    "name": "Plasma Physics",
    "category": "Physical Sciences",
    "summary": "Plasma Physics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 293.292,
    "inclination": 26.3,
    "tags": [
      "physical",
      "plasma"
    ],
    "lesson_count": 7,
    "id": 100
  },
  {
    "slug": "particle-physics",
    "name": "Particle Physics",
    "category": "Physical Sciences",
    "summary": "Particle Physics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 70.8,
    "inclination": 50.0,
    "tags": [
      "physical",
      "particle"
    ],
    "lesson_count": 8,
    "id": 101
  },
  {
    "slug": "nuclear-physics",
    "name": "Nuclear Physics",
    "category": "Physical Sciences",
    "summary": "Nuclear Physics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 208.308,
    "inclination": 73.7,
    "tags": [
      "physical",
      "nuclear"
    ],
    "lesson_count": 9,
    "id": 102
  },
  {
    "slug": "condensed-matter-physics",
    "name": "Condensed Matter Physics",
    "category": "Physical Sciences",
    "summary": "Condensed Matter Physics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 345.816,
    "inclination": -62.6,
    "tags": [
      "physical",
      "condensed"
    ],
    "lesson_count": 10,
    "id": 103
  },
  {
    "slug": "astrophysics",
    "name": "Astrophysics",
    "category": "Physical Sciences",
    "summary": "Astrophysics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 123.324,
    "inclination": -38.9,
    "tags": [
      "physical",
      "astrophysics"
    ],
    "lesson_count": 11,
    "id": 104
  },
  {
    "slug": "cosmology",
    "name": "Cosmology",
    "category": "Physical Sciences",
    "summary": "Cosmology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 260.832,
    "inclination": -15.2,
    "tags": [
      "physical",
      "cosmology"
    ],
    "lesson_count": 4,
    "id": 105
  },
  {
    "slug": "astronomy",
    "name": "Astronomy",
    "category": "Physical Sciences",
    "summary": "Astronomy is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 38.34,
    "inclination": 8.5,
    "tags": [
      "physical",
      "astronomy"
    ],
    "lesson_count": 5,
    "id": 106
  },
  {
    "slug": "planetary-science",
    "name": "Planetary Science",
    "category": "Physical Sciences",
    "summary": "Planetary Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 175.848,
    "inclination": 32.2,
    "tags": [
      "physical",
      "planetary"
    ],
    "lesson_count": 6,
    "id": 107
  },
  {
    "slug": "space-weather",
    "name": "Space Weather",
    "category": "Physical Sciences",
    "summary": "Space Weather is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 313.356,
    "inclination": 55.9,
    "tags": [
      "physical",
      "space"
    ],
    "lesson_count": 7,
    "id": 108
  },
  {
    "slug": "chemistry",
    "name": "Chemistry",
    "category": "Physical Sciences",
    "summary": "Chemistry is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 90.864,
    "inclination": 79.6,
    "tags": [
      "physical",
      "chemistry"
    ],
    "lesson_count": 8,
    "id": 109
  },
  {
    "slug": "organic-chemistry",
    "name": "Organic Chemistry",
    "category": "Physical Sciences",
    "summary": "Organic Chemistry is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 228.372,
    "inclination": -56.7,
    "tags": [
      "physical",
      "organic"
    ],
    "lesson_count": 9,
    "id": 110
  },
  {
    "slug": "inorganic-chemistry",
    "name": "Inorganic Chemistry",
    "category": "Physical Sciences",
    "summary": "Inorganic Chemistry is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 5.88,
    "inclination": -33.0,
    "tags": [
      "physical",
      "inorganic"
    ],
    "lesson_count": 10,
    "id": 111
  },
  {
    "slug": "physical-chemistry",
    "name": "Physical Chemistry",
    "category": "Physical Sciences",
    "summary": "Physical Chemistry is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 143.388,
    "inclination": -9.3,
    "tags": [
      "physical",
      "physical"
    ],
    "lesson_count": 11,
    "id": 112
  },
  {
    "slug": "analytical-chemistry",
    "name": "Analytical Chemistry",
    "category": "Physical Sciences",
    "summary": "Analytical Chemistry is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 280.896,
    "inclination": 14.4,
    "tags": [
      "physical",
      "analytical"
    ],
    "lesson_count": 4,
    "id": 113
  },
  {
    "slug": "biochemistry",
    "name": "Biochemistry",
    "category": "Physical Sciences",
    "summary": "Biochemistry is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 58.404,
    "inclination": 38.1,
    "tags": [
      "physical",
      "biochemistry"
    ],
    "lesson_count": 5,
    "id": 114
  },
  {
    "slug": "materials-science",
    "name": "Materials Science",
    "category": "Physical Sciences",
    "summary": "Materials Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 195.912,
    "inclination": 61.8,
    "tags": [
      "physical",
      "materials"
    ],
    "lesson_count": 6,
    "id": 115
  },
  {
    "slug": "nanotechnology",
    "name": "Nanotechnology",
    "category": "Physical Sciences",
    "summary": "Nanotechnology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 333.42,
    "inclination": -74.5,
    "tags": [
      "physical",
      "nanotechnology"
    ],
    "lesson_count": 7,
    "id": 116
  },
  {
    "slug": "polymer-science",
    "name": "Polymer Science",
    "category": "Physical Sciences",
    "summary": "Polymer Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 110.928,
    "inclination": -50.8,
    "tags": [
      "physical",
      "polymer"
    ],
    "lesson_count": 8,
    "id": 117
  },
  {
    "slug": "electrochemistry",
    "name": "Electrochemistry",
    "category": "Physical Sciences",
    "summary": "Electrochemistry is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 248.436,
    "inclination": -27.1,
    "tags": [
      "physical",
      "electrochemistry"
    ],
    "lesson_count": 9,
    "id": 118
  },
  {
    "slug": "photochemistry",
    "name": "Photochemistry",
    "category": "Physical Sciences",
    "summary": "Photochemistry is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 25.944,
    "inclination": -3.4,
    "tags": [
      "physical",
      "photochemistry"
    ],
    "lesson_count": 10,
    "id": 119
  },
  {
    "slug": "spectroscopy",
    "name": "Spectroscopy",
    "category": "Physical Sciences",
    "summary": "Spectroscopy is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Physical Sciences.",
    "color": "#38bdf8",
    "orbit": 163.452,
    "inclination": 20.3,
    "tags": [
      "physical",
      "spectroscopy"
    ],
    "lesson_count": 11,
    "id": 120
  },
  {
    "slug": "biology",
    "name": "Biology",
    "category": "Life Sciences & Medicine",
    "summary": "Biology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 300.96,
    "inclination": 44.0,
    "tags": [
      "life",
      "biology"
    ],
    "lesson_count": 4,
    "id": 121
  },
  {
    "slug": "genetics",
    "name": "Genetics",
    "category": "Life Sciences & Medicine",
    "summary": "Genetics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 78.468,
    "inclination": 67.7,
    "tags": [
      "life",
      "genetics"
    ],
    "lesson_count": 5,
    "id": 122
  },
  {
    "slug": "genomics",
    "name": "Genomics",
    "category": "Life Sciences & Medicine",
    "summary": "Genomics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 215.976,
    "inclination": -68.6,
    "tags": [
      "life",
      "genomics"
    ],
    "lesson_count": 6,
    "id": 123
  },
  {
    "slug": "molecular-biology",
    "name": "Molecular Biology",
    "category": "Life Sciences & Medicine",
    "summary": "Molecular Biology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 353.484,
    "inclination": -44.9,
    "tags": [
      "life",
      "molecular"
    ],
    "lesson_count": 7,
    "id": 124
  },
  {
    "slug": "cell-biology",
    "name": "Cell Biology",
    "category": "Life Sciences & Medicine",
    "summary": "Cell Biology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 130.992,
    "inclination": -21.2,
    "tags": [
      "life",
      "cell"
    ],
    "lesson_count": 8,
    "id": 125
  },
  {
    "slug": "microbiology",
    "name": "Microbiology",
    "category": "Life Sciences & Medicine",
    "summary": "Microbiology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 268.5,
    "inclination": 2.5,
    "tags": [
      "life",
      "microbiology"
    ],
    "lesson_count": 9,
    "id": 126
  },
  {
    "slug": "immunology",
    "name": "Immunology",
    "category": "Life Sciences & Medicine",
    "summary": "Immunology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 46.008,
    "inclination": 26.2,
    "tags": [
      "life",
      "immunology"
    ],
    "lesson_count": 10,
    "id": 127
  },
  {
    "slug": "virology",
    "name": "Virology",
    "category": "Life Sciences & Medicine",
    "summary": "Virology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 183.516,
    "inclination": 49.9,
    "tags": [
      "life",
      "virology"
    ],
    "lesson_count": 11,
    "id": 128
  },
  {
    "slug": "ecology",
    "name": "Ecology",
    "category": "Life Sciences & Medicine",
    "summary": "Ecology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 321.024,
    "inclination": 73.6,
    "tags": [
      "life",
      "ecology"
    ],
    "lesson_count": 4,
    "id": 129
  },
  {
    "slug": "evolutionary-biology",
    "name": "Evolutionary Biology",
    "category": "Life Sciences & Medicine",
    "summary": "Evolutionary Biology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 98.532,
    "inclination": -62.7,
    "tags": [
      "life",
      "evolutionary"
    ],
    "lesson_count": 5,
    "id": 130
  },
  {
    "slug": "neuroscience",
    "name": "Neuroscience",
    "category": "Life Sciences & Medicine",
    "summary": "Neuroscience is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 236.04,
    "inclination": -39.0,
    "tags": [
      "life",
      "neuroscience"
    ],
    "lesson_count": 6,
    "id": 131
  },
  {
    "slug": "physiology",
    "name": "Physiology",
    "category": "Life Sciences & Medicine",
    "summary": "Physiology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 13.548,
    "inclination": -15.3,
    "tags": [
      "life",
      "physiology"
    ],
    "lesson_count": 7,
    "id": 132
  },
  {
    "slug": "anatomy",
    "name": "Anatomy",
    "category": "Life Sciences & Medicine",
    "summary": "Anatomy is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 151.056,
    "inclination": 8.4,
    "tags": [
      "life",
      "anatomy"
    ],
    "lesson_count": 8,
    "id": 133
  },
  {
    "slug": "developmental-biology",
    "name": "Developmental Biology",
    "category": "Life Sciences & Medicine",
    "summary": "Developmental Biology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 288.564,
    "inclination": 32.1,
    "tags": [
      "life",
      "developmental"
    ],
    "lesson_count": 9,
    "id": 134
  },
  {
    "slug": "botany",
    "name": "Botany",
    "category": "Life Sciences & Medicine",
    "summary": "Botany is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 66.072,
    "inclination": 55.8,
    "tags": [
      "life",
      "botany"
    ],
    "lesson_count": 10,
    "id": 135
  },
  {
    "slug": "zoology",
    "name": "Zoology",
    "category": "Life Sciences & Medicine",
    "summary": "Zoology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 203.58,
    "inclination": 79.5,
    "tags": [
      "life",
      "zoology"
    ],
    "lesson_count": 11,
    "id": 136
  },
  {
    "slug": "marine-biology",
    "name": "Marine Biology",
    "category": "Life Sciences & Medicine",
    "summary": "Marine Biology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 341.088,
    "inclination": -56.8,
    "tags": [
      "life",
      "marine"
    ],
    "lesson_count": 4,
    "id": 137
  },
  {
    "slug": "bioinformatics",
    "name": "Bioinformatics",
    "category": "Life Sciences & Medicine",
    "summary": "Bioinformatics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 118.596,
    "inclination": -33.1,
    "tags": [
      "life",
      "bioinformatics"
    ],
    "lesson_count": 5,
    "id": 138
  },
  {
    "slug": "systems-biology",
    "name": "Systems Biology",
    "category": "Life Sciences & Medicine",
    "summary": "Systems Biology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 256.104,
    "inclination": -9.4,
    "tags": [
      "life",
      "systems"
    ],
    "lesson_count": 6,
    "id": 139
  },
  {
    "slug": "synthetic-biology",
    "name": "Synthetic Biology",
    "category": "Life Sciences & Medicine",
    "summary": "Synthetic Biology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 33.612,
    "inclination": 14.3,
    "tags": [
      "life",
      "synthetic"
    ],
    "lesson_count": 7,
    "id": 140
  },
  {
    "slug": "medicine",
    "name": "Medicine",
    "category": "Life Sciences & Medicine",
    "summary": "Medicine is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 171.12,
    "inclination": 38.0,
    "tags": [
      "life",
      "medicine"
    ],
    "lesson_count": 8,
    "id": 141
  },
  {
    "slug": "cardiology",
    "name": "Cardiology",
    "category": "Life Sciences & Medicine",
    "summary": "Cardiology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 308.628,
    "inclination": 61.7,
    "tags": [
      "life",
      "cardiology"
    ],
    "lesson_count": 9,
    "id": 142
  },
  {
    "slug": "oncology",
    "name": "Oncology",
    "category": "Life Sciences & Medicine",
    "summary": "Oncology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 86.136,
    "inclination": -74.6,
    "tags": [
      "life",
      "oncology"
    ],
    "lesson_count": 10,
    "id": 143
  },
  {
    "slug": "neurology",
    "name": "Neurology",
    "category": "Life Sciences & Medicine",
    "summary": "Neurology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 223.644,
    "inclination": -50.9,
    "tags": [
      "life",
      "neurology"
    ],
    "lesson_count": 11,
    "id": 144
  },
  {
    "slug": "psychiatry",
    "name": "Psychiatry",
    "category": "Life Sciences & Medicine",
    "summary": "Psychiatry is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 1.152,
    "inclination": -27.2,
    "tags": [
      "life",
      "psychiatry"
    ],
    "lesson_count": 4,
    "id": 145
  },
  {
    "slug": "radiology",
    "name": "Radiology",
    "category": "Life Sciences & Medicine",
    "summary": "Radiology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 138.66,
    "inclination": -3.5,
    "tags": [
      "life",
      "radiology"
    ],
    "lesson_count": 5,
    "id": 146
  },
  {
    "slug": "pathology",
    "name": "Pathology",
    "category": "Life Sciences & Medicine",
    "summary": "Pathology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 276.168,
    "inclination": 20.2,
    "tags": [
      "life",
      "pathology"
    ],
    "lesson_count": 6,
    "id": 147
  },
  {
    "slug": "epidemiology",
    "name": "Epidemiology",
    "category": "Life Sciences & Medicine",
    "summary": "Epidemiology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 53.676,
    "inclination": 43.9,
    "tags": [
      "life",
      "epidemiology"
    ],
    "lesson_count": 7,
    "id": 148
  },
  {
    "slug": "public-health",
    "name": "Public Health",
    "category": "Life Sciences & Medicine",
    "summary": "Public Health is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 191.184,
    "inclination": 67.6,
    "tags": [
      "life",
      "public"
    ],
    "lesson_count": 8,
    "id": 149
  },
  {
    "slug": "pharmacology",
    "name": "Pharmacology",
    "category": "Life Sciences & Medicine",
    "summary": "Pharmacology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 328.692,
    "inclination": -68.7,
    "tags": [
      "life",
      "pharmacology"
    ],
    "lesson_count": 9,
    "id": 150
  },
  {
    "slug": "surgery",
    "name": "Surgery",
    "category": "Life Sciences & Medicine",
    "summary": "Surgery is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 106.2,
    "inclination": -45.0,
    "tags": [
      "life",
      "surgery"
    ],
    "lesson_count": 10,
    "id": 151
  },
  {
    "slug": "pediatrics",
    "name": "Pediatrics",
    "category": "Life Sciences & Medicine",
    "summary": "Pediatrics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 243.708,
    "inclination": -21.3,
    "tags": [
      "life",
      "pediatrics"
    ],
    "lesson_count": 11,
    "id": 152
  },
  {
    "slug": "gerontology",
    "name": "Gerontology",
    "category": "Life Sciences & Medicine",
    "summary": "Gerontology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 21.216,
    "inclination": 2.4,
    "tags": [
      "life",
      "gerontology"
    ],
    "lesson_count": 4,
    "id": 153
  },
  {
    "slug": "nutrition-science",
    "name": "Nutrition Science",
    "category": "Life Sciences & Medicine",
    "summary": "Nutrition Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 158.724,
    "inclination": 26.1,
    "tags": [
      "life",
      "nutrition"
    ],
    "lesson_count": 5,
    "id": 154
  },
  {
    "slug": "biomedical-engineering",
    "name": "Biomedical Engineering",
    "category": "Life Sciences & Medicine",
    "summary": "Biomedical Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 296.232,
    "inclination": 49.8,
    "tags": [
      "life",
      "biomedical"
    ],
    "lesson_count": 6,
    "id": 155
  },
  {
    "slug": "medical-imaging",
    "name": "Medical Imaging",
    "category": "Life Sciences & Medicine",
    "summary": "Medical Imaging is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 73.74,
    "inclination": 73.5,
    "tags": [
      "life",
      "medical"
    ],
    "lesson_count": 7,
    "id": 156
  },
  {
    "slug": "genomic-medicine",
    "name": "Genomic Medicine",
    "category": "Life Sciences & Medicine",
    "summary": "Genomic Medicine is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 211.248,
    "inclination": -62.8,
    "tags": [
      "life",
      "genomic"
    ],
    "lesson_count": 8,
    "id": 157
  },
  {
    "slug": "telemedicine",
    "name": "Telemedicine",
    "category": "Life Sciences & Medicine",
    "summary": "Telemedicine is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 348.756,
    "inclination": -39.1,
    "tags": [
      "life",
      "telemedicine"
    ],
    "lesson_count": 9,
    "id": 158
  },
  {
    "slug": "veterinary-science",
    "name": "Veterinary Science",
    "category": "Life Sciences & Medicine",
    "summary": "Veterinary Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 126.264,
    "inclination": -15.4,
    "tags": [
      "life",
      "veterinary"
    ],
    "lesson_count": 10,
    "id": 159
  },
  {
    "slug": "dentistry",
    "name": "Dentistry",
    "category": "Life Sciences & Medicine",
    "summary": "Dentistry is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Life Sciences & Medicine.",
    "color": "#34d399",
    "orbit": 263.772,
    "inclination": 8.3,
    "tags": [
      "life",
      "dentistry"
    ],
    "lesson_count": 11,
    "id": 160
  },
  {
    "slug": "mechanical-engineering",
    "name": "Mechanical Engineering",
    "category": "Engineering",
    "summary": "Mechanical Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 41.28,
    "inclination": 32.0,
    "tags": [
      "engineering",
      "mechanical"
    ],
    "lesson_count": 4,
    "id": 161
  },
  {
    "slug": "civil-engineering",
    "name": "Civil Engineering",
    "category": "Engineering",
    "summary": "Civil Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 178.788,
    "inclination": 55.7,
    "tags": [
      "engineering",
      "civil"
    ],
    "lesson_count": 5,
    "id": 162
  },
  {
    "slug": "aerospace-engineering",
    "name": "Aerospace Engineering",
    "category": "Engineering",
    "summary": "Aerospace Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 316.296,
    "inclination": 79.4,
    "tags": [
      "engineering",
      "aerospace"
    ],
    "lesson_count": 6,
    "id": 163
  },
  {
    "slug": "electrical-engineering",
    "name": "Electrical Engineering",
    "category": "Engineering",
    "summary": "Electrical Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 93.804,
    "inclination": -56.9,
    "tags": [
      "engineering",
      "electrical"
    ],
    "lesson_count": 7,
    "id": 164
  },
  {
    "slug": "electronics",
    "name": "Electronics",
    "category": "Engineering",
    "summary": "Electronics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 231.312,
    "inclination": -33.2,
    "tags": [
      "engineering",
      "electronics"
    ],
    "lesson_count": 8,
    "id": 165
  },
  {
    "slug": "chemical-engineering",
    "name": "Chemical Engineering",
    "category": "Engineering",
    "summary": "Chemical Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 8.82,
    "inclination": -9.5,
    "tags": [
      "engineering",
      "chemical"
    ],
    "lesson_count": 9,
    "id": 166
  },
  {
    "slug": "industrial-engineering",
    "name": "Industrial Engineering",
    "category": "Engineering",
    "summary": "Industrial Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 146.328,
    "inclination": 14.2,
    "tags": [
      "engineering",
      "industrial"
    ],
    "lesson_count": 10,
    "id": 167
  },
  {
    "slug": "systems-engineering",
    "name": "Systems Engineering",
    "category": "Engineering",
    "summary": "Systems Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 283.836,
    "inclination": 37.9,
    "tags": [
      "engineering",
      "systems"
    ],
    "lesson_count": 11,
    "id": 168
  },
  {
    "slug": "control-engineering",
    "name": "Control Engineering",
    "category": "Engineering",
    "summary": "Control Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 61.344,
    "inclination": 61.6,
    "tags": [
      "engineering",
      "control"
    ],
    "lesson_count": 4,
    "id": 169
  },
  {
    "slug": "structural-engineering",
    "name": "Structural Engineering",
    "category": "Engineering",
    "summary": "Structural Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 198.852,
    "inclination": -74.7,
    "tags": [
      "engineering",
      "structural"
    ],
    "lesson_count": 5,
    "id": 170
  },
  {
    "slug": "geotechnical-engineering",
    "name": "Geotechnical Engineering",
    "category": "Engineering",
    "summary": "Geotechnical Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 336.36,
    "inclination": -51.0,
    "tags": [
      "engineering",
      "geotechnical"
    ],
    "lesson_count": 6,
    "id": 171
  },
  {
    "slug": "transportation-engineering",
    "name": "Transportation Engineering",
    "category": "Engineering",
    "summary": "Transportation Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 113.868,
    "inclination": -27.3,
    "tags": [
      "engineering",
      "transportation"
    ],
    "lesson_count": 7,
    "id": 172
  },
  {
    "slug": "hydraulic-engineering",
    "name": "Hydraulic Engineering",
    "category": "Engineering",
    "summary": "Hydraulic Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 251.376,
    "inclination": -3.6,
    "tags": [
      "engineering",
      "hydraulic"
    ],
    "lesson_count": 8,
    "id": 173
  },
  {
    "slug": "coastal-engineering",
    "name": "Coastal Engineering",
    "category": "Engineering",
    "summary": "Coastal Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 28.884,
    "inclination": 20.1,
    "tags": [
      "engineering",
      "coastal"
    ],
    "lesson_count": 9,
    "id": 174
  },
  {
    "slug": "petroleum-engineering",
    "name": "Petroleum Engineering",
    "category": "Engineering",
    "summary": "Petroleum Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 166.392,
    "inclination": 43.8,
    "tags": [
      "engineering",
      "petroleum"
    ],
    "lesson_count": 10,
    "id": 175
  },
  {
    "slug": "nuclear-engineering",
    "name": "Nuclear Engineering",
    "category": "Engineering",
    "summary": "Nuclear Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 303.9,
    "inclination": 67.5,
    "tags": [
      "engineering",
      "nuclear"
    ],
    "lesson_count": 11,
    "id": 176
  },
  {
    "slug": "energy-engineering",
    "name": "Energy Engineering",
    "category": "Engineering",
    "summary": "Energy Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 81.408,
    "inclination": -68.8,
    "tags": [
      "engineering",
      "energy"
    ],
    "lesson_count": 4,
    "id": 177
  },
  {
    "slug": "renewable-energy-systems",
    "name": "Renewable Energy Systems",
    "category": "Engineering",
    "summary": "Renewable Energy Systems is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 218.916,
    "inclination": -45.1,
    "tags": [
      "engineering",
      "renewable"
    ],
    "lesson_count": 5,
    "id": 178
  },
  {
    "slug": "power-systems",
    "name": "Power Systems",
    "category": "Engineering",
    "summary": "Power Systems is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 356.424,
    "inclination": -21.4,
    "tags": [
      "engineering",
      "power"
    ],
    "lesson_count": 6,
    "id": 179
  },
  {
    "slug": "signal-processing",
    "name": "Signal Processing",
    "category": "Engineering",
    "summary": "Signal Processing is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 133.932,
    "inclination": 2.3,
    "tags": [
      "engineering",
      "signal"
    ],
    "lesson_count": 7,
    "id": 180
  },
  {
    "slug": "communications-engineering",
    "name": "Communications Engineering",
    "category": "Engineering",
    "summary": "Communications Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 271.44,
    "inclination": 26.0,
    "tags": [
      "engineering",
      "communications"
    ],
    "lesson_count": 8,
    "id": 181
  },
  {
    "slug": "photonics",
    "name": "Photonics",
    "category": "Engineering",
    "summary": "Photonics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 48.948,
    "inclination": 49.7,
    "tags": [
      "engineering",
      "photonics"
    ],
    "lesson_count": 9,
    "id": 182
  },
  {
    "slug": "semiconductor-engineering",
    "name": "Semiconductor Engineering",
    "category": "Engineering",
    "summary": "Semiconductor Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 186.456,
    "inclination": 73.4,
    "tags": [
      "engineering",
      "semiconductor"
    ],
    "lesson_count": 10,
    "id": 183
  },
  {
    "slug": "vlsi-design",
    "name": "VLSI Design",
    "category": "Engineering",
    "summary": "VLSI Design is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 323.964,
    "inclination": -62.9,
    "tags": [
      "engineering",
      "vlsi"
    ],
    "lesson_count": 11,
    "id": 184
  },
  {
    "slug": "robotics-engineering",
    "name": "Robotics Engineering",
    "category": "Engineering",
    "summary": "Robotics Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 101.472,
    "inclination": -39.2,
    "tags": [
      "engineering",
      "robotics"
    ],
    "lesson_count": 4,
    "id": 185
  },
  {
    "slug": "manufacturing-engineering",
    "name": "Manufacturing Engineering",
    "category": "Engineering",
    "summary": "Manufacturing Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 238.98,
    "inclination": -15.5,
    "tags": [
      "engineering",
      "manufacturing"
    ],
    "lesson_count": 5,
    "id": 186
  },
  {
    "slug": "additive-manufacturing",
    "name": "Additive Manufacturing",
    "category": "Engineering",
    "summary": "Additive Manufacturing is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 16.488,
    "inclination": 8.2,
    "tags": [
      "engineering",
      "additive"
    ],
    "lesson_count": 6,
    "id": 187
  },
  {
    "slug": "automotive-engineering",
    "name": "Automotive Engineering",
    "category": "Engineering",
    "summary": "Automotive Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 153.996,
    "inclination": 31.9,
    "tags": [
      "engineering",
      "automotive"
    ],
    "lesson_count": 7,
    "id": 188
  },
  {
    "slug": "naval-architecture",
    "name": "Naval Architecture",
    "category": "Engineering",
    "summary": "Naval Architecture is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 291.504,
    "inclination": 55.6,
    "tags": [
      "engineering",
      "naval"
    ],
    "lesson_count": 8,
    "id": 189
  },
  {
    "slug": "mining-engineering",
    "name": "Mining Engineering",
    "category": "Engineering",
    "summary": "Mining Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 69.012,
    "inclination": 79.3,
    "tags": [
      "engineering",
      "mining"
    ],
    "lesson_count": 9,
    "id": 190
  },
  {
    "slug": "safety-engineering",
    "name": "Safety Engineering",
    "category": "Engineering",
    "summary": "Safety Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 206.52,
    "inclination": -57.0,
    "tags": [
      "engineering",
      "safety"
    ],
    "lesson_count": 10,
    "id": 191
  },
  {
    "slug": "reliability-engineering",
    "name": "Reliability Engineering",
    "category": "Engineering",
    "summary": "Reliability Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 344.028,
    "inclination": -33.3,
    "tags": [
      "engineering",
      "reliability"
    ],
    "lesson_count": 11,
    "id": 192
  },
  {
    "slug": "human-factors-engineering",
    "name": "Human Factors Engineering",
    "category": "Engineering",
    "summary": "Human Factors Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 121.536,
    "inclination": -9.6,
    "tags": [
      "engineering",
      "human"
    ],
    "lesson_count": 4,
    "id": 193
  },
  {
    "slug": "optical-engineering",
    "name": "Optical Engineering",
    "category": "Engineering",
    "summary": "Optical Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 259.044,
    "inclination": 14.1,
    "tags": [
      "engineering",
      "optical"
    ],
    "lesson_count": 5,
    "id": 194
  },
  {
    "slug": "thermal-engineering",
    "name": "Thermal Engineering",
    "category": "Engineering",
    "summary": "Thermal Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Engineering.",
    "color": "#fb7185",
    "orbit": 36.552,
    "inclination": 37.8,
    "tags": [
      "engineering",
      "thermal"
    ],
    "lesson_count": 6,
    "id": 195
  },
  {
    "slug": "gis",
    "name": "GIS",
    "category": "Earth, Space & Environment",
    "summary": "GIS is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 174.06,
    "inclination": 61.5,
    "tags": [
      "earth,",
      "gis"
    ],
    "lesson_count": 7,
    "id": 196
  },
  {
    "slug": "remote-sensing",
    "name": "Remote Sensing",
    "category": "Earth, Space & Environment",
    "summary": "Remote Sensing is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 311.568,
    "inclination": -74.8,
    "tags": [
      "earth,",
      "remote"
    ],
    "lesson_count": 8,
    "id": 197
  },
  {
    "slug": "geodesy",
    "name": "Geodesy",
    "category": "Earth, Space & Environment",
    "summary": "Geodesy is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 89.076,
    "inclination": -51.1,
    "tags": [
      "earth,",
      "geodesy"
    ],
    "lesson_count": 9,
    "id": 198
  },
  {
    "slug": "cartography",
    "name": "Cartography",
    "category": "Earth, Space & Environment",
    "summary": "Cartography is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 226.584,
    "inclination": -27.4,
    "tags": [
      "earth,",
      "cartography"
    ],
    "lesson_count": 10,
    "id": 199
  },
  {
    "slug": "photogrammetry",
    "name": "Photogrammetry",
    "category": "Earth, Space & Environment",
    "summary": "Photogrammetry is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 4.092,
    "inclination": -3.7,
    "tags": [
      "earth,",
      "photogrammetry"
    ],
    "lesson_count": 11,
    "id": 200
  },
  {
    "slug": "spatial-statistics",
    "name": "Spatial Statistics",
    "category": "Earth, Space & Environment",
    "summary": "Spatial Statistics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 141.6,
    "inclination": 20.0,
    "tags": [
      "earth,",
      "spatial"
    ],
    "lesson_count": 4,
    "id": 201
  },
  {
    "slug": "geoinformatics",
    "name": "Geoinformatics",
    "category": "Earth, Space & Environment",
    "summary": "Geoinformatics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 279.108,
    "inclination": 43.7,
    "tags": [
      "earth,",
      "geoinformatics"
    ],
    "lesson_count": 5,
    "id": 202
  },
  {
    "slug": "climate-science",
    "name": "Climate Science",
    "category": "Earth, Space & Environment",
    "summary": "Climate Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 56.616,
    "inclination": 67.4,
    "tags": [
      "earth,",
      "climate"
    ],
    "lesson_count": 6,
    "id": 203
  },
  {
    "slug": "meteorology",
    "name": "Meteorology",
    "category": "Earth, Space & Environment",
    "summary": "Meteorology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 194.124,
    "inclination": -68.9,
    "tags": [
      "earth,",
      "meteorology"
    ],
    "lesson_count": 7,
    "id": 204
  },
  {
    "slug": "atmospheric-science",
    "name": "Atmospheric Science",
    "category": "Earth, Space & Environment",
    "summary": "Atmospheric Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 331.632,
    "inclination": -45.2,
    "tags": [
      "earth,",
      "atmospheric"
    ],
    "lesson_count": 8,
    "id": 205
  },
  {
    "slug": "oceanography",
    "name": "Oceanography",
    "category": "Earth, Space & Environment",
    "summary": "Oceanography is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 109.14,
    "inclination": -21.5,
    "tags": [
      "earth,",
      "oceanography"
    ],
    "lesson_count": 9,
    "id": 206
  },
  {
    "slug": "hydrology",
    "name": "Hydrology",
    "category": "Earth, Space & Environment",
    "summary": "Hydrology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 246.648,
    "inclination": 2.2,
    "tags": [
      "earth,",
      "hydrology"
    ],
    "lesson_count": 10,
    "id": 207
  },
  {
    "slug": "glaciology",
    "name": "Glaciology",
    "category": "Earth, Space & Environment",
    "summary": "Glaciology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 24.156,
    "inclination": 25.9,
    "tags": [
      "earth,",
      "glaciology"
    ],
    "lesson_count": 11,
    "id": 208
  },
  {
    "slug": "geology",
    "name": "Geology",
    "category": "Earth, Space & Environment",
    "summary": "Geology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 161.664,
    "inclination": 49.6,
    "tags": [
      "earth,",
      "geology"
    ],
    "lesson_count": 4,
    "id": 209
  },
  {
    "slug": "geophysics",
    "name": "Geophysics",
    "category": "Earth, Space & Environment",
    "summary": "Geophysics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 299.172,
    "inclination": 73.3,
    "tags": [
      "earth,",
      "geophysics"
    ],
    "lesson_count": 5,
    "id": 210
  },
  {
    "slug": "seismology",
    "name": "Seismology",
    "category": "Earth, Space & Environment",
    "summary": "Seismology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 76.68,
    "inclination": -63.0,
    "tags": [
      "earth,",
      "seismology"
    ],
    "lesson_count": 6,
    "id": 211
  },
  {
    "slug": "volcanology",
    "name": "Volcanology",
    "category": "Earth, Space & Environment",
    "summary": "Volcanology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 214.188,
    "inclination": -39.3,
    "tags": [
      "earth,",
      "volcanology"
    ],
    "lesson_count": 7,
    "id": 212
  },
  {
    "slug": "mineralogy",
    "name": "Mineralogy",
    "category": "Earth, Space & Environment",
    "summary": "Mineralogy is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 351.696,
    "inclination": -15.6,
    "tags": [
      "earth,",
      "mineralogy"
    ],
    "lesson_count": 8,
    "id": 213
  },
  {
    "slug": "paleontology",
    "name": "Paleontology",
    "category": "Earth, Space & Environment",
    "summary": "Paleontology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 129.204,
    "inclination": 8.1,
    "tags": [
      "earth,",
      "paleontology"
    ],
    "lesson_count": 9,
    "id": 214
  },
  {
    "slug": "soil-science",
    "name": "Soil Science",
    "category": "Earth, Space & Environment",
    "summary": "Soil Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 266.712,
    "inclination": 31.8,
    "tags": [
      "earth,",
      "soil"
    ],
    "lesson_count": 10,
    "id": 215
  },
  {
    "slug": "agriculture",
    "name": "Agriculture",
    "category": "Earth, Space & Environment",
    "summary": "Agriculture is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 44.22,
    "inclination": 55.5,
    "tags": [
      "earth,",
      "agriculture"
    ],
    "lesson_count": 11,
    "id": 216
  },
  {
    "slug": "agronomy",
    "name": "Agronomy",
    "category": "Earth, Space & Environment",
    "summary": "Agronomy is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 181.728,
    "inclination": 79.2,
    "tags": [
      "earth,",
      "agronomy"
    ],
    "lesson_count": 4,
    "id": 217
  },
  {
    "slug": "precision-agriculture",
    "name": "Precision Agriculture",
    "category": "Earth, Space & Environment",
    "summary": "Precision Agriculture is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 319.236,
    "inclination": -57.1,
    "tags": [
      "earth,",
      "precision"
    ],
    "lesson_count": 5,
    "id": 218
  },
  {
    "slug": "forestry",
    "name": "Forestry",
    "category": "Earth, Space & Environment",
    "summary": "Forestry is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 96.744,
    "inclination": -33.4,
    "tags": [
      "earth,",
      "forestry"
    ],
    "lesson_count": 6,
    "id": 219
  },
  {
    "slug": "environmental-science",
    "name": "Environmental Science",
    "category": "Earth, Space & Environment",
    "summary": "Environmental Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 234.252,
    "inclination": -9.7,
    "tags": [
      "earth,",
      "environmental"
    ],
    "lesson_count": 7,
    "id": 220
  },
  {
    "slug": "conservation-biology",
    "name": "Conservation Biology",
    "category": "Earth, Space & Environment",
    "summary": "Conservation Biology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 11.76,
    "inclination": 14.0,
    "tags": [
      "earth,",
      "conservation"
    ],
    "lesson_count": 8,
    "id": 221
  },
  {
    "slug": "sustainability-science",
    "name": "Sustainability Science",
    "category": "Earth, Space & Environment",
    "summary": "Sustainability Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 149.268,
    "inclination": 37.7,
    "tags": [
      "earth,",
      "sustainability"
    ],
    "lesson_count": 9,
    "id": 222
  },
  {
    "slug": "carbon-cycle-science",
    "name": "Carbon Cycle Science",
    "category": "Earth, Space & Environment",
    "summary": "Carbon Cycle Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 286.776,
    "inclination": 61.4,
    "tags": [
      "earth,",
      "carbon"
    ],
    "lesson_count": 10,
    "id": 223
  },
  {
    "slug": "disaster-science",
    "name": "Disaster Science",
    "category": "Earth, Space & Environment",
    "summary": "Disaster Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 64.284,
    "inclination": -74.9,
    "tags": [
      "earth,",
      "disaster"
    ],
    "lesson_count": 11,
    "id": 224
  },
  {
    "slug": "urban-climatology",
    "name": "Urban Climatology",
    "category": "Earth, Space & Environment",
    "summary": "Urban Climatology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 201.792,
    "inclination": -51.2,
    "tags": [
      "earth,",
      "urban"
    ],
    "lesson_count": 4,
    "id": 225
  },
  {
    "slug": "coastal-science",
    "name": "Coastal Science",
    "category": "Earth, Space & Environment",
    "summary": "Coastal Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 339.3,
    "inclination": -27.5,
    "tags": [
      "earth,",
      "coastal"
    ],
    "lesson_count": 5,
    "id": 226
  },
  {
    "slug": "water-resources",
    "name": "Water Resources",
    "category": "Earth, Space & Environment",
    "summary": "Water Resources is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 116.808,
    "inclination": -3.8,
    "tags": [
      "earth,",
      "water"
    ],
    "lesson_count": 6,
    "id": 227
  },
  {
    "slug": "air-quality-science",
    "name": "Air Quality Science",
    "category": "Earth, Space & Environment",
    "summary": "Air Quality Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 254.316,
    "inclination": 19.9,
    "tags": [
      "earth,",
      "air"
    ],
    "lesson_count": 7,
    "id": 228
  },
  {
    "slug": "earth-system-modeling",
    "name": "Earth System Modeling",
    "category": "Earth, Space & Environment",
    "summary": "Earth System Modeling is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 31.824,
    "inclination": 43.6,
    "tags": [
      "earth,",
      "earth"
    ],
    "lesson_count": 8,
    "id": 229
  },
  {
    "slug": "satellite-meteorology",
    "name": "Satellite Meteorology",
    "category": "Earth, Space & Environment",
    "summary": "Satellite Meteorology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 169.332,
    "inclination": 67.3,
    "tags": [
      "earth,",
      "satellite"
    ],
    "lesson_count": 9,
    "id": 230
  },
  {
    "slug": "land-change-science",
    "name": "Land Change Science",
    "category": "Earth, Space & Environment",
    "summary": "Land Change Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 306.84,
    "inclination": -69.0,
    "tags": [
      "earth,",
      "land"
    ],
    "lesson_count": 10,
    "id": 231
  },
  {
    "slug": "biodiversity-informatics",
    "name": "Biodiversity Informatics",
    "category": "Earth, Space & Environment",
    "summary": "Biodiversity Informatics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 84.348,
    "inclination": -45.3,
    "tags": [
      "earth,",
      "biodiversity"
    ],
    "lesson_count": 11,
    "id": 232
  },
  {
    "slug": "ecological-modeling",
    "name": "Ecological Modeling",
    "category": "Earth, Space & Environment",
    "summary": "Ecological Modeling is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Earth, Space & Environment.",
    "color": "#4ade80",
    "orbit": 221.856,
    "inclination": -21.6,
    "tags": [
      "earth,",
      "ecological"
    ],
    "lesson_count": 4,
    "id": 233
  },
  {
    "slug": "architecture",
    "name": "Architecture",
    "category": "Built Environment",
    "summary": "Architecture is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Built Environment.",
    "color": "#fbbf24",
    "orbit": 359.364,
    "inclination": 2.1,
    "tags": [
      "built",
      "architecture"
    ],
    "lesson_count": 5,
    "id": 234
  },
  {
    "slug": "urban-planning",
    "name": "Urban Planning",
    "category": "Built Environment",
    "summary": "Urban Planning is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Built Environment.",
    "color": "#fbbf24",
    "orbit": 136.872,
    "inclination": 25.8,
    "tags": [
      "built",
      "urban"
    ],
    "lesson_count": 6,
    "id": 235
  },
  {
    "slug": "landscape-architecture",
    "name": "Landscape Architecture",
    "category": "Built Environment",
    "summary": "Landscape Architecture is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Built Environment.",
    "color": "#fbbf24",
    "orbit": 274.38,
    "inclination": 49.5,
    "tags": [
      "built",
      "landscape"
    ],
    "lesson_count": 7,
    "id": 236
  },
  {
    "slug": "interior-design",
    "name": "Interior Design",
    "category": "Built Environment",
    "summary": "Interior Design is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Built Environment.",
    "color": "#fbbf24",
    "orbit": 51.888,
    "inclination": 73.2,
    "tags": [
      "built",
      "interior"
    ],
    "lesson_count": 8,
    "id": 237
  },
  {
    "slug": "historic-preservation",
    "name": "Historic Preservation",
    "category": "Built Environment",
    "summary": "Historic Preservation is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Built Environment.",
    "color": "#fbbf24",
    "orbit": 189.396,
    "inclination": -63.1,
    "tags": [
      "built",
      "historic"
    ],
    "lesson_count": 9,
    "id": 238
  },
  {
    "slug": "building-science",
    "name": "Building Science",
    "category": "Built Environment",
    "summary": "Building Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Built Environment.",
    "color": "#fbbf24",
    "orbit": 326.904,
    "inclination": -39.4,
    "tags": [
      "built",
      "building"
    ],
    "lesson_count": 10,
    "id": 239
  },
  {
    "slug": "construction-management",
    "name": "Construction Management",
    "category": "Built Environment",
    "summary": "Construction Management is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Built Environment.",
    "color": "#fbbf24",
    "orbit": 104.412,
    "inclination": -15.7,
    "tags": [
      "built",
      "construction"
    ],
    "lesson_count": 11,
    "id": 240
  },
  {
    "slug": "smart-cities",
    "name": "Smart Cities",
    "category": "Built Environment",
    "summary": "Smart Cities is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Built Environment.",
    "color": "#fbbf24",
    "orbit": 241.92,
    "inclination": 8.0,
    "tags": [
      "built",
      "smart"
    ],
    "lesson_count": 4,
    "id": 241
  },
  {
    "slug": "transportation-planning",
    "name": "Transportation Planning",
    "category": "Built Environment",
    "summary": "Transportation Planning is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Built Environment.",
    "color": "#fbbf24",
    "orbit": 19.428,
    "inclination": 31.7,
    "tags": [
      "built",
      "transportation"
    ],
    "lesson_count": 5,
    "id": 242
  },
  {
    "slug": "housing-studies",
    "name": "Housing Studies",
    "category": "Built Environment",
    "summary": "Housing Studies is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Built Environment.",
    "color": "#fbbf24",
    "orbit": 156.936,
    "inclination": 55.4,
    "tags": [
      "built",
      "housing"
    ],
    "lesson_count": 6,
    "id": 243
  },
  {
    "slug": "real-estate",
    "name": "Real Estate",
    "category": "Built Environment",
    "summary": "Real Estate is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Built Environment.",
    "color": "#fbbf24",
    "orbit": 294.444,
    "inclination": 79.1,
    "tags": [
      "built",
      "real"
    ],
    "lesson_count": 7,
    "id": 244
  },
  {
    "slug": "facility-management",
    "name": "Facility Management",
    "category": "Built Environment",
    "summary": "Facility Management is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Built Environment.",
    "color": "#fbbf24",
    "orbit": 71.952,
    "inclination": -57.2,
    "tags": [
      "built",
      "facility"
    ],
    "lesson_count": 8,
    "id": 245
  },
  {
    "slug": "urban-design",
    "name": "Urban Design",
    "category": "Built Environment",
    "summary": "Urban Design is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Built Environment.",
    "color": "#fbbf24",
    "orbit": 209.46,
    "inclination": -33.5,
    "tags": [
      "built",
      "urban"
    ],
    "lesson_count": 9,
    "id": 246
  },
  {
    "slug": "parametric-design",
    "name": "Parametric Design",
    "category": "Built Environment",
    "summary": "Parametric Design is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Built Environment.",
    "color": "#fbbf24",
    "orbit": 346.968,
    "inclination": -9.8,
    "tags": [
      "built",
      "parametric"
    ],
    "lesson_count": 10,
    "id": 247
  },
  {
    "slug": "digital-twins-for-cities",
    "name": "Digital Twins for Cities",
    "category": "Built Environment",
    "summary": "Digital Twins for Cities is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Built Environment.",
    "color": "#fbbf24",
    "orbit": 124.476,
    "inclination": 13.9,
    "tags": [
      "built",
      "digital"
    ],
    "lesson_count": 11,
    "id": 248
  },
  {
    "slug": "bim",
    "name": "BIM",
    "category": "Built Environment",
    "summary": "BIM is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Built Environment.",
    "color": "#fbbf24",
    "orbit": 261.984,
    "inclination": 37.6,
    "tags": [
      "built",
      "bim"
    ],
    "lesson_count": 4,
    "id": 249
  },
  {
    "slug": "heritage-informatics",
    "name": "Heritage Informatics",
    "category": "Built Environment",
    "summary": "Heritage Informatics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Built Environment.",
    "color": "#fbbf24",
    "orbit": 39.492,
    "inclination": 61.3,
    "tags": [
      "built",
      "heritage"
    ],
    "lesson_count": 5,
    "id": 250
  },
  {
    "slug": "history",
    "name": "History",
    "category": "Society, Humanities & Arts",
    "summary": "History is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 177.0,
    "inclination": -75.0,
    "tags": [
      "society,",
      "history"
    ],
    "lesson_count": 6,
    "id": 251
  },
  {
    "slug": "world-history",
    "name": "World History",
    "category": "Society, Humanities & Arts",
    "summary": "World History is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 314.508,
    "inclination": -51.3,
    "tags": [
      "society,",
      "world"
    ],
    "lesson_count": 7,
    "id": 252
  },
  {
    "slug": "archaeology",
    "name": "Archaeology",
    "category": "Society, Humanities & Arts",
    "summary": "Archaeology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 92.016,
    "inclination": -27.6,
    "tags": [
      "society,",
      "archaeology"
    ],
    "lesson_count": 8,
    "id": 253
  },
  {
    "slug": "anthropology",
    "name": "Anthropology",
    "category": "Society, Humanities & Arts",
    "summary": "Anthropology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 229.524,
    "inclination": -3.9,
    "tags": [
      "society,",
      "anthropology"
    ],
    "lesson_count": 9,
    "id": 254
  },
  {
    "slug": "sociology",
    "name": "Sociology",
    "category": "Society, Humanities & Arts",
    "summary": "Sociology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 7.032,
    "inclination": 19.8,
    "tags": [
      "society,",
      "sociology"
    ],
    "lesson_count": 10,
    "id": 255
  },
  {
    "slug": "political-science",
    "name": "Political Science",
    "category": "Society, Humanities & Arts",
    "summary": "Political Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 144.54,
    "inclination": 43.5,
    "tags": [
      "society,",
      "political"
    ],
    "lesson_count": 11,
    "id": 256
  },
  {
    "slug": "international-relations",
    "name": "International Relations",
    "category": "Society, Humanities & Arts",
    "summary": "International Relations is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 282.048,
    "inclination": 67.2,
    "tags": [
      "society,",
      "international"
    ],
    "lesson_count": 4,
    "id": 257
  },
  {
    "slug": "public-policy",
    "name": "Public Policy",
    "category": "Society, Humanities & Arts",
    "summary": "Public Policy is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 59.556,
    "inclination": -69.1,
    "tags": [
      "society,",
      "public"
    ],
    "lesson_count": 5,
    "id": 258
  },
  {
    "slug": "law",
    "name": "Law",
    "category": "Society, Humanities & Arts",
    "summary": "Law is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 197.064,
    "inclination": -45.4,
    "tags": [
      "society,",
      "law"
    ],
    "lesson_count": 6,
    "id": 259
  },
  {
    "slug": "constitutional-law",
    "name": "Constitutional Law",
    "category": "Society, Humanities & Arts",
    "summary": "Constitutional Law is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 334.572,
    "inclination": -21.7,
    "tags": [
      "society,",
      "constitutional"
    ],
    "lesson_count": 7,
    "id": 260
  },
  {
    "slug": "international-law",
    "name": "International Law",
    "category": "Society, Humanities & Arts",
    "summary": "International Law is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 112.08,
    "inclination": 2.0,
    "tags": [
      "society,",
      "international"
    ],
    "lesson_count": 8,
    "id": 261
  },
  {
    "slug": "intellectual-property-law",
    "name": "Intellectual Property Law",
    "category": "Society, Humanities & Arts",
    "summary": "Intellectual Property Law is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 249.588,
    "inclination": 25.7,
    "tags": [
      "society,",
      "intellectual"
    ],
    "lesson_count": 9,
    "id": 262
  },
  {
    "slug": "ethics",
    "name": "Ethics",
    "category": "Society, Humanities & Arts",
    "summary": "Ethics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 27.096,
    "inclination": 49.4,
    "tags": [
      "society,",
      "ethics"
    ],
    "lesson_count": 10,
    "id": 263
  },
  {
    "slug": "philosophy",
    "name": "Philosophy",
    "category": "Society, Humanities & Arts",
    "summary": "Philosophy is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 164.604,
    "inclination": 73.1,
    "tags": [
      "society,",
      "philosophy"
    ],
    "lesson_count": 11,
    "id": 264
  },
  {
    "slug": "logic",
    "name": "Logic",
    "category": "Society, Humanities & Arts",
    "summary": "Logic is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 302.112,
    "inclination": -63.2,
    "tags": [
      "society,",
      "logic"
    ],
    "lesson_count": 4,
    "id": 265
  },
  {
    "slug": "epistemology",
    "name": "Epistemology",
    "category": "Society, Humanities & Arts",
    "summary": "Epistemology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 79.62,
    "inclination": -39.5,
    "tags": [
      "society,",
      "epistemology"
    ],
    "lesson_count": 5,
    "id": 266
  },
  {
    "slug": "metaphysics",
    "name": "Metaphysics",
    "category": "Society, Humanities & Arts",
    "summary": "Metaphysics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 217.128,
    "inclination": -15.8,
    "tags": [
      "society,",
      "metaphysics"
    ],
    "lesson_count": 6,
    "id": 267
  },
  {
    "slug": "aesthetics",
    "name": "Aesthetics",
    "category": "Society, Humanities & Arts",
    "summary": "Aesthetics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 354.636,
    "inclination": 7.9,
    "tags": [
      "society,",
      "aesthetics"
    ],
    "lesson_count": 7,
    "id": 268
  },
  {
    "slug": "psychology",
    "name": "Psychology",
    "category": "Society, Humanities & Arts",
    "summary": "Psychology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 132.144,
    "inclination": 31.6,
    "tags": [
      "society,",
      "psychology"
    ],
    "lesson_count": 8,
    "id": 269
  },
  {
    "slug": "cognitive-science",
    "name": "Cognitive Science",
    "category": "Society, Humanities & Arts",
    "summary": "Cognitive Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 269.652,
    "inclination": 55.3,
    "tags": [
      "society,",
      "cognitive"
    ],
    "lesson_count": 9,
    "id": 270
  },
  {
    "slug": "behavioral-economics",
    "name": "Behavioral Economics",
    "category": "Society, Humanities & Arts",
    "summary": "Behavioral Economics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 47.16,
    "inclination": 79.0,
    "tags": [
      "society,",
      "behavioral"
    ],
    "lesson_count": 10,
    "id": 271
  },
  {
    "slug": "education",
    "name": "Education",
    "category": "Society, Humanities & Arts",
    "summary": "Education is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 184.668,
    "inclination": -57.3,
    "tags": [
      "society,",
      "education"
    ],
    "lesson_count": 11,
    "id": 272
  },
  {
    "slug": "learning-sciences",
    "name": "Learning Sciences",
    "category": "Society, Humanities & Arts",
    "summary": "Learning Sciences is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 322.176,
    "inclination": -33.6,
    "tags": [
      "society,",
      "learning"
    ],
    "lesson_count": 4,
    "id": 273
  },
  {
    "slug": "linguistics",
    "name": "Linguistics",
    "category": "Society, Humanities & Arts",
    "summary": "Linguistics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 99.684,
    "inclination": -9.9,
    "tags": [
      "society,",
      "linguistics"
    ],
    "lesson_count": 5,
    "id": 274
  },
  {
    "slug": "languages",
    "name": "Languages",
    "category": "Society, Humanities & Arts",
    "summary": "Languages is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 237.192,
    "inclination": 13.8,
    "tags": [
      "society,",
      "languages"
    ],
    "lesson_count": 6,
    "id": 275
  },
  {
    "slug": "translation-studies",
    "name": "Translation Studies",
    "category": "Society, Humanities & Arts",
    "summary": "Translation Studies is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 14.7,
    "inclination": 37.5,
    "tags": [
      "society,",
      "translation"
    ],
    "lesson_count": 7,
    "id": 276
  },
  {
    "slug": "literature",
    "name": "Literature",
    "category": "Society, Humanities & Arts",
    "summary": "Literature is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 152.208,
    "inclination": 61.2,
    "tags": [
      "society,",
      "literature"
    ],
    "lesson_count": 8,
    "id": 277
  },
  {
    "slug": "comparative-literature",
    "name": "Comparative Literature",
    "category": "Society, Humanities & Arts",
    "summary": "Comparative Literature is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 289.716,
    "inclination": -75.1,
    "tags": [
      "society,",
      "comparative"
    ],
    "lesson_count": 9,
    "id": 278
  },
  {
    "slug": "fine-arts",
    "name": "Fine Arts",
    "category": "Society, Humanities & Arts",
    "summary": "Fine Arts is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 67.224,
    "inclination": -51.4,
    "tags": [
      "society,",
      "fine"
    ],
    "lesson_count": 10,
    "id": 279
  },
  {
    "slug": "art-history",
    "name": "Art History",
    "category": "Society, Humanities & Arts",
    "summary": "Art History is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 204.732,
    "inclination": -27.7,
    "tags": [
      "society,",
      "art"
    ],
    "lesson_count": 11,
    "id": 280
  },
  {
    "slug": "music",
    "name": "Music",
    "category": "Society, Humanities & Arts",
    "summary": "Music is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 342.24,
    "inclination": -4.0,
    "tags": [
      "society,",
      "music"
    ],
    "lesson_count": 4,
    "id": 281
  },
  {
    "slug": "music-theory",
    "name": "Music Theory",
    "category": "Society, Humanities & Arts",
    "summary": "Music Theory is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 119.748,
    "inclination": 19.7,
    "tags": [
      "society,",
      "music"
    ],
    "lesson_count": 5,
    "id": 282
  },
  {
    "slug": "film-studies",
    "name": "Film Studies",
    "category": "Society, Humanities & Arts",
    "summary": "Film Studies is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 257.256,
    "inclination": 43.4,
    "tags": [
      "society,",
      "film"
    ],
    "lesson_count": 6,
    "id": 283
  },
  {
    "slug": "media-studies",
    "name": "Media Studies",
    "category": "Society, Humanities & Arts",
    "summary": "Media Studies is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 34.764,
    "inclination": 67.1,
    "tags": [
      "society,",
      "media"
    ],
    "lesson_count": 7,
    "id": 284
  },
  {
    "slug": "journalism",
    "name": "Journalism",
    "category": "Society, Humanities & Arts",
    "summary": "Journalism is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 172.272,
    "inclination": -69.2,
    "tags": [
      "society,",
      "journalism"
    ],
    "lesson_count": 8,
    "id": 285
  },
  {
    "slug": "design-theory",
    "name": "Design Theory",
    "category": "Society, Humanities & Arts",
    "summary": "Design Theory is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 309.78,
    "inclination": -45.5,
    "tags": [
      "society,",
      "design"
    ],
    "lesson_count": 9,
    "id": 286
  },
  {
    "slug": "cultural-studies",
    "name": "Cultural Studies",
    "category": "Society, Humanities & Arts",
    "summary": "Cultural Studies is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 87.288,
    "inclination": -21.8,
    "tags": [
      "society,",
      "cultural"
    ],
    "lesson_count": 10,
    "id": 287
  },
  {
    "slug": "museum-studies",
    "name": "Museum Studies",
    "category": "Society, Humanities & Arts",
    "summary": "Museum Studies is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 224.796,
    "inclination": 1.9,
    "tags": [
      "society,",
      "museum"
    ],
    "lesson_count": 11,
    "id": 288
  },
  {
    "slug": "library-science",
    "name": "Library Science",
    "category": "Society, Humanities & Arts",
    "summary": "Library Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 2.304,
    "inclination": 25.6,
    "tags": [
      "society,",
      "library"
    ],
    "lesson_count": 4,
    "id": 289
  },
  {
    "slug": "religious-studies",
    "name": "Religious Studies",
    "category": "Society, Humanities & Arts",
    "summary": "Religious Studies is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Society, Humanities & Arts.",
    "color": "#f472b6",
    "orbit": 139.812,
    "inclination": 49.3,
    "tags": [
      "society,",
      "religious"
    ],
    "lesson_count": 5,
    "id": 290
  },
  {
    "slug": "economics",
    "name": "Economics",
    "category": "Economy, Business & Governance",
    "summary": "Economics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 277.32,
    "inclination": 73.0,
    "tags": [
      "economy,",
      "economics"
    ],
    "lesson_count": 6,
    "id": 291
  },
  {
    "slug": "macroeconomics",
    "name": "Macroeconomics",
    "category": "Economy, Business & Governance",
    "summary": "Macroeconomics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 54.828,
    "inclination": -63.3,
    "tags": [
      "economy,",
      "macroeconomics"
    ],
    "lesson_count": 7,
    "id": 292
  },
  {
    "slug": "microeconomics",
    "name": "Microeconomics",
    "category": "Economy, Business & Governance",
    "summary": "Microeconomics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 192.336,
    "inclination": -39.6,
    "tags": [
      "economy,",
      "microeconomics"
    ],
    "lesson_count": 8,
    "id": 293
  },
  {
    "slug": "development-economics",
    "name": "Development Economics",
    "category": "Economy, Business & Governance",
    "summary": "Development Economics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 329.844,
    "inclination": -15.9,
    "tags": [
      "economy,",
      "development"
    ],
    "lesson_count": 9,
    "id": 294
  },
  {
    "slug": "environmental-economics",
    "name": "Environmental Economics",
    "category": "Economy, Business & Governance",
    "summary": "Environmental Economics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 107.352,
    "inclination": 7.8,
    "tags": [
      "economy,",
      "environmental"
    ],
    "lesson_count": 10,
    "id": 295
  },
  {
    "slug": "finance",
    "name": "Finance",
    "category": "Economy, Business & Governance",
    "summary": "Finance is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 244.86,
    "inclination": 31.5,
    "tags": [
      "economy,",
      "finance"
    ],
    "lesson_count": 11,
    "id": 296
  },
  {
    "slug": "corporate-finance",
    "name": "Corporate Finance",
    "category": "Economy, Business & Governance",
    "summary": "Corporate Finance is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 22.368,
    "inclination": 55.2,
    "tags": [
      "economy,",
      "corporate"
    ],
    "lesson_count": 4,
    "id": 297
  },
  {
    "slug": "quantitative-finance",
    "name": "Quantitative Finance",
    "category": "Economy, Business & Governance",
    "summary": "Quantitative Finance is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 159.876,
    "inclination": 78.9,
    "tags": [
      "economy,",
      "quantitative"
    ],
    "lesson_count": 5,
    "id": 298
  },
  {
    "slug": "accounting",
    "name": "Accounting",
    "category": "Economy, Business & Governance",
    "summary": "Accounting is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 297.384,
    "inclination": -57.4,
    "tags": [
      "economy,",
      "accounting"
    ],
    "lesson_count": 6,
    "id": 299
  },
  {
    "slug": "business",
    "name": "Business",
    "category": "Economy, Business & Governance",
    "summary": "Business is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 74.892,
    "inclination": -33.7,
    "tags": [
      "economy,",
      "business"
    ],
    "lesson_count": 7,
    "id": 300
  },
  {
    "slug": "management",
    "name": "Management",
    "category": "Economy, Business & Governance",
    "summary": "Management is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 212.4,
    "inclination": -10.0,
    "tags": [
      "economy,",
      "management"
    ],
    "lesson_count": 8,
    "id": 301
  },
  {
    "slug": "strategy",
    "name": "Strategy",
    "category": "Economy, Business & Governance",
    "summary": "Strategy is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 349.908,
    "inclination": 13.7,
    "tags": [
      "economy,",
      "strategy"
    ],
    "lesson_count": 9,
    "id": 302
  },
  {
    "slug": "marketing",
    "name": "Marketing",
    "category": "Economy, Business & Governance",
    "summary": "Marketing is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 127.416,
    "inclination": 37.4,
    "tags": [
      "economy,",
      "marketing"
    ],
    "lesson_count": 10,
    "id": 303
  },
  {
    "slug": "entrepreneurship",
    "name": "Entrepreneurship",
    "category": "Economy, Business & Governance",
    "summary": "Entrepreneurship is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 264.924,
    "inclination": 61.1,
    "tags": [
      "economy,",
      "entrepreneurship"
    ],
    "lesson_count": 11,
    "id": 304
  },
  {
    "slug": "supply-chain-management",
    "name": "Supply Chain Management",
    "category": "Economy, Business & Governance",
    "summary": "Supply Chain Management is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 42.432,
    "inclination": -75.2,
    "tags": [
      "economy,",
      "supply"
    ],
    "lesson_count": 4,
    "id": 305
  },
  {
    "slug": "operations-management",
    "name": "Operations Management",
    "category": "Economy, Business & Governance",
    "summary": "Operations Management is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 179.94,
    "inclination": -51.5,
    "tags": [
      "economy,",
      "operations"
    ],
    "lesson_count": 5,
    "id": 306
  },
  {
    "slug": "human-resources",
    "name": "Human Resources",
    "category": "Economy, Business & Governance",
    "summary": "Human Resources is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 317.448,
    "inclination": -27.8,
    "tags": [
      "economy,",
      "human"
    ],
    "lesson_count": 6,
    "id": 307
  },
  {
    "slug": "organizational-behavior",
    "name": "Organizational Behavior",
    "category": "Economy, Business & Governance",
    "summary": "Organizational Behavior is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 94.956,
    "inclination": -4.1,
    "tags": [
      "economy,",
      "organizational"
    ],
    "lesson_count": 7,
    "id": 308
  },
  {
    "slug": "project-management",
    "name": "Project Management",
    "category": "Economy, Business & Governance",
    "summary": "Project Management is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 232.464,
    "inclination": 19.6,
    "tags": [
      "economy,",
      "project"
    ],
    "lesson_count": 8,
    "id": 309
  },
  {
    "slug": "product-management",
    "name": "Product Management",
    "category": "Economy, Business & Governance",
    "summary": "Product Management is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 9.972,
    "inclination": 43.3,
    "tags": [
      "economy,",
      "product"
    ],
    "lesson_count": 9,
    "id": 310
  },
  {
    "slug": "innovation-studies",
    "name": "Innovation Studies",
    "category": "Economy, Business & Governance",
    "summary": "Innovation Studies is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 147.48,
    "inclination": 67.0,
    "tags": [
      "economy,",
      "innovation"
    ],
    "lesson_count": 10,
    "id": 311
  },
  {
    "slug": "trade-policy",
    "name": "Trade Policy",
    "category": "Economy, Business & Governance",
    "summary": "Trade Policy is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 284.988,
    "inclination": -69.3,
    "tags": [
      "economy,",
      "trade"
    ],
    "lesson_count": 11,
    "id": 312
  },
  {
    "slug": "public-administration",
    "name": "Public Administration",
    "category": "Economy, Business & Governance",
    "summary": "Public Administration is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 62.496,
    "inclination": -45.6,
    "tags": [
      "economy,",
      "public"
    ],
    "lesson_count": 4,
    "id": 313
  },
  {
    "slug": "urban-economics",
    "name": "Urban Economics",
    "category": "Economy, Business & Governance",
    "summary": "Urban Economics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 200.004,
    "inclination": -21.9,
    "tags": [
      "economy,",
      "urban"
    ],
    "lesson_count": 5,
    "id": 314
  },
  {
    "slug": "energy-markets",
    "name": "Energy Markets",
    "category": "Economy, Business & Governance",
    "summary": "Energy Markets is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 337.512,
    "inclination": 1.8,
    "tags": [
      "economy,",
      "energy"
    ],
    "lesson_count": 6,
    "id": 315
  },
  {
    "slug": "insurance",
    "name": "Insurance",
    "category": "Economy, Business & Governance",
    "summary": "Insurance is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 115.02,
    "inclination": 25.5,
    "tags": [
      "economy,",
      "insurance"
    ],
    "lesson_count": 7,
    "id": 316
  },
  {
    "slug": "taxation",
    "name": "Taxation",
    "category": "Economy, Business & Governance",
    "summary": "Taxation is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Economy, Business & Governance.",
    "color": "#f59e0b",
    "orbit": 252.528,
    "inclination": 49.2,
    "tags": [
      "economy,",
      "taxation"
    ],
    "lesson_count": 8,
    "id": 317
  },
  {
    "slug": "digital-twin-engineering",
    "name": "Digital Twin Engineering",
    "category": "Applied & Emerging Fields",
    "summary": "Digital Twin Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 30.036,
    "inclination": 72.9,
    "tags": [
      "applied",
      "digital"
    ],
    "lesson_count": 9,
    "id": 318
  },
  {
    "slug": "geospatial-ai",
    "name": "Geospatial AI",
    "category": "Applied & Emerging Fields",
    "summary": "Geospatial AI is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 167.544,
    "inclination": -63.4,
    "tags": [
      "applied",
      "geospatial"
    ],
    "lesson_count": 10,
    "id": 319
  },
  {
    "slug": "scientific-visualization",
    "name": "Scientific Visualization",
    "category": "Applied & Emerging Fields",
    "summary": "Scientific Visualization is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 305.052,
    "inclination": -39.7,
    "tags": [
      "applied",
      "scientific"
    ],
    "lesson_count": 11,
    "id": 320
  },
  {
    "slug": "simulation-science",
    "name": "Simulation Science",
    "category": "Applied & Emerging Fields",
    "summary": "Simulation Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 82.56,
    "inclination": -16.0,
    "tags": [
      "applied",
      "simulation"
    ],
    "lesson_count": 4,
    "id": 321
  },
  {
    "slug": "haptic-interfaces",
    "name": "Haptic Interfaces",
    "category": "Applied & Emerging Fields",
    "summary": "Haptic Interfaces is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 220.068,
    "inclination": 7.7,
    "tags": [
      "applied",
      "haptic"
    ],
    "lesson_count": 5,
    "id": 322
  },
  {
    "slug": "extended-reality",
    "name": "Extended Reality",
    "category": "Applied & Emerging Fields",
    "summary": "Extended Reality is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 357.576,
    "inclination": 31.4,
    "tags": [
      "applied",
      "extended"
    ],
    "lesson_count": 6,
    "id": 323
  },
  {
    "slug": "virtual-reality",
    "name": "Virtual Reality",
    "category": "Applied & Emerging Fields",
    "summary": "Virtual Reality is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 135.084,
    "inclination": 55.1,
    "tags": [
      "applied",
      "virtual"
    ],
    "lesson_count": 7,
    "id": 324
  },
  {
    "slug": "augmented-reality",
    "name": "Augmented Reality",
    "category": "Applied & Emerging Fields",
    "summary": "Augmented Reality is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 272.592,
    "inclination": 78.8,
    "tags": [
      "applied",
      "augmented"
    ],
    "lesson_count": 8,
    "id": 325
  },
  {
    "slug": "spatial-computing",
    "name": "Spatial Computing",
    "category": "Applied & Emerging Fields",
    "summary": "Spatial Computing is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 50.1,
    "inclination": -57.5,
    "tags": [
      "applied",
      "spatial"
    ],
    "lesson_count": 9,
    "id": 326
  },
  {
    "slug": "human-factors",
    "name": "Human Factors",
    "category": "Applied & Emerging Fields",
    "summary": "Human Factors is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 187.608,
    "inclination": -33.8,
    "tags": [
      "applied",
      "human"
    ],
    "lesson_count": 10,
    "id": 327
  },
  {
    "slug": "accessibility-engineering",
    "name": "Accessibility Engineering",
    "category": "Applied & Emerging Fields",
    "summary": "Accessibility Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 325.116,
    "inclination": -10.1,
    "tags": [
      "applied",
      "accessibility"
    ],
    "lesson_count": 11,
    "id": 328
  },
  {
    "slug": "data-visualization",
    "name": "Data Visualization",
    "category": "Applied & Emerging Fields",
    "summary": "Data Visualization is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 102.624,
    "inclination": 13.6,
    "tags": [
      "applied",
      "data"
    ],
    "lesson_count": 4,
    "id": 329
  },
  {
    "slug": "information-design",
    "name": "Information Design",
    "category": "Applied & Emerging Fields",
    "summary": "Information Design is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 240.132,
    "inclination": 37.3,
    "tags": [
      "applied",
      "information"
    ],
    "lesson_count": 5,
    "id": 330
  },
  {
    "slug": "complex-systems",
    "name": "Complex Systems",
    "category": "Applied & Emerging Fields",
    "summary": "Complex Systems is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 17.64,
    "inclination": 61.0,
    "tags": [
      "applied",
      "complex"
    ],
    "lesson_count": 6,
    "id": 331
  },
  {
    "slug": "network-science",
    "name": "Network Science",
    "category": "Applied & Emerging Fields",
    "summary": "Network Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 155.148,
    "inclination": -75.3,
    "tags": [
      "applied",
      "network"
    ],
    "lesson_count": 7,
    "id": 332
  },
  {
    "slug": "cyber-physical-systems",
    "name": "Cyber-Physical Systems",
    "category": "Applied & Emerging Fields",
    "summary": "Cyber-Physical Systems is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 292.656,
    "inclination": -51.6,
    "tags": [
      "applied",
      "cyber"
    ],
    "lesson_count": 8,
    "id": 333
  },
  {
    "slug": "smart-grids",
    "name": "Smart Grids",
    "category": "Applied & Emerging Fields",
    "summary": "Smart Grids is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 70.164,
    "inclination": -27.9,
    "tags": [
      "applied",
      "smart"
    ],
    "lesson_count": 9,
    "id": 334
  },
  {
    "slug": "autonomous-systems",
    "name": "Autonomous Systems",
    "category": "Applied & Emerging Fields",
    "summary": "Autonomous Systems is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 207.672,
    "inclination": -4.2,
    "tags": [
      "applied",
      "autonomous"
    ],
    "lesson_count": 10,
    "id": 335
  },
  {
    "slug": "space-systems-engineering",
    "name": "Space Systems Engineering",
    "category": "Applied & Emerging Fields",
    "summary": "Space Systems Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 345.18,
    "inclination": 19.5,
    "tags": [
      "applied",
      "space"
    ],
    "lesson_count": 11,
    "id": 336
  },
  {
    "slug": "planetary-exploration",
    "name": "Planetary Exploration",
    "category": "Applied & Emerging Fields",
    "summary": "Planetary Exploration is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 122.688,
    "inclination": 43.2,
    "tags": [
      "applied",
      "planetary"
    ],
    "lesson_count": 4,
    "id": 337
  },
  {
    "slug": "astrobiology",
    "name": "Astrobiology",
    "category": "Applied & Emerging Fields",
    "summary": "Astrobiology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 260.196,
    "inclination": 66.9,
    "tags": [
      "applied",
      "astrobiology"
    ],
    "lesson_count": 5,
    "id": 338
  },
  {
    "slug": "climate-adaptation",
    "name": "Climate Adaptation",
    "category": "Applied & Emerging Fields",
    "summary": "Climate Adaptation is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 37.704,
    "inclination": -69.4,
    "tags": [
      "applied",
      "climate"
    ],
    "lesson_count": 6,
    "id": 339
  },
  {
    "slug": "disaster-risk-reduction",
    "name": "Disaster Risk Reduction",
    "category": "Applied & Emerging Fields",
    "summary": "Disaster Risk Reduction is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 175.212,
    "inclination": -45.7,
    "tags": [
      "applied",
      "disaster"
    ],
    "lesson_count": 7,
    "id": 340
  },
  {
    "slug": "humanitarian-mapping",
    "name": "Humanitarian Mapping",
    "category": "Applied & Emerging Fields",
    "summary": "Humanitarian Mapping is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 312.72,
    "inclination": -22.0,
    "tags": [
      "applied",
      "humanitarian"
    ],
    "lesson_count": 8,
    "id": 341
  },
  {
    "slug": "open-science",
    "name": "Open Science",
    "category": "Applied & Emerging Fields",
    "summary": "Open Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 90.228,
    "inclination": 1.7,
    "tags": [
      "applied",
      "open"
    ],
    "lesson_count": 9,
    "id": 342
  },
  {
    "slug": "science-communication",
    "name": "Science Communication",
    "category": "Applied & Emerging Fields",
    "summary": "Science Communication is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 227.736,
    "inclination": 25.4,
    "tags": [
      "applied",
      "science"
    ],
    "lesson_count": 10,
    "id": 343
  },
  {
    "slug": "research-methods",
    "name": "Research Methods",
    "category": "Applied & Emerging Fields",
    "summary": "Research Methods is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 5.244,
    "inclination": 49.1,
    "tags": [
      "applied",
      "research"
    ],
    "lesson_count": 11,
    "id": 344
  },
  {
    "slug": "metrology",
    "name": "Metrology",
    "category": "Applied & Emerging Fields",
    "summary": "Metrology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 142.752,
    "inclination": 72.8,
    "tags": [
      "applied",
      "metrology"
    ],
    "lesson_count": 4,
    "id": 345
  },
  {
    "slug": "standards-engineering",
    "name": "Standards Engineering",
    "category": "Applied & Emerging Fields",
    "summary": "Standards Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 280.26,
    "inclination": -63.5,
    "tags": [
      "applied",
      "standards"
    ],
    "lesson_count": 5,
    "id": 346
  },
  {
    "slug": "ethics-of-ai",
    "name": "Ethics of AI",
    "category": "Applied & Emerging Fields",
    "summary": "Ethics of AI is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 57.768,
    "inclination": -39.8,
    "tags": [
      "applied",
      "ethics"
    ],
    "lesson_count": 6,
    "id": 347
  },
  {
    "slug": "technology-policy",
    "name": "Technology Policy",
    "category": "Applied & Emerging Fields",
    "summary": "Technology Policy is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 195.276,
    "inclination": -16.1,
    "tags": [
      "applied",
      "technology"
    ],
    "lesson_count": 7,
    "id": 348
  },
  {
    "slug": "digital-humanities",
    "name": "Digital Humanities",
    "category": "Applied & Emerging Fields",
    "summary": "Digital Humanities is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 332.784,
    "inclination": 7.6,
    "tags": [
      "applied",
      "digital"
    ],
    "lesson_count": 8,
    "id": 349
  },
  {
    "slug": "health-informatics",
    "name": "Health Informatics",
    "category": "Applied & Emerging Fields",
    "summary": "Health Informatics is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 110.292,
    "inclination": 31.3,
    "tags": [
      "applied",
      "health"
    ],
    "lesson_count": 9,
    "id": 350
  },
  {
    "slug": "geospatial-law",
    "name": "Geospatial Law",
    "category": "Applied & Emerging Fields",
    "summary": "Geospatial Law is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 247.8,
    "inclination": 55.0,
    "tags": [
      "applied",
      "geospatial"
    ],
    "lesson_count": 10,
    "id": 351
  },
  {
    "slug": "satellite-engineering",
    "name": "Satellite Engineering",
    "category": "Applied & Emerging Fields",
    "summary": "Satellite Engineering is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 25.308,
    "inclination": 78.7,
    "tags": [
      "applied",
      "satellite"
    ],
    "lesson_count": 11,
    "id": 352
  },
  {
    "slug": "earth-observation-applications",
    "name": "Earth Observation Applications",
    "category": "Applied & Emerging Fields",
    "summary": "Earth Observation Applications is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 162.816,
    "inclination": -57.6,
    "tags": [
      "applied",
      "earth"
    ],
    "lesson_count": 4,
    "id": 353
  },
  {
    "slug": "precision-medicine",
    "name": "Precision Medicine",
    "category": "Applied & Emerging Fields",
    "summary": "Precision Medicine is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 300.324,
    "inclination": -33.9,
    "tags": [
      "applied",
      "precision"
    ],
    "lesson_count": 5,
    "id": 354
  },
  {
    "slug": "computational-social-science",
    "name": "Computational Social Science",
    "category": "Applied & Emerging Fields",
    "summary": "Computational Social Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 77.832,
    "inclination": -10.2,
    "tags": [
      "applied",
      "computational"
    ],
    "lesson_count": 6,
    "id": 355
  },
  {
    "slug": "sports-science",
    "name": "Sports Science",
    "category": "Applied & Emerging Fields",
    "summary": "Sports Science is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 215.34,
    "inclination": 13.5,
    "tags": [
      "applied",
      "sports"
    ],
    "lesson_count": 7,
    "id": 356
  },
  {
    "slug": "food-systems",
    "name": "Food Systems",
    "category": "Applied & Emerging Fields",
    "summary": "Food Systems is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 352.848,
    "inclination": 37.2,
    "tags": [
      "applied",
      "food"
    ],
    "lesson_count": 8,
    "id": 357
  },
  {
    "slug": "circular-economy",
    "name": "Circular Economy",
    "category": "Applied & Emerging Fields",
    "summary": "Circular Economy is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 130.356,
    "inclination": 60.9,
    "tags": [
      "applied",
      "circular"
    ],
    "lesson_count": 9,
    "id": 358
  },
  {
    "slug": "industrial-ecology",
    "name": "Industrial Ecology",
    "category": "Applied & Emerging Fields",
    "summary": "Industrial Ecology is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 267.864,
    "inclination": -75.4,
    "tags": [
      "applied",
      "industrial"
    ],
    "lesson_count": 10,
    "id": 359
  },
  {
    "slug": "water-energy-food-nexus",
    "name": "Water-Energy-Food Nexus",
    "category": "Applied & Emerging Fields",
    "summary": "Water-Energy-Food Nexus is a first-class knowledge domain in Virtual GeoTwinVerse. Explore concepts, simulations, spatial links, and cross-disciplinary pathways within Applied & Emerging Fields.",
    "color": "#818cf8",
    "orbit": 45.372,
    "inclination": -51.7,
    "tags": [
      "applied",
      "water"
    ],
    "lesson_count": 11,
    "id": 360
  }
] as Domain[];

export const FALLBACK_TWINS: Twin[] = [
  {
    "slug": "aurora-harbor-city",
    "name": "Aurora Harbor City Twin",
    "twin_type": "city",
    "description": "Coastal smart-city twin for mobility, energy, and flood scenarios.",
    "longitude": -122.4194,
    "latitude": 37.7749,
    "id": 1,
    "altitude": 0,
    "geojson": {},
    "state": {},
    "assumptions": []
  },
  {
    "slug": "helix-campus",
    "name": "Helix Research Campus Twin",
    "twin_type": "campus",
    "description": "University campus with labs, lecture halls, and pedestrian flows.",
    "longitude": -1.2577,
    "latitude": 51.752,
    "id": 2,
    "altitude": 0,
    "geojson": {},
    "state": {},
    "assumptions": []
  },
  {
    "slug": "forge-works",
    "name": "Forge Works Factory Twin",
    "twin_type": "factory",
    "description": "Discrete manufacturing line with energy, throughput, and safety states.",
    "longitude": 8.6821,
    "latitude": 50.1109,
    "id": 3,
    "altitude": 0,
    "geojson": {},
    "state": {},
    "assumptions": []
  },
  {
    "slug": "canopy-reserve",
    "name": "Canopy Forest Reserve Twin",
    "twin_type": "forest",
    "description": "Temperate forest twin for NDVI, biomass, and wildfire risk.",
    "longitude": -123.3656,
    "latitude": 48.4284,
    "id": 4,
    "altitude": 0,
    "geojson": {},
    "state": {},
    "assumptions": []
  },
  {
    "slug": "metro-arteries",
    "name": "Metro Arteries Transport Twin",
    "twin_type": "transportation",
    "description": "Multimodal corridor twin: rail, bus, and last-mile logistics.",
    "longitude": 139.6917,
    "latitude": 35.6895,
    "id": 5,
    "altitude": 0,
    "geojson": {},
    "state": {},
    "assumptions": []
  },
  {
    "slug": "volta-grid",
    "name": "Volta Regional Energy Twin",
    "twin_type": "energy",
    "description": "Regional grid twin with renewables, storage, and peak shaving.",
    "longitude": 12.5683,
    "latitude": 55.6761,
    "id": 6,
    "altitude": 0,
    "geojson": {},
    "state": {},
    "assumptions": []
  },
  {
    "slug": "delta-wetlands",
    "name": "Delta Wetlands Environmental Twin",
    "twin_type": "environment",
    "description": "Estuarine wetlands for hydrology, habitat, and water quality.",
    "longitude": 4.8952,
    "latitude": 52.3702,
    "id": 7,
    "altitude": 0,
    "geojson": {},
    "state": {},
    "assumptions": []
  },
  {
    "slug": "kepler-lab",
    "name": "Kepler Research Laboratory Twin",
    "twin_type": "laboratory",
    "description": "Cleanroom and instrumentation twin for experimental campaigns.",
    "longitude": -71.0921,
    "latitude": 42.3601,
    "id": 8,
    "altitude": 0,
    "geojson": {},
    "state": {},
    "assumptions": []
  },
  {
    "slug": "amber-fields",
    "name": "Amber Fields Agricultural Twin",
    "twin_type": "agriculture",
    "description": "Precision agriculture landscape with soil moisture and yield.",
    "longitude": -93.625,
    "latitude": 41.5868,
    "id": 9,
    "altitude": 0,
    "geojson": {},
    "state": {},
    "assumptions": []
  },
  {
    "slug": "selene-outpost",
    "name": "Selene Lunar Outpost Twin",
    "twin_type": "space",
    "description": "Cislunar outpost twin for power, ISRU, and EVA timelines.",
    "longitude": 0.0,
    "latitude": -85.0,
    "id": 10,
    "altitude": 0,
    "geojson": {},
    "state": {},
    "assumptions": []
  }
] as Twin[];
