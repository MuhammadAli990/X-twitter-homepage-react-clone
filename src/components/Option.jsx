


function Option(props) {
  const { image, text } = props;
  return (
    <div className="flex items-center gap-4 cursor-pointer  hover:text-gray-300 duration-200">
      <i className={image}></i>
      <p className="text-md font-bold hidden sm:flex">{text}</p>
    </div>
  );
}

export default Option;
