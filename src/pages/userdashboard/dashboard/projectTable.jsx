import React from "react";
import { Table } from "rsuite";

const ProjectTable = () => {
  const { Column, HeaderCell, Cell } = Table;
  return (
    <Table>
      <Column align="center" fixed>
        <HeaderCell>Project</HeaderCell>
        <Cell dataKey="project_name" />
      </Column>
      <Column align="center" fixed>
        <HeaderCell>Section</HeaderCell>
        <Cell dataKey="code" />
      </Column>
      <Column align="center" fixed>
        <HeaderCell>Snippet</HeaderCell>
        <Cell dataKey="snippet" />
      </Column>
      <Column align="center" fixed>
        <HeaderCell>Date</HeaderCell>
        <Cell dataKey="date" />
      </Column>
    </Table>
  );
};

export default ProjectTable;