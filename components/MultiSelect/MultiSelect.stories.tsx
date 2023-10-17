import type { Meta, StoryObj } from '@storybook/react';
 import ReusableSelect from './MultiSelect';
// import { Avatar1 } from './Avatar';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ReusableSelect> = {
  title: 'Example/IconSelect',
  component: ReusableSelect,
  tags: ['autodocs'],
 
};

export default meta;
type Story = StoryObj<typeof ReusableSelect>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label:"My select",
    options:[{id:'1',name:'option1'},
    {id:'2',name:'option2'},
    {id:'3',name:'option3'},
        
       
      ],
      disabled:false,
      value: [
        'option1',
        'option2',
        'option3',
      ],
      onChange:() => {},
  },
  
};