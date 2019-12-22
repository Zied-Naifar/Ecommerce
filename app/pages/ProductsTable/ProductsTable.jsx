/**
 *
 * ProductsTable
 *
 */

import React, { useState, useRef, useEffect } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';

import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import messages from './messages';

import './products-table.scss';

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create({ name: 'products_table' })(EditableRow);

const EditableCell = props => {
  const [editing, setEditing] = useState(false);
  const input = useRef(null);
  const toggleEdit = () => {
    setEditing(!editing);
  };
  useEffect(() => {
    if (editing) {
      input.current.focus();
    }
  }, [editing]);
  const save = (e, form) => {
    const { record, handleSave } = props;
    form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  const renderCell = form => {
    const { children, dataIndex, record, title } = props;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex],
        })(
          <Input
            ref={input}
            onPressEnter={e => save(e, form)}
            onBlur={e => save(e, form)}
          />,
        )}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  };

  const {
    editable,
    dataIndex,
    title,
    record,
    index,
    handleSave,
    children,
    ...restProps
  } = props;
  return (
    <td {...restProps}>
      {editable ? (
        <EditableContext.Consumer>{renderCell}</EditableContext.Consumer>
      ) : (
        children
      )}
    </td>
  );
};

const ProductsTable = () => {
  console.log('ProductsTable: ');
  let columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '30%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
      editable: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <button type="button">Delete</button>
          </Popconfirm>
        ) : null,
    },
  ];
  const [count, setCount] = useState(2);
  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      name: 'Edward King 0',
      age: '32',
      address: 'London, Park Lane no. 0',
    },
    {
      key: '1',
      name: 'Edward King 1',
      age: '32',
      address: 'London, Park Lane no. 1',
    },
  ]);

  const handleDelete = key => {
    setDataSource(dataSource.filter(item => item.key !== key));
  };

  const handleAdd = () => {
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleSave = row => {
    const newData = [...dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableFormRow,
      cell: EditableCell,
    },
  };
  columns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: record => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return (
    <div className="products-table">
      <Helmet>
        <title>ProductsTable</title>
        <meta name="description" content="Description of ProductsTable" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add a row
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

EditableCell.propTypes = {
  children: PropTypes.any,
  editable: PropTypes.any,
  dataIndex: PropTypes.any,
  title: PropTypes.any,
  record: PropTypes.any,
  index: PropTypes.any,
  handleSave: PropTypes.any,
};
ProductsTable.propTypes = {
  children: PropTypes.any,
  editable: PropTypes.any,
  dataIndex: PropTypes.any,
  title: PropTypes.any,
  record: PropTypes.any,
  index: PropTypes.any,
  handleSave: PropTypes.any,
};

export default ProductsTable;
