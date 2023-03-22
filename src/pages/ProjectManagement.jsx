import { Input, Skeleton, Space, Table, Tag } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import BreadCrumd from '../components/Global/BreadCrumd'
import ProjectLayout from '../HOCs/ProjectLayout'
import Highlighter from 'react-highlight-words';
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd/es/radio';
import { NavLink } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjectAction, getProjectDetail, OpenModalEditAction } from '../redux/actions/Home/actions';
import ModalEdit from '../components/Home/ModalEdit';
const ProjectManagement = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const dispatch = useDispatch();
    const onChange = () => { }
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder='Enter a search term'
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <button
                        type="button"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 80,
                        }}
                        className='bg-blue-600 text-white py-1 rounded hover:bg-blue-700'
                    >
                        Search
                    </button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        Close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text, record) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    // search Object.key -> creator.name 
    const getColumnSearchProps2 = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search creator`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        className='bg-blue-600 text-white px-5 mr-1 hover:text-white hover:bg-blue-700'
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => handleReset(clearFilters)}
                        size="small"
                        className='px-5'
                    >
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) => {
            const name = record.creator ? record.creator.name : '';
            return name.toLowerCase().includes(value.toLowerCase());
        },
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text, record) => {
            const name = record.creator ? record.creator.name : '';
            return (
                <Tag color="blue">  <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={name}
                /></Tag>

            );
        },
    });
    const columns = [
        {
            title: "Id",
            dataIndex: 'id',
            sorter: (a, b) => a.id - b.id,
            ...getColumnSearchProps('id'),
        },
        {
            title: "Project name",
            dataIndex: 'projectName',
            ...getColumnSearchProps('projectName'),
        },
        {
            title: "Category name",
            dataIndex: 'categoryName',
            ...getColumnSearchProps('categoryName'),
        },
        {
            title: "Description",
            dataIndex: 'description',
            render: (text, ob) => {
                // convert HTML ===> plain text
                const sanitizedText = DOMPurify.sanitize(text);
                const plainText = new DOMParser().parseFromString(
                    sanitizedText,
                    "text/html"
                ).documentElement.textContent;
                return <div id={ob.id} style={{ fontSize: '10px', lineHeight: '12px' }}>
                    {plainText.length > 60 ? plainText.slice(0, 60) + '...' : plainText}
                </div>;
            }
        },
        {
            title: "Creator",
            dataIndex: 'creator',
            // render: (text, { creator }) => <div key={creator.id}>
            //     <Tag color="blue"> {creator.name}</Tag>
            // </div>,
            ...getColumnSearchProps2('creator.name'),
        },
        {
            title: "Action",
            dataIndex: 'id',
            render: (text, obj) => <div className='flex gap-3 text-lg leading-3 ' key={text}>
                <button
                    onClick={async () => {
                        await dispatch(OpenModalEditAction);
                        await dispatch(getProjectDetail(obj.id))
                    }}
                    to='/' className='text-blue-600 hover:text-blue-700'><EditOutlined /></button>
                <button
                    className='text-red-500 hover:text-red-700'><DeleteOutlined /></button>
            </div>
        },
    ];
    useEffect(() => {
        dispatch(getAllProjectAction)
    }, []);
    const { allProject } = useSelector(state => state.projectReducer);
   
    const data = allProject
    return (
        <ProjectLayout>
            <BreadCrumd> Projects / Singularity 7.0 / Project Management</BreadCrumd>
            <div className='myTable mt-3'>
                <Table columns={columns} dataSource={data} onChange={onChange}
                    scroll={{ y: 415 }}
                    pagination={{
                        pageSize: 10,
                    }}
                    locale={{
                        emptyText: !allProject ? <div>
                            <Skeleton />
                            <Skeleton className='my-3' />
                            <Skeleton />
                        </div> : ''
                    }}
                />
            </div>
            <ModalEdit />
        </ProjectLayout>
    )
}

export default ProjectManagement