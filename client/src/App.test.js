import { render, fireEvent } from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux';
import store from './store/index';


describe('Greeting test', () => {
    it('Button is disabled if race have started', () => {
        const greeting = render(<Provider store={store}><App/></Provider>)
        const btn = greeting.getByTestId("greeting-btn")
        fireEvent(btn, new MouseEvent('click'))
        expect(btn.disabled).toBe(true)
    })
})
