import React, { useRef, useState, useEffect } from "react";
import { Categories } from "../Components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import rtx2080 from "../assets/Img/rtx2080.png";
// import banner2 from "../Assets/Img/TestBanner1.png";
// import banner3 from "../Assets/Img/TestBanner2.png";
// import mainBanner from "../Assets/Img/Mainbanner.png";
import Slider from "react-slick";
import { useAppDispath } from "../redux/store";
import { CartItem, addItem } from "../redux/slices/cartSlice";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

const mainBlockAnimation = {
  hidden: {
    y: 30,
    opacity: 0.2,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Home: React.FC = () => {
  const dispatch = useAppDispath();
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLInputElement | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const onCLickAdd = (item: any) => {
    dispatch(addItem(item));
  };

  const categoriesAndURL = [
    { name: "Видеокарты", url: "gpu" },
    { name: "Процессоры", url: "cpu" },
    { name: "Материнские платы", url: "motherboards" },
    { name: "Оперативная память", url: "ram" },
    { name: "Блоки питания", url: "psu" },
    { name: "Охлаждение", url: "cooling" },
    { name: "HDD", url: "hdd" },
    { name: "SSD", url: "ssd" },
    { name: "Корпуса", url: "cases" },
  ];

  const data = [
    {
      id: "101",
      name: "RTX 3080",
      pic: rtx2080,
      price: 64999,
      link: "/gpu/1",
    },
    {
      id: "100",
      name: "Ryzen 9 5900x",
      pic: "https://www.amd.com/system/files/2022-11/1761310-amd-ryzen-9-7000-series-PIB-angle-1260x709.png",
      price: 50115,
      link: "/cpu/1",
    },
    {
      id: "102",
      name: "Z790 AORUS",
      pic: "https://www.gigabyte.com/Image/1179b2ed6a06bb7f43bd798c948ebf92/Product/32318/webp/1000",
      price: 49990,
      link: "/Motherboards/1",
    },
    {
      id: "103",
      name: "RTX 3080",
      pic: rtx2080,
      price: 64999,
      link: "/GPU/1",
    },
    {
      id: "140",
      name: "RTX 3080",
      pic: rtx2080,
      price: 64999,
      link: "/GPU/1",
    },
    {
      id: "200",
      name: "RTX 3080",
      pic: rtx2080,
      price: 64999,
      link: "/GPU/1",
    },
    {
      id: "106",
      name: "RTX 3080",
      pic: rtx2080,
      price: 64999,
      link: "/GPU/1",
    },
  ];

  const bannerImages = [
    {
      img: "https://cdn.discordapp.com/attachments/950811967742947348/1109552659997933799/Mainbanner.png",
      src: "/Category/GPU/1",
    },
    {
      img: "https://cdn.discordapp.com/attachments/950811967742947348/1109552659997933799/Mainbanner.png",
      src: "/Category/GPU/1",
    },
  ];

  window.scrollTo(0, 0);

  return (
    <>
      <motion.div className="container" initial="hidden" whileInView="visible">
        <motion.div
          variants={mainBlockAnimation}
          className="mainpage-category-menu"
        >
          <div className="category-menu-header">
            <h1>Каталог</h1>
          </div>
          <div className="wrapper">
            <Categories items={categoriesAndURL} />
          </div>
        </motion.div>
        <motion.div
          variants={mainBlockAnimation}
          transition={{ delay: 0.02 }}
          className="mainpage-slider"
        >
          <Slider {...settings}>
            {bannerImages.map((image, index) => (
              <div key={index}>
                <img src={image.img} />
              </div>
            ))}
          </Slider>
        </motion.div>
        <h3 className="title">Популярные товары</h3>
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className="carousel"
        >
          <motion.div
            drag={"x"}
            dragConstraints={{ right: 0, left: -width }}
            className="mainpage-bot-flex"
          >
            {data.map((item, id) => (
              <div key={id} className="mainpage-bot-block-left">
                <Link to={item.link}>{item.name}</Link>
                <img src={item.pic} />
                <div className="category-content__buy__block">
                  <p>{Number(item.price).toLocaleString()}₽</p>
                  <a
                    onClick={() => onCLickAdd(item)}
                    className="category-content__item__button"
                  >
                    В корзину
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
