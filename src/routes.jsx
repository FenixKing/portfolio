import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import App from './App'

export const Rotas = () =>{
    return (
        <Router>
            <Routes>
                <Route index element={<App />} />
            </Routes>
        </Router>
    )
}