const contactReducer = (state = [], action) => {
    // state = [
    //     { 'id': 1, 'title': 'Arun', 'message': 'he;llo' },
    //     { 'id': 2, 'title': 'Amit', 'message': 'bolo' },
    //     { 'id': 3, 'title': 'JD', 'message': 'chalo' },
    //     { 'id': 4, 'title': 'danish', 'message': 'chodo' },
    // ]
    switch (action.type) {
        case 'ADD_CONTACT':
            const data = action.data
            data['id'] = parseInt(state.length) + 1;
            return state.concat([data])

        case 'UPDATE_CONTACT':
            return state.map((contact) => {
                if (contact.id === action.data.id) {
                    return{
                        ...contact,
                        title : action.data.title,
                        message : action.data.message,
                        address: action.data.address
                    }
                } else {
                    return contact;
                }

            });

        default:
            return state;
    }

}

export default contactReducer;