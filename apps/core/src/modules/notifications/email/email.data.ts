export type EmailPreview = {
  id: number
  name: string
  subject: string
  text: string
  starred: boolean
  isRead: boolean
  date: string
  category: string
  label: string
}

export const EMAIL_PREVIEWS: EmailPreview[] = [
  {
    id: 1,
    name: 'Quire',
    subject: 'Morbi vel lectus in quam fringilla rhoncus.',
    text: 'Integer ac leo. Pellentesque ultrices mattis odio.',
    starred: false,
    isRead: true,
    date: '2023-03-23T10:19:21Z',
    category: 'primary',
    label: 'work',
  },
  {
    id: 2,
    name: 'Katz',
    subject: 'Donec semper sapien a libero.',
    text: 'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    starred: true,
    isRead: true,
    date: '2023-09-29T15:01:49Z',
    category: 'primary',
    label: 'company',
  },
  {
    id: 3,
    name: 'Dazzlesphere',
    subject: 'Integer a nibh.',
    text: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    starred: false,
    isRead: true,
    date: '2023-07-19T21:44:28Z',
    category: 'promotions',
    label: 'work',
  },
]
