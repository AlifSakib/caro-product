
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Products from "./components/Products/Products";
function App() {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    
  },
};

  

  const productData = [
    {
      id: 1,
      imageurl:
        "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      name: "A",
      price: 20,
    },
    {
      id: 2,
      imageurl:
        "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      name: "B",
      price: 20,
    },
    {
      id: 3,
      imageurl:
        "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      name: "C",
      price: 20,
    },
    {
      id: 4,
      imageurl:
        "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      name: "D",
      price: 20,
    },
    {
      id: 5,
      imageurl:
        "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      name: "E",
      price: 20,
    },
    {
      id: 6,
      imageurl:
        "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      name: "F",
      price: 20,
    },
    {
      id: 6,
      imageurl:
        "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      name: "F",
      price: 20,
    },
    {
      id: 6,
      imageurl:
        "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      name: "F",
      price: 20,
    },
    {
      id: 6,
      imageurl:
        "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      name: "F",
      price: 20,
    },
  ];

  const product = productData.map(item => <Products item={item}/>)
  
  return (
    <div className="w-9/12 mx-auto ">
      <h1 className="text-center my-16">Poduct Carousel</h1>
      <div>
        <Carousel
          responsive={responsive}
          renderArrowsWhenDisabled
          removeArrowOnDeviceType={['mobile']}
        >
          {product}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
