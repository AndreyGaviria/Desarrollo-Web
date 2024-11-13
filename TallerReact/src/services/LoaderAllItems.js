
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoaderAllItems = async (detail, link) => {
    try {
        const res = await axios.get(Link)
        console.log(res)
        detail(res)
        
    } catch (error) {
        console.error(error);
        detail('null');
    }
    return detail
}

