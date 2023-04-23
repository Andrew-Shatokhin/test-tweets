import Card from "components/Card/Card";
import { useState, useEffect } from 'react';
import { List } from '../CardList/CardList.styled';
import { fetchUsers } from '../../service/fetch';
// console.log(fetchUsers());
export default function CardList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  // console.log(users);
  const onLoadMoreBtn = () => {
    setPage(page => page + 1);
    // setLoading(true);
  };
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchUsers(page);
// console.log(data)
        if (data.length === 0) {
          return alert("No results")
        }
        if (page === 1) {
  setUsers(data)
        } else {
          setUsers(prevstate => [...prevstate, ...data]);
}


      } catch (error) {

      }
    })();
  }, [page]);


  return (
    <div>
      <List>
        {users.map(user => (
          <Card key={user.id} users={user} />
        ))}
      </List>
      <button type="button" onClick={onLoadMoreBtn}>
        Load more
      </button>
    </div>
  );
}
