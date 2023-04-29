import { Table, Tr, Th, Button, Input, Sort } from './Table.styled';
import { BiSortAlt2 } from 'react-icons/bi';
import { Section } from './Google.styled';
import { Element } from './TableItem';
import { useState, useEffect } from 'react';

export const Users = () => {
  const [users, setUsers] = useState(() => {
    return JSON.parse(window.localStorage.getItem('users')) ?? [];
  });
  const [sort, setSort] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const NewUser = (e) => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    const id = Number(form.id.value);
    const name = form.name.value;
    const email = form.email.value;
    const age = Number(form.age.value);
    setUsers((prev) => [...prev, { id, name, email, age }]);
    e.currentTarget.reset();
  };

  const onDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onSort = (i) => {
    const sortUser = [...users].sort((a, b) => {
      if (sort) {
        if (typeof a[i] === 'string') {
          setSort(!sort);
          return b[i].localeCompare(a[i]);
        }
        setSort(!sort);
        return b[i] - a[i];
      }
      if (typeof a[i] === 'string') {
        setSort(!sort);
        return a[i].localeCompare(b[i]);
      }
      setSort(!sort);
      return a[i] - b[i];
    });
    setUsers(sortUser);
  };

  return (
    <Section>
      <form onSubmit={NewUser}>
        <label>
          Id
          <Input placeholder="Enter id" required name="id" type="number" />
        </label>
        <label>
          Name
          <Input placeholder="Enter name" required name="name" type="text" />
        </label>
        <label>
          Email
          <Input placeholder="Enter email" required name="email" type="email" />
        </label>
        <label>
          Age
          <Input placeholder="Enter age" required name="age" type="number" />
        </label>
        <Button type="submit">Add new user</Button>
      </form>
      <Table>
        <thead>
          <Tr>
            <Th>
              ID
              <Sort onClick={() => onSort('id')}>
                <BiSortAlt2 />
              </Sort>
            </Th>
            <Th>
              NAME
              <Sort onClick={() => onSort('name')}>
                <BiSortAlt2 />
              </Sort>
            </Th>
            <Th>
              EMAIL
              <Sort onClick={() => onSort('email')}>
                <BiSortAlt2 />
              </Sort>
            </Th>
            <Th>
              AGE
              <Sort onClick={() => onSort('age')}>
                <BiSortAlt2 />
              </Sort>
            </Th>
          </Tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <Element
              key={user.id}
              users={users}
              user={user}
              onDelete={onDelete}
              setUser={setUsers}
            />
          ))}
        </tbody>
      </Table>
    </Section>
  );
};
