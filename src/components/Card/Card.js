import { useState } from 'react';
import { updateUsers } from '../../service/fetch'
import image from '../../images/picture.png';
import rectangle from '../../images/Rectangle.png';
import ellipse from '../../images/Ellipse.png';
import {
  ListItem,
  Image,
  LogoImage,
  RectangleImg,
  EllipseImg,
  FotoImg,
  Text,
  Button,
} from './Card.styled';


export default function Card({ users }) {

  const { avatar, followers, tweets, following } = users;
const [isFollowing, setIsFollowing] = useState(following);

  const toggleActiveFollow = () => {
    
    if (!isFollowing) {
      users.followers += 1;
    } else {
       users.followers -= 1;
    }

    const followers = users.followers;
    const id = users.id;
    const updateFollowing = !isFollowing;

    updateUsers(id, updateFollowing, followers).then(
      setIsFollowing(!isFollowing)
    );
  };

  return (
    <div>
      <ListItem>
        <LogoImage />
        <Image src={image} alt="Logo" width="308px" height="168px" />
        <RectangleImg src={rectangle} alt="Logo" width="380px" height="13px" />
        <EllipseImg src={ellipse} alt="Logo" width="80px" height="80px" />
        <FotoImg src={`${avatar}`} alt="Logo" width="62px" height="62px" />
        <Text>{`${tweets}`} TWEETS</Text>
        <Text>
          {new Intl.NumberFormat('en-IN').format(`${followers}`)} FOLLOWERS
        </Text>
        {!isFollowing ? (
          <Button
            type="button"
            onClick={toggleActiveFollow}
            style={{ backgroundColor: '#EBD8FF' }}
          >
            FOLLOW
          </Button>
        ) : (
          <Button
            type="button"
            onClick={toggleActiveFollow}
            style={{ backgroundColor: '#5CD3A8' }}
          >
            FOLLOWING
          </Button>
        )}
      </ListItem>
    </div>
  );
}
