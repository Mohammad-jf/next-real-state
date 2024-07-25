import BuyResidentialPage from "@/template/BuyResidentialPage";

const Residential = async ({ searchParams }) => {
  // in server component you should write complete url
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });

  const data = await res.json();
  if (data.error) return <h3> مشکلی پیش امده است</h3>;

  let finalData = data.data;
  if (searchParams.category) {
    finalData = finalData.filter(
      (item) => item.category === searchParams.category
    );
  }

  return <BuyResidentialPage data={finalData} />;
};

export default Residential;
