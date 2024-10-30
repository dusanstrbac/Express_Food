import '../App.css';
import Locations from './Locations';

const LocationList = ({location}) => {
    return (
        <div className="LocationList">
            <Locations location={'Australia'} />
            <Locations location={'Belgium'} />
            <Locations location={'Canada'} />
            <Locations location={'Chile'} />
            <Locations location={'Costa Rica'} />
            <Locations location={'Dominican Republic'} />
            <Locations location={'Ecuador'} />
            <Locations location={'El Salvador'} />
            <Locations location={'France'} />
            <Locations location={'Germany'} />
            <Locations location={'Guatemala'} />
            <Locations location={'Ireland'} />
            <Locations location={'Italy'} />
            <Locations location={'Japan'} />
            <Locations location={'Kenya'} />
            <Locations location={'Luxembourg'} />
            <Locations location={'Mexico'} />
            <Locations location={'Netherlands'} />
            <Locations location={'New Zealand'} />
            <Locations location={'Panama'} />
            <Locations location={'Poland'} />
            <Locations location={'Portugal'} />
            <Locations location={'South Africa'} />
            <Locations location={'Spain'} />
            <Locations location={'Sri Lanka'} />
            <Locations location={'Sweeden'} />
            <Locations location={'Switzerland'} />
            <Locations location={'Taiwan'} />
            <Locations location={'United Kingdom'} />
            <Locations location={'United States'} />

        </div>
    );
};

export default LocationList;