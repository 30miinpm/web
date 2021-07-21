import React from 'react';
import MyBanner from 'src/components/banner';
import MyProductSort from 'src/components/product/sort';
import MyProductWrapper from 'src/components/product/wrapper';
import MyProductItem from 'src/components/product/item';
import MyProductCategory from 'src/components/product/category';

const Home = () => {
    return (
        <>
            <MyBanner />
            <MyProductSort />
            <MyProductWrapper Content={productItems} Sidebar={productFilters} />
        </>
    );
};

export default Home;

const productFilters = () => {
    return (
        <>
            <MyProductCategory />
        </>
    );
};
const productItems = () => {
    const productList = [
        {
            ID: 1,
            image: '/images/product-1.png',
            title: 'محصول یک بلند ترین تکست این محصولات',
            price: '۲۵,۰۰۰',
            category: 'دسته بندی اول',
        },
        {
            ID: 2,
            image: '/images/product-1.png',
            title: 'محصول 2',
            price: '۲۵,۰۰۰',
            category: 'دسته بندی اول',
        },
        {
            ID: 3,
            image: '/images/product-1.png',
            title: 'محصول 3',
            price: '۲۵,۰۰۰',
            category: 'دسته بندی اول',
        },
        {
            ID: 4,
            image: '/images/product-1.png',
            title: 'محصول 4',
            price: '۲۵,۰۰۰',
            category: 'دسته بندی اول',
        },
    ];
    return (
        <>
            {productList.map((item) => (
                <MyProductItem item={item} key={`product-${item}`} />
            ))}
        </>
    );
};
