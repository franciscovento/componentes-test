import { SvgElipsis, SvgInfoCircle, SvgPlus, SvgSort } from '@/components/svg';
import { Dropdown, MenuProps, TableProps, Tag, Tooltip } from 'antd';
import clsx from 'clsx';

export type DataType = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
};

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john_doe1@email.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane_smith2@email.com',
    role: 'User',
    status: 'Inactive',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice_johnson3@email.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Bob Brown',
    email: 'bob_brown4@email.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Charlie Davis',
    email: 'charlie_davis5@email.com',
    role: 'Admin',
    status: 'Inactive',
  },
  {
    id: 6,
    name: 'David Evans',
    email: 'david_evans6@email.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 7,
    name: 'Eve Foster',
    email: 'eve_foster7@email.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 8,
    name: 'Frank Green',
    email: 'frank_green8@email.com',
    role: 'User',
    status: 'Inactive',
  },
  {
    id: 9,
    name: 'Grace Harris',
    email: 'grace_harris9@email.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 10,
    name: 'Hank Irving',
    email: 'hank_irving10@email.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 11,
    name: 'Ivy Johnson',
    email: 'ivy_johnson11@email.com',
    role: 'Admin',
    status: 'Inactive',
  },
  {
    id: 12,
    name: 'Jack King',
    email: 'jack_king12@email.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 13,
    name: 'Karen Lee',
    email: 'karen_lee13@email.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 14,
    name: 'Larry Moore',
    email: 'larry_moore14@email.com',
    role: 'User',
    status: 'Inactive',
  },
  {
    id: 15,
    name: 'Mona Nelson',
    email: 'mona_nelson15@email.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 16,
    name: 'Nina Owens',
    email: 'nina_owens16@email.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 17,
    name: 'Oscar Perry',
    email: 'oscar_perry17@email.com',
    role: 'Admin',
    status: 'Inactive',
  },
  {
    id: 18,
    name: 'Paul Quinn',
    email: 'paul_quinn18@email.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 19,
    name: 'Quincy Roberts',
    email: 'quincy_roberts19@email.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 20,
    name: 'Rachel Scott',
    email: 'rachel_scott20@email.com',
    role: 'User',
    status: 'Inactive',
  },
  {
    id: 21,
    name: 'Sam Taylor',
    email: 'sam_taylor21@email.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 22,
    name: 'Tina Underwood',
    email: 'tina_underwood22@email.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 23,
    name: 'Uma Vance',
    email: 'uma_vance23@email.com',
    role: 'Admin',
    status: 'Inactive',
  },
  {
    id: 24,
    name: 'Victor White',
    email: 'victor_white24@email.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 25,
    name: 'Wendy Xander',
    email: 'wendy_xander25@email.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 26,
    name: 'Xander Young',
    email: 'xander_young26@email.com',
    role: 'User',
    status: 'Inactive',
  },
  {
    id: 27,
    name: 'Yara Zane',
    email: 'yara_zane27@email.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 28,
    name: 'Zack Allen',
    email: 'zack_allen28@email.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 29,
    name: 'Amy Baker',
    email: 'amy_baker29@email.com',
    role: 'Admin',
    status: 'Inactive',
  },
  {
    id: 30,
    name: 'Brian Clark',
    email: 'brian_clark30@email.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 31,
    name: 'Cathy Davis',
    email: 'cathy_davis31@email.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 32,
    name: 'Derek Evans',
    email: 'derek_evans32@email.com',
    role: 'User',
    status: 'Inactive',
  },
  {
    id: 33,
    name: 'Ella Foster',
    email: 'ella_foster33@email.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 34,
    name: 'Frank Green',
    email: 'frank_green34@email.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 35,
    name: 'Grace Harris',
    email: 'grace_harris35@email.com',
    role: 'Admin',
    status: 'Inactive',
  },
  {
    id: 36,
    name: 'Hank Irving',
    email: 'hank_irving36@email.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 37,
    name: 'Ivy Johnson',
    email: 'ivy_johnson37@email.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 38,
    name: 'Jack King',
    email: 'jack_king38@email.com',
    role: 'User',
    status: 'Inactive',
  },
  {
    id: 39,
    name: 'Karen Lee',
    email: 'karen_lee39@email.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 40,
    name: 'Larry Moore',
    email: 'larry_moore40@email.com',
    role: 'User',
    status: 'Active',
  },
];

const getMenuItems = (id: string): MenuProps['items'] => {
  return [
    {
      key: '1',
      label: <span className="sui-text-sm">Agregar nuevo proveedor</span>,

      icon: <SvgPlus width={16} height={16} />,
      onClick: () => console.log({ id, action: 'add' }),
    },
    {
      key: '2',
      label: <span className="sui-text-sm">Adjudicar viaje</span>,
      icon: <SvgInfoCircle width={16} height={16} />,
      onClick: () => console.log({ id, action: 'adjudicar' }),
    },
  ];
};

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: (
      <span className="sui-flex sui-items-center sui-gap-2 sui-mr-2">
        Name
        <Tooltip
          title={
            <span className="sui-text-xs">Aquí se da un detalle importante</span>
          }
        >
          <SvgInfoCircle width={16} height={16} />
        </Tooltip>{' '}
      </span>
    ),
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.id - b.id,
    showSorterTooltip: false,
    defaultSortOrder: 'ascend',
    sortIcon: ({ sortOrder }) => {
      return (
        <SvgSort
          width={16}
          height={16}
          className={clsx('sui-duration-300', {
            'sui-rotate-180': sortOrder === 'descend',
          })}
        />
      );
    },
  },
  {
    title: 'Email',
    dataIndex: 'email',
    className: 'ext-nowrap',
    key: 'email',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => {
      return (
        <Tag className="sui-text-xs" color={status === 'Active' ? 'cyan' : 'red'}>
          {status}
        </Tag>
      );
    },
  },
  {
    width: 50,
    title: '',
    key: 'action',
    render: (item) => {
      return (
        <Dropdown
          menu={{
            items: getMenuItems(item.name),
          }}
          trigger={['click']}
          placement="bottomLeft"
        >
          <SvgElipsis
            style={{
              fontSize: 24,
              fontWeight: 'bold',
            }}
            // onClick={() => console.log(item)}
          />
        </Dropdown>
      );
    },
    fixed: 'right',
  },
];

const dataSource: DataType[] = users;

export { columns, dataSource };
