export const TOPICS = ['Nouns', 'Verbs', 'Tenses', 'Articles', 'Prepositions']

export const TOPIC_COLORS = {
  Nouns:        { bg: 'from-yellow-400 to-yellow-600',   badge: 'bg-yellow-400 text-yellow-900',  icon: '🏷️', type: 'Normal' },
  Verbs:        { bg: 'from-red-400 to-red-600',         badge: 'bg-red-400 text-white',           icon: '⚡', type: 'Electric' },
  Tenses:       { bg: 'from-blue-400 to-blue-600',       badge: 'bg-blue-400 text-white',          icon: '⏰', type: 'Psychic' },
  Articles:     { bg: 'from-green-400 to-green-600',     badge: 'bg-green-400 text-white',         icon: '📖', type: 'Grass' },
  Prepositions: { bg: 'from-purple-400 to-purple-600',   badge: 'bg-purple-400 text-white',        icon: '🗺️', type: 'Flying' },
}

export const MOCK_DATA = {
  Nouns: {
    lesson: {
      title: 'Nouns – The Name Givers!',
      content: [
        'A noun is a word that names a person, place, thing, or idea. Just like every Pokémon has a name, every object around you has a noun! Examples: Pikachu (person/creature), Pallet Town (place), Pokéball (thing), Courage (idea).',
        'Nouns come in different types: Common nouns name general things (city, dog, ball). Proper nouns name specific things and always start with a capital letter (Mumbai, Pikachu, India).',
        'Collective nouns name a group (a flock of birds, a team of players). Abstract nouns name ideas or feelings you cannot touch (happiness, freedom, love). Master these and you\'ll be a grammar champion!'
      ]
    },
    mainQuiz: [
      { q: 'Which of these is a PROPER noun?', opts: ['city', 'Mumbai', 'river', 'mountain'], ans: 1, diff: 'easy' },
      { q: 'Identify the noun: "The brave Pikachu won the battle."', opts: ['brave', 'won', 'Pikachu', 'the'], ans: 2, diff: 'easy' },
      { q: 'Which is a COLLECTIVE noun?', opts: ['happiness', 'run', 'a pride of lions', 'beautiful'], ans: 2, diff: 'medium' },
      { q: '"Freedom" is an example of which type of noun?', opts: ['Common', 'Proper', 'Collective', 'Abstract'], ans: 3, diff: 'medium' },
      { q: 'In "Ash threw the red Pokéball", how many nouns are there?', opts: ['1', '2', '3', '4'], ans: 1, diff: 'hard' },
    ],
    simpleQuiz: [
      { q: 'A noun is a name of a person, place, or ___?', opts: ['color', 'thing', 'action', 'size'], ans: 1, diff: 'easy' },
      { q: 'Which is a noun?', opts: ['run', 'happy', 'dog', 'quickly'], ans: 2, diff: 'easy' },
      { q: '"India" is a ___?', opts: ['verb', 'proper noun', 'adjective', 'pronoun'], ans: 1, diff: 'easy' },
      { q: 'Which word names a PLACE?', opts: ['swim', 'tall', 'school', 'fast'], ans: 2, diff: 'easy' },
      { q: 'How many nouns? "Tom has a cat."', opts: ['1', '2', '3', '0'], ans: 1, diff: 'easy' },
    ],
    videos: [
      { title: 'Nouns for Kids – Types & Examples', url: 'https://www.youtube.com/embed/EBKIQmupbK8' },
      { title: 'Common vs Proper Nouns', url: 'https://www.youtube.com/embed/bFP57bU_9b0' },
      { title: 'Collective & Abstract Nouns', url: 'https://www.youtube.com/embed/1hJRfCD4vJU' },
    ]
  },
  Verbs: {
    lesson: {
      title: 'Verbs – The Action Heroes!',
      content: [
        'Verbs are action words – they tell us what someone or something does! Just like Pikachu uses "Thunderbolt", verbs show the action. Examples: run, jump, eat, think, play.',
        'There are action verbs (Pikachu runs fast!), linking verbs (Pikachu is yellow), and helping verbs (Pikachu can fly — wait, no he can\'t! 😄). Helping verbs include: is, am, are, was, were, has, have, will, can, should.',
        'Verbs also change form based on tense (time). "Pikachu runs" (present), "Pikachu ran" (past), "Pikachu will run" (future). Mastering verbs means mastering the backbone of every sentence!'
      ]
    },
    mainQuiz: [
      { q: 'Which is a VERB?', opts: ['happy', 'Pikachu', 'jump', 'yellow'], ans: 2, diff: 'easy' },
      { q: '"She IS a good student." The verb here is a ___ verb.', opts: ['action', 'linking', 'helping', 'irregular'], ans: 1, diff: 'medium' },
      { q: 'Identify the helping verb: "He SHOULD study grammar."', opts: ['He', 'SHOULD', 'study', 'grammar'], ans: 1, diff: 'medium' },
      { q: 'Which sentence has an ACTION verb?', opts: ['She seems tired', 'The sky is blue', 'Ash threw the ball', 'He appears smart'], ans: 2, diff: 'easy' },
      { q: '"Pikachu and Ash RAN to the gym." RAN is the ___ tense of run.', opts: ['present', 'future', 'past', 'perfect'], ans: 2, diff: 'hard' },
    ],
    simpleQuiz: [
      { q: 'Verbs are also called ___?', opts: ['name words', 'action words', 'describing words', 'joining words'], ans: 1, diff: 'easy' },
      { q: 'Which word is a verb?', opts: ['big', 'eat', 'tree', 'blue'], ans: 1, diff: 'easy' },
      { q: '"She RUNS every day." What type of verb is RUNS?', opts: ['linking', 'helping', 'action', 'noun'], ans: 2, diff: 'easy' },
      { q: 'Is "IS" a helping verb?', opts: ['Yes', 'No', 'Sometimes', 'Never'], ans: 0, diff: 'easy' },
      { q: 'Find the verb: "Birds fly high."', opts: ['Birds', 'fly', 'high', 'the'], ans: 1, diff: 'easy' },
    ],
    videos: [
      { title: 'Action Verbs for Kids', url: 'https://www.youtube.com/embed/dNKhpuEDjLY' },
      { title: 'Helping Verbs Explained', url: 'https://www.youtube.com/embed/VY1_VjuKDL0' },
      { title: 'Verb Tenses – Past Present Future', url: 'https://www.youtube.com/embed/YrgIqbVBFRE' },
    ]
  },
  Tenses: {
    lesson: {
      title: 'Tenses – Time Travel in Grammar!',
      content: [
        'Tenses tell us WHEN an action happens – in the past, present, or future. Think of it like a Pokémon time machine! "Pikachu ate" (past), "Pikachu eats" (present), "Pikachu will eat" (future).',
        'Each main tense has 4 forms: Simple (I eat), Continuous (I am eating), Perfect (I have eaten), Perfect Continuous (I have been eating). That\'s 12 tenses total! Don\'t panic – we\'ll catch them all!',
        'Key signal words help identify tenses: Yesterday/ago/last = past; Now/currently/today = present; Tomorrow/soon/next = future. Pay attention to these clues in sentences!'
      ]
    },
    mainQuiz: [
      { q: '"She PLAYED football yesterday." Which tense is this?', opts: ['Present', 'Past', 'Future', 'Perfect'], ans: 1, diff: 'easy' },
      { q: 'Which sentence is in FUTURE tense?', opts: ['I ate rice', 'I eat rice', 'I will eat rice', 'I am eating rice'], ans: 2, diff: 'easy' },
      { q: '"He IS READING a book." This is ___?', opts: ['Simple present', 'Present continuous', 'Past simple', 'Future'], ans: 1, diff: 'medium' },
      { q: 'Signal word "Yesterday" indicates which tense?', opts: ['Present', 'Future', 'Past', 'Perfect'], ans: 2, diff: 'easy' },
      { q: '"They HAVE BEEN studying for 3 hours." This is ___?', opts: ['Present perfect', 'Past perfect', 'Present perfect continuous', 'Past continuous'], ans: 2, diff: 'hard' },
    ],
    simpleQuiz: [
      { q: 'How many main tenses are there?', opts: ['2', '3', '4', '5'], ans: 1, diff: 'easy' },
      { q: '"I eat" is in ___ tense.', opts: ['Past', 'Present', 'Future', 'Perfect'], ans: 1, diff: 'easy' },
      { q: '"I ate" is in ___ tense.', opts: ['Present', 'Future', 'Past', 'Perfect'], ans: 2, diff: 'easy' },
      { q: 'Which word signals FUTURE tense?', opts: ['yesterday', 'now', 'tomorrow', 'ago'], ans: 2, diff: 'easy' },
      { q: '"She is dancing." The tense is?', opts: ['Simple present', 'Present continuous', 'Past', 'Future'], ans: 1, diff: 'easy' },
    ],
    videos: [
      { title: 'English Tenses Explained Simply', url: 'https://www.youtube.com/embed/qqlLGMnMb4c' },
      { title: '12 Tenses in English Grammar', url: 'https://www.youtube.com/embed/S2V2hYFVMOI' },
      { title: 'Past Present Future – Easy Guide', url: 'https://www.youtube.com/embed/vgpNBSBwaBk' },
    ]
  },
  Articles: {
    lesson: {
      title: 'Articles – The Tiny Titans!',
      content: [
        'Articles are small but mighty words: A, AN, and THE. They come before nouns and tell us whether we\'re talking about something specific or general. Like choosing between "a Pokémon" (any one) vs "the Pokémon" (the specific one)!',
        'Use "A" before words starting with a consonant sound: a dog, a Pokémon, a university (note: "university" sounds like "you", a consonant sound!). Use "AN" before words starting with a vowel sound: an apple, an elephant, an hour (note: "hour" starts with a vowel sound!).',
        '"THE" is the definite article – it points to something specific. "I caught A Pikachu" (any Pikachu) vs "I caught THE Pikachu" (the specific one we talked about). Master this and your English will level up!'
      ]
    },
    mainQuiz: [
      { q: 'Choose the correct article: "___ elephant is large."', opts: ['A', 'An', 'The', 'No article'], ans: 1, diff: 'easy' },
      { q: '"She is ___ honest person." Which article fits?', opts: ['a', 'an', 'the', 'no article'], ans: 1, diff: 'medium' },
      { q: 'Which uses THE correctly?', opts: ['The honesty is important', 'Pass me the salt', 'She is the teacher (meeting her first time)', 'I want the apple (any apple)'], ans: 1, diff: 'medium' },
      { q: '"___ Sun rises in the east." Fill in the blank.', opts: ['A', 'An', 'The', 'No article'], ans: 2, diff: 'easy' },
      { q: 'Which word takes "AN" before it?', opts: ['university', 'umbrella', 'unicorn', 'uniform'], ans: 1, diff: 'hard' },
    ],
    simpleQuiz: [
      { q: 'Articles are: A, AN, and ___?', opts: ['IS', 'THE', 'TO', 'BE'], ans: 1, diff: 'easy' },
      { q: '"___ apple a day keeps the doctor away." Fill in.', opts: ['A', 'An', 'The', 'None'], ans: 1, diff: 'easy' },
      { q: 'Use "an" before words starting with a ___ sound.', opts: ['consonant', 'vowel', 'silent', 'double'], ans: 1, diff: 'easy' },
      { q: '"___ Earth revolves around the Sun."', opts: ['A', 'An', 'The', 'No article'], ans: 2, diff: 'easy' },
      { q: '"A" is used before: ___', opts: ['an egg', 'a book', 'an island', 'an hour'], ans: 1, diff: 'easy' },
    ],
    videos: [
      { title: 'A vs An vs The – Articles in English', url: 'https://www.youtube.com/embed/C_M14EZfYZ8' },
      { title: 'Using Articles Correctly', url: 'https://www.youtube.com/embed/Wut0nM6S0hI' },
      { title: 'Definite & Indefinite Articles', url: 'https://www.youtube.com/embed/lhwBaRv7tC8' },
    ]
  },
  Prepositions: {
    lesson: {
      title: 'Prepositions – Direction Masters!',
      content: [
        'Prepositions are words that show the relationship between a noun/pronoun and other words in a sentence. They often show location, direction, time, or manner. Think of them as the GPS of grammar! Common prepositions: in, on, at, under, over, beside, between, through, behind.',
        '"The Pokéball is ON the shelf" (location). "Ash walked THROUGH the forest" (direction). "The battle was AT noon" (time). "She fought WITH courage" (manner). Prepositions always have an object after them!',
        'Preposition phrases = preposition + object: "under the table", "beside Pikachu", "in the morning". These phrases add detail and make your sentences more vivid and precise. Pro tip: a sentence should NEVER end with a preposition in formal writing!'
      ]
    },
    mainQuiz: [
      { q: '"The cat is ___ the box." (inside)', opts: ['on', 'in', 'at', 'over'], ans: 1, diff: 'easy' },
      { q: 'Which is a preposition?', opts: ['run', 'happy', 'between', 'quickly'], ans: 2, diff: 'easy' },
      { q: '"She arrived ___ Monday." Which preposition?', opts: ['in', 'on', 'at', 'by'], ans: 1, diff: 'medium' },
      { q: '"They met ___ the corner of the street."', opts: ['in', 'on', 'at', 'over'], ans: 2, diff: 'medium' },
      { q: 'Identify the preposition phrase: "Pikachu ran through the dark forest quickly."', opts: ['ran quickly', 'through the dark forest', 'dark forest', 'Pikachu ran'], ans: 1, diff: 'hard' },
    ],
    simpleQuiz: [
      { q: 'Prepositions show ___ between words.', opts: ['color', 'relationship', 'size', 'number'], ans: 1, diff: 'easy' },
      { q: '"The book is ON the table." ON is a ___?', opts: ['noun', 'verb', 'preposition', 'adjective'], ans: 2, diff: 'easy' },
      { q: 'Which is NOT a preposition?', opts: ['under', 'over', 'beside', 'run'], ans: 3, diff: 'easy' },
      { q: '"Ash waited ___ 3 hours." Fill in.', opts: ['on', 'at', 'for', 'in'], ans: 2, diff: 'easy' },
      { q: '"The bird flew ___ the tree."', opts: ['over', 'of', 'was', 'am'], ans: 0, diff: 'easy' },
    ],
    videos: [
      { title: 'Prepositions of Place – in/on/at', url: 'https://www.youtube.com/embed/OlSNpEI59UE' },
      { title: 'Prepositions for Kids', url: 'https://www.youtube.com/embed/DpPfkuQaJlk' },
      { title: 'Prepositions of Time', url: 'https://www.youtube.com/embed/SvG3JQeqSXU' },
    ]
  }
}
