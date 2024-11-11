import { useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Dummy = () => {
    const queryClient = useQueryClient();
    console.log(queryClient.getQueryCache().getAll());

    setTimeout(() => {
        console.log(queryClient.getQueryCache().getAll());
    }, 11000);
    return (
        <div>
            <p>Dummy route</p>
            <Link to={'/'}>Go back</Link>
        </div>
    );
};

export default Dummy;
