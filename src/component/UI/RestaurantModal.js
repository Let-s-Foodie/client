import react from 'react';
import "./RestaurantModal.css";
import Hoc from '../hoc/hoc';
import DetailPage from '../DetailPage/DetailPage';
const RestaurantModal = ({lat,lng,details, onCancle}) => {
    return (
        <Hoc>
            <div className="backdrop" onClick={onCancle} />
            
        
            <div className="modal">
                <div className="content">
                    {details.map((detail) => (
                        <DetailPage 
                            name={detail.name}
                            image={detail.image_url}
                            key={detail.id}
                            lat={lat}
                            lng={lng}
                        />
                    ))}
                </div>
          
            </div>
        </Hoc>
    );
}

export default RestaurantModal;