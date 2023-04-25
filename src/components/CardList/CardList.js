import Card from "components/Card/Card";
import { useState, useEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import { TfiArrowLeft } from 'react-icons/tfi';
import { fetchUsers } from '../../service/fetch';
import {
  BoxList,
  List,
  Button,
  GoBackButton,
  LinkButton,
  Span
} from '../CardList/CardList.styled';



export default function CardList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const onLoadMoreBtn = () => {
    setPage(page => page + 1);
      };
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchUsers(page);

        if (data.length === 0) {

          return alert('No results');
        }

        if (page === 1) {
          setUsers(data);
        } else {
          setUsers(prevstate => [...prevstate, ...data]);

        }
      } catch (error) {}
    })();
  }, [page]);

  return (
    <BoxList>
      <LinkButton to={backLinkLocationRef.current}>
        <GoBackButton type="button">
          <TfiArrowLeft></TfiArrowLeft>
          <Span>Go back</Span>
        </GoBackButton>
      </LinkButton>
      <List>
        {users.map(user => (
          <Card key={user.id} users={user} />
        ))}
      </List>

      <Button type="button" onClick={onLoadMoreBtn}>
        Load more
      </Button>
    </BoxList>
  );
}

