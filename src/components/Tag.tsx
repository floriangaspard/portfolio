type TagProps = {
  value: string;
};

export const Tag = ({ value }: TagProps) => {
  return (
    <div className="bg-black text-white font-bold p-4 rounded-xl group-hover:bg-white group-hover:text-black">
      {value}
    </div>
  );
};
