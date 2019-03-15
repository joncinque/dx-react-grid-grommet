/*
Copyright 2019 Atanas Stoyanov

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'grommet';
import { TableCell } from '../../grommet/TableCell';

export const EditCell = ({
  column, value, onValueChange, style, children,
  row, tableRow, tableColumn, editingEnabled, ...restProps
}) => (
  <TableCell
    tableContext='cell-edit'
    align={tableColumn && tableColumn.align}
    style={style}
    {...restProps}
  >
    {children || (
    <TextInput
      focusIndicator={true}
      value={value || ''}
      disabled={!editingEnabled}
      onChange={e => onValueChange(e.target.value)}
    />
      )}
  </TableCell>
);

EditCell.propTypes = {
  column: PropTypes.object,
  row: PropTypes.any,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  value: PropTypes.any,
  onValueChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  editingEnabled: PropTypes.bool,
  children: PropTypes.node,
};

EditCell.defaultProps = {
  column: undefined,
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  value: '',
  style: null,
  children: undefined,
  editingEnabled: true,
};
