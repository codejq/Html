import balcony from './img/balcony1.jpg'
import bathroom from './img/bathroom.jpg'
import bedroom from './img/bedroom.jpg' 
import diningroom from './img/dining room.jpg'
import hall from './img/hall.jpeg'
import kitchen from './img/kitchen.jpg'
import balcony1 from './img/balcony1.jpg'
import livingroom from './img/living room.jpeg'
import bathroom1 from './img/bathroom1.jpg'
import bedroom1 from './img/bedroom1.jpg'
import diningroom1 from './img/dining-room.jpg'
import office from './img/office.jpg'
import restaurant from './img/restaurant.jpg'
import balcony2 from './img/balcony2.jpg'
import bathroom2 from './img/bathroom2.jpg'
import hall1 from './img/hall1.jpeg'
import livingroom1 from './img/living-room1.jpg'
import balcony3 from './img/balcony3.jpg'
import bedroom2 from './img/bedroom2.jpg'
import bathroom3 from './img/bathroom3.jpg'
import livingroom3 from './img/Living-room.jpg'
import kitchen1 from './img/kitchen1.jpg'


function Gallery() {
  return (
    <div>
        <ul className="plist">
          <li><a href="">All</a></li>
          <li><a href="">Bed Room</a></li>
          <li><a href="">Living Room</a></li>
          <li><a href="">Kitchen</a></li>
          <li><a href="">Bath Room</a></li>
          <li><a href="">Restaurant</a></li>
          <li><a href="">Office</a></li>
          <li><a href="">Hall</a></li>
          <li><a href="">Dining Room</a></li>
          <li><a href="">Balcony</a></li>
      </ul>
    <div className="projects">
    <div className="Pitems">
          <img src={balcony} width="300px" height="300px"/>
          <img src={bathroom} width="300px" height="300px"/>
          <img src={bedroom} width="300px" height="300px"/>
          <img src={diningroom} width="300px" height="300px"/>
          <img src={hall} width="300px" height="300px"/>
          <img src={kitchen} width="300px" height="300px"/>
          <img src={balcony1} width="300px" height="300px"/>
          <img src={livingroom} width="300px" height="300px"/>
          <img src={bathroom1} width="300px" height="300px"/>
          <img src={bedroom1} width="300px" height="300px"/>
          <img src={diningroom1} width="300px" height="300px"/>
          <img src={office} width="300px" height="300px"/>
          <img src={restaurant} width="300px" height="300px"/>
          <img src={balcony2} width="300px" height="300px"/>
          <img src={bathroom2} width="300px" height="300px"/>
          <img src={hall1} width="300px" height="300px"/>
          <img src={livingroom1} width="300px" height="300px"/>
          <img src={balcony3} width="300px" height="300px"/>
          <img src={bedroom2} width="300px" height="300px"/>
          <img src={bathroom3} width="300px" height="300px"/>
          <img src={livingroom3} width="300px" height="300px"/>
          <img src={kitchen1} width="300px" height="300px"/>
    </div>
    </div>
    </div>
  );
}
export default Gallery;
