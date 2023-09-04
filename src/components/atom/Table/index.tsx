import React from "react";
import { Table as AntdTable, TableProps } from "antd";
import { ColumnsType } from "antd/es/table";

interface GenericTableProps<T> {
  data: T[];
  columns: ColumnsType<T>;
  loading: boolean;
  pagination?: TableProps<T>["pagination"];
}

function GenericTable<T>({
  data,
  columns,
  loading,
  pagination,
}: GenericTableProps<T>) {
  return (
    <AntdTable
      dataSource={data}
      columns={columns}
      loading={loading}
      pagination={pagination}
      scroll={{ x: 950 }}
    />
  );
}

export { GenericTable };
