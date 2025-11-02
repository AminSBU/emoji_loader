import { useEffect } from 'react';
import './Emoji.css'

const Emoji = () => {

    useEffect(() => {
        const fetchApi = async() => {
            try{
                const response = fetch('https://www.emoji.family/api/emojis');

                if(!response.ok)
                {
                    throw new Error('api is not responding');
                }

                const res = (await response).json();
            }
            catch(err)
            {

            }
            finally
            {
                
            }
        }
    })

    return(
        <>
        
        </>
    );
}

export default Emoji;