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
    { original: "/assets/1.1.webp" },
    { original: "/assets/2.2.webp" },
    { original: "/assets/3.3.webp" },
    { original: "/assets/4.4.webp" },
    { original: "/assets/5.5.webp" },
    { original: "/assets/6.6.webp" },
    { original: "/assets/7.7.webp" },
    { original: "/assets/8.8.webp" },
    { original: "/assets/9.9.webp" },
    { original: "/assets/10.10.webp" },
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
