import axios from 'axios'

export const onSendContact = (values: {
    firstname: string
    lastname: string
    email: string
    message: string
}) => {
    return axios
        .post('http://localhost:3004/contacts', values)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
}
