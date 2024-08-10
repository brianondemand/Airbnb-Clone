"use client";

import React, { FC, useState, useEffect } from "react";
import { Listing } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import ListingCard from "./ListingCard";

interface LoadMoreProps {
  fnArgs?: { [key: string]: string | undefined };
  queryFn: (args: Record<string, string>) => Promise<{
    listings: Listing[];
    nextCursor: null | string;
  }>;
  queryKey: any[];
  favorites: string[];
}

const LoadMore: FC<LoadMoreProps> = ({
  fnArgs,
  queryFn,
  queryKey,
  favorites,
}) => {
  const [page, setPage] = useState(1);
  const [nextCursor, setNextCursor] = useState<string | null>(null);

  const { data, isLoading, isError } = useQuery({
    queryFn: () => queryFn({ ...fnArgs, cursor: nextCursor || "" }),
    queryKey: [...queryKey, page],
  });

  // Use useEffect to handle onSuccess logic
  useEffect(() => {
    if (data) {
      setNextCursor(data.nextCursor);
    }
  }, [data]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {data?.listings.map(
        (
          listing: Listing & {
            reservation?: {
              id: string;
              startDate: Date;
              endDate: Date;
              totalPrice: number;
            };
          }
        ) => {
          const hasFavorited = favorites.includes(listing.id);
          return (
            <ListingCard
              key={listing?.reservation?.id || listing.id}
              data={listing}
              hasFavorited={hasFavorited}
              reservation={listing?.reservation}
            />
          );
        }
      )}
      {isLoading}
      {/* {isError && (
        <p className="text-xl mt-8 text-center font-semibold">
          Something went wrong!
        </p>
      )}
      {nextCursor && (
        <button
          onClick={handleLoadMore}
          className="mt-8 mx-auto block text-xl text-center font-semibold"
        >
          Load More
        </button>
      )} */}
    </>
  );
};

export default LoadMore;
