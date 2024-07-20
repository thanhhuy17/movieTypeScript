import Card from "./Card";

interface TypeHorizontal {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  heading: string;
  trending: boolean;
  // media_type: "movie" | "tv";
}
const HorizontalListMovie: React.FC<TypeHorizontal> = ({
  data,
  heading,
  trending,
}) => {
  //   const trendingLength = data?.length;

  return (
    <div>
      <div className="container mx-auto px-3 my-10">
        <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white">
          {heading}
        </h2>

        <div>
          <div>
            {data.map((res, index) => {
              return (
                <Card
                  key={res.id}
                  data={res}
                  index={index + 1}
                  trending={trending}
                  //   media_type={media_type}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalListMovie;
