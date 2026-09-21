export const mockConversations = [
  {
    id: 'conv-1',
    title: 'Explain quantum computing',
    date: 'Today',
    messages: [
      {
        id: 'msg-1',
        role: 'user',
        content: 'Can you explain quantum computing in simple terms?',
        timestamp: '10:30 AM',
      },
      {
        id: 'msg-2',
        role: 'assistant',
        content:
          'Quantum computing uses **quantum bits (qubits)** instead of classical bits. While a classical bit is either 0 or 1, a qubit can be in a **superposition** of both states simultaneously.\n\nThink of it like this:\n- A classical bit is like a coin lying on a table — heads or tails.\n- A qubit is like a coin spinning in the air — it\'s both heads and tails until you catch it.\n\nThis allows quantum computers to process many possibilities at once, making them incredibly powerful for certain tasks like:\n1. **Cryptography** — breaking and creating secure codes\n2. **Drug discovery** — simulating molecular interactions\n3. **Optimization** — solving complex logistics problems\n\nHowever, quantum computers are still in early stages and are not yet practical for everyday tasks.',
        timestamp: '10:30 AM',
      },
      {
        id: 'msg-3',
        role: 'user',
        content: 'What is quantum entanglement?',
        timestamp: '10:32 AM',
      },
      {
        id: 'msg-4',
        role: 'assistant',
        content:
          'Quantum entanglement is one of the most fascinating phenomena in physics! When two particles become **entangled**, they form a special connection where the state of one particle instantly influences the state of the other, regardless of the distance between them.\n\nEinstein famously called this "spooky action at a distance" because he was uncomfortable with the idea that information could seemingly travel faster than light.\n\nHere\'s a simplified example:\n- Imagine you have two magic dice. When you roll one and get a 6, the other one — even if it\'s on the other side of the universe — will also show 6 instantly.\n\nThis property is crucial for:\n- **Quantum teleportation** of information\n- **Quantum cryptography** for ultra-secure communication\n- **Quantum computing** operations between qubits',
        timestamp: '10:32 AM',
      },
    ],
  },
  {
    id: 'conv-2',
    title: 'Python best practices',
    date: 'Today',
    messages: [
      {
        id: 'msg-5',
        role: 'user',
        content: 'What are some Python best practices for writing clean code?',
        timestamp: '9:15 AM',
      },
      {
        id: 'msg-6',
        role: 'assistant',
        content:
          'Here are some essential Python best practices for writing clean, maintainable code:\n\n**1. Follow PEP 8 Style Guide**\n- Use 4 spaces for indentation\n- Limit lines to 79 characters\n- Use meaningful variable names\n\n**2. Use Type Hints**\n```python\ndef greet(name: str) -> str:\n    return f"Hello, {name}!"\n```\n\n**3. Write Docstrings**\n```python\ndef calculate_area(radius: float) -> float:\n    """Calculate the area of a circle given its radius."""\n    return math.pi * radius ** 2\n```\n\n**4. Use List Comprehensions Wisely**\n```python\n# Good\nsquares = [x**2 for x in range(10)]\n\n# Avoid overly complex ones\n```\n\n**5. Handle Exceptions Properly**\n```python\ntry:\n    result = divide(a, b)\nexcept ZeroDivisionError:\n    logger.error("Division by zero")\n```\n\n**6. Use Virtual Environments** — isolate project dependencies.\n\n**7. Write Tests** — aim for good coverage with pytest.',
        timestamp: '9:15 AM',
      },
    ],
  },
  {
    id: 'conv-3',
    title: 'Travel plan for Tokyo',
    date: 'Yesterday',
    messages: [
      {
        id: 'msg-7',
        role: 'user',
        content: 'Help me plan a 5-day trip to Tokyo!',
        timestamp: '3:45 PM',
      },
      {
        id: 'msg-8',
        role: 'assistant',
        content:
          'Here\'s an amazing 5-day Tokyo itinerary! 🗼\n\n**Day 1: Classic Tokyo**\n- Morning: Senso-ji Temple in Asakusa\n- Afternoon: Ueno Park & National Museum\n- Evening: Akihabara electric town\n\n**Day 2: Modern Tokyo**\n- Morning: Meiji Shrine & Harajuku\n- Afternoon: Shibuya Crossing & shopping\n- Evening: Roppongi nightlife\n\n**Day 3: Culture & Food**\n- Morning: Tsukiji Outer Market for sushi breakfast\n- Afternoon: TeamLab Borderless digital art museum\n- Evening: Odaiba waterfront\n\n**Day 4: Day Trip**\n- Full day: Mount Fuji & Hakone (accessible by train)\n- Evening: Onsen (hot spring) experience\n\n**Day 5: Hidden Gems**\n- Morning: Yanaka neighborhood (old Tokyo charm)\n- Afternoon: Shimokitazawa (vintage shops & cafes)\n- Evening: Tokyo Skytree for sunset views\n\n**Budget Tip:** Get a PASMO/Suica card for easy transit and a 72-hour Tokyo Metro pass for savings!',
        timestamp: '3:45 PM',
      },
    ],
  },
  {
    id: 'conv-4',
    title: 'React vs Vue comparison',
    date: 'Yesterday',
    messages: [
      {
        id: 'msg-9',
        role: 'user',
        content: 'Compare React and Vue.js for a new project.',
        timestamp: '11:00 AM',
      },
      {
        id: 'msg-10',
        role: 'assistant',
        content:
          'Great question! Here\'s a comprehensive comparison:\n\n| Feature | React | Vue.js |\n|---------|-------|--------|\n| Learning Curve | Moderate | Easy |\n| Performance | Excellent | Excellent |\n| Ecosystem | Huge | Growing |\n| Flexibility | High | Moderate |\n| State Management | Redux/Zustand | Vuex/Pinia |\n\n**Choose React if:**\n- You need a massive ecosystem and community\n- Your team already knows JavaScript well\n- You want maximum flexibility in architecture\n- You\'re building a large-scale enterprise app\n\n**Choose Vue.js if:**\n- You want a gentler learning curve\n- You prefer an opinionated, batteries-included framework\n- You\'re working on a small-to-medium project\n- You value clear documentation and simplicity\n\nBoth are excellent choices. For most projects, the team\'s familiarity with the framework matters more than technical differences.',
        timestamp: '11:00 AM',
      },
    ],
  },
  {
    id: 'conv-5',
    title: 'Healthy meal prep ideas',
    date: 'Previous 7 Days',
    messages: [
      {
        id: 'msg-11',
        role: 'user',
        content: 'Give me some healthy meal prep ideas for the week.',
        timestamp: '2:20 PM',
      },
      {
        id: 'msg-12',
        role: 'assistant',
        content:
          'Here are some nutritious and easy meal prep ideas! 🥗\n\n**Breakfast Options:**\n- Overnight oats with berries and chia seeds\n- Egg muffins with spinach and bell peppers\n- Greek yogurt parfaits in mason jars\n\n**Lunch Options:**\n- Chicken and quinoa bowls with roasted vegetables\n- Mediterranean wraps with hummus and grilled chicken\n- Asian-style noodle salad with sesame dressing\n\n**Dinner Options:**\n- Sheet pan salmon with sweet potatoes and broccoli\n- Turkey meatballs with whole wheat pasta\n- Stir-fry with tofu and mixed vegetables\n\n**Snacks:**\n- Trail mix portions\n- Veggie sticks with hummus\n- Energy balls (oats, peanut butter, honey)\n\n**Pro Tips:**\n1. Prep on Sundays for the whole week\n2. Invest in quality glass containers\n3. Cook grains and proteins in bulk\n4. Keep sauces and dressings separate until serving',
        timestamp: '2:20 PM',
      },
    ],
  },
  {
    id: 'conv-6',
    title: 'Machine learning basics',
    date: 'Previous 7 Days',
    messages: [
      {
        id: 'msg-13',
        role: 'user',
        content: 'What is machine learning and how does it work?',
        timestamp: '4:00 PM',
      },
      {
        id: 'msg-14',
        role: 'assistant',
        content:
          'Machine learning (ML) is a branch of artificial intelligence that enables computers to **learn from data** without being explicitly programmed.\n\n**How It Works:**\n1. **Data Collection** — Gather relevant training data\n2. **Feature Engineering** — Select meaningful attributes\n3. **Model Training** — Algorithm finds patterns in data\n4. **Evaluation** — Test accuracy on unseen data\n5. **Deployment** — Use the model in production\n\n**Three Main Types:**\n\n🔵 **Supervised Learning** — learns from labeled data\n- Classification (spam detection, image recognition)\n- Regression (price prediction, weather forecasting)\n\n🟢 **Unsupervised Learning** — finds patterns in unlabeled data\n- Clustering (customer segmentation)\n- Dimensionality reduction (data visualization)\n\n🟡 **Reinforcement Learning** — learns through trial and reward\n- Game playing (AlphaGo)\n- Robotics (autonomous navigation)\n\n**Popular Frameworks:** TensorFlow, PyTorch, scikit-learn',
        timestamp: '4:00 PM',
      },
    ],
  },
];

export const mockResponses = [
  "That's an interesting question! Let me think about this carefully. Based on my understanding, the key points to consider are the underlying principles and their practical applications in real-world scenarios.",
  "Great question! Here's what I can tell you:\n\n1. **First**, it's important to understand the foundational concepts\n2. **Second**, practical application matters most\n3. **Third**, continuous learning and adaptation are key\n\nWould you like me to elaborate on any of these points?",
  "I'd be happy to help with that! Here's a comprehensive overview:\n\nThe topic you're asking about has several important dimensions. Let me break them down for you in a clear and organized manner.\n\n**Key Takeaways:**\n- Understanding the basics is crucial\n- Practice makes perfect\n- Don't be afraid to experiment\n\nLet me know if you need more details on any specific aspect!",
  "That's a fascinating topic! Let me share my perspective:\n\nThe field has evolved significantly over the past few years. We've seen remarkable advancements in both theory and practice.\n\n**Current Trends:**\n- Increased adoption in industry\n- Better tools and frameworks\n- Growing community support\n\n**Challenges:**\n- Scalability concerns\n- Resource requirements\n- Ethical considerations\n\nWould you like to dive deeper into any of these areas?",
  "Absolutely! Here's what you need to know:\n\nThis is a common question, and the answer depends on several factors. Let me walk you through the most important considerations.\n\n```\n// Example approach\nStep 1: Define your goals\nStep 2: Gather resources\nStep 3: Implement and iterate\nStep 4: Measure results\n```\n\nThe most successful approach is usually to start small and scale gradually. Don't try to do everything at once!",
];
