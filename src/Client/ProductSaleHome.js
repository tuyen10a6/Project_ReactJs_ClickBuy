// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import DataProductSale from './../Data/DataProductSaleHome';
import './../Css/ProductSaleHome.scss';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper';

export default () => {
    // const formattedPrice = price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }); // "1.234.567,89 ₫"
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                DataProductSale.map((item) =>

                    <SwiperSlide key={item.id}>
                        <div className="Product_item">
                            <img src={item.Image} className='Product_item_saleImage' />

                            <div className='Product_itemName'>
                                <h2 > {item.ProductName}</h2>
                            </div>
                            <div className='Price_ProductItemSale'>
                                {/*  Thẻ del dùng để gạch giữa value */}
                                <p className='Price_Sale'>{item.priceSale.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                {item.old_price && <del className='original_price'>{item.old_price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</del>}
                            </div>


                        </div>
                    </SwiperSlide>

                )
            }

        </Swiper>
    );
};