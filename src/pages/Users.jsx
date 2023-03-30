import React, { useEffect,useState,useRef } from "react";
import ProjectLayout from "../HOCs/ProjectLayout";
import { Input, Table,Skeleton,Tooltip,Space,Button } from "antd";
import { SearchOutlined,EditOutlined,DeleteOutlined, } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getInfoUserEdit, getUserListAction, openModalCreateUser, openModalUserEdit, searchUser } from "../redux/actions/Manager/action";
import Highlighter from 'react-highlight-words';
import ModalEditUser from '../components/Manager/ModalEditUser'
import Alerts from "../components/Manager/Alert";
import Swal from "sweetalert2";
import ModalCeateUser from "../components/Manager/ModalCeateUser";
const Users = () => {
  
  //--------------- USE HOOK---------------------
  const dispatch = useDispatch()
  const listUser = useSelector(state=>state.userReducer.listUser)
  useEffect(()=>{
    dispatch(getUserListAction())
  
  },[]);
  //-----------------ONCLICK EDIT----------
  const  handleEditUser =(id)=>{
   dispatch(openModalUserEdit);
   dispatch(getInfoUserEdit(id));
  }
//------------------ONCLICK DELETE----------
const handleDelete =(id)=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
     dispatch(deleteUser(id))
     
    }
  })
}
//------------ONCLICK CREATE USER-------------
const handleCreate=()=>{
  dispatch(openModalCreateUser)
}
//------------SEARCH USER------------
const handleSearchUser = (value)=>{
  const key = value.target.value
  key?dispatch(searchUser(key)) : dispatch(getUserListAction())
}
//------------------SETTING SEARCH------------------
  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      width:100,
      align:"center"
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps('name'),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps('email'),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      ...getColumnSearchProps('Phone Number'),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 150,
      align:"center"
    },
  ];
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  function getColumnSearchProps(dataIndex) {
    return ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
        <div
          style={{
            padding: 8,
          }}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{
              marginBottom: 8,
              display: 'block',
            }} />
          <Space>
            <Button
              className="flex justify-center items-center  "
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined className="pt-1"/>}
              size="small"
              style={{
                width: 90,
              }}
            >
              Search
            </Button>
            <Button
              onClick={() => clearFilters && handleReset(clearFilters)}
              size="small"
              style={{
                width: 90,
              }}
            >
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                close();
              } }
            >
              close
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined
          style={{
            color: filtered ? '#1890ff' : undefined,
          }} />
      ),
      onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      render: (text) => searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''} />
      ) : (
        text
      ),
    });
  }
  return (
    <div >
       <ProjectLayout>
      <div>
    
        <Alerts/>
       
     
        <button className="bg-blue-500 text-white font-medium px-3 py-1 rounded-md hover:bg-blue-700" onClick={()=>{handleCreate()}}>
          Create User
        </button>
        <Input
        onChange={handleSearchUser}
          addonAfter={<SearchOutlined />}
          className="my-5"
          placeholder="Search"
        />
      </div>
      
      {/* <Skeleton/> */}
      <Table columns={columns} dataSource={
        listUser?.map((items)=>({
          key: items.userId,
          avatar: <div className ="flex items-center justify-center" ><img src={items.avatar} alt="#"
          className="w-10"
          style={{borderRadius:"50%"}}
          /></div>  ,
          name: items.name,
          email:items.email,
          phoneNumber:items.phoneNumber,
          action: <div className="flex justify-center">
          <Tooltip title="Edit" color="green">
            <button className="hover:text-gray-500 text-green-500 text-xl mr-5" onClick={()=>{handleEditUser(items.userId)}}><EditOutlined /></button>
          </Tooltip>
          <Tooltip  title="Delete" color="red">
          <button className="text-red-500 hover:text-gray-500 text-xl" onClick={()=>{handleDelete(items.userId)}}><DeleteOutlined /></button>
          </Tooltip>
          </div>
        }))} 
        scroll={{ y:499 }}
        // pagination={false}
        locale={{
          emptyText: !listUser ? <div>
              <Skeleton />
              <Skeleton className='my-3' />
              <Skeleton />
          </div> : ''
      }}
        />
      {/* //------------------MODAL------------------------- */}
      <ModalCeateUser/>
      <ModalEditUser />
    </ProjectLayout>
  
    </div>
  
    
  );
};

export default Users;
