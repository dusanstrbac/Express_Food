import '../App.css';

const Locations = ({location}) => {

    const States = document.querySelectorAll('h3');

    States.forEach((state) => {
        state.addEventListener('click', function() {
            console.log(`Kliknuo si na drzavu ${state.innerText}`);
        });
    });

    return (    
        <h3 id="locationCountry">{location}</h3>
    );
}

export default Locations;
