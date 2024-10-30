import '../App.css';
import Card from './Card';

function InfoCards() {
    return (
        <div className="infoCards">
            <Card 
                source={'BusinessAccount.jpg'}
                title={'Feed your employees'}
                button={'Create business account'}
            />

            <Card 
                source={'AddRestaurant.jpg'}
                title={'Start your business'}
                button={'Add your restaurant'}
            />

            <Card 
                source={'FoodDelivery.jpg'}
                title={'Start working with us'}
                button={'Sign up to deliver'}
            />
        </div>
    );
}

export default InfoCards;

/*
        if (button.innerText === 'Create business account') {
            alert('Usli ste u segment kreiranja biznis naloga');
        }
        else if (button.innerText === 'Add your restaurant') {
            alert('Usli ste u segment dodavanja restorana');
        }
        else if (button.innerText === 'Sign up to delivery') {
            alert('Usli ste u segment zaposljavanja kao dostavljac');
        }

*/