import axios from 'axios';
export const getStories = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://hn.algolia.com/api/v1/search?tags=front_page')
            .then((response) => {
                resolve(response.data);
            })
            .catch((err) => {
                console.log('ERROR', err)
                reject(err);
            })

    })
}