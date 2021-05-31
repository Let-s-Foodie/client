import React from 'react';




const HashtagDetail = ({detail}) => {
    return (
        <div>
            <div className="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
                <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                    <div className="lg:w-1/2">
                        <div className="h-64 bg-cover lg:rounded-lg lg:h-full" style={{backgroundImage: 'url(' +detail.image_url+')'}}></div>
                    </div>
                    <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
    <h2 className="text-3xl text-gray-800 font-bold">{detail.name}</h2>
                        <p className="mt-4 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>
                        <p className="mt-4 text-gray-600">Rating: {detail.rating}</p>
                        <p className="mt-4 text-gray-600">Phone: {detail.phone}</p>

                        <div className="mt-8">
                            <a href="#" className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Start Now</a>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}


export default HashtagDetail;