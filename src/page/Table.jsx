import { Table, Tr, Th, Button, Input, Sort } from './Table.styled';
import { BiSortAlt2 } from 'react-icons/bi';
import { Section } from './Google.styled';
import { Element } from './TableItem';
import { useState, useEffect } from 'react';

export const Users = () => {
  const [users, setUsers] = useState(() => {
    return JSON.parse(window.localStorage.getItem('users')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const NewUser = (e) => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    const id = form.id.value;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    setUsers((prev) => [...prev, { id, name, email, age }]);
    e.currentTarget.reset();
  };

  const onDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onSort = () => {
    const sort = users.sort((a, b) => a.id - b.id);
    setUsers(sort);
  };
  console.log(users);
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
              <Sort onClick={onSort}>
                <BiSortAlt2 />
              </Sort>
            </Th>
            <Th>
              NAME
              <Sort>
                <BiSortAlt2 />
              </Sort>
            </Th>
            <Th>
              EMAIL
              <Sort>
                <BiSortAlt2 />
              </Sort>
            </Th>
            <Th>
              AGE
              <Sort>
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
