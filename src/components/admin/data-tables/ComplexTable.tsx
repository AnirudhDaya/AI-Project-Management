import React from 'react';
import CardMenu from 'components/card/CardMenu';
import Card from 'components/card';
import Progress from 'components/progress';
import { MdCancel, MdCheckCircle, MdOutlineError } from 'react-icons/md';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger,DropdownMenuLabel } from 'components/dropdownMenu/DropdownMenu';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import Checkbox from 'components/checkbox';

type RowObj = {
  name: string;
  status: string;
  teamMembers: string;
  documents: string;
  
};

const columnHelper = createColumnHelper<RowObj>();

// const columns = columnsDataCheck;
export default function ComplexTable(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  let defaultData = tableData;
  const columns = [
    columnHelper.accessor('name', {
      id: 'name',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          PROJECT
        </p>
      ),
      cell: (info) => {
        
        const cellValue = info.getValue();
        const truncatedValue = cellValue.length > 15 ? cellValue.substring(0, 15) + '...' : cellValue;
    
        return (
          <div className="flex items-center">
          <Checkbox
            defaultChecked={info.getValue()[1]}
            colorScheme="brandScheme"
            me="10px"
          />
          <DropdownMenu>
            <DropdownMenuTrigger className="ml-3 text-sm font-bold text-navy-700 dark:text-white cursor-pointer">
              {truncatedValue}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{cellValue}</DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        );
      },
    }),
    columnHelper.accessor('status', {
      id: 'status',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          STATUS
        </p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          {info.getValue() === 'Approved' ? (
            <MdCheckCircle className="me-1 text-green-500 dark:text-green-300" />
          ) : info.getValue() === 'Rejected' ? (
            <MdCancel className="me-1 text-red-500 dark:text-red-300" />
          ) : info.getValue() === 'Under Review' ? (
            <MdOutlineError className="me-1 text-amber-500 dark:text-amber-300" />
          ) : null}
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue()}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor('teamMembers', {
      id: 'teamMembers',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          TEAM MEMBERS
        </p>
      ),
      cell: (info) => {
        const cellValue = info.getValue();
        const truncatedValue = cellValue.length > 15 ? cellValue.substring(0, 15) + '...' : cellValue;
    
        return (
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-bold text-navy-700 dark:text-white cursor-pointer">
              {truncatedValue}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{cellValue}</DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    }),
    columnHelper.accessor('documents', {
      id: 'progress',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          DOCUMENTS
        </p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          {info.getValue()}
        </div>
      ),
    }),
  ]; // eslint-disable-next-line
  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <Card extra={'w-full h-full px-6 pb-6 sm:overflow-x-auto'}>
      <div className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Complex Table
        </div>
        <CardMenu />
      </div>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b border-gray-200 pb-2 pr-4 pt-4 text-start dark:border-white/30"
                    >
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: '',
                          desc: '',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, 5)
              .map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="min-w-[150px] border-white/0 py-3  pr-4"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
