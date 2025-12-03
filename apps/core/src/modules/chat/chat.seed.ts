type SeedContactStatus = 'online' | 'offline' | 'busy' | 'away'
type SeedSenderType = 'USER' | 'ASSISTANT'

export interface SeedMessage {
  senderId: string
  senderType: SeedSenderType
  content: string
  sentAt: Date
  replayMetadata?: boolean
}

export interface SeedContact {
  id: string
  displayName: string
  title?: string | null
  avatarUrl?: string | null
  status: SeedContactStatus
  about?: string | null
  unreadCount?: number
  messages?: SeedMessage[]
}

const now = Date.now()
const daysAgo = (days: number) => new Date(now - days * 24 * 60 * 60 * 1000)
const hoursAgo = (hours: number) => new Date(now - hours * 60 * 60 * 1000)

export const CHAT_CONTACT_SEED: SeedContact[] = [
  {
    id: '11111111-1111-1111-1111-111111111111',
    displayName: 'Casandra Assistant',
    title: 'Search Copilot',
    avatarUrl: '/images/avatars/assistant.png',
    status: 'online',
    about: 'Helps you explore the catalog using keyword, semantic, or hybrid search.',
    unreadCount: 0,
    messages: [
      {
        senderId: 'user-demo',
        senderType: 'USER',
        content: 'Show me popular hereditary cancer tests.',
        sentAt: hoursAgo(18),
      },
      {
        senderId: 'assistant',
        senderType: 'ASSISTANT',
        content:
          'Here are a few hereditary cancer panels retrieved via hybrid search. Let me know if you want details on coverage or specimen requirements.',
        sentAt: hoursAgo(18),
      },
    ],
  },
  {
    id: '55fe838e-9a09-4caf-a591-559803309ef1',
    displayName: 'Felecia Rower',
    title: 'Frontend Developer',
    avatarUrl: '/images/users/user-2.jpg',
    status: 'online',
    about:
      'Interested in oncology catalog updates and payer requirements. Frequently searches for genetic screening guidelines.',
    unreadCount: 1,
    messages: [
      {
        senderId: '55fe838e-9a09-4caf-a591-559803309ef1',
        senderType: 'USER',
        content: 'Need the latest exome tests with payer restrictions.',
        sentAt: daysAgo(2),
      },
      {
        senderId: 'assistant',
        senderType: 'ASSISTANT',
        content:
          'Found 8 exome offerings. TempoDx Exome Diagnostics has updated prior auth notes—do you want me to email a summary?',
        sentAt: daysAgo(2),
      },
    ],
  },
  {
    id: 'f68aaf08-8c41-4b74-8e15-d5e6cb409d5e',
    displayName: 'Adalberto Granzin',
    title: 'UI/UX Designer',
    avatarUrl: '/images/users/user-3.jpg',
    status: 'busy',
    about:
      'Working on chatbot workflows. Uses the assistant for regression tests and transcript exports.',
    unreadCount: 0,
    messages: [
      {
        senderId: 'assistant',
        senderType: 'ASSISTANT',
        content:
          'Morning! Yesterday’s prostate oncology preset returned 12 hits. Let me know if you need a Typesense export.',
        sentAt: hoursAgo(6),
      },
    ],
  },
  {
    id: 'd8299fa1-8e4e-4c50-8a0c-2c77b58e0e90',
    displayName: 'Mauro Elenbaas',
    title: 'Clinical Operations',
    avatarUrl: '/images/users/user-9.jpg',
    status: 'away',
    about:
      'Tracks turn-around times for rare disease tests. Uses assistant to spot trends in rejection reasons.',
    unreadCount: 0,
    messages: [],
  },
]

export const CHAT_PROFILE_SEED = {
  id: 'e2c1a571-5f7e-4f56-9020-13f98b0eaba2',
  displayName: 'Mr. Bean',
  title: 'UX/UI Designer',
  avatarUrl: '/images/users/user-1.jpg',
  status: 'online' as SeedContactStatus,
  about:
    'Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.',
  settings: {
    isTwoStepAuthVerificationEnabled: true,
    isNotificationsOn: false,
  },
}
