import { FaPepperHot as icon } from 'react-icons/fa';

export default {
    name: 'topping',
    // visible title
    title: 'Toppings',
    type: 'document',
    icon: icon,
    fields: [
        {
            name: 'name',
            title: 'Pizza name',
            type: 'string',
            description: 'Name of the topping',
        },
        {
            name: 'vegetarian',
            title: 'Vegetarian',
            type: 'boolean',
            description: 'Name of the topping',
            options: {
                layaout: 'checkbox',
            }
        },
    ],
    preview: {
        select: {
            name: 'name',
            vegetarian: 'vegetarian',
        },
        prepare: fields => ({
            title:  `This is the title ${fields.name}`,
        })
    }
};