import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {Builder as TableBuilder} from '@/ui/tables/Table'
import moment from 'moment'

export default {
  title: 'Components/Tables',
  argTypes: {

  }
}

const columns = {
  title: "Title",
  primaryIntent: "Primary Intent",
  searchVolume: "Search Volume",
  avgWordCount: "Average Word Count",
  content: "Content",
  link: "Link",
  domain: "Domain",
  contentGrade: "Content Grade",
  date: ""
}
const data = [
  { title: "Lorem Ipsum", primaryIntent: "Research", searchVolume: 2400, avgWordCount: 2750, content: 30, link: 45, domain: 75, contentGrade: "-", date: new Date(2023, 1, 22) },
  { title: "Lorem Ipsum", primaryIntent: "Research", searchVolume: 2400, avgWordCount: 2750, content: 30, link: 45, domain: 75, contentGrade: "-", date: new Date(2023, 1, 22) },
  { title: "Lorem Ipsum", primaryIntent: "Research", searchVolume: 2400, avgWordCount: 2750, content: 30, link: 45, domain: 75, contentGrade: "-", date: new Date(2023, 1, 22) },
]

const BuilderTemplate: ComponentStory<typeof TableBuilder> = args => <TableBuilder {...args} />;

export const Default = BuilderTemplate.bind({});
Default.args = {
  columns,
  data
}

export const StripedColumns = BuilderTemplate.bind({});
StripedColumns.args = {
  columns,
  data,
  cellFunctions: {
    date: (col, value, row) => <span className="whitespace-nowrap">{moment(value).format("dd MM YYYY")}</span>
  },
  tableProps: {
    stripedCols: true
  }
}

export const StripedRows = BuilderTemplate.bind({});
StripedRows.args = {
  columns,
  data,
  tableProps: {
    stripedRows: true
  }
}