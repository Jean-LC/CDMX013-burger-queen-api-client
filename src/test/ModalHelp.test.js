import { render, screen } from '@testing-library/react';
import ModalHelp from '../components/ModalHelp';

describe('Modal help rendering tests', () => {

    test('the logo is in the modal', () => {
        render(<ModalHelp />);
        const logoImg = screen.getByRole('Button');
        expect(logoImg).toBeInTheDocument();

    })

})