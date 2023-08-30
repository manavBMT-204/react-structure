import React from 'react';
import { ComponentExample } from './components';
import { ComponentHeader } from '../../components';

export function HomePage () {
  return (
    <div>
      <div>Hello, I am Home Page</div>
      <ComponentExample />
      <ComponentHeader />
    </div>
  )
}
