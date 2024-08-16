import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';

describe('Teste para o componente Post', () => {
    it('deve permitir a inserção de dois comentários', () => {
        render(<Post />);

        fireEvent.change(screen.getByTestId('comment-input'), { target: { value: 'Primeiro comentário' } });
        fireEvent.click(screen.getByTestId('submit-button'));

        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

        fireEvent.change(screen.getByTestId('comment-input'), { target: { value: 'Segundo comentário' } });
        fireEvent.click(screen.getByTestId('submit-button'));

        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
