import React from 'react';
import '../style/AboutUs.css'; 

const FlowerShop = () => {
    return (
        <div className="flower-shop">
            <section className="about-section">
                <div className="about-image">
                    <img src="/images/tulpanu.png" alt="Pink Flowers" />
                </div>
                <div className="about-text">
                    <h2>ABOUT OUR SHOP</h2>
                    <p>
                        Our experienced and creative florists are passionate about their craft and
                        take pride in creating stunning arrangements that are tailored to your specific
                        needs and preferences. Whether you're looking for a romantic bouquet, a
                        cheerful centerpiece, or a unique gift, we have you covered.
                    </p>
                    <p>
                        At our flower shop, we are committed to providing exceptional customer
                        service and making your experience with us a delightful one. We invite you to
                        explore our selection of fresh flowers and discover the perfect blooms to
                        brighten up your day. Thank you for choosing our shop as your trusted source
                        for all your floral needs.
                    </p>
                </div>
            </section>

            <section className="fresh-section">
                <div className="fresh-text">
                    <h2>ALWAYS FRESH FLOWERS</h2>
                    <p>
                        Our flowers are carefully arranged by our experienced and skilled florists, who take pride in
                        creating stunning designs that are tailored to your specific needs and preferences. Whether
                        you're looking for a romantic bouquet, a cheerful centerpiece, or a thoughtful gift, we have the
                        perfect blooms for every occasion.At our flower shop, we are committed to providing exceptional customer service 
                        and making your experience with us a delightful one. We invite you to explore our selection of fresh flowers and discover
                        the perfect blooms to brighten up your day. Thank you for choosing our shop as your trusted source for all your floral needs.
                    </p>
                </div>
                <div className="fresh-image">
                    <img src="/images/figpoymusho.png" alt="Purple Flower" />
                </div>
            </section>
        </div>
    );
};

export default FlowerShop;
