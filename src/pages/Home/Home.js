import imgHello from '../../images/welcome.jpg';
import {Image} from './Home.styled'

export default function Home() {
  return (
    <div>
      <Image src={imgHello} alt="Welcome" />
    </div>
  );
}
