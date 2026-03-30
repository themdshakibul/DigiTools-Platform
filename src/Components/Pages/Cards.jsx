const Cards = ({ SelectCard }) => {
  return (
    <>
      <section className="mb-30">
        <h2 className="text-3xl font-bold">Your Cards</h2>
        {SelectCard.map((card) => (
          <>
            <div
              key={card.id}
              className="flex flex-col sm:flex-row items-center justify-between mt-10 border border-gray-300 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
                <div className="rounded-full w-fit bg-base-300 border border-gray-400">
                  <img src={card.icon} alt="" className="w-20 p-4" />
                </div>
                <div className="ml-5 flex flex-col gap-3">
                  <h2 className="text-2xl font-bold">{card.name}</h2>
                  <p className="text-xl font-bold">${card.price}</p>
                </div>
              </div>
              <span className="text-xl font-bold text-red-500 cursor-pointer">Remove</span>
            </div>
          </>
        ))}
      </section>
    </>
  );
};

export default Cards;
