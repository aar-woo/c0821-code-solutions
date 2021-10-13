select "c"."firstName",
       "c"."lastName"
      from "customers" as "c"
      join "rentals" as "r" using ("customerId")
      join "inventory" using ("inventoryId")
      join "films" using ("filmId")
    where "films"."title" = 'Magic Mallrats';
