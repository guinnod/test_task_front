import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Login } from '@components/pages/Login';


test('renders logini page', () => {
    render(
        <Router>
            <Login />
        </Router>
    );
    expect(screen.getByText('Log in')).toBeInTheDocument();
});