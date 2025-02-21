const Card2 = ({ children }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">{children}</div>
  );
};

const CardContent = ({ children }) => {
  return <div className="text-gray-900">{children}</div>;
};

export { Card2, CardContent };
