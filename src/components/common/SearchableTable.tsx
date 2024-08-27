import { COLOR } from "@/styles/color"
import { SearchOutlined } from "@ant-design/icons"
import { AutoComplete, Col, Input, Row, Table, Tag } from "antd"
import { useEffect, useState } from "react"

type TableProps = {
    dataSource: any,
    loading: any,
    columns: any,
    size: any,
    ignoreSearchDataIndex: any,
    searchDataIndex?: any,
    rowSelection?: {},
    renderRowSelection?: any,
    renderRowConfig?: any,
    summary?: any,
    components?: any,
    rowClassName?: any,
    pagination?: any,
    onChange?: any,
    footer?: any,
    rowKey?: any,
    expandable?: any
    bordered?: any
    onRow?: any
    onSearch?: any
    onSort?: any
    enableSort?: any
    onFilter?: any
    enableGroup?: any
    enableSearch?: any
    enableDatePicker?: any
    enableColumnFilter?: any
    enableExport?: any
    dateFilter?: any
    groupBy?: any
    rangePickerDefaultValue?: any;
    columnFilterDefaultValue?: any;
    defaultSortUpdatedTimestamp?: boolean;
}


let defaultValue = {
    enableSearch: true,
}

const SearchableTable: React.FC<TableProps> = (props) => {
    let valueProps = Object.assign(defaultValue, props);

    const [dataSource, setDataSource] = useState<any>(props.dataSource);
    const [columns, setColumns] = useState<any>(props.columns);
    const [groupValue, setGroupValue] = useState(props?.groupBy ?? 'null');
    const [searchValue, setSearchValue] = useState('');
    const [searchOptions, setSearchOptions] = useState([]);

    useEffect(() => {
        setDataSource(props.dataSource);
    }, [props.dataSource]);
    
    function getIsLoading() {
        return props.loading;
    }

    function getPagination() {
        if (props.pagination !== undefined) {
            return props.pagination;
        }
        return {
            defaultPageSize: 10,
            hideOnSinglePage: false,
            showSizeChanger: true
        }
    }

    function getBordered() {
        if (props.bordered !== undefined) {
            return props.bordered;
        }
        return true;
    }

    function onSelectSearchOptions(e: any) {
        let data = JSON.parse(e);
        setSearchValue(data.searchText);
        if (props.onSearch) {
            props.onSearch({
                [data.column.dataIndex]: data.searchText
            });
        }
    }

    function onSearch(searchText: any) {
        setSearchValue(searchText);
        if (searchText == "") {
            setSearchOptions([])
            return;
        }
        let options: any = [];

        let columns = props.columns;
        if (props.searchDataIndex) {
            columns = props.searchDataIndex;
        }
        for (let i in columns) {
            let column = columns[i];
            if (column.hasOwnProperty("disableTopBarAction") &&
                column.disableTopBarAction) {
                continue;
            }
            if (column.hasOwnProperty("enableDateFilter") &&
                column.enableDateFilter) {
                continue;
            }
            if (column.hasOwnProperty('calculationSummary') && column.calculationSummary){
                continue;
            }
            options.push({
                label: (
                    <div style={{display: "flex", justifyContent: "flex-start"}}>
                        {searchText} in <Tag style={{marginLeft: 5}}>{column.title}</Tag></div>
                ),
                value: JSON.stringify({searchText, column})
            })
        }
        console.log("options", options);
        setSearchOptions(options)
    }

    function onClear(value: any) {
        if (!value) {
            if (props.onSearch) {
                props.onSearch({});
            }
        }
    }

    function renderSearchTopBar() {
        if (valueProps.enableSearch) {
            return (
                <Col flex={"auto"} style={{marginRight: 10, marginBottom: 10}}>
                    <AutoComplete
                        style={{display: "flex", width: "100%"}}
                        options={searchOptions}
                        onSearch={onSearch}
                        onChange={onClear}
                        value={searchValue}
                        onSelect={onSelectSearchOptions}
                        size="large"
                    >
                        <Input bordered={false} suffix={<SearchOutlined/>}
                               onPressEnter={(e) => console.log(e)}
                               allowClear={true}
                               size="large" placeholder={"Search Here"}
                               style={{
                                   borderRadius: 10,
                                   border: `1px solid #EAEAEA`,
                                   backgroundColor: COLOR.lightGray,
                                   height: 40
                               }}/>
                    </AutoComplete>
                </Col>
            )
        }

    }

    function renderTopBar() {
        return (
            <Row style={{marginTop: 10}}>
                {renderSearchTopBar()}
            </Row>
        )
    }

    return (
        <div>
            {renderTopBar()}
            <Row>
                <Col span={24}>
                    <Table
                        showSorterTooltip={false}
                        style={{marginTop: 5}}
                        rowSelection={props.rowSelection}
                        size={props.size}
                        onRow={props.onRow}
                        loading={getIsLoading()}
                        pagination={getPagination()}
                        bordered={getBordered()}
                        scroll={{x: 'max-content'}}
                        dataSource={dataSource}
                        columns={columns}
                        summary={props.summary}
                        components={props.components}
                        expandable={props.expandable}
                        rowClassName={props.rowClassName}
                        onChange={props.onChange}
                        footer={props.footer}
                        rowKey={groupValue ? (r) => r.key : props.rowKey}
                    />
                </Col>
            </Row>

        </div>

    );
}

export default SearchableTable;
