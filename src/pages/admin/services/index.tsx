import SearchableTable from "@/components/common/SearchableTable";
import usePagination, { DEFAULT_TABLE_PARAMS, getDefaultParamsForPagination } from "@/components/hooks/usePagination";
import { defaultErrorModal } from "@/components/modal/DefaultErrorModal";
import { API_getAllServices } from "@/lib/api/api";
import { useAuth } from "@/lib/auth";
import { COLOR } from "@/styles/color";
import { getRenderKey } from "@/util/common";
import { Col, Row, Table } from "antd";
import { useEffect, useState } from "react";

export default function Services() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false)

  const [rows, setRows] = useState([]);
  const { tableParams, handlePagination, handleSort, handleSearch, setTableParams } = usePagination(DEFAULT_TABLE_PARAMS, getAllServices, () => setRows([]));

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

  useEffect(() => {
    refreshData()
  }, [user])

  async function refreshData() {
    await getAllServices(DEFAULT_TABLE_PARAMS)
  }

  async function getAllServices(newTableParams: any) {
    setIsLoading(true)
    let token = await user?.getIdToken();
    let body = getDefaultParamsForPagination(newTableParams);

    try {
      let response = await API_getAllServices(token, body);
      if (response.body.is_success) {
        const result = await response.body.data;
        const pagination = await response.body.pagination;
        setTableParams({
          ...newTableParams,
          pagination: { ...newTableParams.pagination, total: Number(pagination['total_records']) }
        });
        setRows(result);
        setIsLoading(false)
      } else {
        defaultErrorModal(response.body.data)
        setIsLoading(false)
      }
    } catch (error) {
      defaultErrorModal("Call API error")
      setIsLoading(false)
    }
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
