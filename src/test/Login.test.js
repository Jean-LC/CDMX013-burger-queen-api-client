import React from 'react';
import { render, screen } from '@testing-library/react';
import { Login } from '../components/Views/Login';

describe('x', () =>{

    test ('y', () => {
        render(<Login/>);
        const input = screen.getByPlaceholderText('Email');
        expect(input).toBeInTheDocument();
    })
})