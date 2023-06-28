const Card = (props: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      data-testid="card"
      className={` rounded-sm  lg:mx-6 xl:my-[10.723860589812332vh] lg:my-[11.723860589812332vh] md:my-[10.723860589812332vh] text-justify  !overflow-x-clip xs:mx-4 sm:my-20 xs:my-20   ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
