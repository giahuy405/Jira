import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteCommentAction, putCommentAction } from "../../redux/actions/Home/Comments";
import { Editor } from "@tinymce/tinymce-react";
import { Modal } from "antd";
import {WarningOutlined} from '@ant-design/icons'
const FeatureComments = (props) => {
  const dispatch = useDispatch();
  const [visibleComments, setVisibleComments] = useState(false);
  const editorRef = useRef(null);
  const { item } = props;
  const [open, setOpen] = useState(false);
  const saveComments = ()=>{
    const value= editorRef.current.getContent();

    setVisibleComments(false)
    dispatch(putCommentAction(value,item));
  }
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div>
      {visibleComments ? (
        <>
          <div className="flex gap-2 mt-3">
            <div>
              <img
                width={30}
                className="rounded-full"
                src={item.user.avatar}
                alt={item.id}
              />
            </div>
            <div>
              <Editor
                name="comment"
                apiKey="an4j8gh14omc9ehdjjqq7byek89ohgr1tyjhurzeqb2k3s3p"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue={item.contentComment}
                init={{
                  height: 150,
                  menubar: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
                // onChange={e=>console.log(e.target.value)}
                // onEditorChange={content => setFieldValue('description', content)}
              />
              <div className="flex gap-2 mt-2">             
                <button className='px-5 py-1  hover:bg-gray-200 rounded text-gray-500 dark:hover:bg-third-dark' onClick={()=>{setVisibleComments(false)}}>Cancel</button>
                <button className="px-5 py-1 bg-blue-600  ml-2 hover:bg-blue-700 text-white rounded" onClick={()=>{
                    saveComments()
                }}>Save</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div key={item.id} className="flex gap-4 mb-4">
          <div>
            <img
              width={30}
              className="rounded-full"
              src={item.user.avatar}
              alt={item.id}
            />
          </div>
          <div>
            <p className="font-semibold mb-1 text-gray-400">{item.user.name}</p>
            <div className="text-sm">
              <div
                dangerouslySetInnerHTML={{ __html: `${item.contentComment}` }}
              />
            </div>
            <div>{}</div>
            <div className="text-gray-400 flex gap-2">
              <div
                className="hover:underline cursor-pointer"
                onClick={() => {
                  setVisibleComments(true);
                }}
              >
                Edit
              </div>
              <div className="commentDots"></div>
              <div
                className="cursor-pointer hover:underline"
                onClick={() => {
                 
                setOpen(true)
                }}
              >
                Delete
              </div>
            </div>
          </div>
        </div>
      )}
      <Modal open={open}  onCancel={handleCancel} footer={null}>
        <div className="flex items-center">
        <WarningOutlined className="text-red-500 text-3xl pr-3 mb-2" />
        <h2 > Delete this comment?</h2>
        </div>
        <h2 className="py-5">Once you delete, it's gone for good.</h2>
        <div className="flex gap-2 justify-end">
            <button className="text-white bg-red-700 p-1 rounded-md px-2 hover:bg-red-500 duration-500" onClick={()=>{
                 dispatch(deleteCommentAction(item.id, item.taskId));
                 setOpen(false)
            }}>Delete</button>
            <button className="hover:bg-gray-300 p-1 px-2 rounded-md duration-500" onClick={()=>{setOpen(false)}}>Cancel</button>
        </div>
      
      </Modal>
    </div>
  );
};

export default FeatureComments;
