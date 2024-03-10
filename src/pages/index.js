import styles from "@/styles/Home.module.css";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let itemData = [
    { original: "/assets/0.svg" },
    { original: "/assets/1.svg" },
    { original: "/assets/2.svg" },
    { original: "/assets/3.svg" },
    { original: "/assets/4.svg" },
    { original: "/assets/5.svg" },
    { original: "/assets/6.svg" },
    { original: "/assets/7.svg" },
    { original: "/assets/8.svg" },
    { original: "/assets/9.svg" },
    { original: "/assets/10.svg" },
  ];
  return (
    <>
      <section className={styles.section}>
        <h1>
          Thanks For Checking Us Out <span className={styles.h1_span}>🫶</span>
        </h1>
        <div className={styles.paragraph}>
          <p>but, sadly we have discontinued chromeland :(</p>
        </div>
        <div className={`${styles.image_slider_container}`}>
          <Slider {...settings} adaptiveHeight="true">
            {itemData.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.original} height={"auto"} width={400} />
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
}