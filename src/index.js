import dva from 'dva';
import { createBrowserHistory as createHistory } from 'history';
import createLoading from 'dva-loading';
import './index.css';

// 1. Initialize
const app = dva({
  history: createHistory()
});

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
// app.model(require('./models/example').default);
require('./models').default.forEach(key => app.model(key.default));

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
