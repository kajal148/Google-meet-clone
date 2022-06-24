import React from 'react';
import Participants from './Participants';
import Footer from './Footer';

const participants = [
    {"id" : 1, "name": "Leanne Graham", 'color': '#0000FF'},
    {"id": 2, "name": "Ervin Howell", 'color': '#008000'},
    {"id": 3, "name": "Clementine Bauch", 'color': '#800080'},
    {"id": 4, "name": "Patricia Lebsack", 'color': '#008000'},
    {"id": 5, "name": "Chelsey Dietrich", 'color': '#FF7F50'},
    {"id": 6, "name": "Kurtis Weissnat", 'color': '#0000FF'},
    {"id": 7, "name": "Glenna Reichert", 'color': '#FF7F50'},
    {"id": 10, "name": "Clementina DuBuque", 'color': '#B22222'}
]

const MainScreen = () => {
    return (
        <div className="wrapper">
          <div className="main-screen">
            <Participants participants={participants} />
          </div>
    
          <div className="footer">
            <Footer/>
          </div>
        </div>
      );
}

export default MainScreen;