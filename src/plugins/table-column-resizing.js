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
import { TableColumnResizing as TableColumnResizingBase } from '@devexpress/dx-react-grid';

export class TableColumnResizing extends React.PureComponent {
  render() {
    const { minColumnWidth, maxColumnWidth, ...restProps } = this.props;
    return (
      <TableColumnResizingBase
        {...restProps}
        minColumnWidth={minColumnWidth}
        maxColumnWidth={maxColumnWidth}
      />
    );
  }
}

TableColumnResizing.propTypes = {
  minColumnWidth: PropTypes.number,
  maxColumnWidth: PropTypes.number,
};

TableColumnResizing.defaultProps = {
  minColumnWidth: 40,
  maxColumnWidth: Infinity,
};
