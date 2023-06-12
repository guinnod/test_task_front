import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
test('renders home page when path is "/"', () => {
    render(
        <Router>
            <App />
        </Router>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
});