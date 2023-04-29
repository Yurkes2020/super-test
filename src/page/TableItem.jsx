import { Td, Field, Edit } from '../page/Table.styled';
import { useState } from 'react';

export const Element = ({ user, onDelete, setUser, users }) => {
  const [show, setShow] = useState(true);
  const [editUser, setEditUser] = useState(user);

  const onEdit = (id) => {
    setShow(false);
    document.getElementsByName(id).forEach((item) => (item.disabled = false));
  };

  const onChange = (e) => {
    const value = e.currentTarget.value;
    switch (e.currentTarget.id) {
      case 'name':
        setEditUser((prev) => ({ ...prev, name: value }));
        break;
      case 'email':
        setEditUser((prev) => ({ ...prev, email: value }));
        break;
      case 'age':
        setEditUser((prev) => ({ ...prev, age: value }));
        break;
      default:
        console.log('Sorry');
    }
  };

  const confirmUser = (id) => {
    const newArr = users.map((item) => {
      if (item.id === id) {
        return editUser;
      }
      return item;
    });
    document.getElementsByName(id).forEach((item) => (item.disabled = true));
    setUser(newArr);
    setShow(true);
  };

  return (
    <tr id={editUser.id} key={editUser.id}>
      <Td>
        <Field disabled type="number" value={editUser.id} />
      </Td>
      <Td>
        <Field
          disabled
          id="name"
          name={editUser.id}
          onChange={onChange}
          type="text"
          value={editUser.name}
        />
      </Td>
      <Td>
        <Field
          disabled
          id="email"
          name={editUser.id}
          onChange={onChange}
          type="email"
          value={editUser.email}
        />
      </Td>
      <Td>
        <Field
          disabled
          id="age"
          name={editUser.id}
          onChange={onChange}
          type="number"
          value={editUser.age}
        />
      </Td>
      <Td>
        {show ? (
          <Edit
            id={editUser.id}
            onClick={() => onEdit(editUser.id)}
            type="button"
          >
            Edit
          </Edit>
        ) : (
          <Edit
            onClick={() => confirmUser(editUser.id)}
            id={editUser.id}
            type="button"
          >
            Ok
          </Edit>
        )}
        <Edit
          id={editUser.id}
          onClick={() => onDelete(editUser.id)}
          type="button"
        >
          Delete
        </Edit>
      </Td>
    </tr>
  );
};
