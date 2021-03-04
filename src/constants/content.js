

const LevelZeroCategories = [
    {
        id: 1,
        level: 0,
        title: 'Foodgrains',
        description: 'Atta, Maida,Sooji and many more.'
    },
    {
        id: 2,
        level: 0,
        title: 'Edible Oil',
        description: 'Atta, Maida,Sooji and many more.'
    },
    {
        id: 3,
        level: 0,
        title: 'Masala & Spices',
        description: 'Atta, Maida,Sooji and many more.'
    },
    {
        id: 4,
        level: 0,
        title: 'Dairy',
        description: 'Atta, Maida,Sooji and many more.'
    },
    {
        id: 5,
        level: 0,
        title: 'Rice Products',
        description: 'Atta, Maida,Sooji and many more.'
    },
    {
        id: 6,
        level: 0,
        title: 'Beverages',
        description: 'Atta, Maida,Sooji and many more.'
    },
    {
        id: 7,
        level: 0,
        title: 'Cleaning & Household',
        description: 'Atta, Maida,Sooji and many more.'
    }
];

const LevelOneCategories = [
    {
        id: 1,
        level: 1,
        parentLevel: 0,
        parentId: 1,
        title: 'Atta, Flour & Sooji',
    },
    {
        id: 2,
        level: 1,
        parentLevel: 0,
        parentId: 1,
        title: 'Daal & Pulses'
    },
    {
        id: 3,
        level: 1,
        parentLevel: 0,
        parentId: 1,
        title: 'Daal & Pulses'
    },
    {
        id: 3,
        level: 1,
        parentLevel: 0,
        parentId: 2,
        title: 'Sunflower Oil'
    },
    {
        id: 4,
        level: 1,
        parentLevel: 0,
        parentId: 2,
        title: 'Sunflower Oil'
    },
    {
        id: 5,
        level: 1,
        parentLevel: 0,
        parentId: 3,
        title: 'Whole Spices'
    },
    {
        id: 6,
        level: 1,
        parentLevel: 0,
        parentId: 3,
        title: 'Powdered Spices'
    },
    {
        id: 7,
        level: 1,
        parentLevel: 0,
        parentId: 4,
        title: 'Milk'
    },
    {
        id: 8,
        level: 1,
        parentLevel: 0,
        parentId: 4,
        title: 'Curd'
    },
    {
        id: 9,
        level: 1,
        parentLevel: 0,
        parentId: 5,
        title: 'Raw Rice'
    },
    {
        id: 10,
        level: 1,
        parentLevel: 0,
        parentId: 5,
        title: 'Basmati Rice'
    },
];


const orders = [
    {
        status: 'Order Placed',
        id: '12341234534',
        orderPlacedDate: '2020-10-02',
        expectedDeliveryDate: '2020-10-03',
        actualDeliveryDate: null,
    }
]

const rcentlyDeliveredOrder = {
    orderId: '12341234534',
    text: ''
}

export default {
    LevelZeroCategories,
    LevelOneCategories
}