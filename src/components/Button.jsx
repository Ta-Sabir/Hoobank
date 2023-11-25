const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`px-6 py-4 bg-blue-gradient font-poppins font-medium text-primary text-[16px] outline-none rounded-md ${styles}`}
    >
      Get started
    </button>
  );
};

export default Button;
