import React from 'react'
import client1 from './../../../public/img/clients/client-1.png'
import client2 from './../../../public/img/clients/client-2.png'
import client3 from './../../../public/img/clients/client-3.png'
import client4 from './../../../public/img/clients/client-4.png'
import client5 from './../../../public/img/clients/client-5.png'
import client6 from './../../../public/img/clients/client-6.png'
import client7 from './../../../public/img/clients/client-7.png'
import client8 from './../../../public/img/clients/client-8.png'

function ClientList() {
    return (
        <section id="clients" className="wow fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2>Clients</h2>
                    <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                </div>

                <div className="owl-carousel clients-carousel">
                    <img src={client1} alt="" />
                    <img src={client2} alt="" />
                    <img src={client3} alt="" />
                    <img src={client4} alt="" />
                    <img src={client5} alt="" />
                    <img src={client6} alt="" />
                    <img src={client7} alt="" />
                    <img src={client8} alt="" />
                </div>

            </div>
        </section>
    )
}

export default ClientList
