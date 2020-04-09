import axios from 'axios';
export const getStories = (type) => {
    return new Promise((resolve, reject) => {
        let url = '';
        if (type === 'F') {
            url = 'https://hn.algolia.com/api/v1/search?tags=front_page';
        } else if (type === 'L') {
            url = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';
        }
        axios.get(url)
            .then((response) => {
                resolve(response.data);
            })
            .catch((err) => {
                console.log('ERROR', err)
                reject(err);
            })

    })
}