import SearchableTable from "@/components/common/SearchableTable";
import usePagination, { DEFAULT_TABLE_PARAMS } from "@/components/hooks/usePagination";
import { useAuth } from "@/lib/auth";
import { COLOR } from "@/styles/color";
import { getRenderKey } from "@/util/common";
import { Col, Row, Table } from "antd";
import { useState } from "react";

export default function Services() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false)

  const [rows, setRows] = useState([]);
  const { tableParams, handlePagination, handleSort, handleSearch, setTableParams } = usePagination(DEFAULT_TABLE_PARAMS, getTableData, () => setRows([]));

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  async function getTableData(newTableParams: any) {
    console.log('getTableData');
    return;
  }

  return (
    <div style={{
      margin: '24px 16px',
      padding: 24,
      minHeight: '200',
      background: COLOR.defaultBackground,
      borderRadius: 8,
    }}>
      <div>
        Admin Service
      </div>
      <div>
        {/* <Table dataSource={dataSource} columns={columns} /> */}
        <Row>
          <Col span={24}>
            <SearchableTable
              key={''}
              size={'small'}
              dataSource={rows}
              loading={isLoading}
              columns={columns}
              enableDatePicker={false}
              enableColumnFilter={true}
              enableExport={false}
              enableGroup={false}
              enableSearch={true}
              enableSort={true}
              ignoreSearchDataIndex={getRenderKey(columns)}
              pagination={tableParams.pagination}
              onChange={handlePagination}
              onSearch={handleSearch}
              onSort={handleSort}
              bordered={false}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
