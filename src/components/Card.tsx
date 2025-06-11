export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-7 text-gray-800 leading-relaxed bg-gradient-to-br from-gray-50 via-slate-50 to-stone-50 backdrop-blur-sm border border-gray-200/60 shadow-xl shadow-gray-800/5 rounded-2xl hover:cursor-pointer hover:bg-none hover:bg-gray-800 hover:text-white">
      {children}
    </div>
  );
};
