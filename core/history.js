import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHashHistory from 'history/lib/createHashHistory';
import useQueries from 'history/lib/useQueries';

export default useQueries(createHashHistory)();
