type TagProps = {
  value: string;
};

export const Tag = ({ value }: TagProps) => {
  return (
    <div className="bg-gray-800 text-white font-bold p-4 rounded-xl group-hover:bg-white group-hover:text-gray-800">
      {value}
    </div>
  );
};
