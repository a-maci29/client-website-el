import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../components/navbar';

const ContactPage = () => {
    return(
        <div className="container">
            <NavBar />
            <h1 className="pageTitle">Contact</h1>
            <p className="pageContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus accusantium in voluptates ullam repudiandae officiis tempore quibusdam reiciendis sit harum excepturi labore rerum, natus nisi optio, repellendus culpa amet?

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non sapiente saepe, officia laboriosam perferendis totam doloribus asperiores nemo porro dicta esse consectetur placeat quam iste tempora blanditiis quaerat aliquid ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestias sit eius saepe, neque vero perferendis, tempore facilis, ex numquam provident veritatis esse nesciunt perspiciatis maiores alias facere. Voluptatibus, eaque.
            </p>
        </div>
    )
}

export default ContactPage