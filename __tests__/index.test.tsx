import * as React from 'react'
import {render, screen} from '@testing-library/react'
import Home from '../src/pages/index';
import '@testing-library/jest-dom';

describe('Home', ()=> {
   it('renders', ()=> {
      render(<Home />)
      const heading = screen.getByRole('', {
         name: /welcome to next\.js!/i
      });
      expect(heading).not.toBeInTheDocument();
   })
})
