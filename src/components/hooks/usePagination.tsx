import { useState } from 'react';
const _ = require("lodash");

export const DEFAULT_TABLE_PARAMS = {
    pagination: {
        current: 1,
        total: null,
        pageSize: 100,
        hideOnSinglePage: false,
        showSizeChanger: true,
    },
    sorter: {
        field: "createdTimestamp",
        order: 'descend'
    },
    search : {}
};

export function getDefaultParamsForPagination(newTableParams : any) {
    const pageConfig = newTableParams.pagination;
    const sortConfig = newTableParams.sorter;
    const filters = newTableParams.filters;
    const search = newTableParams.search;
    let body : any = {
        params: {
            limit: pageConfig.pageSize,
            offset: (pageConfig.current - 1) * pageConfig.pageSize,
            orderField: sortConfig.order ? sortConfig.field : 'createdTimestamp',
            orderBy: sortConfig.order === 'descend' ? "DESC" : "ASC"
        }
    }
    if (search) {
        body.params["search"] = search;
    }
    if (filters) {
        body.params["filters"] = filters;
    }
    return body;
}

const usePagination = (initialParams : any, fetchDataCallback : any, setRows : any) => {
    const [tableParams, setTableParams] = useState(initialParams);

    const handlePagination = async (pagination : any, tableFilter : any, tableSort : any) => {
        let update = false;
        if (!_.isEqual(tableParams.pagination, pagination)) {
            update = true;
        }
        let newTableParams = { ...tableParams, pagination: { ...pagination } };
        setTableParams(newTableParams);
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setRows([]); // Clear data when page size changes
        }
        if (update) {
            await fetchDataCallback(newTableParams); // Fetch new data
        }
    };

    const handleFilter = async (filters : any) => {
        let update = false;
        if (!_.isEqual(tableParams.filters, filters)) {
            update = true;
        }
        let newTableParams = { ...tableParams, filters: { ...filters } };
        setTableParams(newTableParams);
        if (update) {
            await fetchDataCallback(newTableParams); // Fetch new data
        }
    }

    const handleSearch = async (filters : any) => {
        let update = false;
        if (!_.isEqual(tableParams.search, filters)) {
            update = true;
        }
        let newTableParams = { ...tableParams, search: { ...filters } };
        setTableParams(newTableParams);
        if (update) {
            await fetchDataCallback(newTableParams); // Fetch new data
        }
    }


    const handleSort = async (sorter : any) => {
        let update = false;
        if (!_.isEqual(tableParams.sorter, sorter)) {
            update = true;
        }
        let newTableParams = { ...tableParams, sorter: { ...sorter } };
        setTableParams(newTableParams);
        if (update) {
            await fetchDataCallback(newTableParams); // Fetch new data
        }
    };


    return { tableParams, handlePagination, handleFilter, handleSearch, handleSort, setTableParams };
};

export default usePagination;
