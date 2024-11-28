import type { Meta, StoryObj } from '@storybook/react';
import { ColumnsType } from 'antd/es/table';
import Table from './Table';
import { columns, dataSource } from './mock.data';

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    pagination: {
      control: 'object',
    },
    columns: {
      control: false,
    },
    dataSource: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Playground: Story = {
  render: (args) => {
    return (
      <div className="sui-w-[550px]">
        <Table
          scroll={{
            x: 'max-content',
          }}
          rowKey={'id'}
          {...args}
        />
      </div>
    );
  },
  args: {
    pagination: {
      position: ['topRight'],
      showSizeChanger: true,
      simple: true,
    },
    rowSelection: {
      type: 'checkbox',
      columnWidth: 50,
    },
    dataSource: dataSource,
    columns: columns as ColumnsType<unknown>,
  },
};
