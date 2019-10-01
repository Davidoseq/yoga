import React from 'react';
import styled from 'styled-components';
import MetaDataQuery from './MetaDataQuery';

const BORDER_COLOR = '#e2dddd';

const TableWrapper = styled.div`
  border: 1px solid ${BORDER_COLOR};
  border-radius: 5px;
  overflow: hidden;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  font-family: monospace;
  margin: 0px 0;
  width: 100%;

  thead {
    background-color: #f6f8fa;

    th {
      font-size: 14px;
      font-weight: normal;
      padding: 14px 12px 12px;
      text-align: left;
    }
  }

  tbody {
    tr {
      td {
        border-top: 1px solid ${BORDER_COLOR};
        padding: 14px 12px 12px;

        &:first-child {
          font-weight: 700;
        }

        &:nth-child(3),
        &:last-child {
          color: #e3116c;
        }

        &:nth-child(4) {
          code {
            background-color: #f6f8fa;
            border: 1px solid #f2f2f2;
            border-radius: 3px;
            padding: 5px;
          }
        }
      }
    }
  }
`;

const Table = ({
  data: {
    node: { description, props },
  },
}) => (
  <>
    {description && <p>{description.text}</p>}
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
          </tr>
        </thead>
        <tbody>
          {props.map(
            ({
              name,
              description: { text: description },
              type: { name: type },
              defaultValue: { value: defaultValue },
              required: isRequired,
            }) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{description}</td>
                <td>{type}</td>
                <td>
                  <code>{defaultValue.replace(/'/g, '')}</code>
                </td>
                <td>{String(isRequired)}</td>
              </tr>
            ),
          )}
        </tbody>
      </StyledTable>
    </TableWrapper>
  </>
);

const PropsTable = ({ component }) => {
  const {
    allComponentMetadata: { edges },
  } = MetaDataQuery();

  const componentProps = edges.filter(
    ({ node }) => node.displayName === component,
  )[0];
  return <Table data={componentProps} />;
};

export default PropsTable;
