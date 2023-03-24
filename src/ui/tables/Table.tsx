import _ from "lodash";
import React, {HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes, useContext} from "react";
import {retryDelay} from '@trpc/client/dist/internals/retryDelay'

/**
 * ### Table Library
 *
 * This library is a collection of components that can be used to build tables.
 *
 * The components are designed using [Tailwind CSS](https://tailwindcss.com/) framework. The style for this table was
 * copied from [Tailwind CSS Table](https://tailwindcomponents.com/component/tailwind-css-table-search).
 *
 */

type CellFunction<T> = (column: string, value: T[keyof T], row: T) => React.ReactNode;
type Columns = { [key: string]: React.ReactNode }
type BuilderProps<T, C> = {
  data: T[]
  columns: C
  cellFunctions?: Partial<{ [key in keyof C]: CellFunction<T> }>
  tableProps?: TableProps
}

/**
 * ### Table.Builder
 *
 * This component is used to build a table from a list of data.
 *
 * @param data - The data to be displayed in the table. A row is composed of a <td> for each key-value pair in columns. The value is for the cell
 *  is retrieved by indexing a data item with a column key.
 * @param columns - Defines the columns for the table. The key is the name of the column and the value is the label for the column heading.
 * @param cellFunctions - Defines the functions to be used to render the cell values. The key is the name of the column and the value returned by the function
 * @constructor
 */
export const Builder = <T extends Record<string, any>, C extends Columns>({ data, columns, cellFunctions = {}, tableProps = {}}: BuilderProps<T, C>) => {
  return <Table {...tableProps}>
    <THead>
      <Tr type={"head"}>
        {_.map(columns, (label, key) => <Th key={key}>{label}</Th>)}
      </Tr>
    </THead>
    <TBody>
      {_.map(data, (row, key) => <Tr key={key}>
        {_.map(columns, (_label, key) => <Td key={key}>
            {cellFunctions[key]?.call(null, key, row[key], row)
              ?? (
                typeof row[key] === "string" || typeof row[key] === "number"
                  ? row[key]
                  : null
              )
            }
          </Td>
        )}
        </Tr>
      )}
    </TBody>
  </Table>
}

const TablePropsContext = React.createContext<TableProps>({})

/**
 * ### Table.Table
 *
 * The top-level table component. In addition to Table.Builder, this component can be used to build a table by hand. Just
 * replace table, thead, and tbody with Table, THead, and TBody etc respectively.
 *
 * @param rest
 * @constructor
 */
type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  stripedRows?: boolean
  stripedCols?: boolean
}

export const Table = ({ stripedCols = false, stripedRows = false, ...rest }: TableProps) => {
  return <TablePropsContext.Provider value={{ stripedCols, stripedRows, ...rest }}>
    <div className={`relative overflow-x-auto w-full shadow-md rounded-lg`}>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" { ...rest } />
    </div>
  </TablePropsContext.Provider>;
}

type THeadProps = HTMLAttributes<HTMLTableSectionElement> & {}

export const THead = ({ ...rest }: THeadProps) => {
  return <thead className="sticky top-0 text-xs text-gray-700" { ...rest } />
}

type TBodyProps = HTMLAttributes<HTMLTableSectionElement> & {}

export const TBody = ({ ...rest }: TBodyProps) => {
  return <tbody {...rest} />
}

type TRProps = HTMLAttributes<HTMLTableRowElement> & { type?: "body" | "head" }

export const Tr = ({ type = "body", ...rest }: TRProps) => {
  const tableProps = useContext(TablePropsContext);

  return <tr
    className={
      type === "head"
        ? ""
        : `bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 ${tableProps.stripedRows ? "even:bg-gray-50":""}`
    } { ...rest } />
}

type THProps = ThHTMLAttributes<HTMLTableHeaderCellElement> & {}

export const Th = ({ scope = "col", ...rest }: THProps) => {
  const { stripedCols } = useContext(TablePropsContext);
  return <th scope={scope} className={`px-6 py-3 ${stripedCols ? "even:bg-gray-50":""}`} {...rest} />
}

type TDProps = TdHTMLAttributes<HTMLTableCellElement> & {}

export const Td = ({ ...rest }: TDProps) => {
  const { stripedCols } = useContext(TablePropsContext);
  return <td className={`px-6 py-4 ${stripedCols ? "even:bg-gray-50":""}`} {...rest} />
}