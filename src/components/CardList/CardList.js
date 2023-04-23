import Card from "components/Card/Card";
import { useState, useEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import { TfiArrowLeft } from 'react-icons/tfi';
import { fetchUsers } from '../../service/fetch';
import {
  List,
  Button,
  GoBackButton,
  LinkButton,
  Span
} from '../CardList/CardList.styled';
// console.log(fetchUsers());


export default function CardList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  // const [loadMoreBtnShown, setLoadMoreBtnShown] = useState(true);
  // const [loading, setLoading] = useState(false);
  // console.log(users);
  const onLoadMoreBtn = () => {
    setPage(page => page + 1);
    // setLoading(true);
  };
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  useEffect(() => {
    // if (users.length < 2) {
    //   setLoadMoreBtnShown(false);
    // }
    (async () => {
      try {
        const data = await fetchUsers(page);
        // console.log(data)
        if (data.length === 0) {
          // setLoading(false);
          return alert('No results');
        }

        if (page === 1) {
          setUsers(data);
        } else {
          setUsers(prevstate => [...prevstate, ...data]);
          // setLoading(false);
        }
      } catch (error) {}
    })();
  }, [page]);

// useEffect(() => {

//   fetchUsers(page).then(data => {
//     // console.log(data)
//     if (data.length === 0) {
//       // setLoading(false);
//       return alert('No results');
//     }


//     if (page === 1) {
//       setUsers(data);
//     } else {
//       setUsers(prevstate => [...prevstate, ...data]);
//       // setLoading(false);
//     }
//     // if (users.length < 3) {
//     //   setLoadMoreBtnShown(false);
//     // }
//   }).catch(error => {
//     console.log(error);
//   });
//   }, [page]);





  return (
    <div>
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
    </div>
  );
}
// && !loading && loadMoreBtnShown &&
