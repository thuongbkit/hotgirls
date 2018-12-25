import { HOST } from '../constants';

export default function normalizeHotGirls(hotgirls) {
    return hotgirls.map(hotgirl => {
        return {
            id: hotgirl.id || '',
            name: hotgirl.name || '',
            image: `${HOST}${hotgirl.image}` || '',
            phone: hotgirl.phone || '',
            description: hotgirl.description || ''
        }
    })
}