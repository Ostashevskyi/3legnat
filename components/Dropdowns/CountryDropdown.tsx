import React from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

const CountryDropdown = ({ label }: { label: string }) => {
  countries.registerLocale(enLocale);

  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });
  return (
    <div className="flex flex-col gap-3 text-neutral_04">
      <label
        htmlFor="country"
        className="leading-3 text-xs font-bold uppercase"
      >
        Country
      </label>
      <select
        name="country"
        defaultValue={"country"}
        className="border border-neutral_04 rounded-md py-2 px-4"
      >
        <option value={"country"} hidden>
          Country
        </option>
        {!!countryArr?.length &&
          countryArr.map(({ label, value }) => (
            <option key={value} value={value} className="">
              {label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CountryDropdown;
