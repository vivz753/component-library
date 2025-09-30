import clsx from "clsx";

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  images?: string[];
}

const exampleImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTojBf4VJCGR4Z-QxG-7GozKDuWjCst6z6Q&s",
  "https://i.guim.co.uk/img/media/327aa3f0c3b8e40ab03b4ae80319064e401c6fbc/377_133_3542_2834/master/3542.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=34d32522f47e4a67286f9894fc81c863",
];

const smStyle = "w-[300px] h-[300px]";
const mdStyle = "w-[720px] h-[480px]";
const lgStyle = " h-[100vh]";
export const Carousel = ({
  size = "medium",
  images = exampleImages,
}: ButtonProps) => {
  return (
    <div
      className={clsx(
        size === "small" ? smStyle : size === "medium" ? mdStyle : lgStyle,
        "relative flex m-[45px] max-w-full min-h-[20vh]"
      )}>
      <div className="carousel top-0 right-0 bottom-0 left-0  scroll-smooth overflow-x-auto flex snap-x snap-mandatory">
        {images.map((i) => (
          <div
            className={`slide shrink-0 w-full h-full flex items-center justify-center relative`}>
            <img
              alt="animal photo"
              className={`object-contain w-full h-full`}
              src={i}
            />
            <div className="snapper snap-center absolute top-0 left-0  w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};
