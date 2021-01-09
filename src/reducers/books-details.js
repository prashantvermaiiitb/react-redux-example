/**
 * primary data for the user Books. This will be moved to Mongo DB for the
 * application and read from there.
 */
export const bookDetails = [
    {
        id: 1,
        userId: 1,
        name: 'Taandav',
        price: '350',
        publisher: `O'reilly`,
        title: 'Book about life.',
        description: 'Dance that will create disaster in world.'
    },
    {
        id: 2,
        userId: 1,
        name: 'Immortals',
        price: '1350',
        publisher: `Addison`,
        title: 'Book about Immortality.',
        description: 'One who has come will also go to the main power source.'
    },
    {
        id: 3,
        userId: 2,
        name: 'Geeta',
        price: '1000',
        publisher: `Log-Rocket`,
        title: 'Book about karma.',
        description: 'Karma is the motto of the life. Do things & forget about results.'
    }, {
        id: 4,
        userId: 2,
        name: 'Amrit Yatra',
        price: '890',
        publisher: `Geeta press, gorakhpur`,
        title: 'Book about Gods and their immortality.',
        description: 'How Gods became most powerful and immortals.'
    },
    {
        id: 5,
        userId: 3,
        name: 'Swarg',
        price: '300',
        publisher: `Packt`,
        title: 'Book about Honour & Valour.',
        description: 'Heaven is a place where God lives and ask others to join.'
    },
    {
        id: 6,
        userId: 3,
        name: 'Good Deeds',
        price: '780',
        publisher: `O'reilly`,
        title: 'Book about Deeds.',
        description: 'Making good deeds and getting moksha.'
    }
]