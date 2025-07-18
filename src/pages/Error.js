import { useRouteError } from 'react-router-dom';
import PageContent from "../components/PageContent";
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
    const error = useRouteError();

    let title = 'An error occured!';
    let message = 'Something went wrong!! -default';

    if (error.status === 500) {
        message = JSON.parse(error.data).message;
    }

    if (error.status === 404) {
        message: 'Could not find resource or page. 404?';
        title: 'Not Found!'
    }

    return (
        <>
        <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
}

export default ErrorPage;
