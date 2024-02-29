import React from 'react'
import moment from 'moment';
import { useEffect, useState } from 'react';

function Comment() {
    { comment, onLike, onEdit, onDelete }) {
    const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comment.userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    getUser();
}, [comment]);

const handleEdit = () => {
  setIsEditing(true);
  setEditedContent(comment.content);
};

const handleSave = async () => {
  try {
    const res = await fetch(`/api/comment/editComment/${comment._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify({
            content: editedContent,
          }),
        });
        if (res.ok) {
          setIsEditing(false);
          onEdit(comment, editedContent);
        }
      } catch (error) {
        console.log(error.message);
      }

    },
  return (
    <div>
      
    </div>
  )
}

export default Comment
