'use client'
interface Props {
  key: any
  title: string;
  image: string;
  items: string[];
  alt?: string
}

export function CarouselCard(props: Props) {
  const {title, image, items, alt} = props;
  return (
    <div className="relative w-full shrink-0">
      <div className="flex justify-center absolute top-[50%] translate-y-[-50%] w-full h-[90%] bg-black/80">
        <div className="flex w-[70%] h-full  flex-col ">
          <h1 className="my-8 max-sm:my-4 mx-auto font-bold text-4xl text-secondary-color">{title}</h1>
        <ul className="flex flex-col gap-1 text-secondary-color text-lg max-sm:gap-0 max-sm:text-sm decoration list-disc">
          {items.slice(0,8).map((item, index) => <li key={`text-idem${index}`}>{item}</li>)}
        </ul>
        </div>
      </div>
      <img className="w-full h-full" src={image} alt={alt} loading="lazy"/>
    </div>
  )
}