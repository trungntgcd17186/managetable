import axios from "axios";

let Url = "https://tablemanage.herokuapp.com/table?";

const fetchData = async (obj: any) => {
  const short = `&short_temp=${obj.short_temp}`;
  const contagion = `&contagion=${obj.contagion}`;
  const emergency = `&emergency=${obj.emergency}`;

  const mileageSurcharge = `&mileage_surcharge=${obj.mileage_surcharge}`;
  const primaryQuote = `&primary_quote=${obj.primary_quote}`;
  const status = `&status=${obj.status}`;

  const shortUrl = obj.short_temp == undefined ? "" : short;
  const contagionUrl = obj.contagion == undefined ? "" : contagion;
  const emergencyUrl = obj.emergency == undefined ? "" : emergency;

  const mileageSurchargeUrl =
    obj.mileage_surcharge == undefined ? "" : mileageSurcharge;

  const primaryQuoteUrl = obj.primary_quote == undefined ? "" : primaryQuote;
  const statusUrl = obj.status == undefined ? "" : status;

  const response = await axios.get(
    Url +
      shortUrl +
      contagionUrl +
      emergencyUrl +
      mileageSurchargeUrl +
      primaryQuoteUrl +
      statusUrl
  );

  return response;
};

export default fetchData;
