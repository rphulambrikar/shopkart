import React from 'react'
import "../styles/Home.css"

const products = [
  {
    id: "1",
    title: "Smartphone Pro 12",
    image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202304/untitled_design_87-sixteen_nine.jpg?size=948:533",
    price : 1200,
    button: {
     text: "Buy Now",
      action: "buy_now"
    }
  },
  {
    id: "2",
    title: "Wireless Earbuds",
    image: "https://voicebot.ai/wp-content/uploads/2020/08/galaxy-buds-live.png",
    price : 300,
    button: {
      text: "Buy Now",
      action: "buy_now"
    }
  },
  {
    id: "3",
    title: "4K Ultra HD TV",
    image: "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/2d2e5a64-6a8b-11ea-ac04-8a541dae4315.jpg",
    price : 6000,
    button: {
      text: "Buy Now",
      action: "buy_now"
    }
  },
  {
    id: "4",
    title: "Bluetooth Speaker",
    image: "https://www.popsci.com/wp-content/uploads/2021/06/01/IMG_4431-scaled.jpg?quality=85",
    price : 250,
    button: {
      text: "Buy Now",
      action: "buy_now"
    }
  },
  {
    id: "5",
    title: "Bikes",
    image: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fbig%2Fbajaj%2Fpulsar-n250%2Fbajaj-pulsar-n250.jpg%3Fv%3D9&w=3840&q=75",
    price : 7000,
    button: {
      text: "Buy Now",
      action: "buy_now"
    }
  },
  {
    id: "6",
    title: "Furniture",
    image: "https://www.ulcdn.net/media/furniture-stores/patna/bailey-road/patna-bailey-road-773X413.jpg?1704365790",
    price : 4000,
    button: {
      text: "Buy Now",
      action: "buy_now"
    }
  },
  {
    id: "7",
    title: "Toys and Books",
    image: "https://images.squarespace-cdn.com/content/v1/575afe3707eaa087bd9f0dac/1681850160936-TV63112FZFCVSVB4293E/IMG_7554_jpg.jpg",
    price : 80,
    button: {
      text: "Buy Now",
      action: "buy_now"
    }
  },
  {
    id: "8",
    title: "Fashion",
    image: "https://t4.ftcdn.net/jpg/03/09/86/97/360_F_309869755_IquCHHxF7YABo2odctUGEjMrgVDSM8qV.jpg",
    price : 350,
    button: {
      text: "Buy Now",
      action: "buy_now"
    }
  },
  {
    id: "9",
    title: "Beauty",
    image: "https://media.istockphoto.com/id/487770577/photo/makeup-set-on-table-front-view.jpg?s=612x612&w=0&k=20&c=IS_ZuHCF3N66jhDMwt2s7J_PGWABlpv2ISEAwpJ4JKU=",
    price : 220,
    button: {
      text: "Buy Now",
      action: "buy_now"
    }
  },
  {
    id: "10",
    title: "Computer Accessories",
    image: "https://assets.isu.pub/document-structure/230530104013-516677457fd54e456bfe38a98e2760fe/v1/80d96b2a994829e279f0cc1f44c288eb.jpeg",
    price : 100,
    button: {
      text: "Buy Now",
      action: "buy_now"
    }
  }
];


const Home = () => {

  const handleBuyNow = (product) => {
    sessionStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = '/cart';
  };


  return (
    <div>
      
      <div className="productGrid">
      {products.map((product) => (
        <div key={product.id} className="productBox">
          <img src={product.image} alt={product.title} className="productImage" />
          <div className="productContent">
            <div className="productDetails">
          <h3 className="productTitle">{product.title}</h3>
          <button className="productButton"  onClick={() => handleBuyNow(product)} data-action={product.button.action}>
            {product.button.text}
          </button>
          </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Home 