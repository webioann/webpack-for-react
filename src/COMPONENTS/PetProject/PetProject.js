import React from 'react'
import pet_img from '../../assets/crypto-2.png'
import './pet-project.scss'

const PetProject = () => {
    return (
        <div className='pet-projects'>

            <div className='pet'>
                <div className='img-wrapper'>
                    <img src={pet_img} alt='pet project'/>
                    <div className='screen'>
                        <div className='button-row'>
                            <button>DEMO</button>
                            <button>CODE</button>
                        </div>
                    </div>
                </div>
                <div className='descr'>
                    <h3></h3>
                    <p>  The application gets users from the fake API "randomuser.me". Implemented filtering, on the clients side, by nationality and gender of the user. The two interface languages ​​are English and Ukrainian. Switch color theme. Statistics are displayed in a custom graph in three implementations - random, increasing and decreasing the number of users of a certain nationality, as well as the ratio of men and women. Pagination on the client side, with an interesting interface. Change the size of the request to the server (three options). Full adaptability of the application. Custom interface design. No third-party libraries.       </p>
                </div>
            </div>

            <div className='pet'>
                <div className='img-wrapper'>
                    <img src={pet_img} alt='pet project'/>
                </div>
                <div className='descr'>
                    <h3></h3>
                    <p>  The application gets users from the fake API "randomuser.me". Implemented filtering, on the clients side, by nationality and gender of the user. The two interface languages ​​are English and Ukrainian. Switch color theme. Statistics are displayed in a custom graph in three implementations - random, increasing and decreasing the number of users of a certain nationality, as well as the ratio of men and women. Pagination on the client side, with an interesting interface. Change the size of the request to the server (three options). Full adaptability of the application. Custom interface design. No third-party libraries.       </p>
                </div>
            </div>

        </div>
    )
}

export default PetProject