import {
    defaultIcon,
    defaultIconDark,
    BookOpen,
    BookOpenDark,
    FolderNotch,
    FolderNotchDark,
    ShoppingBagOpen,
    ShoppingBagOpenDark,
    userProfile,
    userProfileDark,
    IdentificationCard,
    IdentificationCardDark,
    UsersThree,
    UsersThreeDark,
    Notebook,
    NotebookDark,
    ChatsTeardrop,
    ChatsTeardropDark
} from '../utils/assets/svgs/index'

export const accordionData = [{
        title: {
            name: 'Default',
            img: [defaultIcon, defaultIconDark],
            link: '/dashboard'
        }
    },

    {
        title: {
            name: 'eCommerce',
            img: [ShoppingBagOpen, ShoppingBagOpenDark]
        },

        items: [{
                name: 'Overview',
                link: '/dashboard/overview'
            },
            {
                name: 'Details',
                link: '/dashboard/details'
            },
            {
                name: 'Orders',
                link: '/dashboard/orderlist'
            },
            {
                name: 'Reports',
                link: '/dashboard/reports'
            }
        ]
    },

    {
        title: {
            name: 'Projects',
            img: [FolderNotch, FolderNotchDark]
        },

        items: [{
                name: 'Overview',
                link: '/dashboard/overview'
            },
            {
                name: 'Details',
                link: '/dashboard/details'
            },
            {
                name: 'Reports',
                link: '/dashboard/reports'
            }
        ]
    },

    {
        title: {
            name: 'Online Courses',
            img: [BookOpen, BookOpenDark]
        },

        items: [{
                name: 'Overview',
                link: '/dashboard/overview'
            },
            {
                name: 'Details',
                link: '/dashboard/details'
            },
            {
                name: 'Reports',
                link: '/dashboard/reports'
            }
        ]
    }
];



export const accordionData2 = [
    {
        title: {
            name: 'User Profile',
            img: [userProfile, userProfileDark]
        },

        items: [{
                name: 'lorem-A1',
                link: '/dashboard/overview'
            },
            {
                name: 'lorem-A2',
                link: '/dashboard/details'
            },
            {
                name: 'lorem-A3',
                link: '/dashboard/reports'
            }
        ]
    },

    {
        title: {
            name: 'Account',
            img: [IdentificationCard, IdentificationCardDark]
        },

        items: [{
                name: 'lorem-B1',
                link: '/dashboard/overview'
            },
            {
                name: 'lorem-B2',
                link: '/dashboard/details'
            },
            {
                name: 'lorem-B3',
                link: '/dashboard/reports'
            }
        ]
    },

    {
        title: {
            name: 'Corporate',
            img: [UsersThree, UsersThreeDark]
        },

        items: [{
                name: 'lorem-C1',
                link: '/dashboard/overview'
            },
            {
                name: 'lorem-C2',
                link: '/dashboard/details'
            },
            {
                name: 'lorem-C3',
                link: '/dashboard/reports'
            }
        ]
    },

    {
        title: {
            name: 'Blog',
            img: [Notebook, NotebookDark]
        },

        items: [{
                name: 'lorem-D1',
                link: '/dashboard/overview'
            },
            {
                name: 'lorem-D2',
                link: '/dashboard/details'
            },
            {
                name: 'lorem-3',
                link: '/dashboard/reports'
            }
        ]
    },

    {
        title: {
            name: 'Social',
            img: [ChatsTeardrop, ChatsTeardropDark]
        },

        items: [{
                name: 'lorem-E1',
                link: '/dashboard/overview'
            },
            {
                name: 'lorem-E2',
                link: '/dashboard/details'
            },
            {
                name: 'lorem-E3',
                link: '/dashboard/reports'
            }
        ]
    },
];