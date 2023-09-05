import React from 'react'

const Home = () => {
    return (
        <>
            <h1>Restaurants</h1>
            <section id='products' className='container mt-5'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto'
                                src="https://images.jdmagicbox.com/comp/pune/m3/020pxx20.xx20.181122102920.f2m3/catalogue/domino-s-pizza-kasarwadi-pune-pizza-outlets-pmm4nekvm4.jpg?clr=#002966"
                                alt='Dominos'
                            ></img>
                            <div className='card-body d-flex flex-column'>
                                <h5>Domino's Pizza</h5>
                                <p className='rest_address'> Ground Floor,MG Road Metro Station,1,church-st,Banglore,karnataka 560001</p>
                                <div className='ratings mt-auto'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star-half-o  '></i>
                                    <span id="no_of_reviews">(35 Reviews)</span>
                                </div>
                            </div>

                        </div>

                    </div>
                    

                </div>

            </section>
        </>
    )
}

export default Home
