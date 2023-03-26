import { AutoComplete, Avatar, Input, Skeleton, Space, Table, Tag, Popover } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import BreadCrumd from '../components/Global/BreadCrumd'
import ProjectLayout from '../HOCs/ProjectLayout'
import Highlighter from 'react-highlight-words';
import { DeleteFilled, DeleteOutlined, EditOutlined, FileSearchOutlined, SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd/es/radio';

import DOMPurify from 'dompurify';
import { useDispatch, useSelector } from 'react-redux';
import { assignUserProjectAction, deleteProjectAction, getAllProjectAction, getProjectDetail, getUserProjectAction, OpenModalEditAction, removeUserFromProjAction } from '../redux/actions/Home/ProjectActions';
import ModalEdit from '../components/Home/ModalEdit';
import { message, Popconfirm } from 'antd';
import { useNavigate } from 'react-router-dom';
const ProjectManagement = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const { userProject } = useSelector(state => state.projectReducer);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()
    const searchInput = useRef(null);
    const searchRef = useRef(null)
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
            width: '80px',
            ...getColumnSearchProps('id'),
        },
        {
            title: "Project name",
            dataIndex: 'projectName',
            ...getColumnSearchProps('projectName'),
        },
        {
            title: "Category",
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
                // const element = document.createElement('div');
                // element.innerHTML = '<h1>Hello, World!</h1>'; => Another way not using libary
                // const htmlString = element.outerHTML; 
                // console.log(htmlString); // "<div><h1>Hello, World!</h1></div>"
                return <div id={ob.id} style={{ fontSize: '10px', lineHeight: '12px' }}>
                    {plainText.length > 60 ? plainText.slice(0, 60) + '...' : plainText}
                </div>;
            }
        },
        {
            title: "Members",
            dataIndex: 'members',
            render: (text, ob) => {
                return <div className='flex items-center gap-0.5'>
                    {
                        ob.members?.slice(0, 3).map(item => {
                            // take the final of full name
                            const words = item.name.split(' ');
                            const lastWord = words[words.length - 1];
                            return <Popover
                                title='Members'
                                key={item.userId}
                                content={() => {
                                    return <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                        <table class="w-full text-sm text-gray-500  text-center">
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-secondary-dark dark:text-white">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3">
                                                        Id
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Avatar
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Name
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Action
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ob.members?.map(item =>
                                                    <tr class="bg-white border-b  dark:bg-gray-800 dark:text-gray-300" key={item.userId}>
                                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-300">
                                                            {item.userId}
                                                        </th>
                                                        <td class="px-6 py-4">
                                                            <img width={24} className='rounded block mx-auto' src={item.avatar} alt={item.userId} />
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            {item.name}
                                                        </td>
                                                        <td class="px-6 py-4 ">
                                                            <Popconfirm
                                                                title="Delete the task"
                                                                description="Are you sure to delete this task?"
                                                                onConfirm={() => {
                                                                    const payload = {
                                                                        "projectId": ob.id,
                                                                        "userId": item.userId
                                                                    }
                                                                    dispatch(removeUserFromProjAction(payload))
                                                                }}
                                                                // onCancel={cancel}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <button
                                                                    className='text-red-500 hover:text-gray-600 text-lg leading-3 mx-auto block'
                                                                ><DeleteOutlined /></button>
                                                            </Popconfirm>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                }}
                            >
                                <Avatar className='bg-blue-600' size="default" >{lastWord}</Avatar>
                            </Popover>
                        }
                        )
                    }
                    <div>{ob?.members.length > 3 && '...'}</div>
                    {ob.members &&
                        <Popover
                            trigger="click"
                            content={() => {
                                return <AutoComplete
                                    placeholder='Enter name'
                                    style={{ width: '100%' }}
                                    options={userProject?.map(item => {
                                        return { label: item.name, value: item.userId.toString() }
                                    })}
                                    value={searchTerm}
                                    onChange={(term) => setSearchTerm(term)}
                                    onSearch={keyword => {
                                        // debounce search
                                        if (searchRef.current) clearTimeout(searchRef.current)
                                        searchRef.current = setTimeout(() => {
                                            dispatch(getUserProjectAction(keyword));
                                        }, 300);
                                    }}
                                    onSelect={(value, option) => {
                                        setSearchTerm(option.label);
                                        const payload = {
                                            projectId: ob.id,
                                            userId: option?.value
                                        }
                                        dispatch(assignUserProjectAction(payload));
                                    }}
                                />
                            }}
                            title="Add new member">
                            <button className='w-6 h-6 rounded bg-gray-300 dark:text-black'>+</button>
                        </Popover>}
                </div>
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
                <Popover content="Edit project">
                    <button
                        onClick={async () => {
                            await dispatch(OpenModalEditAction);
                            await dispatch(getProjectDetail(obj.id))
                        }}
                        to='/' className='text-blue-600 hover:text-gray-500'><EditOutlined /></button>
                </Popover>
                <Popover content="Delete project">
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={async () => await dispatch(deleteProjectAction(obj.id))}
                        // onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <button className='text-red-500 hover:text-gray-500'><DeleteOutlined /></button>
                    </Popconfirm>
                </Popover>
                <Popover content="View detail">
                    <button
                        onClick={() => {
                            navigate(`/project/detail/${obj.id}`)
                        }}
                        className='text-lime-500 hover:text-gray-500'><FileSearchOutlined /></button>
                </Popover>
            </div>
        },
    ];
    useEffect(() => {
        dispatch(getAllProjectAction())
    }, []);

    const { allProject } = useSelector(state => state.projectReducer);

    const data = allProject
    return (
        <ProjectLayout>
            <BreadCrumd> Projects / Singularity 7.0 / Project Management</BreadCrumd>
            <div className='myTable pt-3 h-screen'>
                <Table columns={columns} dataSource={data} onChange={onChange}
                    scroll={{ y: 415 }}
                    pagination={{
                        pageSize: 10,
                    }}
                    locale={{
                        emptyText: !allProject ? <div className='dark:bg-third-dark'>
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