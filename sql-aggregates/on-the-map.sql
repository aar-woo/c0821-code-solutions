select "countries"."name" as "country",
    count("cities".*) as "numberOfCities"
    from "countries"
    join "cities" using ("countryId")
  group by "countryId";
