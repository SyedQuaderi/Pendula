import { createRoot } from 'react-dom/client';
import App from './Navigator'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faSolid, faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.min.css';

library.add(fab,faCheckSquare, faCoffee, faCircle, faCircleDot)
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);